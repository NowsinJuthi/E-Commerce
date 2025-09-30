import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Package from "./Package.jsx";
import { allProduct } from "../Product/AllProduct.js";
import Description from "../Description/Description.jsx";

const SingleMainPage = ({ cart, setCart }) => {
  const { title } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const singleProduct = allProduct.find(
      (fill) => fill.title.toLowerCase() === title.toLowerCase()
    );
    setProduct(singleProduct || null);
  }, [title]);

  if (!product) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-2xl">Product not found!</h1>
      </div>
    );
  }

  return (
    <div
      className="top bg-cover bg-center 3xl:mx-[20%] ">
      <div className="transparents ">

        {/* DESKTOP */}
        <div className="color lg:pt-5 pt-3">
          <div className="main hidden lg:block rounded-2xl mx-5
             backdrop-blur-sm drop-shadow-lg bg-boxbg">
            <div className="top-part grid grid-cols-12 p-3 rounded-xl">
              <div className="img col-span-4 p-5 ">
                <img src={product.img} alt={product.productTitle} />
              </div>
              <div className="Title col-span-8 pt-28 pl-14">
                <h1 className="text-3xl text-[#f1f1f1] py-3">
                  {product.productTitle}
                </h1>
                <span className=" text-gray-300">
                  আপনার ওর্ডার ডেলিভারি পেতে ৫-৩০ মিনিট এর বেশি যদি বিলম্ব হয় অবশ্যই
                  আমাদের সাপোর্টে ওর্ডার নাম্বার নিয়ে যোগাযোগ করতে হবে।
                </span>
              </div>
            </div>
          </div>


          {/* MOBILE */}
          <div className="color lg:hidden">
            <div className="main rounded-2xl mx-3 backdrop-blur-sm drop-shadow-lg bg-boxbg">
              <div className="top-part p-3 rounded-xl">
                <div className="img col-span-4">
                  <img src={product.img} alt={product.productTitle} />
                </div>
                <div className="Title col-span-8">
                  <h1 className="text-3xl text-[#f1f1f1] py-3">
                    {product.productTitle}
                  </h1>
                  <span className=" text-gray-300">
                    আপনার ওর্ডার ডেলিভারি পেতে ৫-৩০ মিনিট এর বেশি যদি বিলম্ব হয় অবশ্যই
                    আমাদের সাপোর্টে ওর্ডার নাম্বার নিয়ে যোগাযোগ করতে হবে।
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* PACKAGE */}
          <div className="PACKAGES">
            <Package product={product} cart={cart} setCart={setCart} />
          </div>
        </div>

        <Description />
      </div>
    </div>
  );
};

export default SingleMainPage;
