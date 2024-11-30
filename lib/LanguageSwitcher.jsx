'use client';

import React, { useState } from "react";
import i18n from "@/i18n";
import { IoMdArrowDropdown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // Close the dropdown after selecting a language
  };

  return (
    <div className="relative z-20 px-4 lg:px-10 self-end">
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 text-sm font-medium text-black rounded-lg transition-all flex gap-1 items-center hover:text-scheme-purple duration-200"
      >
        {t("language")} <IoMdArrowDropdown />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 w-44 bg-white border border-gray-200 rounded-lg shadow-lg">
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-scheme-purple hover:text-scheme-purple rounded-t-lg"
          >
            {t("english")}
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-scheme-purple hover:text-scheme-purple"
          >
            {t("french")}
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-scheme-purple hover:text-scheme-purple rounded-b-lg"
          >
            {t("spanish")}
          </button>
          <button
            onClick={() => changeLanguage("jp")}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-scheme-purple hover:text-scheme-purple rounded-b-lg"
          >
            {t("japanese")}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
