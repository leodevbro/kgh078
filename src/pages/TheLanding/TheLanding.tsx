import React from "react";
// import { useTranslation } from "react-i18next";
// import { useParams } from "react-router-dom";
// import { cla } from "src/App";
import { IntroView } from "src/components/IntroView/IntroView";
import { PlanxMainInfo } from "src/components/PlanxMainInfo/PlanxMainInfo";
import { TonesView } from "src/components/TonesView/TonesView";
import { VideoView } from "src/components/VideoView/VideoView";
// import { AuthFlowEnum, BasicStatusOfUserT, UserRoleEnum } from "src/app/redux-slices/sweetSlice";
// import { useAuthCheck } from "src/app/routing/ProtectedRoutes";

// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
// import { AuthFlowEnum } from "src/app/redux-slices/sweetSlice";
// import { useAuthCheck } from "src/app/routing/ProtectedRoutes";

import style from "./TheLanding.module.scss";
// import { CloseButton } from "src/components/CloseButton/CloseButton";

export const TheLanding: React.FC<{}> = () => {
  // const params = useParams();
  // const { t } = useTranslation();
  // const basicStatusOfUser = useAuthCheck();

  // const navigate = useNavigate();

  // const isFullyLoggedIn = useMemo(() => {
  //   return (
  //     [UserRoleEnum.admin, UserRoleEnum.accounting, UserRoleEnum.sales] as BasicStatusOfUserT[]
  //   ).includes(basicStatusOfUser);
  // }, [basicStatusOfUser]);

  // const { t } = useTranslation();

  return (
    <div className={style.ground}>
      <div className={style.center}>
        <IntroView />
        <TonesView />
        <VideoView />
        <PlanxMainInfo />
      </div>
    </div>
  );
};
