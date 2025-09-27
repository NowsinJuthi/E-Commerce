import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Topup } from "../../Product/TopUp";

const GameTopUp = () => {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !flex !items-center !justify-center !w-10 !h-10 !rounded-full z-10`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
  };

  return (
    <div className="w-full lg:px-5 lg:py-5">
      <div className="transparents pt-6 pb-5 lg:px-4
      rounded-xl lg:bg-boxbg backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-white mb-3 border-l-4 border-gray-400 pl-3">
          Game Top Up
        </h1>

        {/* Desktop (lg and up) shows Slider */}
        <div className="hidden lg:block">
          <Slider {...settings}>
            {Topup.map((product) => (
              <Link to={`/${product.title}`} key={product.id}>
                <div className="p-2 group transition-all duration-300 hover:scale-105">
                  <div className="rounded-xl shadow-md bg-box hover:shadow-xl overflow-hidden">
                    <img
                      src={product.img}
                      className="w-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      alt={product.productTitle}
                    />
                    <div className="p-2 text-center text-gray-200">
                      <p className="font-medium truncate">{product.productTitle}</p>
                      <p className="text-sm">{product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>

        {/* Mobile & Tablet (grid layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3
         md:grid-cols-4 lg:hidden">
          {Topup.map((product) => (
            <Link to={`/${product.title}`} key={product.id}>
              <div className="p-2 group transition-all duration-300 hover:scale-105">
                <div className="rounded-xl shadow-md bg-box hover:shadow-xl overflow-hidden">
                  <img
                    src={product.img}
                    className="w-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    alt={product.productTitle}
                  />
                  <div className="p-2 text-center text-gray-200">
                    <p className="font-medium truncate">{product.productTitle}</p>
                    <p className="text-sm">{product.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameTopUp;
