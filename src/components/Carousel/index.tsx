import React, { useState, FunctionComponent } from "react";
import { IconContext } from "react-icons";
import * as S from "./styled";

//ToDo: fix typings
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
  const [currentPage, setCurrentPage] = useState(0);
  const [fade, setFade] = useState(true);
  const [clientCurrentX, setClientCurrentX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);

  //ToDo: Isolate values: 600, 3 and 1
  const isMobile = () => window.innerWidth <= 600;
  const itemsPerPage = !isMobile()
    ? props.itemsPerPageDesktop || 3
    : props.itemsPerPageMobile || 1;

  const totalPages = Math.ceil(
    React.Children.count(props.children) / itemsPerPage
  );
  const pages = createPages(itemsPerPage, props.children);

  const onTouchMove = (clientX: number) => {
    setDeltaX(clientX - clientCurrentX);
    setClientCurrentX(clientX);
  };

  const onTouchEnd = () => {
    if (deltaX > 0) {
      changeSlide(-1);
    } else if (deltaX < 0) {
      changeSlide(1);
    }
    setDeltaX(0);
  };

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
      <S.ContentAndButtons
        onTouchMove={
          isMobile()
            ? (touchMoveEvent) => {
                onTouchMove(touchMoveEvent.targetTouches[0].clientX);
              }
            : undefined
        }
        onTouchEnd={isMobile() ? onTouchEnd : undefined}
      >
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
  itemsPerPageDesktop?: number;
  itemsPerPageMobile?: number;
}

export default Carousel;
