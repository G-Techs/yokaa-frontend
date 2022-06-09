/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'
import liveBg from "../static/images/livebg.jpg"
import { songs } from '../utils/dummy'
import { VDots, VPause, VPlay, VStar, VWave } from '../__modules__/_Vectors'
import dynamic from 'next/dynamic';

const AudioPlayer = dynamic(() => import('../utils/config/audioPlayer'))

const NewReleases = () => {
    const [timeLeft, setTimeLeft] = useState("0")
    const [isPlaying, setIsPlaying] = useState('')
    const [isPaused, setIsPaused] = useState(false)
    return (
        <div className="mt-20 mr-5 ">
            <p className='text-2xl font-medium'>New Release</p>
            <div className='w-full  relative overflow-hidden rounded-tr-3xl h-[32rem] rounded-bl-3xl shadow-lg'>
                <Image layout='fixed' src={liveBg} alt="empty" className='' />
                <div className='absolute inset-0 text-white'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 h-full'>
                        <div className='flex h-[8rem] flex-col justify-between lg:h-full '>
                            <div className='lg:w-[10rem] w-full flex justify-center mx-auto my-auto'>
                                <VWave className="animate-pulse lg:w-44 lg:h-44 mt-6 w-32 h-32 " />
                            </div>
                            <div className='lg:block hidden'>
                                <div className="mx-2 py-1 ">
                                    <AudioPlayer tracks={songs} />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-5 overflow-y-scroll no-scrollbar lg:mt-0 mt-6' >
                            {
                                songs.map((item, index) => {
                                    return (
                                        <div key={index} className={` ${isPlaying === item.artist ? 'bg-black bg-opacity-10 backdrop-blur-md' : ''} flex hover:bg-opacity-50 hover:placeholder:bg-black my-4 p-2 items-center justify-between rounded-md`}>
                                            <div className='lg:w-20 lg:h-20 max-h-20 w-12 h-12  rounded-br-2xl rounded-tl-2xl overflow-hidden'>
                                                <img src={item.image} className="object-cover" alt={item.title} />
                                            </div>
                                            <div className='flex flex-col '>
                                                <p className='lg:text-xl font-medium' > {item.title}</p>
                                                <p className='text-sm'> {item.artist}</p>

                                            </div>

                                            <div>
                                                <VStar className='w-6 h-6  lg:block hidden' />
                                            </div>
                                            <div onClick={() => {
                                                setIsPlaying(item.artist)
                                                setIsPaused((prev) => !prev)
                                            }} className="px-4">
                                                {isPlaying === item.artist && isPaused ? <VPause className='w-6 h-6' /> : <VPlay className='w-6 h-6' />}
                                            </div>
                                            <div><VDots className='w-6 h-6 lg:block hidden text-[#d97706]' /></div>


                                        </div>

                                    )

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default NewReleases