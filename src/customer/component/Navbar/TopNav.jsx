import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";

const Topnav = () => {
    return (
        <div className="sticky top-0 z-[50] bg-background shadow-md">
            <div className="w-full">
                {/* Top Header */}
                <div className="text-white grid
                 md:grid-cols-2 lg:grid-cols-12 gap-2 py-2 px-4 text-sm sm:text-base">
                    
                    {/* Left side: Welcome */}
                    <h2 className="col-span-1 md:col-span-1 lg:col-span-9 text-center md:text-left">
                        Welcome To UniQbd
                    </h2>
                    
                    {/* Right side: Contact info */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-2 pl-10 lg:pl-0
                      sm:flex-row justify-center md:justify-end items-center sm:gap-6">
                        <div className="flex items-center gap-2">
                            <GoClock className="text-lg" /> 
                            <span>11AM - 1AM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoCallOutline className="text-lg" /> 
                            <span>01777139777</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topnav;
