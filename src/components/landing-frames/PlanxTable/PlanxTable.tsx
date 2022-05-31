import React from "react";
import { useTranslation } from "react-i18next";

import { cla } from "src/App";
import style from "./PlanxTable.module.scss";

export const PlanxTable: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        hjjjjjjjjjjjjjjjj
      </div>
    </div>
  );
};
