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
import first from '../../../assets/Categories/first.webp'
import second from '../../../assets/Categories/last.webp'
import third from '../../../assets/Categories/second.png'
import fourth from '../../../assets/Categories/third.webp'
import fifth from '../../../assets/Categories/fifth.webp'
import six from '../../../assets/Categories/six.webp'
import seven from '../../../assets/Categories/seven.webp'
import eight from '../../../assets/Categories/eight.webp'
import nine from '../../../assets/Categories/nine.webp'
import ten from '../../../assets/Categories/ten.png'
import elevan from '../../../assets/Categories/elevem.webp'
import twelve from '../../../assets/Categories/twelve.webp'
import thirteen from '../../../assets/Categories/thirteen.webp'
import fourteen from '../../../assets/Categories/fourteen.webp'
import fifteen from '../../../assets/Categories/fifteen.webp'
import sixteen from '../../../assets/Categories/sixteen.webp'
import seventeen from '../../../assets/Categories/seventeen.webp'
import eighteen from '../../../assets/Categories/eighteen.png'
import nineteen from '../../../assets/Categories/nineteen.webp'
import { company } from "../../../constant/contant";
import deleteIcon from '../../../assets/delete.png';
import sampleImg from '../../../assets/sampleImg.avif';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";


const BoatSection = () => {

  const [openCategories,setOpenCategories] = useState(false);
  const [openMore,setOpenMore] = useState(false);
  const [sideBar,setSideBar] = useState(false);
  const [loginPopup,setLoginPopup] = useState(false);
  const [rightPopup,setRightPopup] = useState(false);
  const [paymentPopup,setPaymentPopup] = useState(false);

  const [openInput,setOpenInput] = useState(false);

  const [openCategoriesMini,setOpenCategoriesMini] = useState(false);
  const [openMoreMini,setOpenMoreMini] = useState(false);
  const [sidebarMini,setSideBarMini] = useState(false);

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0); 
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

  const categoriesData = [
    { image: first, title: "True Wireless Earbuds" },
    { image: second, title: "Personalised Products" },
    { image: third, title: "Neckbands" },
    { image: fourth, title: "Smart Watches" },
    { image: fifth, title: "Wireless Speakers" },
    { image: six, title: "Wireless Speakers" },
    { image: seven, title: "Wired Headphones" },
    { image: eight, title: "Wired Earphones" },
    { image: nine, title: "Soundbars" },
    { image: ten, title: "Gaming Headphones" },
    { image: elevan, title: "Party Speakers" },
    { image: twelve, title: "Misfit Trimmers" },
    { image: thirteen, title: "Chargers" },
    { image: fourteen, title: "Power Banks" },
    { image: fifteen, title: "Cables" },
    { image: sixteen, title: "Car Accessories" },
    { image: seventeen, title: "Superhero Collection" },
    { image: eighteen, title: "Trabel for Women" },
    { image: nineteen, title: "Limited Edition" }
];

