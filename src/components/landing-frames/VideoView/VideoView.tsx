import React from "react";
// import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';

import { cla } from "src/App";
import style from "./VideoView.module.scss";


export const VideoView: React.FC<{
  className?: string;
}> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>video box</div>
    </div>
  );
};
