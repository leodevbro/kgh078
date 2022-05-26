import React from "react";
// import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';

import { cla } from "src/App";
// import { PlusBox } from "src/components/PlusBox/PlusBox";
import style from "./PlanxMainInfo.module.scss";

export const PlanxMainInfo: React.FC<{
  className?: string;
}> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>{/* <PlusBox className={style.plusBox} /> */}</div>
    </div>
  );
};
