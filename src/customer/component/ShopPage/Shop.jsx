import React from 'react';
import { allProduct } from '../Product/AllProduct';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div className="p-6 bg-gray-900 min-h-screen">
            <h2 className="text-2xl font-bold text-white mb-6">All Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    allProduct.map((products, index) => (
                        <div key={index} className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">

                            <Link to={`/${products.title}`}>
                                <div className="h-40 flex items-center justify-center bg-gray-700">
                                    <img
                                        src={products.img}
                                        alt={products.productTitle}
                                        className="max-h-full object-contain p-4" />
                                </div>
                                <div className="p-4 text-center">
                                    <p className="text-white font-semibold text-lg truncate">{products.productTitle}</p>
                                    <p className="text-gray-400 text-sm mt-1">{products.price}</p>
                                    {products.discountPrice && (
                                        <p className="text-green-400 text-sm mt-1">Discount: {products.discountPrice}</p>
                                    )}
                                </div>
                            </Link>

                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Shop;