import React from "react";
import * as S from "./styles";

export const HireMe = (props: HireMeProps) => {
  return (
    <S.HireMe className={props.className}>
      <S.Title size="large" bold>
        Contrate-me!
      </S.Title>
    </S.HireMe>
  );
};

interface HireMeProps {
  className?: string;
}

export default HireMe;
