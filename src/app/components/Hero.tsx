"use client"
import Image from 'next/image'
import React from 'react'

import {Josefin_Sans , Lato } from 'next/font/google'
import Link from 'next/link'
const josefinSans = Josefin_Sans({
    subsets: ['latin-ext'],
    weight: '700'
})
const lato = Lato({
    subsets:['latin'],
    weight: '400'
})

const Hero = () => {
  return (
    <div className='h-[764px] bg-[#F2F0FF] flex'>
       <div className='flex flex-col gap-20'>
        <div>
            <Image src={'/lamp.png'} width={387} height={387} alt=''  />
        </div>
        <div className='w-4 h-4 rounded-full bg-[#FB2E86] ml-28'></div>
       </div>
        <div className='flex '>
        <div className='text-black h-[248px] flex flex-col justify-center gap-4 mt-48  '>
            <p className={`text-[#FB2E86] font-bold text-[16px] ${lato.className}`}>Best Furniture For Your Castle....</p>
            <h1 className={`text-[#000000] font-bold text-[52px] ${josefinSans.className} leading-[65px]`}>New Furniture Collection Trends in 2020</h1>
            <p className={`${lato.className} text-[16px] font-bold text-[#8A8FB9]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            <Link href={'/signup'} className={`w-[163px] h-[50px] rounded-sm  bg-[#FB2E86] p-5 flex justify-center items-center text-white font-semibold ${josefinSans.className}`}>Sign Up</Link>
        </div>
        <div className='w-[706px] h-[689px] flex justify-center items-center '>
          <div className=' bg-[#ecd2fa35] rounded-full p-5 w-[540px] h-[540px] '>
            <Image src={'/sofa.png'} width={629} height={629} alt='sofa' className='rounded-full  bg-[#ecd2fa35] w-[500px] h-[500px] ' />
        </div>
             <div className="flex justify-center items-center  w-[110.56px] h-[112.49px]  absolute top-[160px] left-[1100px]  bg-[#00C1FE] text-white   rounded-[120px] ">
          50% off
          </div>
        </div>
        <div className='absolute top-[780px] right-[700px] flex gap-5'>
          <Link href={''}><div className='w-4 h-4 rotate-45 bg-[#FB2E86] '></div></Link>
          <Link href={''}><div className='w-4 h-4  transform rotate-45 border-2 border-[#FB2E86]'></div></Link>
          <Link href={''}><div className='w-4 h-4  transform rotate-45 border-2 border-[#FB2E86]'></div></Link>
        </div>
        </div>
        
    </div>
  )

}


export default Hero

