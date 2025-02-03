"use client"

import React, { useContext } from 'react'
import { FiShoppingBag } from "react-icons/fi";

import {  Urbanist } from 'next/font/google'
import Link from 'next/link';
import Cart from './Cart';
import { CartContext } from './context/CartContext';


const urbanist = Urbanist({
    subsets: ['latin'],
    weight: '700'
})


const Navbar = () => {

  const {showCart , setShowCart , totalQuantity}:any = useContext(CartContext)
  const handleClick = ()=>{
    setShowCart(!showCart)
  }
  return (
    <>
    <div className='w-full h-[80px] bg-white shadow-md'>
        <div className='md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto  w-full h-full flex justify-between items-center'>
            <Link href={'/'} className={`${urbanist.className} text-[30px] text-[#FB2E86]`}>Shoopsy</Link>
            <Link href={'/'} className={`${urbanist.className} text-[18px] hover:text-[#FB2E86] transition-all`}>Home</Link>
            <Link href={'/about'} className={`${urbanist.className} text-[18px] hover:text-[#FB2E86] transition-all`}>About</Link>
            <Link href={'/products'} className={`${urbanist.className} text-[18px] hover:text-[#FB2E86] transition-all`}>Products</Link>
            <Link href={'/contact'} className={`${urbanist.className} text-[18px] hover:text-[#FB2E86] transition-all`}>Contact</Link>
            <Link href={'/login'} className={`${urbanist.className} text-[18px] hover:text-[#FB2E86] transition-all`}>Login</Link>
            <button className={`relative text-[25px] ${urbanist.className}`} onClick={handleClick}>
            <FiShoppingBag className='hover:text-[#FB2E86]' />
            <span className='absolute text-[12px] top-0 right-[-7px] bg-[#FB2E86] text-white rounded-full w-[18px] h-[18px] text-center font-bold'>{totalQuantity}</span>
            </button>
        </div>
    </div>
    
    {showCart && <Cart /> }
    </>
  )
}

export default Navbar