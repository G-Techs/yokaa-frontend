// import React from "react";
// import Carousel from "../../__modules__/Carousel";

// const HotSongsByLocation = ({ data, location }) => {
//   return (
//     <Carousel
//       className="w-1/2 bg-white px-5 py-5 rounded-xl shadow-xl mobile:w-full mobile:mx-0"
//       title={`Hot Songs ${location}`}
//     >
//       {data.map((song) => {
//         const { id, title, img, artist } = song;
//         return (
//           <div
//             key={id}
//             className="flex flex-col px-2 w-1/2 my-5 items-center mobilesm:w-full scroll-snap-item"
//           >
//             <img
//               src={img}
//               alt={artist}
//               className="w-full object-cover h-48 rounded-xl"
//             />
//             <div className="py-5 text-center capitalize">
//               <p className="font-semibold text-base">{title}</p>
//               <p className="text-gray-400 text-base font-medium">{artist}</p>
//             </div>
//           </div>
//         );
//       })}
//     </Carousel>
//   );
// };

// export default HotSongsByLocation;
