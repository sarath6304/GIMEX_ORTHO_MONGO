import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaUsers, FaClock, FaSignInAlt, FaBars } from "react-icons/fa";

const Sidebar = () => {
  // State to manage menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/loginPage", label: "Login", icon: <FaSignInAlt /> },
    { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/products", label: "Products", icon: <FaBoxOpen /> },
    { path: "/orders", label: "Orders", icon: <FaShoppingCart /> },
    { path: "/users", label: "Users", icon: <FaUsers /> },
    { path: "/ongoing-orders", label: "Ongoing Orders", icon: <FaClock /> },
  ];

  return (
    <div>
      {/* Hamburger Menu Button */}
      <button
        className="text-black text-2xl px-6  top-2 left-4 z-10 md:hidden "
        onClick={toggleMenu}
      >
        <FaBars />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`w-64 h-screen bg-gray-800 text-white p-4 fixed top-0 left-0 z-20 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 transition ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
