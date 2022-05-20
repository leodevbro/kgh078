import React from "react";

import { cla } from "src/App";
// import { Link } from "react-router-dom";
// import { useAppSelector } from "../app/hooks";
import style from "./PlusBox.module.scss";

export const PlusBox: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cla(className, style.ground)}>
      aaaaa
    </div>
  );
};
