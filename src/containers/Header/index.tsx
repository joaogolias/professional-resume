import React, { ChangeEvent } from "react";
import * as S from "./styles";
import useLanguage from "../../hooks/i18n";

export const Header = () => {
  const {
    currentLanguage,
    availableLanguages,
    changeLanguage,
    searchLanguage,
    t,
  } = useLanguage();

  const onLanguageChange = async (event?: ChangeEvent<HTMLSelectElement>) => {
    const language = searchLanguage(event?.target?.value);
    await changeLanguage(language?.id);
  };

  return (
    <S.Header>
      <S.MyName>João Golias</S.MyName>
      <S.Menu>
        <S.AboutMe>{t("labels.about-me")}</S.AboutMe>
        <S.Projects>{t("labels.projects")}</S.Projects>
        <S.Contact>{t("labels.contact")}</S.Contact>
        <S.LanguageSelector defaultValue={"pt"} onChange={onLanguageChange}>
          {availableLanguages.map((language) => (
            <S.LanguageOption
              value={language.id}
              selected={language.id === currentLanguage?.id}
            >
              {language.label}
            </S.LanguageOption>
          ))}
        </S.LanguageSelector>
      </S.Menu>
    </S.Header>
  );
};

export default Header;
