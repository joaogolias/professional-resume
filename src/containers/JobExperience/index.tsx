import React from "react";
import * as S from "./styles";

export const JobExperience = () => {
  return (
    <S.JobExperience>
      <S.JobSections color="#024159" />
      <S.JobSections color="#025e73">
        <S.Title size="large" bold>
          Experiências de Emprego
        </S.Title>
      </S.JobSections>
      <S.JobSections color="#82d0d9" />
    </S.JobExperience>
  );
};

export default JobExperience;
