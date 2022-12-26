import React, { FC } from "react";
import {
  HomeSubMenuIcon,
  HeadPhonesIcon,
  FileMusicIcon,
  ArrowExpendUpRighIcon,
  DownLoadOutlineIcon,
  FilePlusIcon,
  FavoriteIcon,
  AdminIcon,
} from "../../../__modules/Vectors";

interface IProps {
  isMouseOverLeftNav: boolean;
}

const NavContentIcons: FC<IProps> = ({ isMouseOverLeftNav }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center mobile:hidden ${
        isMouseOverLeftNav && "hidden"
      }`}
    >
      <HomeSubMenuIcon className="my-3 text-2xl text-primary" />
      <HeadPhonesIcon className="my-3 text-2xl" />
      <FileMusicIcon className="my-3 text-2xl" />
      <ArrowExpendUpRighIcon className="my-3 text-2xl" />
      <DownLoadOutlineIcon className="my-3 text-2xl" />
      <FilePlusIcon className="my-3 text-2xl" />
      <FavoriteIcon className="my-3 text-2xl" />
      <AdminIcon className="my-3 text-2xl" />
    </div>
  );
};

export default NavContentIcons;
