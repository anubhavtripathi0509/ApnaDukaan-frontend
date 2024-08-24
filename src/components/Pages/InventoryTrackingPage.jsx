import React from 'react';

const InventoryDashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
        
        {/* Circular Inventory Overview */}
        <div className="col-span-1 lg:col-span-1 bg-gray-900 text-white p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
          <div className="text-2xl font-bold">39</div>
          <div>Inventory</div>
        </div>

        {/* Total Inventory and Stats */}
        <div className="col-span-1 lg:col-span-2 bg-gray-800 text-white p-4 rounded-lg shadow-md grid grid-cols-2 gap-4">
          <div>
            <div className="text-xl">Total Inventory</div>
            <div className="text-3xl font-bold">21.96</div>
            <div className="text-sm">Low Stock</div>
          </div>
          <div>
            <div className="text-lg">Stock Alerts</div>
            <div className="flex items-center justify-between">
              <div className="bg-blue-600 p-2 rounded">4.99</div>
              <div className="text-sm">Urgency in Stock</div>
            </div>
          </div>
        </div>

        {/* Total Inventory List */}
        <div className="col-span-1 lg:col-span-1 bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <div className="text-xl mb-4">Total Inventory</div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>Product ID</div>
              <div>21.96</div>
            </div>
            <div className="flex justify-between">
              <div>Product Dale</div>
              <div>19.00</div>
            </div>
            <div className="flex justify-between">
              <div>Dates Name</div>
              <div>12.00</div>
            </div>
            <div className="flex justify-between">
              <div>Dates Notte</div>
              <div>14.00</div>
            </div>
          </div>
        </div>

        {/* Recent Stock and Filters */}
        <div className="col-span-1 lg:col-span-2 bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 bg-gray-900 text-white rounded-lg w-1/3"
            />
            <div className="flex space-x-4">
              <button className="bg-gray-900 p-2 rounded-lg">Name</button>
              <button className="bg-gray-900 p-2 rounded-lg">Dates</button>
              <button className="bg-gray-900 p-2 rounded-lg">Category</button>
              <button className="bg-gray-900 p-2 rounded-lg">Recent Tonstock</button>
            </div>
          </div>
          <div className="text-sm text-gray-400">Low in Stock</div>
          <div className="grid grid-cols-2 gap-4">
            {/* Individual product data as a button or card */}
            <div className="bg-blue-600 p-4 rounded-lg">Product ID: 2.50</div>
            <div className="bg-blue-600 p-4 rounded-lg">Product Dale: 1.00</div>
            <div className="bg-blue-600 p-4 rounded-lg">Product Name: 3.00</div>
            <div className="bg-blue-600 p-4 rounded-lg">Product Notte: 1.20</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InventoryDashboard;
