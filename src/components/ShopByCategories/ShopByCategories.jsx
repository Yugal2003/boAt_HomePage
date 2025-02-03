import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import first from '../../assets/ShopByCategoriesAssets/first.webp';
import second from '../../assets/ShopByCategoriesAssets/second.png';
import third from '../../assets/ShopByCategoriesAssets/third.webp';
import fourth from '../../assets/ShopByCategoriesAssets/fourth.webp';
import fifth from '../../assets/ShopByCategoriesAssets/fifth.webp';
import six from '../../assets/ShopByCategoriesAssets/six.webp';
import seven from '../../assets/ShopByCategoriesAssets/seven.webp';
import eight from '../../assets/ShopByCategoriesAssets/eight.webp';
import nine from '../../assets/ShopByCategoriesAssets/nine.webp';
import ten from '../../assets/ShopByCategoriesAssets/ten.png';

const SaleLive = () => {
  return (
    <div className='mt-6'>
        <div className="flex w-full max-w-[1600px] mx-auto">    
            <div className='flex flex-col w-full px-2 bm:px-1 mx-auto'>
                {/* header */}
                <div className='w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] flex justify-between mx-auto items-center  mb-[2.5rem]'>                
                    <div>
                        <h1 className='text-[1.5rem] font-metropolis cursor-pointer'><span className='font-medium'>Shop by</span> <span className='font-bold'>Categori<span className='decoration-[0.12rem] underline decoration-red-500'>es</span></span></h1>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 text-[0.9rem] text-[#264978] font-extrabold'>View All <FiArrowRightCircle size={18}/></button>
                    </div>
                </div>

                {/* img with text */}
                <div className='w-full mx-auto'>
                    <div className='grid grid-cols-4 base:grid-cols-5 md:grid-cols-10 w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] mx-auto gap-4 bw:gap-8 md:gap-4 cursor-pointer'>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={first} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>True Wireless Earbuds</h1>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={second} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>Neckbands</h1>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={third} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>Smart Watches</h1>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={fourth} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>Nirvana</h1>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={fifth} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>Wireless Headphones</h1>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={six} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>Wireless Speakers</h1>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={seven} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>Wired Headphones</h1>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={eight} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>Wired Earphones</h1>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={nine} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>Soundbars</h1>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center aspect-[16/9] relative'>
                            <img src={ten} alt='img' className='object-contain w-full h-full'/>
                            <div className='mt-[1rem]'>
                                <h1 className='px-0 md:px-0.5 flex text-center text-[10px] md:text-[14px] font-bold font-metropolis'>Gaming Headphones</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaleLive;