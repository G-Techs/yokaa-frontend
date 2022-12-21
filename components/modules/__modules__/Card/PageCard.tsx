import React from "react";
import { useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import BottomPlayer from "../../../BottomPaler/BottomPalyer";
import { leftNavPinedAtom } from "../../../lib/atoms";
import { LeftNav, TopNav } from "../../NavBar";

const PageCard = ({setIsTopNav,children}) => {
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
      <BottomPlayer />
    </>
  );
};

PageCard.propTypes = {
  children: PropTypes.element.isRequired,
  setIsTopNav: PropTypes.func,
};

export default PageCard;
