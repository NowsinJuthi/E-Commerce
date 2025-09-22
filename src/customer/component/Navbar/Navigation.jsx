import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5"
import { VscAccount } from "react-icons/vsc"
import { IoCallOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"
import { GiHamburgerMenu } from "react-icons/gi"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Topnav from './TopNav'
import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";



const Navigation = ({ cart, setCart }) => {
  const cartRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  const subtotal = cart.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);




  return (
    <div className="sticky top-0 z-[50] 
    bg-nav">
      <div className="w-full">

        <Topnav />
        {/* Navbar */}
        <div className="text-white">

          {/* Mobile */}
          <div className="lg:hidden relative">
            <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className="h-7 w-7 ml-3 cursor-pointer" />
            {isOpen && (
              <ul className="absolute top-12 left-0 w-full bg-black text-white p-4 space-y-3">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/git-card">GIFT CARD</Link></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li><Link to="/contact">CONTACT US</Link></li>
                <li className="flex items-center gap-2">
                  <VscAccount className="h-6 w-6" /> Login / Register
                </li>
              </ul>
            )}
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-12 items-center py-4 shadow-md">
            {/* Logo */}
            <div className="col-span-3 ml-4">
              <Link to="/">
                <img src="/images/whitelogo.png" alt="logo" className="w-50" />
              </Link>
            </div>

            {/* Menu */}
            <ul className="col-span-6 flex justify-center gap-8 text-sm">
              <li><Link to="/" className="hover:text-green">HOME</Link></li>
              <li><Link to="/git-card" className="hover:text-green">GIFT CARD</Link></li>
              <li><Link to="/games-top-up" className="hover:text-green">GAMES TOP UP</Link></li>
              <li><Link to="/shop" className="hover:text-green">SHOP</Link></li>
              <li><Link to="/contact" className="hover:text-green">CONTACT US</Link></li>
            </ul>

            {/* Right */}
            <div className="col-span-3 flex justify-center items-center gap-12 pr-6">
              <IoSearchOutline className="h-6 w-6 cursor-pointer hover:text-green" />

              <Link to={'/log-in'}>
                <div className="flex items-center gap-2 cursor-pointer hover:text-green">
                  <VscAccount className="h-6 w-6" /> <span>Log In</span>
                </div>
              </Link>



              {/* CART */}
              <div className="relative">
                {/* Bag Icon */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative p-2 rounded-full hover:bg-gray-800 transform transition-transform duration-500"
                >
                  <ShoppingBagIcon className="h-7 w-7 text-white hover:text-website transition" />

                  {cart.length > 0 && (
                    <span className="absolute -top-[1px] -right-1 px-2 text-sm font-medium
          text-white bg-red-500 rounded-full shadow">
                      {cart.length}
                    </span>
                  )}
                </button>

                {/* Dropdown / Sidebar */}
                <div
                  ref={cartRef}
                  className={`fixed border-l border-dotted border-boxbg top-0 right-0 h-full w-[450px] bg-boxbg shadow-lg p-4 text-white z-50
                               transform transition-transform duration-500
                             ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                  {/* Header with Exit Button */}
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-">
                    <h3 className="font-semibold text-3xl px-[94px] py-2 bg-boxbg rounded-lg">Shopping Cart</h3>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 rounded-full hover:bg-gray-800 bg-red-500">
                      <XMarkIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>

                  {cart.length === 0 ? (
                    <p className="text-gray-400 text-sm">Your cart is empty</p>
                  ) : (
                    <ul className="bg-boxbg rounded-lg">

                      {cart.map((product, index) => (
                        <>
                          <div key={index} className="all-itmes pt-5 grid grid-cols-12 items-center gap-2 text-xs">

                            <div className="left col-span-8 grid grid-cols-12">
                              <img src={product.img} alt="" className="w-20 h-20 ml-10 col-span-6" />

                              <div className="package col-span-6 pt-4">
                                 
                                  <p>{product.productTitle}</p>
                             

                                <p>{product.package}</p>
                                {
                                  product.categorys === "games to up" && (
                                    <p className='col-span-3 pt-12 text-[14px]'>Player ID: {product.playerId}</p>
                                  )
                                }
                                <p>Player ID: {product.playerId}</p>
                              </div>
                            </div>

                            <div className="right col-span-4">
                              <p className='col-span-3'>Price: {product.productPrice} TK</p>
                              <p className='col-span-2'>Quantity: {product.quantity}</p>
                              <p className='col-span-3'>SubTotal: {product.productPrice * product.quantity} TK</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemove(product.id)}
                            className='col-span-1 cursor-pointer hover:text-red-600 py-4 w-full max-auto'>
                            Remove
                          </button>
                          <hr className='text-gray-700 pb-5 w-[90%] mx-auto' />
                          <div className="subtotal pt-5 text-right pr-5 pb-5">
                            <h2 className="text-xl font-bold">
                              Cart Totals: {subtotal} TK
                            </h2>
                          </div>
                        </>
                      ))}
                    </ul>
                  )}

                  <Link to={'/cart'}>
                    <button className="w-full mt-3 bg-button hover:bg-[#2c4d75] text-white py-2 rounded-lg transition">
                      View Cart
                    </button>
                  </Link>
                  <Link to={'/check-out'}>
                    <button className="w-full mt-3 bg-button hover:bg-[#2c4d75] text-white py-2 rounded-lg transition">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>



            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navigation
