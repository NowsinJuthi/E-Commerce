import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5"
import { VscAccount } from "react-icons/vsc"
import { IoCallOutline } from "react-icons/io5"
import { GoClock } from "react-icons/go"
import { GiHamburgerMenu } from "react-icons/gi"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Topnav from './TopNav'



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-[50] bg-gradient-to-r from-[#25524ffb]/40 via-bgtransparent/70 to-website/40">
      <div className="w-full">

        <Topnav />
        {/* Navbar */}
        <div className="text-white">

          {/* Mobile */}
          <div className="lg:hidden relative">
            <GiHamburgerMenu
              onClick={() => setIsOpen(!isOpen)}
              className="h-7 w-7 ml-3 cursor-pointer"
            />
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
          <div className="hidden lg:grid grid-cols-12 items-center py-3">
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
              <li><Link to="/git-card" className="hover:text-green">GAMES TOP UP</Link></li>
              <li><Link to="/shop" className="hover:text-green">SHOP</Link></li>
              <li><Link to="/contact" className="hover:text-green">CONTACT US</Link></li>
            </ul>

            {/* Right */}
            <div className="col-span-3 flex justify-center items-center gap-12 pr-6">
              <IoSearchOutline className="h-6 w-6 cursor-pointer hover:text-green" />
              <div className="flex items-center gap-2 cursor-pointer hover:text-green">
                <VscAccount className="h-6 w-6" /> <span>Log In</span>
              </div>
              <div className="relative">
                <ShoppingBagIcon className="h-6 w-6 text-white hover:text-gray-500" />
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs font-medium text-white bg-red-500 rounded-full">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navigation
