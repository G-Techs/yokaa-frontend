import React from "react";
import HotSongs from "../modules/HotSongs";
import { leftNavPinedAtom } from "../lib/atoms";
import { useRecoilValue } from "recoil";
import TopSongs from "../modules/TopSongs/TopSongs";
import PageCard from "../modules/__modules__/Card/PageCard";

const LatestPage = () => {
  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);

  return (
    <div className="bg-globalBg">
      <PageCard>
        <div className="mt-20">
          <TopSongs />
          <HotSongs />
        </div>
      </PageCard>
    </div>
  );
};

export default LatestPage;
