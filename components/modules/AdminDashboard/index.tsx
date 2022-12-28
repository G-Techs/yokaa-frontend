import React, { FC } from "react";
import numberConverter from "../utils/helpers/numberConverter";
import { VImageCard, VRadar, VRefund, VTag } from "../__modules/Vectors";
import MusicStatisticCard from "./_modules/Cards/MusicStatisticCard";
import RevenueStatChart from "./_modules/RevenueStatChart";
import BestArtist from "./_modules/BestArtist";

interface AdminDashboardProps {
  isTopNav: boolean;
}

const AdminDashboard: FC<AdminDashboardProps> = ({ isTopNav }) => {
  return (
    <div
      className={`my-24 mr-5 ${
        isTopNav && "my-40"
      } transition-all flex flex-col gap-5 h-full`}
    >
      <div className="flex gap-5 mobile:grid mobile:grid-cols-2 mobilesm:grid-cols-1">
        <MusicStatisticCard
          statTitle="Music Artist"
          statValue={numberConverter(352)}
          statIcon={<VImageCard />}
          iconColorClassName="text-primary"
          iconBgClassName="bg-primary"
        />
        <MusicStatisticCard
          statTitle="Music Album"
          statValue={numberConverter(987)}
          statIcon={<VTag />}
          iconColorClassName="text-[#1ee2ac]"
          iconBgClassName="bg-[#1ee2ac]"
        />
        <MusicStatisticCard
          statTitle="Music Followers"
          statValue={numberConverter(25012)}
          statIcon={<VRadar />}
          iconColorClassName="text-[#ff7750]"
          iconBgClassName="bg-[#ff7750]"
        />
        <MusicStatisticCard
          statTitle="Music comments"
          statValue={numberConverter(5300000)}
          statIcon={<VRefund />}
          iconColorClassName="text-[#00d0ff]"
          iconBgClassName="bg-[#00d0ff]"
        />
      </div>
      <div className="flex gap-5 w-full mobile:flex-col">
        <div className="w-2/3 mobile:w-full">
          <RevenueStatChart />
        </div>
        <div className="w-2/5 h-auto mobile:w-full">
          <BestArtist />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
