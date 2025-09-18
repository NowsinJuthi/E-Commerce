import React from 'react';

const CheckOutPage = ({ cart, setCart,id,img }) => {
  const handleRemove = (id) => setCart(cart.filter(item => item.id !== id));

  const subtotal = cart.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);

  return (
    <div className="main grid grid-cols-12 text-gray-200">
      {/* LEFT SIDE: Customer Info */}
      <div className="left-side col-span-6 mr-3 ml-5 my-10 p-5 rounded-2xl bg-background backdrop-blur-sm border-border">
        <h1 className='text-2xl pb-2'>Customer Information</h1>
        <hr className='text-gray-600' />
        <p className='pt-3 pb-2'>Your Name</p>
        <input className='border border-gray-500 p-1 rounded-md w-full pl-3 bg-box' type="text" placeholder='Enter your name' />
        <p className='pt-3 pb-2'>State</p>
        <select className="w-full border border-gray-500 bg-box rounded-md p-1 pl-3 text-base text-gray-400">
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
        <input className='border border-gray-500 p-1 rounded-md w-full pl-3 bg-box' type="text" placeholder='Enter your contact number' />
        <p className='pt-3 pb-2'>Email</p>
        <input className='border border-gray-500 p-1 rounded-md w-full pl-3 bg-box' type="email" placeholder='Enter your email' />
      </div>

      {/* RIGHT SIDE: Order Summary */}
      <div className="right-side col-span-6 ml-3 mr-5 my-10 p-5 rounded-2xl bg-background backdrop-blur-sm">
        <h1 className='text-2xl pb-3'>Order Summary</h1>
        {
        cart.map((product, index) => (
          <div key={index}>
            <hr className='text-gray-600' />
            <div className="all-items pt-5 grid grid-cols-12 items-center gap-2">
              <img src={product.img} alt="" className="w-28 h-28 col-span-3" />
              <p className='col-span-3'>Unit Price: {product.productPrice} TK</p>
              <p className='col-span-2'>Quantity: {product.quantity}</p>
              <p className='col-span-3 font-semibold'>Total: {product.productPrice * product.quantity} TK</p>
              <button
                onClick={() => handleRemove(product.id)}
                className='col-span-1 cursor-pointer hover:text-red-600'
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="subtotal pt-5 text-right">
          <h2 className="text-xl font-bold">
            Subtotal: {subtotal} TK
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
