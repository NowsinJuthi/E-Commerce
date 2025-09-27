import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AllOptions from "../Payment/AllOptions";

const CheckOutPage = ({ cart, setCart }) => {
  const handleRemove = (id) => setCart(cart.filter((item) => item.id !== id));

  const subtotal = cart.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );

  return (
    <div className="main grid grid-cols-1 lg:grid-cols-12 gap-6 text-gray-200 p-4">
      {/* LEFT SIDE: Customer Info */}
      <div className="left-side col-span-6 rounded-2xl bg-boxbg backdrop-blur-sm shadow-[0_-0.5px_20px_rgba(0.1,0,0,0.5)] p-5">
        <h1 className="text-2xl pb-3">Customer Information</h1>
        <hr className="border-gray-600 mb-5" />

        <form className="space-y-5">
          {/* USERNAME */}
          <div className="relative">
            <input
              type="text"
              name="username"
              required
              className="peer w-full p-3 rounded-md bg-[#0b2440] text-gray-200 outline-none"
            />
            <span className="absolute left-3 top-2 text-slate-400 transition-all peer-focus:text-green 
            peer-focus:text-sm peer-focus:-translate-y-4 peer-valid:text-sm peer-valid:-translate-y-4">
              Your Name
            </span>
          </div>

          {/* STATE */}
          <div className="relative">
            <input
              type="text"
              name="state"
              required
              className="peer w-full p-3 rounded-md bg-[#0b2440] text-gray-200 outline-none "
            />
            <span className="absolute left-3 top-2 text-slate-400 transition-all peer-focus:text-green peer-focus:text-sm peer-focus:-translate-y-4 peer-valid:text-sm peer-valid:-translate-y-4">
              State
            </span>
          </div>

          {/* MOBILE NUMBER */}
          <div className="relative">
            <input
              type="text"
              name="number"
              required
              className="peer w-full p-3 rounded-md bg-[#0b2440] text-gray-200 outline-none "
            />
            <span className="absolute left-3 top-2 text-slate-400 transition-all peer-focus:text-green peer-focus:text-sm peer-focus:-translate-y-4 peer-valid:text-sm peer-valid:-translate-y-4">
              Mobile Number
            </span>
          </div>

          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full p-3 rounded-md bg-[#0b2440] text-gray-200 outline-none "
            />
            <span className="absolute left-3 top-2 text-slate-400 transition-all peer-focus:text-green peer-focus:text-sm peer-focus:-translate-y-4 peer-valid:text-sm peer-valid:-translate-y-4">
              Email Address
            </span>
          </div>

          {/* NOTE */}
          <div className="relative">
            <textarea
              name="note"
              required
              className="peer w-full p-3 h-24 rounded-md bg-[#0b2440] text-gray-200 outline-none focus:border-green resize-none"
            ></textarea>
            <span className="absolute left-3 top-2 text-slate-400 transition-all peer-focus:text-green peer-focus:text-sm peer-focus:-translate-y-4 peer-valid:text-sm peer-valid:-translate-y-4">
              Note
            </span>
          </div>
        </form>
      </div>

      {/* RIGHT SIDE: Order Summary */}
      <div className="right-side col-span-6 rounded-2xl bg-boxbg backdrop-blur-sm drop-shadow-lg p-5">
        <h1 className="text-2xl mb-5">Order Summary</h1>

        <div className="space-y-6">
          {cart.length === 0 ? (
            <>
              <img className="w-[80%] h-[50%] mx-auto" src="/images/empty.png" alt="Empty cart" />
              <p className="text-gray-300 text-2xl text-center">Your cart is empty</p>
              <div className="shopping text-center pb-5">
                <Link
                  to="/"
                  className="flex justify-center items-center text-gray-200 text-sm hover:text-website transition-colors duration-200"
                >
                  <span>Continue Shopping</span>
                  <IoIosArrowRoundForward className="mt-1" size={25} />
                </Link>
              </div>
            </>
          ) : (
            <>
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-box rounded-xl p-4"
                >
                  {/* IMAGE + DETAILS */}
                  <div className="sm:col-span-8 flex gap-4 items-center">
                    <img
                      src={product.img}
                      alt={product.productTitle}
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div>
                      <p className="text-sm lg:text-lg">{product.productTitle}</p>
                      <p className="text-sm text-gray-400">Package: {product.package}</p>
                      {product.categorys === "games to up" && (
                        <p className="text-xs text-gray-400">Player ID: {product.playerId}</p>
                      )}
                    </div>
                  </div>

                  {/* PRICE INFO */}
                  <div className="sm:col-span-4 text-sm lg:text-lg space-y-1">
                    <p>Price: {product.productPrice} TK</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>SubTotal: {product.productPrice * product.quantity} TK</p>
                  </div>

                  <button
                    onClick={() => handleRemove(product.id)}
                    className="text-red-400 hover:text-red-600 text-sm sm:col-span-12 text-center"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* FINAL SUBTOTAL (only once) */}
              <div className="text-center mt-6 text-gray-200 bg-box py-2.5 rounded-xl hover:bg-[#39557c]">
                <h2 className="text-lg font-bold">Cart Totals: {subtotal} TK</h2>
              </div>

              {/* <AllOptions/> */}
              {/* ORDER BUTTON */}
              <div className="mt-6">
                <button className="w-full cursor-pointer bg-box
                   text-gray-200 py-3 rounded-xl hover:bg-[#39557c]">
                  Order Now
                </button>
              </div>
            </>
          )}
        </div>



      </div>
    </div>
  );
};

export default CheckOutPage;
