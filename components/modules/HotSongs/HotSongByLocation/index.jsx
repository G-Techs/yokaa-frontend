import React, { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../__modules/Vectors";
import { useSideScroll } from "../../hooks";

const HotSongsByLocation = ({ data, location }) => {
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
    <div className="w-1/2 bg-white my-10 px-5 py-5 rounded-xl shadow-xl mx-3 mobile:w-full mobile:mx-0">
      <div className="flex justify-between items-center pb-5 border-b">
        <h2 className="font-bold text-2xl">Hot Songs {location}</h2>
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
          const { id, title, img, artist } = song;
          return (
            <div
              key={id}
              className="flex flex-col w-[49%] my-5 items-center mobilesm:w-full scroll-snap-item mx-2"
            >
              <img
                src={img}
                alt={artist}
                className="w-full object-cover h-48 rounded-xl"
              />
              <div className="py-5 text-center">
                <p className="text-semibold">{title}</p>
                <p className="text-gray-500 text-xs">{artist}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotSongsByLocation;
