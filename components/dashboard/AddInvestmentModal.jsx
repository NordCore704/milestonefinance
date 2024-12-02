"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const AddInvestmentModal = ({ userData, setShowModal, handleChooseNewPlan }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold mb-4">
          {t("addInvestmentModal.currentPlan", { plan: userData?.plan })}
        </h2>
        <p className="mb-6">{t("addInvestmentModal.description")}</p>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => setShowModal(false)}
          >
            {t("addInvestmentModal.noButton")}
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={handleChooseNewPlan}
          >
            {t("addInvestmentModal.yesButton")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInvestmentModal;