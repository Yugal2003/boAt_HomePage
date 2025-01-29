import React from 'react'
import desktopBanner from '../../assets/RepublicDayLogo/Desktop.webp'
import mobileBanner from '../../assets/RepublicDayLogo/Mobile.webp'

const RepublicDay = () => {
  return (
    <div>
        <div className='w-full mx-auto mt-6 bm:px-1'>
            <div className='w-[96%] bw:w-[95%] mx-auto'>
                {/* mobile view */}
                <div className='hidden bm:block '>
                    <img className='rounded-lg object-contain w-full' src={desktopBanner} alt='banner_logo'/>
                </div>

                {/* desktop view */}
                <div className='block bm:hidden'>
                    <img className='rounded-lg object-contain w-full' src={mobileBanner} alt='banner_logo'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepublicDay;