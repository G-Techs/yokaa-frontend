import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import BottomPlayer from "../../../BottomPaler/BottomPalyer";
import { leftNavPinedAtom } from "../../../lib/atoms";
import { LeftNav, TopNav } from "../../NavBar";


interface PageCardProps {
  children: JSX.Element ,
  setIsTopNav: Function,
};

const PageCard: FC<PageCardProps>= ({setIsTopNav,children})=> {
  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);
  return (
    <>
      <div
        className={`relative flex flex-col ${!isLeftNavPined ? "ml-28 transition-all" : "transition-all ml-72"} mobile:ml-5`}
      >
        <TopNav setIsTopNav={setIsTopNav} />
        {children}
      </div>
      <LeftNav />
      <BottomPlayer/>
    </>
  );
};

export default PageCard;
