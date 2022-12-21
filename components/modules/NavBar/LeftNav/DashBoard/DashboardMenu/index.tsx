import React from "react";
import PropTypes from "prop-types";
import {
  HomeSubMenuIcon,
  HeadPhonesIcon,
  FileMusicIcon,
  ArrowExpendUpRighIcon,
  DownLoadOutlineIcon,
  FilePlusIcon,
  FavoriteIcon,
} from "../../../../__modules/Vectors";

const DashboardMenu = () => {
  return (
    <ul className="flex flex-col ml-5 py-5">
      <li className="px-5 flex items-center hover:text-primary transition-all cursor-pointer text-primary">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg font-poppins">
          <HomeSubMenuIcon />
        </span>
        Home
      </li>
      <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg">
          <HeadPhonesIcon />
        </span>
        Latest
      </li>
      <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg">
          <FileMusicIcon />
        </span>
        Album
      </li>
      <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg">
          <ArrowExpendUpRighIcon />
        </span>
        Trending
      </li>
      <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg">
          <DownLoadOutlineIcon />
        </span>
        Streaming
      </li>
      <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg">
          <FilePlusIcon />
        </span>
        Playlist
      </li>
      <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg">
          <FavoriteIcon />
        </span>
        Favorite
      </li>
    </ul>
  );
};

export default DashboardMenu;
