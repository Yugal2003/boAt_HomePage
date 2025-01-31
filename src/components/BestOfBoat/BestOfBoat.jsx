import React, { useState } from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import first from '../../assets/RepublicDayDeals/AllDeals/first.webp';
import second from '../../assets/RepublicDayDeals/AllDeals/second.webp';
import third from '../../assets/RepublicDayDeals/AllDeals/third.jpg';
import fourth from '../../assets/RepublicDayDeals/AllDeals/fourth.webp';
import fifth from '../../assets/RepublicDayDeals/AllDeals/fifth.webp';
import six from '../../assets/BestOfBoat/BestSellers/six.webp';

import seven from '../../assets/RepublicDayDeals/TrueWirelessEarbuds/first_1.webp';
import eight from '../../assets/RepublicDayDeals/TrueWirelessEarbuds/second.webp';
import nine from '../../assets/RepublicDayDeals/TrueWirelessEarbuds/third.webp';
import ten from '../../assets/RepublicDayDeals/TrueWirelessEarbuds/fourth_4.webp';
import elevan from '../../assets/RepublicDayDeals/TrueWirelessEarbuds/fifth_5.webp';
import twelve from '../../assets/RepublicDayDeals/TrueWirelessEarbuds/six_6.webp';
import thirteen from '../../assets/RepublicDayDeals/Smartwatches/first.webp';
import fourteen from '../../assets/RepublicDayDeals/Smartwatches/second.webp';
import fifteen from '../../assets/RepublicDayDeals/Smartwatches/third_3.webp';
import sixteen from '../../assets/RepublicDayDeals/Smartwatches/fourth.webp';
import seventeen from '../../assets/RepublicDayDeals/Smartwatches/fifth.webp';
import eighteen from '../../assets/RepublicDayDeals/Smartwatches/six.webp';

import nineteen from '../../assets/RepublicDayDeals/SpeakersAndSoundbars/first.jpg';
import twenty from '../../assets/RepublicDayDeals/SpeakersAndSoundbars/second_2.jpg';
import twentyOne from '../../assets/RepublicDayDeals/SpeakersAndSoundbars/third.jpg';
import twentyTwo from '../../assets/RepublicDayDeals/SpeakersAndSoundbars/fourth_4.webp';
import twentyThree from '../../assets/RepublicDayDeals/SpeakersAndSoundbars/fifth_5.webp';
import twentyFour from '../../assets/RepublicDayDeals/SpeakersAndSoundbars/six.webp';

import twentyFive from '../../assets/RepublicDayDeals/NeckbandsAndHeadphones/first_1.webp';
import twentySix from '../../assets/RepublicDayDeals/NeckbandsAndHeadphones/second_2.webp';
import twentySeven from '../../assets/RepublicDayDeals/NeckbandsAndHeadphones/third_3.webp';
import twentyEight from '../../assets/RepublicDayDeals/NeckbandsAndHeadphones/fourth_4.webp';
import twentyNine from '../../assets/RepublicDayDeals/NeckbandsAndHeadphones/fifth.avif';
import TheerTeen from '../../assets/RepublicDayDeals/NeckbandsAndHeadphones/six_6.webp';

import star from '../../assets/SellisLive/star.webp'
import percentage from '../../assets/percentage.avif';
// import { LiaRupeeSignSolid } from "react-icons/lia";

