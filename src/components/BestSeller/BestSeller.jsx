import React from "react";
import video1 from "../../assets/Video/first.mp4";
import video2 from "../../assets/Video/second.mp4";
import video3 from "../../assets/Video/third.mp4";
import video4 from "../../assets/Video/fourth.mp4";
import video5 from "../../assets/Video/fifth.mp4";

const Bestsellers = () => {
  const videoRefs = new Map();

  const handleMouseEnter = (id) => {
    const video = videoRefs.get(id);
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (id) => {
    const video = videoRefs.get(id);
    if (video) {
      video.pause();
    }
  };

  return (
    <div className="mt-6">
      <div className="flex w-full max-w-[1600px] mx-auto">      
        <div className="flex flex-col w-full px-2 bm:px-1 mx-auto">
              {/* header */}
              <div className="flex w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] justify-between mx-auto items-center mb-[1.7rem]">
                <div>
                  <h1 className="text-[1.5rem] font-metropolis">
                    <span className="font-medium">Explore </span>{" "}
                    <span className="font-bold">Bestselle<span className="decoration-[0.15rem] underline decoration-red-500">rs</span></span>
                  </h1>
                </div>
                <div>
                  <h1 className="flex items-center gap-2 text-[0.9rem] text-[#264978] font-extrabold">
                    
                  </h1>
                </div>
              </div>

              {/* Horizontal Scroll Container */}
              <div className='w-full mx-auto'>
                <div className="scroll-container w-[98%] bw:w-[92%] bm:w-[94%] xl:w-[95%] flex mx-auto gap-2 overflow-x-auto px-2">
                  {[
                    { id: 1, title: "Smartwatches", videoSrc: video1 },
                    { id: 2, title: "Wireless Earbuds", videoSrc: video2 },
                    { id: 3, title: "Neckbands", videoSrc: video3 },
                    { id: 4, title: "Headphones", videoSrc: video4 },
                    { id: 5, title: "Wireless Speakers", videoSrc: video5 }
                  ].map((item) => (
                    <div key={item.id}>
                      <div
                        className="w-80 h-80 overflow-hidden rounded-xl cursor-pointer flex-shrink-0"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={() => handleMouseLeave(item.id)}
                      >
                        <video
                          ref={(ref) => videoRefs.set(item.id, ref)}
                          src={item.videoSrc}
                          className="inset-0 w-full h-full object-cover"
                          muted
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h3 className="text-base font-metropolis font-semibold">{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;