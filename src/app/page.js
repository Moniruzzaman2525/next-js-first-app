import ProductCard from '@/components/Products/ProductCard';
import Link from 'next/link';
import React from 'react';

const HomePage = async () => {

  const res = await fetch('http://localhost:5000/products', {
    cache: 'no-store'
  })
  const products = await res.json()
  return (
    <div className=''>
      <h1 className='text-center text-4xl my-5'>Data Fetching, Caching and Revalidating abc abc</h1>

      <div className='grid grid-cols-3 gap-8 w-[90%] mx-auto my-10'>
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
      <div className='text-center'>
        <Link href={`/products`} className="bg-black text-white px-4 py-2 rounded">See More</Link>
      </div>
    </div>
  );
};

export default HomePage;
