import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Inventory Overview", path: "/inventory-overview" },
    { name: "Orders", path: "/orders" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Warehouse Locations", path: "/warehouse-locations" },
    { name: "Shipping", path: "/shipping" },
    { name: "Reports", path: "/analytics" },
    { name: "Feedbacks", path: "/feedbacks" },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Welcome, Admin</h1>
      <nav className="flex flex-wrap gap-2 mb-4">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
