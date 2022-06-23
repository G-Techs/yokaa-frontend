import React from 'react'
import { HomeSubMenuIcon } from '../modules/__modules/Vectors/index'

const Error500 = () => {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center ">
      <div className='flex flex-col items-center justify-center max-w-4xl p-4 text-center'>
        <img src="https://templates.iqonic.design/muzik/html/images/error/500.png" className='w-6/12 lg:w-8/12' alt="" />
        <h1 className="font-black text-6xl">500</h1>
        <h2 className="text-3xl font-black pt-4">Oops! This Page is Not Working.</h2>
        <p className='p-3 text-base text-gray-400'>The requested is Internal Server Error.</p>
        <div className='flex justify-center items-center rounded-2xl text-white px-4 py-2 bg-red-500 mt-4 cursor-pointer'>
          <HomeSubMenuIcon size={16} className="mr-2" />
          <p className='font-lighter text-base'>Back to Home</p>
        </div>
      </div>
    </div>
  )
}

export default Error500