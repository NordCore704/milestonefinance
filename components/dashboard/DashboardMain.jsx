"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Spinner, withAuth, AddInvestmentModal } from "@/exports";
import { useRouter } from "next/navigation";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { useTranslation } from "react-i18next";

const DashboardMain = () => {
  const { t } = useTranslation();
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);
  const [showModal, setShowModal] = useState(false);

  const {
    data: userData,
    error,
    isLoading,
  } = useSWR(
    session?.user?.id
      ? `/api/users/getUserWithProfitUpdate/${session.user.id}`
      : null,
    fetcher
  );

  // Redirect if not authenticated or not an admin
  if (status === "loading") {
    return <Spinner />;
  }

  if (!session) {
    if (typeof window !== "undefined") {
      router.push("/auth/login");
    }
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl text-scheme-purple">{t("Redirecting...")}</p>
      </div>
    );
  }
  console.log(userData);

  const totalProfitWithdrawn = userData?.withdrawalHistory.reduce(
    (total, entry) => total + (entry.profitWithdrawn || 0),
    0
  );

  const totalBalance =
    Number(userData?.totalProfit) + Number(userData?.amountPaid);

  const totalWithdrawn = Number(userData?.totalWithdrawals) + totalProfitWithdrawn;

  console.log(totalProfitWithdrawn, totalWithdrawn);

  const plans = {
    Basic: t("Basic"),
    Standard: t("Standard"),
    Premium: t("Premium"),
    Deluxe: t("Deluxe"),
  };

  const planColors = {
    [t('Basic')]: "bg-scheme-purple",
    [t('Standard')]: "bg-blue-400",
    [t('Premium')]: "bg-orange-400",
    [t('Deluxe')]: "bg-red-500",
  };


  const translatedPlan = t(userData?.plan)
  const backgroundColor = planColors[translatedPlan] || "bg-scheme-purple";

  const handleChooseNewPlan = () => {
    setShowModal(false);
    router.push("/dashboard/investment-plans");
  };

  return (
    <section className="flex flex-col gap-10 p-3 sm:p-4 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">{t("welcome")}</p>
          <p className="text-2xl font-semibold">{session?.user?.firstName}</p>
          <p className="">{t("summary")}</p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          {session.user?.plan === plans[userData?.plan] ? (
            <button
              className={`text-white text-center p-2 rounded-md ${backgroundColor} duration-300 transition-colors flex gap-1 hover:bg-gray-500`}
              onClick={() => setShowModal(true)}
            >
              {userData?.plan} <p>{t("Plan")}</p>
            </button>
          ) : (
            <Link
              href={"/dashboard/investment-plans"}
              className="text-white text-center p-2 rounded-md bg-scheme-purple hover:bg-scheme-purpleOne duration-300 transition-colors"
            >
              {t("ChoosePlan!")}
            </Link>
          )}

          <Link
            className="text-white text-center p-2 rounded-md bg-green-500 duration-300 transition-colors hover:bg-green-700 disabled:bg-green-300"
            href={"dashboard/withdraw"}
          >
            {t("withdraw")}
          </Link>
        </div>
      </div>

      {/* ==== modal ==== */}

      {showModal && (
        <AddInvestmentModal
          setShowModal={setShowModal}
          userData={userData}
          handleChooseNewPlan={handleChooseNewPlan}
        />
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
        {/* === 1 === */}
        <div className="shadow-md rounded-lg p-2 sm:p-3 flex flex-col gap-3 border-b-2 border-scheme-purple">
          <p className="text-lg">{t("withdrawableBalance")}</p>
          <p className="">
            {Number(userData?.totalProfit).toFixed(2) || "0.00"}
            <span className="text-gray-500"> USD</span>
          </p>
          <div className="flex flex-row justify-between text-center">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm text-gray-600">{t("totalBalance")}</p>
              <p className="text-sm">
                {Number(totalBalance) || "0.00"}{" "}
                <span className="text-gray-500"> USD</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="uppercase text-sm text-gray-600">{t("totalProfit")}</p>
              <p className="text-sm">
                {Number(userData?.totalProfit).toFixed(2) || "0.00"}{" "}
                <span className="text-gray-500"> USD</span>
              </p>
            </div>
          </div>
        </div>
        {/* === 2 === */}
        <div className="shadow-md rounded-lg p-2 sm:p-3 flex flex-col gap-3 border-b-2 border-scheme-darkerGrey">
          <p className="text-lg">{t("totalActiveInvestment")}</p>
          <p className="">
            {Number(userData?.amountPaid) || "0.00"}
            <span className="text-gray-500"> USD</span>
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm text-gray-600">
                {t("thisMonth")}
              </p>
              <p className="text-sm">
                {Number(userData?.amountPaid) || "0.00"}
                <span className="text-gray-500"> USD</span>
              </p>
            </div>
          </div>
        </div>
        {/* ==== 3 ===== */}
        <div className="shadow-md rounded-lg p-2 sm:p-3 flex flex-col gap-5 border-b-2 border-yellow-400">
          <p className="text-lg">{t("totalWithdrawals")}</p>
          <p className="">
            {totalProfitWithdrawn || "0.00"}
            <span className="text-gray-500"> USD</span>
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm text-gray-600">{t("thisMonthNoPending")}</p>
              <p className="text-sm">
                {totalWithdrawn || "0.00"}
                <span className="text-gray-500"> USD</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <aside className=" sm:w-[40%] flex flex-col gap-5">
        <h4 className="font-semibold text-lg">{t("investmentHistory")}</h4>
        <Link
          className="bg-gray-200 p-2 rounded-md transition-colors duration-300 hover:text-orange-400 text-green-700 "
          href={"/dashboard/history"}
        >
          {t("viewAll")}
        </Link>
      </aside>
      <div className="">
        <Link
          href={"/dashboard/editProfile"}
          className="font-semibold text-lg hover:text-scheme-purple duration-300 transition-colors"
        >
          {t("changePassword")}
        </Link>
      </div>
    </section>
  );
};

export default DashboardMain;