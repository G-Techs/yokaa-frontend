import React, { useState } from "react";
import {
  LoginIcon,
  MenuOutlineIcon,
  MicrophoneIcon,
  NotificationIcon,
  SeachIcon,
  ChevronRightIcon,
} from "../../__modules/Vectors";
import { openMenuAtom } from "../../../lib/atoms";
import { useRecoilState } from "recoil";
import NotificationModal from "./__modules/NotificationModal";
import ProfileMenuModal from "./__modules/ProfileMenuModal";
import Link from "next/link";

const TopNav = () => {
  const [isTopMenu, setIsTopMenu] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useRecoilState(openMenuAtom);
  const [isNotificationModal, setIsNotificationModal] = useState(true);
  const [isProfileMenuModal, setIsProfileMenuModal] = useState(true);

  const isloggedIn = false;

  const toggleNoticationNavModals = () => {
    setIsNotificationModal(!isNotificationModal);
  };

  const toggleProfileNavModals = () => {
    setIsProfileMenuModal(!isProfileMenuModal);
  };

  const toggleTopMenu = () => {
    setIsTopMenu(!isTopMenu);
  };

  return (
    <>
      <div className="flex absolute top-0 left-0 right-0 justify-between items-center py-4 pr-5 font-Mulish">
        <div className="mobile:hidden">
          <ul className="inline-flex font-bold">
            <Link href='/'>
              <li className="pr-5 hover:text-primary cursor-pointer text-primary">
                Home
              </li>
            </Link>
            <Link href='/latest'>
                <li className="px-5 hover:text-primary cursor-pointer">Latest</li>
            </Link>
            <Link href='/album'>
                <li className="px-5  hover:text-primary cursor-pointer">Album</li>
            </Link>
            <Link href='/trending'>
              <li className="px-5  hover:text-primary cursor-pointer">
                Trending
              </li>
            </Link>
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
              <button
                className="px-5 relative"
                onClick={toggleNoticationNavModals}
              >
                <NotificationIcon />
                <span className="absolute top-0 bg-primary text-xs text-white px-1 rounded-full">
                  +
                </span>
              </button>
              <button
                className={`px-5  flex justify-center items-center bg-primary py-1 rounded-md text-white ${
                  !isloggedIn && "hidden"
                }`}
              >
                <LoginIcon className="mx-2" /> Log in
              </button>
              <button onClick={toggleProfileNavModals}>
                <img
                  src="https://bukovskevrchy.pl/img/d43b5923dab8424859b9b68ed4bcdc61.jpg"
                  alt="profile"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isTopMenu ? "mobile:block" : "mobile:hidden"} ${
          isNotificationModal
            ? "scale-y-0 transition-all"
            : "scale-y-100 transition-all"
        }`}
      >
        <NotificationModal />
      </div>
      <div
        className={`${isTopMenu ? "mobile:block" : "mobile:hidden"} ${
          isProfileMenuModal
            ? "scale-y-0 transition-all"
            : "scale-y-100 transition-all"
        }`}
      >
        <ProfileMenuModal />
      </div>
    </>
  );
};

export default TopNav;
