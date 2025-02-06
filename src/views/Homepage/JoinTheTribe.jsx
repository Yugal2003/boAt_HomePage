import React, { useEffect, useRef, useState } from "react";
import video1 from "../../assets/JoinTheTribe/first.mp4";
import video2 from "../../assets/JoinTheTribe/second.mp4";
import video3 from "../../assets/JoinTheTribe/third.mp4";
import video4 from "../../assets/JoinTheTribe/fourth.mp4";
import video5 from "../../assets/JoinTheTribe/fifth.mp4";
import video6 from "../../assets/JoinTheTribe/six.mp4";
import video7 from "../../assets/JoinTheTribe/seven.mp4";
import video8 from "../../assets/JoinTheTribe/eight.mp4";
import video9 from "../../assets/JoinTheTribe/nine.mp4";
import video10 from "../../assets/JoinTheTribe/ten.mp4";
import video11 from "../../assets/JoinTheTribe/elevan.mp4";
import video12 from "../../assets/JoinTheTribe/twelve.mp4";
import video13 from "../../assets/JoinTheTribe/thirteen.mp4";
import video14 from "../../assets/JoinTheTribe/fourteen.mp4";
import video15 from "../../assets/JoinTheTribe/fifteen.mp4";
import video16 from "../../assets/JoinTheTribe/sixteen.mp4";
import video17 from "../../assets/JoinTheTribe/seventeen.mp4";
import video18 from "../../assets/JoinTheTribe/eighteen.mp4";
import video19 from "../../assets/JoinTheTribe/nineteen.mp4";
import video20 from "../../assets/JoinTheTribe/twenty.mp4";
import video21 from "../../assets/JoinTheTribe/twentyone.mp4";

import first from '../../assets/JoinTheTribe/first.avif';
import second from '../../assets/JoinTheTribe/second.avif';
import third from '../../assets/JoinTheTribe/third.avif';
import fourth from '../../assets/JoinTheTribe/fourth.avif';
import fifth from '../../assets/JoinTheTribe/fifth.avif';
import six from '../../assets/JoinTheTribe/six.avif';
import seven from '../../assets/JoinTheTribe/seven.avif';
import eight from '../../assets/JoinTheTribe/eight.avif';
import nine from '../../assets/JoinTheTribe/nine.avif';
import ten from '../../assets/JoinTheTribe/ten.avif';
import elevan from '../../assets/JoinTheTribe/elevan.avif';
import twelve from '../../assets/JoinTheTribe/twelve.avif';
import thirteen from '../../assets/JoinTheTribe/thirteen.avif';
import fourteen from '../../assets/JoinTheTribe/fourteen.avif';
import fifteen from '../../assets/JoinTheTribe/fifteen.avif';
import sixteen from '../../assets/JoinTheTribe/sixteen.avif';
import seventeen from '../../assets/JoinTheTribe/seventeen.avif';
import eighteen from '../../assets/JoinTheTribe/eighteen.avif';
import nineteen from '../../assets/JoinTheTribe/nineteen.avif';
import twenty from '../../assets/JoinTheTribe/twenty.avif';
import twentyone from '../../assets/JoinTheTribe/twentyone.avif';
import { company } from "../../constant/contant";

