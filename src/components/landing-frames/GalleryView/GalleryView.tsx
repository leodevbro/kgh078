import React from "react";
// import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";

import { cla } from "src/App";
import style from "./GalleryView.module.scss";

// import pathOfNestLoft from "src/styling-constants/raster-items/nest-loft.png";
// =======================================================================================

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

export const GalleryView: React.FC<{
  className?: string;
}> = ({ className }) => {
  // const { t } = useTranslation();

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
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
          className={style.mySwiper}
        >
          <SwiperSlide className={style.sl}>Slide 1</SwiperSlide>
          <SwiperSlide className={style.sl}>Slide 2</SwiperSlide>
          <SwiperSlide className={style.sl}>Slide 3</SwiperSlide>
          <SwiperSlide className={style.sl}>Slide 4</SwiperSlide>
          <SwiperSlide className={style.sl}>Slide 5</SwiperSlide>
          <SwiperSlide className={style.sl}>Slide 6</SwiperSlide>
          <SwiperSlide className={style.sl}>Slide 7</SwiperSlide>
          <SwiperSlide className={style.sl}>Slide 8</SwiperSlide>
          <SwiperSlide className={style.sl}>Slide 9</SwiperSlide>

          {/* ---------------------- */}

          <div ref={navigationPrevRef} className={style.goLeft}>
            11
          </div>

          <div ref={navigationNextRef} className={style.goRight}>
            22
          </div>
        </Swiper>
      </div>
    </div>
  );
};
