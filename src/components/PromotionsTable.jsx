import React, { useEffect, useState, useRef } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const PromotionsTable = () => {
  const [promotions, setPromotions] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownButtonRefs = useRef([]);
  const dropdownRef = useRef(null);

  // Fetch all promotions when the component mounts
  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await fetch('http://localhost:5000/promotions');
        if (response.ok) {
          const data = await response.json();
          setPromotions(data);
        } else {
          console.error('Failed to fetch promotions.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPromotions();
  }, []);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleStatusChange = (index, status) => {
    // Handle status change logic here
    console.log(`Promotion at index ${index} changed status to ${status}`);
    setOpenDropdown(null);
  };

  const handleDelete = (index) => {
    // Handle delete logic here
    console.log(`Promotion at index ${index} deleted`);
    setOpenDropdown(null);
  };

  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate();
  const navigateToAddProm = () => {
    navigate('/add-promotions');
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className='w-12/12 m-auto flex justify-between'>
        <div>
          <input className="w-80 p-2 my-5 mr-2 border-2 rounded-md focus:border-green-500 outline-none border-gray-300" type='text' placeholder='Search promotions..' />
          <button className='text-white font-bold p-2 my-2 text-lg bg-pink-500 rounded-xl'>Search</button>
        </div>

        <div className='cursor-pointer text-center mt-5 flex'>
          {/* <h1 
            onClick={() => setDropDown(!dropDown)}
            className='bg-pink-500 rounded-xl text-center h-12 font-bold flex items-center justify-between m-2 p-2 text-lg text-white'>
            Options
            <img className="w-10 text-center" src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/angle-down-512.png' alt='down arrow' />
          </h1> */}
        </div>
      </div>
      
      {/* {dropDown && (
        <div className='cursor-pointer bg-gray-200 rounded p-3 mr-10 absolute right-10 top-[14rem]'>
          <p className='p-1 border-b-2 border-gray-400'>All Promotions</p>
          <p className='p-1 border-b-2 border-gray-400'>Expired Promotions</p>
          <p className='p-1 border-b-2 border-gray-400'>Expiring Soon</p>
        </div>
      )} */}

      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Promotions List</h2>
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
              <option>--Select Category--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Statuses--</option>
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
                <th className="px-4 py-2 text-left">Promotion ID</th>
                <th className="px-4 py-2 text-left">Product Name</th>
                <th className="px-4 py-2 text-left">Discount</th>
                <th className="px-4 py-2 text-left">Start Date</th>
                <th className="px-4 py-2 text-left">End Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {promotions.length > 0 ? (
                promotions.map((promotion, index) => (
                  <tr key={promotion.promotion_id}>
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-center">{promotion.promotion_id}</td>
                    <td className="px-4 py-2 text-center">{promotion.product_name}</td>
                    <td className="px-4 py-2 text-center">{promotion.discount}%</td>
                    <td className="px-4 py-2 text-center">{promotion.start_date}</td>
                    <td className="px-4 py-2 text-center">{promotion.end_date}</td>
                    <td className="px-4 py-2 text-center">{promotion.status}</td>
                    <td className="px-4 py-2 text-center">
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
                            onClick={() => handleStatusChange(index, 'Active')}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            Activate
                          </a>
                          <a
                            onClick={() => handleStatusChange(index, 'Inactive')}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            Deactivate
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
                  <td className="px-4 py-2" colSpan="8">
                    No records found
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

export default PromotionsTable;
