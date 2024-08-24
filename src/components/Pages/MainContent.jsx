import React, { useState } from 'react';
import { FaBoxes, FaMoneyBillWave, FaBoxOpen, FaShippingFast, FaTasks, FaMoneyCheckAlt, FaDollarSign, FaShoppingCart, FaChartLine, FaTruckLoading, FaWarehouse, FaFileInvoiceDollar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const [startDate, setStartDate] = useState('2024-08-11');
  const [endDate, setEndDate] = useState('2024-08-11');

  const handleFilter = () => {
    // Handle the filter action based on startDate and endDate
    console.log(`Filtering from ${startDate} to ${endDate}`);
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      {/* Filter Section */}
      <div className="flex justify-end items-center mb-6">
        <div className="flex items-center space-x-2">
          <label className="font-semibold" htmlFor="from">From</label>
          <input
            type="date"
            id="from"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 rounded-md border border-gray-300"
          />
          <label className="font-semibold" htmlFor="to">To</label>
          <input
            type="date"
            id="to"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 rounded-md border border-gray-300"
          />
          <button
            onClick={handleFilter}
            className="p-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors"
          >
            FILTER
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard title="New Items" value="10" color="bg-green-100" icon={<FaBoxOpen className="text-green-500" />} />
        <StatCard title="Total Value" value="₹50,000" color="bg-purple-100" icon={<FaDollarSign className="text-purple-500" />} />
        <StatCard title="Total Stock" value="500" color="bg-red-100" icon={<FaWarehouse className="text-red-500" />} />
        <StatCard title="Total Sales" value="₹70,000" color="bg-red-100" icon={<FaChartLine className="text-red-500" />} />
        <StatCard title="Pending Orders" value="5" color="bg-green-100" icon={<FaShippingFast className="text-green-500" />} />
        <StatCard title="Available Stock" value="450" color="bg-blue-100" icon={<FaBoxes className="text-blue-500" />} />
        <StatCard title="Sales Revenue" value="₹80,000" color="bg-blue-100" icon={<FaMoneyBillWave className="text-blue-500" />} />
        <StatCard title="Total Profit" value="₹30,000" color="bg-red-100" icon={<FaMoneyCheckAlt className="text-red-500" />} />
        <StatCard title="Stock Alerts" value="2" color="bg-purple-100" icon={<FaTasks className="text-purple-500" />} />
      </div>

      {/* Action Buttons Section */}
      <div className="flex space-x-4 mb-4">
        <ButtonCard 
          title="Add New Product" 
          color="bg-gradient-to-r from-pink-500 to-purple-500" 
          icon={<FaBoxes className="text-white" />} 
          navigateTo="/add-product"
        />
        <ButtonCard 
          title="Create Order" 
          color="bg-gradient-to-r from-purple-500 to-blue-500" 
          icon={<FaShoppingCart className="text-white" />} 
          navigateTo="/add-orders"
        />
        <ButtonCard 
          title="Manage Suppliers" 
          color="bg-gradient-to-r from-green-500 to-teal-500" 
          icon={<FaTruckLoading className="text-white" />} 
          navigateTo="/suppliers"
        />
        <ButtonCard 
          title="Generate Invoice" 
          color="bg-gradient-to-r from-red-500 to-pink-500" 
          icon={<FaFileInvoiceDollar className="text-white" />} 
          navigateTo="/generate-invoice"
        />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color, icon }) => {
  return (
    <div className={`p-4 ${color} rounded-lg shadow-md flex items-center`}>
      <div className="text-2xl mr-4">
        {icon}
      </div>
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
};

const ButtonCard = ({ title, color, icon, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div 
      onClick={handleClick} 
      className={`p-4 ${color} rounded-lg shadow-md flex items-center justify-center cursor-pointer`}
    >
      <div className="text-2xl mr-2">
        {icon}
      </div>
      <div className="text-lg font-semibold text-white">{title}</div>
    </div>
  );
};

export default MainContent;
