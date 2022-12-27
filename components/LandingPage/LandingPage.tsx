import React, { useState } from "react";
import TopSongs from "../modules/TopSongs/TopSongs";
// import HotSongs from "../modules/HotSongs";
import NewReleases from "../modules/NewReleases";
import PageCard from "../modules/__modules__/Card/PageCard";
// import FeaturedAlbum from "../modules/FeaturedAlbum";

const LandingPage = () => {
  const [isTopNav, setIsTopNav] = React.useState(false);

  return (
    <div className="bg-globalBg">
    <PageCard setIsTopNav={setIsTopNav} >
        <NewReleases />
        <TopSongs />
        {/* <FeaturedAlbum />
        <HotSongs />*/}
      </PageCard>  
    </div>
  );
};

export default LandingPage;
