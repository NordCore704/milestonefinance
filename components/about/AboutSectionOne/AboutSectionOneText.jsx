'use client'
import Link from 'next/link'
import React from 'react'
import { FaBoltLightning } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

const AboutSectionOneText = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-3 items-center text-center justify-center'>
        <div className="rounded-md flex gap-1 items-center bg-scheme-purpleThree self-center p-1">
            <FaBoltLightning /> {t("aboutUs")}
        </div>
        <h2 className="text-2xl font-semibold text-center">
            {t("title")}
        </h2>
        <p className="">
            {t("description")}
        </p>
        <Link
              href={"/contact"}
              className={'py-1.5 px-3 rounded-2xl bg-scheme-purple text-white shadow-md shadow-scheme-purpleOne hover:bg-scheme-purpleOne self-center'}
            >
              {t("contactUs")}
        </Link>
    </div>
  )
}

export default AboutSectionOneText