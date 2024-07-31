"use client";
import React, { useContext } from "react";


const PlansGrid = ({ handlePlanSelection, selectedPlan, handleAmountChange, amount }) => {
  return (
    <figure className="flex flex-col w-full">
      <h4 className="text-lg">Select Package</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        <button
          className={`rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors justify-between ${ selectedPlan === 'Basic' && 'bg-gray-300' }`}
          onClick={() => handlePlanSelection("Basic")}
        >
          <div className="flex justify-between gap-1">
            <div className="flex-col flex gap-1">
              <h4 className="font-semibold text-lg">Basic Plan</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Up to 5 securities
              </p>
            </div>
            <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">
              $5000
            </p>
          </div>
          <p className="font-semibold text-3xl">
            +2.5%
            <span className="text-sm text-gray-600 font-medium">
              {" "}
              ROI
            </span>
          </p>
        </button>
        <button className={`rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors justify-between ${ selectedPlan === 'Standard' && 'bg-gray-300' }`}  onClick={() => handlePlanSelection('Standard')} 
                    >
          <div className="flex justify-between gap-1">
            <div className="flex-col flex gap-1">
              <h4 className="font-semibold text-lg ">Standard Plan</h4>
              <p className="sm:text-sm text-xs text-gray-600">
                Up to 10 securities
              </p>
            </div>
            <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">
              $50,000
            </p>
          </div>
          <p className="font-semibold text-3xl">
            +3.5%
            <span className="text-sm text-gray-600 font-medium">
              {" "}
              ROI
            </span>
          </p>
        </button>
        <button className={`rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors ${ selectedPlan === 'Premium' && 'bg-gray-300' }`}  onClick={() => handlePlanSelection('Premium')} 
                    >
          <div className="flex justify-between gap-1">
            <div className="flex-col flex gap-1">
              <h4 className="font-semibold text-lg">Premium Plan</h4>
              <p className="sm:text-sm text-xs text-gray-600">
                Up to 20 securities
              </p>
            </div>
            <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">
              $250,000
            </p>
          </div>
          <p className="font-semibold text-3xl">
            +5%
            <span className="text-sm text-gray-600 font-medium">
              {" "}
              ROI
            </span>
          </p>
        </button>
        <button className={`rounded-xl text-left p-3 shadow-md flex flex-col gap-5 hover:bg-gray-200 duration-300 transition-colors ${ selectedPlan === 'Deluxe' && 'bg-gray-300' }`}  onClick={() => handlePlanSelection('Deluxe')} 
                    >
          <div className="flex justify-between gap-1">
            <div className="flex-col flex gap-1">
              <h4 className="font-semibold text-lg">Deluxe Plan</h4>
              <p className="sm:text-sm text-xs text-gray-600">
                Up to 50 securities
              </p>
            </div>
            <p className="p-1 border self-start rounded-2xl font-semibold sm:text-sm text-xs text-center ">
              $500K - $1M
            </p>
          </div>
          <p className="font-semibold text-3xl">
            +10%
            <span className="text-sm text-gray-600 font-medium">
              {" "}
              ROI
            </span>
          </p>
        </button>
      </div>

      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="amount" className="">
          Enter Amount
        </label>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter Amount"
          className="border border-scheme-purple rounded-xl outline-none p-2"
        />
      </div>
    </figure>
  );
};

export default PlansGrid;
