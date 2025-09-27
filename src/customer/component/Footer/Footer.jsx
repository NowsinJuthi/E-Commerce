import React, { useState } from 'react';
import Products from './Products';
import Store from './Store';
import UseLink from './UseLink';
import Media from './Media';
import BottomFooter from './BottomFooter';
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import Socialicones from '../Socialicones';

const Footer = () => {
    const [store, setStore] = useState(false);
    const [product, setProduct] = useState(false);
    const [links, setLinks] = useState(false);
    const [social, setSocial] = useState(false);
    return (
        <footer className="contain lg:pt-10 px-5 pt-5
         sm:px-10 md:px-10 lg:px-10 text-gray-300 bg-footer inset-shadow-md">
            <div className="main grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-4 lg:grid-cols-12 gap-8">

                {/* Logo + description */}
                <div className="logo col-span-3 
                sm:col-span-2 md:col-span-4 lg:col-span-4
                text-left">
                    <img
                        className="w-[60%] sm:w-[50%] lg:h-[45%]
                        md:w-[75%] h-auto mx-0 pb-3"
                        src="/images/contactwhite.png"
                        alt="logo"
                    />
                    <p className="text-[15px] text-balance opacity-80">
                        UniQbd Offers The Perfect Online Shopping Experience With
                        Easy Mechanism. It Provides Products Through Trusted And Secure
                        Gateways.
                    </p>
                </div>

                {/* Products */}
                <div className="products col-span-2 
                lg:text-center grid grid-cols-2 lg:grid-cols-1">
                    <h1 className="font-semibold text-lg ">PRODUCTS</h1>

                    {/* Mobile/tablet */}
                    <div className="lg:hidden sm:col-span-2">
                        <button
                            className="flex items-center justify-center gap-2 pl-36
                             text-gray-400 hover:text-white transition pl-36"
                            onClick={() => setProduct(!product)}>
                            {product ? <FaArrowCircleUp size={22} /> : <FaArrowCircleDown size={22} />}
                        </button>
                    </div>
                    <div className={`transition-all duration-300 ${product ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                        <div className="space-y-2">
                            <Products />
                        </div>
                    </div>

                    {/* Large screen */}
                    <div className="hidden lg:block lg:col-span-2">
                        <div className="space-y-2">
                            <Products />
                        </div>
                    </div>
                </div>

                {/* Store */}
                <div className="store col-span-2 
                lg:text-center grid grid-cols-2 lg:grid-cols-1">
                    <h1 className="font-semibold text-lg">OUR STORES</h1>

                    {/* Mobile/tablet */}
                    <div className="lg:hidden sm:col-span-2">
                        <button
                            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition pl-36"
                            onClick={() => setStore(!store)}>
                            {store ? <FaArrowCircleUp size={22} /> : <FaArrowCircleDown size={22} />}</button>
                    </div>
                    <div className={`lg:hidden w-full transition-all duration-300 
                            ${store ? "acopity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                        <div className="space-y-2">
                            <Store />
                        </div>
                    </div>

                    {/* Large screen */}
                    <div className="hidden lg:block lg:col-span-2">
                        <div className="space-y-2">
                            <Store />
                        </div>
                    </div>
                </div>


                {/* Useful Links */}

                <div className="links col-span-2 
                lg:text-center grid grid-cols-2 lg:grid-cols-1">
                    <h1 className="font-semibold text-lg">USEFUL LINKS</h1>

                    {/* Mobile/tablet */}
                    <div className="lg:hidden sm:col-span-2">
                        <button
                            className="flex items-center justify-center 
                            gap-2 text-gray-400 hover:text-white transition pl-36"
                            onClick={() => setLinks(!links)}>
                            {links ? <FaArrowCircleUp size={22} /> : <FaArrowCircleDown size={22} />}
                        </button>
                    </div>
                    <div className={`lg:hidden transition-all w-60
                         duration-300 ${links ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                        <div className="space-y-2">
                            <UseLink />
                        </div>
                    </div>

                    {/* Large screen */}
                    <div className="hidden 
                    lg:block lg:col-span-2">
                        <div className="space-y-2">
                            <UseLink />
                        </div>
                    </div>
                </div>


                {/* Social Media */}

                <div className="media col-span-2 mb-5
                lg:text-center grid grid-cols-2 lg:grid-cols-1">
                    <h1 className="font-semibold text-lg">SOCIAL MEDIA</h1>

                    {/* Mobile/tablet */}
                    <div className="lg:hidden sm:col-span-2">
                        <button
                            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition pl-36"
                            onClick={() => setSocial(!social)}>
                            {social ? <FaArrowCircleUp size={22} /> : <FaArrowCircleDown size={22} />}
                        </button>
                    </div>
                    <div className={`lg:hidden transition-all duration-300 ${social ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                        <div className="space-y-2">
                            <Media />
                        </div>
                    </div>

                    {/* Large screen */}
                    <div className="hidden lg:block lg:col-span-2">
                        <div className="space-y-2">
                            <Media />
                        </div>
                    </div>
                </div>

                
            </div>

            {/* Bottom footer */}
            <div className="
            border-t border-gray-700 py-4
            text-center text-sm opacity-75">
                <BottomFooter />
            </div>

            <Socialicones/>
        </footer>
    );
};

export default Footer;
