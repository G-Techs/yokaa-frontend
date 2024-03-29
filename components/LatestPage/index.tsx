import React from "react";
import HotSongs from "../modules/HotSongs";
import TopSongs from "../modules/TopSongs/TopSongs";
import PageCard from "../modules/layout/PageLayout";

const LatestPage = () => {
  return (
    <div className="bg-globalBg">
      <PageCard setIsTopNav={() => null}>
        <div className="mt-20">
          <TopSongs />
          <HotSongs />
        </div>
      </PageCard>
    </div>
  );
};

export default LatestPage;
