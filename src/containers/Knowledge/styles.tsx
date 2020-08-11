import styled from "styled-components";
import Carousel from "../../components/Carousel";

export const Knownledges = styled.div`
  height: 50vh;
  background-color: #1b818c;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  padding-top: 32px;
`;

export const KnowledgeCarousel = styled(Carousel)`
  margin-top: 32px;
`;

export const KnowledgeItem = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
`;
