import React from 'react'
import BottomPlayer from '../BottomPaler/BottomPalyer'
import HotSongs from '../modules/HotSongs'
import { LeftNav, TopNav } from '../modules/NavBar'
import { leftNavPinedAtom } from "../lib/atoms";
import { useRecoilValue } from 'recoil';
import TopSongs from '../modules/TopSongs/TopSongs';


const LatestPage = () => {
  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);

  return (
    <div className="bg-globalBg">
    <div
      className={`relative flex flex-col ${
        !isLeftNavPined ? "ml-28 transition-all" : "transition-all ml-72"
      } mobile:ml-5`}
    >
      <TopNav />
      <div className='mt-20'>
      <TopSongs/>
      
      <HotSongs />
      </div>
    </div>
    <LeftNav />
    <BottomPlayer />
  </div>
  )

}

export default LatestPage