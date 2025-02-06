import React, { useState } from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import first from '../../assets/BestOfBoat/BestSellers/first.webp';
import second from '../../assets/BestOfBoat/BestSellers/second.avif';
import third from '../../assets/BestOfBoat/BestSellers/third.webp';
import fourth from '../../assets/BestOfBoat/BestSellers/fourth.webp';
import fifth from '../../assets/BestOfBoat/BestSellers/fifth.webp';
import six from '../../assets/BestOfBoat/BestSellers/six.webp';

import seven from '../../assets/BestOfBoat/HomeTheatre/first.avif';
import eight from '../../assets/BestOfBoat/HomeTheatre/second.webp';
import nine from '../../assets/BestOfBoat/HomeTheatre/third.webp';
import ten from '../../assets/BestOfBoat/HomeTheatre/fourth.avif';
import elevan from '../../assets/BestOfBoat/HomeTheatre/fifth.webp';
import twelve from '../../assets/BestOfBoat/HomeTheatre/six.avif';

import thirteen from '../../assets/BestOfBoat/TopEarbuds/first.webp';
import fourteen from '../../assets/BestOfBoat/TopEarbuds/second.webp';
import fifteen from '../../assets/BestOfBoat/TopEarbuds/third.webp';
import sixteen from '../../assets/BestOfBoat/TopEarbuds/fourth.webp';
import seventeen from '../../assets/BestOfBoat/TopEarbuds/fifth.webp';
import eighteen from '../../assets/BestOfBoat/TopEarbuds/six.webp';

import nineteen from '../../assets/BestOfBoat/TopWatches/first.avif';
import twenty from '../../assets/BestOfBoat/TopWatches/second.webp';
import twentyOne from '../../assets/BestOfBoat/TopWatches/third.webp';
import twentyTwo from '../../assets/BestOfBoat/TopWatches/fourth.webp';
import twentyThree from '../../assets/BestOfBoat/TopWatches/fifth.webp';
import twentyFour from '../../assets/BestOfBoat/TopWatches/six.webp';

import twentyFive from '../../assets/BestOfBoat/CarAccessories/first.avif';
import twentySix from '../../assets/BestOfBoat/CarAccessories/second.avif';
import twentySeven from '../../assets/BestOfBoat/CarAccessories/third.avif';
import twentyEight from '../../assets/BestOfBoat/CarAccessories/fourth.avif';
import twentyNine from '../../assets/BestOfBoat/CarAccessories/fifth.avif';
import TheerTeen from '../../assets/BestOfBoat/CarAccessories/six.avif';

import star from '../../assets/SellisLive/star.webp'
import { company } from '../../constant/contant';
// import { LiaRupeeSignSolid } from "react-icons/lia";

