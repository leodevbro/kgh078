import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDraggable } from "react-use-draggable-scroll";

import { cla } from "src/App";
import style from "./PlanxTable.module.scss";

export const PlanxTable: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  const dot1 = (
    <div
      style={{
        marginRight: "5px",
        backgroundColor: "rgb(54, 54, 54)",
        width: "10px",
        height: "10px",
        borderRadius: "20px",
      }}
    ></div>
  );

  const dot2 = (
    <div
      style={{
        marginRight: "5px",
        border: "1px solid rgb(54, 54, 54)",
        width: "10px",
        height: "10px",
        borderRadius: "20px",
      }}
    ></div>
  );

  const dot3 = (
    <div
      style={{
        marginRight: "5px",
        backgroundColor: "rgb(9, 103, 210)",
        width: "10px",
        height: "10px",
        borderRadius: "20px",
      }}
    ></div>
  );

  return (
    <div className={cla(style.ground, className)}>
      <div
        className={cla(
          style.mainBox,
          style.hoSlide,

          "flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide",
        )}
        {...events}
        ref={ref} // add reference and events to the wrapping div
      >
        <table className={style.myTable}>
          <thead>
            <tr className={style.tr1}>
              <th></th>
              <th colSpan={2}>Floors</th>
              <th colSpan={2}>Walls</th>
              <th colSpan={2}>Counter Tops</th>
              <th colSpan={2}>Shower Floors</th>
              <th colSpan={2}>Shower Walls</th>
              <th colSpan={2}>Pools / Spas</th>
            </tr>

            <tr className={style.tr2}>
              <th></th>
              <th className={style.interior}>Interior</th>
              <th className={style.exterior}>Exterior</th>
              <th className={style.interior}>Interior</th>
              <th className={style.exterior}>Exterior</th>
              <th className={style.interior}>Interior</th>
              <th className={style.exterior}>Exterior</th>
              <th className={style.interior}>Interior</th>
              <th className={style.exterior}>Exterior</th>
              <th className={style.interior}>Interior</th>
              <th className={style.exterior}>Exterior</th>
              <th className={style.interior}>Interior</th>
              <th className={style.exterior}>Exterior</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Residential</td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div>{dot2}</div>
              </td>

              <td className={style.interior}>
                <div style={{ display: "flex" }}>
                  {dot1}
                  {dot3}
                </div>
              </td>

              <td className={style.exterior}>
                <div style={{ display: "flex" }}>
                  {dot1}
                  {dot3}
                </div>
              </td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div>{dot1}</div>
              </td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div></div>
              </td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div>{dot1}</div>
              </td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div>{dot1}</div>
              </td>
            </tr>

            <tr>
              <td>Commercial</td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div></div>
              </td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div>{dot1}</div>
              </td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div>{dot1}</div>
              </td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div></div>
              </td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div>{dot1}</div>
              </td>

              <td className={style.interior}>
                <div>{dot1}</div>
              </td>

              <td className={style.exterior}>
                <div>{dot1}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
