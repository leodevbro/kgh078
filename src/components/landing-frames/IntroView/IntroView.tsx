import React from "react";
import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';

import { cla } from "src/App";
import style from "./IntroView.module.scss";

import { imgs } from "src/imglinks";

// import { ReactComponent as SvgOfPlus } from "src/styling-constants/svg-items/more-btn.svg";
import { IPlusObject, PlusBox } from "src/components/PlusBox/PlusBox";

export const IntroView: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation();

  const plusContent: IPlusObject = {
    imgSrc: imgs.color_acorn,
    text1: `Modni - Arlo Mosaic Cool Blend`,
    text2: `10 1/8" x 15 7/8" Sheet`,
  };

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        <div className={style.introDescription}>
          <div className={style.textView}>
            <div className={style.title}>{t("widePlankHighStyle")}</div>
            <div className={style.desc}>{t("achieveTheLuxuriousLook")}</div>
            <div className={style.more}>
              <span className={style.learnMore}>{t("learnMore")}</span>
            </div>
          </div>
        </div>
        <div className={style.imageBox}>
          <img className={style.introImg} alt="intro" src={imgs.home_banner_2x} />
          <PlusBox
            className={style.plusBox}
            classOfPlusButton={style.myPlusButton}
            openDir={"left"}
            content={plusContent}
          />
        </div>
      </div>
    </div>
  );
};
