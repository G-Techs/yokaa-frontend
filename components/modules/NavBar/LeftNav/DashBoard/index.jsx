import React, { useState } from "react";
import { ChevronRightIcon, HomeIcon } from "../../../__modules/Vectors";
import DashboardMenu from "./DashboardMenu";

const DashBord = () => {
  const [isDashBoard, setIsDashboard] = useState(true);
  const toggleDashboard = () => {
    setIsDashboard(!isDashBoard);
  };
  return (
    <div>
      <div className="flex items-center px-3 text-primary border-r-2 border-primary">
        <HomeIcon />
        <div className="flex items-center justify-between w-56">
          <p className="px-2">DashBord</p>
          <button onClick={toggleDashboard}>
            <ChevronRightIcon
              className={`${isDashBoard && "rotate-90"} transition-all`}
            />
          </button>
        </div>
      </div>
      <div
        className={`${
          isDashBoard ? "max-h-fit" : "max-h-0 overflow-hidden"
        } transition-all`}
      >
        <DashboardMenu />
      </div>
    </div>
  );
};

export default DashBord;
