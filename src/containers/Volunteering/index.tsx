import React from "react";
import * as S from "./styles";

export const Volunteering = (props: VolunteeringProps) => {
  return (
    <S.Volunteering className={props.className}>
      <S.Title size="large" bold>
        Voluntariado
      </S.Title>
    </S.Volunteering>
  );
};

interface VolunteeringProps {
  className?: string;
}

export default Volunteering;
