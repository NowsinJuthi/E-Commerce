import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoIosArrowRoundForward } from "react-icons/io";
import Cookies from "js-cookie";
import { CiLogin } from "react-icons/ci";
import Topnav from "./TopNav";
import UserStore from "../store/UserStore";

const Navigation = ({ cart, setCart }) => {
  const navigate = useNavigate();

  // Mobile menu & cart
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  // Profile dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const profileRef = useRef(null);

  const userLogin = UserStore((state) => state.userLogin);
  const profileDetails = UserStore((state) => state.profileDetails);
  const logOutUser = UserStore((state) => state.logOutUser);
  const profileDetailsRequest = UserStore(
    (state) => state.profileDetailsRequest
  );

  // Calculate cart subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );

  // Fetch profile on token presence
  useEffect(() => {
    const token = Cookies.get("token");
    if (token && !userLogin) {
      profileDetailsRequest();
    }
  }, [userLogin, profileDetailsRequest]);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (userLogin || profileDetails) setShowDropdown((prev) => !prev);
  };

  const logoutUser = async () => {
    const success = await logOutUser();
    if (success) {
      sessionStorage.clear();
      localStorage.clear();
      setShowDropdown(false);
      navigate("/login");
    }
  };

  const handleRemove = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <div className="sticky top-0 z-[50] bg-nav">
      <div className="w-full">
        <Topnav />

        {/* Navbar */}
        <div className="text-white">
          {/* Mobile */}
          <div className="lg:hidden grid grid-cols-12 relative">
            {/* Hamburger + Menu */}
            <div className="list col-span-3 pt-4 relative">
              <GiHamburgerMenu
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-7 w-7 ml-3 cursor-pointer"
              />

              {/* Sliding Mobile Menu */}
              <div
                className={`fixed top-0 left-0 h-screen w-[80%] bg-boxbg text-white p-6 space-y-6 z-50 transform transition-transform duration-300 ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-800"
                  >
                    <XMarkIcon className="h-6 w-6 text-white" />
                  </button>
                </div>

                <ul className="flex flex-col gap-4 mt-4 text-lg">
                  <li>
                    <Link to="/" className="hover:text-green transition">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/git-card"
                      className="hover:text-green transition"
                    >
                      GIFT CARD
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/games-top-up"
                      className="hover:text-green transition"
                    >
                      GAMES TOP UP
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="hover:text-green transition">
                      SHOP
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-green transition">
                      CONTACT US
                    </Link>
                  </li>
                  <li>
                    {!userLogin ? (
                      <Link
                        to="/login"
                        className="flex items-center gap-2 mt-6"
                      >
                        <VscAccount className="h-6 w-6" /> Login / Register
                      </Link>
                    ) : (
                      <span
                        onClick={toggleDropdown}
                        className="flex items-center gap-2 mt-6 cursor-pointer"
                      >
                        <VscAccount className="h-6 w-6" />{" "}
                        {userLogin?.name || "Profile"}
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* Logo */}
            <div className="col-span-9 py-2 flex items-center">
              <Link to="/">
                <img src="/images/whitelogo.png" alt="logo" className="w-40" />
              </Link>
            </div>
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
              <li>
                <Link to="/" className="hover:text-green">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/git-card" className="hover:text-green">
                  GIFT CARD
                </Link>
              </li>
              <li>
                <Link to="/games-top-up" className="hover:text-green">
                  GAMES TOP UP
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-green">
                  SHOP
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green">
                  CONTACT US
                </Link>
              </li>
            </ul>

            {/* Right */}
            <div className="col-span-3 flex justify-center items-center gap-12 pr-6">
              <IoSearchOutline className="h-6 w-6 cursor-pointer hover:text-green" />

              {/* USER ACCOUNT */}
              <div
                className="relative cursor-pointer select-none"
                ref={profileRef}
              >
                {!userLogin ? (
                  <Link to="/login" className="">
                    {/* <CiLogin /> */}
                    Login
                  </Link>
                ) : (
                  <>
                    <span
                      onClick={toggleDropdown}
                      className="pl-6 hover:text-blue-600"
                    >
                      {userLogin?.name ||
                        (userLogin?.email
                          ? (() => {
                              const emailName = userLogin.email.split("@")[0];
                              const formatted =
                                emailName.charAt(0).toUpperCase() +
                                emailName.slice(1);
                              return formatted.length > 10
                                ? formatted.slice(0, 10) + "…"
                                : formatted;
                            })()
                          : null) ||
                        "Profile"}
                    </span>
                    {showDropdown && (
                      <div className="absolute right-0 mt-2 w-32 bg-boxbg border border-gray-300 rounded shadow-lg z-10">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setShowDropdown(false)}
                        >
                          My Profile
                        </Link>
                        <button
                          onClick={logoutUser}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            
                          Logout
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* CART */}
              <div className="relative">
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative p-2 rounded-full hover:bg-gray-800 transform transition-transform duration-500"
                >
                  <ShoppingBagIcon className="h-7 w-7 text-white hover:text-website transition" />
                  {cart.length > 0 && (
                    <span className="absolute -top-[1px] -right-1 px-2 text-sm font-medium text-white bg-red-500 rounded-full shadow">
                      {cart.length}
                    </span>
                  )}
                </button>

                {/* Cart Sidebar */}
                <div
                  ref={cartRef}
                  className={`fixed overflow-auto border-l border-dotted border-boxbg top-0 right-0 h-full w-[450px] bg-gray-900 shadow-lg p-2 text-white z-50 transform transition-transform duration-500 ${
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <h3 className="font-semibold text-3xl px-[94px] py-2 bg-box rounded-lg">
                      Shopping Cart
                    </h3>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="p-1 rounded-full hover:bg-gray-800"
                    >
                      <XMarkIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center mt-10">
                      <img
                        className="w-[80%] h-[50%] mx-auto"
                        src="/images/empty.png"
                        alt="empty cart"
                      />
                      <p className="text-gray-300 text-2xl my-4">
                        Your cart is empty
                      </p>
                      <Link
                        to="/"
                        className="flex items-center justify-center text-gray-200 text-sm hover:text-website transition-colors duration-200"
                      >
                        <span>Continue Shopping</span>
                        <IoIosArrowRoundForward className="mt-1" size={25} />
                      </Link>
                    </div>
                  ) : (
                    <ul className="bg-box h-screen rounded-lg mt-3">
                      {cart.map((product, index) => (
                        <li
                          key={index}
                          className="pt-5 grid grid-cols-12 items-center gap-2 text-xs"
                        >
                          <div className="col-span-8 grid grid-cols-12">
                            <img
                              src={product.img}
                              alt=""
                              className="w-20 h-20 ml-10 col-span-6"
                            />
                            <div className="package col-span-6 pt-4">
                              <p>{product.productTitle}</p>
                              <p>{product.package}</p>
                              {product.categorys === "games to up" && (
                                <p className="text-[14px]">
                                  Player ID: {product.playerId}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="col-span-4">
                            <p>Price: {product.productPrice} TK</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>
                              Subtotal:{" "}
                              {product.productPrice * product.quantity} TK
                            </p>
                          </div>

                          <button
                            onClick={() => handleRemove(product.id)}
                            className="col-span-1 cursor-pointer hover:text-red-600 py-4 w-full max-auto"
                          >
                            Remove
                          </button>
                          <hr className="text-gray-700 pb-5 w-[90%] mx-auto" />
                        </li>
                      ))}

                      <div className="subtotal pt-5 w-[50%] mx-auto pb-5">
                        <h2 className="text-xl font-bold">
                          Cart Totals: {subtotal} TK
                        </h2>
                      </div>

                      <div className="button mx-3">
                        <Link to="/cart">
                          <button className="w-full mt-3 bg-button hover:bg-[#2c4d75] text-white py-2 rounded-lg transition">
                            View Cart
                          </button>
                        </Link>
                        <Link to="/check-out">
                          <button className="w-full mt-3 bg-button hover:bg-[#2c4d75] text-white py-2 rounded-lg transition">
                            Order Now
                          </button>
                        </Link>
                      </div>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
