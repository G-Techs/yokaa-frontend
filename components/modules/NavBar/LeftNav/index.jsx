import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { openMenuAtom } from "../../../lib/atoms";
import {
  MoonIcon,
  SunIcon,
  HomeSubMenuIcon,
  HeadPhonesIcon,
  FileMusicIcon,
  ArrowExpendUpRighIcon,
  DownLoadOutlineIcon,
  FilePlusIcon,
  FavoriteIcon,
  CloseIcon,
} from "../../__modules/Vectors";
import DashBord from "./DashBoard";

const LeftNav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMouseOverLeftNav, setIsMouseOverLeftNav] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useRecoilState(openMenuAtom);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      onMouseOver={() => setIsMouseOverLeftNav(true)}
      onMouseOut={() => setIsMouseOverLeftNav(false)}
      className={`bg-white shadow-2xl h-full w-fit font-Mulish z-20 fixed top-0 bottom-0 left-0 flex flex-col justify-between 
      ${!isMenuOpened && "mobile:w-0 mobile:overflow-hidden"}
      `}
    >
      <div>
        <div className="px-3 py-5 mobile:flex mobile:justify-between mobile:items-center">
          <h1
            className={`text-2xl font-bold ${
              !isMouseOverLeftNav && "text-center"
            } mobile:text-left`}
          >
            Yokaa
          </h1>
          <button
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            className="hidden mobile:block"
          >
            <CloseIcon />
          </button>
        </div>
        {
          <div
            className={`flex flex-col justify-center items-center mobile:hidden ${
              isMouseOverLeftNav && "hidden"
            }`}
          >
            <HomeSubMenuIcon className="my-5 text-2xl text-primary" />
            <HeadPhonesIcon className="my-5 text-2xl" />
            <FileMusicIcon className="my-5 text-2xl" />
            <ArrowExpendUpRighIcon className="my-5 text-2xl" />
            <DownLoadOutlineIcon className="my-5 text-2xl" />
            <FilePlusIcon className="my-5 text-2xl" />
            <FavoriteIcon className="my-5 text-2xl" />
          </div>
        }
        <div
          className={`${
            !isMouseOverLeftNav ? "w-0 overflow-hidden" : "w-full"
          } mobile:w-full`}
        >
          <DashBord />
        </div>
      </div>
      <button
        onClick={toggleTheme}
        className="flex justify-center items-center bg-primary m-6 py-3 rounded-full text-white font-Mulish font-bold"
      >
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
        <span
          className={`px-2 ${!isMouseOverLeftNav && "hidden"} mobile:block`}
        >
          {isDarkMode ? "Dark" : "Light"}
        </span>
      </button>
    </div>
  );
};

export default LeftNav;
