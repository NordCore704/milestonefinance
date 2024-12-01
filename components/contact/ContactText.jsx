'use client'
import Link from "next/link";
import React from "react";
import { useTranslation } from 'react-i18next';

const ContactText = () => {
  const { t } = useTranslation();

  return (
    <div className=" items-start flex flex-col gap-8 sm:gap-16 sm:w-[40%] h-[50%] sm:h-[100%]">
      <h3 className="sm:text-6xl md:text-6xl lg:text-8xl text-4xl uppercase font-bold text-black">
        {t("contact")}
      </h3>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-scheme-purple font-semibold text-sm sm:text-base">
            {t("whatsappContact")}
          </h4>
          <Link href={'https://wa.link/h1r0l0'} className="underline">{t("whatsappNumber")}</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-scheme-purple font-semibold text-sm sm:text-base">
            {t("telegramSupport")}
          </h4>
          <Link href={'https://t.me/milestonefinance'} className="underline">{t("telegramLink")}</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-scheme-purple font-semibold text-sm sm:text-base">
            {t("talkToUs")}
          </h4>
          <div className="flex flex-col">
            <p className="">{t("supportMessage")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactText;