"use client";
import { CartContext } from "@/app/components/context/CartContext";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const getSingleProduct = async (id: string) => {
  const query = `*[_type== 'product' && _id == '${id}']{
    _id,
    name,
    "imageURL" : image.asset->url,
    description,
    stockLevel,
    discountPercentage,
    price,
    category,
    isFeaturedProduct
  }[0]`;

  const productData = await client.fetch(query);
  return productData;
};

const SingleProduct = ({ params }: { params: Promise<{ id: string }> }) => {
  const { qty, incQty, decQty,  handleAddProduct }: any = useContext(CartContext);
  const [product, setProduct] = useState<any>(null);
  
  // Use React.use to unwrap params and get the id
  const { id } = React.use(params); // unwrap params to access `id`

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productData = await getSingleProduct(id);
        setProduct(productData);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="w-[900px] h-[400px] mx-auto mt-10 mb-10 flex gap-2 ">
      <div className="w-[300px] h-[400px] bg-fuchsia-100  rounded-md ">
        <Link className="bg-cyan-300 p-2" href={'/'}>
          Back
        </Link>
        <Image src={product.imageURL} width={300} height={400} alt="image" />
      </div>
      <div className="w-[600px] h-[400px] bg-violet-100 p-5  rounded-md">
        <h1 className="font-bold">{product.name}</h1>
        <h1>{product.description}</h1>
        <h1 className="font-bold">Price: ${product.price}</h1>
        <h1 className="font-bold">Discount: {product.discountPercentage}%</h1>
        <h1 className="bg-green-800 text-white rounded-sm pl-1 font-bold">
          Price After Discount: {product.price - (product.price * product.discountPercentage) / 100}
        </h1>
        <h1 className="font-bold">Stock: {product.stockLevel}</h1>
        <h1 className="font-bold">Category: {product.category}</h1>
        <div className="flex gap-5">
          <button></button>
          <div className='flex  gap-2 items-center justify-center  mt-2'>
            <h3>Quantity</h3>
            <p className='p-[6px]  gap-5 flex border border-black items-center cursor-pointer '>
              <span className='text-red-700'>
                <AiOutlineMinus onClick={decQty} />
              </span>
              <span className='text-[20px]'>
                {qty}
              </span>
              <span className='text-green-800'>
                <AiOutlinePlus onClick={incQty} />
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-start items-center mt-5">
          <button className="bg-orange-400 hover:bg-orange-200 p-3 rounded-md">Buy Now</button>
          <button className="bg-blue-400 hover:bg-blue-200 p-3 rounded-md" onClick={()=>handleAddProduct(product, qty)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
