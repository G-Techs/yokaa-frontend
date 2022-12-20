// import React from 'react'
// import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// const UserProfile = ({ isTopNav,DailySales }) => {
//   return (
//     <div
//     className={`mt-24 h-auto flex justify-center md:gap-4 mobilesm:flex-col mobile:mr-5 mobile:pb-40 transition-all mr-5 ${
//       isTopNav && "mobile:mt-40 transition-all"
//     }`}
//   >
//     <div  className="flex flex-col  w-1/3 my-5 bg-white  px-5 py-5 rounded-xl shadow-xl  items-left mobilesm:w-full  items-center">
//         <img
//         src="https://templates.iqonic.design/muzik/html/images/user/1.jpg"
//         alt="user"
//         className='w-24 h-24s rounded-full mb-8'
//          />
//         <h2 className='mb-1 font-semibold text-2xl text-gray-700'>Barry Tech</h2>
//         <h4 className='mb-4 text-primary'>Web designer</h4>
//         <p className='text-center text-xs font-light text-gray-600'>Phasellus faucibus mollis pharetra. Proin blandit
//             ac massa.Morbi nulla dolor, ornare at commodo non,
//              feugiat non nisi
//         </p>
//         <div className='flex gap-3 mt-6'>
//             <div className='bg-primary w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
//                 <FaFacebookF className='text-white'/>
//             </div>
//             <div className='bg-primary w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
//                 <FaInstagram className='text-white' />
//             </div>
//             <div className='bg-primary w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
//                 <FaYoutube className='text-white' />
//             </div>
//             <div className='bg-primary w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
//                 <FaTwitter className='text-white' />
//             </div>
//         </div>
//     </div>
//     <div  className="flex flex-col h-64  w-1/3 my-5 bg-white  px-5 py-5 rounded-xl shadow-xl  items-left mobilesm:w-full">
//         <h2 className="font-bold text-xl text-gray-700 border-b pb-4">Personal Details</h2>
//         <div className='flex justify-between pt-5 '>
//             <h6 className='font-semibold text-xs text-gray-600 pb-4'>Birthday</h6>
//             <h5 className='text-xs font-bold text-gray-400'>3rd March</h5>
//         </div>
//         <div className='flex justify-between'>
//             <h4 className='font-semibold text-xs text-gray-600 pb-4'>Address</h4>
//             <h5 className='text-xs font-bold text-gray-400'>Landon</h5>
//         </div>
//         <div className='flex justify-between'>
//             <h4 className='font-semibold text-xs text-gray-600 pb-4'>Phone</h4>
//             <h5 className='text-xs font-bold text-gray-400'>(010)987 543 201</h5>
//         </div>
//         <div className='flex justify-between'>
//             <h4 className='font-semibold text-xs text-gray-600 pb-4'>Email</h4>
//             <h5 className='text-xs font-bold text-gray-400'>Barry@example.com</h5>
//         </div>
//         <div className='flex justify-between'>
//             <h4 className='font-semibold text-xs text-gray-600 pb-5'>Instagram</h4>
//             <h5 className='text-xs font-bold text-gray-400'>@Barry</h5>
//         </div>
//     </div>
//     <div  className="flex flex-col  w-1/3 my-5 bg-white  px-5 py-5 rounded-xl shadow-xl  items-left mobilesm:w-full scroll-snap-item">
//     <h2 className="font-bold text-xl text-gray-700 border-b pb-4">Daily Sales</h2>
//     <div>
//         {DailySales.map((items)=>{
//             return(
//             <div className='flex justify-between pt-5' key={items.id}>
//                 <div className='flex gap-4 '>
//                 <img
//                 src={items.img}
//                 alt="ds"
//                 className='w-12 h-12 rounded-full'
//                 />
//                 <div className='flex flex-col'>
//                     <h6 className='font-semibold text-normal text-gray-600'>{items.title}</h6>
//                     <p className='text-sm  text-gray-600'>{items.artist} </p>
//                 </div>
//                 </div>
//                 <div>
//                     <h2 className='font-black text-normal text-gray-600'>+$82</h2>
//                 </div>
//             </div>
//             )
//         })}
//     </div>
//     </div>
//   </div>
//   )
// }

// export default UserProfile
