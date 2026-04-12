import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptLanguage from './locales/pt.json';
import enLanguage from './locales/en.json';

const resources = {
  pt: {
    translation: {
      ...ptLanguage
    },
  },
  en: {
    translation: {
      ...enLanguage
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "pt",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;