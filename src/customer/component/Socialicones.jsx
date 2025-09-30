import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { TbMessageCircleQuestion } from "react-icons/tb";

const Socialicones = () => {
  const [openIcones, setOpenIcones] = useState(false);

  useEffect(() => {
    if (openIcones) {
      const timer = setTimeout(() => {
        setOpenIcones(false);
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [openIcones]);

  return (
  
      <div className=" main-part fixed bottom-10 right-7 transition-all duration-500 animate-bounce">
        <div
          className={`icones absolute bottom-20  right-0 flex flex-col items-end space-y-4 transition-all duration-500 ${
            openIcones ? "opacity-100 scale-100" : "bottom-0"
          }`}
        >
          <div className="whatsapp">
            <a href="">
              <FaWhatsapp
                className={`h-12 w-12 p-2 text-white rounded-full bg-gradient-to-t from-green-500 via-green-400 to-green-200 transition-all duration-500 
                         transform ${
                           openIcones
                             ? "translate-y-0 rotate-0 delay-75"
                             : "translate-y-52 -rotate-90"
                         }`}
              />
            </a>
          </div>

          <FaFacebookMessenger 
            className={`h-12 w-12 p-2 text-white rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 transform ${
              openIcones
                ? "translate-y-0 rotate-0 delay-75"
                : "translate-y-36 -rotate-90"
            }`}
          />
          <MdOutlineCall
            className={`h-12 w-12 p-2 text-white rounded-full bg-gradient-to-t from-green-600 via-green-500 to-green-300 transition-all duration-500 transform ${
              openIcones
                ? "translate-y-0 rotate-0 delay-75"
                : "translate-y-20 -rotate-90"
            }`}
          />
        </div>

        <div
          onClick={() => setOpenIcones((prev) => !prev)}
          className="open-close relative flex items-center justify-center cursor-pointer"
        >
          {/* <span className="relative flex h-8 w-8">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-b from-green from-70% to-white opacity-100 to-90%"></span>
          <span className="relative inline-flex rounded-full h-8 w-8 bg-gradient-to-b from-green to-white"></span>
        </span> */}
          {openIcones ? (
            <span className="relative flex h-12 w-12">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-100 to-90%"></span>
              <IoCloseOutline
                className={`relative h-12 w-12 bg-gradient-to-l from-green-500 via-green-400 to-green-200 text-white rounded-full z-20 transition-transform duration-500 ${
                  openIcones ? "rotate-90" : "rotate-0"
                }`}
              />
            </span>
          ) : (
            <span className="relative flex h-12 w-12">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-100 to-90%"></span>
              <TbMessageCircleQuestion
                className={`relative h-12 w-12 bg-gradient-to-t from-green-500 via-green-400 to-green-200 text-white p-2 rounded-full z-20 transition-transform duration-500 ${
                  openIcones ? "rotate-90" : "rotate-0"
                }`}
              />
            </span>
          )}
        </div>
      </div>
   
  );
};

export default Socialicones;
