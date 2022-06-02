import React, { useState } from "react";
import {
  CloseIcon,
  LoginIcon,
  MenuIcon,
  MenuOutlineIcon,
  MicrophoneIcon,
  NotificationIcon,
  SeachIcon,
} from "../../__modules/Vectors";
import { openMenuAtom } from "../../../lib/atoms";
import { useRecoilState } from "recoil";

const TopNav = () => {
  const [isTopMenu, setIsTopMenu] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useRecoilState(openMenuAtom);

  const toggleTopMenu = () => {
    setIsTopMenu(!isTopMenu);
  };

  return (
    <div className="flex fixed top-0 left-20 mobile:left-0 right-0 justify-between items-center py-4 px-5 font-Mulish">
      <div className="mobile:hidden">
        <ul className="inline-flex font-bold">
          <li className="px-5 hover:text-primary cursor-pointer text-primary">
            Home
          </li>
          <li className="px-5 hover:text-primary cursor-pointer">Latest</li>
          <li className="px-5  hover:text-primary cursor-pointer">Album</li>
        </ul>
      </div>
      <div className="hidden items-center text-primary mobile:flex">
        <button onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <MenuOutlineIcon />
        </button>
        <h1 className="px-3 text-2xl font-bold">Yokaa</h1>
      </div>
      <div className="mobile:flex mobile:flex-col">
        <button
          onClick={toggleTopMenu}
          className="text-primary mobile:block hidden"
        >
          {!isTopMenu ? <MenuIcon /> : <CloseIcon />}
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
