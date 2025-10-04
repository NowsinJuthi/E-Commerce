import React from "react";
import AdminMenu from "./AdminMenu";
import { Helmet } from "react-helmet";

const Users = () => {
  return (
    <>
      <Helmet>
        <title>All Users | UniQbd</title>
        <meta
          name="description"
          content="Manage users, content, and settings."
        />
        <meta name="keywords" content="UniQbd admin, dashboard, management" />
      </Helmet>
      ;
      <div className="main min-h-screen text-gray-100 p-6">
        <div className="grid grid-cols-12 gap-6 ">
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

            <div>
              <h2 className="text-2xl font-semibold text-green mb-4">
                User Management
              </h2>
              <p className="text-gray-400">
                Manage users, roles, and permissions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
