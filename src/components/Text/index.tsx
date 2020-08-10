import React, { FunctionComponent } from "react";
import * as S from "./styles";

const Text: FunctionComponent<TextProps> = (props) => {
  const getParagraphElement = () => {
    switch (props.size) {
      case "largest":
        return <S.LargestText {...props}>{props.children}</S.LargestText>;
      case "large":
        return <S.LargeText {...props}>{props.children}</S.LargeText>;
      case "medium":
        return <S.MediumText {...props}>{props.children}</S.MediumText>;
      case "small":
        return <S.SmallText {...props}>{props.children}</S.SmallText>;
      default:
        return <S.SmallText {...props}>{props.children}</S.SmallText>;
    }
  };

  return <>{getParagraphElement()}</>;
};

interface TextProps {
  size?: "largest" | "large" | "medium" | "small";
}

export default Text;
