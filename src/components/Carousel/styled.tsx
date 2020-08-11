import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Carousel = styled.div`
  gap: 10px;
  white-space: nowrap;
`;

export const Content = styled.div<ContentProps>`
  display: ${({ display }) => (display ? "flex" : "none")};
  width: 100%;
  justify-content: space-around;
  /* transition: opacity 2s;
  opacity: ${(props) => (props.fade ? 1 : 0)};
  animation: fadein 2s;
  -webkit-animation-name: fadein;
  -webkit-animation-duration: 1.5s; */
  animation: ${(props) => "fadein 1.5s"};
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

interface ContentProps {
  fade?: boolean;
  display?: boolean;
}

export const ContentAndButtons = styled.div`
  position: relative;
  width: 100%;
`;

export const NextSlide = styled(FaAngleRight)`
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: 10px;
  &:hover {
    background-color: #cfcfcf;
    opacity: 0.5;
    border-radius: 100px;
    cursor: pointer;
  }
`;

export const PreviousSlide = styled(FaAngleLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 10px;
  &:hover {
    background-color: #cfcfcf;
    opacity: 0.5;
    border-radius: 100px;
    cursor: pointer;
  }
`;

export const SlideDot = styled.div<SlideDotProps>`
  border: 1px solid black;
  border-radius: 10px;
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.isActive && "black"};
`;

interface SlideDotProps {
  isActive?: boolean;
}

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 24px 0px;
`;
