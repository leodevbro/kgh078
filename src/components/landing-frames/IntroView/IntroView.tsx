import React from "react";
import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';

import { cla } from "src/App";
import style from "./IntroView.module.scss";

import pathOfNestLoft from "src/styling-constants/raster-items/nest-loft.png";

// import { ReactComponent as SvgOfPlus } from "src/styling-constants/svg-items/more-btn.svg";
import { PlusBox } from "src/components/PlusBox/PlusBox";

export const IntroView: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation();

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
          <img className={style.introImg} alt="intro" src={pathOfNestLoft} />
          <PlusBox
            className={style.plusBox}
            classOfPlusButton={style.myPlusButton}
            openDir={"left"}
          />
        </div>
      </div>
    </div>
  );
};
