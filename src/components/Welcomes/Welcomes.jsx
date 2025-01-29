import React from 'react'

const Welcomes = () => {
  return (
    <div className='fixed z-50 w-full flex items-center justify-center pl-[20px] pr-[20px] bg-[#f4f5f7] top-0'>
        <div className='pl-[10px] pr-[10px]'>
            <div className='font-metropolis py-[8px] flex justify-center items-center text-center'>
                <p className='text-[11px] md:text-[12px] font-semibold'>Get 5% off on First Order | Code:
                <span className='font-bold'>WELCOMES |</span> <span className='underline font-bold'>Shop Now!</span></p>
            </div>
        </div>
    </div>
  )
}

export default Welcomes;