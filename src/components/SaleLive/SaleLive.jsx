import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import first from '../../assets/SellisLive/first.webp';
import second from '../../assets/SellisLive/first_1.webp';
import third from '../../assets/SellisLive/third_3.webp';
import fourth from '../../assets/SellisLive/fourth_4.webp';
import fifth from '../../assets/SellisLive/fifth.webp';
import six from '../../assets/SellisLive/six_6.webp';
import star from '../../assets/SellisLive/star.webp'
import { company } from '../../constant/contant';
import percentage from '../../assets/percentage.avif';
// import { LiaRupeeSignSolid } from "react-icons/lia";

const SaleLive = () => {

    const sections = [
        {
            content : (
                <>
                    {/* first */}
                    <div>
                        <div>
                                    {/* img */}
                                    <div className='aspect-[16/9] relative'>
                                        <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                                        <img src={first} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                        <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold mb-[-4px]'>
                                            <div>
                                                <h1>12 Hours Playback</h1>
                                            </div>
                                            {/* <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                                <img src={star} alt='star' width={15} />
                                                <h1 className='font-normal pt-0.5'>4.9</h1>
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* text */}
                                    <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                                        {/* boat airdrops 161 */}
                                        <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                            <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>{company.name} Stone 350 Pro</h1>
                                        </div>

                                        {/* 899 */}
                                        <div className='pb-1'>
                                            {/* $899 and +3 */}
                                            <div className='flex justify-between px-2 items-center'>
                                                <div className='flex items-center'>
                                                    {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                                    <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,699</h1>
                                                </div>
                                                <div className='relative flex items-center'>
                                                    <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                                    <div className='absolute left-2 z-20 bg-blue-900 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                                    <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+1</span>
                                                </div>
                                            </div>
                                            {/* 64% off */}
                                            <div className='px-2 flex items-center gap-2'>
                                                <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,990</h1>
                                                <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>66% off</h2>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>

                    {/* second */}
                    <div>
                        <div>
                                {/* img */}
                                <div className='aspect-[16/9] relative'>
                                    <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                                    <img src={second} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                    <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold mb-[-4px]'>
                                        <div>
                                            <h1>35 Hours Playback</h1>
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
                                    <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                        <h1 className='text-xs bm:text-[0.9375rem] font-bold font-metropolis'>{company.name} Airdopes Alpha</h1>
                                    </div>

                                    {/* 899 */}
                                    <div className='pb-1'>
                                        {/* $899 and +3 */}
                                        <div className='flex justify-between px-2 items-center'>
                                            <div className='flex items-center'>
                                                {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                                <h1 className='flex items-center font-semibold font-metropolis text-[0.875rem] bm:text-[1.1875rem]'>₹999</h1>
                                            </div>
                                            <div className='relative flex items-center'>
                                                <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                                <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                                <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+1</span>
                                            </div>
                                        </div>
                                        {/* 64% off */}
                                        <div className='px-2 flex items-center gap-2'>
                                            <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹3,490</h1>
                                            <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>71% off</h2>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    {/* third */}
                        <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🚀 Bestseller</span>
                                <img src={third} alt='img' className='rounded-lg relative z-30 object-cover w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold mb-[-4px]'>
                                    <div>
                                        <h1>35 Hours Playback</h1>
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
                                <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>{company.name} Airdopes Alpha</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center py-1.5'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-sm bm:text-[1.1875rem]'>₹799</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-gray-500 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-sm font-semibold'>+1</span>
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2'>
                                        <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹3,490</h1>
                                        <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>77% off</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* fourth */}
                        <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span>
                                <img src={fourth} alt='img' className='rounded-lg relative z-30 object-cover w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold mb-[-4px]'>
                                    <div>
                                        <h1>Dolby Audio</h1>
                                    </div>
                                    <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                        <img src={star} alt='star' width={15} />
                                        <h1 className='font-normal pt-0.5'>4.6</h1>
                                    </div>
                                </div>
                            </div>

                            {/* text */}
                            <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                                {/* boat airdrops 161 */}
                                <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>{company.name} Airdopes 800</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center py-1.5'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-sm bm:text-[1.1875rem]'>₹1,499</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-gray-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-sm font-semibold'>+2</span>
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2'>
                                        <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹6,490</h1>
                                        <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>77% off</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* fifth */}
                        <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span>
                                <img src={fifth} alt='img' className='rounded-lg relative z-30 object-cover w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold mb-[-4px]'>
                                    <div>
                                        <h1>100 Hours Playback</h1>
                                    </div>
                                    {/* <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                        <img src={star} alt='star' width={15} />
                                        <h1 className='font-normal pt-0.5'>4.6</h1>
                                    </div> */}
                                </div>
                            </div>

                            {/* text */}
                            <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                                {/* boat airdrops 161 */}
                                <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>{company.name} Airdopes 181 Pro</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center py-1.5'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-sm bm:text-[1.1875rem]'>₹1,199</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className='absolute left-0 z-10 bg-gray-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-sky-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-sm font-semibold'>+2</span>
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2'>
                                        <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,490</h1>
                                        <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>76% off</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* six */}
                        <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>✍️ Engraving Available</span>
                                <img src={six} alt='img' className='rounded-lg relative z-30 object-cover w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold mb-[-4px]'>
                                    <div>
                                        <h1>120 Hours Playback</h1>
                                    </div>
                                    <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                        <img src={star} alt='star' width={15} />
                                        <h1 className='font-normal pt-0.5'>5.0</h1>
                                    </div>
                                </div>
                            </div>

                            {/* text */}
                            <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                                {/* boat airdrops 161 */}
                                <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>{company.name} Nirvana lon</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center py-1.5'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-sm bm:text-[1.1875rem]'>₹1,799</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className='absolute left-0 z-10 bg-gray-200 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-sm font-semibold'></span>
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2'>
                                        <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹7,990</h1>
                                        <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>77% off</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                </>
            )
        }
    ]
  return (
    <div className='mt-6 pt-4 md:pt-0'>
        <div className="flex w-full max-w-[1600px] mx-auto">    
            <div className='flex flex-col w-full px-2 bm:px-1 mx-auto'>
                {/* header */}
                <div className='flex w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] justify-between mx-auto items-center'>
                    <div>
                        <h1 className='text-[1.5rem] cursor-pointer'><span className='font-semibold'>Sale</span> <span className='font-bold'>Is Li<span className='decoration-[0.15rem] underline decoration-red-500'>ve</span></span></h1>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 text-[0.9rem] text-[#264978] font-extrabold'>View All <FiArrowRightCircle size={18}/></button>
                    </div>
                </div>

                {/* text with img */}
                <div className='grid grid-cols-2 base:grid-cols-3 bm:grid-cols-6 cursor-pointer w-full bw:w-[92%] bm:w-[94%] xl:w-[95%] md:pr-4 bm:pr-0 xl:pr-8 mt-2 gap-1.5 rounded-md mx-auto'> {/* apply grid hear */}
                    {sections.map((section, index) => (
                        <>
                            {section.content}
                        </>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaleLive;