import React from "react";
import {
  CategoryIcon,
  MicIcon,
  PlayCircleIcon,
  HomeSubMenuIcon,
} from "../../../../__modules/Vectors";

const AdminSubmenu = () => {
  return (
    <ul className="flex flex-col ml-5 py-5">
      <li className="px-5 flex items-center hover:text-primary transition-all cursor-pointer text-primary">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg font-poppins">
          <HomeSubMenuIcon />
        </span>
        DashBoard
      </li>
      <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg">
          <CategoryIcon />
        </span>
        Category
      </li>
      <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg">
          <MicIcon />
        </span>
        Singer
      </li>
      <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
        <span className="p-2 bg-gray-200 mx-1 rounded-lg">
          <PlayCircleIcon />
        </span>
        Songs
      </li>
    </ul>
  );
};

export default AdminSubmenu;