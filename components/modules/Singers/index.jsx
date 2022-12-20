// import React from "react";
// import { VPen, VTrash } from "../__modules/Vectors";
// import Link from "next/link";
// import PropTypes from "prop-types";

// const Singers = ({ isTopNav }) => {
//   return (
//     <div
//       className={`my-24 bg-white flex flex-col mr-5 border shadow-lg rounded-lg  ${
//         isTopNav && "my-40"
//       } transition-all`}
//     >
//       <div className="flex justify-between items-center px-5 py-5 border-b border-gray-200">
//         <h3 className="font-bold text-2xl">Singer Lists</h3>
//         <Link href="/admin/addnewsong">
//           <button className="bg-primary text-white px-4 py-2 rounded-2xl mobilesm:text-xs">
//             Add New Singer
//           </button>
//         </Link>
//       </div>
//       <div className="flex mobilesm:flex-col mobilesm:gap-3 justify-between px-5 py-5">
//         <div className="flex items-center">
//           <label htmlFor="numberOfItem">Show</label>
//           <select
//             name="numberOfItem"
//             className="px-2 mx-2 rounded-md outline-none border bg-transparent focus:border-primary transition-all"
//           >
//             <option value={10}>10</option>
//             <option value={25}>25</option>
//             <option value={50}>50</option>
//             <option value={100}>100</option>
//           </select>
//           <p>entries</p>
//         </div>
//         <div className="mobilesm:flex flex-col">
//           <label htmlFor="searchItem" className="px-4 mobilesm:px-0">
//             Search:
//           </label>
//           <input
//             type="search"
//             name="searchItem"
//             className="border border-gray-300 px-2 py-1 rounded-md outline-none focus:border-primary transition-all"
//           />
//         </div>
//       </div>
//       <div className="m-5 overflow-x-auto">
//         <table className="border border-gray-300 w-full">
//           <tbody>
//             <tr>
//               <th className="border px-10 py-3">No</th>
//               <th className="border px-10 py-3">Profile</th>
//               <th className="border px-10 py-3">Email</th>
//               <th className="border px-10 py-3">Song Description</th>
//               <th className="border px-10 py-3">Action</th>
//             </tr>
//             {Array.from({ length: 10 }).map((_, index) => {
//               return (
//                 <tr key={index}>
//                   <td className="border px-5 py-5">{index + 1}</td>
//                   <td className="border mx-0 flex justify-center items-center">
//                     <img
//                       src="https://templates.iqonic.design/muzik/html/images/user/04.jpg"
//                       className="w-16 h-16 m-2 rounded-2xl"
//                       alt={index}
//                     />
//                   </td>
//                   <td className="border px-5">galiendcodes13@gmail.com</td>
//                   <td className="border px-5">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Laborum, quasi.
//                   </td>
//                   <td className="border px-5">
//                     <div className="flex justify-center items-center">
//                       <button className="bg-primary p-2 rounded-lg text-white">
//                         <VPen />
//                       </button>
//                       <button className="bg-primary p-2 rounded-lg text-white mx-2">
//                         <VTrash />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// Singers.propTypes = {
//   isTopNav: PropTypes.bool.isRequired,
// };

// export default Singers;
