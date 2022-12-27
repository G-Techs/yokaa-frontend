import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { leftNavPinedAtom, openMenuAtom } from "../../../lib/atoms";
import { MoonIcon, SunIcon, CloseIcon, PinIcon } from "../../__modules/Vectors";
import NavContentIcons from "./NavContentIcons";
import AdminMenu from "./AdminMenu";
import DashBord from "./DashBoard";

const LeftNav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMouseOverLeftNav, setIsMouseOverLeftNav] = useState(false);
  const [isSubmenu, setIsSubMenu] = useState({
    isAdminSubmenu: false,
    isDashboardSubmenu: true,
  });
  const { isAdminSubmenu, isDashboardSubmenu } = isSubmenu;
  const [isLeftNavPined, setIsLeftNavPined] = useRecoilState(leftNavPinedAtom);
  const [isMenuOpened, setIsMenuOpened] = useRecoilState(openMenuAtom);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleSubmenu = (menuName: string) => {

    menuName === "dashboard"
      ? setIsSubMenu({
          isAdminSubmenu: false,
          isDashboardSubmenu: !isDashboardSubmenu,
        })
      : setIsSubMenu({
          isDashboardSubmenu: false,
          isAdminSubmenu: !isAdminSubmenu,
        });
  };

  const onPinLeftNav = () => {
    setIsLeftNavPined(!isLeftNavPined);
  };

  return (
    <div
      onMouseOver={() => setIsMouseOverLeftNav(true)}
      onMouseOut={() => setIsMouseOverLeftNav(isLeftNavPined ? true : false)}
      className={`bg-white shadow-2xl h-full w-fit font-Mulish z-10 fixed top-0 bottom-0 left-0 flex flex-col justify-between  transition-all
      ${!isMenuOpened && "mobile:w-0 mobile:overflow-hidden transition-all"}
      `}
    >
      <div>
        <div className="px-3 py-5 flex justify-between mobile:items-center">
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
          <button
            onClick={onPinLeftNav}
            className={`${isMouseOverLeftNav ? "block" : "hidden"} ${
              isLeftNavPined && "p-2 rounded-full text-white bg-primary"
            } mobile:hidden`}
          >
            <PinIcon />
          </button>
        </div>
        <NavContentIcons isMouseOverLeftNav={isMouseOverLeftNav} />
        <div
          className={`${
            !isMouseOverLeftNav ? "w-0 overflow-hidden" : "w-full"
          } mobile:w-full`}
        >
          <DashBord
            isDashboardSubmenu={isDashboardSubmenu}
            toggleSubmenu={toggleSubmenu}
          />
          <AdminMenu
            isAdminSubmenu={isAdminSubmenu}
            toggleSubmenu={toggleSubmenu}
          />
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
