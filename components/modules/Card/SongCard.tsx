import React, { FC } from "react";
import { ISong } from "../../../types";

interface SongCardProps {
  song: ISong;
}

const SongCard: FC<SongCardProps> = ({ song }) => {
  const { id, img, artist, title } = song;
  return (
    <div key={id} className="flex my-5 items-center w-1/2 mobilesm:w-full scroll-snap-item">
      <img src={img} alt={artist} className="w-14 object-cover h-14 rounded-tl-3xl rounded-full" />
      <div className="px-5 capitalize">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-gray-400 text-sm font-medium">{artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
