import React from 'react'

const Welcomes = () => {
  return (
    <div className='fixed z-50 w-full flex items-center justify-center pl-[1.25rem] pr-[1.25rem] bg-[#f4f5f7] top-0'>
        <div className='pl-[0.625rem] pr-[0.625rem]'>
            <div className='font-metropolis py-[0.6rem] flex justify-center items-center text-center'>
                <p className='text-[0.6875rem] md:text-xs font-semibold cursor-pointer'>Get 5% off on First Order | Code:
                <span className='font-bold'>WELCOMES |</span> <span className='underline font-bold'>Shop Now!</span></p>
            </div>
        </div>
    </div>
  )
}

export default Welcomes;