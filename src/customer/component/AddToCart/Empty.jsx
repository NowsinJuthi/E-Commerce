import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";

const Empty = () => {
    return (
        <>
            <div className="main rounded-2xl w-[40%] mx-auto
             bg-radial-[at_50%_75%] from-[#25524ffb]/50 via-bgtransparent/80 to-website/40">
                <h1 className='text-gray-100 text-3xl mx-36 py-5'>Shopping Cart</h1>
                <hr className='text-gray-600 mx-28' />
                <img className='w-[40%] h-[40%] mx-auto' src="/images/empty.png" alt="" />
                <p className="text-gray-300 text-2xl mx-36">Your cart is empty</p>
                <div className="shopping mx-42 pb-5">
                    <Link
                        to="/"
                        className="flex items-center  text-gray-200 text-sm hover:text-website transition-colors duration-200">
                        <span>Continue Shopping</span>
                        <IoIosArrowRoundForward className='mt-1' size={25} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Empty;