import React, { useState } from "react";
import { topSongsData } from "../dummy_data/topSongsData";

const CarouselCard = ({data}) => {
    

  return (
    <div className="py-4">
        <div className="flex flex-wrap -ml-4 -mr-4">
            {data.map((song)=>{
                const {id,title,img,artist} = song;
                return(
                    <div key={id} className="w-full md:w-1/3  lg:w-1/6 " >
                        <div className="m-4 border  rounded-bl-3xl rounded-tr-3xl h-50" >
                            <div className="relative flex flex-col justify-center items-center">
                                <img src={img} alt={artist} className="rounded-bl-3xl rounded-tr-3xl  w-full object-fit h-64 md:min-h-32"/>
                            </div>

                           <div className="flex flex-col justify-center items-center p-4">
                                <h1 className="text-gray-800   font-semibold capitalize">{title}</h1>
                                <h2 className="text-gray-400 tx-md font-medium  capitalize">{artist}</h2>
                           </div>
                        </div>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CarouselCard