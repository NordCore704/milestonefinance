'use client'
import { tablePeople } from "@/exports/image-exports";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutSectionTwoGridTwo = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-4 bg-scheme-purpleThree px-3 pt-3 sm:w-1/2 justify-between'>
      <div className="flex flex-col gap-3"> 
        <h3 className="text-2xl font-bold text-center">
          {t("ourVisionTitle")}
        </h3>
        <p className="text-center">
          {t("ourVisionDescription")}
        </p>
      </div>
      <Image src={tablePeople} alt='person' className='self-center' />
    </div>
  );
};

export default AboutSectionTwoGridTwo;