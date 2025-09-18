import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameTopUp from "../HomeSectionCard/GameTopUp";

const Homeslider = () => {
  let sliderRef = useRef(null);

  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="col-span-12 w-full">
      <div className="transparents max-w-screen">
       <Slider
        className="slider-container"
        ref={(slider) => (sliderRef = slider)}
        {...settings}>
        <div>
          <img
            className="rounded-lg w-full h-64 sm:h-80 lg:h-[500px] object-cover"
            src="/images/main_slider_img1.jpg"
            alt="Slider 1"
          />
        </div>
        <div>
          <img
            className="rounded-lg w-full h-64 sm:h-80 lg:h-[500px] object-cover"
            src="/images/main_slider_img2.jpg"
            alt="Slider 2"
          />
        </div>
        <div>
          <img
            className="rounded-lg w-full h-64 sm:h-80 lg:h-[500px] object-cover"
            src="/images/main_slider_img3.jpg"
            alt="Slider 3"
          />
        </div>
      </Slider>

   
      </div>
    </div>
  );
};

export default Homeslider;
