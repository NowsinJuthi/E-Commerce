import React from 'react';
import Products from './Products';
import Store from './Store';
import UseLink from './UseLink';
import Media from './Media';
import BottomFooter from './BottomFooter';

const Footer = () => {
    return (
        <div className="contain px-6 sm:px-8 md:px-10 pt-10 text-gray-300 bg-footer inset-shadow-md">
            <div className="main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-6">

                {/* Logo + description */}
                <div className="logo col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 text-center lg:text-left">
                    <img
                        className="w-[60%] sm:w-[50%] md:w-[75%] h-auto mx-auto lg:mx-0 pb-3"
                        src="/images/contactwhite.png"
                        alt="logo"
                    />
                    <span className="text-sm block">
                        UniQbd Offers The Perfect Online Shopping Experience With
                        Easy Mechanism. It Provides Products Through Trusted And Secure
                        Gateways.
                    </span>
                </div>

                {/* Products */}
                <div className="products col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 text-center">
                    <h1 className="font-semibold mb-2">PRODUCTS</h1>
                    <Products />
                </div>

                {/* Store */}
                <div className="store col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 text-center">
                    <h1 className="font-semibold mb-2">OUR STORES</h1>
                    <Store />
                </div>

                {/* Useful Links */}
                <div className="links col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 text-center lg:text-left">
                    <h1 className="font-semibold mb-2">USEFUL LINKS</h1>
                    <UseLink />
                </div>

                {/* Social Media */}
                <div className="media col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 text-center lg:text-left">
                    <h1 className="font-semibold mb-2">SOCIAL MEDIA</h1>
                    <Media />
                </div>
            </div>

            {/* Bottom footer */}
            <div className="mt-8">
                <BottomFooter />
            </div>
        </div>
    );
};

export default Footer;
