import React, { useState } from "react";
import { ISong } from "../../../types";
import { topSongsData } from "../../dummy_data/topSongsData";
import HotSongsByLocation from "./HotSongByLocation";
import HotSongsCard from "./HotSongsCard";

const HotSongs = () => {
  const [data, setData] = useState<ISong[]>(topSongsData.slice(0, 12));
  return (
    <div className="flex mr-5 mobile:flex-col gap-8 mt-6 mb-24">
      <HotSongsCard data={data} />
      <HotSongsByLocation data={data} location={"in DRC"} />
    </div>
  );
};

export default HotSongs;
