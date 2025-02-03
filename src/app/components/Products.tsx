

import React from 'react'
import {  Urbanist } from 'next/font/google'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import Card from './Card'


const urbanist = Urbanist({
    subsets: ['latin'],
    weight: '700'
})


const Products = async () => {
    const productData = await client.fetch(
        groq `
        *[_type=="product"] {
        _id,
        name,
        price,
        discountPercentage,
        "imageURL": image.asset->url,
        description,
        stockLevel,
        category,
        isFeaturedProduct,
      }
    
            `
      )
  return (
    <div className='bg-[#f8f8f8] w-full py-12 '>
        <div className='md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto'>
            <div className='py-4'>
                <h1 className={`text-3xl font-bold ${urbanist.className}`}>Best Selling Products</h1>
                <h1>Enjoy Discount upto 25%</h1>
            </div>
            <div className='mt-6 grid md:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-4'>
                {productData.map((product:any , index:number)=> {
                   return (
                    <Card key={index}  product={product}/>
                )
                })}
                
            </div>
        </div>

    </div>
  )
}

export default Products