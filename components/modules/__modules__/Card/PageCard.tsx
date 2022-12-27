
import React, { Dispatch, FC, SetStateAction } from "react";
import { useRecoilValue } from "recoil";
import { leftNavPinedAtom } from "../../../lib/atoms";
import { LeftNav, TopNav } from "../../NavBar";
import BottomPlayer from "../../../BottomPaler/BottomPalyer";

interface IProps {
  children: any;
  setIsTopNav: Dispatch<SetStateAction<boolean>>;
}

const PageCard: FC<IProps> = ({ children, setIsTopNav }) => {

  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);
  return (
    <>
      <div
        className={`relative flex flex-col ${
          !isLeftNavPined ? "ml-28 transition-all" : "transition-all ml-72"
        } mobile:ml-5`}

      >
        <TopNav setIsTopNav={setIsTopNav} />
        {children}
      </div>
      <LeftNav />
      <BottomPlayer />
    </>
  );
};

export default PageCard;
