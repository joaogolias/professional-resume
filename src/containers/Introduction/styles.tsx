import styled from "styled-components";

export const Introduction = styled.div`
  display: flex;
  gap: 10px;
  height: 100vh;
  color: #ffffff;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const Description = styled.div`
  background-color: #011726;
  width: 100%;
`;

export const Content = styled.div`
  padding: 150px 64px 0px 64px;
`;

export const Resume = styled.div`
  margin-top: 50px;
`;

export const Skills = styled.div`
  display: flex;
  justify-content: space-around;
`;