const BestOfBoat = () => {

    const [changeImageSection,setChangeImageSection] = useState("All_Deals");
    console.log(changeImageSection);
    
  const sections = [
    {
      key: "All_Deals",
      label: "All Deals",
      content: (
        <>
            {/* first */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-square relative overflow-hidden'>
                            <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                            <img src={first} alt='img' className='rounded-lg relative z-30 object-cover w-full h-full' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes Alpha</h1>
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

            {/* second */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-square relative overflow-hidden'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>✍️ Engraving Available</span>
                            <img src={second} alt='img' className='rounded-lg relative z-30 object-cover w-full h-full' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>20000mAh Power Bank</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.4</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Energyshroom PB400</h1>
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
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,499</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>62% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* third */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-square relative overflow-hidden'>
                                <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                                <img src={third} alt='img' className='rounded-lg relative z-30 object-cover w-full h-full' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Stone 350 Pro</h1>
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

            {/* fourth */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-square relative overflow-hidden'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span>
                                <img src={fourth} alt='img' className='rounded-lg relative z-30 object-cover w-full h-full' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 181 Pro</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className='absolute left-0 z-10 bg-gray-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-sky-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2'>
                                        <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,990</h1>
                                        <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>76% off</h2>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>

            {/* fifth */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-square relative overflow-hidden'>
                            {/* <span className='z-50 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span> */}
                            <img src={fifth} alt='img' className='rounded-lg relative z-30 object-cover w-full h-full' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>Noise Cancellation</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.7</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 141 ANC</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 border border-gray-300 bg-white w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+1</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹5,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>80% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* six */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-square relative overflow-hidden'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🚀 Bestseller</span>
                            <img src={six} alt='img' className='rounded-lg relative z-30 object-cover w-full h-full' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>60 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.8</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Rockerz 255 Pro+</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,099</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-blue-900 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+3</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹3,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>72% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
      ),
    },
    {
      key: "True_Wireless_Earbuds",
      label: "True Wireless Earbuds",
      content: (
        <>
            {/* first */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                            <img src={seven} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes Alpha</h1>
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

            {/* second */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>✍️ Engraving Available</span>
                            <img src={eight} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>20000mAh Power Bank</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.4</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Energyshroom PB400</h1>
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
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,499</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>62% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* third */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                                <img src={nine} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Stone 350 Pro</h1>
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

            {/* fourth */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span>
                                <img src={ten} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 181 Pro</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className='absolute left-0 z-10 bg-gray-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-sky-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2'>
                                        <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,990</h1>
                                        <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>76% off</h2>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>

            {/* fifth */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            {/* <span className='z-50 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span> */}
                            <img src={elevan} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>Noise Cancellation</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.7</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 141 ANC</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 border border-gray-300 bg-white w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+1</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹5,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>80% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* six */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🚀 Bestseller</span>
                            <img src={twelve} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>60 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.8</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Rockerz 255 Pro+</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,099</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-blue-900 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+3</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹3,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>72% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
      )
    },
    {
      key: "Smartwatches",
      label: "Smartwatches",
      content: (
        <>
            {/* first */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                            <img src={thirteen} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes Alpha</h1>
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

            {/* second */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>✍️ Engraving Available</span>
                            <img src={fourteen} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>20000mAh Power Bank</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.4</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Energyshroom PB400</h1>
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
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,499</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>62% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* third */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                                <img src={fifteen} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Stone 350 Pro</h1>
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

            {/* fourth */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span>
                                <img src={sixteen} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 181 Pro</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className='absolute left-0 z-10 bg-gray-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-sky-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2'>
                                        <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,990</h1>
                                        <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>76% off</h2>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>

            {/* fifth */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            {/* <span className='z-50 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span> */}
                            <img src={seventeen} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>Noise Cancellation</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.7</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 141 ANC</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 border border-gray-300 bg-white w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+1</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹5,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>80% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* six */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🚀 Bestseller</span>
                            <img src={eighteen} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>60 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.8</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Rockerz 255 Pro+</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,099</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-blue-900 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+3</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹3,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>72% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
      )
    },
    {
      key: "Speakers_And_Soundbars",
      label: "Speakers And Soundbars",
      content: (
        <>
            {/* first */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                            <img src={nineteen} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes Alpha</h1>
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

            {/* second */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>✍️ Engraving Available</span>
                            <img src={twenty} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>20000mAh Power Bank</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.4</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Energyshroom PB400</h1>
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
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,499</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>62% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* third */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                                <img src={twentyOne} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Stone 350 Pro</h1>
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

            {/* fourth */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span>
                                <img src={twentyTwo} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 181 Pro</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className='absolute left-0 z-10 bg-gray-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-sky-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2'>
                                        <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,990</h1>
                                        <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>76% off</h2>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>

            {/* fifth */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            {/* <span className='z-50 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span> */}
                            <img src={twentyThree} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>Noise Cancellation</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.7</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 141 ANC</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 border border-gray-300 bg-white w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+1</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹5,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>80% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* six */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🚀 Bestseller</span>
                            <img src={twentyFour} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>60 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.8</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Rockerz 255 Pro+</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,099</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-blue-900 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+3</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹3,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>72% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
      )
    },
    {
      key: "Neckbands_And_Headphones",
      label: "Neckbands And Headphones",
      content: (
        <>
            {/* first */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                            <img src={twentyFive} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes Alpha</h1>
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

            {/* second */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>✍️ Engraving Available</span>
                            <img src={twentySix} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>20000mAh Power Bank</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.4</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Energyshroom PB400</h1>
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
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,499</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>62% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* third */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span><img width={10} src={percentage} alt='percentage_image'/></span>EXTRA ₹100 OFF</span>
                                <img src={twentySeven} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Stone 350 Pro</h1>
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

            {/* fourth */}
            <div>
                <div>
                            {/* img */}
                            <div className='aspect-[16/9] relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span>
                                <img src={twentyEight} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                                <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
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
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 181 Pro</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className='absolute left-0 z-10 bg-gray-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <div className='absolute left-2 z-20 bg-sky-300 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+2</span>
                                        </div>
                                    </div>
                                    {/* 64% off */}
                                    <div className='px-2 flex items-center gap-2'>
                                        <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹4,990</h1>
                                        <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>76% off</h2>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>

            {/* fifth */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            {/* <span className='z-50 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🎉 New Launch</span> */}
                            <img src={twentyNine} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>Noise Cancellation</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.7</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Airdopes 141 ANC</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,199</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 border border-gray-300 bg-white w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+1</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹5,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>80% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* six */}
            <div>
                <div>
                        {/* img */}
                        <div className='aspect-[16/9] relative'>
                            <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>🚀 Bestseller</span>
                            <img src={TheerTeen} alt='img' className='rounded-lg relative z-30 object-contain w-full h-fit' />
                            <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold'>
                                <div>
                                    <h1>60 Hours Playback</h1>
                                </div>
                                <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                    <img src={star} alt='star' width={15} />
                                    <h1 className='font-normal pt-0.5'>4.8</h1>
                                </div>
                            </div>
                        </div>

                        {/* text */}
                        <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                            {/* boat airdrops 161 */}
                            <div className='flex h-10 bm:h-12 px-2 items-start pt-1 bm:pt-0 bm:items-center border-b-2'>
                                <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>boAt Rockerz 255 Pro+</h1>
                            </div>

                            {/* 899 */}
                            <div className='pb-1'>
                                {/* $899 and +3 */}
                                <div className='flex justify-between px-2 items-center'>
                                    <div className='flex items-center'>
                                        {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                        <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹1,099</h1>
                                    </div>
                                    <div className='relative flex items-center'>
                                        <div className='absolute left-0 z-10 bg-black w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <div className='absolute left-2 z-20 bg-blue-900 w-3 h-3 bm:w-4 bm:h-4 rounded-full'></div>
                                        <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>+3</span>
                                    </div>
                                </div>
                                {/* 64% off */}
                                <div className='px-2 flex items-center gap-2'>
                                    <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹3,990</h1>
                                    <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>72% off</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
      )
    },
  ];
  
  return (
    <div className='mt-3'>
        <div className="flex w-full max-w-[1600px] mx-auto">    
            <div className='flex flex-col w-full px-2 bm:px-1 mx-auto'>
                {/* header */}
                <div className='flex w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] justify-between mx-auto items-center'>
                    <div>
                        <h1 className='text-[1.5rem] font-metropolis'><span className='font-medium'>Best Of</span> <span className='font-bold'>bo<span className='decoration-[0.15rem] underline decoration-red-500'>At</span></span></h1>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 text-[0.9rem] text-[#264978] font-extrabold'>View All <FiArrowRightCircle size={18}/></button>
                    </div>
                </div>

                {/* 5 Option to select */}
                <div className='w-full overflow-x-auto sm:overflow-x-hidden mx-auto scrollbar-hide'>
                    <div className='flex gap-3 sm:gap-6 my-3 sm:my-2 items-center w-max bw:w-[92%] bm:w-[94%] xl:w-[95%] mx-auto whitespace-nowrap'>
                        {sections.map((section) => (
                            <div
                                key={section.key}
                                className={`${section.key === changeImageSection ? "bg-[#eeeeef]" : "white"} ${section.key === changeImageSection ? "font-bold" : "font-normal"} ${section.key === changeImageSection ? "text-black" : "text-gray-500"} py-0.5 rounded-full`}
                            >
                                <button
                                className={`${section.key === changeImageSection ? "px-4" : "px-0"} px-2 text-[0.75rem] bm:text-[1rem] font-metropolis`}
                                onClick={() => setChangeImageSection(section.key)}
                                >
                                {section.label}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* text with img */}
                <div className='w-[98%] bw:w-[92%] md:w-[98%] bm:w-[94%] xl:w-[95%] mt-2 gap-2 rounded-md mx-auto grid grid-cols-2 base:grid-cols-3 bm:grid-cols-6'>
                        {sections.find((section) => section.key === changeImageSection)?.content}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestOfBoat;