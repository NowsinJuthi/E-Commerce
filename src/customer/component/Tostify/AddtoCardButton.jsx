import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const AddtoCardButton = ({ id, img, productTitle, productPrice, cart, setCart }) => {


    const AddToCart = (id, img, productTitle, productPrice) => {
        const exists = cart.find((item) => item.id === id);

        if (exists) {
            toast.error("🦄 Item already added to cart!!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } else {
            const obj = { id, img, productTitle, productPrice };
            setCart([...cart, obj]);

            toast.success("🦄 Item added to cart!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };

    return (
        <>
            <div>
                <Link to="/cart">
                    <button
                        onClick={() => AddToCart(id, img, productTitle, productPrice)}
                        className="mt-6 w-full cursor-pointer bg-[#11ae68] text-gray-200
                              py-2 rounded-xl hover:bg-[#11ae68] transition">
                        Add To Cart
                    </button>
                </Link>
            </div>
        </>
    );
};

export default AddtoCardButton;
