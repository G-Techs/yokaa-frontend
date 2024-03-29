import React, { useState } from "react";
import FeaturedAlbumCard from "../Card/FeaturedAlbumCard";
import Carousel from "../Carousel";
import { topSongsData } from "../../dummy_data/topSongsData";

const FeaturedAlbum = () => {
  const [data, _] = useState(topSongsData.slice(0, 6));
  return (
    <Carousel height={360} title="Featured Albums" className="mt-8 p-4 rounded-lg shadow-lg mr-4 bg-white">
      {data.map((song, index) => {
        return <FeaturedAlbumCard album={song} key={index} />;
      })}
    </Carousel>
  );
};

export default FeaturedAlbum;
