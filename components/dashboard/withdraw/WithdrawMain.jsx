"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useSession } from "next-auth/react";
import { WithdrawalConfirmationModal } from "@/exports";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { Spinner } from "@/exports";
import { useTranslation } from "react-i18next";

const WithdrawMain = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const [isModalVisible, setModalVisible] = useState(false);
  const [withdrawalAccount, setWithdrawalAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const { data, error } = useSWR(
    `/api/users/getUser/${session?.user?.id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setWithdrawalAccount(data?.plan || "");
    }
  }, [data]);

  const handleWithdraw = async (e) => {
    e.preventDefault();

    if (!withdrawalAccount || !amount || !address || !paymentMethod) {
      alert(t("withdrawal.errorMessage"));
      return;
    }

    try {
      const response = await fetch("/api/updates/updateWithdrawalCall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: session?.user?.id }),
      });

      if (response.ok) {
        const serviceId = "service_qqmnriv";
        const publicKey = "ZnGdI7CpxUBXeiw0J";
        const templateId = "template_prmg6o1";

        const templateParams = {
          from_name: "Milestone Finance Payments",
          to_name: "Admin",
          message: `Hello admin, a withdrawal request has been submitted by ${session?.user?.firstName} ${session?.user?.secondName} with the address ${address} on the ${paymentMethod} cryptocurrency and the amount they requested is $${amount}. Please review this with the user involved and make valid confirmations.`,
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setModalVisible(true);
      } else {
        console.log(t("withdrawal.errorActivation"));
      }
    } catch (error) {
      console.log(t("withdrawal.errorGeneral"), error);
    }
  };

  const closeModal = () => setModalVisible(false);

  if (!data && !error) return <Spinner />;

  return (
    <form
      onSubmit={handleWithdraw}
      className="flex flex-col gap-5 p-2 sm:p-5 justify-start w-full min-h-screen"
    >
      <h3 className="text-2xl font-semibold">{t("withdrawal.header")}</h3>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-5 sm:w-[40%]">
          <div className="flex flex-col gap-2">
            <label htmlFor="withdrawal_account" className="text-lg ">
              {t("withdrawal.withdrawalAccount")}
            </label>
            <select
              name="withdrawal_account"
              id=""
              value={withdrawalAccount}
              onChange={(e) => setWithdrawalAccount(e.target.value)}
              className="bg-transparent border rounded-lg px-2 py-1 w-full"
            >
              <option value="" className="">
                {t("withdrawal.selectAccount")}
              </option>
              {["Basic", "Standard", "Premium", "Deluxe"].map((plan) => (
                <option value={plan} key={plan}>
                  {t(`withdrawal.plan.${plan.toLowerCase()}`)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 sm:w-full">
            <label htmlFor="amount" className="">
              {t("withdrawal.amountLabel")}
            </label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent border rounded-lg px-2 py-1 outline-none w-full"
              name="amount"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:w-[40%]">
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="">
              {t("withdrawal.addressLabel")}
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-transparent border rounded-lg px-2 py-1 outline-none w-full"
              name="address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="payment_methods" className="">
              {t("withdrawal.paymentMethodLabel")}
            </label>
            <div className="flex gap-3 flex-wrap">
              {["Litecoin", "Ripple", "Bitcoin", "Tether", "Ethereum"].map(
                (method) => (
                  <span className="flex gap-1" key={method}>
                    <p className="text-sm text-gray-500">
                      {t(`withdrawal.paymentMethod.${method.toLowerCase()}`)}
                    </p>
                    <input
                      type="radio"
                      name="payment_methods"
                      value={method}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-white rounded-md hover:bg-scheme-purpleOne transition-colors duration-300 bg-scheme-purple px-4 p-2"
      >
        {t("withdrawal.submitButton")}
      </button>
      {isModalVisible && (
        <WithdrawalConfirmationModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
      )}
    </form>
  );
};

export default WithdrawMain;