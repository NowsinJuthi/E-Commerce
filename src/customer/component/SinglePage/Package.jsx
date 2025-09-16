import React, { useState, useEffect } from 'react';
import { Topup } from '../Product/TopUp';
import { useParams } from 'react-router-dom';
import { LiaPlusSolid, LiaMinusSolid } from "react-icons/lia";
import AddtoCard from '../Tostify/AddtoCard';

const Package = () => {
    const { title } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPackageIndex, setSelectedPackageIndex] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const product = Topup.find(item => item.title === title);
        setSelectedProduct(product || null);
        setSelectedPackageIndex(null);
        setQuantity(1); // reset when product changes
    }, [title]);

    if (!selectedProduct) return <p className="text-gray-200 p-6">No product found</p>;

    const handleQuantityChange = (d) => {
        setQuantity(prev => Math.max(1, prev + d)); // never below 1
    };

    return (
        <div className="main ">
            <div className="transparents grid grid-cols-12 px-5">
                {/* Left Side */}
                <div className="left grid col-span-6 grid-cols-2 gap-4 py-8 px-6 mt-8 rounded-2xl mb-5
                bg-radial-[at_50%_75%]  from-[#25524ffb]/40 via-bgtransparent/70 to-website/40">
                    {selectedProduct.product &&
                        selectedProduct.product.map((prod, index) => (
                            <label
                                key={index}
                                className="group relative rounded-xl border border-border bg-bgtransparent/30
                                       backdrop-blur-sm cursor-pointer shadow-sm transition-all 
                                        hover:shadow-md hover:border-[#2b4e2e] has-checked:border-[#2b454e] has-checked:bg-[#0f7045a6] p-2 items-center">
                                <input
                                    type="radio"
                                    name="size"
                                    className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                    onChange={() => {
                                        setSelectedPackageIndex(index);
                                        setQuantity(1);
                                    }}
                                />

                                <div className="main grid grid-cols-12 ">
                                    {/* LOGO */}
                                    <div className="logo col-span-2 pt-3">
                                        {selectedProduct.productImg && (
                                            <img src={selectedProduct.productImg}className="text-sm font-medium text-gray-600 mt-1 group-has-checked:text-gray-200" />
                                        )}
                                    </div>

                                    {/* UC / CP / Package */}
                                    <div className="package col-span-5 pl-3 pt-4">
                                        <span className="text-gray-200 text-lg font-semibold">{prod}</span>
                                    </div>

                                    {/* Price */}
                                    <div className="price col-span-5 pl-14">
                                        {selectedProduct.productPrice && (
                                            <span className="text-gray-200 text-sm font-medium mt-1">
                                                {selectedProduct.productPrice[index]}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </label>
                        ))}
                </div>

                {/* Right Side */}
                <div className="right col-span-6 bg-bgtransparent/30 backdrop-blur-sm mb-5
                     rounded-2xl border border-border shadow-md p-6 mt-8 ml-7
                     bg-radial-[at_50%_75%]  from-[#25524ffb]/40 via-bgtransparent/70 to-website/40">

                    <div className="main grid">
                        {/* Quantity Selector */}
                        <div className="quantity grid grid-cols-12 col-span-2 pb-6 pt-5 pl-6 border border-border bg-bgtransparent/30 rounded-2xl">
                            <div className="quty col-span-9">
                                <p className="text-gray-200 pt-1.5">Quantity</p>
                            </div>
                            <div className="button col-span-3 text-gray-300 grid grid-cols-8 
                            border border-[#436875] mr-8 p-1 rounded-2xl">
                                <LiaPlusSolid
                                    onClick={() => handleQuantityChange(+1)}
                                    className="col-span-2 mt-1 ml-1 cursor-pointer"
                                />
                                <span className="col-span-4 text-center">{quantity}</span>
                                <LiaMinusSolid
                                    onClick={() => handleQuantityChange(-1)}
                                    className="col-span-2 mt-1 cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="order-summery col-span-2 bg-bgtransparent/30
                             rounded-2xl p-5 mt-5 border border-border">
                            <h1 className="text-gray-200 pb-3">Order Summary</h1>
                            <hr className="text-gray-500 pt-5" />
                            <h1 className="text-gray-200 text-sm">
                                Price: {selectedPackageIndex !== null && selectedProduct?.productPrice
                                    ? selectedProduct.productPrice[selectedPackageIndex] * quantity
                                    : 'Select a package'}
                            </h1>
                            <button className="mt-6 w-full cursor-pointer bg-[#11ae68] text-gray-200 py-2 rounded-xl hover:bg-[#11ae68] transition">
                                Buy Now
                            </button>
                            <AddtoCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
