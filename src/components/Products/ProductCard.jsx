import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80">
                <img src={product.image} alt={product.productName} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.productName}</h3>
                    <p className="text-gray-600">Brand: {product.brand}</p>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-blue-600 font-bold">${product.price}</span>
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">{product.category}</span>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button className="bg-black text-white px-4 py-2 rounded">See Details</button>
                        <button className="bg-black text-white px-4 py-2 rounded">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
