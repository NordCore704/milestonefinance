"use client";

import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useSession } from "next-auth/react";
import { Spinner } from "@/exports";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const WithdrawalHistoryMain = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const { data, error } = useSWR(
    () =>
      session?.user?.id
        ? `/api/users/getUserWithdrawalHistory/${session?.user?.id}`
        : null,
    fetcher
  );

  if (error) return <div>{t("withdrawalHistoryMain.error")}</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const history = data.withdrawalHistory;

  if (history.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center p-5 text-center">
        <p className="text-xl sm:text-2xl lg:text-3xl text-scheme-purple text-center">
          {t("withdrawalHistoryMain.noHistory")}
        </p>
      </div>
    );
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
          {t("withdrawalHistoryMain.header")}
        </h2>
        <p className="text-gray-400 text-sm">
          {t("withdrawalHistoryMain.description")}
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
            className="flex flex-col gap-2"
          >
            <p>
              {t("withdrawalHistoryMain.investment")}: ${record.investment}
            </p>
            <p>{t("withdrawalHistoryMain.plan")}: {record.plan}</p>
            <p>
              {t("withdrawalHistoryMain.profitWithdrawn")}: $
              {record.profitWithdrawn}
            </p>
            <p>{t("withdrawalHistoryMain.date")}: {record.date}</p>
            <p>{t("withdrawalHistoryMain.time")}: {record.time}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WithdrawalHistoryMain;