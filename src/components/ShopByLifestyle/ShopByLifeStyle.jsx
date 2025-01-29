import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import jemimi from '../../assets/ShopByLifeStyle/jemmi.webp';
import ranvir from '../../assets/ShopByLifeStyle/Ranveer.webp';
import Aman from '../../assets/ShopByLifeStyle/Aman.webp';
import YJ from '../../assets/ShopByLifeStyle/YJ.webp';

const ShopByLifeStyle = () => {
  return (
    <div className='mt-6 pt-4 md:pt-6'>
        <div>
            <div className='flex flex-col w-full bm:w-[98%] px-2 bm:px-1 mx-auto'>
                {/* header */}
                <div className='flex w-[98%] bw:w-[95%] justify-between mx-auto items-center'>
                    <div>
                        <h1 className='text-[1.5rem]'><span className='font-semibold font-m'>Shop by</span> <span className='font-bold font-metropolis'>Lifesty<span className='decoration-[0.15rem] underline decoration-red-500 font-metropolis'>le</span></span></h1>
                    </div>
                    <div>
                        {/* <h1 className='flex items-center gap-2 text-[0.9rem] text-[#264978] font-extrabold'></h1> */}
                    </div>
                </div>

                {/* text with img */}
                <div className='w-[98%] md:w-[95%] mt-1 gap-7 md:gap-5 rounded-md mx-auto grid grid-cols-1 mini:grid-cols-2 md:grid-cols-1 bm:grid-cols-4'> {/* apply grid hear */}

                    {/* first */}
                    <div className=''>
                        {/* img */}
                        <div className='relative overflow-hidden'>
                            <img src={jemimi} alt='img' className='relative z-40 w-full h-auto'/>
                        </div>

                        {/* text */}
                        <div className='flex justify-center items-center flex-col bg-[#eff4f7] rounded-b-lg border border-gray-200 gap-2 md:gap-4 bm:gap-2'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 pt-4'>
                                <h1 className='text-[18px] md:text-[28px] bm:text-[1.5rem] font-bold font-metropolis'>For Fitness</h1>
                            </div>
                            <div className='pb-4'>
                                <button className='flex items-center gap-2 text-[12px] md:text-[14px] text-[#264978] font-bold'>View All <FiArrowRightCircle size={18}/></button>
                            </div>
                        </div>
                    </div>

                    {/* second */}
                    <div className=''>
                        {/* img */}
                        <div className='relative overflow-hidden'>
                            <img src={ranvir} alt='img' className='relative z-40 w-full h-auto'/>
                        </div>

                        {/* text */}
                        <div className='flex justify-center items-center flex-col bg-[#eff4f7] rounded-b-lg border border-gray-200 gap-2 md:gap-4 bm:gap-2'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 pt-4'>
                                <h1 className='text-[18px] md:text-[28px] bm:text-[1.5rem] font-bold font-metropolis'>For Parties</h1>
                            </div>
                            <div className='pb-4'>
                                <button className='flex items-center gap-2 text-[12px] md:text-[14px] text-[#264978] font-bold'>View All <FiArrowRightCircle size={18}/></button>
                            </div>
                        </div>
                    </div>

                    {/* third */}
                    <div className=''>
                        {/* img */}
                        <div className='relative overflow-hidden'>
                            <img src={Aman} alt='img' className='relative z-40 w-full h-auto'/>
                        </div>

                        {/* text */}
                        <div className='flex justify-center items-center flex-col bg-[#eff4f7] rounded-b-lg border border-gray-200 gap-2 md:gap-4 bm:gap-2'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 pt-4'>
                                <h1 className='text-[18px] md:text-[28px] bm:text-[1.5rem] font-bold font-metropolis'>For Work</h1>
                            </div>
                            <div className='pb-4'>
                                <button className='flex items-center gap-2 text-[12px] md:text-[14px] text-[#264978] font-bold'>View All <FiArrowRightCircle size={18}/></button>
                            </div>
                        </div>
                    </div>

                    {/* fourth */}
                    <div className=''>
                        {/* img */}
                        <div className='relative overflow-hidden'>
                            <img src={YJ} alt='img' className='relative z-40 w-full h-auto'/>
                        </div>

                        {/* text */}
                        <div className='flex justify-center items-center flex-col bg-[#eff4f7] rounded-b-lg border border-gray-200 gap-2 md:gap-4 bm:gap-2'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 pt-4'>
                                <h1 className='text-[18px] md:text-[28px] bm:text-[1.5rem] font-bold font-metropolis'>For Audiophiles</h1>
                            </div>
                            <div className='pb-4'>
                                <button className='flex items-center gap-2 text-[12px] md:text-[14px] text-[#264978] font-bold'>View All <FiArrowRightCircle size={18}/></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopByLifeStyle;