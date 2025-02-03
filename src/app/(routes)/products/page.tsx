"use client"
import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const query = `*[_type == 'product']{
      _id,
      name,
      "imageURL" : image.asset->url,
      price,
    }`;

    const getProduct = async () => {
      const fetchProducts = await client.fetch(query);
      setProducts(fetchProducts);
      console.log(fetchProducts);
    };
    getProduct();
  }, []);

  return (
    <div className="font-sans bg-white p-4 mx-auto lg:max-w-7xl md:max-w-4xl mt-5 mb-5 ">
      <h1 className='text-center font-bold text-[30px] mb-5'>All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:justify-center gap-y-8 gap-4 sm:gap-x-6 ">
        {products.map((product: any, index) => (
          <div key={index} className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer ">
            <Link href={`/product/${product._id}`}>
            <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg hover:translate-x-1">
              <Image
                src={product.imageURL} 
                alt={product.name}
                className="h-full w-full object-contain"
                width={100}
                height={100}
              />
            </div>
            </Link>
            <div className="max-sm:text-center">
              <h3 className="text-sm sm:text-base font-bold text-gray-800">{product.name}</h3>
              <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">${product.price}</h4> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
