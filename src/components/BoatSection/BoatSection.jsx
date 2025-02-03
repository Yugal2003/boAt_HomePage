import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import first from '../../assets/Categories/first.webp'
import second from '../../assets/Categories/last.webp'
import third from '../../assets/Categories/second.png'
import fourth from '../../assets/Categories/third.webp'
import fifth from '../../assets/Categories/fifth.webp'
import six from '../../assets/Categories/six.webp'
import seven from '../../assets/Categories/seven.webp'
import eight from '../../assets/Categories/eight.webp'
import nine from '../../assets/Categories/nine.webp'
import ten from '../../assets/Categories/ten.png'
import elevan from '../../assets/Categories/elevem.webp'
import twelve from '../../assets/Categories/twelve.webp'
import thirteen from '../../assets/Categories/thirteen.webp'
import fourteen from '../../assets/Categories/fourteen.webp'
import fifteen from '../../assets/Categories/fifteen.webp'
import sixteen from '../../assets/Categories/sixteen.webp'
import seventeen from '../../assets/Categories/seventeen.webp'
import eighteen from '../../assets/Categories/eighteen.png'
import nineteen from '../../assets/Categories/nineteen.webp'
import { company } from "../../constant/contant";

const BoatSection = () => {

  const [openCategories,setOpenCategories] = useState(false);
  const [openMore,setOpenMore] = useState(false);
  const [sideBar,setSideBar] = useState(false);

  const [openCategoriesMini,setOpenCategoriesMini] = useState(false);
  const [openMoreMini,setOpenMoreMini] = useState(false);
  const [sidebarMini,setSideBarMini] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isMoreHovered, setIsMoreHovered] = useState(false);

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0); // Track current placeholder index
  const [animateClass, setAnimateClass] = useState("animate-slide-in");

  const placeholders = [
    "Search \"Speakers\"",
    "Search \"Smartwatches\"",
    "Search \"Earphones\"",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateClass("animate-slide-out");

      setTimeout(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        setAnimateClass("animate-slide-in");
      }, 500); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
        <div className="fixed z-50 top-10 base:top-8 bg-white border-b-2 w-full px-1 md:px-10 h-14 md:h-20 xl:h-[5.5rem] flex items-center">
            <div className="my-5 w-full mx-auto flex justify-center items-center">
                <div className="flex w-full max-w-[1500px] mx-auto">
                    <div className="flex flex-row w-full justify-between items-center">
                    
                    {/* xl laptop screen */}
                    {/* boat + ul list */}
                    <div className="hidden xl:flex justify-between items-center gap-14 2xl:gap-16 3xl:gap-[6.8rem]">
                            {/* boat */}
                            <div className="">
                                <p className="cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 151.848 62.372"
                                    height="35.372"
                                    width="85.848"
                                    data-name="Group 205728"
                                    id="Group_205728"
                                >
                                    <g
                                    transform="translate(0 0)"
                                    data-name="Group 208975"
                                    id="Group_208975"
                                    >
                                    <path
                                        fill="#1a2024"
                                        transform="translate(-268.85 -104.669)"
                                        d="M328.831,120.079a18.374,18.374,0,0,1,14.5,6.724q5.8,6.724,5.8,16.779,0,10.005-5.8,16.7a19.108,19.108,0,0,1-29.05,0q-5.849-6.7-5.849-16.7,0-10.061,5.849-16.779a18.508,18.508,0,0,1,14.55-6.724m0,42.195a14.177,14.177,0,0,0,11.261-5.321,22.018,22.018,0,0,0-.02-26.762,14.132,14.132,0,0,0-11.241-5.4,14.278,14.278,0,0,0-11.333,5.346,22.042,22.042,0,0,0,0,26.814,14.3,14.3,0,0,0,11.333,5.321"
                                        data-name="Path 1"
                                        id="Path_1"
                                    />
                                    <path
                                        fill="#1a2024"
                                        transform="translate(-776.859 -0.1)"
                                        d="M911.15.115v15.3H926v4.017H911.15V46.866q0,6.628,1.236,8.711t6.649,2.079a26.216,26.216,0,0,0,9.672-2.256v4.714a27.981,27.981,0,0,1-10.935,2.359,14.251,14.251,0,0,1-8.75-2.614,8.478,8.478,0,0,1-3.516-7.219V19.429h-14.27l4.576-4.017h9.694V4.429l3.86-4.314Z"
                                        data-name="Path 2"
                                        id="Path_2"
                                    />
                                    <path
                                        fill="#ed1c24"
                                        transform="translate(-513.351 -105.768)"
                                        d="M639.38,167.836H624.387l4.282-8.3h-29.08l4.424,8.3H588.931l18.339-46.5H621.1ZM621.53,153.37l-7.286-20.019-8.976,25.411Z"
                                        data-name="Path 3"
                                        id="Path_3"
                                    />
                                    <path
                                        fill="#1a2024"
                                        transform="translate(0 0.001)"
                                        d="M0,59.12V0H1.548L4.419,4.32,4.426,21.7a18.2,18.2,0,0,1,13.86-6.452c3.772-.093,10.359,1.9,13.782,5.739a22.932,22.932,0,0,1,5.969,15.866c0,7.779-2.031,14.2-6.258,18.89S21.7,62.276,14.694,62.276A35.24,35.24,0,0,1,0,59.12M4.436,26.759,4.348,55.922a24.73,24.73,0,0,0,10.079,1.712C19.783,57.634,25.3,56,28.8,52.123c3.08-2.887,5.071-8.949,5.194-14.883A18.918,18.918,0,0,0,29.7,24.6,13.825,13.825,0,0,0,18.667,19.36c-5.052-.066-9.539,1.376-14.231,7.4"
                                        data-name="Path 4"
                                        id="Path_4"
                                    />
                                    </g>
                                </svg>
                                </p>
                            </div>

                            {/* ul list */}
                            <div className="">
                                <ul className="flex flex-row items-center gap-8 3xl:gap-10 text-[14px] 3xl:text-[1rem] font-normal font-metropolis cursor-pointer">
                                    <li className="flex items-center gap-2 hover:text-[15px] hover:font-semibold relative"
                                    onMouseEnter={() => {
                                        setTimeout(() => setIsHovered(true), 200);
                                    }}
                                    onMouseLeave={() => {
                                        setTimeout(() => setIsHovered(false), 200);
                                    }}
                                    >Categories <FaChevronDown size={12}/></li>
                                    <li className="hover:text-[15px] hover:font-semibold">{company.name} Personalisation</li>
                                    <li className="hover:text-[15px] hover:font-semibold">Corporate Orders</li>
                                    <li className="relative"
                                        onMouseEnter={() => {
                                            setTimeout(()=> setIsMoreHovered(true),200);
                                        }}
                                        onMouseLeave={() => {
                                            setTimeout(()=> setIsMoreHovered(false),200);
                                        }}
                                    >
                                        <span className="flex items-center gap-2 hover:text-[15px] hover:font-semibold cursor-pointer">
                                            More <FaChevronDown size={12} />
                                        </span>

                                        {isMoreHovered && (
                                            <div className="absolute px-2 top-full flex flex-col w-[160px] justify-center py-4 bg-white shadow-lg left-[-40px] mt-7 p-2 gap-2">
                                                <ul>
                                                    <li className="px-2 text-gray-600 font-metropolis text-[13px] cursor-pointer">Daily Deals</li>
                                                    <li className="px-2 text-gray-600 font-metropolis text-[13px] cursor-pointer">Blogs</li>
                                                    <li className="px-2 text-gray-600 font-metropolis text-[13px] cursor-pointer">Refer & Earn</li>
                                                    <li className="px-2 text-gray-600 font-metropolis text-[13px] cursor-pointer">Careers</li>
                                                    <li className="px-2 text-gray-600 font-metropolis text-[13px] cursor-pointer">Social Responsibility</li>
                                                    <li className="px-2 text-gray-600 font-metropolis text-[13px] cursor-pointer">Store Locator</li>
                                                    <li className="px-2 text-gray-600 font-metropolis text-[13px] cursor-pointer">{company.name} Community</li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                                {/* Hover Image */}
                                {isHovered && (
                                <div className="absolute top-full w-[94%] left-12 mt-[1px] py-4 bg-white shadow-lg rounded-md">
                                    <div className="grid grid-cols-5 gap-4 pr-20">
                                        {/* first */}
                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={first} alt="" width={50}/>
                                            <h1 className="text-xs">True Wireless Earbuds</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={second} alt="" width={50}/>
                                            <h1 className="text-xs">Personalised Products</h1>
                                        </div>
                                
                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={third} alt="" width={50}/>
                                            <h1 className="text-xs">Neckbands</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={fourth} alt="" width={50}/>
                                            <h1 className="text-xs">Smart Watches</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={fifth} alt="" width={50}/>
                                            <h1 className="text-xs">Wireless Headphones</h1>
                                        </div>

                                        {/* second */}
                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={six} alt="" width={50}/>
                                            <h1 className="text-xs">True Wireless Earbuds</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={seven} alt="" width={50}/>
                                            <h1 className="text-xs">Personalised Products</h1>
                                        </div>
                                
                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={eight} alt="" width={50}/>
                                            <h1 className="text-xs">Neckbands</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={nine} alt="" width={50}/>
                                            <h1 className="text-xs">Smart Watches</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={ten} alt="" width={50}/>
                                            <h1 className="text-xs">Wireless Headphones</h1>
                                        </div>

                                        {/* third */}
                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={elevan} alt="" width={50}/>
                                            <h1 className="text-xs">True Wireless Earbuds</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={twelve} alt="" width={50}/>
                                            <h1 className="text-xs">Personalised Products</h1>
                                        </div>
                                
                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={thirteen} alt="" width={50}/>
                                            <h1 className="text-xs">Neckbands</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={fourteen} alt="" width={50}/>
                                            <h1 className="text-xs">Smart Watches</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={fifteen} alt="" width={50}/>
                                            <h1 className="text-xs">Wireless Headphones</h1>
                                        </div>

                                        {/* fourth */}
                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={sixteen} alt="" width={50}/>
                                            <h1 className="text-xs">True Wireless Earbuds</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={seventeen} alt="" width={50}/>
                                            <h1 className="text-xs">Personalised Products</h1>
                                        </div>
                                
                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={eighteen} alt="" width={50}/>
                                            <h1 className="text-xs">Neckbands</h1>
                                        </div>

                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                            <img src={nineteen} alt="" width={50}/>
                                            <h1 className="text-xs">Smart Watches</h1>
                                        </div>
                                    </div>
                                </div>
                                )}
                                {/* Hover More Button */}
                                {/* {isMoreHovered && (
                                <div className="absolute border px-4 top-full flex flex-col w-[10%] justify-center py-4 bg-white shadow-lg">
                                    <h1 className="text-[13px] text-gray-600 font-metropolis">Daily Deals</h1>
                                    <h1 className="text-[13px] text-gray-600 font-metropolis">Blogs</h1>
                                    <h1 className="text-[13px] text-gray-600 font-metropolis">Refer & Earn</h1>
                                    <h1 className="text-[13px] text-gray-600 font-metropolis">Careers</h1>
                                    <h1 className="text-[13px] text-gray-600 font-metropolis">Social Responsibility</h1>
                                    <h1 className="text-[13px] text-gray-600 font-metropolis">Store Locator</h1>
                                    <h1 className="text-[13px] text-gray-600 font-metropolis">{company.name} Community</h1>
                                </div>
                                )} */}
                            </div>
                    </div>

                    {/* xl laptop screen */}
                    {/* search + icons */}
                    <div className="hidden xl:flex gap-4 pt-1">
                        {/* input */}
                        <div className="flex bg-[#f4f5f7] items-start rounded-full w-[305px]" style={{padding:"8px 0px"}}>
                                <IoSearchOutline size={22} className="ml-2"/> 
                                <input
                                    type="text"
                                    placeholder={placeholders[currentPlaceholder]}
                                    className={`bg-[#eff4f7] ${animateClass}`}
                                />
                        </div>
                        {/* icons */}
                        <div className="flex items-center gap-4 cursor-pointer">
                            <FaRegUser size={20}/>
                            <HiOutlineShoppingBag size={24}/>
                        </div>
                    </div>



                    {/* md to xl laptop screen */}
                    <div className="hidden md:flex xl:hidden flex-row w-[55%] justify-between items-center">
                            {/* menu */}
                            <div className="hidden md:flex xl:hidden">
                                {
                                    !sideBar && 
                                    <IoMenu className="relative" size={28} onClick={()=> {
                                        setTimeout(()=> { 
                                            setSideBar(!sideBar)}
                                        ,200)
                                    }}/> 
                                }
                                {
                                    sideBar &&
                                    <RxCross2 className="relative" size={28} onClick={()=> {
                                        setTimeout(()=> { 
                                            setSideBar(!sideBar)}
                                        ,200)
                                    }}/> 
                                }
                                {
                                    sideBar && (
                                        <div className={`w-[25rem] px-6 absolute bg-white top-full mt-[0.4px] left-0  h-[33.6rem] ${openCategories === true ? "max-h-[90vh] overflow-y-auto" : "h-[33.6rem]"} ${openMore === true ? "max-h-[90vh] overflow-y-auto" : "h-[33.6rem]"}`}>
                                            <div className="flex flex-col items-center mt-3 gap-4">
                                                <div className={`${openCategories === true ? "bg-[#edeff4]" : "bg-white"} h-12 rounded-lg w-full flex justify-between items-center`}>
                                                    <h1 className="font-semibold">Categories</h1>
                                                    { !openCategories &&
                                                        <GoPlus onClick={()=> {
                                                            setTimeout(()=> {
                                                                setOpenCategories(!openCategories)
                                                            },300)
                                                        }} className="text-gray-300" size={28}/>
                                                    }

                                                    { openCategories &&
                                                        <FiMinus onClick={()=> {
                                                            setTimeout(()=> {
                                                                setOpenCategories(!openCategories)
                                                            },300)
                                                        }} className="text-gray-300" size={28}/>
                                                    }
                                                </div>
                                                {
                                                    openCategories && (
                                                        <div className="top-full mx-auto w-full left-12 mt-[1px] bg-white rounded-md">
                                                            <div className="grid grid-cols-3 gap-8 px-2">
                                                                {/* first */}
                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={first} alt="" width={50}/>
                                                                    <h1 className="text-xs">True Wireless Earbuds</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={second} alt="" width={50}/>
                                                                    <h1 className="text-xs">Personalised Products</h1>
                                                                </div>
                                                        
                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={third} alt="" width={50}/>
                                                                    <h1 className="text-xs">Neckbands</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={fourth} alt="" width={50}/>
                                                                    <h1 className="text-xs">Smart Watches</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={fifth} alt="" width={50}/>
                                                                    <h1 className="text-xs">Wireless Headphones</h1>
                                                                </div>

                                                                {/* second */}
                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={six} alt="" width={50}/>
                                                                    <h1 className="text-xs">True Wireless Earbuds</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={seven} alt="" width={50}/>
                                                                    <h1 className="text-xs">Personalised Products</h1>
                                                                </div>
                                                        
                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={eight} alt="" width={50}/>
                                                                    <h1 className="text-xs">Neckbands</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={nine} alt="" width={50}/>
                                                                    <h1 className="text-xs">Smart Watches</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={ten} alt="" width={50}/>
                                                                    <h1 className="text-xs">Wireless Headphones</h1>
                                                                </div>

                                                                {/* third */}
                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={elevan} alt="" width={50}/>
                                                                    <h1 className="text-xs">True Wireless Earbuds</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={twelve} alt="" width={50}/>
                                                                    <h1 className="text-xs">Personalised Products</h1>
                                                                </div>
                                                        
                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={thirteen} alt="" width={50}/>
                                                                    <h1 className="text-xs">Neckbands</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={fourteen} alt="" width={50}/>
                                                                    <h1 className="text-xs">Smart Watches</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={fifteen} alt="" width={50}/>
                                                                    <h1 className="text-xs">Wireless Headphones</h1>
                                                                </div>

                                                                {/* fourth */}
                                                                {/* <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={sixteen} alt="" width={50}/>
                                                                    <h1 className="text-xs">True Wireless Earbuds</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={seventeen} alt="" width={50}/>
                                                                    <h1 className="text-xs">Personalised Products</h1>
                                                                </div>
                                                        
                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={eighteen} alt="" width={50}/>
                                                                    <h1 className="text-xs">Neckbands</h1>
                                                                </div>

                                                                <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                    <img src={nineteen} alt="" width={50}/>
                                                                    <h1 className="text-xs">Smart Watches</h1>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                <div className="h-12 rounded-lg w-full flex justify-between items-center">
                                                    <h1 className="font-semibold">{company.name} Personalisation</h1>
                                                    <MdOutlineKeyboardArrowRight className="text-gray-300" size={28}/>
                                                </div>

                                                <div className="h-12 rounded-lg w-full flex justify-between items-center">
                                                    <h1 className="font-semibold">Corporate Orders</h1>
                                                    <MdOutlineKeyboardArrowRight className="text-gray-300" size={28}/>
                                                </div>

                                                <div className={`${openMore === true ? "bg-[#edeff4]" : "bg-white"} h-12 rounded-lg w-full flex justify-between items-center`}>
                                                    <h1 className="font-semibold">More</h1>
                                                    { !openMore &&
                                                        <GoPlus onClick={()=> {
                                                            setTimeout(()=> {
                                                                setOpenMore(!openMore)
                                                            },300)
                                                        }} className="text-gray-300" size={28}/>
                                                    }

                                                    { openMore &&
                                                        <FiMinus onClick={()=> {
                                                            setTimeout(()=> {
                                                                setOpenMore(!openMore)
                                                            },300)
                                                        }} className="text-gray-300" size={28}/>
                                                    }
                                                </div>
                                                {
                                                    openMore && (
                                                        <div className="w-full">
                                                            <div className="w-[90%] mx-auto flex flex-col text-start gap-4">
                                                                <h1>Daily Deals</h1>
                                                                <h1>Blogs</h1>
                                                                <h1>Refer & Earn</h1>
                                                                <h1>Careers</h1>
                                                                <h1>Social Responsibility</h1>
                                                                <h1>Store Locator</h1>
                                                                <h1>{company.name} Community</h1>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                <div className="h-12 rounded-lg w-full flex justify-between items-center">
                                                    <h1 className="font-semibold">Track Your Order</h1>
                                                    <MdOutlineKeyboardArrowRight className="text-gray-300" size={28}/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            {/* boat text */}
                            <div className="hidden md:flex xl:hidden">
                                <p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 151.848 62.372"
                                        height="35.372"
                                        width="85.848"
                                        data-name="Group 205728"
                                        id="Group_205728"
                                    >
                                        <g
                                        transform="translate(0 0)"
                                        data-name="Group 208975"
                                        id="Group_208975"
                                        >
                                        <path
                                            fill="#1a2024"
                                            transform="translate(-268.85 -104.669)"
                                            d="M328.831,120.079a18.374,18.374,0,0,1,14.5,6.724q5.8,6.724,5.8,16.779,0,10.005-5.8,16.7a19.108,19.108,0,0,1-29.05,0q-5.849-6.7-5.849-16.7,0-10.061,5.849-16.779a18.508,18.508,0,0,1,14.55-6.724m0,42.195a14.177,14.177,0,0,0,11.261-5.321,22.018,22.018,0,0,0-.02-26.762,14.132,14.132,0,0,0-11.241-5.4,14.278,14.278,0,0,0-11.333,5.346,22.042,22.042,0,0,0,0,26.814,14.3,14.3,0,0,0,11.333,5.321"
                                            data-name="Path 1"
                                            id="Path_1"
                                        />
                                        <path
                                            fill="#1a2024"
                                            transform="translate(-776.859 -0.1)"
                                            d="M911.15.115v15.3H926v4.017H911.15V46.866q0,6.628,1.236,8.711t6.649,2.079a26.216,26.216,0,0,0,9.672-2.256v4.714a27.981,27.981,0,0,1-10.935,2.359,14.251,14.251,0,0,1-8.75-2.614,8.478,8.478,0,0,1-3.516-7.219V19.429h-14.27l4.576-4.017h9.694V4.429l3.86-4.314Z"
                                            data-name="Path 2"
                                            id="Path_2"
                                        />
                                        <path
                                            fill="#ed1c24"
                                            transform="translate(-513.351 -105.768)"
                                            d="M639.38,167.836H624.387l4.282-8.3h-29.08l4.424,8.3H588.931l18.339-46.5H621.1ZM621.53,153.37l-7.286-20.019-8.976,25.411Z"
                                            data-name="Path 3"
                                            id="Path_3"
                                        />
                                        <path
                                            fill="#1a2024"
                                            transform="translate(0 0.001)"
                                            d="M0,59.12V0H1.548L4.419,4.32,4.426,21.7a18.2,18.2,0,0,1,13.86-6.452c3.772-.093,10.359,1.9,13.782,5.739a22.932,22.932,0,0,1,5.969,15.866c0,7.779-2.031,14.2-6.258,18.89S21.7,62.276,14.694,62.276A35.24,35.24,0,0,1,0,59.12M4.436,26.759,4.348,55.922a24.73,24.73,0,0,0,10.079,1.712C19.783,57.634,25.3,56,28.8,52.123c3.08-2.887,5.071-8.949,5.194-14.883A18.918,18.918,0,0,0,29.7,24.6,13.825,13.825,0,0,0,18.667,19.36c-5.052-.066-9.539,1.376-14.231,7.4"
                                            data-name="Path 4"
                                            id="Path_4"
                                        />
                                        </g>
                                    </svg>
                                </p>
                            </div>
                    </div>

                    {/* icons(3) */}
                    <div className="hidden md:flex xl:hidden items-center gap-3">
                        <IoSearchOutline size={22}/>
                        <FaRegUser size={20}/>
                        <HiOutlineShoppingBag size={22}/>
                    </div>





                    {/* start to ms laptop screen */}
                    {/* menu */}
                    <div className="flex md:hidden items-center gap-2">
                        {
                            !sidebarMini && 
                            <IoMenu className="relative" size={28} onClick={()=> {
                                setTimeout(()=> { 
                                    setSideBarMini(!sidebarMini)}
                                ,200)
                            }}/> 
                        }
                        {
                            sidebarMini &&
                            <RxCross2 className="relative" size={28} onClick={()=> {
                                setTimeout(()=> { 
                                    setSideBarMini(!sidebarMini)}
                                ,200)
                            }}/> 
                        }

                        {
                            sidebarMini && (
                                <div className={`w-[95%] px-6 absolute bg-white top-full mt-[0.4px] left-0 h-[33.6rem] ${openCategoriesMini === true ? "max-h-[90vh] overflow-y-auto" : "h-[33.6rem]"} ${openMoreMini === true ? "max-h-[90vh] overflow-y-auto" : "h-[33.6rem]"}`}>
                                    <div className="flex flex-col items-center mt-3 gap-4">
                                        <div className={`${openCategoriesMini === true ? "bg-[#edeff4]" : "bg-white"} h-12 rounded-lg w-full flex justify-between items-center`}>
                                            <h1 className="font-semibold">Categories</h1>
                                            { !openCategoriesMini &&
                                                <GoPlus onClick={()=> {
                                                    setTimeout(()=> {
                                                        setOpenCategoriesMini(!openCategoriesMini)
                                                    },300)
                                                }} className="text-gray-300" size={28}/>
                                            }

                                            { openCategoriesMini &&
                                                <FiMinus onClick={()=> {
                                                    setTimeout(()=> {
                                                        setOpenCategoriesMini(!openCategoriesMini)
                                                    },300)
                                                }} className="text-gray-300" size={28}/>
                                            }
                                        </div>
                                        {
                                            openCategoriesMini && (
                                                <div className="top-full mx-auto w-full left-12 mt-[1px] bg-white rounded-md">
                                                    <div className="grid grid-cols-3 gap-8 px-2">
                                                        {/* first */}
                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={first} alt="" width={50}/>
                                                            <h1 className="text-xs">True Wireless Earbuds</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={second} alt="" width={50}/>
                                                            <h1 className="text-xs">Personalised Products</h1>
                                                        </div>
                                                
                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={third} alt="" width={50}/>
                                                            <h1 className="text-xs">Neckbands</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={fourth} alt="" width={50}/>
                                                            <h1 className="text-xs">Smart Watches</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={fifth} alt="" width={50}/>
                                                            <h1 className="text-xs">Wireless Headphones</h1>
                                                        </div>

                                                        {/* second */}
                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={six} alt="" width={50}/>
                                                            <h1 className="text-xs">True Wireless Earbuds</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={seven} alt="" width={50}/>
                                                            <h1 className="text-xs">Personalised Products</h1>
                                                        </div>
                                                
                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={eight} alt="" width={50}/>
                                                            <h1 className="text-xs">Neckbands</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={nine} alt="" width={50}/>
                                                            <h1 className="text-xs">Smart Watches</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={ten} alt="" width={50}/>
                                                            <h1 className="text-xs">Wireless Headphones</h1>
                                                        </div>

                                                        {/* third */}
                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={elevan} alt="" width={50}/>
                                                            <h1 className="text-xs">True Wireless Earbuds</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={twelve} alt="" width={50}/>
                                                            <h1 className="text-xs">Personalised Products</h1>
                                                        </div>
                                                
                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={thirteen} alt="" width={50}/>
                                                            <h1 className="text-xs">Neckbands</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={fourteen} alt="" width={50}/>
                                                            <h1 className="text-xs">Smart Watches</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={fifteen} alt="" width={50}/>
                                                            <h1 className="text-xs">Wireless Headphones</h1>
                                                        </div>

                                                        {/* fourth */}
                                                        {/* <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={sixteen} alt="" width={50}/>
                                                            <h1 className="text-xs">True Wireless Earbuds</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={seventeen} alt="" width={50}/>
                                                            <h1 className="text-xs">Personalised Products</h1>
                                                        </div>
                                                
                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={eighteen} alt="" width={50}/>
                                                            <h1 className="text-xs">Neckbands</h1>
                                                        </div>

                                                        <div className="w-[80%] flex gap-2 justify-center items-center">
                                                            <img src={nineteen} alt="" width={50}/>
                                                            <h1 className="text-xs">Smart Watches</h1>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            )
                                        }

                                        <div className="h-12 rounded-lg w-full flex justify-between items-center">
                                            <h1 className="font-semibold">{company.name} Personalisation</h1>
                                            <MdOutlineKeyboardArrowRight className="text-gray-300" size={28}/>
                                        </div>

                                        <div className="h-12 rounded-lg w-full flex justify-between items-center">
                                            <h1 className="font-semibold">Corporate Orders</h1>
                                            <MdOutlineKeyboardArrowRight className="text-gray-300" size={28}/>
                                        </div>

                                        <div className={`${openMore === true ? "bg-[#edeff4]" : "bg-white"} h-12 rounded-lg w-full flex justify-between items-center`}>
                                            <h1 className="font-semibold">More</h1>
                                            { !openMoreMini &&
                                                <GoPlus onClick={()=> {
                                                    setTimeout(()=> {
                                                        setOpenMoreMini(!openMoreMini)
                                                    },300)
                                                }} className="text-gray-300" size={28}/>
                                            }

                                            { openMoreMini &&
                                                <FiMinus onClick={()=> {
                                                    setTimeout(()=> {
                                                        setOpenMoreMini(!openMoreMini)
                                                    },300)
                                                }} className="text-gray-300" size={28}/>
                                            }
                                        </div>
                                        {
                                            openMoreMini && (
                                                <div className="w-full">
                                                    <div className="w-[90%] mx-auto flex flex-col text-start gap-4">
                                                        <h1>Daily Deals</h1>
                                                        <h1>Blogs</h1>
                                                        <h1>Refer & Earn</h1>
                                                        <h1>Careers</h1>
                                                        <h1>Social Responsibility</h1>
                                                        <h1>Store Locator</h1>
                                                        <h1>{company.name} Community</h1>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <div className="h-12 rounded-lg w-full flex justify-between items-center">
                                            <h1 className="font-semibold">Track Your Order</h1>
                                            <MdOutlineKeyboardArrowRight className="text-gray-300" size={28}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                            <p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 151.848 62.372"
                                    height="25.372"
                                    width="85.848"
                                    data-name="Group 205728"
                                    id="Group_205728"
                                >
                                    <g
                                    transform="translate(0 0)"
                                    data-name="Group 208975"
                                    id="Group_208975"
                                    >
                                    <path
                                        fill="#1a2024"
                                        transform="translate(-268.85 -104.669)"
                                        d="M328.831,120.079a18.374,18.374,0,0,1,14.5,6.724q5.8,6.724,5.8,16.779,0,10.005-5.8,16.7a19.108,19.108,0,0,1-29.05,0q-5.849-6.7-5.849-16.7,0-10.061,5.849-16.779a18.508,18.508,0,0,1,14.55-6.724m0,42.195a14.177,14.177,0,0,0,11.261-5.321,22.018,22.018,0,0,0-.02-26.762,14.132,14.132,0,0,0-11.241-5.4,14.278,14.278,0,0,0-11.333,5.346,22.042,22.042,0,0,0,0,26.814,14.3,14.3,0,0,0,11.333,5.321"
                                        data-name="Path 1"
                                        id="Path_1"
                                    />
                                    <path
                                        fill="#1a2024"
                                        transform="translate(-776.859 -0.1)"
                                        d="M911.15.115v15.3H926v4.017H911.15V46.866q0,6.628,1.236,8.711t6.649,2.079a26.216,26.216,0,0,0,9.672-2.256v4.714a27.981,27.981,0,0,1-10.935,2.359,14.251,14.251,0,0,1-8.75-2.614,8.478,8.478,0,0,1-3.516-7.219V19.429h-14.27l4.576-4.017h9.694V4.429l3.86-4.314Z"
                                        data-name="Path 2"
                                        id="Path_2"
                                    />
                                    <path
                                        fill="#ed1c24"
                                        transform="translate(-513.351 -105.768)"
                                        d="M639.38,167.836H624.387l4.282-8.3h-29.08l4.424,8.3H588.931l18.339-46.5H621.1ZM621.53,153.37l-7.286-20.019-8.976,25.411Z"
                                        data-name="Path 3"
                                        id="Path_3"
                                    />
                                    <path
                                        fill="#1a2024"
                                        transform="translate(0 0.001)"
                                        d="M0,59.12V0H1.548L4.419,4.32,4.426,21.7a18.2,18.2,0,0,1,13.86-6.452c3.772-.093,10.359,1.9,13.782,5.739a22.932,22.932,0,0,1,5.969,15.866c0,7.779-2.031,14.2-6.258,18.89S21.7,62.276,14.694,62.276A35.24,35.24,0,0,1,0,59.12M4.436,26.759,4.348,55.922a24.73,24.73,0,0,0,10.079,1.712C19.783,57.634,25.3,56,28.8,52.123c3.08-2.887,5.071-8.949,5.194-14.883A18.918,18.918,0,0,0,29.7,24.6,13.825,13.825,0,0,0,18.667,19.36c-5.052-.066-9.539,1.376-14.231,7.4"
                                        data-name="Path 4"
                                        id="Path_4"
                                    />
                                    </g>
                                </svg>
                            </p>
                    </div>

                    {/* icons(3) */}
                    <div className="flex md:hidden items-center gap-3">
                        <IoSearchOutline size={22}/>
                        <FaRegUser size={20}/>
                        <HiOutlineShoppingBag size={22}/>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
  );
};

export default BoatSection;