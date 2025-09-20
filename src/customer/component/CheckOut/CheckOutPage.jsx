import React from 'react';

const CheckOutPage = ({ cart, setCart, id, img }) => {
  const handleRemove = (id) => setCart(cart.filter(item => item.id !== id));

  const subtotal = cart.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);

  return (
    <div className="main grid grid-cols-12 text-gray-200">
      {/* LEFT SIDE: Customer Info */}
      <div className="left-side col-span-6 mr-3 ml-5 my-10 p-5 rounded-2xl
       bg-boxbg backdrop-blur-sm shadow-[0_-0.5px_20px_rgba(0.1,0,0,0.5)]">
        <div className="all-info">
          <h1 className='text-2xl pb-2'>Customer Information</h1>
          <hr className='text-gray-600' />


          <form action="submit">
            <div className="username pb-3 text-center pt-10 w-[60%]">

              {/* USENAME */}
              <label>
                <input
                  type="text"
                  name="username"
                  required
                  className='p-2 rounded-md w-[575px] peer
                                              bg-[#0b2440] border-opacity-50 outline-none 
                                              focus:border-green peer text-gray-200 mb-4'/>
                <span className='w-30 text-[16px] text-slate-400 rounded-[5%]
                                            left-1/4 -mt-12 tracking-wide peer-focus:text-green pointer-events-none
                                            peer-focus:text-[13px] peer-focus:-translate-y-4 text-opacity-80 absolute transition duration-200 
                                           backdrop-blur-sm backdrop-opacity-5
                                           -ml-36 peer-valid:text-[20px] peer-valid:-translate-y-10'>
                  Your Name
                </span>
              </label>


              {/* STATE */}
              <label>
                <input
                  type="text"
                  name="state"
                  required
                  className='p-2 rounded-md w-[575px] peer
                                              bg-[#0b2440] border-opacity-50 outline-none 
                                              focus:border-green peer text-gray-200 mb-4'
                />
                <span className='w-30 text-[16px] text-slate-400 rounded-[5%]
                                            left-1/4 -mt-12 tracking-wide peer-focus:text-green pointer-events-none
                                            peer-focus:text-[13px] peer-focus:-translate-y-4 text-opacity-80 absolute transition duration-200 
                                           backdrop-blur-sm backdrop-opacity-5
                                           -ml-40 peer-valid:text-[20px] peer-valid:-translate-y-10'>
                  State
                </span>
              </label>



              {/* MOBILE-NUMBER */}

              <label>
                <input
                  type="text"
                  name="number"
                  required
                  className='p-2 rounded-md w-[575px] peer
                                              bg-[#0b2440] border-opacity-50 outline-none 
                                              focus:border-green peer text-gray-200 mb-4'
                />
                <span className='w-30 text-[16px] text-slate-400 rounded-[5%]
                                            left-1/4 -mt-12 tracking-wide peer-focus:text-green pointer-events-none
                                            peer-focus:text-[13px] peer-focus:-translate-y-4 text-opacity-80 absolute transition duration-200 
                                           backdrop-blur-sm backdrop-opacity-5
                                           -ml-30 peer-valid:text-[20px] peer-valid:-translate-y-10'>
                  Mobile Number
                </span>
              </label>


              {/* EMAIL-ADDRESS */}

              <label>
                <input
                  type="text"
                  name="email"
                  required
                  className='p-2 rounded-md w-[575px] peer
                                              bg-[#0b2440] border-opacity-50 outline-none 
                                              focus:border-green peer text-gray-200 mb-4'
                />
                <span className='w-30 text-[16px] mb-4 text-slate-400 rounded-[5%]
                                            left-1/4 -mt-12 tracking-wide peer-focus:text-green pointer-events-none
                                            peer-focus:text-[13px] peer-focus:-translate-y-4 text-opacity-80 absolute transition duration-200 
                                           backdrop-blur-sm backdrop-opacity-5
                                           -ml-32 peer-valid:text-[20px] peer-valid:-translate-y-10'>
                  Email Address
                </span>
              </label>

              {/* NOTE */}

              <label className="relative block">
                <textarea
                  name="note"
                  required
                  className="peer p-2 rounded-md w-[575px] h-20 align-top
               bg-[#0b2440]  outline-none
               focus:border-green text-gray-200 mb-4 resize-none"
                ></textarea>

                <span
                  className="absolute left-3 top-2 text-[15px] text-slate-400 tracking-wide
               pointer-events-none text-opacity-80 transition duration-200
               peer-focus:text-green peer-focus:text-[12px] peer-focus:-translate-y-4
               peer-valid:text-green peer-valid:text-[12px] peer-valid:-translate-y-4"
                >
                  Note
                </span>
              </label>

            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE: Order Summary */}
      <div className="right-side col-span-6 ml-3 mr-5 my-10 p-5 rounded-2xl
      bg-boxbg backdrop-blur-sm drop-shadow-lg">

        <div className='w-[99%] mx-auto rounded-2xl
        bg-box drop-shadow-lg'>
          <h1 className='text-2xl p-5 '>Order Summery</h1>

          {cart.map((product, index) => (
            <>
              <hr className='text-gray-600 mx-5' />

              <div key={index} className="all-itmes p-5 text-sm grid grid-cols-12 items-center gap-2">

                <div className="id col-span-8 grid grid-cols-6">
                  <img src={product.img} alt="" className="w-28 h-28 col-span-3" />
                  <p className='col-span-3 pt-12 text-[14px]'>Player ID: {product.playerId}</p>
                </div>

                <div className="buy-info col-span-4">
                  <p className=' pb-3 text-[15px]'>Price: {product.productPrice} TK</p>
                  <p className=' pb-3 text-[15px]'>Quantity: {product.quantity}</p>
                  <p className='font-semibold pb-3 text-[15px]'>SubTotal: {product.productPrice * product.quantity} TK</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(product.id)}
                className='col-span-1 cursor-pointer hover:text-red-600 pb-4 mx-auto w-[99%]'>
                Remove
              </button>
            </>
          ))}
          <div className="subtotal pt-5 text-right pr-10">
            <h2 className="text-lg font-bold">
              Cart Totals: {subtotal} TK
            </h2>
          </div>

          <div className="order">
            <button className='mt-6 mb-5 mx-7 w-[90%] cursor-pointer bg-button text-gray-200 py-2
                    rounded-xl hover:bg-[#39557c] '>
              Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
