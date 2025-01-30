import React from "react";
import img from "../../assets/InThePress/Business_World_231x.avif";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const InThePress = () => {
  return (
    <div className="mt-10 lm:mt-10 pt-4 md:pt-0">
      <div className="flex w-full max-w-[1600px] mx-auto">      
        <div className="flex flex-col w-full px-2 bm:px-1 mx-auto">
          {/* header */}
          <div className="flex w-[92%] md:w-[82%] bm:w-[93%] lm:w-[95%] justify-between mx-auto items-center">
            <div>
              <h1 className="text-[1.5rem]">
                <span className="font-semibold">In the</span>{" "}
                <span className="font-bold">
                  Pre
                  <span className="decoration-[0.15rem] underline decoration-red-500">
                    ss
                  </span>
                </span>
              </h1>
            </div>
            <div>
              <button className="flex items-center gap-2 text-[0.9rem] text-[#264978] font-extrabold">
               
              </button>
            </div>
          </div>

          {/* text _ img */}
          {/* below 1100px screen */}
          <div className="w-[92%] md:w-[82%] bm:w-[93%] lm:w-[95%] bg-[#f7f9fa] mx-auto block lm:hidden mt-2">
              {/* comma + text */}
              <div className="flex flex-col items-center justify-center mx-auto text-center mt-8">
                <div>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57">
                      <g id="quote" transform="translate(0.352 -0.468)">
                        <rect id="Frame" width="58" height="57" transform="translate(-0.352 0.468)" fill="#1a2024" opacity="0"></rect>
                        <path id="Path_17515" data-name="Path 17515" d="M375.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,357,592.43v-11.87A3.562,3.562,0,0,1,360.561,577H372.43a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,375.616,596.744Z" transform="translate(-325.823 -564.814)" fill="#1a2024" opacity="0.4"></path>
                        <path id="Path_17516" data-name="Path 17516" d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z" transform="translate(-339.562 -564.814)" fill="#1a2024"></path>
                      </g>
                      </svg>
                    </p>
                </div>
                <div className="px-10">
                  <h1 className="text-[1.32rem] text-[#666666]">boAt is the first company from the consumer lifestyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP.</h1>
                </div>
              </div>

              {/* img */}
              <div className="flex items-center justify-center mx-auto mt-8">
                <img src={img} alt="img"/>
              </div>

              {/* btn > < */}
              <div className="flex items-center justify-evenly w-[50%] mx-auto mt-12 bm:mt-4 mb-4">
                  <button className="rounded-full bg-[#d0d9de] text-[#929292] p-1"><MdKeyboardArrowLeft size={24}/></button>
                  <button className="rounded-full bg-[#d0d9de] text-[#929292] p-1"><MdKeyboardArrowRight size={24}/></button>
              </div>
          </div>



          {/* text _ img */}
          {/* above 1100px screen */}
          <div className="hidden lm:flex bg-[#d0d9de] w-[92%] md:w-[85%] bm:w-[93%] lm:w-[95%] justify-between mx-auto items-center mt-4">
              {/* img */}
              <div className="lm:min-w-[38.5%] flex items-center justify-center">
                <img src={img} alt="img"/>
              </div>

              {/* text */}
              <div className="bg-[#f7f9fa] text-center flex flex-col items-center justify-center">
                  <div className="w-full flex justify-center items-center pt-6">
                      <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57">
                        <g id="quote" transform="translate(0.352 -0.468)">
                          <rect id="Frame" width="58" height="57" transform="translate(-0.352 0.468)" fill="#1a2024" opacity="0"></rect>
                          <path id="Path_17515" data-name="Path 17515" d="M375.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,357,592.43v-11.87A3.562,3.562,0,0,1,360.561,577H372.43a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,375.616,596.744Z" transform="translate(-325.823 -564.814)" fill="#1a2024" opacity="0.4"></path>
                          <path id="Path_17516" data-name="Path 17516" d="M365.616,596.744l-6.091,12.178a2.37,2.37,0,0,1-2.122,1.313h-6.108a1.187,1.187,0,0,1-1.061-1.719l6.262-12.525h-5.935A3.562,3.562,0,0,1,347,592.43v-11.87A3.562,3.562,0,0,1,350.561,577h11.87a3.562,3.562,0,0,1,3.561,3.561v14.59A3.571,3.571,0,0,1,365.616,596.744Z" transform="translate(-339.562 -564.814)" fill="#1a2024"></path>
                        </g>
                        </svg>
                      </p>
                  </div>
                  <div className="w-full px-[6.5rem]">
                      <h1 className="text-[20px] lm:text-[24px] text-[#666666]">
                        boAt is the first company from the consumer lifestyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP.
                      </h1>
                  </div>
                  <div className="mt-8 mb-6 flex gap-4">
                      <button className="rounded-full bg-[#d0d9de] text-[#929292] p-1"><MdKeyboardArrowLeft size={24}/></button>
                      <button className="rounded-full bg-[#d0d9de] text-[#929292] p-1"><MdKeyboardArrowRight size={24}/></button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InThePress;