"use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";

import {Josefin_Sans , Lato } from 'next/font/google'
const josefinSans = Josefin_Sans({
    subsets: ['latin-ext'],
    weight: '700'
})
const lato = Lato({
    subsets:['latin'],
    weight: '400'
})

const Footer = () => {
  return (
    <>
      <div className="h-[532px] bg-[#EEEFFB] flex justify-center flex-col  ">
        <div className="w-[1170px] h-[236px]  m-auto text-white grid grid-cols-4 gap-5  ">
            <div className="flex flex-col gap-3 ">
                <h1 className={` font-bold text-black text-[38px] ${josefinSans.className}`}>Hekto</h1>
                <div className='flex w-[377px] h-[39px] bg-[#FFFFFF] '>
                <input type="email" className='rounded-sm w-[260px] outline-none border-none h-[39px] pl-3' placeholder="Enter Email Address " />
                <button className='w-[135px] h-[39px] rounded-sm  bg-[#FB2E86] flex justify-center items-center'>Sign Up</button>
            </div>
                <p className={`text-[16px] text-[#8A8FB9] ${lato.className}`}>Contact Info</p>
                <p className={`text-[16px] text-[#8A8FB9] w-[401px] ${lato.className}`}>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className={`flex flex-col gap-4 ml-44  w-[200px]`}>
                <h1 className={`text-[22px] font-semibold text-black ${josefinSans.className}`}>Categories</h1>
                <ul className={`flex flex-col gap-2 text-[16px] text-[#8A8FB9] ${lato.className}`}>
            <li><Link href={''}>Laptops & Computers</Link></li>
            <li><Link href={''}>Cameras & Photography</Link></li>
            <li><Link href={''}>Smart Phones & Tablets</Link></li>
            <li><Link href={''}>Video Games & Consoles</Link></li>
            <li><Link href={''}>Waterproof Headphones</Link></li>
            </ul>
            </div>
            <div className={`flex flex-col gap-4 ml-32 w-[160px]`}>
            <h1 className={`${josefinSans.className} font-semibold text-black text-[22px]`}>Customer Care</h1>
            <ul className={`flex flex-col gap-2 text-[16px] text-[#8A8FB9] ${lato.className}`}>
            <li><Link href={''}>My Account</Link></li>
            <li><Link href={''}>Disocunt</Link></li>
            <li><Link href={''}>Returns</Link></li>
            <li><Link href={''}>Order History</Link></li>
            <li><Link href={''}>Order Tracking</Link></li>
            </ul>
            </div>
            <div className={`flex flex-col gap-4 ml-20 w-[160px] `}>
            <h1 className={`${josefinSans.className} font-semibold text-black text-[22px]`}>Pages</h1>
            <ul className={`flex flex-col gap-2 text-[16px] text-[#8A8FB9] ${lato.className}`}>
            <li><Link href={''}>Blog</Link></li>
            <li><Link href={''}>Browse the Shop</Link></li>
            <li><Link href={''}>Category</Link></li>
            <li><Link href={''}>Pre-built Pages</Link></li>
            <li><Link href={''}>Visual Composer Elements</Link></li>
            <li><Link href={''}>WooCommerce Pages</Link></li>
            </ul>
            </div>
        </div>
        <div className="border-t-2 bg-[#E7E4F8] h-[53px] flex justify-around items-center gap-5">
        <p className="text-[#9DA0AE] text-[16px]">
          &copy; Copyright Shoopsy 2025. All right reserved.
        </p>
        <ul className="flex gap-3">
          <li><Link href={''}><Image src={'/fb.png'} width={20} height={20} alt="fb-icon" /></Link></li>
          <li><Link href={''}><Image src={'/insta.png'} width={20} height={20} alt="insta-icon" /></Link></li>
          <li><Link href={''}><Image src={'/twitter.png'} width={20} height={20} alt="twitter-icon" /></Link></li>
        </ul>
      </div>
      </div>
      
    </>
  );
};

export default Footer;
