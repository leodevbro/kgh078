import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";

import { cla } from "src/App";
import style from "./TheFinerPoints.module.scss";

import { imgs } from "src/imglinks";

import { SweetSlider } from "src/components/SweetSlider/SweetSlider";

export const TheFinerPoints: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation();

  const myImages = useMemo<{ id: string; path: string }[]>(() => {
    const arr: { id: string; path: string }[] = [
      { id: "0", path: imgs.gallery_1_2x },
      { id: "1", path: imgs.gallery_2_2x },
      { id: "2", path: imgs.gallery_3_2x },
      { id: "3", path: imgs.gallery_4_2x },
      { id: "4", path: imgs.gallery_5_2x },
      //
      { id: "5", path: imgs.gallery_6_2x },
      { id: "6", path: imgs.gallery_7_2x },
      { id: "7", path: imgs.gallery_8_2x },
    ];

    return arr;
  }, []);

  const arrForSlider = useMemo(() => {
    return myImages.map((x) => {
      return {
        id: x.id,
        el: <img className={style.slideImage} alt="slide item" src={x.path} />,
      };
    });
  }, [myImages]);

  const introBox = useMemo(() => {
    return (
      <div className={style.intro}>
        <div className={style.inner}>
          <div className={style.info1}>
            <span>{t("justLikeWood")}</span>
          </div>

          <div className={style.info2}>
            <span>{t("thePlanxCollectionOffers")}</span>
          </div>

          <div className={style.downloadTearsheet}>
            <span className={style.span}>{t("downloadTearsheet")}</span>
          </div>
        </div>
      </div>
    );
  }, [t]);

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        <div className={style.top}>
          <span className={style.title}>{t("theFinerPoints")}</span>
        </div>

        <div className={style.duoRole}>
          <div className={style.version1}></div>

          <div className={style.version2}>{introBox}</div>
        </div>

        {/* <SweetSlider
          classOfSlider={style.superSlider}
          classOfSlide={style.superSlide}
          classOfGoLeft={style.goLeft}
          classOfGoRight={style.goRight}
          slideItems={arrForSlider}
          // leftRightPaddingCss={`clamp(20px, 5%, 96px)`}
        /> */}
      </div>
    </div>
  );
};
