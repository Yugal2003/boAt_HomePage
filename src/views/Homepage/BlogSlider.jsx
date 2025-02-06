import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

import first from "../../assets/Blogs/Popular/first.webp";
import second from "../../assets/Blogs/Popular/second.webp";
import third from "../../assets/Blogs/Popular/third.webp";
import fourth from "../../assets/Blogs/Popular/fourth.webp";
import fifth from "../../assets/Blogs/Latest/first.webp";
import six from "../../assets/Blogs/Latest/second.webp";
import seven from "../../assets/Blogs/Latest/third.webp";
import eight from "../../assets/Blogs/Latest/fourth.webp";
import { company } from "../../constant/contant";

const Blogs = () => {
  const [changeImageSection, setChangeImageSection] = useState("Popular");
  console.log(changeImageSection);

  const sections = [
    {
      key: "Popular",
      label: "Popular",
      content: (
        <div className="lg:grid lg:grid-cols-4 gap-6 lg:gap-3 flex overflow-x-auto scrollbar-hide whitespace-nowrap">
          {/* first */}
          <div className="flex-shrink-0 w-72 lg:w-auto">
            <div>
              {/* img */}
              <div className="relative overflow-hidden">
                <img
                  src={first}
                  alt="img"
                  className="cursor-pointer rounded-t-lg relative z-40 object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="bg-[#FAFAFA] rounded-b-lg border border-gray-200 flex flex-col pb-3">
                {/* date */}
                <div className="flex h-8 px-3 items-end">
                  <h1 className="text-gray-600 text-[12px] lg:text-[14px] font-medium font-metropolis">
                    21 Mar, 2024
                  </h1>
                </div>

                <div className="pb-1">
                  {/* Gaming earbuds text */}
                    <div className="flex px-3 items-center pt-0.5 w-full">
                        <h1
                        className="text-[18px] font-semibold font-metropolis w-full cursor-pointer"
                        style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                            width: "100%",
                            textOverflow: "ellipsis",
                            whiteSpace: "normal",
                        }}
                        >
                        Gaming Earbuds for Travel: Compact and Portable Gaming Solutions
                        </h1>
                    </div>
                    {/* Description */}
                    <div className="px-3 flex items-center pt-0.5">
                        <h1
                        className="text-[13px] lg:text-[15px] text-gray-600 font-normal font-metropolis overflow-hidden"
                        style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2, 
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "normal",
                        }}
                        >
                        When nothing can stop a gamer from entering the arena, we
                        have got gaming earbuds so they can enter the arena while
                        they travel.
                        </h1>
                    </div>
                </div>

                <div className="px-3">
                    <button className="text-[12px] font-metropolis rounded-full flex py-3 justify-center bg-white items-center font-semibold w-full border border-gray-300">Read More <FiArrowRightCircle className="text-[#1a2024]" size={15}/></button>
                </div>
              </div>
            </div>
          </div>

          {/* second */}
          <div className="flex-shrink-0 w-72 lg:w-auto">
            <div>
              {/* img */}
              <div className="relative overflow-hidden">
                <img
                  src={second}
                  alt="img"
                  className="cursor-pointer rounded-t-lg relative z-40 object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="bg-[#FAFAFA] rounded-b-lg border border-gray-200 flex flex-col pb-3">
                {/* date */}
                <div className="flex h-8 px-3 items-end">
                  <h1 className="text-gray-600 text-[12px] lg:text-[14px] font-medium font-metropolis">
                    08 Mar, 2024
                  </h1>
                </div>

                <div className="pb-1">
                  {/* Gaming earbuds text */}
                    <div className="flex px-3 items-center pt-0.5 w-full cursor-pointer">
                        <h1
                        className="text-[18px] font-semibold font-metropolis w-full"
                        style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                            width: "100%",
                            textOverflow: "ellipsis",
                            whiteSpace: "normal",
                        }}
                        >
                        How To Create Watch Faces Using The Watch Face Studio
                        </h1>
                    </div>
                    {/* Description */}
                    <div className="px-3 flex items-center pt-0.5">
                        <h1
                        className="text-[13px] lg:text-[15px] text-gray-600 font-normal font-metropolis overflow-hidden"
                        style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2, 
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "normal",
                        }}
                        >
                        Why Stick to a few watch faces on your smartwatch when you can many. Check out our explainer video on how to customise your watch face.
                        </h1>
                    </div>
                </div>

                <div className="px-3">
                    <button className="text-[12px] font-metropolis rounded-full flex py-3 justify-center bg-white items-center font-semibold w-full border border-gray-300">Read More <FiArrowRightCircle className="text-[#1a2024]" size={15}/></button>
                </div>
              </div>
            </div>
          </div>

          {/* third */}
          <div className="flex-shrink-0 w-72 lg:w-auto">
            <div>
              {/* img */}
              <div className="relative overflow-hidden">
                <img
                  src={third}
                  alt="img"
                  className="cursor-pointer rounded-t-lg relative z-40 object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="bg-[#FAFAFA] rounded-b-lg border border-gray-200 flex flex-col pb-3">
                {/* date */}
                <div className="flex h-8 px-3 items-end">
                  <h1 className="text-gray-600 text-[12px] lg:text-[14px] font-medium font-metropolis">
                    13 Mar, 2024
                  </h1>
                </div>

                <div className="pb-1">
                  {/* Gaming earbuds text */}
                    <div className="flex px-3 items-center pt-0.5 w-full">
                        <h1
                        className="text-[18px] font-semibold font-metropolis w-full cursor-pointer"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          width: "100%",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        ANC for Work: How Noise-Cancelling Headphones Can Boost Productivity
                        </h1>
                    </div>
                    {/* Description */}
                    <div className="px-3 flex items-center pt-0.5">
                        <h1
                        className="text-[13px] lg:text-[15px] text-gray-600 font-normal font-metropolis overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, 
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        Noise at the workplace can become annoying sometimes. Don't worry, we have a we have a one stop shop to help you concentrate on your works
                        </h1>
                    </div>
                </div>

                <div className="px-3">
                    <button className="text-[12px] font-metropolis rounded-full flex py-3 justify-center bg-white items-center font-semibold w-full border border-gray-300">Read More <FiArrowRightCircle className="text-[#1a2024]" size={15}/></button>
                </div>
              </div>
            </div>
          </div>

          {/* fourth */}
          <div className="flex-shrink-0 w-72 lg:w-auto">
            <div>
              {/* img */}
              <div className="relative overflow-hidden">
                <img
                  src={fourth}
                  alt="img"
                  className="cursor-pointer rounded-t-lg relative z-40 object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="bg-[#FAFAFA] rounded-b-lg border border-gray-200 flex flex-col pb-3">
                {/* date */}
                <div className="flex h-8 px-3 items-end">
                  <h1 className="text-gray-600 text-[12px] lg:text-[14px] font-medium font-metropolis">
                    07 Jan, 2025
                  </h1>
                </div>

                <div className="pb-1">
                  {/* Gaming earbuds text */}
                    <div className="flex px-3 items-center pt-0.5 w-full">
                        <h1
                        className="text-[18px] font-semibold font-metropolis w-full cursor-pointer"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          width: "100%",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",

                        }}
                        >
                        Top 5 Benefits of Having a Dolby Soundbar in Your Home
                        </h1>
                    </div>
                    {/* Description */}
                    <div className="px-3 flex items-center pt-0.5">
                        <h1
                        className="text-[13px] lg:text-[15px] text-gray-600 font-normal font-metropolis overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, 
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        The article states the top 5 benefits of having a Dolby Soundbar in your Home.
                        </h1>
                    </div>
                </div>

                <div className="px-3">
                    <button className="text-[12px] font-metropolis rounded-full flex py-3 justify-center bg-white items-center font-semibold w-full border border-gray-300">Read More <FiArrowRightCircle className="text-[#1a2024]" size={15}/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "Latest",
      label: "Latest",
      content: (
        <div className="lg:grid lg:grid-cols-4 gap-6 lg:gap-3 flex overflow-x-auto whitespace-nowrap">
          {/* first */}
          <div className="flex-shrink-0 w-72 lg:w-auto"> 
            <div>
              {/* img */}
              <div className="relative overflow-hidden">
                <img
                  src={fifth}
                  alt="img"
                  className="cursor-pointer rounded-t-lg relative z-40 object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="bg-[#FAFAFA] rounded-b-lg border border-gray-200 flex flex-col pb-3">
                {/* date */}
                <div className="flex h-8 px-3 items-end">
                  <h1 className="text-gray-600 text-[12px] lg:text-[14px] font-medium font-metropolis">
                  15 Feb, 2023
                  </h1>
                </div>

                <div className="pb-1">
                  {/* Gaming earbuds text */}
                    <div className="flex px-3 items-center pt-0.5 w-full">
                        <h1
                        className="text-[18px] font-semibold font-metropolis w-full cursor-pointer"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          width: "100%",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        Social Welfare Initiatives 2022 - A Look Back
                        </h1>
                    </div>
                    {/* Description */}
                    <div className="px-3 flex items-center pt-0.5">
                        <h1
                        className="text-[13px] lg:text-[15px] text-gray-600 font-normal font-metropolis overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, 
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        When people show trust in you and your company, you should always find a way to give it back to the society. Here is a round-up of all the things {company.name} has done for the community & will continue to do. Take a look!
                        </h1>
                    </div>
                </div>

                <div className="px-3">
                    <button className="text-[12px] font-metropolis rounded-full flex py-3 justify-center bg-white items-center font-semibold w-full border border-gray-300">Read More <FiArrowRightCircle className="text-[#1a2024]" size={15}/></button>
                </div>
              </div>
            </div>
          </div>

          {/* second */}
          <div className="flex-shrink-0 w-72 lg:w-auto">
            <div>
              {/* img */}
              <div className="relative overflow-hidden">
                <img
                  src={six}
                  alt="img"
                  className="cursor-pointer rounded-t-lg relative z-40 object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="bg-[#FAFAFA] rounded-b-lg border border-gray-200 flex flex-col pb-3">
                {/* date */}
                <div className="flex h-8 px-3 items-end">
                  <h1 className="text-gray-600 text-[12px] lg:text-[14px] font-medium font-metropolis">
                  30 Sep,2022
                  </h1>
                </div>

                <div className="pb-1">
                  {/* Gaming earbuds text */}
                    <div className="flex px-3 items-center pt-0.5 w-full">
                        <h1
                        className="text-[18px] font-semibold font-metropolis w-full cursor-pointer"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          width: "100%",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        Imagine Marketing India Ranked Amongst The Top 5 Wearable Companies Globally. Yet Again A Proud Moment For India
                        </h1>
                    </div>
                    {/* Description */}
                    <div className="px-3 flex items-center pt-0.5">
                        <h1
                        className="text-[13px] lg:text-[15px] text-gray-600 font-normal font-metropolis overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, 
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        Imagine Marketing India, the parent company of audio & wearable brand {company.name}, has ranked among the top 5 global wearable companies this quarter. Find out what's next for {company.name}.
                        </h1>
                    </div>
                </div>

                <div className="px-3">
                    <button className="text-[12px] font-metropolis rounded-full flex py-3 justify-center bg-white items-center font-semibold w-full border border-gray-300">Read More <FiArrowRightCircle className="text-[#1a2024]" size={15}/></button>
                </div>
              </div>
            </div>
          </div>

          {/* third */}
          <div className="flex-shrink-0 w-72 lg:w-auto">
            <div>
              {/* img */}
              <div className="relative overflow-hidden">
                <img
                  src={seven}
                  alt="img"
                  className="cursor-pointer rounded-t-lg relative z-40 object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="bg-[#FAFAFA] rounded-b-lg border border-gray-200 flex flex-col pb-3">
                {/* date */}
                <div className="flex h-8 px-3 items-end">
                  <h1 className="text-gray-600 text-[12px] lg:text-[14px] font-medium font-metropolis">
                  07 Nov, 2022
                  </h1>
                </div>

                <div className="pb-1">
                  {/* Gaming earbuds text */}
                    <div className="flex px-3 items-center pt-0.5 w-full">
                        <h1
                        className="text-[18px] font-semibold font-metropolis w-full cursor-pointer"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          width: "100%",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        Scaling Up With New Conviction: {company.name} Raises INR 500 Crore From Warburg and Malabar; IPO Plans ‘Only a Matter of When, Not If’
                        </h1>
                    </div>
                    {/* Description */}
                    <div className="px-3 flex items-center pt-0.5">
                        <h1
                        className="text-[13px] lg:text-[15px] text-gray-600 font-normal font-metropolis overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, 
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        {company.name} Lifestyle secures a raising of INR 500 crore ($60 million) from current investor, Warburg Pincus, and a new investor, Malabar Investments. Learn more about the future of {company.name} Lifestyle as they reach new heights and explore new opportunities.
                        </h1>
                    </div>
                </div>

                <div className="px-3">
                    <button className="text-[12px] font-metropolis rounded-full flex py-3 justify-center bg-white items-center font-semibold w-full border border-gray-300">Read More <FiArrowRightCircle className="text-[#1a2024]" size={15}/></button>
                </div>
              </div>
            </div>
          </div>

          {/* fourth */}
          <div className="flex-shrink-0 w-72 lg:w-auto">
            <div>
              {/* img */}
              <div className="relative overflow-hidden">
                <img
                  src={eight}
                  alt="img"
                  className="cursor-pointer rounded-t-lg relative z-40 object-cover w-full h-full"
                />
              </div>

              {/* text */}
              <div className="bg-[#FAFAFA] rounded-b-lg border border-gray-200 flex flex-col pb-3">
                {/* date */}
                <div className="flex h-8 px-3 items-end">
                  <h1 className="text-gray-600 text-[12px] lg:text-[14px] font-medium font-metropolis">
                  30 Mar, 2023
                  </h1>
                </div>

                <div className="pb-1">
                  {/* Gaming earbuds text */}
                    <div className="flex px-3 items-center pt-0.5 w-full">
                        <h1
                        className="text-[18px] font-semibold font-metropolis w-full cursor-pointer"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          width: "100%",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        {company.name} Enters Premium Segment with the Launch of Lunar Series Smartwatches
                        </h1>
                    </div>
                    {/* Description */}
                    <div className="px-3 flex items-center pt-0.5">
                        <h1
                        className="text-[13px] lg:text-[15px] text-gray-600 font-normal font-metropolis overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, 
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                        >
                        </h1>
                    </div>
                </div>

                <div className="px-3">
                    <button className="text-[12px] font-metropolis rounded-full flex py-3 justify-center bg-white items-center font-semibold w-full border border-gray-300">Read More <FiArrowRightCircle className="text-[#1a2024]" size={15}/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex w-full max-w-[1600px] mx-auto">      
        <div className="flex flex-col w-full px-0 bm:px-3 3xl:px-1 mx-auto">
          {/* header */}
          <div className="flex w-[100%] md:w-[80%] bm:w-[95%] justify-between mx-auto items-center">
            <div>
              <h1 className="cursor-pointer text-[1.5rem] font-metropolis">
                <span className="font-medium"></span>{" "}
                <span className="font-semibold">
                  Blog
                  <span className="decoration-[0.15rem] underline decoration-red-500">
                    s
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
            <div className="flex gap-6 my-2 items-center w-[100%] md:w-[80%] bm:w-[95%] mx-auto">
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
                  } py-1 rounded-full`}
                >
                  <button
                    className={`${
                      section.key === changeImageSection ? "px-4" : "px-0"
                    } px-2 text-[12px] ${
                        section.key === changeImageSection ? "lg:text-[1rem]" : "lg:text-[13px]"
                      } font-metropolis font-semibold`}
                    onClick={() => setChangeImageSection(section.key)}
                  >
                    {section.label}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* text with img */}
          {/* after bm(1024px) show */}
          <div className="hidden lg:flex w-[100%] md:w-[80%] bm:w-[95%] pr-0 xl:pr-2 mt-2 gap-2 xl:gap-4 rounded-md mx-auto">
            {" "}
            {/* apply grid hear */}
            {
              sections.find((section) => section.key === changeImageSection)
                ?.content
            }
          </div>

          {/* text with img */}
          {/* below bm(1024px) show */}
          <div className="block lg:hidden w-full mx-auto mt-4">
            <div className="w-[100%] md:w-[80%] bm:w-[95%] flex mx-auto gap-6 px-0.5">
              {
                sections.find((section) => section.key === changeImageSection)
                  ?.content
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;