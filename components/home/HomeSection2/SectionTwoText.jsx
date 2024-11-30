'use client'
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const SectionTwoText = () => {
  const { t } = useTranslation();

  return (
    <div className="sm:w-[40%] h-full flex flex-col items-center">
      <div className="flex flex-col gap-2 items-center self-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
          {t("sectionTwoHeading")}
        </h1>
        <p className="text-gray-600 text-center sm:text-left">
          {t("sectionTwoDescription")}
        </p>
        <div className="flex gap-2 items-center sm:self-start group">
          <Link
            className="text-scheme-purple group-hover:text-scheme-darkGrey text-center sm:text-left"
            href={"/about"}
          >
            {t("learnMore")}
          </Link>
          <FaArrowRight className="text-center text-scheme-purple group-hover:text-scheme-darkGrey group-hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwoText;