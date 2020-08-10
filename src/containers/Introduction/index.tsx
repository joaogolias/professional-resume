import React from "react";
import useLanguage from "../../hooks/i18n";
import * as S from "./styles";

const Introduction = () => {
  const { t } = useLanguage();
  return (
    <S.Introduction>
      <S.Description />
      <S.Description />
    </S.Introduction>
  );
};

export default Introduction;
