// import React from "react";
// import PropTypes from "prop-types";

// const ArtistCard = ({
//   artistAvatar,
//   artistName,
//   date,
//   streams,
//   streamsBgClassName,
//   borderColorClassName,
// }) => {
//   return (
//     <div
//       className={`flex justify-between border p-4 rounded-lg items-center ${borderColorClassName}`}
//     >
//       <div className="flex gap-3 items-center">
//         <img
//           src={artistAvatar}
//           alt={artistName}
//           className="w-16 h-16 object-cover rounded-full"
//         />
//         <div>
//           <p className="text-gray-800 font-semibold">{artistName}</p>
//           <p className="text-gray-500 text-xs">{date}</p>
//         </div>
//       </div>
//       <p className={`p-2 rounded-xl text-sm ${streamsBgClassName}`}>
//         {streams}
//       </p>
//     </div>
//   );
// };

// ArtistCard.propTypes = {
//   artistAvatar: PropTypes.string.isRequired,
//   artistName: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   streams: PropTypes.string.isRequired,
//   streamsBgClassName: PropTypes.string.isRequired,
//   borderColorClassName: PropTypes.string.isRequired,
// };

// export default ArtistCard;
