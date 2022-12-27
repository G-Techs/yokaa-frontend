/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { songs } from "../utils/dummy";
import { VDots, VPause, VPlay, VStar, VWave } from "../__modules__/_Vectors";
import liveBg from "../../../public/livebg.jpg";
import AudioPlayer from "../utils/config/audioPlayer";
import equalizer from "../static/images/equalizer.gif";

interface TrackItems{
  [index: number]:{title: string;}
  artist: string;
  audioSrc: string;
  image: string;}
}


const NewReleases = () => {
  let songsData:TrackItems=songs;  
  const [tracksList, setTracksList] = useState(songsData)
  const [isPlaying, setIsPlaying] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div
      className="mt-20 mr-5 bg-white shadow-lg rounded-bl-[50px]"
    >
      <p className="text-2xl  py-5 px-5 bg-white text-gray-700 font-bold">
        New Release
      </p>
      <div className="w-full relative overflow-hidden h-[32rem] rounded-bl-[50px] shadow-xl text-white">
        <img
          src={liveBg.src}
          alt="live background"
          className="absolute h-full w-full object-cover rounded-tr-[50px] rounded-bl-[50px]"
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 h-full absolute w-full">
          <div className="flex h-[8rem] flex-col justify-between lg:h-full ">
            <div className="lg:w-[10rem] w-full flex justify-center mx-auto my-auto">
              <img
                src={equalizer.src}
                className="w-[20rem] h-[20rem] object-cover"
              />
            </div>
            <div className="lg:block hidden">
              <div className="mx-2 py-1 ">
                <AudioPlayer tracks ={tracksList} />
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
