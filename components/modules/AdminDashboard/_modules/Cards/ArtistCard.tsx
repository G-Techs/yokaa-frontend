/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";

interface ArtistCardProps {
  artistAvatar: string;
  artistName: string;
  date: string;
  streams: string;
  streamsBgClassName: string;
  borderColorClassName: string;
}

const ArtistCard: FC<ArtistCardProps> = ({ artistAvatar, artistName, date, streams, streamsBgClassName, borderColorClassName }) => {
  return (
    <div className={`flex justify-between border p-4 rounded-lg items-center ${borderColorClassName}`}>
      <div className="flex gap-3 items-center">
        <img src={artistAvatar} alt={artistName} className="w-16 h-16 object-cover rounded-full" />
        <div>
          <p className="text-gray-800 font-semibold">{artistName}</p>
          <p className="text-gray-500 text-xs">{date}</p>
        </div>
      </div>
      <p className={`p-2 rounded-xl text-sm ${streamsBgClassName}`}>{streams}</p>
    </div>
  );
};

export default ArtistCard;
