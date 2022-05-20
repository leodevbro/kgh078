import React, { useState } from "react";

import { cla } from "src/App";
// import { Link } from "react-router-dom";
// import { useAppSelector } from "../app/hooks";
import style from "./PlusBox.module.scss";

import { ReactComponent as PlusIcon2 } from "src/styling-constants/svg-items/plus2.svg";
import pathOfPlank1 from "src/styling-constants/raster-items/plank1.png";
import { t } from "i18next";

export const PlusBox: React.FC<{
  className?: string;
  classOfPlusButton?: string;
  openDir?: "left" | "right";
}> = ({ className, classOfPlusButton, openDir = "right" }) => {
  const [contentIsVis, setContentIsVis] = useState(false);

  const cl_vis_hid = contentIsVis ? style.vis : style.hid;

  const cl_dir = style[`dir${openDir}`];

  return (
    <div className={cla(className, style.ground)}>
      <div className={cla(style.content, cl_vis_hid)}>
        <div className={cla(style.contentIn, cl_vis_hid)}>
          <div className={style.up}>
            <div className={style.left}>
              <img className={cla(style.plankImg, cl_vis_hid)} alt="plank0" src={pathOfPlank1} />
            </div>

            <div className={style.right}>
              <div className={style.infoTitle}>{`Modni - Arlo Mosaic Cool Blend`}</div>
              <div className={style.infoDetails}>{`10 1/8" x 15 7/8" Sheet`}</div>
            </div>
          </div>
          <div className={style.down}>
            <span className={style.shopButton}>{t("shopThisLook")}</span>
          </div>
        </div>
      </div>

      <div
        className={cla(style.plusButton, classOfPlusButton, cl_dir)}
        onClick={() => setContentIsVis((prev) => !prev)}
      >
        <PlusIcon2 />
      </div>
    </div>
  );
};
