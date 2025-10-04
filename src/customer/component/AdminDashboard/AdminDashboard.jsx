import React from "react";
import AdminMenu from "./AdminMenu";
import UserStore from "../store/UserStore";
import { Helmet } from "react-helmet";

const AdminDashboard = () => {
  const userLogin = UserStore((state) => state.userLogin);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | UniQbd</title>
        <meta
          name="description"
          content="Manage users, content, and settings."
        />
        <meta name="keywords" content="UniQbd admin, dashboard, management" />
      </Helmet>
      <div className="min-h-screen text-gray-100 p-6">
        {/* Header */}
        <div className="bg-box rounded-2xl shadow-md p-6 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-green">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Manage users, content, and settings
            </p>
          </div>
          <div className="bg-[#334155] px-4 py-2 rounded-xl">
            <p className="text-sm text-gray-300">
              Logged in as:{" "}
              <span className="font-semibold text-blue-300">
                {userLogin?.name || userLogin?.email || "Admin"}
              </span>
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-boxbg p-5 rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold text-blue-400 mb-4">Menu</h2>
            <AdminMenu />
          </div>

          {/* Right Section */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 bg-boxbg p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Dashboard Overview
            </h2>
            <p className="text-gray-300">
              Welcome back,{" "}
              <span className="text-blue-300">
                {userLogin?.name || "Admin"}
              </span>{" "}
              👋
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-box p-5 rounded-xl hover:bg-[#3b4762] transition">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  Total Users
                </h3>
                <p className="text-3xl font-bold">124</p>
              </div>
              <div className="bg-box p-5 rounded-xl hover:bg-[#3b4762] transition">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  Active Posts
                </h3>
                <p className="text-3xl font-bold">56</p>
              </div>
              <div className="bg-box p-5 rounded-xl hover:bg-[#3b4762] transition">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  Pending Requests
                </h3>
                <p className="text-3xl font-bold">9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
