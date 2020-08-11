import React from "react";
import Text from "../../components/Text";
import useLanguage from "../../hooks/i18n";
import * as S from "./styles";

interface KnowledgeProps {
  className?: string;
}

export const Knowledge = ({ className }: KnowledgeProps) => {
  return (
    <S.Knownledges className={className}>
      <S.Title>
        <Text size={"large"}>Meus Conhecimentos</Text>{" "}
      </S.Title>
      <S.KnowledgeCarousel>
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
        ].map((i) => (
          <S.KnowledgeItem>{i}</S.KnowledgeItem>
        ))}
      </S.KnowledgeCarousel>
    </S.Knownledges>
  );
};

export default Knowledge;
