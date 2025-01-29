import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import first from '../../assets/RecentlyView/first.jpg';
import second from '../../assets/RecentlyView/second.webp';
import third from '../../assets/RecentlyView/fourth.webp';
import fourth from '../../assets/RecentlyView/third.webp';
import star from '../../assets/SellisLive/star.webp'

const RecentlyViewed = () => {
  return (
    <div className='mt-6 pt-4 md:pt-0'>
        <div>
            <div className='flex flex-col w-full px-2 bm:px-1 mx-auto'>
                {/* header */}
                <div className='flex w-[98%] bw:w-[95%] justify-between mx-auto items-center'>
                    <div>
                        <h1 className='text-[1.5rem]'><span className='font-semibold'>Recently</span> <span className='font-bold'>view<span className='decoration-[0.15rem] underline decoration-red-500'>ed</span></span></h1>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 text-[0.9rem] text-[#264978] font-extrabold'>View All <FiArrowRightCircle size={18}/></button>
                    </div>
                </div>

                {/* text with img */}
                {/* after bm(1000px) show */}
                <div className='w-full bw:w-[95%] pr-0 xl:pr-2 mt-2 gap-2 xl:gap-4 rounded-md mx-auto overflow-x-hidden md:overflow-x-auto bm:overflow-x-hidden scrollbar-default md:scrollbar-hide bm:scrollbar-default hidden bm:grid bm:grid-cols-3 xl:grid-cols-4'> {/* apply grid hear */}

                    {/* first */}
                    <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[8px] bm:text-[10px] rounded-tl-lg'>✍️ Engraving Available</span>
                            <img src={first} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[10px] bm:text-[12px] font-bold'>
                                <div>
                                    <h1>40 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.9</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex flex-col h-auto px-2 items-start pt-1 bm:pt-2 border-b-2'>
                                <div>
                                    <h1 className='text-[14px] font-bold font-metropolis'>boAt Airdopes 161</h1>
                                </div>
                                <div className='flex items-center pt-4 pb-2 gap-1'>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='flex items-center font-semibold font-metropolis text-[16px]'>₹899</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='line-through text-[12px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                        <h2 className='text-[12px] text-[#0e946a] font-metropolis font-bold'>64% off</h2>
                                    </div>
                                </div>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center gap-2 mt-2'>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>ASAP Charge</button>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>iWP Technology</button>
                                        </div>
                                    </div>
                                    <div className='relative flex items-center'>
                                        {/* <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[10px] bm:text-[14px] font-semibold'>+3</span> */}
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2 mt-6 mb-2'>
                                    {/* <h1 className='line-through text-[10px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                    <h2 className='text-[10px] text-[#0e946a] font-bold'>64% off</h2> */}
                                    <button className='bg-black text-white font-metropolis text-[14px] w-full rounded-lg py-2'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second */}
                    <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[8px] bm:text-[10px] rounded-tl-lg'>✍️ Engraving Available</span>
                            <img src={second} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[10px] bm:text-[12px] font-bold'>
                                <div>
                                    <h1>40 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.9</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex flex-col h-auto px-2 items-start pt-1 bm:pt-2 border-b-2'>
                                <div>
                                    <h1 className='text-[14px] font-bold font-metropolis'>boAt Airdopes 161</h1>
                                </div>
                                <div className='flex items-center pt-4 pb-2 gap-1'>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='flex items-center font-semibold font-metropolis text-[16px]'>₹899</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='line-through text-[12px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                        <h2 className='text-[12px] text-[#0e946a] font-metropolis font-bold'>64% off</h2>
                                    </div>
                                </div>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center gap-2 mt-2'>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>ASAP Charge</button>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>iWP Technology</button>
                                        </div>
                                    </div>
                                    <div className='relative flex items-center'>
                                        {/* <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[10px] bm:text-[14px] font-semibold'>+3</span> */}
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2 mt-6 mb-2'>
                                    {/* <h1 className='line-through text-[10px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                    <h2 className='text-[10px] text-[#0e946a] font-bold'>64% off</h2> */}
                                    <button className='bg-black text-white font-metropolis text-[14px] w-full rounded-lg py-2'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* third */}
                    <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[8px] bm:text-[10px] rounded-tl-lg'>✍️ Engraving Available</span>
                            <img src={third} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[10px] bm:text-[12px] font-bold'>
                                <div>
                                    <h1>40 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.9</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex flex-col h-auto px-2 items-start pt-1 bm:pt-2 border-b-2'>
                                <div>
                                    <h1 className='text-[14px] font-bold font-metropolis'>boAt Airdopes 161</h1>
                                </div>
                                <div className='flex items-center pt-4 pb-2 gap-1'>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='flex items-center font-semibold font-metropolis text-[16px]'>₹899</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='line-through text-[12px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                        <h2 className='text-[12px] text-[#0e946a] font-metropolis font-bold'>64% off</h2>
                                    </div>
                                </div>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center gap-2 mt-2'>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>ASAP Charge</button>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>iWP Technology</button>
                                        </div>
                                    </div>
                                    <div className='relative flex items-center'>
                                        {/* <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[10px] bm:text-[14px] font-semibold'>+3</span> */}
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2 mt-6 mb-2'>
                                    {/* <h1 className='line-through text-[10px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                    <h2 className='text-[10px] text-[#0e946a] font-bold'>64% off</h2> */}
                                    <button className='bg-black text-white font-metropolis text-[14px] w-full rounded-lg py-2'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* fourth */}
                    <div className='block bm:hidden xl:block'>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[8px] bm:text-[10px] rounded-tl-lg'>✍️ Engraving Available</span>
                            <img src={fourth} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[10px] bm:text-[12px] font-bold'>
                                <div>
                                    <h1>40 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.9</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex flex-col h-auto px-2 items-start pt-1 bm:pt-2 border-b-2'>
                                <div>
                                    <h1 className='text-[14px] font-bold font-metropolis'>boAt Airdopes 161</h1>
                                </div>
                                <div className='flex items-center pt-4 pb-2 gap-1'>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='flex items-center font-semibold font-metropolis text-[16px]'>₹899</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='line-through text-[12px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                        <h2 className='text-[12px] text-[#0e946a] font-metropolis font-bold'>64% off</h2>
                                    </div>
                                </div>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center gap-2 mt-2'>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>ASAP Charge</button>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>iWP Technology</button>
                                        </div>
                                    </div>
                                    <div className='relative flex items-center'>
                                        {/* <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[10px] bm:text-[14px] font-semibold'>+3</span> */}
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2 mt-6 mb-2'>
                                    {/* <h1 className='line-through text-[10px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                    <h2 className='text-[10px] text-[#0e946a] font-bold'>64% off</h2> */}
                                    <button className='bg-black text-white font-metropolis text-[14px] w-full rounded-lg py-2'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* text with img */}
                {/* below bm(1000px) show */}
                <div className='block bm:hidden w-full mx-auto mt-4'>
                    <div className="w-[100%] flex mx-auto gap-6 overflow-x-auto px-2 scrollbar-hide">
                        
                        {/* first */}
                        <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[10px] bm:text-[10px] rounded-tl-lg'>✍️ Engraving Available</span>
                            <div className="w-[350px] h-[350px] overflow-hidden rounded-xl cursor-pointer flex-shrink-0">
                                <img src={first} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            </div>
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-7 bm:h-7 bg-[#fcc50b] text-[10px] bm:text-[12px] font-bold'>
                                <div>
                                    <h1>40 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.9</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex flex-col h-auto px-2 items-start pt-1 bm:pt-2 border-b-2'>
                                <div>
                                    <h1 className='text-[14px] font-bold font-metropolis'>boAt Airdopes 161</h1>
                                </div>
                                <div className='flex items-center pt-4 pb-2 gap-1'>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='flex items-center font-semibold font-metropolis text-[16px]'>₹899</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='line-through text-[12px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                        <h2 className='text-[12px] text-[#0e946a] font-metropolis font-bold'>64% off</h2>
                                    </div>
                                </div>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center gap-2 mt-2'>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>ASAP Charge</button>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>iWP Technology</button>
                                        </div>
                                    </div>
                                    <div className='relative flex items-center'>
                                        {/* <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[10px] bm:text-[14px] font-semibold'>+3</span> */}
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2 mt-6 mb-2'>
                                    {/* <h1 className='line-through text-[10px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                    <h2 className='text-[10px] text-[#0e946a] font-bold'>64% off</h2> */}
                                    <button className='bg-black text-white font-metropolis text-[14px] w-full rounded-lg py-2'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        </div>

                        {/* second */}
                        <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[10px] bm:text-[10px] rounded-tl-lg'>✍️ Engraving Available</span>
                            <div className="w-[350px] h-[350px] overflow-hidden rounded-xl cursor-pointer flex-shrink-0">
                                <img src={second} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            </div>
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-7 bm:h-7 bg-[#fcc50b] text-[10px] bm:text-[12px] font-bold'>
                                <div>
                                    <h1>40 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.9</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex flex-col h-auto px-2 items-start pt-1 bm:pt-2 border-b-2'>
                                <div>
                                    <h1 className='text-[14px] font-bold font-metropolis'>boAt Airdopes 161</h1>
                                </div>
                                <div className='flex items-center pt-4 pb-2 gap-1'>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='flex items-center font-semibold font-metropolis text-[16px]'>₹899</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <h1 className='line-through text-[12px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                        <h2 className='text-[12px] text-[#0e946a] font-metropolis font-bold'>64% off</h2>
                                    </div>
                                </div>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center gap-2 mt-2'>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>ASAP Charge</button>
                                            <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>iWP Technology</button>
                                        </div>
                                    </div>
                                    <div className='relative flex items-center'>
                                        {/* <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[10px] bm:text-[14px] font-semibold'>+3</span> */}
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2 mt-6 mb-2'>
                                    {/* <h1 className='line-through text-[10px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                    <h2 className='text-[10px] text-[#0e946a] font-bold'>64% off</h2> */}
                                    <button className='bg-black text-white font-metropolis text-[14px] w-full rounded-lg py-2'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        </div>

                        {/* third */}
                        <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[10px] bm:text-[10px] rounded-tl-lg'>✍️ Engraving Available</span>
                                <div className="w-[350px] h-[350px] overflow-hidden rounded-xl cursor-pointer flex-shrink-0">
                                    <img src={third} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                </div>
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-7 bm:h-7 bg-[#fcc50b] text-[10px] bm:text-[12px] font-bold'>
                                    <div>
                                        <h1>40 Hours Playback</h1>
                                    </div>
                                    <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                        <img src={star} alt='star' width={15} />
                                        <h1 className='font-normal pt-0.5'>4.9</h1>
                                    </div>
                                </div>
                            </div>

                            {/* text */}
                            <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                                {/* boat airdrops 161 */}
                                <div className='flex flex-col h-auto px-2 items-start pt-1 bm:pt-2 border-b-2'>
                                    <div>
                                        <h1 className='text-[14px] font-bold font-metropolis'>boAt Airdopes 161</h1>
                                    </div>
                                    <div className='flex items-center pt-4 pb-2 gap-1'>
                                        <div className='flex items-center gap-1'>
                                            <h1 className='flex items-center font-semibold font-metropolis text-[16px]'>₹899</h1>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <h1 className='line-through text-[12px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                            <h2 className='text-[12px] text-[#0e946a] font-metropolis font-bold'>64% off</h2>
                                        </div>
                                    </div>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center'>
                                        <div className='flex items-center'>
                                            <div className='flex items-center gap-2 mt-2'>
                                                <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>ASAP Charge</button>
                                                <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>iWP Technology</button>
                                            </div>
                                        </div>
                                        <div className='relative flex items-center'>
                                            {/* <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[10px] bm:text-[14px] font-semibold'>+3</span> */}
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2 mt-6 mb-2'>
                                        {/* <h1 className='line-through text-[10px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                        <h2 className='text-[10px] text-[#0e946a] font-bold'>64% off</h2> */}
                                        <button className='bg-black text-white font-metropolis text-[14px] w-full rounded-lg py-2'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* fourth */}
                        <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[10px] bm:text-[10px] rounded-tl-lg'>✍️ Engraving Available</span>
                                <div className="w-[350px] h-[350px] overflow-hidden rounded-xl cursor-pointer flex-shrink-0">
                                    <img src={fourth} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                </div>
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-7 bm:h-7 bg-[#fcc50b] text-[10px] bm:text-[12px] font-bold'>
                                    <div>
                                        <h1>40 Hours Playback</h1>
                                    </div>
                                    <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                        <img src={star} alt='star' width={15} />
                                        <h1 className='font-normal pt-0.5'>4.9</h1>
                                    </div>
                                </div>
                            </div>

                            {/* text */}
                            <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                                {/* boat airdrops 161 */}
                                <div className='flex flex-col h-auto px-2 items-start pt-1 bm:pt-2 border-b-2'>
                                    <div>
                                        <h1 className='text-[14px] font-bold font-metropolis'>boAt Airdopes 161</h1>
                                    </div>
                                    <div className='flex items-center pt-4 pb-2 gap-1'>
                                        <div className='flex items-center gap-1'>
                                            <h1 className='flex items-center font-semibold font-metropolis text-[16px]'>₹899</h1>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <h1 className='line-through text-[12px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                            <h2 className='text-[12px] text-[#0e946a] font-metropolis font-bold'>64% off</h2>
                                        </div>
                                    </div>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center'>
                                        <div className='flex items-center'>
                                            <div className='flex items-center gap-2 mt-2'>
                                                <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>ASAP Charge</button>
                                                <button className='bg-[#e6e4e4] text-[8px] px-6 rounded-full py-2'>iWP Technology</button>
                                            </div>
                                        </div>
                                        <div className='relative flex items-center'>
                                            {/* <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[10px] bm:text-[14px] font-semibold'>+3</span> */}
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2 mt-6 mb-2'>
                                        {/* <h1 className='line-through text-[10px] text-gray-400 font-semibold font-metropolis'>₹2,490</h1>
                                        <h2 className='text-[10px] text-[#0e946a] font-bold'>64% off</h2> */}
                                        <button className='bg-black text-white font-metropolis text-[14px] w-full rounded-lg py-2'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentlyViewed;