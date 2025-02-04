import React, { useEffect, useState,useRef } from "react";
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
  const [loginPopup,setLoginPopup] = useState(false);
  const [rightPopup,setRightPopup] = useState(false);
  const popupRef = useRef(null);
  const loginRef = useRef(null);


  const [openCategoriesMini,setOpenCategoriesMini] = useState(false);
  const [openMoreMini,setOpenMoreMini] = useState(false);
  const [sidebarMini,setSideBarMini] = useState(false);

//   const [isHovered, setIsHovered] = useState(false);
//   const [isMoreHovered, setIsMoreHovered] = useState(false);

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0); // Track current placeholder index
  const [animateClass, setAnimateClass] = useState("animate-slide-in");

  const placeholders = [
    "Search \"Speakers\"",
    "Search \"Smartwatches\"",
    "Search \"Earphones\"",
  ];


  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setRightPopup(false);
      }
    }

    if (rightPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [rightPopup]);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setLoginPopup(false);
      }
    }

    if (loginPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginPopup]);

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

                    {rightPopup && (
                        <div
                            className="fixed inset-0 bg-black/50 transition-opacity duration-1000 z-40"
                            onClick={() => setRightPopup(false)}  // Clicking outside closes popup
                        ></div>
                    )}

                    {loginPopup && (
                        <div
                            className="flex md:hidden fixed inset-0 bg-black/50 transition-opacity duration-1000 z-40"
                            onClick={() => setLoginPopup(false)}  // Clicking outside closes popup
                        ></div>
                    )}

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
                                        {/* <li className="flex items-center gap-2 hover:text-[15px] hover:font-semibold relative"
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={()=> setIsHovered(false)}
                                        >Categories <FaChevronDown size={12}/></li> */}
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
                                                        <div className="absolute mt-4 bg-white w-full grid grid-cols-5 py-8 gap-4 pr-20">
                                                            {/* first */}
                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={first} alt="" width={50}/>
                                                                <h1 className="text-xs">True Wireless Earbuds</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={second} alt="" width={50}/>
                                                                <h1 className="text-xs">Personalised Products</h1>
                                                            </div>
                                                    
                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={third} alt="" width={50}/>
                                                                <h1 className="text-xs">Neckbands</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={fourth} alt="" width={50}/>
                                                                <h1 className="text-xs">Smart Watches</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={fifth} alt="" width={50}/>
                                                                <h1 className="text-xs">Wireless Headphones</h1>
                                                            </div>

                                                            {/* second */}
                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={six} alt="" width={50}/>
                                                                <h1 className="text-xs">True Wireless Earbuds</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={seven} alt="" width={50}/>
                                                                <h1 className="text-xs">Personalised Products</h1>
                                                            </div>
                                                    
                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={eight} alt="" width={50}/>
                                                                <h1 className="text-xs">Neckbands</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={nine} alt="" width={50}/>
                                                                <h1 className="text-xs">Smart Watches</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={ten} alt="" width={50}/>
                                                                <h1 className="text-xs">Wireless Headphones</h1>
                                                            </div>

                                                            {/* third */}
                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={elevan} alt="" width={50}/>
                                                                <h1 className="text-xs">True Wireless Earbuds</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={twelve} alt="" width={50}/>
                                                                <h1 className="text-xs">Personalised Products</h1>
                                                            </div>
                                                    
                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={thirteen} alt="" width={50}/>
                                                                <h1 className="text-xs">Neckbands</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={fourteen} alt="" width={50}/>
                                                                <h1 className="text-xs">Smart Watches</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={fifteen} alt="" width={50}/>
                                                                <h1 className="text-xs">Wireless Headphones</h1>
                                                            </div>

                                                            {/* fourth */}
                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={sixteen} alt="" width={50}/>
                                                                <h1 className="text-xs">True Wireless Earbuds</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={seventeen} alt="" width={50}/>
                                                                <h1 className="text-xs">Personalised Products</h1>
                                                            </div>
                                                    
                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={eighteen} alt="" width={50}/>
                                                                <h1 className="text-xs">Neckbands</h1>
                                                            </div>

                                                            <div className="w-[80%] hover:opacity-75 flex gap-2 justify-center items-center cursor-pointer">
                                                                <img src={nineteen} alt="" width={50}/>
                                                                <h1 className="text-xs">Smart Watches</h1>
                                                            </div>
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
                                <FaRegUser className="relative" onClick={()=> setLoginPopup(true)} size={20}/>
                                    {
                                        loginPopup && 
                                        <div ref={loginRef}  style={{"box-shadow": "0px 0px 4px 0px rgba(100,115,114,1)"}} className="absolute flex flex-col bg-white border-gray-500 top-20 right-3 py-2 min-w-[220px] rounded-md transition-all duration-300 gap-2">
                                            <div className="mx-auto flex w-[90%] justify-between items-center">
                                                <h1 className="font-semibold">Hi boAthead!</h1>
                                                <button onClick={()=> setLoginPopup(false)}><RxCross2 size={20}/></button>
                                            </div>
                                            <div className="bg-gray-800 py-1 rounded-lg items-center justify-center text-white mx-auto flex w-[90%]">
                                                <button>Login</button>
                                            </div>
                                        </div>
                                    }
                                <HiOutlineShoppingBag className="relative cursor-pointer" onClick={()=> setRightPopup(true)} size={24}/>
                                    {
                                        rightPopup && 
                                        <div
                                            className={`popup-container open fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
                                                rightPopup ? "translate-x-0" : "translate-x-full"
                                            }`}
                                            ref={popupRef}
                                        >
                                            <div className="w-[92%] mx-auto flex justify-start items-start p-2">
                                            <h1 className="text-xl font-semibold">Your Cart</h1>
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-6 h-[96%]">
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="112.731" height="124.316" viewBox="0 0 112.731 124.316">
                                                    <g transform="translate(-3235.117 6880.904)"><path d="M509.34,3199.823a.947.947,0,0,1-.947-.947v-11.064a19.073,19.073,0,1,0-38.146,0v11.064a.947.947,0,0,1-1.894,0v-11.064a21.145,21.145,0,0,1,6.085-14.89,20.882,20.882,0,0,1,22.993-4.559,21.1,21.1,0,0,1,12.857,19.449v11.064A.947.947,0,0,1,509.34,3199.823Z" transform="translate(2799.417 -10047.617)" fill="#4e5358"></path><path d="M521.3,3254.225a.306.306,0,0,1-.137-.58,3.165,3.165,0,0,0,.457-.287,2.115,2.115,0,0,1,.791-.4.306.306,0,0,1,.148.594,1.522,1.522,0,0,0-.582.3,3.688,3.688,0,0,1-.541.337A.3.3,0,0,1,521.3,3254.225Z" transform="translate(2815.908 -10020.475)" fill="#4e5358"></path><g transform="translate(1018.755 -698.496)"><path d="M459.184,3175.473l-14.666,1.042-.2,106.408,15.187,2.169Z" transform="translate(1772.545 -9346.648)" fill="#d0d9de"></path><path d="M459.683,3174.936l.323,110.732-16.189-2.312.2-107.307ZM459,3284.515l-.317-108.506-13.669.971-.2,105.508Z" transform="translate(1772.545 -9346.648)" fill="#4e5358"></path><path d="M459.7,3174.386l-16,1.074v94.6l.036,15.031,16.028,2.862h.136Z" transform="translate(1787.925 -9346.648)" fill="#d0d9de"></path><path d="M460.2,3173.852l.2,114.6h-.681l-.044-.008-16.439-2.936-.037-15.448v-95.069l.466-.031Zm-.8,113.53-.2-112.46-15,1.007v94.133l.035,14.612Z" transform="translate(1787.925 -9346.648)" fill="#4e5358"></path></g><g transform="translate(3266.214 -6869.684)"><path d="M548.666,3175.46l-80.906-.082.084,113.638,80.69-6.159v-107.4Z" transform="translate(-467.4 -3176.46)" fill="#fff"></path><path d="M467.259,3174.878h.5l80.906.082v.5h.368v107.86l-.462.035-81.228,6.2v-.539Zm80.775,1.081-79.774-.08.083,112.6,79.691-6.083Z" transform="translate(-467.4 -3176.46)" fill="#4e5358"></path></g><path d="M472.15,3263.515l-28.419-4.646,14.146-10.568Z" transform="translate(2792.976 -10021.005)" fill="#868c91"></path><path d="M473.521,3264.246l-31.032-5.073,15.446-11.54Zm-28.548-5.68,25.806,4.219-12.961-13.816Z" transform="translate(2792.976 -10021.005)" fill="#4e5358"></path><path d="M483.283,3196.426a4.083,4.083,0,1,0-4.083-4.083A4.1,4.1,0,0,0,483.283,3196.426Z" transform="translate(2802.558 -10041.086)" fill="#c7d2dd"></path><path d="M513.683,3196.426a4.083,4.083,0,1,0-4.083-4.083A4.192,4.192,0,0,0,513.683,3196.426Z" transform="translate(2812.197 -10041.086)" fill="#c7d2dd"></path><path d="M522.34,3199.823a.947.947,0,0,1-.947-.947v-11.064a19.074,19.074,0,1,0-38.146,0v11.064a.947.947,0,0,1-1.894,0v-11.064a21.145,21.145,0,0,1,6.085-14.89,20.882,20.882,0,0,1,22.993-4.559,21.1,21.1,0,0,1,12.857,19.449v11.064A.947.947,0,0,1,522.34,3199.823Z" transform="translate(2803.541 -10047.617)" fill="#4e5358"></path><path d="M20.865,29.139l3.147-7.123L.777,22.9l3.812,6.906Zm-2.695-12.1L11.773.328,5.329,22.076Z" transform="translate(3297.439 -6829.365)" fill="#4e5358"></path><path d="M22.032,31.149l-16.856.7L.812,23.946l4.822-.184L12.573.345l7.084,18.5L7.314,23.7,25.632,23ZM5.72,30.809l15.7-.647,2.694-6.1L2.461,24.9Zm6.971-27.46L6.943,22.757l11.459-4.5Z" transform="translate(3296.58 -6830.877)" fill="#4e5358"></path></g>
                                                </svg>
                                            </p>
                                            <h1 className="text-xl font-semibold">Your cart is feeling lonely</h1>
                                            <div className="bg-gray-800 font-semibold py-3 mt-8 rounded-lg items-center justify-center text-white mx-auto flex w-[30%]">
                                                <button>Start Shopping</button>
                                            </div>
                                            </div>
                                      </div>
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
                            <FaRegUser className="relative" onClick={()=> setLoginPopup(true)} size={20}/>
                                {
                                    loginPopup && 
                                    <div ref={loginRef}  style={{"box-shadow": "0px 0px 4px 0px rgba(100,115,114,1)"}} className="absolute flex-col bg-white border-gray-500 top-[70px] right-3 py-2 min-w-[220px] transition-all duration-300 gap-2">
                                        <div className="mx-auto flex w-[90%] justify-between items-center">
                                            <h1 className="font-semibold text-red-600">Hi boAthead!</h1>
                                            <button onClick={()=> setLoginPopup(false)}><RxCross2 className="text-red-600" size={20}/></button>
                                        </div>
                                        <div className="bg-red-600 py-1 mt-1.5 items-center justify-center text-white mx-auto flex w-[90%]">
                                            <button>Login</button>
                                        </div>
                                    </div>
                                }
                            <HiOutlineShoppingBag className="relative cursor-pointer" onClick={()=> setRightPopup(true)} size={24}/>
                                    {
                                        rightPopup && 
                                        <div
                                            className={`popup-container open fixed top-0 right-0 h-screen w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
                                                rightPopup ? "translate-x-0" : "translate-x-full"
                                            }`}
                                            ref={popupRef}
                                        >
                                            <div className="w-[92%] mx-auto flex justify-start items-start p-2">
                                            <h1 className="text-xl font-semibold">Your Cart</h1>
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-6 h-[96%]">
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="112.731" height="124.316" viewBox="0 0 112.731 124.316">
                                                    <g transform="translate(-3235.117 6880.904)"><path d="M509.34,3199.823a.947.947,0,0,1-.947-.947v-11.064a19.073,19.073,0,1,0-38.146,0v11.064a.947.947,0,0,1-1.894,0v-11.064a21.145,21.145,0,0,1,6.085-14.89,20.882,20.882,0,0,1,22.993-4.559,21.1,21.1,0,0,1,12.857,19.449v11.064A.947.947,0,0,1,509.34,3199.823Z" transform="translate(2799.417 -10047.617)" fill="#4e5358"></path><path d="M521.3,3254.225a.306.306,0,0,1-.137-.58,3.165,3.165,0,0,0,.457-.287,2.115,2.115,0,0,1,.791-.4.306.306,0,0,1,.148.594,1.522,1.522,0,0,0-.582.3,3.688,3.688,0,0,1-.541.337A.3.3,0,0,1,521.3,3254.225Z" transform="translate(2815.908 -10020.475)" fill="#4e5358"></path><g transform="translate(1018.755 -698.496)"><path d="M459.184,3175.473l-14.666,1.042-.2,106.408,15.187,2.169Z" transform="translate(1772.545 -9346.648)" fill="#d0d9de"></path><path d="M459.683,3174.936l.323,110.732-16.189-2.312.2-107.307ZM459,3284.515l-.317-108.506-13.669.971-.2,105.508Z" transform="translate(1772.545 -9346.648)" fill="#4e5358"></path><path d="M459.7,3174.386l-16,1.074v94.6l.036,15.031,16.028,2.862h.136Z" transform="translate(1787.925 -9346.648)" fill="#d0d9de"></path><path d="M460.2,3173.852l.2,114.6h-.681l-.044-.008-16.439-2.936-.037-15.448v-95.069l.466-.031Zm-.8,113.53-.2-112.46-15,1.007v94.133l.035,14.612Z" transform="translate(1787.925 -9346.648)" fill="#4e5358"></path></g><g transform="translate(3266.214 -6869.684)"><path d="M548.666,3175.46l-80.906-.082.084,113.638,80.69-6.159v-107.4Z" transform="translate(-467.4 -3176.46)" fill="#fff"></path><path d="M467.259,3174.878h.5l80.906.082v.5h.368v107.86l-.462.035-81.228,6.2v-.539Zm80.775,1.081-79.774-.08.083,112.6,79.691-6.083Z" transform="translate(-467.4 -3176.46)" fill="#4e5358"></path></g><path d="M472.15,3263.515l-28.419-4.646,14.146-10.568Z" transform="translate(2792.976 -10021.005)" fill="#868c91"></path><path d="M473.521,3264.246l-31.032-5.073,15.446-11.54Zm-28.548-5.68,25.806,4.219-12.961-13.816Z" transform="translate(2792.976 -10021.005)" fill="#4e5358"></path><path d="M483.283,3196.426a4.083,4.083,0,1,0-4.083-4.083A4.1,4.1,0,0,0,483.283,3196.426Z" transform="translate(2802.558 -10041.086)" fill="#c7d2dd"></path><path d="M513.683,3196.426a4.083,4.083,0,1,0-4.083-4.083A4.192,4.192,0,0,0,513.683,3196.426Z" transform="translate(2812.197 -10041.086)" fill="#c7d2dd"></path><path d="M522.34,3199.823a.947.947,0,0,1-.947-.947v-11.064a19.074,19.074,0,1,0-38.146,0v11.064a.947.947,0,0,1-1.894,0v-11.064a21.145,21.145,0,0,1,6.085-14.89,20.882,20.882,0,0,1,22.993-4.559,21.1,21.1,0,0,1,12.857,19.449v11.064A.947.947,0,0,1,522.34,3199.823Z" transform="translate(2803.541 -10047.617)" fill="#4e5358"></path><path d="M20.865,29.139l3.147-7.123L.777,22.9l3.812,6.906Zm-2.695-12.1L11.773.328,5.329,22.076Z" transform="translate(3297.439 -6829.365)" fill="#4e5358"></path><path d="M22.032,31.149l-16.856.7L.812,23.946l4.822-.184L12.573.345l7.084,18.5L7.314,23.7,25.632,23ZM5.72,30.809l15.7-.647,2.694-6.1L2.461,24.9Zm6.971-27.46L6.943,22.757l11.459-4.5Z" transform="translate(3296.58 -6830.877)" fill="#4e5358"></path></g>
                                                </svg>
                                            </p>
                                            <h1 className="text-xl font-semibold">Your cart is feeling lonely</h1>
                                            <div className="bg-gray-800 font-semibold py-3 mt-8 rounded-lg items-center justify-center text-white mx-auto flex w-[30%]">
                                                <button>Start Shopping</button>
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
                            <FaRegUser className="relative" onClick={()=> setLoginPopup(true)} size={20}/>
                            {
                                        loginPopup && 
                                        <div
                                            className={`fixed bottom-0 left-0 right-0 w-[80%] rounded-t-lg mx-auto max-w-[770px] bg-gray-100 shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
                                                loginPopup ? "translate-x-0" : "translate-x-full"
                                            }`}
                                            ref={loginRef}
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
                            <HiOutlineShoppingBag className="relative cursor-pointer" onClick={()=> setRightPopup(true)} size={24}/>
                                    {
                                        rightPopup && 
                                        <div
                                            className={`popup-container open fixed top-0 right-0 h-screen min-w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
                                                rightPopup ? "translate-x-0" : "translate-x-full"
                                            }`}
                                            ref={popupRef}
                                        >
                                            <div className="w-[92%] mx-auto flex justify-start items-start p-2">
                                            <h1 className="text-xl font-semibold">Your Cart</h1>
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-6 h-[96%]">
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="112.731" height="124.316" viewBox="0 0 112.731 124.316">
                                                    <g transform="translate(-3235.117 6880.904)"><path d="M509.34,3199.823a.947.947,0,0,1-.947-.947v-11.064a19.073,19.073,0,1,0-38.146,0v11.064a.947.947,0,0,1-1.894,0v-11.064a21.145,21.145,0,0,1,6.085-14.89,20.882,20.882,0,0,1,22.993-4.559,21.1,21.1,0,0,1,12.857,19.449v11.064A.947.947,0,0,1,509.34,3199.823Z" transform="translate(2799.417 -10047.617)" fill="#4e5358"></path><path d="M521.3,3254.225a.306.306,0,0,1-.137-.58,3.165,3.165,0,0,0,.457-.287,2.115,2.115,0,0,1,.791-.4.306.306,0,0,1,.148.594,1.522,1.522,0,0,0-.582.3,3.688,3.688,0,0,1-.541.337A.3.3,0,0,1,521.3,3254.225Z" transform="translate(2815.908 -10020.475)" fill="#4e5358"></path><g transform="translate(1018.755 -698.496)"><path d="M459.184,3175.473l-14.666,1.042-.2,106.408,15.187,2.169Z" transform="translate(1772.545 -9346.648)" fill="#d0d9de"></path><path d="M459.683,3174.936l.323,110.732-16.189-2.312.2-107.307ZM459,3284.515l-.317-108.506-13.669.971-.2,105.508Z" transform="translate(1772.545 -9346.648)" fill="#4e5358"></path><path d="M459.7,3174.386l-16,1.074v94.6l.036,15.031,16.028,2.862h.136Z" transform="translate(1787.925 -9346.648)" fill="#d0d9de"></path><path d="M460.2,3173.852l.2,114.6h-.681l-.044-.008-16.439-2.936-.037-15.448v-95.069l.466-.031Zm-.8,113.53-.2-112.46-15,1.007v94.133l.035,14.612Z" transform="translate(1787.925 -9346.648)" fill="#4e5358"></path></g><g transform="translate(3266.214 -6869.684)"><path d="M548.666,3175.46l-80.906-.082.084,113.638,80.69-6.159v-107.4Z" transform="translate(-467.4 -3176.46)" fill="#fff"></path><path d="M467.259,3174.878h.5l80.906.082v.5h.368v107.86l-.462.035-81.228,6.2v-.539Zm80.775,1.081-79.774-.08.083,112.6,79.691-6.083Z" transform="translate(-467.4 -3176.46)" fill="#4e5358"></path></g><path d="M472.15,3263.515l-28.419-4.646,14.146-10.568Z" transform="translate(2792.976 -10021.005)" fill="#868c91"></path><path d="M473.521,3264.246l-31.032-5.073,15.446-11.54Zm-28.548-5.68,25.806,4.219-12.961-13.816Z" transform="translate(2792.976 -10021.005)" fill="#4e5358"></path><path d="M483.283,3196.426a4.083,4.083,0,1,0-4.083-4.083A4.1,4.1,0,0,0,483.283,3196.426Z" transform="translate(2802.558 -10041.086)" fill="#c7d2dd"></path><path d="M513.683,3196.426a4.083,4.083,0,1,0-4.083-4.083A4.192,4.192,0,0,0,513.683,3196.426Z" transform="translate(2812.197 -10041.086)" fill="#c7d2dd"></path><path d="M522.34,3199.823a.947.947,0,0,1-.947-.947v-11.064a19.074,19.074,0,1,0-38.146,0v11.064a.947.947,0,0,1-1.894,0v-11.064a21.145,21.145,0,0,1,6.085-14.89,20.882,20.882,0,0,1,22.993-4.559,21.1,21.1,0,0,1,12.857,19.449v11.064A.947.947,0,0,1,522.34,3199.823Z" transform="translate(2803.541 -10047.617)" fill="#4e5358"></path><path d="M20.865,29.139l3.147-7.123L.777,22.9l3.812,6.906Zm-2.695-12.1L11.773.328,5.329,22.076Z" transform="translate(3297.439 -6829.365)" fill="#4e5358"></path><path d="M22.032,31.149l-16.856.7L.812,23.946l4.822-.184L12.573.345l7.084,18.5L7.314,23.7,25.632,23ZM5.72,30.809l15.7-.647,2.694-6.1L2.461,24.9Zm6.971-27.46L6.943,22.757l11.459-4.5Z" transform="translate(3296.58 -6830.877)" fill="#4e5358"></path></g>
                                                </svg>
                                            </p>
                                            <h1 className="text-xl font-semibold">Your cart is feeling lonely</h1>
                                            <div className="bg-gray-800 font-semibold py-3 mt-8 rounded-lg items-center justify-center text-white mx-auto flex w-[30%]">
                                                <button>Start Shopping</button>
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