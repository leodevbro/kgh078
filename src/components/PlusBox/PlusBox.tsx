import React, { useState } from "react";

import { cla } from "src/App";
// import { Link } from "react-router-dom";
// import { useAppSelector } from "../app/hooks";
import style from "./PlusBox.module.scss";

import { ReactComponent as PlusIcon2 } from "src/styling-constants/svg-items/plus2.svg";

export const PlusBox: React.FC<{ className?: string }> = ({ className }) => {
  const [contentIsVis, setContentIsVis] = useState(false);

  const cl_vis_hid = contentIsVis ? style.vis : style.hid;

  return (
    <div className={cla(className, style.ground)}>
      <div className={cla(style.content, cl_vis_hid)}>
        <p>aaaaaa</p>
        <p>ბბბბბბ</p>
        <p>ccccccc</p>
      </div>

      <div className={style.plusButton} onClick={() => setContentIsVis((prev) => !prev)}>
        <PlusIcon2 />
      </div>
    </div>
  );
};
