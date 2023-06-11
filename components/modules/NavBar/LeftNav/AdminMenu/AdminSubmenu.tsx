import Link from "next/link";
import React from "react";
import { CategoryIcon, MicIcon, PlayCircleIcon, HomeSubMenuIcon } from "../../../Vectors";

const AdminSubmenu = () => {
  return (
    <ul className="flex flex-col ml-5 py-5">
      <Link href="/admin/dashboard">
        <li className="px-5 flex items-center hover:text-primary transition-all cursor-pointer text-primary">
          <span className="p-2 bg-gray-200 mx-1 rounded-lg font-poppins">
            <HomeSubMenuIcon />
          </span>
          DashBoard
        </li>
      </Link>
      <Link href="/admin/category">
        <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
          <span className="p-2 bg-gray-200 mx-1 rounded-lg">
            <CategoryIcon />
          </span>
          Category
        </li>
      </Link>
      <Link href="/admin/singerlist">
        <li className="px-5 flex items-center py-2 hover:text-primary transition-all cursor-pointer">
          <span className="p-2 bg-gray-200 mx-1 rounded-lg">
            <MicIcon />
          </span>
          Singer
        </li>
      </Link>

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