const BestOfBoat = () => {

    const [changeImageSection,setChangeImageSection] = useState("Best_Sellers");
    console.log(changeImageSection);
    
  const sections = [
    {
      key: "Best_Sellers",
      label: "Best Sellers",
      content: [
        {
          id: 1,
          header: "✍️ Engraving Available",
          imgSrc: first,
          playback: "60 Hours Playback",
          rating: 4.8,
          title: "boAt Airdopes 131",
          price: "849",
          color1: "bg-black",
          color2: "bg-gray-500",
          plus: "+5",
          wrongPrice: "2,990",
          off: "72",
        },
        {
          id: 2,
          header: "✍️ Engraving Available",
          imgSrc: second,
          playback: "42 Hours Playback",
          rating: 4.8,
          title: "boAt Energyshroom 141",
          price: "849",
          color1: "bg-black",
          color2: "bg-blue-900",
          plus: "+3",
          wrongPrice: "4,490",
          off: "81",
        },
        {
          id: 3,
          header: "✍️ Engraving Available",
          imgSrc: third,
          playback: "40 Hours Playback",
          rating: 4.8,
          title: "boAt Energyshroom 161",
          price: "899",
          color1: "bg-black",
          color2: "bg-gray-300",
          plus: "+3",
          wrongPrice: "2,490",
          off: "64",
        },
        {
          id: 4,
          header: "🎉 New Launch",
          imgSrc: fourth,
          playback: "60 Hours Playback",
          rating: 4.7,
          title: "boAt Rockerz 255 Pro+",
          price: "999",
          color1: "bg-gray-300",
          color2: "bg-blue-500",
          plus: "+3",
          wrongPrice: "3,990",
          off: "75",
        },
        {
          id: 5,
          header: "",
          imgSrc: fifth,
          playback: "50 Hours Playback",
          rating: 4.8,
          title: "boAt Airdopes Atom 83",
          price: "1,199",
          color1: "bg-blue-500",
          color2: "bg-black",
          plus: "+2",
          wrongPrice: "3,490",
          off: "66",
        },
        {
          id: 6,
          header: "",
          imgSrc: six,
          playback: "Gaming Earbuds",
          rating: 4.9,
          title: "boAt Immortal 131",
          price: "1,199",
          color1: "bg-black",
          color2: "bg-blue-900",
          plus: "",
          wrongPrice: "3,490",
          off: "66",
        },
      ],
    },
    {
      key: "Home_Theatre_Systems_Soundbars",
      label: "Home Theatre Systems Soundbars",
      content: [
        {
          id: 1,
          header: "🎉 New Launch",
          imgSrc: seven,
          playback: "Dolby Audio",
          rating: 4.8,
          title: "boAt Aavante Bar A2060 Dolby",
          price: "9,999",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "23,990",
          off: "58",
        },
        {
          id: 2,
          header: "EXTRA ₹400 OFF",
          imgSrc: eight,
          playback: "Dolby Atmos",
          rating: 5.0,
          title: "boAt Aavante Bar 5500DA",
          price: "18,999",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "59,990",
          off: "68",
        },
        {
          id: 3,
          header: "",
          imgSrc: nine,
          playback: "16W RMS Sound",
          rating: "",
          title: "boAt Aavante Bar Opera",
          price: "4,499",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "7,990",
          off: "44",
        },
        {
          id: 4,
          header: "",
          imgSrc: ten,
          playback: "180W RMS Sound",
          rating: "",
          title: "boAt Aavante Bar 2400",
          price: "9,999",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "19,990",
          off: "50",
        },
        {
          id: 5,
          header: "",
          imgSrc: elevan,
          playback: "Wireless Subwoofer",
          rating: 5.0,
          title: "boAt Aavante Bar Theme",
          price: "8,499",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "21,990",
          off: "61",
        },
        {
          id: 6,
          header: "",
          imgSrc: twelve,
          playback: "160W RMS Sound",
          rating: "",
          title: "boAt Aavante Bar Quake+",
          price: "8,999",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "15,990",
          off: "44",
        },
      ],
    },
    {
      key: "Top_Earbuds",
      label: "Top Earbuds",
      content: [
        {
          id: 1,
          header: "🎉 New Launch",
          imgSrc: thirteen,
          playback: "50 Hours Playback",
          rating: 4.8,
          title: "boAt Airdopes Supreme",
          price: "1,199",
          color1: "bg-black",
          color2: "bg-gray-500",
          plus: "+4",
          wrongPrice: "5,990",
          off: "80",
        },
        {
          id: 2,
          header: "🎉 New Launch",
          imgSrc: fourteen,
          playback: "45 Hours Playback",
          rating: 4.9,
          title: "boAt Airdopes 91",
          price: "999",
          color1: "bg-black",
          color2: "bg-blue-900",
          plus: "+1",
          wrongPrice: "3,990",
          off: "75",
        },
        {
          id: 3,
          header: "EXTRA ₹100 OFF",
          imgSrc: fifteen,
          playback: "60 Hours Playback",
          rating: 4.8,
          title: "boAt Airdopes 131",
          price: "849",
          color1: "bg-black",
          color2: "bg-gray-300",
          plus: "+5",
          wrongPrice: "2,990",
          off: "72",
        },
        {
          id: 4,
          header: "🎉 New Launch",
          imgSrc: sixteen,
          playback: "45 Hours Playback",
          rating: 4.8,
          title: "boAt Airdopes 138 PRO",
          price: "1,599",
          color1: "bg-gray-300",
          color2: "bg-sky-300",
          plus: "+2",
          wrongPrice: "2,990",
          off: "47",
        },
        {
          id: 5,
          header: "🎉 New Launch",
          imgSrc: seventeen,
          playback: "Limited Edition",
          rating: 5.0,
          title: "Airdopes 131 DC Edition",
          price: "1,099",
          color1: "bg-black",
          color2: "bg-gray-500",
          plus: "+3",
          wrongPrice: "2,099",
          off: "63",
        },
        {
          id: 6,
          header: "🚀 Bestseller",
          imgSrc: eighteen,
          playback: "40 Hours Playback",
          rating: 4.8,
          title: "boAt Rockerz 255 Pro+",
          price: "1,399",
          color1: "bg-black",
          color2: "bg-blue-900",
          plus: "+3",
          wrongPrice: "2,299",
          off: "71",
        },
      ],
    },
    {
      key: "Top_Watches",
      label: "Top Watches",
      content: [
        {
          id: 1,
          header: "🎉 New Launch",
          imgSrc: nineteen,
          playback: "BT Calling",
          rating: 4.5,
          title: "boAt Wave Sigma 3",
          price: "1,499",
          color1: "bg-black",
          color2: "bg-gray-500",
          plus: "+5",
          wrongPrice: "8,999",
          off: "83",
        },
        {
          id: 2,
          header: "🎉 New Launch",
          imgSrc: twenty,
          playback: "BT Calling",
          rating: 4.2,
          title: "boAt Wave Call 2 Plus",
          price: "1,449",
          color1: "bg-black",
          color2: "bg-black",
          plus: "+3",
          wrongPrice: "7,499",
          off: "81",
        },
        {
          id: 3,
          header: "🎉 New Launch",
          imgSrc: twentyOne,
          playback: "BT Calling",
          rating: 5.0,
          title: "boAt Lunar Discovery",
          price: "1,499",
          color1: "bg-black",
          color2: "bg-black",
          plus: "+4",
          wrongPrice: "8,999",
          off: "83",
        },
        {
          id: 4,
          header: "🎉 New Launch",
          imgSrc: twentyTwo,
          playback: "BT Calling",
          rating: "",
          title: "boAt Lunar Orbit",
          price: "1,899",
          color1: "bg-black",
          color2: "bg-black",
          plus: "+4",
          wrongPrice: "8,499",
          off: "78",
        },
        {
          id: 5,
          header: "🎉 New Launch",
          imgSrc: twentyThree,
          playback: "AMOLED Display",
          rating: 5.0,
          title: "boAt Lunar Oasis",
          price: "3,799",
          color1: "bg-black",
          color2: "bg-black",
          plus: "+1",
          wrongPrice: "13,999",
          off: "73",
        },
        {
          id: 6,
          header: "",
          imgSrc: twentyFour,
          playback: "BT Calling",
          rating: 4.4,
          title: "boAt Storm Pro Call",
          price: "1,799",
          color1: "bg-black",
          color2: "bg-red-600",
          plus: "+2",
          wrongPrice: "9,799",
          off: "82",
        },
      ],
    },
    {
      key: "Car_Accessories",
      label: "Car Accessories",
      content: [
        {
          id: 1,
          header: "",
          imgSrc: twentyFive,
          playback: "18W Fast Charger",
          rating: 4.9,
          title: "boAt Dual QC-PD",
          price: "419",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "1,499",
          off: "72",
        },
        {
          id: 2,
          header: "",
          imgSrc: twentySix,
          playback: "QUICK CHARGE 3.0",
          rating: "",
          title: "boAt Dual Rapid QC 3.0 NC",
          price: "479",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "899",
          off: "47",
        },
        {
          id: 3,
          header: "",
          imgSrc: twentySeven,
          playback: "QUICK CHARGE 1.0",
          rating: "",
          title: "boAt Dual Rapid QC 1.0 NC",
          price: "899",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "1,199",
          off: "50",
        },
        {
          id: 4,
          header: "",
          imgSrc: twentyEight,
          playback: "QUICK CHARGE",
          rating: "",
          title: "boAt Dual Rapid QC",
          price: "499",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "999",
          off: "50",
        },
        {
          id: 5,
          header: "",
          imgSrc: twentyNine,
          playback: "QUICK CHARGE 3.0",
          rating: 5.0,
          title: "boAt Dual Rapid QC Rapid Car",
          price: "479",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "999",
          off: "52",
        },
        {
          id: 6,
          header: "",
          imgSrc: TheerTeen,
          playback: "18W Fast Charger",
          rating: 5.0,
          title: "boAt Dual Rapid QC",
          price: "549",
          color1: "",
          color2: "",
          plus: "",
          wrongPrice: "1,499",
          off: "63",
        },
      ],
    },
  ];
  
  return (
    <div className='mt-3'>
        <div className="flex w-full max-w-[1600px] mx-auto">    
            <div className='flex flex-col w-full px-2 bm:px-1 mx-auto'>
                {/* header */}
                <div className='flex w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] justify-between mx-auto items-center'>
                    <div>
                        <h1 className='cursor-pointer text-[1.5rem] font-metropolis'><span className='font-medium'>Best Of</span> <span className='font-bold'>bo<span className='decoration-[0.15rem] underline decoration-red-500'>At</span></span></h1>
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
                <div className='cursor-pointer w-[98%] bw:w-[92%] md:w-[98%] bm:w-[94%] xl:w-[95%] mt-2 gap-2 rounded-md mx-auto grid grid-cols-2 base:grid-cols-3 bm:grid-cols-6'>
                        {sections.find((section) => section.key === changeImageSection).content.map((ele,id)=> (
                            <div key={id}>
                              <div>
                                      {/* img */}
                                      <div className='aspect-square relative'>
                                          <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>{ele.header}</span>
                                          <img src={ele.imgSrc} alt='img' className='rounded-lg relative z-30 object-cover w-full h-full' />
                                          <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold mb-[-4px]'>
                                              <div>
                                                  <h1>{ele.playback}</h1>
                                              </div>
                                              <div className='bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm'>
                                                  <img src={star} alt='star' width={15} />
                                                  <h1 className='font-normal pt-0.5'>{ele.rating}</h1>
                                              </div>
                                          </div>
                                      </div>
              
                                      {/* text */}
                                      <div className='bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col'>
                                          {/* boat airdrops 161 */}
                                          <div className='flex h-10 bm:h-12 items-start pt-1 bm:pt-0 bm:items-center w-[92%] mx-auto border-dotted border-b-2 border-b-gray-300'>
                                              <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>{ele.title}</h1>
                                          </div>
              
                                          {/* 899 */}
                                          <div className='pb-1'>
                                              {/* $899 and +3 */}
                                              <div className='flex justify-between px-2 items-center'>
                                                  <div className='flex items-center'>
                                                      {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                                      <h1 className='flex items-center font-bold text-[0.875rem] bm:text-[1.1875rem]'>₹{ele.price}</h1>
                                                  </div>
                                                  <div className='relative flex items-center'>
                                                      <div className={`absolute left-0 z-10 ${ele.color1} w-3 h-3 bm:w-4 bm:h-4 rounded-full`}></div>
                                                      <div className={`absolute left-2 z-20 ${ele.color2} w-3 h-3 bm:w-4 bm:h-4 rounded-full`}></div>
                                                      <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold'>{ele.plus}</span>
                                                  </div>
                                              </div>
                                              {/* 64% off */}
                                              <div className='px-2 flex items-center gap-2'>
                                                  <h1 className='line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis'>₹{ele.wrongPrice}</h1>
                                                  <h2 className='text-[0.625rem] text-[#0e946a] font-bold'>{ele.off}% off</h2>
                                              </div>
                                          </div>
                                      </div>
                              </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestOfBoat;