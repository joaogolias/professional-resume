import styled from "styled-components";

export const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyName = styled.p`
  font-weight: bold;
  color: #ffffff;
`;

export const Menu = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const AboutMe = styled.p`
  color: #f2b33e;
`;

export const Projects = styled.p`
  color: #ffffff;
`;

export const Contact = styled.p`
  color: #ffffff;
`;

export const LanguageSelector = styled.select`
  border: 0;
  background: none;
  -webkit-appearance: none;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 12pt;
  outline: none;
  font-style: italic;
  &:focus {
    border: 0;
    background: none;
    -webkit-appearance: none;
  }
`;

export const LanguageOption = styled.option``;
