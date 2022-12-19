// import React, { useState } from "react";
// import liveBg from "../../components/modules/static/images/livebg.jpg";
// import equalizer from "../../components/modules/static/images/equalizer.gif";
// import { topSongsData } from "../dummy_data/topSongsData";
// import BottomPlayer from "../BottomPaler/BottomPalyer";
// import SongCard from "../modules/__modules__/Card/SongCard";
// import HotSongs from "../modules/HotSongs";
// import PageCard from "../modules/__modules__/Card/PageCard";

// const albumBg = {
//   backgroundImage: `url(${liveBg.src})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// };

// const AlbumPage = () => {
//   const [isTopNav, setIsTopNav] = useState(false);
//   return (
//     <div className="bg-globalBg">
//       <PageCard setIsTopNav={setIsTopNav}>
//         <div
//           className={`flex mt-24 h-[30rem] mobile:h-fit relative mobile:flex-col transition-all ${
//             isTopNav && "mt-40"
//           }`}
//         >
//           <div
//             className="relative w-full rounded-tr-3xl rounded-bl-3xl flex flex-col"
//             style={albumBg}
//           >
//             <div className="flex items-center center text-white">
//               <img
//                 src={topSongsData[2].img}
//                 className="w-12 h-12 object-cover m-10 rounded-xl"
//               />
//               <div>
//                 <p className="font-bold">{topSongsData[2].artist}</p>
//                 <p className="text-xs">{topSongsData[2].title}</p>
//               </div>
//             </div>
//             <div className="flex justify-center items-center">
//               <img
//                 src={equalizer.src}
//                 className="w-[20rem] h-[20rem] object-cover"
//               />
//             </div>
//             <BottomPlayer isFixed={false} />
//           </div>
//           <div className="w-full flex flex-col md:flex-wrap ml-5 mobile:h-fit">
//             {topSongsData.map((song) => {
//               return <SongCard song={song} />;
//             })}
//           </div>
//         </div>
//         <HotSongs />
//       </PageCard>
//     </div>
//   );
// };

// export default AlbumPage;
