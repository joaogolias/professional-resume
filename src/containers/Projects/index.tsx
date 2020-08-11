import React from "react";
import * as S from "./styles";

export const Projects = () => {
  return (
    <S.Projects>
      <S.Title size="large" bold>
        Meus Projetos
      </S.Title>
      <S.Content>
        <S.ProjectsCarousel>
          {["1", "2", "3", "4", "5"].map((item) => (
            <S.ProjectsItem>{item}</S.ProjectsItem>
          ))}
        </S.ProjectsCarousel>
      </S.Content>
    </S.Projects>
  );
};

export default Projects;
