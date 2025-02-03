import React from 'react'
import desktopBanner from '../../assets/RepublicDayLogo/Desktop.webp'
import mobileBanner from '../../assets/RepublicDayLogo/Mobile.webp'

const RepublicDay = () => {
  return (
    <div>
        <div className="flex w-full max-w-[1600px] mx-auto">    
            <div className='w-full mx-auto mt-6 bm:px-1'>
                <div className='w-[95%] bw:w-[90%] bm:w-[95%] mx-auto'>
                    {/* mobile view */}
                    <div className='hidden bm:block cursor-pointer'>
                        <img className='rounded-lg object-contain w-full' src={desktopBanner} alt='banner_logo'/>
                    </div>

                    {/* desktop view */}
                    <div className='block bm:hidden cursor-pointer'>
                        <img className='rounded-lg object-contain w-full' src={mobileBanner} alt='banner_logo'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepublicDay;