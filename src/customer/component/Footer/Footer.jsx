import React from 'react';
import Products from './Products';
import Store from './Store';
import UseLink from './UseLink';
import Media from './Media';
import BottomFooter from './BottomFooter';

const Footer = () => {
    return (
        <div className="contain px-10 pt-10 text-gray-300 bg-footer
     inset-shadow-md" >
            <div className="main grid grid-cols-12 gap-4">

                <div className="logo col-span-3">
                    <img className='w-[85%] h-[40%] pb-3' src="/images/contactwhite.png" alt="" />
                    <span className='text-sm'>UniQbd Offers The Perfect Online Shopping Experience With
                        Easy Mechanism.It Provides Products Through Trusted And Secure
                        Gateways.
                    </span>
                </div>
                <div className="products col-span-2">
                    <h1 className='text-center'>PRODUCTS</h1>
                    <Products />
                </div>
                <div className="store col-span-2">
                    <h1 className='text-center'>OUR STORES</h1>
                    <Store />
                </div>
                <div className="links col-span-3">
                    <h1 className='pl-12'>USEFUL LINKS</h1>
                    <UseLink />
                </div>
                <div className="media col-span-2">
                    <h1>SOCIAL MEDIA</h1>
                    <Media />
                </div>
            </div>
            <BottomFooter />

        </div>
    );
};

export default Footer;