import React, { ReactNode } from "react";

// import ReactDOM from "react-dom";

import { cla } from "src/App";
import style from "./SweetSlider.module.scss";

// Core modules imports are same as usual
import {
  Navigation,
  //  Pagination
} from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
// import "swiper/modules/pagination/pagination.scss"; // Pagination module

import { ReactComponent as SvgOfArrowRight } from "src/styling-constants/svg-items/arrow-right-3.svg";

export const SweetSlider: React.FC<{
  className?: string;
  slideItems?: { id: string; el: ReactNode }[];
  classOfSlider?: string;
  classOfSlide?: string;
  classOfGoLeft?: string;
  classOfGoRight?: string;
  leftRightPaddingCss?: string; // clamp(20px, 5%, 96px);
}> = ({
  className,
  slideItems,
  classOfSlider,
  classOfSlide,
  classOfGoLeft,
  classOfGoRight,
  leftRightPaddingCss,
}) => {
  // const myImages = useMemo<{ id: string; path: string }[]>(() => {
  //   const arr: { id: string; path: string }[] = [
  //     { id: "0", path: pathOfNestLoft },
  //     { id: "1", path: pathOfAcornCucina },
  //     { id: "2", path: pathOfNestLoft },
  //     { id: "3", path: pathOfAcornCucina },
  //     { id: "4", path: pathOfNestLoft },
  //     //
  //     { id: "5", path: pathOfAcornCucina },
  //     { id: "6", path: pathOfNestLoft },
  //     { id: "7", path: pathOfAcornCucina },
  //     { id: "8", path: pathOfNestLoft },
  //     { id: "9", path: pathOfAcornCucina },
  //   ];

  //   return arr;
  // }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={cla(style.ground, className)}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[
          // Pagination,
          Navigation,
        ]}
        className={cla(style.mySwiper, classOfSlider)}
        style={
          leftRightPaddingCss
            ? { paddingLeft: leftRightPaddingCss, paddingRight: leftRightPaddingCss }
            : undefined
        }
      >
        {slideItems &&
          slideItems.map((item) => {
            return (
              <SwiperSlide key={item.id} className={cla(style.sl, classOfSlide)}>
                {item.el}
              </SwiperSlide>
            );
          })}

        {/* ---------------------- */}

        <div
          ref={navigationPrevRef}
          className={cla(style.goLeft, classOfGoLeft)}
          style={leftRightPaddingCss ? { left: leftRightPaddingCss } : undefined}
        >
          <SvgOfArrowRight className={style.svgOfArrow} />
        </div>

        <div
          ref={navigationNextRef}
          className={cla(style.goRight, classOfGoRight)}
          style={leftRightPaddingCss ? { right: leftRightPaddingCss } : undefined}
        >
          <SvgOfArrowRight className={style.svgOfArrow} />
        </div>
      </Swiper>
    </div>
  );
};