import React from "react";
import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';

import { cla } from "src/App";
import style from "./IntroView.module.scss";

import pathOfNestLoft from "src/styling-constants/raster-items/nest-loft.png";

export const IntroView: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        <div className={style.introDescription}>
          <div className={style.title}></div>
          <div className={style.desc}></div>
          <div className={style.more}></div>
        </div>
        <div className={style.imageBox}>
          <img className={style.introImg} alt="intro" src={pathOfNestLoft} />
        </div>
      </div>
    </div>
  );
};
