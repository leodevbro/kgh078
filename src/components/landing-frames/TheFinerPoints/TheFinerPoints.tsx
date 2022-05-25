import React, { ReactNode, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";

import { cla } from "src/App";
import style from "./TheFinerPoints.module.scss";

import { ReactComponent as SvgOfFpKnife } from "src/styling-constants/svg-items/fp-knife.svg";

import { SweetSlider } from "src/components/SweetSlider/SweetSlider";
import { useMediaQuery } from "react-responsive";
import { tryWorkaroundForSliderButtons } from "src/i18n";

export const TheFinerPoints: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation();

  const is1004AndDown = useMediaQuery({ query: "(max-width: 1004px)" });
  useEffect(() => {
    tryWorkaroundForSliderButtons();
  }, [is1004AndDown]);

  const introBox = useMemo(() => {
    return (
      <div className={style.intro}>
        <div className={style.inner}>
          <div className={style.info1}>
            <span>{t("justLikeWood")}</span>
          </div>

          <div className={style.info2}>
            <span>{t("thePlanxCollectionOffers")}</span>
          </div>

          <div className={style.downloadTearsheet}>
            <span className={style.span}>{t("downloadTearsheet")}</span>
          </div>
        </div>
      </div>
    );
  }, [t]);

  const arrayOfDataOfPoints = useMemo(() => {
    const arr: { head: string; subHead: string; icon: ReactNode }[] = [
      {
        head: t("resistant"),
        subHead: t("toScratchesStainsAndChemicals"),
        icon: <SvgOfFpKnife className={style.icon} />,
      },
      {
        head: t("resistant"),
        subHead: t("toScratchesStainsAndChemicals"),
        icon: <SvgOfFpKnife className={style.icon} />,
      },
      {
        head: t("resistant"),
        subHead: t("toScratchesStainsAndChemicals"),
        icon: <SvgOfFpKnife className={style.icon} />,
      },
      {
        head: t("resistant"),
        subHead: t("toScratchesStainsAndChemicals"),
        icon: <SvgOfFpKnife className={style.icon} />,
      },
      {
        head: t("resistant"),
        subHead: t("toScratchesStainsAndChemicals"),
        icon: <SvgOfFpKnife className={style.icon} />,
      },

      {
        head: t("resistant"),
        subHead: t("toScratchesStainsAndChemicals"),
        icon: <SvgOfFpKnife className={style.icon} />,
      },
      {
        head: t("resistant"),
        subHead: t("toScratchesStainsAndChemicals"),
        icon: <SvgOfFpKnife className={style.icon} />,
      },
      {
        head: t("resistant"),
        subHead: t("toScratchesStainsAndChemicals"),
        icon: <SvgOfFpKnife className={style.icon} />,
      },
    ];

    return arr;
  }, [t]);

  const thePoints = useMemo(() => {
    return arrayOfDataOfPoints.map((pointObj, i) => {
      return (
        <div key={i} className={style.onePoint}>
          <div className={style.head}>{pointObj.head}</div>
          <div className={style.subHead}>{pointObj.subHead}</div>
          {pointObj.icon}
        </div>
      );
    });
  }, [arrayOfDataOfPoints]);

  const arrForSlider = useMemo(() => {
    return thePoints.map((x, i) => {
      return {
        id: String(i),
        el: x,
      };
    });
  }, [thePoints]);

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        <div className={style.top}>
          <span className={style.title}>{t("theFinerPoints")}</span>
        </div>

        <div className={style.duoRole}>
          {is1004AndDown ? (
            <div className={style.version1}>
              {introBox}

              <SweetSlider
                classOfSlider={style.superSlider}
                classOfSlide={style.superSlide}
                classOfGoLeft={style.goLeft}
                classOfGoRight={style.goRight}
                slideItems={arrForSlider}
                // leftRightPaddingCss={`clamp(20px, 5%, 96px)`}
              />
            </div>
          ) : (
            <div className={style.version2}>
              {introBox}
              {thePoints}
            </div>
          )}
        </div>

        <div className={style.footForButton}>
          <span className={style.shopButton}>{t("shopPlanxCollection")}</span>
        </div>

        {/* <SweetSlider
          classOfSlider={style.superSlider}
          classOfSlide={style.superSlide}
          classOfGoLeft={style.goLeft}
          classOfGoRight={style.goRight}
          slideItems={arrForSlider}
          // leftRightPaddingCss={`clamp(20px, 5%, 96px)`}
        /> */}
      </div>
    </div>
  );
};
