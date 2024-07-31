"use client";
import {
  binance,
  bitcoin,
  ethereum,
  litecoin,
  ripple,
  solana,
  tether,
  ton,
} from "@/exports/image-exports";
import { PlansGrid, CryptoGrid } from "@/exports";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import CryptoContext from "@/context/CryptoContext";

const InvestmentPlansMain = () => {
  const { setSelectedCrypto, setSelectedPlan, setAmount } =
    useContext(CryptoContext);

  const [selectedCrypto, setSelectedCryptoState] = useState(null);
  const [selectedPlan, setSelectedPlanState] = useState(null);
  const [amount, setAmountState] = useState("");

  const router = useRouter();

  const handleCryptoSelection = (crypto) => {
    setSelectedCryptoState(crypto);
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlanState(plan);
  };

  const handleAmountChange = (e) => {
    setAmountState(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedCrypto && selectedPlan && amount) {
      setSelectedCrypto(selectedCrypto);
      setSelectedPlan(selectedPlan);
      setAmount(amount);
      router.push("/dashboard/investment-plans/payment");
    } else {
      alert(
        "Please select a crypto payment method, a plan, and enter the amount."
      );
    }
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Investment Plan</h3>
        <p className="text-gray-600">
          Fund your account to get started with our numerous investment options
          today!
        </p>
      </div>
      <article className="w-full flex flex-col gap-10 sm:flex-row">
        <div className="flex flex-col gap-5 sm:w-[60%]">
          <PlansGrid
            handlePlanSelection={handlePlanSelection}
            selectedPlan={selectedPlan}
            handleAmountChange={handleAmountChange}
            amount={amount}
          />
          <div className="flex flex-col gap-4 w-full">
            <h4 className="font-semibold">
              Choose Payment Method from the list of options below
            </h4>
            <CryptoGrid handleCryptoSelection={handleCryptoSelection} />
            <button
              onClick={handleSubmit}
              className={`p-2 rounded-lg hover:bg-scheme-purpleOne duration-300 transition-colors text-white bg-scheme-purple self-start ${"disabled:bg-scheme-purpleOne"}`}
              disabled={amount && selectedCrypto && selectedPlan ? false : true}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
        <aside className=" sm:w-[40%] flex flex-col gap-5">
          <h4 className="font-semibold text-lg">Investment History</h4>
          <Link
            className="bg-gray-200 p-2 rounded-md transition-colors duration-300 hover:text-orange-400 text-green-700 "
            href={"dashboard/history"}
          >
            View All
          </Link>
        </aside>
      </article>
    </section>
  );
};

export default InvestmentPlansMain;
