import React from "react";
import * as S from "./styles";

export const JobExperience = (props: JobExperienceProps) => {
  return (
    <S.JobExperience className={props.className}>
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

interface JobExperienceProps {
  className?: string;
}

export default JobExperience;
