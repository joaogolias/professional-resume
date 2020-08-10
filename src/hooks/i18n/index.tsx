import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

interface Language {
  id: string;
  label: string;
}

const useLanguage = () => {
  const { t } = useTranslation();
  const availableLanguages: Language[] = [
    {
      id: "pt",
      label: "Português",
    },
    {
      id: "en",
      label: "English",
    },
    {
      id: "de",
      label: "Deutsch",
    },
  ];

  const searchLanguage = (idOrLabel?: string): Language | undefined => {
    return availableLanguages.find(
      (language: Language) =>
        language.id === idOrLabel || language.label === idOrLabel
    );
  };

  const currentLanguage = searchLanguage(i18n.language);

  const changeLanguage = async (id?: string) => {
    return new Promise<void>((res, rej) => {
      i18n.changeLanguage(id || "", (err) => {
        if (err) {
          rej(err);
        } else {
          res();
        }
      });
    });
  };
  return {
    currentLanguage,
    availableLanguages,
    searchLanguage,
    changeLanguage,
    t,
  };
};

export default useLanguage;
