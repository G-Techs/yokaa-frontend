/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { songs } from "../utils/dummy";
import { VDots, VPause, VPlay, VStar, VWave } from "../__modules__/_Vectors";
import AudioPlayer from "../utils/config/audioPlayer";
import liveBg from "../static/images/livebg.jpg";
import equlizer from "../static/images/equalizer.gif";

const newRealeaseBg = {
  backgroundImage: `url(${liveBg.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "20px",
};

const NewReleases = () => {
  const [isPlaying, setIsPlaying] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div
      style={newRealeaseBg}
      className="mt-20 mr-5 bg-white rounded-xl shadow-lg"
    >
      <p className="text-2xl font-medium py-5 px-5 bg-white text-gray-700">
        New Release
      </p>
      <div className="w-full overflow-hidden rounded-tr-3xl h-[32rem] shadow-xl rounded-bl-3xl text-white">
        <div className="grid lg:grid-cols-2 grid-cols-1 h-full">
          <div className="flex h-[8rem] flex-col justify-between lg:h-full ">
            <div className="lg:w-[10rem] w-full flex justify-center mx-auto my-auto">
              <img
                src={equlizer.src}
                className="w-[20rem] h-[20rem] object-cover"
              />
            </div>
            <div className="lg:block hidden">
              <div className="mx-2 py-1 ">
                <AudioPlayer tracks={songs} />
              </div>
            </div>
          </div>
          <div className="w-full p-5 overflow-y-scroll no-scrollbar lg:mt-0 mt-6">
            {songs.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` ${
                    isPlaying === index ? "bg-black bg-opacity-10" : ""
                  } flex hover:bg-opacity-50 hover:placeholder:bg-black my-4 p-2 items-center justify-between rounded-md`}
                >
                  <div className="lg:w-20 lg:h-20 max-h-20 w-12 h-12 rounded-br-2xl rounded-tl-2xl overflow-hidden">
                    <img
                      src={item.image}
                      className="object-cover"
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <p className="lg:text-xl font-medium"> {item.title}</p>
                    <p className="text-sm"> {item.artist}</p>
                  </div>
                  <div>
                    <VStar className="w-6 h-6 lg:block hidden" />
                  </div>
                  <div
                    onClick={() => {
                      if (isPlaying === index && !isPaused) {
                        setIsPaused(true);
                        setIsPlaying(index);
                      } else {
                        setIsPaused(false);
                      }
                      setIsPlaying(index);
                    }}
                    className="px-4"
                  >
                    {isPlaying === index && !isPaused ? (
                      <VPause className="w-6 h-6" />
                    ) : (
                      <VPlay className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <VDots className="w-6 h-6 lg:block hidden text-[#d97706]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
