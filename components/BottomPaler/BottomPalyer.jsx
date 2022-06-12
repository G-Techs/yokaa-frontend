import React from 'react'
import { LoopIcon, PlayListIcon, ShuffleIcon, VolumeDownIcon, VolumeUpIcon } from '../modules/__modules/Vectors'
import { VNext, VPlay, VPrev } from '../modules/__modules__/_Vectors'
import Slider from '@mui/material/Slider';

const BottomPlayer = () => {
  return (
    <div className='z-20 w-full fixed bottom-0 pb-2 pt-3 px-6 md:px-8 flex flex-col md:flex-row justify-between items-center h-28 md:h-20 bg-gray-700 opacity-90'>
    <div className='w-full md:w-3/6 lg:w-2/6 flex box'>
      <div className='w-4/6 gap-2 flex'>
        <img src="https://templates.iqonic.design/muzik/html/images/dashboard/hot-songs/04.png" alt="Keith" className='w-14 md:w-14 md:h-14 rounded-lg' />
        <div className='text-lg font-semibold text-gray-300 capitalize'>
          <h1>Tell me u luv me</h1>
          <p className='text-base font-medium'>Keith Urban</p>
        </div>
      </div>
      <div className='md:hidden w-2/6 flex gap-2 m-auto'>
          <VPrev className='w-8 h-8 cursor-pointer text-gray-200'/>
          <VPlay className='w-8 h-8 cursor-pointer text-gray-200'/>
          <VNext className='w-8 h-8 cursor-pointer text-gray-200'/>
      </div>
    </div>

    <div className=' md:3/6 lg-4/6 flex flex-col md:flex-row justify-between items-center mg: gap-6'>
      <div className='flex justify-center items-center gap-2'> 
        <span className='text-gray-200 text-base font-medium'>
          00:00
        </span>
        <Slider className="w-60 md:w-28 lg:w-40 mx-1 text-primary"  />
        <span className='text-gray-200 text-base font-medium'>
          00:00
        </span> 
      </div>
      <div className='hidden md:flex items-center justify-center gap-3 lg:gap-4 w-1/3'>
        <ShuffleIcon className='hidden lg:inline w-6 h-6  cursor-pointer text-primary'/>
        <VPrev className='w-10 h-10 cursor-pointer text-gray-200'/>
        <VPlay className='w-10 h-10 cursor-pointer text-gray-200'/>
        <VNext className='w-10 h-10 cursor-pointer text-gray-200'/>
       <LoopIcon className='hidden lg:inline w-6 h-6 text-primary cursor-pointer'/> 
        
      </div>
      <div className='hidden lg:flex items-center justify-center gap-2 w-1/3 '>
        <PlayListIcon className='w-6 h-6 text-gray-200'/>
        <div className='flex justify-center items-center gap-1'>
          <VolumeDownIcon className='w-6 h-6 text-gray-200'/>
           <Slider className="w-40 mx-1 text-primary" defaultValue={50} valueLabelDisplay="auto" />
          <VolumeUpIcon className='w-6 h-6  text-gray-200'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BottomPlayer