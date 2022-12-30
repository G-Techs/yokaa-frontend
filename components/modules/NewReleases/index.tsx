/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { songs } from "../utils/dummy";
import { VDots, VStar } from "../__modules__/_Vectors";
import AudioPlayer from "../utils/config/audioPlayer";
import liveBg from "../static/images/livebg.jpg";
// import equalizer from "../static/images/equalizer.gif";
import Equalizer from "./Equalizer";
import { ISong } from "../../../types";
import PlayerController from "./PlayerController";
import { type } from "os";

const NewReleases = () => {
  const [isPlaying, setIsPlaying] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const [tracks, setTracks] = useState<ISong[]>(songs);

  const offsetH= useRef<HTMLDivElement>(null);
  const clientH= useRef<HTMLDivElement>(null);

  return (
    <div className="mt-20 mr-5 bg-white shadow-lg rounded-bl-[3.125rem]">
      <p className="text-2xl py-5 px-5 bg-white text-gray-700 font-bold">
        New Release
      </p>
      <div className="w-full relative overflow-hidden h-[30rem] rounded-bl-[3.125rem] shadow-xl text-white">
        <img
          src={liveBg.src}
          alt="live background"
          className="absolute h-full w-full object-cover rounded-tr-[3.125rem] rounded-bl-[3.125rem]"
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 h-full absolute w-full rounded-tr-[3.125rem] bg-gradient-to-l from-black/90 via-black/80 to-black/20">
          <div className="flex h-[8rem] pb-5 flex-col justify-between lg:h-full ">
            <div className="lg:w-[10rem] w-full flex justify-center mx-auto my-auto">
              <Equalizer />
            </div>
            <div className="lg:block hidden">
              <div className="mx-2 py-1 mr-20">
                <AudioPlayer
                  tracks={songs}
                  isMinified={true}
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
          <div ref={offsetH}  className="m-5 overflow-y-scroll scroll-smooth no-scrollbar lg:mt-0 mt-6">
            {songs.map((item, index) => {
              return (
              <div
                  key={index}
                  ref={clientH}
                  // this behavior scroll the selected element to the top of the parent div
                  onClick={() => {
                    if(offsetH.current){
                      offsetH.current.scrollTop = 90 *index
                    }
                    setIsPlaying(index)}
                  
                }
                  className={`flex cursor-pointer hover:bg-opacity-50 hover:placeholder:bg-black my-4 p-2 items-center justify-between rounded-md ${
                    isPlaying === index ? "bg-black/40 backdrop-blur-md" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="lg:w-[3.75rem] lg:h-[3.75rem] max-h-20 w-12 h-12 rounded-br-2xl rounded-tl-2xl overflow-hidden">
                      <img
                        src={item.img}
                        className="object-cover"
                        alt={item.title}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="lg:text-base font-semibold">{item.title}</p>
                      <p className="text-sm">{item.artist}</p>
                    </div>
                  </div>
                  <div>
                    <VStar className="w-6 h-6 lg:block hidden" />
                  </div>
                  <PlayerController
                    index={index}
                    isPaused={isPaused}
                    isPlaying={isPlaying}
                    setIsPaused={setIsPaused}
                    setIsPlaying={setIsPlaying}
                  />
                  <div>
                    <VDots className="w-6 h-6 lg:block hidden text-primary" />
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
