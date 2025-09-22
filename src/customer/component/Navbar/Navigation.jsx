import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline, IoCallOutline } from "react-icons/io5"
import { VscAccount } from "react-icons/vsc"
import { GoClock } from "react-icons/go"
import { GiHamburgerMenu } from "react-icons/gi"
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Topnav from './TopNav'

const Navigation = ({ cart, setCart }) => {
  const cartRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false); // mobile nav
  const [cartOpen, setCartOpen] = useState(false); // cart sidebar

  const subtotal = cart.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);

  // Close cart on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };

    if (cartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartOpen]);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="sticky top-0 z-[50] bg-nav">
      <Topnav />

      {/* Navbar */}
      <div className="text-white">
        {/* Mobile */}
        <div className="lg:hidden relative">
          <GiHamburgerMenu
            onClick={() => setMenuOpen(!menuOpen)}
            className="h-7 w-7 ml-3 cursor-pointer"
          />
          {menuOpen && (
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
              <img src="/images/whitelogo.png" alt="logo" className="w-48" />
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
          <div className="col-span-3 flex justify-center items-center gap-10">
            <IoSearchOutline className="h-6 w-6 cursor-pointer hover:text-green" />

            <Link to={'/log-in'}>
              <div className="flex items-center gap-2 cursor-pointer hover:text-green pl-2">
                <VscAccount className="h-6 w-6" /> <span>Log In</span>
              </div>
            </Link>

            {/* CART */}
            <div className="relative">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative p-2 rounded-full hover:bg-gray-800 transform transition-transform duration-500"
              >
                <ShoppingBagIcon className="h-7 w-7 text-white hover:text-website transition" />
                {cart.length > 0 && (
                  <span className="absolute -top-[1px] -right-1 px-2 text-sm font-medium text-white bg-red-500 rounded-full shadow">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Sidebar */}
              <div
                ref={cartRef}
                className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-gray-900 border-l border-dotted border-boxbg shadow-lg p-4 text-white z-50 transform transition-transform duration-500
                  ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
              >
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <h3 className="font-semibold text-xl">Shopping Cart</h3>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-800 bg-red-500"
                  >
                    <XMarkIcon className="h-6 w-6 text-white" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-gray-400 text-sm mt-4">Your cart is empty</p>
                ) : (
                  <div>
                    <ul className="divide-y divide-gray-700">
                      {cart.map((product, index) => (
                        <li key={index} className="flex items-center gap-3 py-4">
                          <img src={product.img} alt="" className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <p className="font-medium">{product.productTitle}</p>
                            <p className="text-sm text-gray-400">{product.package}</p>
                            {product.categorys === "games to up" && (
                              <p className="text-sm text-gray-400">Player ID: {product.playerId}</p>
                            )}
                            <p className="text-sm">Qty: {product.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p>{product.productPrice * product.quantity} TK</p>
                            <button
                              onClick={() => handleRemove(product.id)}
                              className="text-red-500 hover:underline text-xs"
                            >
                              Remove
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Cart totals */}
                    <div className="mt-4 text-right font-bold">
                      Cart Total: {subtotal} TK
                    </div>

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
