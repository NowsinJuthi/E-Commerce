import React from "react";
import UserStore from "../store/UserStore";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Orders = () => {
  const { logOutUser } = UserStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOutUser();
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <title>Your Orders Details | UniQbd</title>
        <meta
          name="description"
          content="Login to your UniQbd account to access your dashboard and orders."
        />
        <meta
          name="keywords"
          content="UniQbd login, account login, user login"
        />
      </Helmet>
      <div className="main h-screen flex items-center justify-center p-6">
        <div className="cards max-w-6xl w-full flex gap-6">
          {/* Left Sidebar */}
          <div className="left w-80 bg-boxbg rounded-xl shadow-lg p-6">
            <p className="text-lg font-semibold text-gray-200 mb-4">
              MY ACCOUNT
            </p>
            <hr className="border-border  mb-4" />

            <ul className="space-y-2 text-gray-200 font-medium bg-box p-4 rounded-xl shadow-lg">
              {/* Dashboard */}
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-boxbg transition duration-200"
                >
                  <i className="fa-solid fa-gauge"></i>
                  Dashboard
                </Link>
              </li>

              {/* Orders */}
              <li>
                <Link
                  to="/order-info"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-boxbg transition duration-200"
                >
                  <i className="fa-solid fa-box"></i>
                  Orders
                </Link>
              </li>

              {/* Downloads */}
              <li>
                <Link
                  to="/downloads"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-boxbg transition duration-200"
                >
                  <i className="fa-solid fa-download"></i>
                  Downloads
                </Link>
              </li>

              {/* Address */}
              <li>
                <Link
                  to="/address"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-boxbg transition duration-200"
                >
                  <i className="fa-solid fa-location-dot"></i>
                  Address
                </Link>
              </li>

              {/* Account Details */}
              <li>
                <Link
                  to="/account-details"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-boxbg transition duration-200"
                >
                  <i className="fa-solid fa-user"></i>
                  Account Details
                </Link>
              </li>

              {/* Wishlist */}
              <li>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-boxbg transition duration-200"
                >
                  <i className="fa-solid fa-heart"></i>
                  Wishlist
                </Link>
              </li>

              {/* Logout */}
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-400 hover:bg-red-700 hover:text-white transition duration-200 w-full"
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                  Logout
                </button>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="right flex-1 bg-boxbg rounded-xl shadow-lg p-8">
            {/* Top Section */}
            <p className="text-gray-200">Order Details</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
