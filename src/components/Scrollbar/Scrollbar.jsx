import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobileEMI from "../../assets/EMI/mobile.webp";
import desktopEMI from "../../assets/EMI/desktop.webp";

import img1 from "../../assets/ScrollbarImage/first_desktop.webp";
import img2 from "../../assets/ScrollbarImage/second_desktop.webp";
import img3 from "../../assets/ScrollbarImage/third_desktop.webp";
import img4 from "../../assets/ScrollbarImage/fourth_desktop.webp";
import img5 from "../../assets/ScrollbarImage/fifth_desktop.webp";
import img6 from "../../assets/ScrollbarImage/six_desktop.webp";
import img7 from "../../assets/ScrollbarImage/seven_desktop.webp";
import img8 from "../../assets/ScrollbarImage/first_mobile.webp";
import img9 from "../../assets/ScrollbarImage/second_mobile.webp";
import img10 from "../../assets/ScrollbarImage/third_mobile.webp";
import img11 from "../../assets/ScrollbarImage/fourth_mobile.webp";
import img12 from "../../assets/ScrollbarImage/fifth_mobile.webp";
import img13 from "../../assets/ScrollbarImage/six_mobile.webp";
import img14 from "../../assets/ScrollbarImage/seven_mobile.webp";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Scrollbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handlesize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handlesize);

    return () => window.removeEventListener("resize", handlesize);
  }, []);

  const desktopData = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
  ];
  const mobileData = [
    {
      image: img8,
    },
    {
      image: img9,
    },
    {
      image: img10,
    },
    {
      image: img11,
    },
    {
      image: img12,
    },
    {
      image: img13,
    },
    {
      image: img14,
    },
  ];

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <MdOutlineArrowBackIosNew
        className={`${
          windowWidth < 768
            ? "hidden"
            : "text-3xl lg:text-[24px] h-[40px] p-2 w-[40px] bg-black text-white rounded-full"
        }`}
      />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos
        className={`${
          windowWidth < 768
            ? "hidden"
            : "text-3xl lg:text-[24px] h-[40px] p-2 w-[40px] bg-black text-white rounded-full"
        }`}
      />
    </div>
  );

  const sliderSettings = {
    dots: windowWidth >= 768,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      {/* image slider content */}
      <div className="mt-20 md:mt-20 relative overflow-y-hidden">
        {windowWidth >= 768 ? (
          <>
            <Slider ref={sliderRef} {...sliderSettings}>
              {desktopData.map((slide, index) => (
                <div key={index} className="mt-0 w-full">
                  {" "}
                  {/*  aspect-[16/9] */}
                  <img
                    src={slide.image}
                    alt="images"
                    className="object-cover w-full h-fit"
                  />
                  <div
                    className="inset-0 
                            bg-gradient-to-t 
                            from-white 
                            via-white/50 to-transparent
                            "
                  ></div>
                </div>
              ))}
            </Slider>
          </>
        ) : (
          <Slider ref={sliderRef} {...sliderSettings}>
            {mobileData.map((slide, index) => (
              <div key={index} className="mt-0 w-full aspect-[16/9]">
                <img
                  src={slide.image}
                  alt="images"
                  className="object-cover w-full h-fit"
                />
                <div
                  className="inset-0 
                            bg-gradient-to-t 
                            from-white 
                            via-white/50 to-transparent
                            "
                ></div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* 0% EMI */}
      <div>
          {/* below 1000px */}
          <div className="flex bm:hidden mt-[-0.3rem]">
            <img src={mobileEMI} alt="img_mobile" className="w-full" />
          </div>

          {/* above 1000px */}
          <div className="hidden bm:block mt-[-0.3rem]">
            <img src={desktopEMI} alt="img_desktop" className="w-full" />
          </div>
      </div>




      {/* 1 year warranty */}
      <div>
        {/* below 768px */}
        <div className="flex md:hidden">
          <div className="flex w-[84%] h-full items-center justify-between mx-auto">

            {/* first */}
            <div className="flex flex-col items-center max-h-[58px] max-w-[25%]">
              <div className="flex items-center">
                <p>
                  <svg
                    className="h-[58px] w-[58px]"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_113429"
                          data-name="Rectangle 113429"
                          width="40.481"
                          height="50.987"
                          fill="#d0d9de"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_334305"
                      data-name="Group 334305"
                      transform="translate(7800 -29)"
                    >
                      <rect
                        id="Rectangle_114333"
                        data-name="Rectangle 114333"
                        width="72"
                        height="72"
                        transform="translate(-7800 29)"
                        fill="#fff"
                        opacity="0"
                      />
                      <g
                        id="Group_334298"
                        data-name="Group 334298"
                        transform="translate(-7712.736 -337.438)"
                      >
                        <circle
                          id="Ellipse_16268"
                          data-name="Ellipse 16268"
                          cx="12.842"
                          cy="12.842"
                          r="12.842"
                          transform="translate(-64.107 390.089)"
                          fill="#1a2024"
                        />
                        <g
                          id="Group_332139"
                          data-name="Group 332139"
                          transform="translate(-71.505 377.438)"
                        >
                          <g
                            id="Group_332138"
                            data-name="Group 332138"
                            transform="translate(0 0)"
                            clip-path="url(#clip-path)"
                          >
                            <path
                              id="Path_337461"
                              data-name="Path 337461"
                              d="M40.458,10.686A1.758,1.758,0,0,0,38.564,8.8a23.646,23.646,0,0,1-8.511-1.664A17.336,17.336,0,0,1,21.695.805a1.764,1.764,0,0,0-2.969.013,20.87,20.87,0,0,1-2.7,3.008A22.06,22.06,0,0,1,2.009,8.792,1.805,1.805,0,0,0,0,10.84v17.3a17.827,17.827,0,0,0,1.7,7.82C5.337,43.5,11.391,48.2,19.212,50.8a2.915,2.915,0,0,0,1.869.064A29.326,29.326,0,0,0,36.516,39.881a19.211,19.211,0,0,0,3.929-11.327c.064-5.964.026-11.916.013-17.868M20.133,37.833A12.32,12.32,0,1,1,32.548,25.52,12.349,12.349,0,0,1,20.133,37.833"
                              transform="translate(0 0)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337462"
                              data-name="Path 337462"
                              d="M24.128,17.561q-2.918,2.9-5.836,5.824c-1.472,1.472-2.944,2.957-4.429,4.429a1.78,1.78,0,0,1-3.11-.512c-.512-1.011-1.011-2.035-1.51-3.046a1.773,1.773,0,1,1,3.149-1.549c.179.346.346.678.6,1.178a5.475,5.475,0,0,1,.41-.563q4.128-4.147,8.268-8.281a1.756,1.756,0,0,1,3.033.73,1.791,1.791,0,0,1-.576,1.792"
                              transform="translate(2.507 4.043)"
                              fill="#d0d9de"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[10px] font-metropolis">1 year</span>
                <span className="text-[10px] font-semibold font-metropolis">Warranty</span>
              </div>
            </div>

            {/* second  */}
            <div className="flex flex-col items-center max-h-[58px] max-w-[25%]">
              <div className="flex items-center">
                <p>
                  <svg
                    className="h-[58px] w-[58px]"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_113425"
                          data-name="Rectangle 113425"
                          width="45.226"
                          height="45.234"
                          fill="none"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_334304"
                      data-name="Group 334304"
                      transform="translate(7709 -29)"
                    >
                      <rect
                        id="Rectangle_114334"
                        data-name="Rectangle 114334"
                        width="72"
                        height="72"
                        transform="translate(-7709 29)"
                        fill="#fff"
                        opacity="0"
                      />
                      <g
                        id="Group_334300"
                        data-name="Group 334300"
                        transform="translate(-7695.613 45.09)"
                      >
                        <rect
                          id="Rectangle_113423"
                          data-name="Rectangle 113423"
                          width="17.629"
                          height="17.034"
                          transform="translate(22.74 22.537)"
                          fill="#1a2024"
                        />
                        <g
                          id="Group_332125"
                          data-name="Group 332125"
                          transform="translate(0 0)"
                        >
                          <g
                            id="Group_332124"
                            data-name="Group 332124"
                            clip-path="url(#clip-path)"
                          >
                            <path
                              id="Path_337446"
                              data-name="Path 337446"
                              d="M27.965,43.335a15.291,15.291,0,0,1-3.66-.941,13.553,13.553,0,0,1-8.627-10.978,13.917,13.917,0,0,1,27.5-4.309l.152.867v2.913c-.02.085-.047.169-.059.256A13.768,13.768,0,0,1,34.578,42.4a14.96,14.96,0,0,1-3.7.937Zm.5-10.652h0c-1.029,0-2.06-.008-3.089,0a1.3,1.3,0,1,0-.01,2.579c1.25.011,2.5.015,3.751,0a23.24,23.24,0,0,0,2.864-.063A4.819,4.819,0,0,0,36.1,32.041a4.955,4.955,0,0,0-.946-5.35,5.035,5.035,0,0,0-3.888-1.685c-1.058-.017-2.118,0-3.178-.006-.1,0-.228.04-.278-.07s.07-.181.136-.25c.182-.193.381-.37.553-.57a1.269,1.269,0,0,0-.049-1.757,1.245,1.245,0,0,0-1.754-.006q-1.549,1.509-3.058,3.059a1.259,1.259,0,0,0,0,1.793q1.51,1.547,3.061,3.055a1.252,1.252,0,0,0,1.756-.011,1.271,1.271,0,0,0,.016-1.789c-.157-.174-.333-.331-.5-.5-.076-.082-.222-.152-.174-.279s.205-.079.314-.08c1.1,0,2.207-.008,3.31,0a2.545,2.545,0,0,1-.007,5.089c-.986.007-1.971,0-2.957,0"
                              transform="translate(1.901 1.899)"
                              fill="#d0d9de"
                            />
                            <rect
                              id="Rectangle_113424"
                              data-name="Rectangle 113424"
                              width="13.964"
                              height="11.688"
                              transform="translate(12.143 0.003)"
                              fill="#1a2024"
                            />
                            <path
                              id="Path_337447"
                              data-name="Path 337447"
                              d="M37.58,1.515v14c0,.561-.022.572-.539.382a16.464,16.464,0,0,0-21.787,11.92,16.2,16.2,0,0,0,.617,9.2c.2.55.2.561-.382.561-4.658,0-9.316.011-13.986,0A1.349,1.349,0,0,1,0,36.053V1.628C0,.483.471,0,1.639,0H11.92c.584,0,.584.011.584.584q0,4.529.011,9.047a3.743,3.743,0,0,0,.045.707,1.235,1.235,0,0,0,1.751.92c.539-.236,1.055-.528,1.583-.8.819-.415,1.661-.819,2.469-1.257a.826.826,0,0,1,.864.011c1.235.64,2.5,1.246,3.727,1.919a1.361,1.361,0,0,0,2.121-1.3c-.022-3.076-.011-6.151-.011-9.227,0-.595.011-.606.617-.606h10.36A1.36,1.36,0,0,1,37.58,1.515"
                              transform="translate(0 -0.001)"
                              fill="#d0d9de"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[10px] font-metropolis">7-day</span>
                <span className="text-[10px] font-semibold font-metropolis">Replacement</span>
              </div>
            </div>

            {/* third */}
            <div className="flex flex-col items-center max-h-[58px] max-w-[25%]">
              <div className="flex items-center">
                <p>
                  <svg
                    className="h-[58px] w-[58px]"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_113432"
                          data-name="Rectangle 113432"
                          width="59.006"
                          height="37.488"
                          fill="#d0d9de"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_334303"
                      data-name="Group 334303"
                      transform="translate(7619 -29)"
                    >
                      <rect
                        id="Rectangle_114335"
                        data-name="Rectangle 114335"
                        width="72"
                        height="72"
                        transform="translate(-7619 29)"
                        fill="#fff"
                        opacity="0"
                      />
                      <g
                        id="Group_334299"
                        data-name="Group 334299"
                        transform="translate(-7795.503 -500.775)"
                      >
                        <path
                          id="Path_337484"
                          data-name="Path 337484"
                          d="M0,.8A1.632,1.632,0,0,1,1.5.005Q1.816,0,2.134,0H33.789c1.971,0,2.268.3,2.268,2.268q0,13.813,0,27.626a6.965,6.965,0,0,1-.018.748A1.323,1.323,0,0,1,34.688,32a5.629,5.629,0,0,1-.633.018q-6.7,0-13.409,0c-1.417,0-1.742-.267-2.018-1.644a6.363,6.363,0,0,0-5.642-5.041,6.777,6.777,0,0,0-5.869,1.99A6.013,6.013,0,0,0,5.537,30.4c-.267,1.353-.6,1.612-1.981,1.614-.652,0-1.3,0-1.956,0A1.652,1.652,0,0,1,0,31.2Z"
                          transform="translate(183 550.308)"
                          fill="#d0d9de"
                        />
                        <path
                          id="Path_337473"
                          data-name="Path 337473"
                          d="M38.356,16.882V7.863H47.44l6.83,9.019v1.144l-15.914-.314Z"
                          transform="translate(184.181 550.55)"
                          fill="#1a2024"
                        />
                        <g
                          id="Group_332150"
                          data-name="Group 332150"
                          transform="translate(183 550.308)"
                        >
                          <g
                            id="Group_332149"
                            data-name="Group 332149"
                            transform="translate(0 0)"
                            clip-path="url(#clip-path)"
                          >
                            <path
                              id="Path_337475"
                              data-name="Path 337475"
                              d="M37.1,19.062q0-5.325,0-10.649c0-.23-.006-.462.016-.691a1.324,1.324,0,0,1,1.537-1.394c1.957-.007,3.915,0,5.871,0,.748,0,1.5.009,2.245,0a1.651,1.651,0,0,1,1.362.618q4.686,5.609,9.377,11.215a1.5,1.5,0,0,1,.36,1c0,3.76,0,7.522-.005,11.282a1.219,1.219,0,0,1-1.148,1.338,4.13,4.13,0,0,1-1.318.01,1.236,1.236,0,0,1-1.258-1.2,6.469,6.469,0,0,0-6-5.49,6.567,6.567,0,0,0-7.132,4.865c-.009.037-.024.073-.032.11-.366,1.6-1.422,2.177-3.007,1.627a1.105,1.105,0,0,1-.777-.852,5.545,5.545,0,0,1-.091-1.028q-.009-5.382,0-10.764m8.684-2.136c1.611,0,3.223,0,4.834,0a1.149,1.149,0,0,0,.965-1.961L46.939,9.4a1.534,1.534,0,0,0-1.252-.591c-1.573.01-3.146,0-4.719.006-.926.005-1.325.4-1.33,1.339q-.014,2.7,0,5.41c0,.97.4,1.359,1.365,1.363,1.593.007,3.184,0,4.777,0"
                              transform="translate(1.142 0.194)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337476"
                              data-name="Path 337476"
                              d="M11.864,36.646a5.048,5.048,0,1,1,5.08-5.013,5.015,5.015,0,0,1-5.08,5.013m1.387-5.038a1.373,1.373,0,1,0-2.745-.007,1.373,1.373,0,1,0,2.745.007"
                              transform="translate(0.209 0.817)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337477"
                              data-name="Path 337477"
                              d="M47.32,36.647a5.049,5.049,0,0,1,.02-10.1,5.049,5.049,0,1,1-.02,10.1M47.339,33a1.443,1.443,0,0,0,1.413-1.376A1.489,1.489,0,0,0,47.38,30.2a1.439,1.439,0,0,0-1.431,1.415A1.422,1.422,0,0,0,47.339,33"
                              transform="translate(1.302 0.817)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337478"
                              data-name="Path 337478"
                              d="M16.944,31.6a5.073,5.073,0,1,1-5.073-5.073A5.073,5.073,0,0,1,16.944,31.6"
                              transform="translate(0.209 0.816)"
                              fill="#1a2024"
                            />
                            <path
                              id="Path_337479"
                              data-name="Path 337479"
                              d="M52.425,31.6a5.073,5.073,0,1,1-5.073-5.073A5.073,5.073,0,0,1,52.425,31.6"
                              transform="translate(1.301 0.816)"
                              fill="#1a2024"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_332151"
                          data-name="Group 332151"
                          transform="translate(186.092 554.004)"
                        >
                          <path
                            id="Path_337480"
                            data-name="Path 337480"
                            d="M22.307,2.591V4.443H18.441v2h2.892v1.8H18.441V12.08H16.128V2.591Z"
                            transform="translate(-16.128 -2.59)"
                            fill="#1a2024"
                          />
                          <path
                            id="Path_337481"
                            data-name="Path 337481"
                            d="M25.87,12.08,23.9,8.5h-.555V12.08H21.031V2.591h3.88a4.253,4.253,0,0,1,1.913.392,2.7,2.7,0,0,1,1.183,1.074,2.983,2.983,0,0,1,.394,1.52,2.831,2.831,0,0,1-.535,1.691,2.883,2.883,0,0,1-1.575,1.054l2.19,3.757ZM23.342,6.863h1.433a1.316,1.316,0,0,0,.953-.311,1.173,1.173,0,0,0,.318-.879,1.137,1.137,0,0,0-.318-.852,1.316,1.316,0,0,0-.953-.311H23.342Z"
                            transform="translate(-13.636 -2.59)"
                            fill="#1a2024"
                          />
                          <path
                            id="Path_337482"
                            data-name="Path 337482"
                            d="M29.185,4.443V6.361h3.1V8.146h-3.1v2.083h3.5V12.08H26.874V2.591h5.812V4.443Z"
                            transform="translate(-10.666 -2.591)"
                            fill="#1a2024"
                          />
                          <path
                            id="Path_337483"
                            data-name="Path 337483"
                            d="M34.034,4.443V6.361h3.1V8.146h-3.1v2.083h3.5V12.08H31.723V2.591h5.812V4.443Z"
                            transform="translate(-8.201 -2.591)"
                            fill="#1a2024"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[10px] font-metropolis">Free Express</span>
                <span className="text-[10px] font-semibold font-metropolis">Delivery*</span>
              </div>
            </div>
            
            {/* fourth */} 
            <div className="flex flex-col items-center max-h-[58px] max-w-[25%]">
              <div className="flex items-center">
                <p>
                  <svg
                  className="h-[58px] w-[58px]"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_113431"
                          data-name="Rectangle 113431"
                          width="43"
                          height="43.008"
                          fill="#b2b9bf"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_334302"
                      data-name="Group 334302"
                      transform="translate(7530 -29)"
                    >
                      <rect
                        id="Rectangle_114336"
                        data-name="Rectangle 114336"
                        width="72"
                        height="72"
                        transform="translate(-7530 29)"
                        fill="#fff"
                        opacity="0"
                      />
                      <g
                        id="Group_334301"
                        data-name="Group 334301"
                        transform="translate(-7843.5 -448.69)"
                      >
                        <path
                          id="Path_337472"
                          data-name="Path 337472"
                          d="M331.165,497v8.487l12.088,2.829,3.6,7.587v14.4s11.7.643,11.7,0V505.487h-11.7V497Z"
                          transform="translate(9.946 2.347)"
                          fill="#1a2024"
                        />
                        <circle
                          id="Ellipse_16269"
                          data-name="Ellipse 16269"
                          cx="6.874"
                          cy="6.874"
                          r="6.874"
                          transform="translate(333.347 517.678)"
                          fill="#1a2024"
                        />
                        <g
                          id="Group_332146"
                          data-name="Group 332146"
                          transform="translate(328 494)"
                        >
                          <g
                            id="Group_332145"
                            data-name="Group 332145"
                            transform="translate(0 0)"
                            clip-path="url(#clip-path)"
                          >
                            <path
                              id="Path_337469"
                              data-name="Path 337469"
                              d="M24.391,42.893c.325-.275.623-.511.9-.767A15.3,15.3,0,0,0,20.8,16.505a14.87,14.87,0,0,0-8.267-.845c-.394.072-.495-.048-.494-.434.012-3.592,0-7.184.014-10.777A4.566,4.566,0,0,1,16.47.015C21.994,0,27.518.013,33.042,0c.422,0,.548.131.545.548-.017,2.283-.014,4.567,0,6.85a5,5,0,0,0,.392,2.1,4.548,4.548,0,0,0,4.433,2.767c2.267.022,4.534,0,6.8.006.632,0,.634,0,.634.635q0,12.716,0,25.433A4.57,4.57,0,0,1,41.21,43q-8.143.011-16.285,0a.765.765,0,0,1-.534-.1m-.044-30.622c1.484,0,2.969.013,4.452,0a1.507,1.507,0,0,0,1.538-1.987A1.6,1.6,0,0,0,28.7,9.274q-4.356,0-8.713,0a2.291,2.291,0,0,0-.707.1,1.463,1.463,0,0,0-.626,2.372,1.686,1.686,0,0,0,1.335.526q2.178,0,4.356,0m10.731,4.67c-1.005,0-2.011-.022-3.015.006a1.518,1.518,0,0,0-1.541,1.511,1.537,1.537,0,0,0,1.539,1.468c2.01.024,4.021.018,6.031,0a1.539,1.539,0,0,0,1.444-1,1.5,1.5,0,0,0-1.491-1.985c-.988-.024-1.978,0-2.967,0M36.593,27.6c.479,0,.957.012,1.435,0a1.5,1.5,0,1,0-.014-2.99q-1.41-.024-2.822,0a1.529,1.529,0,0,0-1.6,1.5A1.574,1.574,0,0,0,35.206,27.6c.462.013.925,0,1.387,0m.022,4.669c-.478,0-.957-.013-1.435,0a1.535,1.535,0,0,0-1.592,1.511,1.561,1.561,0,0,0,1.582,1.477c.956.021,1.914.02,2.87,0a1.5,1.5,0,1,0,.01-2.989c-.478-.016-.957,0-1.435,0"
                              transform="translate(-2.844 0)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337470"
                              data-name="Path 337470"
                              d="M24.6,36.391A12.3,12.3,0,1,1,12.259,24.082,12.284,12.284,0,0,1,24.6,36.391M9.219,40.952a1.9,1.9,0,0,0,1.276-.637q2.854-2.867,5.718-5.723a3.145,3.145,0,0,0,.348-.394,1.465,1.465,0,0,0-.849-2.308,1.526,1.526,0,0,0-1.544.529q-2.914,2.909-5.821,5.823a2.424,2.424,0,0,0-.388.483,1.39,1.39,0,0,0,.017,1.5,1.522,1.522,0,0,0,1.244.73M9.21,34.809a1.486,1.486,0,1,0,.005-2.972,1.486,1.486,0,0,0-.005,2.972M15.4,40.943a1.55,1.55,0,0,0,1.455-1.494A1.521,1.521,0,0,0,15.39,37.97a1.487,1.487,0,1,0,.011,2.973"
                              transform="translate(0 -5.688)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337471"
                              data-name="Path 337471"
                              d="M44.26,1.251c.142.128.252.218.351.318q3.774,3.772,7.544,7.548c.106.106.318.2.247.369s-.286.079-.438.079q-3.062.007-6.125,0A1.546,1.546,0,0,1,44.166,7.9c0-2.058,0-4.115,0-6.173a.755.755,0,0,1,.094-.478"
                              transform="translate(-10.431 -0.295)"
                              fill="#1a2024"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[10px] font-metropolis">GST</span>
                <span className="text-[10px] font-semibold font-metropolis">Billing</span>
              </div>
            </div>
          </div>
        </div>

        {/* above 768px */}
        <div className="hidden md:block bg-[#f6faff]">
          <div className="flex w-[84%] h-[72px] items-center justify-between mx-auto">

            {/* first */}
            <div className="flex items-center max-h-[58px] gap-4 max-w-[25%]">
              <div className="flex items-center">
                <p>
                  <svg
                    className="h-[58px] w-[58px]"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_113429"
                          data-name="Rectangle 113429"
                          width="40.481"
                          height="50.987"
                          fill="#d0d9de"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_334305"
                      data-name="Group 334305"
                      transform="translate(7800 -29)"
                    >
                      <rect
                        id="Rectangle_114333"
                        data-name="Rectangle 114333"
                        width="72"
                        height="72"
                        transform="translate(-7800 29)"
                        fill="#fff"
                        opacity="0"
                      />
                      <g
                        id="Group_334298"
                        data-name="Group 334298"
                        transform="translate(-7712.736 -337.438)"
                      >
                        <circle
                          id="Ellipse_16268"
                          data-name="Ellipse 16268"
                          cx="12.842"
                          cy="12.842"
                          r="12.842"
                          transform="translate(-64.107 390.089)"
                          fill="#1a2024"
                        />
                        <g
                          id="Group_332139"
                          data-name="Group 332139"
                          transform="translate(-71.505 377.438)"
                        >
                          <g
                            id="Group_332138"
                            data-name="Group 332138"
                            transform="translate(0 0)"
                            clip-path="url(#clip-path)"
                          >
                            <path
                              id="Path_337461"
                              data-name="Path 337461"
                              d="M40.458,10.686A1.758,1.758,0,0,0,38.564,8.8a23.646,23.646,0,0,1-8.511-1.664A17.336,17.336,0,0,1,21.695.805a1.764,1.764,0,0,0-2.969.013,20.87,20.87,0,0,1-2.7,3.008A22.06,22.06,0,0,1,2.009,8.792,1.805,1.805,0,0,0,0,10.84v17.3a17.827,17.827,0,0,0,1.7,7.82C5.337,43.5,11.391,48.2,19.212,50.8a2.915,2.915,0,0,0,1.869.064A29.326,29.326,0,0,0,36.516,39.881a19.211,19.211,0,0,0,3.929-11.327c.064-5.964.026-11.916.013-17.868M20.133,37.833A12.32,12.32,0,1,1,32.548,25.52,12.349,12.349,0,0,1,20.133,37.833"
                              transform="translate(0 0)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337462"
                              data-name="Path 337462"
                              d="M24.128,17.561q-2.918,2.9-5.836,5.824c-1.472,1.472-2.944,2.957-4.429,4.429a1.78,1.78,0,0,1-3.11-.512c-.512-1.011-1.011-2.035-1.51-3.046a1.773,1.773,0,1,1,3.149-1.549c.179.346.346.678.6,1.178a5.475,5.475,0,0,1,.41-.563q4.128-4.147,8.268-8.281a1.756,1.756,0,0,1,3.033.73,1.791,1.791,0,0,1-.576,1.792"
                              transform="translate(2.507 4.043)"
                              fill="#d0d9de"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-[12px] font-metropolis">1 year</span>
                <span className="text-[12px] font-metropolis">Warranty</span>
              </div>
            </div>

            {/* second  */}
            <div className="flex items-center max-h-[58px] gap-4 max-w-[25%]">
              <div className="flex items-center">
                <p>
                  <svg
                    className="h-[58px] w-[58px]"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_113425"
                          data-name="Rectangle 113425"
                          width="45.226"
                          height="45.234"
                          fill="none"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_334304"
                      data-name="Group 334304"
                      transform="translate(7709 -29)"
                    >
                      <rect
                        id="Rectangle_114334"
                        data-name="Rectangle 114334"
                        width="72"
                        height="72"
                        transform="translate(-7709 29)"
                        fill="#fff"
                        opacity="0"
                      />
                      <g
                        id="Group_334300"
                        data-name="Group 334300"
                        transform="translate(-7695.613 45.09)"
                      >
                        <rect
                          id="Rectangle_113423"
                          data-name="Rectangle 113423"
                          width="17.629"
                          height="17.034"
                          transform="translate(22.74 22.537)"
                          fill="#1a2024"
                        />
                        <g
                          id="Group_332125"
                          data-name="Group 332125"
                          transform="translate(0 0)"
                        >
                          <g
                            id="Group_332124"
                            data-name="Group 332124"
                            clip-path="url(#clip-path)"
                          >
                            <path
                              id="Path_337446"
                              data-name="Path 337446"
                              d="M27.965,43.335a15.291,15.291,0,0,1-3.66-.941,13.553,13.553,0,0,1-8.627-10.978,13.917,13.917,0,0,1,27.5-4.309l.152.867v2.913c-.02.085-.047.169-.059.256A13.768,13.768,0,0,1,34.578,42.4a14.96,14.96,0,0,1-3.7.937Zm.5-10.652h0c-1.029,0-2.06-.008-3.089,0a1.3,1.3,0,1,0-.01,2.579c1.25.011,2.5.015,3.751,0a23.24,23.24,0,0,0,2.864-.063A4.819,4.819,0,0,0,36.1,32.041a4.955,4.955,0,0,0-.946-5.35,5.035,5.035,0,0,0-3.888-1.685c-1.058-.017-2.118,0-3.178-.006-.1,0-.228.04-.278-.07s.07-.181.136-.25c.182-.193.381-.37.553-.57a1.269,1.269,0,0,0-.049-1.757,1.245,1.245,0,0,0-1.754-.006q-1.549,1.509-3.058,3.059a1.259,1.259,0,0,0,0,1.793q1.51,1.547,3.061,3.055a1.252,1.252,0,0,0,1.756-.011,1.271,1.271,0,0,0,.016-1.789c-.157-.174-.333-.331-.5-.5-.076-.082-.222-.152-.174-.279s.205-.079.314-.08c1.1,0,2.207-.008,3.31,0a2.545,2.545,0,0,1-.007,5.089c-.986.007-1.971,0-2.957,0"
                              transform="translate(1.901 1.899)"
                              fill="#d0d9de"
                            />
                            <rect
                              id="Rectangle_113424"
                              data-name="Rectangle 113424"
                              width="13.964"
                              height="11.688"
                              transform="translate(12.143 0.003)"
                              fill="#1a2024"
                            />
                            <path
                              id="Path_337447"
                              data-name="Path 337447"
                              d="M37.58,1.515v14c0,.561-.022.572-.539.382a16.464,16.464,0,0,0-21.787,11.92,16.2,16.2,0,0,0,.617,9.2c.2.55.2.561-.382.561-4.658,0-9.316.011-13.986,0A1.349,1.349,0,0,1,0,36.053V1.628C0,.483.471,0,1.639,0H11.92c.584,0,.584.011.584.584q0,4.529.011,9.047a3.743,3.743,0,0,0,.045.707,1.235,1.235,0,0,0,1.751.92c.539-.236,1.055-.528,1.583-.8.819-.415,1.661-.819,2.469-1.257a.826.826,0,0,1,.864.011c1.235.64,2.5,1.246,3.727,1.919a1.361,1.361,0,0,0,2.121-1.3c-.022-3.076-.011-6.151-.011-9.227,0-.595.011-.606.617-.606h10.36A1.36,1.36,0,0,1,37.58,1.515"
                              transform="translate(0 -0.001)"
                              fill="#d0d9de"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-[12px] font-metropolis">7-day</span>
                <span className="text-[12px] font-metropolis">Replacement</span>
              </div>
            </div>

            {/* third */}
            <div className="flex items-center max-h-[58px] gap-4 max-w-[25%]">
              <div className="flex items-center">
                <p>
                  <svg
                    className="h-[58px] w-[58px]"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_113432"
                          data-name="Rectangle 113432"
                          width="59.006"
                          height="37.488"
                          fill="#d0d9de"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_334303"
                      data-name="Group 334303"
                      transform="translate(7619 -29)"
                    >
                      <rect
                        id="Rectangle_114335"
                        data-name="Rectangle 114335"
                        width="72"
                        height="72"
                        transform="translate(-7619 29)"
                        fill="#fff"
                        opacity="0"
                      />
                      <g
                        id="Group_334299"
                        data-name="Group 334299"
                        transform="translate(-7795.503 -500.775)"
                      >
                        <path
                          id="Path_337484"
                          data-name="Path 337484"
                          d="M0,.8A1.632,1.632,0,0,1,1.5.005Q1.816,0,2.134,0H33.789c1.971,0,2.268.3,2.268,2.268q0,13.813,0,27.626a6.965,6.965,0,0,1-.018.748A1.323,1.323,0,0,1,34.688,32a5.629,5.629,0,0,1-.633.018q-6.7,0-13.409,0c-1.417,0-1.742-.267-2.018-1.644a6.363,6.363,0,0,0-5.642-5.041,6.777,6.777,0,0,0-5.869,1.99A6.013,6.013,0,0,0,5.537,30.4c-.267,1.353-.6,1.612-1.981,1.614-.652,0-1.3,0-1.956,0A1.652,1.652,0,0,1,0,31.2Z"
                          transform="translate(183 550.308)"
                          fill="#d0d9de"
                        />
                        <path
                          id="Path_337473"
                          data-name="Path 337473"
                          d="M38.356,16.882V7.863H47.44l6.83,9.019v1.144l-15.914-.314Z"
                          transform="translate(184.181 550.55)"
                          fill="#1a2024"
                        />
                        <g
                          id="Group_332150"
                          data-name="Group 332150"
                          transform="translate(183 550.308)"
                        >
                          <g
                            id="Group_332149"
                            data-name="Group 332149"
                            transform="translate(0 0)"
                            clip-path="url(#clip-path)"
                          >
                            <path
                              id="Path_337475"
                              data-name="Path 337475"
                              d="M37.1,19.062q0-5.325,0-10.649c0-.23-.006-.462.016-.691a1.324,1.324,0,0,1,1.537-1.394c1.957-.007,3.915,0,5.871,0,.748,0,1.5.009,2.245,0a1.651,1.651,0,0,1,1.362.618q4.686,5.609,9.377,11.215a1.5,1.5,0,0,1,.36,1c0,3.76,0,7.522-.005,11.282a1.219,1.219,0,0,1-1.148,1.338,4.13,4.13,0,0,1-1.318.01,1.236,1.236,0,0,1-1.258-1.2,6.469,6.469,0,0,0-6-5.49,6.567,6.567,0,0,0-7.132,4.865c-.009.037-.024.073-.032.11-.366,1.6-1.422,2.177-3.007,1.627a1.105,1.105,0,0,1-.777-.852,5.545,5.545,0,0,1-.091-1.028q-.009-5.382,0-10.764m8.684-2.136c1.611,0,3.223,0,4.834,0a1.149,1.149,0,0,0,.965-1.961L46.939,9.4a1.534,1.534,0,0,0-1.252-.591c-1.573.01-3.146,0-4.719.006-.926.005-1.325.4-1.33,1.339q-.014,2.7,0,5.41c0,.97.4,1.359,1.365,1.363,1.593.007,3.184,0,4.777,0"
                              transform="translate(1.142 0.194)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337476"
                              data-name="Path 337476"
                              d="M11.864,36.646a5.048,5.048,0,1,1,5.08-5.013,5.015,5.015,0,0,1-5.08,5.013m1.387-5.038a1.373,1.373,0,1,0-2.745-.007,1.373,1.373,0,1,0,2.745.007"
                              transform="translate(0.209 0.817)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337477"
                              data-name="Path 337477"
                              d="M47.32,36.647a5.049,5.049,0,0,1,.02-10.1,5.049,5.049,0,1,1-.02,10.1M47.339,33a1.443,1.443,0,0,0,1.413-1.376A1.489,1.489,0,0,0,47.38,30.2a1.439,1.439,0,0,0-1.431,1.415A1.422,1.422,0,0,0,47.339,33"
                              transform="translate(1.302 0.817)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337478"
                              data-name="Path 337478"
                              d="M16.944,31.6a5.073,5.073,0,1,1-5.073-5.073A5.073,5.073,0,0,1,16.944,31.6"
                              transform="translate(0.209 0.816)"
                              fill="#1a2024"
                            />
                            <path
                              id="Path_337479"
                              data-name="Path 337479"
                              d="M52.425,31.6a5.073,5.073,0,1,1-5.073-5.073A5.073,5.073,0,0,1,52.425,31.6"
                              transform="translate(1.301 0.816)"
                              fill="#1a2024"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_332151"
                          data-name="Group 332151"
                          transform="translate(186.092 554.004)"
                        >
                          <path
                            id="Path_337480"
                            data-name="Path 337480"
                            d="M22.307,2.591V4.443H18.441v2h2.892v1.8H18.441V12.08H16.128V2.591Z"
                            transform="translate(-16.128 -2.59)"
                            fill="#1a2024"
                          />
                          <path
                            id="Path_337481"
                            data-name="Path 337481"
                            d="M25.87,12.08,23.9,8.5h-.555V12.08H21.031V2.591h3.88a4.253,4.253,0,0,1,1.913.392,2.7,2.7,0,0,1,1.183,1.074,2.983,2.983,0,0,1,.394,1.52,2.831,2.831,0,0,1-.535,1.691,2.883,2.883,0,0,1-1.575,1.054l2.19,3.757ZM23.342,6.863h1.433a1.316,1.316,0,0,0,.953-.311,1.173,1.173,0,0,0,.318-.879,1.137,1.137,0,0,0-.318-.852,1.316,1.316,0,0,0-.953-.311H23.342Z"
                            transform="translate(-13.636 -2.59)"
                            fill="#1a2024"
                          />
                          <path
                            id="Path_337482"
                            data-name="Path 337482"
                            d="M29.185,4.443V6.361h3.1V8.146h-3.1v2.083h3.5V12.08H26.874V2.591h5.812V4.443Z"
                            transform="translate(-10.666 -2.591)"
                            fill="#1a2024"
                          />
                          <path
                            id="Path_337483"
                            data-name="Path 337483"
                            d="M34.034,4.443V6.361h3.1V8.146h-3.1v2.083h3.5V12.08H31.723V2.591h5.812V4.443Z"
                            transform="translate(-8.201 -2.591)"
                            fill="#1a2024"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-[12px] font-metropolis">Free Express</span>
                <span className="text-[12px] font-metropolis">Delivery*</span>
              </div>
            </div>
            
            {/* fourth */} 
            <div className="flex items-center max-h-[58px] gap-4 max-w-[25%]">
              <div className="flex items-center">
                <p>
                  <svg
                  className="h-[58px] w-[58px]"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_113431"
                          data-name="Rectangle 113431"
                          width="43"
                          height="43.008"
                          fill="#b2b9bf"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_334302"
                      data-name="Group 334302"
                      transform="translate(7530 -29)"
                    >
                      <rect
                        id="Rectangle_114336"
                        data-name="Rectangle 114336"
                        width="72"
                        height="72"
                        transform="translate(-7530 29)"
                        fill="#fff"
                        opacity="0"
                      />
                      <g
                        id="Group_334301"
                        data-name="Group 334301"
                        transform="translate(-7843.5 -448.69)"
                      >
                        <path
                          id="Path_337472"
                          data-name="Path 337472"
                          d="M331.165,497v8.487l12.088,2.829,3.6,7.587v14.4s11.7.643,11.7,0V505.487h-11.7V497Z"
                          transform="translate(9.946 2.347)"
                          fill="#1a2024"
                        />
                        <circle
                          id="Ellipse_16269"
                          data-name="Ellipse 16269"
                          cx="6.874"
                          cy="6.874"
                          r="6.874"
                          transform="translate(333.347 517.678)"
                          fill="#1a2024"
                        />
                        <g
                          id="Group_332146"
                          data-name="Group 332146"
                          transform="translate(328 494)"
                        >
                          <g
                            id="Group_332145"
                            data-name="Group 332145"
                            transform="translate(0 0)"
                            clip-path="url(#clip-path)"
                          >
                            <path
                              id="Path_337469"
                              data-name="Path 337469"
                              d="M24.391,42.893c.325-.275.623-.511.9-.767A15.3,15.3,0,0,0,20.8,16.505a14.87,14.87,0,0,0-8.267-.845c-.394.072-.495-.048-.494-.434.012-3.592,0-7.184.014-10.777A4.566,4.566,0,0,1,16.47.015C21.994,0,27.518.013,33.042,0c.422,0,.548.131.545.548-.017,2.283-.014,4.567,0,6.85a5,5,0,0,0,.392,2.1,4.548,4.548,0,0,0,4.433,2.767c2.267.022,4.534,0,6.8.006.632,0,.634,0,.634.635q0,12.716,0,25.433A4.57,4.57,0,0,1,41.21,43q-8.143.011-16.285,0a.765.765,0,0,1-.534-.1m-.044-30.622c1.484,0,2.969.013,4.452,0a1.507,1.507,0,0,0,1.538-1.987A1.6,1.6,0,0,0,28.7,9.274q-4.356,0-8.713,0a2.291,2.291,0,0,0-.707.1,1.463,1.463,0,0,0-.626,2.372,1.686,1.686,0,0,0,1.335.526q2.178,0,4.356,0m10.731,4.67c-1.005,0-2.011-.022-3.015.006a1.518,1.518,0,0,0-1.541,1.511,1.537,1.537,0,0,0,1.539,1.468c2.01.024,4.021.018,6.031,0a1.539,1.539,0,0,0,1.444-1,1.5,1.5,0,0,0-1.491-1.985c-.988-.024-1.978,0-2.967,0M36.593,27.6c.479,0,.957.012,1.435,0a1.5,1.5,0,1,0-.014-2.99q-1.41-.024-2.822,0a1.529,1.529,0,0,0-1.6,1.5A1.574,1.574,0,0,0,35.206,27.6c.462.013.925,0,1.387,0m.022,4.669c-.478,0-.957-.013-1.435,0a1.535,1.535,0,0,0-1.592,1.511,1.561,1.561,0,0,0,1.582,1.477c.956.021,1.914.02,2.87,0a1.5,1.5,0,1,0,.01-2.989c-.478-.016-.957,0-1.435,0"
                              transform="translate(-2.844 0)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337470"
                              data-name="Path 337470"
                              d="M24.6,36.391A12.3,12.3,0,1,1,12.259,24.082,12.284,12.284,0,0,1,24.6,36.391M9.219,40.952a1.9,1.9,0,0,0,1.276-.637q2.854-2.867,5.718-5.723a3.145,3.145,0,0,0,.348-.394,1.465,1.465,0,0,0-.849-2.308,1.526,1.526,0,0,0-1.544.529q-2.914,2.909-5.821,5.823a2.424,2.424,0,0,0-.388.483,1.39,1.39,0,0,0,.017,1.5,1.522,1.522,0,0,0,1.244.73M9.21,34.809a1.486,1.486,0,1,0,.005-2.972,1.486,1.486,0,0,0-.005,2.972M15.4,40.943a1.55,1.55,0,0,0,1.455-1.494A1.521,1.521,0,0,0,15.39,37.97a1.487,1.487,0,1,0,.011,2.973"
                              transform="translate(0 -5.688)"
                              fill="#d0d9de"
                            />
                            <path
                              id="Path_337471"
                              data-name="Path 337471"
                              d="M44.26,1.251c.142.128.252.218.351.318q3.774,3.772,7.544,7.548c.106.106.318.2.247.369s-.286.079-.438.079q-3.062.007-6.125,0A1.546,1.546,0,0,1,44.166,7.9c0-2.058,0-4.115,0-6.173a.755.755,0,0,1,.094-.478"
                              transform="translate(-10.431 -0.295)"
                              fill="#1a2024"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-[12px] font-metropolis">GST</span>
                <span className="text-[12px] font-metropolis">Billing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;