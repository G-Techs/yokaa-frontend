import React, { FC } from "react";
import { ISong } from "../../../types";

interface FeaturedAlbumCardProps {
  album: ISong;
}

const FeaturedAlbumCard: FC<FeaturedAlbumCardProps> = ({ album }) => {
  return (
    <div className="w-80 py-4 pr-4">
      <div className="border rounded-bl-3xl rounded-tr-3xl h-50">
        <div className="flex flex-col justify-center items-center">
          <img src={album.img} alt={album.artist} className="rounded-bl-3xl rounded-tr-3xl  w-full object-cover h-60 md:min-h-32" />
        </div>

        <div className="flex flex-col justify-center items-center p-4 capitalize">
          <h1 className="text-gray-800 font-semibold ">{album.title}</h1>
          <h2 className="text-gray-400  font-medium ">{album.artist}</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAlbumCard;
