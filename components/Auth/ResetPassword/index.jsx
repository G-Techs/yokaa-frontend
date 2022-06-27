import React from 'react'

const ResetPassword = () => {
    return (
        <div className="auth h-screen">
            <div className='flex justify-center items-center w-full h-full'>
                <div className='lg:max-w-[40%] px-6 w-full bg-opacity-10 border border-gray-700 rounded-md backdrop-filter backdrop-blur-lg bg-gray-200 pb-8'>
                    <div className='w-full -mt-12 flex justify-center'>
                        <div className='w-[8rem] ring-2 ring-primary rounded-full overflow-hidden'>
                            <img alt='Pic' src={'https://templates.iqonic.design/muzik/html/images/login/user.png'} />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <p className=' text-gray-200 lg:text-7xl text-3xl'>Reset password</p>
                        <p className='mt-6 md:text-xl text-md text-gray-100'>Enter your email address and we'll send you an email with instructions to reset your password </p>
                        <form className='flex flex-col mt-3'>
                            <label className='text-gray-300 font-bold my-2'>Password</label>
                            <input type="email" required placeholder='Enter email' className="p-3 bg-transparent border-2 rounded-lg " />
                        </form>

                    </div>
                    <button className='mt-6 text-lg  text-gray-200 bg-primary rounded-lg p-4 shadow-lg w-full'>
                        Reset password
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ResetPassword