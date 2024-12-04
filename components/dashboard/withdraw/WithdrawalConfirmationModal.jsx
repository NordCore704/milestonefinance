"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const WithdrawalConfirmationModal = ({ isModalVisible, closeModal }) => {
  const { t } = useTranslation();

  if (!isModalVisible) return null; // Modal is hidden if not visible

  return (
    <div className="fixed inset-0 z-[100000] bg-gray-600/25 flex items-center justify-center">
      <div className="flex flex-col gap-3 bg-white p-4 shadow-md rounded-xl w-[95%] sm:w-[80%] lg:w-[35%] text-center border-b-2 border-yellow-500">
        <p className="text-gray-700 text-lg">
          {t("withdrawalModal.message")}
        </p>
        <button
          onClick={closeModal}
          className="bg-scheme-purple text-white px-4 py-2 rounded-md hover:bg-scheme-purpleOne transition-colors duration-300 self-center"
        >
          {t("withdrawalModal.closeButton")}
        </button>
      </div>
    </div>
  );
};

export default WithdrawalConfirmationModal;