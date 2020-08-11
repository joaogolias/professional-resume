import styled from "styled-components";
import Text from "../../components/Text";
import Carousel from "../../components/Carousel";

export const Projects = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Text)`
  color: #00436c;
  text-align: center;
  align-self: center;
`;

export const Content = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  background-color: #011726;
  margin-top: 10px;
`;

export const ProjectsCarousel = styled(Carousel)`
  width: 100%;
`;

export const ProjectsItem = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
`;
