import React, { FunctionComponent } from "react";
import * as S from "./styles";

const Text: FunctionComponent<TextProps> = (props) => {
  return (
    <S.Content className={props.className}>
      {props.showBar && <S.Bar />}
      <S.Text bold={props.bold} italic={props.italic} size={props.size}>
        {props.children}
      </S.Text>
    </S.Content>
  );
};

interface TextProps {
  size: "largest" | "large" | "medium" | "small";
  bold?: boolean;
  italic?: boolean;
  showBar?: boolean;
  className?: string;
}

export default Text;
