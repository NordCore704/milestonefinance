"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Spinner, withAuth, } from "@/exports";
import { useRouter } from "next/navigation";


const DashboardMain = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

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
        <p className="text-2xl text-scheme-purple">Redirecting...</p>
      </div>
    );
  }

  const totalBalance = session?.user?.withdrawableBalance + session?.user?.amountPaid

  return (
    <section className="flex flex-col gap-10 p-3 sm:p-4 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">Welcome!</p>
          <p className="text-2xl font-semibold">{session?.user?.firstName}</p>
          {/* <p className="text-2xl font-semibold">{session?.user?.email}</p> */}
          <p className="">
            Here's a summary of your account. Enjoy your investments!
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <Link
            href={"/dashboard/investment-plans"}
            className="text-white text-center p-2 rounded-md bg-scheme-purple hover:bg-scheme-purpleOne duration-300 transition-colors"
          >
            Choose a plan!
          </Link>
          <Link
            href={"dashboard/withdraw"}
            className="text-white text-center p-2 rounded-md bg-green-500 duration-300 transition-colors hover:bg-green-700"
          >
            Withdraw
          </Link>
          {/* <button
            className="text-white text-center p-2 rounded-md bg-red-500 hover:bg-red-700 duration-300 transition-colors"
            onClick={() => signOut()}
          >
            Logout
          </button> */}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
        {/* === 1 === */}
        <div className="shadow-md rounded-lg p-2 sm:p-3 flex flex-col gap-3 border-b-2 border-scheme-purple">
          <p className="text-lg">Withdrawable Balance</p>
          <p className="">
            0.00 <span className="text-gray-500">USD</span>
          </p>
          <div className="flex flex-row justify-between text-center">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm text-gray-600">total balance</p>
              <p className="text-sm">
              {Number(totalBalance) || "0.00"} <span className="text-gray-500"> USD</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="uppercase text-sm text-gray-600">total profit</p>
              <p className="text-sm">
              {Number(session?.user?.withdrawableBalance) || "0.00"} <span className="text-gray-500"> USD</span>
              </p>
            </div>
          </div>
        </div>
        {/* === 2 === */}
        <div className="shadow-md rounded-lg p-2 sm:p-3 flex flex-col gap-3 border-b-2 border-scheme-darkerGrey">
          <p className="text-lg">Total Active Investment</p>
          <p className="">
          {Number(session?.user?.amonutPaid) || "0.00"}<span className="text-gray-500"> USD</span>
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm text-gray-600">
                this month(pending inclusive)
              </p>
              <p className="text-sm">
              {Number(session?.user?.amountPaid) || "0.00"}<span className="text-gray-500"> USD</span>
              </p>
            </div>
          </div>
        </div>
        {/* ==== 3 ===== */}
        <div className="shadow-md rounded-lg p-2 sm:p-3 flex flex-col gap-5 border-b-2 border-yellow-400">
          <p className="text-lg">Total Withdrawals</p>
          <p className="">
          {Number(session?.user?.withdrawableBalance) || "0.00"}
            <span className="text-gray-500"> USD</span>
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm text-gray-600">this month</p>
              <p className="text-sm">
              {Number(session?.user?.withdrawableBalance) || "0.00"} 
                <span className="text-gray-500"> USD</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardMain;
