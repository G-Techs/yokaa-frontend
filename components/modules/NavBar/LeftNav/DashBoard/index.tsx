import React, { FC } from "react";
import { ChevronRightIcon, HomeIcon } from "../../../Vectors";
import DashboardMenu from "./DashboardMenu";

interface IProps {
  isDashboardSubmenu: boolean;
  toggleSubmenu: (menuType: string) => void;
}
const DashBord: FC<IProps> = ({ isDashboardSubmenu, toggleSubmenu }) => {
  return (
    <div>
      <div className={`flex items-center px-3 border-r-2 ${isDashboardSubmenu && "border-primary text-primary"}`}>
        <HomeIcon />
        <div className="flex items-center justify-between w-56">
          <p className="px-2">DashBoard</p>
          <button onClick={() => toggleSubmenu("dashboard")}>
            <ChevronRightIcon className={`${isDashboardSubmenu && "rotate-90"} transition-all`} />
          </button>
        </div>
      </div>
      <div className={`${isDashboardSubmenu ? "max-h-fit" : "max-h-0 overflow-hidden"} transition-all`}>
        <DashboardMenu />
      </div>
    </div>
  );
};

export default DashBord;
