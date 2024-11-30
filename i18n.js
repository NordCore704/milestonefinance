'use client'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from '@/locales/en.json'
import fr from '@/locales/fr.json' 
import jp from '@/locales/jp.json'
import es from '@/locales/es.json'

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  jp: { translation: jp },
  es: { translation: es },
};

i18n
  .use(initReactI18next) // Bind react-i18next to i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
