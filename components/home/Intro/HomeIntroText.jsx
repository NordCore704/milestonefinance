'use client';
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const HomeIntroText = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className="flex flex-col gap-3 items-start p-4 sm:w-[50%] lg:w-auto z-10">
      <p className="bg-scheme-purpleThree text-scheme-purple uppercase rounded-xl py-0.5 pl-2 sm:w-52 w-52 font-semibold text-sm text-center sm:text-left sm:self-start self-center">
        {t("smartInvestments")}
      </p>
      <div className="flex flex-col gap-2 items-start">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left sm:self-start self-center">
          {t("getInOnTheAction")}
        </h1>
        <p className="text-gray-600 text-center sm:text-left">
          {t("investingDescription")}
        </p>
      </div>
      <Link
        href={"/auth/signup"}
        className="py-1.5 px-3 rounded-2xl bg-scheme-purple text-white shadow-md shadow-scheme-purpleOne hover:bg-scheme-purpleOne self-center sm:self-start"
      >
        {t("getStarted")}
      </Link>
    </div>
  );
};

export default HomeIntroText;