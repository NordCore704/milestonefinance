"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const PlansGrid = ({ handlePlanSelection, selectedPlan, handleAmountChange, amount }) => {
  const { t } = useTranslation(); // `t` function for translations

  return (
    <figure className="flex flex-col w-full">
      <h4 className="text-lg">{t("plansGrid.selectPackage")}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        {/* Basic Plan */}
        <button
          className={`rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors justify-between ${
            selectedPlan === "Basic" && "bg-gray-300"
          }`}
          onClick={() => handlePlanSelection("Basic")}
        >
          <div className="flex justify-between gap-1">
            <div className="flex-col flex gap-1">
              <h4 className="font-semibold text-lg">{t("plansGrid.plans.basic.title")}</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                {t("plansGrid.plans.basic.description")}
              </p>
            </div>
            <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">
              {t("plansGrid.plans.basic.price")}
            </p>
          </div>
          <p className="font-semibold text-3xl flex gap-2 items-end">
            {t("plansGrid.plans.basic.roi")}
            <span className="text-base uppercase font-normal text-gray-600">roi</span>
          </p>
        </button>

        {/* Standard Plan */}
        <button
          className={`rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors justify-between ${
            selectedPlan === "Standard" && "bg-gray-300"
          }`}
          onClick={() => handlePlanSelection("Standard")}
        >
          <div className="flex justify-between gap-1">
            <div className="flex-col flex gap-1">
              <h4 className="font-semibold text-lg">{t("plansGrid.plans.standard.title")}</h4>
              <p className="sm:text-sm text-xs text-gray-600">
                {t("plansGrid.plans.standard.description")}
              </p>
            </div>
            <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">
              {t("plansGrid.plans.standard.price")}
            </p>
          </div>
          <p className="font-semibold text-3xl flex gap-2 items-end">
            {t("plansGrid.plans.standard.roi")}
            <span className="text-base uppercase font-normal text-gray-600">roi</span>
          </p>
        </button>

        {/* Premium Plan */}
        <button
          className={`rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors ${
            selectedPlan === "Premium" && "bg-gray-300"
          }`}
          onClick={() => handlePlanSelection("Premium")}
        >
          <div className="flex justify-between gap-1">
            <div className="flex-col flex gap-1">
              <h4 className="font-semibold text-lg">{t("plansGrid.plans.premium.title")}</h4>
              <p className="sm:text-sm text-xs text-gray-600">
                {t("plansGrid.plans.premium.description")}
              </p>
            </div>
            <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">
              {t("plansGrid.plans.premium.price")}
            </p>
          </div>
          <p className="font-semibold text-3xl flex gap-2 items-end">
            {t("plansGrid.plans.premium.roi")} 
            <span className="text-base uppercase font-normal text-gray-600">roi</span>
          </p>
        </button>

        {/* Deluxe Plan */}
        <button
          className={`rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors ${
            selectedPlan === "Deluxe" && "bg-gray-300"
          }`}
          onClick={() => handlePlanSelection("Deluxe")}
        >
          <div className="flex justify-between gap-1">
            <div className="flex-col flex gap-1">
              <h4 className="font-semibold text-lg">{t("plansGrid.plans.deluxe.title")}</h4>
              <p className="sm:text-sm text-xs text-gray-600">
                {t("plansGrid.plans.deluxe.description")}
              </p>
            </div>
            <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">
              {t("plansGrid.plans.deluxe.price")}
            </p>
          </div>
          <p className="font-semibold text-3xl flex gap-2 items-end">
            {t("plansGrid.plans.deluxe.roi")}
            <span className="text-base uppercase font-normal text-gray-600">roi</span>
          </p>
        </button>
      </div>

      {/* Amount Input */}
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="amount" className="">
          {t("plansGrid.enterAmount")}
        </label>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder={t("plansGrid.amountPlaceholder")}
          className="border border-scheme-purple rounded-xl outline-none p-2"
        />
      </div>
    </figure>
  );
};

export default PlansGrid;