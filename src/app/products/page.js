
import ProductCard from '@/components/Products/ProductCard';
import React from 'react';

const ProductPage = async () => {
    const res = await fetch('http://localhost:5000/products', {
        next: {
            revalidate: 30
        }
    })
    const products = await res.json()
    return (
        <div>
            <h1 className='text-center text-3xl'>All Products</h1>
            <div className='grid grid-cols-3 gap-8 w-[90%] mx-auto my-10'>
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductPage;