const videoSources = [
  { id: 1,name : `${company.name} Airdopes 71`,price : "999",wrongPrice : "3,990",percentage : 75,imageSrc : first,videoSrc: video1 },
  { id: 2,name : `${company.name} Airdopes 161 Pro`,price : "1,199",wrongPrice : "4,490",percentage : 73,imageSrc : second,videoSrc: video2 },
  { id: 3,name : `${company.name} Nirvana Ion ANC`,price : "2,199",wrongPrice : "9,990",percentage : 78,imageSrc : third,videoSrc: video3 },
  { id: 4,name : `${company.name} Rockerz 245 V2 Pro`,price : "1,499",wrongPrice : "3,490",percentage : 57,imageSrc : fourth,videoSrc: video4 },
  { id: 5,name : `${company.name} Airdopes 131`,price : "849",wrongPrice : "2,990",percentage : 72,imageSrc : fifth,videoSrc: video5 },
  { id: 6,name : `${company.name} Airdopes 100`,price : "1,099",wrongPrice : "3,490",percentage : 69,imageSrc : six,videoSrc: video6 },
  { id: 7,name : `${company.name} Wave Sigma`,price : "1,599",wrongPrice : "7,499",percentage : 79,imageSrc : seven,videoSrc: video7 },
  { id: 8,name : `${company.name} Wave Glory Pro`,price : "2,499",wrongPrice : "11,999",percentage : 79,imageSrc : eight,videoSrc: video8 },
  { id: 9,name : `${company.name} Primia Celestial`,price : "2,099",wrongPrice : "7,999",percentage : 74,imageSrc : nine,videoSrc: video9 },
  { id: 10,name : `${company.name} Airdopes 170`,price : "1,599",wrongPrice : "3,490",percentage : 54,imageSrc : ten,videoSrc: video10 },
  { id: 11,name : `${company.name} Katana Blade`,price : "2,299",wrongPrice : "3,999",percentage : 43,imageSrc : elevan,videoSrc: video11 },
  { id: 12,name : `${company.name} Airdopes Alpha`,price : "999",wrongPrice : "3,490",percentage : 71,imageSrc : twelve,videoSrc: video12 },
  { id: 13,name : `${company.name} Stone 350`,price : "1,499",wrongPrice : "3,490",percentage : 57,imageSrc : thirteen,videoSrc: video13 },
  { id: 14,name : `${company.name} Storm Call 2`,price : "1,399",wrongPrice : "6,999",percentage : 80,imageSrc : fourteen,videoSrc: video14 },
  { id: 15,name : `${company.name} Wave Elevate`,price : "1,899",wrongPrice : "6,499",percentage : 71,imageSrc : fifteen,videoSrc: video15 },
  { id: 16,name : `${company.name} Stone Ignite`,price : "6,999",wrongPrice : "21,990",percentage : 68,imageSrc : sixteen,videoSrc: video16 },
  { id: 17,name : `${company.name} Primia Celestial`,price : "2,099",wrongPrice : "7,999",percentage : 74,imageSrc : seventeen,videoSrc: video17 },
  { id: 18,name : `${company.name} AD 161 Hulk Edition`,price : "1,119",wrongPrice : "2,490",percentage : 55,imageSrc : eighteen,videoSrc: video18 },
  { id: 19,name : `${company.name} Airdopes 141 ANC`,price : "1,199",wrongPrice : "5,990",percentage : 80,imageSrc : nineteen,videoSrc: video19 },
  { id: 20,name : `${company.name} AD 161 Thor Edition`,price : "1,099",wrongPrice : "2,490",percentage : 56,imageSrc : twenty,videoSrc: video20 },
  { id: 21,name : `${company.name} Wave Astra`,price : "2,299",wrongPrice : "6,999",percentage : 67,imageSrc : twentyone,videoSrc: video21 }
];

const JoinTheTribe = () => {
  const videoRefs = useRef(new Map());
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = videoRefs.current.get(Number(entry.target.dataset.id));
        if (video) {
          if (entry.isIntersecting) {
            if (video.paused) video.play();
          } else {
            if (!video.paused) video.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    document.querySelectorAll(".video-item").forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="mt-6">
        <div className="flex w-full max-w-[1600px] mx-auto">    
          <div className="flex flex-col w-full px-2 bm:px-1 mx-auto">
            {/* Header */}
            <div className="flex w-[98%] bw:w-[93%] bm:w-[94%] xl:w-[95%] justify-between mx-auto items-center mb-[1.7rem]">
              <h1 className="cursor-pointer text-[1.5rem] font-metropolis">
                <span className="font-medium">Join </span>
                <span className="font-bold">
                  the Tri
                  <span className="decoration-[0.15rem] underline decoration-red-500">be</span>
                </span>
              </h1>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full mx-auto">
              <div 
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp} 
              ref={scrollRef} 
              className="scroll-container w-[90%] bw:w-[90%] md:w-[92%] bm:w-[95%] flex mx-auto gap-2 overflow-x-auto px-2">
                {videoSources.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-xl cursor-pointer">
                    <div className="w-[242px] h-[410px] overflow-hidden rounded-t-xl cursor-pointer flex-shrink-0">
                      <video
                        ref={(ref) => {
                          if (ref) videoRefs.current.set(item.id, ref);
                          else videoRefs.current.delete(item.id); 
                        }}
                        data-id={item.id}
                        src={item.videoSrc}
                        className="video-item inset-0 w-full h-full object-cover"
                        muted
                        loop 
                      />
                    </div>
                    {/* mini image */}
                    <div className="border border-gray-100 bg-white w-[50px] mx-24 h-[50px] mt-[-30px] relative">
                        <img src={item.imageSrc} alt="img" width={50} height={50}/>
                    </div>
                    {/* text and price and percentage section */}
                    <div className="flex flex-col justify-center items-center gap-4 mt-8 mb-2">
                        <div>
                          <h1 className="text-[14px] font-semibold">{item.name}</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-[17px] font-metropolis font-semibold">₹{item.price}</h1>
                            <h1 className="line-through text-[14px] text-gray-400 font-metropolis">₹{item.wrongPrice}</h1>
                            <h2 className="text-[14px] text-[#0e946a] font-metropolis">{item.percentage}% off</h2>
                        </div>
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

export default JoinTheTribe;