const openInputData = [
    { image: first, title: "True Wireless Earbuds" },
    { image: second, title: "Personalised Products" },
    { image: third, title: "Neckbands" },
    { image: fourth, title: "Smart Watches" },
    { image: fifth, title: "Wireless Speakers" },
    { image: six, title: "Wireless Speakers" },
    { image: seven, title: "Wired Headphones" },
    { image: eight, title: "Wired Earphones" },
    { image: nine, title: "Soundbars" },
    { image: ten, title: "Gaming Headphones" },
    { image: sixteen, title: "Car Accessories" },
]

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
                                        <li className="relative group cursor-pointer font-medium hover:opacity-100">
                                            <button className="relative text-[14px] hover:text-[15px] flex items-center gap-2">
                                                Categories <FaChevronDown size={12} />
                                                <span className="absolute right-[30%] -bottom-1 w-0 h-[2px] bg-[#c32929] 
                                                    transition-all duration-500 group-hover:w-[30%] group-hover:right-8 
                                                    group-focus:w-[50%] group-focus:left-0"></span>
                                                    {/* Hover categories content */}
                                                    <div className="absolute top-0 left-0 transition-transform  
                                                        md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible 
                                                        duration-300 ease-in-out z-40 xl:min-w-[1180px] 2xl:min-w-[1370px] 3xl:min-w-[1450px]">

                                                        <div className="absolute top-full w-[100%] xl:left-[-130px] 2xl:left-[-150px] 3xl:left-[-190px] mt-[1px] rounded-md py-[19px]"
                                                        >
                                                            <div className="absolute mt-4 bg-white  w-full grid grid-cols-5 py-8 gap-4 pr-20">
                                                                {
                                                                    categoriesData.map((ele,id) => (
                                                                        <div key={id} className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                            <img src={ele.image} alt={ele.title} width={50}/>
                                                                            <h1 className="text-xs w-32">{ele.title}</h1>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                            </button>
                                        </li>
                                        <li className="hover:text-[15px] hover:font-semibold">{company.name} Personalisation</li>
                                        <li className="hover:text-[15px] hover:font-semibold">Corporate Orders</li>
                                        {/* <li className="relative">
                                            <span className="flex items-center gap-2 hover:text-[15px] hover:font-semibold cursor-pointer">
                                                More <FaChevronDown size={12} />
                                            </span>
=
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
                                        </li> */}
                                        <li className="relative group cursor-pointer font-medium hover:opacity-100">
                                            <button className="relative text-[14px] hover:text-[15px] flex items-center gap-2">
                                                More <FaChevronDown size={12} />
                                                <span className="absolute right-[30%] -bottom-1 w-0 h-[2px] bg-[#c32929] 
                                                    transition-all duration-500 group-hover:w-[30%] group-hover:right-8 
                                                    group-focus:w-[50%] group-focus:left-0"></span>
                                                    {/* Hover categories content */}
                                                    <div className="absolute top-0 left-0 transition-transform  
                                                        md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible 
                                                        duration-300 ease-in-out z-40 min-w-[200px] w-full">

                                                        <div className="absolute top-full w-[100%] left-[-40px] mt-[1px] rounded-md py-[28px]"
                                                        >
                                                        <div className="absolute mt-6 bg-white w-full grid grid-cols-5 py-0">
                                                            <div className="flex flex-col items-center text-left bg-white py-4 w-[100%] absolute">
                                                                <ul className="flex flex-col gap-1">
                                                                    <li className="text-gray-800 hover:text-gray-500">Daily Deals</li>
                                                                    <li className="text-gray-800 hover:text-gray-500">Blogs</li>
                                                                    <li className="text-gray-800 hover:text-gray-500">Refer & Earn</li>
                                                                    <li className="text-gray-800 hover:text-gray-500">Careers</li>
                                                                    <li className="text-gray-800 hover:text-gray-500">Social Responsibility</li>
                                                                    <li className="text-gray-800 hover:text-gray-500">Store Locator</li>
                                                                    <li className="text-gray-800 hover:text-gray-500">boAt Community</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                        </div>

                        {/* xl laptop screen */}
                        {/* search + icons */}
                        <div className="hidden xl:flex gap-4 pt-1">
                            {/* input */}
                            {openInput && (
                                <div
                                    className="fixed inset-0 transition-opacity duration-1000 z-40"
                                    onClick={() => setOpenInput(false)}  
                                ></div>
                            )}
                            <div onClick={()=> setOpenInput(true)} className="flex bg-[#f4f5f7] cursor-pointer items-start rounded-full w-[305px] z-50" style={{padding:"8px 0px"}}>
                                    <IoSearchOutline size={22} className="ml-2"/> 
                                    <input
                                        type="text"
                                        placeholder={placeholders[currentPlaceholder]}
                                        className={`bg-[#eff4f7] ${animateClass} focus:outline-none`}
                                    />
                            </div>
                                    {
                                        openInput &&
                                        <div className="shadow-md shadow-gray-500 absolute top-10 z-40 bg-white min-w-[250px] max-w-[305px] min-h-[450px]">
                                            <div className="pt-8 pl-3">
                                                <h1 className="font-semibold">Most Searched And Bought</h1>
                                                <div className="grid grid-cols-2 gap-6 w-full pt-6">
                                                    {
                                                        openInputData.map((ele,id) =>(
                                                            <div key={id} className="w-[100%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={ele.image} alt={ele.title} width={40}/>
                                                                <h1 className="text-xs w-24">{ele.title}</h1>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    }
                            {/* icons */}
                            <div className="flex items-center gap-4 cursor-pointer">
                                {loginPopup && (
                                    <div
                                        className="fixed inset-0 transition-opacity duration-1000 z-40"
                                        onClick={() => setLoginPopup(false)}  
                                    ></div>
                                )}
                                <FaRegUser className="relative cursor-pointer" onClick={()=> setLoginPopup(true)} size={20}/>
                                    {
                                        loginPopup && 
                                        <div className="absolute flex flex-col bg-white border-gray-500 z-50 top-20 right-3 py-2 min-w-[220px] rounded-md transition-all duration-300 gap-2"
                                        style={{"box-shadow": "0px 0px 4px 0px rgba(100,115,114,1)"}} >
                                            <div className="mx-auto flex w-[90%] justify-between items-center">
                                                <h1 className="font-semibold">Hi boAthead!</h1>
                                                <button onClick={()=> setLoginPopup(false)}><RxCross2 size={20}/></button>
                                            </div>
                                            <div className="bg-gray-800 py-1 rounded-lg items-center justify-center text-white mx-auto flex w-[90%]">
                                                <button>Login</button>
                                            </div>
                                        </div>
                                    }

                                {rightPopup && (
                                    <div
                                        className="fixed inset-0 bg-black/50 transition-opacity duration-1000 z-40"
                                        onClick={() => setRightPopup(false)}
                                    ></div>
                                )}
                                <HiOutlineShoppingBag className="relative cursor-pointer" onClick={()=> setRightPopup(true)} size={24}/>
                                    {
                                        rightPopup && 
                                        (
                                            <div
                                            className={`popup-container open fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
                                                rightPopup ? "translate-x-0" : "translate-x-full"
                                            }`}
                                            // ref={popupRef}
                                            >
                                            <div className="w-[100%] h-[10%] mx-auto flex justify-between items-center p-4">
                                                <h1 className="text-xl font-semibold">Your Cart</h1>
                                                <RxCross2 onClick={()=> setRightPopup(false)} size={20}/>
                                            </div>
                                            <div className="flex h-[80%] flex-col items-center justify-start">
                                                {/* first */}
                                                <div className="w-full flex px-4 py-2 gap-2 border border-t-white border-b-gray-300">
                                                    {/* img */}
                                                    <div>
                                                        <img width={100} className="bg-gray-100 rounded-lg p-1" src={sampleImg} alt="img"/>
                                                    </div>

                                                    {/* text */}
                                                    <div className="w-[75%]">
                                                        <div className="flex justify-between items-center mx-auto">
                                                            <h1 className="font-semibold">Airdopes Alpha</h1>
                                                            <button>
                                                                <img width={16} src={deleteIcon} alt="delete_logo"/>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <h1 className="font-bold text-lg text-gray-700">₹1,798</h1>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <button className="text-[0.8rem] bg-gray-100 py-1 px-3 rounded-md">JetBlack</button>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <button className="bg-gray-100 p-2 rounded-l-lg"><FaMinus size={12}/></button>
                                                                <h1>02</h1>
                                                                <button className="bg-gray-100 p-2 rounded-r-lg"><FaPlus size={12}/></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* total */}
                                            <div className="flex h-[10%] justify-between items-center mx-auto w-full px-4 border border-b-white border-t-gray-300">
                                                <div className="flex justify-center items-center gap-1">
                                                   <div className="">
                                                        <h2 className="font-extrabold">₹1,798</h2>
                                                        <h3 style={{fontStyle:"italic"}} className="text-gray-500 text-[10px]">Inclusive of all taxes</h3>
                                                   </div>
                                                   <div className="">
                                                        { !paymentPopup && <FaChevronDown onClick={()=> setPaymentPopup(true)} size={12}/>}
                                                        { paymentPopup && <FaChevronUp onClick={()=> setPaymentPopup(false)} size={12}/>}
                                                    </div>
                                                </div>
                                                <div className="w-[60%]">
                                                    <button className="bg-gray-800 font-bold text-white py-3 rounded-md w-full">Pay Now</button>
                                                </div>
                                            </div>
                                            </div>
                                        )
                                    }
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
                                                                    {
                                                                         categoriesData.map((ele,id)=> (
                                                                            <div key={id} className="w-[80%] flex gap-2 justify-center items-center">
                                                                                <img src={ele.image} alt={ele.title} width={45}/>
                                                                                <h1 className="text-xs w-12">{ele.title}</h1>
                                                                            </div>
                                                                         ))
                                                                    }
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
                            {openInput && (
                                <div
                                    className="fixed inset-0 transition-opacity duration-1000 z-40"
                                    onClick={() => setOpenInput(false)}  
                                ></div>
                            )}
                            { !openInput && <IoSearchOutline onClick={()=> setOpenInput(true)} className="relative" size={22}/> }
                                { openInput && 
                                    <div className="relative flex bg-[#f4f5f7] items-start rounded-full w-[210px] z-50" style={{padding:"8px 4px"}}>
                                        <IoSearchOutline size={22}/>
                                        <input type="text"
                                        placeholder={placeholders[currentPlaceholder]}
                                        className={`bg-[#eff4f7] ${animateClass}`}/>
                                    </div>
                                }
                                {
                                    openInput &&
                                    <div className="shadow-md shadow-gray-500 absolute top-14 right-4 z-40 bg-white min-w-[250px] max-w-[305px] min-h-[450px]">
                                        <div className="pt-8 pl-3">
                                            <h1 className="font-semibold">Most Searched And Bought</h1>
                                            <div className="grid grid-cols-2 gap-4 w-full pt-6">
                                                {
                                                    openInputData.map((ele,id)=> (
                                                        <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                            <img src={ele.image} alt={ele.title} width={50}/>
                                                            <h1 className="text-xs w-20">{ele.title}</h1>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                {loginPopup && (
                                    <div
                                        className="fixed inset-0 transition-opacity duration-1000 z-40"
                                        onClick={() => setLoginPopup(false)}  
                                    ></div>
                                )}
                            <FaRegUser className="relative" onClick={()=> setLoginPopup(true)} size={20}/>
                                {
                                    loginPopup && 
                                    <div style={{"box-shadow": "0px 0px 4px 0px rgba(100,115,114,1)"}} className="absolute flex-col bg-white border-gray-500 z-50 top-[70px] right-3 py-2 min-w-[220px] transition-all duration-300 gap-2">
                                        <div className="mx-auto flex w-[90%] justify-between items-center">
                                            <h1 className="font-semibold text-red-600">Hi boAthead!</h1>
                                            <button onClick={()=> setLoginPopup(false)}><RxCross2 className="text-red-600" size={20}/></button>
                                        </div>
                                        <div className="bg-red-600 py-1 mt-1.5 items-center justify-center text-white mx-auto flex w-[90%]">
                                            <button>Login</button>
                                        </div>
                                    </div>
                                }
                                 {rightPopup && (
                                    <div
                                        className="fixed inset-0 bg-black/50 transition-opacity duration-1000 z-40"
                                        onClick={() => setRightPopup(false)}
                                    ></div>
                                )}
                            <HiOutlineShoppingBag className="relative cursor-pointer" onClick={()=> setRightPopup(true)} size={24}/>
                                    {
                                        rightPopup && 
                                        <div
                                            className={`popup-container open fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
                                                rightPopup ? "translate-x-0" : "translate-x-full"
                                            }`}
                                            // ref={popupRef}
                                        >
                                             <div className="w-[100%] h-[10%] mx-auto flex justify-between items-center p-4">
                                                <h1 className="text-xl font-semibold">Your Cart</h1>
                                                <RxCross2 onClick={()=> setRightPopup(false)} size={20}/>
                                            </div>
                                            <div className="flex h-[80%] flex-col items-center justify-start">
                                                {/* first */}
                                                <div className="w-full flex px-4 py-2 gap-2 border border-t-white border-b-gray-300">
                                                    {/* img */}
                                                    <div>
                                                        <img width={100} className="bg-gray-100 rounded-lg p-1" src={sampleImg} alt="img"/>
                                                    </div>

                                                    {/* text */}
                                                    <div className="w-[75%]">
                                                        <div className="flex justify-between items-center mx-auto">
                                                            <h1 className="font-semibold">Airdopes Alpha</h1>
                                                            <button>
                                                                <img width={16} src={deleteIcon} alt="delete_logo"/>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <h1 className="font-bold text-lg text-gray-700">₹1,798</h1>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <button className="text-[0.8rem] bg-gray-100 py-1 px-3 rounded-md">JetBlack</button>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <button className="bg-gray-100 p-2 rounded-l-lg"><FaMinus size={12}/></button>
                                                                <h1>02</h1>
                                                                <button className="bg-gray-100 p-2 rounded-r-lg"><FaPlus size={12}/></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* total */}
                                            <div className="flex h-[10%] justify-between items-center mx-auto w-full px-4 border border-b-white border-t-gray-300">
                                                <div className="flex justify-center items-center gap-1">
                                                   <div className="">
                                                        <h2 className="font-extrabold">₹1,798</h2>
                                                        <h3 style={{fontStyle:"italic"}} className="text-gray-500 text-[10px]">Inclusive of all taxes</h3>
                                                   </div>
                                                   <div className="">
                                                        { !paymentPopup && <FaChevronDown onClick={()=> setPaymentPopup(true)} size={12}/>}
                                                        { paymentPopup && <FaChevronUp onClick={()=> setPaymentPopup(false)} size={12}/>}
                                                    </div>
                                                </div>
                                                <div className="w-[60%]">
                                                    <button className="bg-gray-800 font-bold text-white py-3 rounded-md w-full">Pay Now</button>
                                                </div>
                                            </div>
                                      </div>
                                    }
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
                                                            {
                                                                categoriesData.map((ele,id)=> (
                                                                    <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                        <img src={ele.image} alt={ele.title} width={50}/>
                                                                        <h1 className="text-xs w-24">{ele.title}</h1>
                                                                    </div>
                                                                ))
                                                            }
                                                            <div className="w-[80%] flex gap-2 justify-center items-center">
                                                                <img src={first} alt="" width={50}/>
                                                                <h1 className="text-xs">True Wireless Earbuds</h1>
                                                            </div>
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
                            {openInput && (
                                <div
                                    className="fixed inset-0 transition-opacity duration-1000 z-40"
                                    onClick={() => setOpenInput(false)}  
                                ></div>
                            )}
                        { !openInput && <IoSearchOutline onClick={()=> setOpenInput(true)} className="relative" size={22}/> }
                                { openInput && 
                                    <div className="relative flex bg-[#f4f5f7] items-start rounded-full w-[210px] z-50" style={{padding:"8px 4px"}}>
                                        <IoSearchOutline size={22}/>
                                        <input type="text"
                                        placeholder={placeholders[currentPlaceholder]}
                                        className={`bg-[#eff4f7] ${animateClass}`}/>
                                    </div>
                                }
                                {
                                    openInput &&
                                    <div className="shadow-md shadow-gray-500 absolute top-14 right-4 z-40 bg-white min-w-[250px] max-w-[305px] min-h-[450px]">
                                        <div className="pt-8 pl-3">
                                            <h1 className="font-semibold">Most Searched And Bought</h1>
                                            <div className="grid grid-cols-2 gap-4 w-full pt-6">
                                                {
                                                    openInputData.map((ele,id)=> (
                                                        <div className="w-[100%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                            <img src={ele.image} alt={ele.title} width={50}/>
                                                            <h1 className="text-xs w-28">{ele.title}</h1>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                {loginPopup && (
                                    <div
                                        className="fixed inset-0 transition-opacity duration-1000 z-40"
                                        onClick={() => setLoginPopup(false)}  
                                    ></div>
                                )}
                            <FaRegUser className="relative" onClick={()=> setLoginPopup(true)} size={20}/>
                            {
                                        loginPopup && 
                                        <div
                                            className={`fixed bottom-0 left-0 right-0 w-[80%] rounded-t-lg mx-auto max-w-[770px] bg-gray-100 shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
                                                loginPopup ? "translate-x-0" : "translate-x-full"
                                            }`}
                                        >
                                            <div className=" rounded-full w-full flex justify-end">
                                                <span></span>
                                                <RxCross2 onClick={()=> setLoginPopup(false)} className="w-4 cursor-pointer bg-gray-200 m-2 rounded-full p-0.5" size={16}/>
                                            </div>
                                            <div className="flex flex-col w-full mx-auto justify-center items-center gap-2 ">
                                                <h1 className="text-2xl font-semibold">Get <span className="font-bold">started</span></h1>
                                                <h1 className="text-base font-semibold">Please enter your Mobile Number to continue</h1>
                                            </div>
                                            <div className="mt-6 bg-gray-200 w-full">
                                                <div className="w-[90%] flex flex-col justify-center mx-auto mt-6">
                                                    <h1 className="font-semibold py-2">Enter Mobile Number</h1>
                                                    <input type="text" placeholder="+91 Type Here" className="pl-4 mt-2 bg-white py-2.5 rounded-lg"/>
                                                    <button className="bg-gray-300 mt-6 font-bold py-2.5 rounded-lg">SEND OTP</button>
                                                </div>
                                                <div>
                                                    <h1 className="text-gray-500 text-[11px] my-6 flex justify-center w-full mx-auto font-bold">By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy.</h1>
                                                </div>
                                            </div>
                                      </div>
                                    }
                                     {rightPopup && (
                                        <div
                                            className="fixed inset-0 bg-black/50 transition-opacity duration-1000 z-40"
                                            onClick={() => setRightPopup(false)}
                                        ></div>
                                    )}
                            <HiOutlineShoppingBag className="relative cursor-pointer" onClick={()=> setRightPopup(true)} size={24}/>
                                    {
                                        rightPopup && 
                                        <div
                                            className={`popup-container open fixed top-0 right-0 h-screen min-w-[250px] base:min-w-[320px] ac:min-w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
                                                rightPopup ? "translate-x-0" : "translate-x-full"
                                            }`}
                                            // ref={popupRef}
                                        >
                                             <div className="w-[100%] h-[10%] mx-auto flex justify-between items-center p-4">
                                                <h1 className="text-xl font-semibold">Your Cart</h1>
                                                <RxCross2 onClick={()=> setRightPopup(false)} size={20}/>
                                            </div>
                                            <div className="flex h-[80%] flex-col items-center justify-start">
                                                {/* first */}
                                                <div className="w-full flex px-4 py-2 gap-2 border border-t-white border-b-gray-300">
                                                    {/* img */}
                                                    <div>
                                                        <img width={100} className="bg-gray-100 rounded-lg p-1" src={sampleImg} alt="img"/>
                                                    </div>

                                                    {/* text */}
                                                    <div className="w-[75%]">
                                                        <div className="flex justify-between items-center mx-auto">
                                                            <h1 className="font-semibold">Airdopes Alpha</h1>
                                                            <button>
                                                                <img width={16} src={deleteIcon} alt="delete_logo"/>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <h1 className="font-bold text-lg text-gray-700">₹1,798</h1>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <button className="text-[0.8rem] bg-gray-100 py-1 px-3 rounded-md">JetBlack</button>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <button className="bg-gray-100 p-2 rounded-l-lg"><FaMinus size={12}/></button>
                                                                <h1>02</h1>
                                                                <button className="bg-gray-100 p-2 rounded-r-lg"><FaPlus size={12}/></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* total */}
                                            <div className="flex h-[10%] justify-between items-center mx-auto w-full px-4 border border-b-white border-t-gray-300">
                                                <div className="flex justify-center items-center gap-1">
                                                   <div className="">
                                                        <h2 className="font-extrabold">₹1,798</h2>
                                                        <h3 style={{fontStyle:"italic"}} className="text-gray-500 text-[10px]">Inclusive of all taxes</h3>
                                                   </div>
                                                   <div className="">
                                                        { !paymentPopup && <FaChevronDown onClick={()=> setPaymentPopup(true)} size={12}/>}
                                                        { paymentPopup && <FaChevronUp onClick={()=> setPaymentPopup(false)} size={12}/>}
                                                    </div>
                                                </div>
                                                <div className="w-[60%]">
                                                    <button className="bg-gray-800 font-bold text-white py-3 rounded-md w-full">Pay Now</button>
                                                </div>
                                            </div>
                                      </div>
                                    }
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
  );
};

export default BoatSection;