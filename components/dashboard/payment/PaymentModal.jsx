"use client";
import CryptoContext from "@/context/CryptoContext";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";

const PaymentConfirmationModal = ({ showModal, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const { selectedCrypto, amount } = useContext(CryptoContext);
  const { data: session, status } = useSession();

  useEffect(() => {
    let interval;
    if (showModal) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            return 0; // Timer stops at 0, but the modal stays open
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [showModal, onClose]);

  return (
    showModal && (
      <div className="p-2 sm:p-3 md:p-4 lg:p-5 fixed top-0 left-0 w-full h-screen z-[100000] bg-gray-600/25 flex flex-col justify-center items-center ">
        <div className="self-center flex flex-col gap-3 bg-white p-2 sm:p-4 shadow-md rounded-xl sm:w-[80%] w-[95%] lg:w-[40%] border-b-2 border-yellow-500">
          <p className="text-center">
            You have initiated a payment of {amount} {selectedCrypto.name} (
            {selectedCrypto.network}) for the {session?.user?.plan} plan. Please
            confirm the transfer in your CEX/DEX and click the confirmation
            button below.
          </p>
          <p className="text-center animate-pulse text-red-600 duration-100">
            Time remaining: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
          </p>
          <button
            className="rounded-lg bg-scheme-purple text-white p-2 hover:bg-scheme-purpleOne duration-300 transition-colors self-center sm:w-48 w-28"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default PaymentConfirmationModal;
