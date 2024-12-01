'use client'
import React from "react";
import { useTranslation } from "react-i18next";

const AboutSectionThreeText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col shadow-md p-2 rounded-lg lg:w-[40%] sm:p-3 lg:p-5">
      <h3 className="font-bold text-2xl">{t("ourValuesTitle")}</h3>
      <p>{t("ourValuesDescription")}</p>
    </div>
  );
};

export default AboutSectionThreeText;
