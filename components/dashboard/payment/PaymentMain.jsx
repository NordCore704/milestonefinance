"use client";
import React, { useContext, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import CryptoContext from "@/context/CryptoContext";
import { useSession } from "next-auth/react";
import emailjs from "@emailjs/browser";
import { PaymentConfirmationModal } from "@/exports";

const PaymentMain = () => {
  const { selectedCrypto, amount, selectedPlan } = useContext(CryptoContext);
  const [copySuccess, setCopySuccess] = useState("");
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [planSuccess, setPlanSuccess ] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedCrypto.address).then(
      () => {
        setCopySuccess("Address copied!");
        alert("Address Copied Successfully.");
        setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
      },
      (err) => {
        setCopySuccess("Failed to copy!");
        setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
        console.error("Could not copy text: ", err);
      }
    );
  };
  console.log(session);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_qqmnriv";
    const publicKey = "ZnGdI7CpxUBXeiw0j";
    const templateId = "template_prmg6o1";

    const templateParams = {
      from_name: "Milestone Finance Payments",
      from_email: "",
      to_name: "Admin",
      message: `Hello admin, the purpose of this email is to inform you that ${session?.user?.firstName} ${session?.user?.secondName} has initiated a payment window and is now required to transfer $${amount} to your wallet, note that they chose to pay using ${selectedCrypto.name} and in the ${selectedCrypto.network} Network,also they have chosen the ${selectedPlan} Plan, please confirm this payment and send word to them.`,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setShowModal(true);
    } catch (error) {
      console.log("error sending mail", error);
    }
  };
  const onClose = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/updates/updatePaymentActivationCall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: session?.user?.id }), // Pass the user ID from the session
      });
      if (!response.ok) throw new Error("Failed to activate payment");
      setShowModal(false)
      setPlanSuccess(true)
    } catch (error) {
      console.log("Error activating payment:", error);
    }
   
  }

  return (
    <section className="flex flex-col gap-3 p-3 sm:p-4 min-h-screen items-center">
      <div className="shadow-md rounded-xl px-3 py-5 sm:px-4 sm:py-5 flex flex-col gap-5">
        <p className="bg-yellow-400 text-white px-2 py-1 self-start rounded-lg font-semibold">
          Your payment window
        </p>
        <p className="">
          You are to make payment of{" "}
          <span className="font-semibold">${amount}</span> using the selected
          cryptocurrency
        </p>
        <p className="sm:text-2xl text-[10px] font-semibold text-wrap">
          {selectedCrypto.address}
        </p>
        <p className="uppercase">
          {selectedCrypto.name} <span className="capitalize">Address:</span>
        </p>
        <div className="flex border rounded-lg justify-between">
          <p className="p-2 text-[10px] sm:text-base ">
            {selectedCrypto.address}
          </p>
          <button
            className="border p-2 hover:bg-gray-200 duration-300 transition-colors"
            onClick={copyToClipboard}
          >
            <FaCopy />
          </button>
        </div>
        <p className="">
          Network Type:{" "}
          <span className="uppercase">{selectedCrypto.network}</span>
        </p>
        <button
          className="rounded-lg bg-scheme-purple text-white p-2 hover:bg-scheme-purpleOne duration-300 transition-colors lg:w-[60%] self-start"
          onClick={handleSubmit}
        >
          Submit Payment
        </button>
        <PaymentConfirmationModal showModal={showModal} onClose={onClose}/>
      </div>
      {planSuccess && (<div className="shadow-md rounded-xl px-3 py-5 sm:px-4 sm:py-5 flex flex-col gap-1">
        <p className="text-green-500">
          Congratulations, you have just confirmed a payment of ${amount} for the {selectedPlan} Plan, your investment will be activated once confirmed on our end
        </p>
        <p className="text-green-500">Thanks for making this leap with us!</p>
      </div>)}
    </section>
  );
};

export default PaymentMain;
