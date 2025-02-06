import React, { useState } from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import first from '../../assets/RepublicDayDeals/AllDeals/first_1.webp';
import second from '../../assets/RepublicDayDeals/AllDeals/second_2.webp';
import third from '../../assets/RepublicDayDeals/AllDeals/third.jpg';
import fourth from '../../assets/RepublicDayDeals/AllDeals/fourth_4.webp';
import fifth from '../../assets/RepublicDayDeals/AllDeals/fifth_5.webp';
import six from '../../assets/RepublicDayDeals/AllDeals/six_6.webp';

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

const RepublicDeals = () => {

    const [changeImageSection,setChangeImageSection] = useState("All_Deals");
    console.log(changeImageSection);
    
  const sections = [
    {
      key: "All_Deals",
      label: "All Deals",
      content: [
        {
            id: 1,
            header: "EXTRA ₹100 OFF",
            imgSrc: first,
            playback: "35 Hours Playback",
            rating : 4.9,
            title : "boAt Airdopes Alpha",
            price : "999",
            color1 : "bg-black",
            color2 : "bg-gray-500",
            plus : "+1",
            wrongPrice : "3,490",
            off : "71"
        },
        {
        id: 2,
        header: "✍️ Engraving Available",
        imgSrc: second,
        playback: "20000mAh Power Bank",
        rating : 4.4,
        title : "boAt Energyshroom PB400",
        price : "1,699",
        color1 : "bg-black",
        color2 : "bg-blue-900",
        plus : "+2",
        wrongPrice : "4,499",
        off : "62"
        },
        {
        id: 3,
        header: "EXTRA ₹100 OFF",
        imgSrc: third,
        playback: "12 Hours Playback",
        rating : 4.9,
        title : "boAt Stone 350 Pro",
        price : "1,699",
        color1 : "bg-black",
        color2 : "bg-blue-900",
        plus : "+1",
        wrongPrice : "4,990",
        off : "66"
        },
        {
        id: 4,
        header: "🎉 New Launch",
        imgSrc: fourth,
        playback: "100 Hours Playback",
        rating : 4.6,
        title : "boAt Airdopes 181 Pro",
        price : "1,199",
        color1 : "bg-gray-300",
        color2 : "bg-sky-300",
        plus : "+2",
        wrongPrice : "4,990",
        off : "76"
        },
        {
        id: 5,
        header: "🎉 New Launch",
        imgSrc: fifth,
        playback: "Noise Cancellation",
        rating : 4.7,
        title : "boAt Airdopes 141 ANC",
        price : "1,199",
        color1 : "bg-black",
        color2 : "bg-gray-500",
        plus : "+1",
        wrongPrice : "5,990",
        off : "72"
        },
        {
        id: 6,
        header: "🚀 Bestseller",
        imgSrc: six,
        playback: "60 Hours Playback",
        rating : 4.4,
        title : "boAt Rockerz 255 Pro+",
        price : "1,099",
        color1 : "bg-black",
        color2 : "bg-blue-900",
        plus : "+3",
        wrongPrice : "3,990",
        off : "71"
        },
      ]
    },
    {
      key: "True_Wireless_Earbuds",
      label: "True Wireless Earbuds",
      content: [
        {
            id: 1,
            header: "EXTRA ₹100 OFF",
            imgSrc: seven,
            playback: "35 Hours Playback",
            rating : 4.9,
            title : "boAt Airdopes Alpha",
            price : "1,199",
            color1 : "bg-sky-300",
            color2 : "bg-gray-500",
            plus : "+2",
            wrongPrice : "3,299",
            off : "71"
        },
        {
            id: 2,
            header: "✍️ Engraving Available",
            imgSrc: eight,
            playback: "20000mAh Power Bank",
            rating : 4.4,
            title : "boAt Energyshroom PB400",
            price : "1,699",
            color1 : "bg-gray-500",
            color2 : "bg-black",
            plus : "+2",
            wrongPrice : "3,499",
            off : "72"
        },
        {
            id: 3,
            header: "EXTRA ₹100 OFF",
            imgSrc: nine,
            playback: "12 Hours Playback",
            rating : 4.4,
            title : "boAt Stone 350 Pro",
            price : "1,699",
            color1 : "bg-black",
            color2 : "bg-sky-300",
            plus : "+4",
            wrongPrice : "2,499",
            off : "64"
        },
        {
            id: 4,
            header: "🎉 New Launch",
            imgSrc: ten,
            playback: "100 Hours Playback",
            rating : 4.4,
            title : "boAt Airdopes 181 Pro",
            price : "1,199",
            color1 : "bg-gray-300",
            color2 : "bg-sky-300",
            plus : "+4",
            wrongPrice : "2,199",
            off : "64"
        },
        {
            id: 5,
            header: "🎉 New Launch",
            imgSrc: elevan,
            playback: "",
            rating : 4.4,
            title : "Noise Cancellation",
            price : "1,699",
            color1 : "bg-black",
            color2 : "bg-green-400",
            plus : "+3",
            wrongPrice : "4,099",
            off : "43"
        },
        {
            id: 6,
            header: "🚀 Bestseller",
            imgSrc: twelve,
            playback: "60 Hours Playback",
            rating : 4.1,
            title : "boAt Rockerz 255 Pro+",
            price : "1,099",
            color1 : "bg-black",
            color2 : "bg-sky-300",
            plus : "+2",
            wrongPrice : "2,499",
            off : "72"
        },
      ]
    },
    {
      key: "Smartwatches",
      label: "Smartwatches",
      content: [
        {
            id: 1,
            header: "EXTRA ₹100 OFF",
            imgSrc: thirteen,
            playback: "35 Hours Playback",
            rating : 4.9,
            title : "boAt BT Calling",
            price : "999",
            color1 : "bg-black",
            color2 : "bg-gray-300",
            plus : "+2",
            wrongPrice : "2,000",
            off : "62"
        }, 
        {
            id: 2,
            header: "✍️ Engraving Available",
            imgSrc: fourteen,
            playback: "BT Calling",
            rating : 4.9,
            title : "SmartWatches Boat",
            price : "2,800",
            color1 : "bg-red-300",
            color2 : "bg-blue-300",
            plus : "+4",
            wrongPrice : "4,900",
            off : "50"
        }, 
        {
            id: 3,
            header: "EXTRA ₹100 OFF",
            imgSrc: fifteen,
            playback: "BT Calling",
            rating : 4.4,
            title : "boAt Stone 350 Pro",
            price : "3,299",
            color1 : "bg-black",
            color2 : "bg-gray-300",
            plus : "+2",
            wrongPrice : "49,99",
            off : "71"
        }, 
        {
            id: 4,
            header: "🎉 New Launch",
            imgSrc: sixteen,
            playback: "BT Calling",
            rating : 4.1,
            title : "boAt 181 Pro",
            price : "2,599",
            color1 : "bg-green-300",
            color2 : "bg-gray-300",
            plus : "+2",
            wrongPrice : "4,199",
            off : "72"
        }, 
        {
            id: 5,
            header: "🎉 New Launch",
            imgSrc: seventeen,
            playback: "Noise Cancellation",
            rating : 4.2,
            title : "boAt ANC",
            price : "2,499",
            color1 : "bg-red-400",
            color2 : "bg-sky-200",
            plus : "+1",
            wrongPrice : "4,599",
            off : "53"
        }, 
        {
            id: 6,
            header: "🚀 Bestseller",
            imgSrc: eighteen,
            playback: "BT Noise Cancellation",
            rating : 4,
            title : "boAt Rockerz 255 Pro+",
            price : "2,299",
            color1 : "bg-red-300",
            color2 : "bg-yellow-500",
            plus : "+2",
            wrongPrice : "4,599",
            off : "73"
        },
      ]
    },
    {
      key: "Speakers_And_Soundbars",
      label: "Speakers And Soundbars",
      content: [
        {
            id: 1,
            header: "EXTRA ₹100 OFF",
            imgSrc: nineteen,
            playback: "35 Hours Playback",
            rating : 4.1,
            title : "BT Speakers Pro+",
            price : "699",
            color1 : "bg-black",
            color2 : "bg-gray-300",
            plus : "+2",
            wrongPrice : "1,099",
            off : "73"
        }, {
            id: 2,
            header: "✍️ Engraving Available",
            imgSrc: twenty,
            playback: "20 Hours Playback",
            rating : 4.4,
            title : "boAt Energyshroom",
            price : "1,099",
            color1 : "bg-black",
            color2 : "bg-gray-400",
            plus : "+4",
            wrongPrice : "2,099",
            off : "72"
        }, {
            id: 3,
            header: "New Launce",
            imgSrc: twentyOne,
            playback: "40 Hours Playback",
            rating : 4,
            title : "boAt Stone 350 Pro+",
            price : "899",
            color1 : "bg-black",
            color2 : "bg-sky-400",
            plus : "+3",
            wrongPrice : "1,199",
            off : "78"
        }, {
            id: 4,
            header: "✍️ Engraving Available",
            imgSrc: twentyTwo,
            playback: "80 Hours Playback",
            rating : 4.2,
            title : "boAt Energyshroom P400",
            price : "1,299",
            color1 : "bg-black",
            color2 : "bg-gray-400",
            plus : "+3",
            wrongPrice : "1,799",
            off : "76"
        }, {
            id: 5,
            header: "EXTRA ₹100 OFF",
            imgSrc: twentyThree,
            playback: "120 Hours Playback",
            rating : 4.4,
            title : "boAt Energyshroom PB400",
            price : "1,599",
            color1 : "bg-gray-300",
            color2 : "bg-black",
            plus : "+1",
            wrongPrice : "2,199",
            off : "64"
        }, {
            id: 6,
            header: "EXTRA ₹100 OFF",
            imgSrc: twentyFour,
            playback: "60 Hours Playback",
            rating : 3.8,
            title : "boAt Rockerz 255 Pro+",
            price : "899",
            color1 : "bg-black",
            color2 : "bg-gray-300",
            plus : "+2",
            wrongPrice : "1,799",
            off : "70"
        },
      ]
    },
    {
      key: "Neckbands_And_Headphones",
      label: "Neckbands And Headphones",
      content: [
        {
            id: 1,
            header: "✍️ Engraving Available",
            imgSrc: twentyFive,
            playback: "35 Hours Playback",
            rating : 4.2,
            title : "boAt Pro Neckband",
            price : "2,199",
            color1 : "bg-black",
            color2 : "bg-gray-300",
            plus : "+2",
            wrongPrice : "3,899",
            off : "76"
        },
        {
            id: 2,
            header: "EXTRA ₹100 OFF",
            imgSrc: twentySix,
            playback: "40 Hours Playback",
            rating : 4.4,
            title : "boAt Headphones",
            price : "2,199",
            color1 : "bg-black",
            color2 : "bg-yellow-300",
            plus : "+2",
            wrongPrice : "4,499",
            off : "78"
        },
        {
            id: 3,
            header: "EXTRA ₹100 OFF",
            imgSrc: twentySeven,
            playback: "60 Hours Playback",
            rating : 4.2,
            title : "boAt Nexjbands HSV+",
            price : "2,599",
            color1 : "bg-green-300",
            color2 : "bg-sky-200",
            plus : "+4",
            wrongPrice : "4,899",
            off : "78"
        },
        {
            id: 4,
            header: "✍️ Engraving Available",
            imgSrc: twentyEight,
            playback: "boAt Headphones",
            rating : 4.9,
            title : "boAt Neckbands 99 Pro+",
            price : "1,899",
            color1 : "bg-black",
            color2 : "bg-gray-200",
            plus : "+4",
            wrongPrice : "2,899",
            off : "74"
        },
        {
            id: 5,
            header: "EXTRA ₹100 OFF",
            imgSrc: twentyNine,
            playback: "50 Hours Playback",
            rating : 4,
            title : "boAt Neckbands 888",
            price : "3,199",
            color1 : "bg-green-300",
            color2 : "bg-black",
            plus : "+2",
            wrongPrice : "5,499",
            off : "71"
        },
        {
            id: 6,
            header: "✍️ Engraving Available",
            imgSrc: TheerTeen,
            playback: "75 Hours Playback",
            rating : 4.4,
            title : "boAt 666v Pro+",
            price : "3,399",
            color1 : "bg-gray-200",
            color2 : "bg-black",
            plus : "+4",
            wrongPrice : "5,499",
            off : "62"
        },
      ]
    },
  ];
  
  return (
    <div className='mt-3'>
        <div className="flex w-full mx-auto max-w-[1600px]">
            <div className='flex flex-col w-full px-2 bm:px-1 mx-auto'>
                {/* header */}
                <div className='w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] flex justify-between mx-auto items-center'>                
                    <div>
                        <h1 className='text-[1.5rem] font-metropolis cursor-pointer'><span className='font-medium'>Big Sale</span> <span className='font-bold'>Big Savin<span className='decoration-[0.15rem] underline decoration-red-500'>gs</span></span></h1>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 text-[0.9rem] text-[#264978] font-extrabold'>View All <FiArrowRightCircle size={18}/></button>
                    </div>
                </div>

                {/* 5 Option to select */}
                <div className='pl-0 bw:pl-4 md:pl-2 w-full overflow-x-auto sm:overflow-x-hidden mx-auto scrollbar-hide'>
                    <div className='flex gap-3 sm:gap-6 my-3 sm:my-2 items-center w-max sm:w-[95%] mx-auto whitespace-nowrap'>
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
                <div className='w-full bw:w-[92%] bm:w-[94%] xl:w-[95%] md:pr-4 bm:pr-0 xl:pr-6 mt-2 gap-2 rounded-md mx-auto grid grid-cols-2 base:grid-cols-3 bm:grid-cols-6 cursor-pointer'> {/* apply grid hear */}
                    {sections.find((section) => section.key === changeImageSection).content.map((ele,id)=> (
                         <div key={id}>
                            <div>
                                    {/* img */}
                                    <div className='aspect-square relative'>
                                        <span className='flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'><span></span>{ele.header}</span>
                                        <img src={ele.imgSrc} alt='img' className='rounded-lg relative z-30 object-cover w-full h-full' />
                                        <div className='rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-8 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold mb-[-4px]'>
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
                                        <div className='flex h-10 bm:h-14 items-start pt-1 bm:pt-1 bm:items-center w-[92%] mx-auto border-dotted border-b-2 border-b-gray-300'>
                                            <h1 className='text-xs bm:text-[0.9375rem] font-bold font-metropolis'>{ele.title}</h1>
                                        </div>
            
                                        {/* 899 */}
                                        <div className='pb-1'>
                                            {/* $899 and +3 */}
                                            <div className='flex justify-between px-2 items-center'>
                                                <div className='flex items-center'>
                                                    {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                                    <h1 className='flex items-center font-semibold font-metropolis text-[0.875rem] bm:text-[1.1875rem] pt-0 bm:pt-1'>₹{ele.price}</h1>
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

export default RepublicDeals;