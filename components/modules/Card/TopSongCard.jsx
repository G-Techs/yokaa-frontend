import React, { useState } from "react";
import { topSongsData } from '../../dummy_data/topSongsData';
import { PlayCircleIcon } from "../__modules/Vectors";

const TopSongCard = ({data}) => {
    const [onImageHover, setOnImageHover] = useState(false);
    const [taggedElement, SetTaggedElement] = useState(10000);
    const hover = (e)=>{
        SetTaggedElement(e._targetInst.key)     
    }
    const songHover = (id)=>{
        if(taggedElement == id){
            setOnImageHover(true)
        }
    }
    


  return (
    <div className="py-4">
        <div className="flex flex-wrap -ml-4  -mr-4">
            {data.map((song)=>{
                const {id,title,img,artist} = song;
                return(
                    <div key={id} className="w-full md:w-1/3  lg:w-1/6 " onMouseEnter={hover} onMouseLeave={()=>setOnImageHover(false)} onMouseOver={()=>songHover(id)}>
                        <div className="m-4 border  rounded-bl-2xl rounded-tr-2xl h-50" >
                            <div className="relative flex flex-col justify-center items-center">
                                <img src={img} alt={artist} className="rounded-bl-2xl rounded-tr-2xl h-full md:h-32 w-full object-cover"/>
                                <div className={`${onImageHover && id == taggedElement?'absolute':'hidden'}`} 
>
                                    <PlayCircleIcon className="text-4xl text-white cursor-pointer hover:bg-blend-darken"/>
                                </div>
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

export default TopSongCard