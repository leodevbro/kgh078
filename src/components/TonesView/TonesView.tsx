import React, { useState } from "react";
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

  const [selectedToneIndex, setSelectedToneIndex] = useState(0);

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        <div className={style.title}>{t("woodTonesAndWarmVibes")}</div>
        <div className={style.descAndFrost}>
          <div className={style.desc}>{t("thePlanxCollectionEffortlesslyCaptures")}</div>
          <div className={style.frost}>
            <div className={style.frostWrap}>
              <div className={style.textOfFrost}>{t("frost")}</div>
              <div className={style.toneBoxes}>
                {[0, 1, 2, 3, 4].map((item, index) => {
                  const isSelected = index === selectedToneIndex;
                  const cl_selected = isSelected ? style.selected : "";

                  return (
                    <div key={index} className={cla(style.toneBox, cl_selected)}>
                      <div
                        className={style.innerBox}
                        onClick={() => setSelectedToneIndex(index)}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={cla(style.visuals, style[`tone${selectedToneIndex}`])}>
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
