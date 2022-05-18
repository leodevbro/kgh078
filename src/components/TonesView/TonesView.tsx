import React from "react";
import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';

import { cla } from "src/App";
import style from "./TonesView.module.scss";

// import pathOfNestLoft from "src/styling-constants/raster-items/nest-loft.png";
import pathOfMeadowEsterno from "src/styling-constants/raster-items/meadow_esterno.png";
import pathOfPlank1 from "src/styling-constants/raster-items/plank1.png";



export const TonesView: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        <div className={style.title}>{t("woodTonesAndWarmVibes")}</div>
        <div className={style.descAndFrost}>
          <div className={style.desc}>{t("thePlanxCollectionEffortlesslyCaptures")}</div>
          <div className={style.frost}></div>
        </div>
        <div className={style.visuals}>
          <div className={style.left}>
            <img className={style.meadowImage} alt="tone view" src={pathOfMeadowEsterno} />
          </div>
          <div className={style.right}>
            <img className={style.plankImage} alt="tone view of plank" src={pathOfPlank1} />
          </div>
        </div>
      </div>
    </div>
  );
};
