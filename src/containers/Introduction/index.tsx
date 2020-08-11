import React from "react";
import useLanguage from "../../hooks/i18n";
import Text from "../../components/Text";
import * as S from "./styles";

interface IntroductionProps {
  className?: string;
}

const Introduction = ({ className }: IntroductionProps) => {
  const skills = ["NodeJS", "MySQL", "Typescript", "React", "CSS"];
  const { t } = useLanguage();
  return (
    <S.Introduction className={className}>
      <S.Description>
        <S.Content>
          <Text size={"largest"} bold>
            {t("texts.initial-greeting")}
          </Text>
          <Text size={"large"}>{t("texts.subtitle")}</Text>
          <Text size={"medium"}>{t("texts.enthusiastic")}</Text>
          <S.Resume>
            <Text size={"small"}>{t("initial-greeting")}</Text>
          </S.Resume>
          {/* <S.Skills>
            {skills.map((item) => (
              <Text size="small" showBar>
                {item}
              </Text>
            ))}

          </S.Skills> */}
          {
            //Todo: Add education information
          }
        </S.Content>
      </S.Description>
      <S.Description />
    </S.Introduction>
  );
};

export default Introduction;
