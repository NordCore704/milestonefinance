"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useSession } from "next-auth/react";
import { Spinner } from "@/exports";
import { motion } from "framer-motion";

const WithdrawalHistoryMain = () => {
  const { data: session } = useSession();
  const { data, error } = useSWR(
    () =>
      session?.user?.id
        ? `/api/users/getUserWithdrawalHistory/${session?.user?.id}`
        : null,
    fetcher
  );

  if (error) return <div>Failed to load history</div>;
  if (!data)
    return (
      <div>
        <Spinner />{" "}
      </div>
    );

  const history = data.withdrawalHistory;

  if (history.length === 0) {
    return <div>No history found</div>;
  }

  const mainVariant = {
    init: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="flex flex-col gap-5 p-2 sm:p-4 lg:p-5 min-h-screen">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl">
          Withdrawal Transaction History
        </h2>
        <p className="text-gray-400 text-sm">
          Below is your previous withdrawal transactions with time stamps
        </p>
      </div>

      <ul className="w-full border-b-2 rounded-lg p-2 shadow-md border-scheme-purple">
        {history.map((record, index) => (
          <motion.li
            transition={{
              ease: "easeInOut",
              duration: 1,
              type: "spring",
              delay: index * 0.2,
            }}
            variants={mainVariant}
            animate="animate"
            initial="init"
            key={index}
            className="flex flex-col gap-2 "
          >
            <p>Investment: ${record.investment}</p>
            <p>Plan: {record.plan}</p>
            <p>Profit Withdrawn: ${record.profitWithdrawn}</p>
            <p>Date: {record.date}</p>
            <p>Time: {record.time}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WithdrawalHistoryMain;
