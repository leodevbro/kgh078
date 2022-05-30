import React from "react";

import { cla } from "src/App";
// import { Link } from "react-router-dom";
// import { useAppSelector } from "../app/hooks";
import style from "./DivWithAspectRatio.module.scss";

export const DivWithAspectRatio: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={cla(className, style.ground)}>
    aaaa
  </div>;
};
