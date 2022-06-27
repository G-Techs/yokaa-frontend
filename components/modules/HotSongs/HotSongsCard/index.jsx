import React, { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../__modules/Vectors";
import { useSideScroll } from "../../hooks";
import SongCard from "../../__modules__/Card/SongCard";

const HotSongsCard = ({ data }) => {
  const scrollContainer = useRef(null);
  const sideScroll = useSideScroll();

  const onScrollLeft = () => {
    sideScroll(
      scrollContainer.current,
      40,
      200,
      -scrollContainer.current.offsetWidth
    );
  };

  const onScrollRight = () => {
    sideScroll(
      scrollContainer.current,
      40,
      200,
      scrollContainer.current.offsetWidth
    );
  };

  return (
    <div className="w-1/2 bg-white  px-5 py-5 rounded-xl shadow-xl  mobile:w-full mobile:mx-0">
      <div className="flex justify-between items-center pb-5 border-b">
        <h2 className="font-bold text-2xl text-gray-700">Hot Songs</h2>
        <div className="flex">
          <div
            onClick={onScrollLeft}
            tabIndex={0}
            onKeyDown={() => null}
            className="bg-primary p-2 text-white rounded-full mx-1 cursor-pointer hover:bg-white hover:shadow-xl hover:text-primary transition-all"
          >
            <ArrowLeftIcon />
          </div>
          <div
            onClick={onScrollRight}
            tabIndex={0}
            onKeyDown={() => null}
            className="bg-primary p-2 text-white rounded-full mx-1 cursor-pointer hover:bg-white hover:shadow-xl hover:text-primary transition-all"
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>
      <div
        ref={scrollContainer}
        className="flex flex-col flex-1 flex-wrap justify-start items-center overflow-y-auto h-72 no-scrollbar scroll-smooth scroll-snap-container"
      >
        {data.map((song) => {
          return <SongCard song={song} />;
        })}
      </div>
    </div>
  );
};

export default HotSongsCard;
