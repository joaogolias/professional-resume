import Introduction from "../containers/Introduction";
import Header from "../containers/Header";
import styled from "styled-components";

export const App = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const IntroductionContainer = styled(Introduction)``;
export const HeaderContainer = styled(Header)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  background-color: transparent;
`;
