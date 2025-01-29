import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

const Socialicon = () => {
  return (
    <div>
        <div>
            <div className='w-full'>

                {/* 0 to 767px */}
                <div className='pt-16 py-8 flex md:hidden flex-col mx-auto bg-[#e7f0f5] w-[95%]'>
                    <div className='w-full mx-auto justify-center flex flex-col bw:flex-row items-center gap-6'>
                        <h1 className='text-[1rem] font-metropolis'>Let's get social</h1>
                        <div className='flex flex-row gap-6 items-center'>
                            <TiSocialFacebook className='text-2xl'/>
                            <FaXTwitter size={18}/>
                            <RiInstagramLine size={20}/>
                            <FaYoutube size={18}/>
                            <TiSocialLinkedin size={25}/>
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-8 gap-8'>
                        <h1 className='text-[10px]'>Privacy Policy</h1>
                        <h1 className='text-[10px]'>Terms & Conditions</h1>
                    </div>

                    <div className='flex text-gray-500 font-semibold justify-center items-center mt-4 text-[0.75rem]'>
                        <h1>© 2025 Imagine Marketing Limited. All Rights Reserved.</h1>
                    </div>

                    <div className='mx-auto flex flex-col text-center text-gray-500 font-semibold justify-center items-center mt-4 text-[0.75rem]'>
                        <h1>For queries contact us: Manager, Imagine Marketing Limited</h1>
                        <h1>Unit no. 204 & 205, 2nd floor, D-wing & E-wing,</h1>
                        <h1>Corporate Avenue, Andheri Ghatkopar Link Road,</h1>
                        <h1>Mumbai, Maharashtra-400093, India</h1>
                    </div>
                </div>

                {/* 767px to end */}
                <div className="hidden md:block bg-[#e7f0f5] w-[98%] mx-auto">
                    <div className='w-full mx-auto justify-center flex flex-col bw:flex-row items-center gap-6'>
                        <h1 className='text-[1rem] font-metropolis'>Let's get social</h1>
                        <div className='flex flex-row gap-6 items-center'>
                            <TiSocialFacebook className='text-2xl'/>
                            <FaXTwitter size={18}/>
                            <RiInstagramLine size={20}/>
                            <FaYoutube size={18}/>
                            <TiSocialLinkedin size={25}/>
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-8 gap-8'>
                        <h1 className='text-[10px]'>Privacy Policy</h1>
                        <h1 className='text-[10px]'>Terms & Conditions</h1>
                    </div>

                    <div className='flex text-gray-500 font-semibold justify-center items-center mt-4 text-[0.75rem]'>
                        <h1>© 2025 Imagine Marketing Limited. All Rights Reserved.</h1>
                    </div>

                    <div className='mx-auto px-4 w-[90%] flex flex-col text-center text-gray-500 font-semibold mt-4 text-[0.75rem]'>
                        <h1>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,Corporate Avenue, Andheri Ghatkopar Link Road,Mumbai, Maharashtra-400093, India</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Socialicon;