import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProduct } from '../Product/AllProduct';

const Description = () => {
  const { title } = useParams();
  const [product, setProduct] = useState(null);
  const [show, setShow] = useState("description");

  const handleClick = (selection) => {
    setShow(selection);
  }

  useEffect(() => {
    if (title) {
      const foundProduct = allProduct.find(
        item => item.title.toLowerCase() === title.toLowerCase()
      );
      setProduct(foundProduct || null);
    }
  }, [title]);

  if (!product) {
    return (
      <div className="main">
        <p className="text-gray-400">No description available</p>
      </div>
    );
  }
  

  return (
    <div className="main text-gray-200">
      <div className="all-info bg-boxbg lg:mx-5 mx-3 lg:p-6 p-2 rounded-2xl shadow-lg mb-7">

        {/* Tabs */}
        <div className="mx-auto w-full text-sm flex justify-center
        border-gray-700 space-x-3 lg:text-lg font-medium">
          <button className={`pb-2 px-2 transition ${show === "description" ? "border-t-2 rounded-lg" : "text-gray-400 hover:text-gray-200"}`}
            onClick={() => handleClick("description")}>
            Description
          </button>

          <button
            className={`pb-2 px-2 transition ${show === "review" ? "border-t-2 rounded-lg" : "text-gray-400 hover:text-gray-200"}`}
            onClick={() => handleClick("review")}>
            Review
          </button>

          <button
            className={`pb-2 px-2 transition ${show === "shippingAndDelivery" ? "border-t-2 rounded-lg" : "text-gray-400 hover:text-gray-200"}`}
            onClick={() => handleClick("shippingAndDelivery")}>
            Shipping & Delivery
          </button>
        </div>

        {/* Content */}
        <div className="info py-6 w-full  text-sm leading-relaxed">
          {show === "description" && (
            <p className="text-gray-300">{product.description}</p>
          )}

          {show === "review" && (
            <div className="space-y-3">
              <p className="font-semibold">
                Rating: <span className="text-yellow-400">{product.review.rating} ⭐</span>
              </p>
              <p>Total Reviews: {product.review.totalReviews}</p>
              <div className="space-y-2">
                {product.review.comments.map((c, i) => (
                  <p key={i} className="bg-gray-800 p-2 rounded-lg">
                    <b className="text-green">{c.user}:</b> {c.comment}
                  </p>
                ))}
              </div>
            </div>
          )}

          {show === "shippingAndDelivery" && (
            <div className="lg:grid grid-cols-12">

              <div className="left col-span-6">
                <img src="/images/shipping.png" alt="" />
              </div>

              <div className="right col-span-6 p-4">
                <div className="top-up pb-14">
                  <h1 className='text-3xl pb-3'>গেম টপ আপ</h1>
                  <ul>
                    <li className='list-disc '>
                      <p className='wrap-break-word'> আপনার ওর্ডার ডেলিভারি পেতে ৫-৩০ মিনিট এর বেশি বিলম্ব হলে, অবশ্যই আমাদের সাপোর্টে ওর্ডার নাম্বার নিয়ে যোগাযোগ করতে হবে। ২৪ ঘন্টার মধ্যে যদি আপনার কোন অভিযোগ থাকে, সেক্ষেত্রে অবশ্যই আমাদের সাপোর্টের যোগাযোগ করতে হবে।
                        অন্যথায় ২৪ ঘন্টা পর কোনপ্রকার অভিযোগ কিংবা রিফান্ড অনুরোধ গ্রহণ করা হবে না।</p>

                    </li>
                  </ul>

                  <ul className='pt-5'>
                    <li className='list-disc'>
                      যদি কোন কারণে আপনার আইডিতে টপ আপ না করা যায় সে ক্ষেত্রে আপনি ৩০ মিনিটের মধ্যে
                      আপনার টাকা যে নাম্বার থেকে পেমেন্ট করেছেন সেই নাম্বারে রিফান্ড পেয়ে যাবেন।
                    </li>
                  </ul>

                </div>

                <div className="gift-card">
                  <h1 className='text-3xl pb-3'>গিফট কার্ড এবং সাবস্ক্রিপশন</h1>
                  <ul className='pt-'>
                    <li className='list-disc'>
                      আপনার ওর্ডার ডেলিভারি পেতে ৫-৩০ মিনিট এর বেশি বিলম্ব হলে,
                      অবশ্যই আমাদের সাপোর্টে ওর্ডার নাম্বার নিয়ে যোগাযোগ করতে হবে।
                      ২৪ ঘন্টার মধ্যে যদি আপনার কোন অভিযোগ থাকে, সেক্ষেত্রে অবশ্যই আমাদের
                      সাপোর্টের যোগাযোগ করতে হবে। অন্যথায় ২৪ ঘন্টা পর কোনপ্রকার অভিযোগ কিংবা
                      রিফান্ড অনুরোধ গ্রহণ করা হবে না।
                    </li>
                  </ul>

                  <ul>
                    <li className='list-disc pt-5'>
                      গিফট কার্ড ডেলিভারি দেওয়ার পর কোন প্রকার অভিযোগ কিংবা রিফান্ড অনুরোধ গ্রহণ করা হবে না।
                    </li>
                  </ul>

                  <ul>
                    <li className='list-disc pt-5'>
                      যদি কোন কারনেই গিফট কার্ড এর স্টক শেষ হয়ে যায় সে ক্ষেত্রে ৩০ মিনিটের মধ্যে আপনি যে নাম্বার থেকে
                      পেমেন্ট করবেন সেই নাম্বারে টাকা রিফান্ড পেয়ে যাবেন।
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default Description;
