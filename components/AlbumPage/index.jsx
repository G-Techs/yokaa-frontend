import React from "react";
import liveBg from "../../components/modules/static/images/livebg.jpg";
import equalizer from "../../components/modules/static/images/equalizer.gif";
import { topSongsData } from "../dummy_data/topSongsData";
import BottomPlayer from "../BottomPaler/BottomPalyer";
import SongCard from "../modules/__modules__/Card/SongCard";
import { TopNav } from "../modules/NavBar";
import { LeftNav } from "../modules/NavBar";
import HotSongs from "../modules/HotSongs";
import { useRecoilValue } from "recoil";
import { leftNavPinedAtom } from "../lib/atoms";

const albumBg = {
  backgroundImage: `url(${liveBg.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const AlbumPage = () => {
  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);
  return (
    <div className="bg-globalBg">
      <div
        className={`relative flex flex-col ${
          !isLeftNavPined ? "ml-28 transition-all" : "transition-all ml-72"
        } mobile:ml-5`}
      >
        <TopNav />
        <div className="flex mt-24 h-[30rem] mobile:h-fit relative mobile:flex-col">
          <div
            className="relative w-full rounded-tr-3xl rounded-bl-3xl flex flex-col"
            style={albumBg}
          >
            <div className="flex items-center center text-white">
              <img
                src={topSongsData[2].img}
                className="w-12 h-12 object-cover m-10 rounded-xl"
              />
              <div>
                <p className="font-bold">{topSongsData[2].artist}</p>
                <p className="text-xs">{topSongsData[2].title}</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={equalizer.src}
                className="w-[20rem] h-[20rem] object-cover"
              />
            </div>
            <BottomPlayer isFixed={false} />
          </div>
          <div className="w-full flex flex-col md:flex-wrap ml-5 mobile:h-fit">
            {topSongsData.map((song) => {
              return <SongCard song={song} />;
            })}
          </div>
        </div>
        <HotSongs />
      </div>
      <LeftNav />
      <BottomPlayer />
    </div>
  );
};

export default AlbumPage;
