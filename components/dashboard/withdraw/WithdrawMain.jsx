"use client";
import React, { useState, useEffect } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useSession } from "next-auth/react";
import { WithdrawalConfirmationModal } from "@/exports";

const WithdrawMain = () => {
  const { data: session } = useSession();
  const [isModalVisible, setModalVisible] = useState(false);
  const [withdrawalAccount, setWithdrawalAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleWithdraw = async (e) => {
    e.preventDefault();
  
    // Validate input fields
    if (!withdrawalAccount || !amount || !address || !paymentMethod) {
      alert("Please fill in all the fields");
      return;
    }
  
    // Call the API to activate withdrawal
    try {
      const response = await fetch("/api/updates/updateWithdrawalCall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: session?.user?.id }), // Pass the user ID from the session
      });
  
      if (response.ok) {
        // Withdrawal activated successfully, proceed with sending the email
        const serviceId = "service_m8th0rc";
        const publicKey = "DPdRzMaNJKGH1ga1W";
        const templateId = "template_12mjyot";
  
        const templateParams = {
          from_name: "Milestone Finance Payments",
          to_name: "Admin",
          message: `Hello admin, a withdrawal request has been submitted by ${session?.user?.firstName} ${session?.user?.secondName} with the address ${address} on the ${paymentMethod} cryptocurrency and the amount they requested is ${amount}. Please review this with the user involved and make valid confirmations.`,
        };
  
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setModalVisible(true);
      } else {
        console.log("Failed to activate withdrawal");
      }
    } catch (error) {
      console.log("Error activating withdrawal:", error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <form
      onSubmit={handleWithdraw}
      className="flex flex-col gap-5 p-2 sm:p-5 justify-start w-full min-h-screen"
    >
      <h3 className="text-2xl font-semibold">Withdraw Funds</h3>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-5 sm:w-[40%]">
          <div className="flex flex-col gap-2">
            <label htmlFor="withdrawal_account" className="text-lg ">
              Withdrawal Account
            </label>
            <select
              name="withdrawal_account"
              id=""
              value={withdrawalAccount}
              onChange={(e) => setWithdrawalAccount(e.target.value)}
              className="bg-transparent border rounded-lg px-2 py-1  w-full"
            >
              <option value="" className="">
                Select Account
              </option>
              <option value="Basic" className="">
                Basic
              </option>
              <option value="Standard" className="">
                Standard
              </option>
              <option value="Premium" className="">
                Premium
              </option>
              <option value="Deluxe" className="">
                Deluxe
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2 sm:w-full">
            <label htmlFor="amount" className="">
              Amount (in USD)
            </label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent border rounded-lg px-2 py-1 outline-none  w-full"
              name="amount"
            />
          </div>
        </div>
        {/* ===== */}
        <div className="flex flex-col gap-5 sm:w-[40%]">
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-transparent border rounded-lg px-2 py-1 outline-none  w-full"
              name="address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="payment_methods" className="">
              Payment Methods
            </label>
            <div className="flex gap-3 flex-wrap">
              <span className="flex gap-1">
                <p className="text-sm text-gray-500">Litecoin</p>
                <input
                  type="radio"
                  name="payment_methods"
                  id=""
                  value={"Litecoin"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </span>
              <span className="flex gap-1">
                <p className="text-sm text-gray-500">Ripple</p>
                <input
                  type="radio"
                  name="payment_methods"
                  id=""
                  value={"Ripple"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </span>

              <span className="flex gap-1">
                <p className="text-sm text-gray-500">Bitcoin</p>
                <input
                  type="radio"
                  name="payment_methods"
                  id=""
                  value={"Bitcoin"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </span>

              <span className="flex gap-1">
                <p className="text-sm text-gray-500">Tether</p>
                <input
                  type="radio"
                  name="payment_methods"
                  id=""
                  value={"Tether"}
                />
              </span>

              <span className="flex gap-1">
                <p className="text-sm text-gray-500">Ethereum</p>
                <input
                  type="radio"
                  name="payment_methods"
                  id=""
                  value={"Ethereum"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-white rounded-md hover:bg-scheme-purpleOne transition-colors duration-300 bg-scheme-purple px-4 p-2"
      >
        Withdraw Now
      </button>
      { isModalVisible && <WithdrawalConfirmationModal isModalVisible={isModalVisible} closeModal={closeModal} />}
    </form>
  );
};

export default WithdrawMain;
