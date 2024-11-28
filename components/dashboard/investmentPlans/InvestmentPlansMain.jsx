"use client";
import { PlansGrid, CryptoGrid } from "@/exports";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import CryptoContext from "@/context/CryptoContext";
import { Spinner } from "@/exports";
import useUserPlan from "@/hooks/useUserPlan";

const InvestmentPlansMain = () => {
  const { data: session, status } = useSession();
  const { setSelectedCrypto, setSelectedPlan, setAmount } =
    useContext(CryptoContext);
  const router = useRouter();
  const [selectedCrypto, setSelectedCryptoState] = useState(null);
  const [selectedPlan, setSelectedPlanState] = useState(null);
  const [amount, setAmountState] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, isLoading, isError } = useUserPlan();

  const handleCryptoSelection = (crypto) => {
    setSelectedCryptoState(crypto);
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlanState(plan);
  };

  const handleAmountChange = (e) => {
    setAmountState(e.target.value);
  };

  // useEffect(() => {
  //   if (!isLoading && !isError) {
  //     const restrictedPlans = ["Basic", "Standard", "Premium", "Deluxe"];
  //     if (restrictedPlans.includes(user?.plan)) {
  //       router.push("/dashboard"); // Redirect to the dashboard or another page
  //     }
  //   }
  // }, [user, isLoading, isError, router]);

  const handleSubmit = async () => {
    if (!selectedCrypto || !selectedPlan || !amount) {
      alert(
        "Please select a crypto payment method, a plan, and enter the amount."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/updates/plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.user?.id,
          selectedPlan,
          amountPaid: amount,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        alert(errorData.message || "Error updating plan");
        return;
      }

      const data = await response.json();

      setSelectedCrypto(selectedCrypto);
      setSelectedPlan(selectedPlan);
      setAmount(amount);

      router.push("/dashboard/investment-plans/payment");
    } catch (error) {
      console.error("Error updating plan:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error loading user data</p>;

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
              disabled={
                isSubmitting || !amount || !selectedCrypto || !selectedPlan
              }
            >
              {isSubmitting ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
        <aside className=" sm:w-[40%] flex flex-col gap-5">
          <h4 className="font-semibold text-lg">Investment History</h4>
          <Link
            className="bg-gray-200 p-2 rounded-md transition-colors duration-300 hover:text-orange-400 text-green-700 "
            href={"/dashboard/history"}
          >
            View All
          </Link>
        </aside>
      </article>
    </section>
  );
};

export default InvestmentPlansMain;
