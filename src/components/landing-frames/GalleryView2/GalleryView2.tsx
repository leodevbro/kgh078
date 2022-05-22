import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";

import { cla } from "src/App";
import style from "./GalleryView2.module.scss";

import pathOfNestLoft from "src/styling-constants/raster-items/nest-loft.png";
import pathOfAcornCucina from "src/styling-constants/raster-items/acorn_cucina.png";
import { SweetSlider } from "src/components/SweetSlider/SweetSlider";

export const GalleryView2: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation();

  const myImages = useMemo<{ id: string; path: string }[]>(() => {
    const arr: { id: string; path: string }[] = [
      { id: "0", path: pathOfNestLoft },
      { id: "1", path: pathOfAcornCucina },
      { id: "2", path: pathOfNestLoft },
      { id: "3", path: pathOfAcornCucina },
      { id: "4", path: pathOfNestLoft },
      //
      { id: "5", path: pathOfAcornCucina },
      { id: "6", path: pathOfNestLoft },
      { id: "7", path: pathOfAcornCucina },
      { id: "8", path: pathOfNestLoft },
      { id: "9", path: pathOfAcornCucina },
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

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        <div className={style.top}>
          <span className={style.title}>{t("gallery")}</span>
        </div>

        <SweetSlider
          classOfSlider={style.superSlider}
          classOfGoLeft={style.goLeft}
          classOfGoRight={style.goRight}
          slideItems={arrForSlider}
          // leftRightPaddingCss={`clamp(20px, 5%, 96px)`}
        />
      </div>
    </div>
  );
};
