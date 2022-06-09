import React, { useState } from "react";
import { topSongsData } from "../../dummy_data/topSongsData";
import HotSongsByLocation from "./HotSongByLocation";
import HotSongsCard from "./HotSongsCard";

const HotSongs = () => {
  const [data, setData] = useState(topSongsData.slice(0, 12));
  return (
    <div className="flex mobile:flex-col mobile:mr-5">
      <HotSongsCard data={data} />
      <HotSongsByLocation data={data} location={"in DRC"} />
    </div>
  );
};

export default HotSongs;
