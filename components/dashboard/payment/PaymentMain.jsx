'use client'
import React, { useContext, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import CryptoContext from "@/context/CryptoContext";

const PaymentMain = () => {
  const { selectedCrypto, selectedPlan, amount } = useContext(CryptoContext);
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedCrypto.address).then(
      () => {
        setCopySuccess("Address copied!");
        alert(
          "Address Copied Successfully."
        );
        setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
      },
      (err) => {
        setCopySuccess("Failed to copy!");
        setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <section className="flex flex-col gap-3 p-3 sm:p-4">
      <div className="shadow-md rounded-xl px-3 py-5 sm:px-4 sm:py-5 flex flex-col gap-5">
        <p className="bg-yellow-400 text-white px-2 py-1 self-start rounded-lg font-semibold">
          Your payment window
        </p>
        <p className="">
          You are to make payment of{" "}
          <span className="font-semibold">${amount}</span> using the selected
          cryptocurrency
        </p>
        <p className="text-2xl font-semibold">{selectedCrypto.address}</p>
        <p className="uppercase">
          {selectedCrypto.name} <span className="capitalize">Address:</span>
        </p>
        <div className="flex border rounded-lg justify-between">
          <p className="p-2">{selectedCrypto.address}</p>
          <button className="border p-2 hover:bg-gray-200 duration-300 transition-colors" onClick={copyToClipboard}>
            <FaCopy />
          </button>
        </div>
        <p className="">
          Network Type:{" "}
          <span className="uppercase">{selectedCrypto.network}</span>
        </p>
        {/* <button className="rounded-lg bg-scheme-purple text-white p-2 hover:bg-scheme-purpleOne duration-300 transition-colors lg:w-[70%] self-start">
        Submit Payment
      </button> */}
      </div>
    </section>
  );
};

export default PaymentMain;
