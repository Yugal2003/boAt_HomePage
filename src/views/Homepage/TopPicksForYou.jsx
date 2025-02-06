import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import first from "../../assets/TopPicksForYou/NewLaunches/first.webp";
import second from "../../assets/TopPicksForYou/NewLaunches/second.webp";
import third from "../../assets/TopPicksForYou/NewLaunches/third.webp";
import fourth from "../../assets/TopPicksForYou/NewLaunches/fourth.webp";
import fifth from "../../assets/TopPicksForYou/NewLaunches/fifth.webp";
import six from "../../assets/TopPicksForYou/NewLaunches/six.webp";

import seven from "../../assets/TopPicksForYou/Personalisation/first_1.webp";
import eight from "../../assets/TopPicksForYou/Personalisation/second.webp";
import nine from "../../assets/TopPicksForYou/Personalisation/third.webp";
import ten from "../../assets/TopPicksForYou/Personalisation/fourth_4.webp";
import elevan from "../../assets/TopPicksForYou/Personalisation/fifth_5.webp";
import twelve from "../../assets/TopPicksForYou/Personalisation/six_6.webp";

import star from "../../assets/SellisLive/star.webp";
import percentage from "../../assets/percentage.avif";

const TopPicksForYou = () => {
  const [changeImageSection, setChangeImageSection] = useState("New_Launches");
  console.log(changeImageSection);

  const sections = [
    {
      key: "New_Launches",
      label: "New Launches",
      content: [
        {
          id: 1,
          header: "EXTRA ₹100 OFF",
          imgSrc: first,
          playback: "35 Hours Playback",
          rating: 4.8,
          title: "boAt Airdopes Alpha",
          price: "999",
          color1: "bg-black",
          color2: "bg-gray-500",
          plus: "+1",
          wrongPrice: "1,799",
          off: "71",
        },
        {
          id: 2,
          header: "✍️ Engraving Available",
          imgSrc: second,
          playback: "20000mAh Power Bank",
          rating: 4.2,
          title: "boAt Energyshroom PB400",
          price: "1,699",
          color1: "bg-black",
          color2: "bg-blue-900",
          plus: "+2",
          wrongPrice: "4,499",
          off: "62",
        },
        {
          id: 3,
          header: "EXTRA ₹100 OFF",
          imgSrc: third,
          playback: "12 Hours Playback",
          rating: 4.9,
          title: "boAt Stone 350 Pro",
          price: "1,499",
          color1: "bg-black",
          color2: "bg-gray-300",
          plus: "+2",
          wrongPrice: "2,999",
          off: "61",
        },
        {
          id: 4,
          header: "🎉 New Launch",
          imgSrc: fourth,
          playback: "100 Hours Playback",
          rating: 4.6,
          title: "boAt Airdopes 181 Pro",
          price: "1,199",
          color1: "bg-gray-300",
          color2: "bg-sky-300",
          plus: "+2",
          wrongPrice: "1,999",
          off: "76",
        },
        {
          id: 5,
          header: "🎉 New Launch",
          imgSrc: fifth,
          playback: "Noise Cancellation",
          rating: 4.7,
          title: "boAt Airdopes 141 ANC",
          price: "1,399",
          color1: "bg-black",
          color2: "bg-gray-500",
          plus: "+1",
          wrongPrice: "2,099",
          off: "72",
        },
        {
          id: 6,
          header: "🚀 Bestseller",
          imgSrc: six,
          playback: "60 Hours Playback",
          rating: 4.4,
          title: "boAt Rockerz 255 Pro+",
          price: "1,299",
          color1: "bg-black",
          color2: "bg-blue-900",
          plus: "+3",
          wrongPrice: "2,299",
          off: "71",
        },
      ],
    },
    {
      key: "Personalisation",
      label: "Personalisation",
      content: [
        {
          id: 1,
          header: "EXTRA ₹100 OFF",
          imgSrc: seven,
          playback: "60 Hours Playback",
          rating: 4.9,
          title: "boAt Airdopes Alpha",
          price: "1,599",
          color1: "bg-black",
          color2: "bg-gray-500",
          plus: "+1",
          wrongPrice: "2,299",
          off: "71",
        },
        {
          id: 2,
          header: "✍️ Engraving Available",
          imgSrc: eight,
          playback: "",
          rating: 4.4,
          title: "boAt Energyshroom PB400",
          price: "2,199",
          color1: "bg-black",
          color2: "bg-blue-900",
          plus: "+2",
          wrongPrice: "3,199",
          off: "62",
        },
        {
          id: 3,
          header: "EXTRA ₹100 OFF",
          imgSrc: nine,
          playback: "12 Hours Playback",
          rating: 4.9,
          title: "boAt Stone 350 Pro",
          price: "2,399",
          color1: "bg-black",
          color2: "bg-blue-900",
          plus: "+1",
          wrongPrice: "3,799",
          off: "66",
        },
        {
          id: 4,
          header: "🎉 New Launch",
          imgSrc: ten,
          playback: "100 Hours Playback",
          rating: 4.6,
          title: "Airdopes 181 Pro",
          price: "1,299",
          color1: "bg-gray-300",
          color2: "bg-sky-300",
          plus: "+2",
          wrongPrice: "2,000",
          off: "76",
        },
        {
          id: 5,
          header: "🎉 New Launch",
          imgSrc: elevan,
          playback: "Noise Cancellation",
          rating: 4.7,
          title: "boAt Airdopes 141 ANC",
          price: "2,199",
          color1: "bg-black",
          color2: "bg-gray-500",
          plus: "+1",
          wrongPrice: "4,200",
          off: "72",
        },
        {
          id: 6,
          header: "🚀 Bestseller",
          imgSrc: twelve,
          playback: "60 Hours Playback",
          rating: 4.4,
          title: "boAt Rockerz 255 Pro+",
          price: "1,499",
          color1: "bg-black",
          color2: "bg-blue-900",
          plus: "+3",
          wrongPrice: "3,299",
          off: "71",
        },
      ],
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col w-full px-2 bm:px-1 mx-auto">
          {/* header */}
          <div className="flex w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] justify-between mx-auto items-center">
            <div>
              <h1 className="text-[1.5rem] font-metropolis cursor-pointer">
                <span className="font-medium">Top Picks</span>{" "}
                <span className="font-bold">
                  For Y
                  <span className="decoration-[0.15rem] underline decoration-red-500">
                    ou
                  </span>
                </span>
              </h1>
            </div>
            <div>
              <button className="flex items-center gap-2 text-[0.9rem] text-[#264978] font-extrabold">
                View All <FiArrowRightCircle size={18} />
              </button>
            </div>
          </div>

          {/* 5 Option to select */}
          <div className="w-full">
            <div className="flex gap-6 my-2 items-center w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] mx-auto">
              {sections.map((section) => (
                <div
                  key={section.key}
                  className={`${
                    section.key === changeImageSection
                      ? "bg-[#eeeeef]"
                      : "white"
                  } ${
                    section.key === changeImageSection
                      ? "font-bold"
                      : "font-normal"
                  } ${
                    section.key === changeImageSection
                      ? "text-black"
                      : "text-gray-500"
                  } py-0.5 rounded-full`}
                >
                  <button
                    className={`${
                      section.key === changeImageSection ? "px-4" : "px-0"
                    } px-2 text-[0.75rem] bm:text-[1rem] font-metropolis`}
                    onClick={() => setChangeImageSection(section.key)}
                  >
                    {section.label}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* text with img */}
          <div className="cursor-pointer w-[98%] bw:w-[92%] md:w-[98%] bm:w-[94%] xl:w-[95%] mt-2 gap-2 rounded-md mx-auto grid grid-cols-2 base:grid-cols-3 bm:grid-cols-6">
            {sections
              .find((section) => section.key === changeImageSection)
              .content.map((ele, id) => (
                <div key={id}>
                  <div>
                    {/* img */}
                    <div className="aspect-square relative">
                      <span className="flex items-center gap-1 z-40 absolute bg-black text-white pl-1 pr-2 rounded-sm pb-0.5 font-semibold text-[0.5rem] bm:text-[0.625rem] rounded-tl-lg">
                        {ele.header}
                      </span>
                      <img
                        src={ele.imgSrc}
                        alt="img"
                        className="rounded-lg relative z-30 object-cover w-full h-full"
                      />
                      <div className="rounded-b-lg z-40 absolute bottom-0 left-0 flex justify-between items-center font-metropolis w-full px-2 h-5 bm:h-7 bg-[#fcc50b] text-[0.5rem] bm:text-[0.625rem] font-bold mb-[-4px]">
                        <div>
                          <h1>{ele.playback}</h1>
                        </div>
                        <div className="bg-white flex items-center gap-0.5 px-0.5 bm:px-2 rounded-sm">
                          <img src={star} alt="star" width={15} />
                          <h1 className="font-normal pt-0.5">{ele.rating}</h1>
                        </div>
                      </div>
                    </div>

                    {/* text */}
                    <div className="bg-[#fafafa] rounded-b-lg border border-gray-200 flex flex-col">
                      {/* boat airdrops 161 */}
                      <div className="flex h-10 bm:h-12 items-start pt-1 bm:pt-0 bm:items-center w-[92%] mx-auto border-dotted border-b-2 border-b-gray-300">
                        <h1 className="text-[0.75rem] bm:text-[0.9375rem] font-bold font-metropolis">
                          {ele.title}
                        </h1>
                      </div>

                      {/* 899 */}
                      <div className="pb-1">
                        {/* $899 and +3 */}
                        <div className="flex justify-between px-2 items-center">
                          <div className="flex items-center">
                            {/* <LiaRupeeSignSolid size={18} className='font-extrabold'/> */}
                            <h1 className="flex items-center font-semibold font-metropolis text-[0.875rem] bm:text-[1.1875rem]">
                              ₹{ele.price}
                            </h1>
                          </div>
                          <div className="relative flex items-center">
                            <div className={`absolute left-0 z-10 ${ele.color1} w-3 h-3 bm:w-4 bm:h-4 rounded-full`}></div>
                            <div className={`absolute left-2 z-20 ${ele.color2} w-3 h-3 bm:w-4 bm:h-4 rounded-full`}></div>
                            <span className="ml-6 text-gray-500 text-[0.625rem] bm:text-[0.875rem] font-semibold">
                              {ele.plus}
                            </span>
                          </div>
                        </div>
                        {/* 64% off */}
                        <div className="px-2 flex items-center gap-2">
                          <h1 className="line-through text-[0.625rem] text-gray-400 font-semibold font-metropolis">
                            ₹{ele.wrongPrice}
                          </h1>
                          <h2 className="text-[0.625rem] text-[#0e946a] font-bold">
                            {ele.off}% off
                          </h2>
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
  );
};

export default TopPicksForYou;
