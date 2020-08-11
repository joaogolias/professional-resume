import React, { useState, FunctionComponent } from "react";
import { IconContext } from "react-icons";
import * as S from "./styled";

const createPages = (itemsPerPage: number, content: React.ReactNode): any => {
  const pages: any = {};
  let currentPage = 0;
  React.Children.forEach(content, (child) => {
    if (pages[currentPage]) {
      pages[currentPage].push(child);
    } else {
      pages[currentPage] = [child];
    }

    if (pages[currentPage].length === itemsPerPage) {
      currentPage++;
    }
  });
  return pages;
};
export const Carousel: FunctionComponent<CarouselProps> = (props) => {
  const itemsPerPage = window.innerWidth > 600 ? 3 : 1;
  const totalPages = Math.ceil(
    React.Children.count(props.children) / itemsPerPage
  );
  const pages = createPages(itemsPerPage, props.children);
  const [currentPage, setCurrentPage] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (value: number) => {
    setFade(true);
    if (currentPage >= totalPages - 1 && value > 0) {
      setCurrentPage(0);
    } else if (currentPage <= 0 && value < 0) {
      setCurrentPage(totalPages - 1);
    } else {
      setCurrentPage(currentPage + value);
    }
  };

  const createDots = (totalDots: number) => {
    const result = [];
    for (let i = 0; i < totalDots; i++) {
      result.push(<S.SlideDot isActive={currentPage === i} />);
    }
    return result;
  };

  const createContentArray = () => {
    return Object.keys(pages).map((key, i) => (
      <S.Content
        display={i === currentPage}
        onTransitionEnd={() => {
          setFade(false);
        }}
        fade={fade}
      >
        {pages[key]}
      </S.Content>
    ));
  };

  return (
    <S.Carousel className={props.className}>
      <S.ContentAndButtons>
        {createContentArray()}
        <IconContext.Provider value={{ size: "30px" }}>
          <S.NextSlide
            onClick={() => {
              changeSlide(1);
            }}
          >
            Próximo
          </S.NextSlide>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "30px" }}>
          <S.PreviousSlide
            onClick={() => {
              changeSlide(-1);
            }}
          >
            Anterior
          </S.PreviousSlide>
        </IconContext.Provider>
      </S.ContentAndButtons>
      <S.DotsContainer>{createDots(totalPages)}</S.DotsContainer>
    </S.Carousel>
  );
};

interface CarouselProps {
  className?: string;
}

export default Carousel;
