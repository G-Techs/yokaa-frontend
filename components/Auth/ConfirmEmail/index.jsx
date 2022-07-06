import React from 'react'

const ConfirmEmail = () => {
    return (
        <div className="auth h-screen">
            <div className='flex justify-center items-center w-full h-full'>
                <div className='lg:min-w-[50%] lg:max-w-[900px] px-5 w-full bg-opacity-10 border mx-2 border-gray-800 rounded-md backdrop-filter backdrop-blur-lg bg-gray-200 pb-8'>
                    <div className='w-full -mt-12 flex justify-center'>
                        <div className='lg:w-[8rem] w-[6rem] ring-2 ring-primary rounded-full overflow-hidden'>
                            <img alt='Pic' src='https://templates.iqonic.design/muzik/html/images/login/user.png' />
                        </div>
                    </div>
                    <div>
                        <div className='lg:w-full'>
                            <img src='https://templates.iqonic.design/muzik/html/images/login/mail.png' alt='email' />
                        </div>
                    </div>
                    <div className='mt-6 text-gray-200'>
                        <p className='md:text-7xl text-3xl'>Success !</p>
                        <p className='md:text-xl text-md'>A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
                    </div>
                    <button className='mt-6 text-lg text-gray-200 bg-primary rounded-lg p-4 shadow-lg w-full'>
                        back to Home
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ConfirmEmail