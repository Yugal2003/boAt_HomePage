import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import first from '../../assets/SellisLive/first.webp';
import second from '../../assets/SellisLive/first_1.webp';
import third from '../../assets/SellisLive/third_3.webp';
import fourth from '../../assets/SellisLive/fourth_4.webp';
import fifth from '../../assets/SellisLive/fifth.webp';
import six from '../../assets/SellisLive/six_6.webp';
import star from '../../assets/SellisLive/star.webp'

const SaleLive = () => {

    const sections = [
        {
          id: 1,
          header: "✍️ Engraving Available",
          imgSrc: first,
          playback: "120 Hours Playback",
          rating : 4.9,
          title : "boAt Stone 350",
          price : "1,799",
          color1 : "bg-black",
          color2 : "bg-blue-900",
          plus : "+1",
          wrongPrice : "7,990",
          off : "77"
        },
        {
            id: 2,
            header: "EXTRA ₹100 OFF",
            imgSrc: second,
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
        id: 3,
        header: "🚀 Bestseller",
        imgSrc: third,
        playback: "35 Hours Playback",
        rating : 4.9,
        title : "boAt Airdopes Alpha",
        price : "799",
        color1 : "bg-black",
        color2 : "bg-gray-500",
        plus : "+1",
        wrongPrice : "3,590",
        off : "77"
        },
        {
        id: 4,
        header: "🎉 New Launch",
        imgSrc: fourth,
        playback: "Dolby Audio",
        rating : 4.6,
        title : "boAt Airdopes 800",
        price : "1,499",
        color1 : "bg-black",
        color2 : "bg-gray-300",
        plus : "+2",
        wrongPrice : "6,490",
        off : "77"
        },
        {
        id: 5,
        header: "🎉 New Launch",
        imgSrc: fifth,
        playback: "100 Hours Playback",
        rating : 4.6,
        title : "boAt Airdopes 181 Pro",
        price : "1,199",
        color1 : "bg-gray-300",
        color2 : "bg-sky-300",
        plus : "+2",
        wrongPrice : "4,490",
        off : "76"
        },
        {
        id: 6,
        header: "✍️ Engraving Available",
        imgSrc: six,
        playback: "120 Hours Playback",
        rating : 5.0,
        title : "boAt Nirvana lon",
        price : "1,799",
        color1 : "bg-gray-200",
        color2 : "bg-black",
        plus : "",
        wrongPrice : "7,990",
        off : "77"
        },
      ];

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
                    {sections.map((ele, index) => (
                        <div key={index}>
                            {/* img */}
                            <div className='aspect-square relative'>
                                <span className='z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg'>{ele.header}</span>
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
                                <div className='flex h-10 bm:h-12 items-start pt-1 bm:pt-0 bm:items-center w-[92%] mx-auto border-dotted border-b-2 border-b-gray-300'> {/* style={{borderBottom : "1px dashed gray"}} */}
                                    <h1 className='text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis'>{ele.title}</h1>
                                </div>

                                {/* 899 */}
                                <div className='pb-1'>
                                    {/* $899 and +3 */}
                                    <div className='flex justify-between px-2 items-center py-1.5'>
                                        <div className='flex items-center'>
                                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                                            <h1 className='flex items-center font-bold text-sm bm:text-[1.1875rem]'>₹{ele.price}</h1>
                                        </div>
                                        <div className='relative flex items-center'>
                                            <div className={`absolute left-0 z-10 ${ele.color1} w-3 h-3 bm:w-4 bm:h-4 rounded-full`}></div>
                                            <div className={`absolute left-2 z-20 ${ele.color2} w-3 h-3 bm:w-4 bm:h-4 rounded-full`}></div>
                                            <span className='ml-6 text-gray-500 text-[0.625rem] bm:text-sm font-semibold'>{ele.plus}</span>
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
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaleLive;