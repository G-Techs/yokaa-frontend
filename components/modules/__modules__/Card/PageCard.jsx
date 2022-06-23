import React from "react";
import { useRecoilValue } from "recoil";
import { leftNavPinedAtom } from "../../../lib/atoms";
import PropTypes from "prop-types";
import { LeftNav, TopNav } from "../../NavBar";
import BottomPlayer from "../../../BottomPaler/BottomPalyer";

const PageCard = ({ children, setIsTopNav }) => {
  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);
  return (
    <div
      className={`relative flex flex-col ${
        !isLeftNavPined ? "ml-28 transition-all" : "transition-all ml-72"
      } mobile:ml-5`}
    >
      <TopNav setIsTopNav={setIsTopNav} />
      {children}
      <LeftNav />
      <BottomPlayer />
    </div>
  );
};

PageCard.propTypes = {
  children: PropTypes.element.isRequired,
  setIsTopNav: PropTypes.func,
};

export default PageCard;
