import React, { useState ,useRef} from "react";
import { topSongsData } from "../dummy_data/topSongsData";
import { ArrowLeft, ArrowRight } from "../modules/__modules/Vectors";
import CarouselData from "./CarouselData";
const Carousel = () => {

  const [data,setData] = useState(topSongsData.slice(0,6));
  const checkNumber = (index) => {
    if (index > topSongsData.length - 1) {
      return 0;
    }
    if (index < 0) {
      return topSongsData.length - 1;
    }
    return index;
  };

  
  const prevSongs = (e) => {
    e.preventDefault();
    setAlbum((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextSong = (e) => {
    e.preventDefault()
    setAlbum((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <div className="mt-8  p-4 rounded-lg shadow-lg mr-4 bg-white">
      <div className=" flex sm:justify-between justify-center border-b border-gray-300 p-2  ">
        <p className="font-medium sm:text-3xl py-2 text-xl">Featured Albums</p>
        <div className="sm:flex flex-row space-x-4 hidden">
          <button onClick={prevSongs}>
            <ArrowLeft color="#d97706" size={38} />
          </button>
          <button onClick={nextSong}>
            <ArrowRight color="#d97706" size={38} />
          </button>
        </div>
      </div>

      <CarouselData data={data} setData={setData} />
  
    </div>
  );
};

export default Carousel;
