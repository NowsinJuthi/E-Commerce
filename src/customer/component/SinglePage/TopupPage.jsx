import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Topup } from "../Product/TopUp.js";
import Package from "./Package.jsx";

const TopupPage = ({ cart, setCart }) => {
  const { title } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const singleProduct = Topup.find(
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
      className="top bg-cover bg-center"
      style={{
        backgroundImage: `url(${product.bgimg || "/images/bg.jpg"})`,
      }}>

        
      <div className="transparents bg-imgbg pt-6">
        <div className="main backdrop-blur-sm rounded-2xl mx-5 
             bg-background">
          <div className="top-part grid grid-cols-12 p-3 rounded-xl border border-border">
            <div className="img col-span-4 p-5 ">
              <img src={product.img} alt={product.productTitle} />
            </div>
            <div className="Title col-span-8 pt-28 pl-14">
              <h1 className="text-3xl text-gray-300 py-3">
                {product.productTitle}
              </h1>
              <span className=" text-gray-300">
                আপনার ওর্ডার ডেলিভারি পেতে ৫-৩০ মিনিট এর বেশি যদি বিলম্ব হয় অবশ্যই
                আমাদের সাপোর্টে ওর্ডার নাম্বার নিয়ে যোগাযোগ করতে হবে।
              </span>
            </div>
          </div>
        </div>

        {/* PACKAGE */}
        <div className="PACKAGES">
          <Package product={product} cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
};

export default TopupPage;
