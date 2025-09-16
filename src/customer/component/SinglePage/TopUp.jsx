import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Topup } from '../Product/TopUp.js';
import { GiWorld } from "react-icons/gi";
import Package from './Package.jsx';
import Navigation from '../Navbar/Navigation.jsx';

const TopUp = () => {

    const { title } = useParams();
    const [products, setProducts] = useState({})

    useEffect(() => {
        const singleProducts = Topup.filter((fill) => fill.title == title)
        setProducts(singleProducts[0])
    }, [title])

    return (
        <>
            <div className="top bg-cover bg-center"
                style={{ backgroundImage: `url(${products.bgimg})` }}>
                <div className="transparents bg-bgtransparent/50 pt-6">

                    <div className="main
                           backdrop-blur-sm rounded-2xl mx-10 
                           bg-radial-[at_50%_75%]  from-[#25524ffb]/20 via-bgtransparent/10 to-website/40">
                        <div className="top-part grid grid-cols-12 p-3 rounded-xl border border-border ">
                            <div className="img col-span-4 p-5 ">
                                <img src={products.img} alt="" />
                            </div>
                            <div className="Title col-span-8 pt-28 pl-14">
                                <h1 className='text-3xl text-gray-300 py-3'>{products.title}</h1>
                                <span className=' text-gray-300'>আপনার ওর্ডার ডেলিভারি পেতে ৫-৩০ মিনিট
                                    এর বেশি যদি বিলম্ব হয় অবশ্যই আমাদের সাপোর্টে ওর্ডার নাম্বার নিয়ে যোগাযোগ করতে হবে।</span>
                            </div>
                        </div>
                    </div>
                    {/* PACKAGE */}
                    <div className="PACKAGES">
                        <Package />
                    </div>
                </div>



            </div>

        </>
    );
};

export default TopUp;