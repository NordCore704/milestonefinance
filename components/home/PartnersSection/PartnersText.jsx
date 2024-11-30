'use client'
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

const PartnersText = () => {
  const { t } = useTranslation();

  return (
    <div className="sm:w-[40%] h-full flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
          {t("partnersHeading")}
        </h1>
        <p className="text-gray-600 text-center sm:text-left">
          {t("partnersDescription")}
        </p>
      </div>
    </div>
  );
};

export default PartnersText;