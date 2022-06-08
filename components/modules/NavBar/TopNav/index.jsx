import React, { useState } from "react";
import {
  LoginIcon,
  MenuOutlineIcon,
  MicrophoneIcon,
  NotificationIcon,
  SeachIcon,
  ChevronRightIcon,
} from "../../__modules/Vectors";
import { leftNavPinedAtom, openMenuAtom } from "../../../lib/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

const TopNav = () => {
  const [isTopMenu, setIsTopMenu] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useRecoilState(openMenuAtom);
  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);

  const toggleTopMenu = () => {
    setIsTopMenu(!isTopMenu);
  };

  return (
    <div
      className={`flex absolute top-0 mobile:left-0 right-0 justify-between items-center py-4 pr-5 font-Mulish`}
    >
      <div className="mobile:hidden">
        <ul className="inline-flex font-bold">
          <li className="pr-5 hover:text-primary cursor-pointer text-primary">
            Home
          </li>
          <li className="px-5 hover:text-primary cursor-pointer">Latest</li>
          <li className="px-5  hover:text-primary cursor-pointer">Album</li>
          <li className="px-5  hover:text-primary cursor-pointer">Trending</li>
        </ul>
      </div>
      <div className="hidden items-center text-primary mobile:flex">
        <button onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <MenuOutlineIcon />
        </button>
      </div>
      <h1 className="px-3 text-2xl font-bold text-primary hidden mobile:block">
        Yokaa
      </h1>
      <div className="mobile:flex mobile:flex-col">
        <button
          onClick={toggleTopMenu}
          className="text-primary mobile:block hidden"
        >
          <ChevronRightIcon
            className={`${isTopMenu && "rotate-90"} transition-all`}
          />
        </button>
        <div
          className={`items-center justify-end ${
            isTopMenu ? "flex" : "mobile:hidden"
          } flex mobile:absolute mobile:top-16 mobile:right-0 mobile:bg-white mobile:w-full mobile:px-5 mobile:py-3`}
        >
          <button className="hidden mobile:block">
            <SeachIcon />
          </button>
          <div className="border border-gray-200 items-center px-3 py-2 rounded-tr-2xl rounded-bl-2xl bg-white mobile:hidden flex">
            <SeachIcon />
            <input type="text" className="outline-none px-3 w-96" />
            <MicrophoneIcon />
          </div>
          <div className="flex">
            <button className="px-5 relative">
              <NotificationIcon />
              <span className="absolute top-0 bg-primary text-xs text-white px-1 rounded-full">
                +
              </span>
            </button>
            <button className="px-5  flex justify-center items-center bg-primary py-1 rounded-md text-white">
              <LoginIcon className="mx-2" /> Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
