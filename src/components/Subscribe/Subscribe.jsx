import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const Subscribe = () => {
  return (
    <div>
        <div>
            <div className='w-full'>
                {/* 0 to 767px */}
                <div className='mt-24 bg-[#e7f0f5] mx-auto w-[95%] flex md:hidden flex-col justify-center items-center'>
                    {/* boat text */}
                    <div className='pt-8 w-full flex flex-col justify-center items-center'>
                        <p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 151.848 62.372"
                                height="60.372"
                                width="300.848"
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
                        <h1 className='pt-4 text-xl font-semibold'>Subscribe to our email alerts!</h1>
                        <div className='mt-2 flex flex-row w-[75%] h-12 rounded-xl mx-auto bg-white border border-gray-300 justify-between px-4 items-center'>
                            <input type='text' className='placeholder:text-gray-600 placeholder:text-sm' placeholder='Enter your email address'/>
                            <MdKeyboardArrowRight size={20} className='text-gray-500 rounded-full border border-gray-600 mx-6'/>
                        </div>
                    </div>

                    {/* shop + 2 */}
                    <div className='pt-10 pb-2 flex flex-col items-start justify-center gap-4 w-[95%]'>
                        <div className='w-full flex justify-between items-center'>
                            <h1>Shop</h1>
                            <GoPlus className='text-gray-500 mr-2' size={16}/>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <h1>Help</h1>
                            <GoPlus className='text-gray-500 mr-2' size={16}/>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <h1>Company</h1>
                            <GoPlus className='text-gray-500 mr-2' size={16}/>
                        </div>
                    </div>
                </div>

                {/* 768 to bm */}
                <div className='mt-16 hidden md:flex bm:hidden flex-col mx-auto bg-[#e7f0f5] w-full px-8'>
                    {/* boat + shop */}
                    <div className='flex'>
                        {/* boat */}
                        <div className='pr-12 justify-start items-start w-[50%] flex flex-col'>
                            <p className='pt-2'>
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
                            <h1 className='pt-2 text-[1.5rem] font-semibold'>Subscribe to our email alerts!</h1>
                            <div className='mt-1 flex flex-row w-full h-12 rounded-xl mx-auto bg-white border border-gray-300 justify-between px-4 items-center'>
                                <input type='text' className='placeholder:text-gray-600 placeholder:text-sm' placeholder='Enter your email address'/>
                                <MdKeyboardArrowRight size={20} className='text-gray-500 rounded-full border border-gray-600 mx-6'/>
                            </div>
                        </div>
                        {/* shop */}
                        <div className='w-[50%]'>
                            <div className='text-[0.85rem] font-semibold font-metropolis'>Shop</div>
                            <div className='gap-2 text-[0.75rem] font-metropolis text-gray-900 mt-2 grid grid-cols-2'>
                                <h1>True Wireless Earbuds</h1>
                                <h1>Wireless Headphones</h1>
                                <h1>Wired Headphones</h1>
                                <h1>Wireless Speakers</h1>
                                <h1>Home Audio</h1>
                                <h1>Mobile Accessories</h1>
                                <h1>Smart Watches</h1>
                                <h1>TRebel</h1>
                                <h1>Misfit Trimmers</h1>
                                <h1>Refer & Earn</h1>
                            </div>
                        </div>
                    </div>

                    {/* help + company */}
                    <div className='pt-4 flex'>
                        {/* help */}
                        <div className='w-[50%]'>
                            <div className='pr-12 justify-start items-start w-[50%] flex flex-col'>
                                <div className='text-[0.85rem] font-semibold font-metropolis'>Help</div>
                                    <div className='gap-2 text-[0.75rem] font-metropolis text-gray-900 mt-2 grid grid-cols-1'>
                                        <h1>Track Your Order</h1>
                                        <h1>Warranty & Support</h1>
                                        <h1>Return Policy</h1>
                                        <h1>Service Centers</h1>
                                        <h1>Bulk Orders</h1>
                                        <h1>Why Buy Direct</h1>
                                    </div>
                                </div>
                        </div>
                        {/* company */}
                        <div className='w-[50%]'>
                            <div className='text-[0.85rem] font-semibold font-metropolis'>Company</div>
                            <div className='gap-2 text-[0.75rem] font-metropolis text-gray-900 mt-2 grid grid-cols-1'>
                                <h1>About boAt</h1>
                                <h1>News</h1>
                                <h1>Red Our Blog</h1>
                                <h1>Careers</h1>
                                <h1>Security</h1>
                                <h1>Investor Relations</h1>
                                <h1>Social Responsibility</h1>
                                <h1>Warranty Policy</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* above bm */}
                <div className='mt-16 pt-12 hidden bm:flex flex-row mx-auto bg-[#e7f0f5] w-[98%]'>
                    {/*  */}
                    <div className='w-full gap-12 grid grid-cols-4 mx-auto px-10'>
                        {/* boat */}
                        <div className='w-auto'>
                            <p className='pt-2'>
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
                            <h1 className='pt-2 text-[1.5rem] font-semibold'>Subscribe to our email alerts!</h1>
                            <div className='mt-1 flex flex-row h-12 px-2 rounded-xl mx-auto bg-white border border-gray-300 justify-between items-center'>
                                <input type='text' className='placeholder:text-gray-600 placeholder:text-sm' placeholder='Enter your email address'/>
                                <MdKeyboardArrowRight size={20} className='text-gray-500 rounded-full border border-gray-600'/>
                            </div>
                        </div>

                        {/* shop */}
                        <div className='w-auto'>
                            <div className='text-[0.85rem] font-semibold font-metropolis'>Shop</div>
                            <div className='gap-2 text-[0.75rem] font-metropolis text-gray-900 mt-2 grid grid-cols-2'>
                                <h1>True Wireless Earbuds</h1>
                                <h1>Wireless Headphones</h1>
                                <h1>Wired Headphones</h1>
                                <h1>Wireless Speakers</h1>
                                <h1>Home Audio</h1>
                                <h1>Mobile Accessories</h1>
                                <h1>Smart Watches</h1>
                                <h1>TRebel</h1>
                                <h1>Misfit Trimmers</h1>
                                <h1>Refer & Earn</h1>
                            </div>
                        </div>

                        {/* help */}
                        <div className='w-auto'>
                            <div className='justify-start items-start w-full flex flex-col'>
                                <div className='text-[0.85rem] font-semibold font-metropolis'>Help</div>
                                    <div className='gap-2 text-[0.75rem] font-metropolis text-gray-900 mt-2 grid grid-cols-1'>
                                        <h1>Track Your Order</h1>
                                        <h1>Warranty & Support</h1>
                                        <h1>Return Policy</h1>
                                        <h1>Service Centers</h1>
                                        <h1>Bulk Orders</h1>
                                        <h1>Why Buy Direct</h1>
                                    </div>
                                </div>
                        </div>

                        {/* company */}
                        <div className='w-auto'>
                            <div className='text-[0.85rem] font-semibold font-metropolis'>Company</div>
                            <div className='gap-2 text-[0.75rem] font-metropolis text-gray-900 mt-2 grid grid-cols-1'>
                                <h1>About boAt</h1>
                                <h1>News</h1>
                                <h1>Red Our Blog</h1>
                                <h1>Careers</h1>
                                <h1>Security</h1>
                                <h1>Investor Relations</h1>
                                <h1>Social Responsibility</h1>
                                <h1>Warranty Policy</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe;