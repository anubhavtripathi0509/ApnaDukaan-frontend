import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faAngleDown } from '@fortawesome/free-solid-svg-icons';

const PurchaseOrders = () => {
  const [PurchaseOrders, setPurchaseOrders] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownButtonRefs = useRef([]);
  const dropdownRef = useRef(null);
  const [dropDown, setDropDown]  = useState(false);
  const navigate = useNavigate();

  // Fetch all Purchase orders when the component mounts
  useEffect(() => {
    const fetchPurchaseOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/Purchaseorders');
        if (response.ok) {
          const data = await response.json();
          setPurchaseOrders(data);
        } else {
          console.error('Failed to fetch Purchase orders.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPurchaseOrders();
  }, []);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleStatusChange = (index, status) => {
    // Handle status change logic here
    console.log(`Purchase order at index ${index} changed status to ${status}`);
    setOpenDropdown(null);
  };

  const handleDelete = (index) => {
    // Handle delete logic here
    console.log(`Purchase order at index ${index} deleted`);
    setOpenDropdown(null);
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className='w-12/12 m-auto flex justify-between'>
        <div>
          <input
            className="w-80 p-2 my-5 mr-2 border-2 rounded-md focus:border-green-500 outline-none border-gray-300"
            type='text'
            placeholder='Search the product...'
          />
          <button className='text-white font-bold p-2 my-2 text-lg bg-pink-500 rounded-xl'>Search</button>
        </div>

        <div className='cursor-pointer text-center mt-5 flex'>
          <button
            onClick={() => navigate('/add-order')}
            className='text-white font-bold p-2 my-2 text-lg bg-pink-500 rounded-xl'>
            Add Order
          </button>

          <h1 onClick={() => setDropDown(!dropDown)}
              className='bg-pink-500 rounded-xl text-center h-12 font-bold flex items-center justify-between m-2 p-2 text-lg text-white'>
              Options
              <FontAwesomeIcon className="px-1 text-3xl font-bold text-white" icon={faAngleDown} />
          </h1>

        </div>
      </div>

      {dropDown && (
        <div className='bg-gray-200 rounded p-3 mr-10 absolute right-10 top-[14rem]'>
          <p className='p-1 border-b-2 border-gray-400'>All Orders</p>
          <p className='p-1 border-b-2 border-gray-400'>Pending Orders</p>
          <p className='p-1 border-b-2 border-gray-400'>Completed Orders</p>
        </div>
      )}

      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Purchase Order List</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
            <select className="border rounded px-3 py-2">
              <option>Show 10</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--Select Status--</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Categories--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Payment Methods--</option>
              {/* Add more options here */}
            </select>
          </div>
          <input 
            type="text" 
            className="border rounded px-3 py-2" 
            placeholder="Search" 
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Supplier Name</th>
                <th className="px-4 py-2 text-left">Order Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Total Amount</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {PurchaseOrders.length > 0 ? (
                PurchaseOrders.map((order, index) => (
                  <tr key={order.order_id}>
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-center">{order.order_id}</td>
                    <td className="px-4 py-2 text-center">{order.customer_name}</td>
                    <td className="px-4 py-2 text-center">{order.order_date}</td>
                    <td className="px-4 py-2 text-center">{order.status}</td>
                    <td className="px-4 py-2 text-center">{order.total_amount}</td>
                    <td className="px-4 py-2 text-center">
                      {/* Action Button */}
                      <button
                        ref={(el) => (dropdownButtonRefs.current[index] = el)}
                        onClick={() => handleDropdownToggle(index)}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-pink-500 text-white text-sm font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500"
                      >
                        Action <FaEllipsisV className="ml-2" />
                      </button>
                      {openDropdown === index && createPortal(
                        <div
                          ref={dropdownRef}
                          className="absolute z-10 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                          style={{
                            top: dropdownButtonRefs.current[index].getBoundingClientRect().bottom + window.scrollY,
                            left: dropdownButtonRefs.current[index].getBoundingClientRect().left + window.scrollX,
                          }}
                        >
                          <a
                            onClick={() => handleStatusChange(index, 'Pending')}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            Mark as Pending
                          </a>
                          <a
                            onClick={() => handleStatusChange(index, 'Completed')}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            Mark as Completed
                          </a>
                          <a
                            onClick={() => handleDelete(index)}
                            className="block px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                          >
                            Delete
                          </a>
                        </div>,
                        document.body
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-center">
                  <td className="px-4 py-2" colSpan="7">
                    No Purchase orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrders;
