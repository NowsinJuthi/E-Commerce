import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUsers, FaTags, FaBoxOpen } from "react-icons/fa";
import { Helmet } from "react-helmet";

const AdminMenu = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/admin/users", label: "Users", icon: <FaUsers /> },
    { path: "/admin/category", label: "Category", icon: <FaTags /> },
    { path: "/admin/products", label: "Products", icon: <FaBoxOpen /> },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Menu | UniQbd</title>
        <meta
          name="description"
          content="Manage users, content, and settings."
        />
        <meta name="keywords" content="UniQbd admin, dashboard, management" />
      </Helmet>
      <div className="bg-box text-gray-200 rounded-2xl shadow-md p-5">
        <h2 className="text-xl font-semibold text-blue-400 mb-4 border-b border-gray-700 pb-2">
          Admin Panel
        </h2>

        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "hover:bg-[#1e293b] hover:text-blue-300"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AdminMenu;
