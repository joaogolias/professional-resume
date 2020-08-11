import styled from "styled-components";

interface Props {
  bold?: boolean;
  italic?: boolean;
  size: "largest" | "large" | "medium" | "small";
  textAlign?: string;
}

export const Text = styled.p<Props>`
  font-weight: ${(props) => props.bold && "bolder"};
  font-style: ${(props) => props.italic && "italic"};
  word-break: keep-all;
  text-align: ${(props) => props.textAlign || "justify"};
  font-size: ${(props) => {
    switch (props.size) {
      case "largest":
        return "38pt";
      case "large":
        return "18pt";
      case "medium":
        return "12pt";
      case "small":
        return "9pt";
      default:
        return "9pt";
    }
  }};
  @media (max-width: 600px) {
    font-size: ${(props) => {
      switch (props.size) {
        case "largest":
          return "24pt";
        case "large":
          return "16pt";
        case "medium":
          return "10pt";
        case "small":
          return "9pt";
        default:
          return "9pt";
      }
    }};
  }
`;

export const Bar = styled.div`
  width: 3px;
  margin-right: 5px;
  background-color: white;
`;
export const Content = styled.div`
  display: flex;
`;
