"use client"

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Card = ({ product, index  }: any) => {
  const [storeData, setStoreData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(
          `*[_type== 'product']{
            _id,
            name,
            "imageURL" : image.asset->url,
            description,
            stockLevel,
            discountPercentage,
            price,
            category,
            isFeaturedProduct
          }`
        );
        console.log("Fetched Store Data:", product.imageURL);
        setStoreData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);





  return (
    
    <div>
      <Link href={`/product/${product._id}`}>
        <div
          key={index}
          className="bg-white pt-10 drop-shadow-md rounded-3xl overflow-hidden "
        >
          <Image
            src={product.imageURL }
            width={200}
            height={200}
            alt={product.name}
            className="object-cover h-40 mx-auto"
          />
          <div className="text-center py-5">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <h1 className="text-xl text-gray-500 font-bold">
            Price: ${product.price}
            </h1>
            <h1>Discount: {product.discountPercentage}%</h1>
              <h1 className="bg-green-800 text-white rounded-sm pl-1">
                Price After Discount:{" "}
                {product.price - (product.price * product.discountPercentage) / 100}
              </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

