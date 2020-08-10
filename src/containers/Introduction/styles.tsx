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
  width: 100%;
  background-color: #011726;
  padding-top: 50px;
  height: 100vh;
`;
