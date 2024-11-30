'use client'
import Image from 'next/image'
import React from 'react'
import { joyWoman } from '@/exports/image-exports'
import { useTranslation } from "next-i18next";

const AboutSectionTwoGridOne = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-opacity-25 flex flex-col gap-4 bg-scheme-purpleThree px-3 pt-3 sm:w-1/2 justify-between'>
      <div className="flex flex-col gap-3"> 
        <h3 className="text-2xl font-bold text-center">
          {t("ourMissionTitle")}
        </h3>
        <p className="text-center">
          {t("ourMissionDescription")}
        </p>
      </div>
      <Image src={joyWoman} alt='person' className='self-center' />
    </div>
  )
}

export default AboutSectionTwoGridOne
