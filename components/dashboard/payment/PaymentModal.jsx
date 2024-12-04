"use client";
import CryptoContext from "@/context/CryptoContext";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";  // Importing the useTranslation hook

const PaymentConfirmationModal = ({ showModal, onClose }) => {
  const { selectedCrypto, amount, selectedPlan } = useContext(CryptoContext);
  const { data: session, status } = useSession();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  const { t } = useTranslation();  // Using useTranslation hook to access translations

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
  }, [showModal]);

  return (
    showModal && (
      <div className="p-2 sm:p-3 md:p-4 lg:p-5 fixed top-0 left-0 w-full h-screen z-[100000] bg-gray-600/25 flex flex-col justify-center items-center">
        <div className="self-center flex flex-col gap-3 bg-white p-2 sm:p-4 shadow-md rounded-xl sm:w-[80%] w-[95%] lg:w-[40%] border-b-2 border-yellow-500">
          <p className="text-center">
            {t("paymentConfirmationModal.paymentMessage", {
              amount: amount,
              selectedCrypto: selectedCrypto.name,
              selectedPlan: selectedPlan,
              network: selectedCrypto.network
            })}
          </p>
          <p className="text-center animate-pulse text-red-600 duration-100">
            {t("paymentConfirmationModal.timeRemaining", {
              minutes: Math.floor(timeLeft / 60),
              seconds: String(timeLeft % 60).padStart(2, '0')
            })}
          </p>
          <button
            className="rounded-lg bg-scheme-purple text-white p-2 hover:bg-scheme-purpleOne duration-300 transition-colors self-center sm:w-48 w-28"
            onClick={onClose}
          >
            {t("paymentConfirmationModal.confirmButton")}
          </button>
        </div>
      </div>
    )
  );
};

export default PaymentConfirmationModal;