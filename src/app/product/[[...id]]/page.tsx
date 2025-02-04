// pages/product/[[...id]].js (Server Component)


import SingleProductClient from "@/app/components/SingleProductClient";
import { client } from "@/sanity/lib/client";

// Static params generation for dynamic routing
export async function generateStaticParams() {
  // Fetch all products or their IDs to generate the static paths
  const products = await client.fetch(`*[_type == 'product']{ _id }`);

  // Return an array of paths for each product ID
  return products.map((product: { _id: string }) => ({
    id: [product._id], // Wrap id in an array to handle catch-all route
  }));
}

const SingleProductPage = ({ params }: { params: { id: string[] } }) => {
  const { id } = params;  // Resolve the id from params (now it will be an array)

  // Since `id` is an array (because of [[...id]]), we take the first element
  const productId = id[0]; 

  return (
    <div>
      {/* Pass the resolved `id` prop to the client-side component */}
      <SingleProductClient id={productId} />
    </div>
  );
};

export default SingleProductPage;
