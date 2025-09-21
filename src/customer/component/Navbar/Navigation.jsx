import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5"
import { VscAccount } from "react-icons/vsc"
import { IoCallOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"
import { GiHamburgerMenu } from "react-icons/gi"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Topnav from './TopNav'



const Navigation = ({ cart, setCart }) => {
  const [isOpen, setIsOpen] = useState(false)

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

              <div className="relative">
                {/* Bag Icon */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative p-2 rounded-full hover:bg-gray-800"
                >
                  <ShoppingBagIcon className="h-7 w-7 text-white hover:text-website transition" />

                  {/* Cart Count */}
                  {cart.length > 0 && (
                    <span className="absolute -top-[1px] -right-1 px-2 text-sm font-medium
                     text-white bg-red-500 rounded-full shadow">
                      {cart.length}
                    </span>
                  )}
                </button>

                {/* Dropdown / Sidebar */}
                {isOpen && (
                  <div className="absolute -right-[53px] mt-3 h-screen w-96 bg-gray-900 rounded-xl shadow-lg p-4
                   text-white z-50">
                    <h3 className="font-semibold border-b border-gray-700 pb-2 mb-2">
                      Shopping Cart
                    </h3>

                    {cart.length === 0 ? (
                      <p className="text-gray-400 text-sm">Your cart is empty</p>
                    ) : (
                      <ul className="space-y-2">
                        {cart.map((item, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center text-sm"
                          >
                            <span>{item.name}</span>
                            <span className="font-medium">${item.price}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Checkout Button */}
                    <button className="w-full mt-3 bg-website hover:bg-website/90 text-white py-2 rounded-lg transition">
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navigation
