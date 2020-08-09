import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import { pt, en, de } from "./locales";

const options: InitOptions = {
  debug: true,
  resources: {
    en: en.en,
    pt: pt["pt-BR"],
    de: de.de,
  },
  lng: "pt",

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
};

i18n.use(initReactI18next).init(options);

export default i18n;
