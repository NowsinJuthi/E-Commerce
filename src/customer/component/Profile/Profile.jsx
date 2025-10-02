import React, { useEffect } from "react";
import { GoChecklist } from "react-icons/go";
import { PiDownloadSimple, PiMapPinArea } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import UserStore from "../store/UserStore";
import Cookies from "js-cookie";

const Profile = () => {
  const navigate = useNavigate();
  const logOutUser = UserStore((state) => state.logOutUser);
  const userLogin = UserStore((state) => state.userLogin);
  const profileDetailsRequest = UserStore(
    (state) => state.profileDetailsRequest
  );

  useEffect(() => {
    const token = Cookies.get("token");
    if (token && !userLogin) {
      profileDetailsRequest();
    }
  }, [userLogin, profileDetailsRequest]);

  const logoutUser = async () => {
    const success = await logOutUser();
    if (success) {
      sessionStorage.clear();
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <div className="main h-screen flex items-center justify-center p-6">
      <div className="cards max-w-6xl w-full flex gap-6">
        {/* Left Sidebar */}
        <div className="left w-80 bg-boxbg rounded-xl shadow-lg p-6">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
            MY ACCOUNT
          </p>
          <hr className="border-border dark:border-gray-700 mb-4" />

          <ul className="space-y-2 text-gray-200">
            <li className="pl-4 py-2 rounded-lg cursor-pointer hover:bg-box ">
              Dashboard
            </li>
            <li className="pl-4 py-2 rounded-lg cursor-pointer hover:bg-box ">
              <Link to={"/order-info"}>
                  Orders
              </Link>
            </li>
            <li className="pl-4 py-2 rounded-lg cursor-pointer hover:bg-box">
              Downloads
            </li>
            <li className="pl-4 py-2 rounded-lg cursor-pointer hover:bg-box">
              Address
            </li>
            <li className="pl-4 py-2 rounded-lg cursor-pointer hover:bg-box">
              Account Details
            </li>
            <li className="pl-4 py-2 rounded-lg cursor-pointer hover:bg-box">
              Wishlist
            </li>
            <button
              onClick={logoutUser}
              className="pl-4 py-2 rounded-lg cursor-pointer text-red-500 hover:bg-red-100 dark:hover:bg-red-400"
            >
              Logout
            </button>
          </ul>
        </div>

        {/* Right Content */}
        <div className="right flex-1 bg-boxbg rounded-xl shadow-lg p-8">
          {/* Top Section */}
          <div className="top">
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Hello,{" "}
              <span className="text-[#11ae68]">
                {" "}
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
                  "User"}
              </span>{" "}
              👋
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </div>

          {/* Bottom Grid */}
          <div className="bottom mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link to={"/order-info"}>
              <div className="order flex flex-col items-center justify-center border border-border rounded-xl py-6 hover:shadow-md hover:bg-[#2c4d75] dark:hover:bg-gray-700 cursor-pointer transition">
                <GoChecklist className="text-4xl text-blue-500" />
                <p className="mt-2 text-gray-200">Orders</p>
              </div>
            </Link>

            <div className="downloads flex flex-col items-center justify-center border border-border rounded-xl py-6 hover:shadow-md hover:bg-[#2c4d75] dark:hover:bg-gray-700 cursor-pointer transition">
              <PiDownloadSimple className="text-4xl text-green-500" />
              <p className="mt-2 text-gray-200">Downloads</p>
            </div>

            <div className="address flex flex-col items-center justify-center border border-border rounded-xl py-6 hover:shadow-md hover:bg-[#2c4d75] dark:hover:bg-gray-700 cursor-pointer transition">
              <PiMapPinArea className="text-4xl text-purple-500" />
              <p className="mt-2 text-gray-200">Address</p>
            </div>

            <div className="account flex flex-col items-center justify-center border border-border rounded-xl py-6 hover:shadow-md hover:bg-[#2c4d75] dark:hover:bg-gray-700 cursor-pointer transition">
              <MdOutlineAccountCircle className="text-4xl text-orange-500" />
              <p className="mt-2 text-gray-200">Account</p>
            </div>

            <div className="wish flex flex-col items-center justify-center border border-border  rounded-xl py-6 hover:shadow-md hover:bg-[#2c4d75] dark:hover:bg-gray-700 cursor-pointer transition">
              <GiSelfLove className="text-4xl text-pink-500" />
              <p className="mt-2 text-gray-200">Wishlist</p>
            </div>

            <div
              onClick={logoutUser}
              className="exit flex flex-col items-center justify-center border border-border rounded-xl py-6 hover:shadow-md hover:bg-red-50 dark:hover:bg-red-600 cursor-pointer transition"
            >
              <ImExit className="text-4xl text-red-500" />
              <button className="mt-2 text-red-600 ">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
