import React, { FC } from "react";
import { AdminIcon, ChevronRightIcon } from "../../../Vectors";
import AdminSubmenu from "./AdminSubmenu";
interface IProps {
  isAdminSubmenu: boolean;
  toggleSubmenu: (menuType: string) => void;
}

const AdminMenu: FC<IProps> = ({ isAdminSubmenu, toggleSubmenu }) => {
  return (
    <div className="py-5">
      <div className={`flex items-center px-3 border-r-2 ${isAdminSubmenu && "border-primary text-primary"}`}>
        <AdminIcon />
        <div className="flex items-center justify-between w-56">
          <p className="px-2">Admin</p>
          <button onClick={() => toggleSubmenu("admin")}>
            <ChevronRightIcon className={`${isAdminSubmenu && "rotate-90"} transition-all`} />
          </button>
        </div>
      </div>
      <div className={`${isAdminSubmenu ? "max-h-fit" : "max-h-0 overflow-hidden"} transition-all overflow-y-auto`}>
        <AdminSubmenu />
      </div>
    </div>
  );
};

export default AdminMenu;
