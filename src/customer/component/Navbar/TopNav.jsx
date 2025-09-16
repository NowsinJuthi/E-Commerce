import React from 'react';
import { IoCallOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"

const Topnav = () => {
    return (
        <>
            <div className="sticky top-0 z-[50] bg-gradient-to-r from-[#25524ffb]/40 via-bgtransparent/70 to-website/40">
                <div className="w-full">

                    {/* Top Header */}
                    <div className="text-white grid grid-cols-12 py-1">
                        <h2 className="col-span-9 pl-5">Welcome To UniQbd</h2>
                        <div className="col-span-3 grid grid-cols-2 text-sm">
                            <div className="flex items-center gap-2"><GoClock /> 11AM - 1AM</div>
                            <div className="flex items-center gap-2"><IoCallOutline /> 01777139777</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topnav;