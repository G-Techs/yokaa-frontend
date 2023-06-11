import React, { FC } from "react";
import { ISong } from "../../../../types";
import SongCard from "../../Card/SongCard";
import Carousel from "../../Carousel";

interface HotSongsCardProps {
  data: ISong[];
}

const HotSongsCard: FC<HotSongsCardProps> = ({ data }) => {
  return (
    <Carousel className="w-1/2 bg-white  px-5 py-5 rounded-xl shadow-xl  mobile:w-full mobile:mx-0" title="Hot Songs">
      {data.map((song, index) => {
        return <SongCard key={index} song={song} />;
      })}
    </Carousel>
  );
};

export default HotSongsCard;
