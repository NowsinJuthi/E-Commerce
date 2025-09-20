import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { giftCard  } from "../../Product/GiftCard";
import { useState } from "react";

const GiftCard = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    
      function Arrow(props) {
        const { className, style, onClick, type } = props;
        if (type === "prev" && currentSlide === 0) return null;
    
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
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
          {
            breakpoint: 1280, // lg
            settings: { slidesToShow: 4 },
          },
          {
            breakpoint: 1024, // md
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 768, // sm
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 480, // xs
            settings: { slidesToShow: 1 },
          },
        ],
      };
    


    return (
        <div className="slider-container w-full px-5 py-5">
      <div className="transparents pt-6 pb-5 px-4 mb-5 rounded-xl drop-shadow-lg bg-boxbg backdrop-blur-8xl">
        <h1 className="text-3xl font-bold text-white mb-3 border-l-4 border-gray-400 pl-3">
          Gift Card
        </h1>

        <Slider {...settings}>
          {
          giftCard.map((product) => (
            <Link to={`/${product.title}`} key={product.id}>
              <div
                className="main p-2 group transition-all duration-300 
                hover:scale-105">
                <div className="rounded-xl shadow-md bg-box 
                  hover:shadow-xl drop-shadow-lg overflow-hidden">
                  <img
                    src={product.img}
                    className="w-full object-contain p-2 
                    group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-2 text-center">
                    <p className="text-sm font-medium text-white truncate">
                      {product.productTitle}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
    );
};

export default GiftCard;