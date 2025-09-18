import React from 'react';

const CheckOutPage = ({ cart, setCart, id, img }) => {
  const handleRemove = (id) => setCart(cart.filter(item => item.id !== id));

  const subtotal = cart.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);

  return (
    <div className="main grid grid-cols-12 text-gray-200">
      {/* LEFT SIDE: Customer Info */}
      <div className="left-side col-span-6 mr-3 ml-5 my-10 p-5 rounded-2xl
       bg-background backdrop-blur-sm border border-border">
        <div className="all-info">
          <h1 className='text-2xl pb-2'>Customer Information</h1>
          <hr className='text-gray-600' />
          <p className='pt-3 pb-2'>Your Name</p>
          <input className='p-2 rounded-md w-full pl-3 bg-box' type="text" placeholder='Enter your name' />
          <p className='pt-3 pb-2'>State</p>
          <select className="w-full bg-box rounded-md 
          p-2 pl-3 text-base text-gray-400 bg-box">
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Khulna</option>
            <option>Rajshahi</option>
            <option>Barishal</option>
            <option>Sylhet</option>
            <option>Rangpur</option>
            <option>Mymensingh</option>
          </select>
          <p className='pt-3 pb-2'>Mobile Number</p>
          <input className=' p-2 rounded-md w-full pl-3 bg-box' type="text" placeholder='Enter your contact number' />
          <p className='pt-3 pb-2'>Email</p>
          <input className=' p-2 rounded-md w-full pl-3 bg-box' type="email" placeholder='Enter your email' />
        </div>
      </div>

      {/* RIGHT SIDE: Order Summary */}
      <div className="right-side col-span-6 ml-3 mr-5 my-10 p-5 rounded-2xl border
      border-border bg-background backdrop-blur-sm">
        <div className='w-[99%] bg-box mx-auto rounded-2xl border border-border'>
          <h1 className='text-2xl p-5 '>Order Summery</h1>

          {cart.map((product, index) => (
            <>
              <hr className='text-gray-600 mx-5' />

              <div key={index} className="all-itmes p-5 grid grid-cols-12 items-center gap-2">
                <img src={product.img} alt="" className="w-28 h-28 col-span-3" />
                <p className='col-span-3'>Price: {product.productPrice} TK</p>
                <p className='col-span-3'>Quantity: {product.quantity}</p>
                <p className='col-span-3 font-semibold'>Total: {product.productPrice * product.quantity} TK</p>
              </div>
              <button
                onClick={() => handleRemove(product.id)}
                className='col-span-1 cursor-pointer hover:text-red-600 pb-4 mx-auto w-[99%]'>
                Remove
              </button>
            </>
          ))}
          <div className="subtotal pt-5 text-right pr-10">
            <h2 className="text-xl font-bold">
              Subtotal: {subtotal} TK
            </h2>
          </div>

          <div className="order">
            <button className='mt-6 mb-5 mx-7 w-[90%] cursor-pointer bg-button text-gray-200 py-2
                    rounded-xl hover:bg-[#11ae68] '>
              Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
