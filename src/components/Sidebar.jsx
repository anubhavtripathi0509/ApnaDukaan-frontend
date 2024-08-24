import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBoxOpen, FaTruck, FaClipboardList, FaIndustry, FaFileInvoice, FaWarehouse, FaChartBar, FaBullhorn, FaCogs, FaUsersCog } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleNavigation = (path, tab) => {
    navigate(path);
    setActiveTab(tab);
  };

  return (
    <div className="bg-white shadow-md w-64 p-4 rounded-lg">
      <div
        className={`flex items-center space-x-2 py-2 px-4 rounded-md cursor-pointer ${activeTab === 'dashboard' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'hover:bg-gray-200'}`}
        onClick={() => handleNavigation('/', 'dashboard')}
      >
        <FaTachometerAlt className="text-gray-700" />
        <span>Dashboard</span>
      </div>
      <ul className="mt-4 space-y-2">
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'product-management' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/products', 'product-management')}
        >
          <FaBoxOpen className="text-gray-700" />
          <span>Product Management</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'stock-management' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/stocks', 'stock-management')}
        >
          <FaWarehouse className="text-gray-700" />
          <span>Stock Management</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'purchase-orders' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/purchase-orders', 'purchase-orders')}
        >
          <FaClipboardList className="text-gray-700" />
          <span>Purchase Orders</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'suppliers' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/suppliers', 'suppliers')}
        >
          <FaIndustry className="text-gray-700" />
          <span>Suppliers</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'inventory-tracking' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/inventory-tracking', 'inventory-tracking')}
        >
          <FaTruck className="text-gray-700" />
          <span>Inventory Tracking</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'sales-orders' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/orders', 'sales-orders')}
        >
          <FaFileInvoice className="text-gray-700" />
          <span>Sales Orders</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'reports' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/analytics', 'reports')}
        >
          <FaChartBar className="text-gray-700" />
          <span>Reports & Analytics</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'promotions' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/promotions', 'promotions')}
        >
          <FaBullhorn className="text-gray-700" /> {/* Changed icon here */}
          <span>Promotions</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'user-management' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/user-management', 'user-management')}
        >
          <FaUsersCog className="text-gray-700" />
          <span>User Management</span>
        </li>
        <li
          className={`flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer ${activeTab === 'settings' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : ''}`}
          onClick={() => handleNavigation('/settings', 'settings')}
        >
          <FaCogs className="text-gray-700" />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
