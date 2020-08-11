import Introduction from "../containers/Introduction";
import Header from "../containers/Header";
import Knowledge from "../containers/Knowledge";
import styled from "styled-components";

export const App = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const IntroductionContainer = styled(Introduction)`
  height: 100vh;
`;
export const HeaderContainer = styled(Header)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 32px;
  background-color: transparent;
`;

export const KnowledgeContainer = styled(Knowledge)`
  margin-top: 10px;
`;
