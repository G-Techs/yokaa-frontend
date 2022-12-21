import React, { useState } from "react";
import { PauseIcon, PlayCircleIcon } from "../../__modules/Vectors";

const TopSongCard = (props: any) => {
  const [isHovering, setIsHovering] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingIndex, setIsPlayingIndex] = useState(-1);

  interface SongoData{
    id:number, title:string, img:"string", artist:string
  }

  return (
    <div className="py-4">
      <div className="flex flex-wrap -ml-4 -mr-4">
        {props.data.map((song : SongoData) => {
          const { id, title, img, artist } = song as SongoData;
          return (
            <div
              key={id}
              className="w-full md:w-1/3  lg:w-1/6 "
              onMouseOver={() => setIsHovering(id)}
              onMouseLeave={() => setIsHovering(-1)}
            >
              <div className="m-4 border rounded-bl-2xl rounded-tr-2xl h-50">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={img}
                    alt={artist}
                    className="rounded-bl-2xl w-full rounded-tr-2xl h-full md:h-44 object-cover"
                  />
                  <div
                    className={`absolute ${
                      isHovering === id || isPlayingIndex === id
                        ? "block"
                        : "hidden"
                    } `}
                    onClick={() => {
                      if (isPlayingIndex === id && !isPlaying) {
                        setIsPlaying(true);
                        setIsPlayingIndex(id);
                      } else {
                        setIsPlaying(false);
                      }
                      setIsPlayingIndex(id);
                    }}
                  >
                    {!isPlaying && isPlayingIndex === id ? (
                      <PauseIcon className="w-12 h-12 text-white cursor-pointer hover:bg-blend-darken" />
                    ) : (
                      <PlayCircleIcon className="text-4xl text-white cursor-pointer hover:bg-blend-darken" />
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-4">
                  <h1 className="text-gray-800   font-semibold capitalize">
                    {title}
                  </h1>
                  <h2 className="text-gray-400 tx-md font-medium  capitalize">
                    {artist}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSongCard;
