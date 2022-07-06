import React from "react";

import { useRecoilValue } from "recoil";
import { leftNavPinedAtom } from "../lib/atoms";
import TopSongs from "../modules/TopSongs/TopSongs";
import HotSongs from "../modules/HotSongs";
import NewReleases from "../modules/NewReleases";
import PageCard from "../modules/__modules__/Card/PageCard";

const LandingPage = () => {
  return (
    <div className="bg-globalBg">
      <PageCard>
        <NewReleases />
        <TopSongs />
        <HotSongs />
      </PageCard>
    </div>
  );
};

export default LandingPage;
