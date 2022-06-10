import React, { useState } from "react";
import { topSongsData } from "../../dummy_data/topSongsData";
import TopSongCard from "../Card/TopSongCard";
import { ViewMoreIcon } from "../__modules/Vectors";

const TopSongs = () => {
  const [data, setData] = useState(topSongsData.slice(0, 12));
  const [readAll, setReadAll] = useState(false);

  const viewMore = (e) => {
    setData(topSongsData);
    setReadAll(!readAll);
    if (readAll === false) {
      setData(topSongsData.slice(0, 12));
    }
  };

  return (
    <div className="mt-20 bg-white shadow-xl p-4 pb-0 rounded-lg mr-5 flex flex-col">
      <div className="flex justify-between items-center pb-4 border-b border-gray-400">
        <h1 className="font-semibold text-3xl text-gray-600">Top Songs</h1>
        <p
          className="flex justify-center items-center cursor-pointer text-primary text-md font-bold transition-all"
          onClick={viewMore}
        >
          {readAll ? "View More" : "View less"}
          <span className={`ml-1 ${!readAll && "rotate-90 transition-all"}`}>
            <ViewMoreIcon />
          </span>
        </p>
      </div>
      <TopSongCard data={data} setData={setData} />
    </div>
  );
};

export default TopSongs;
