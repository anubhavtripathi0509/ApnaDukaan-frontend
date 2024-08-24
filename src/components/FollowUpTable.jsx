import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const FollowUpTable = ({ data }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = React.useRef();

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-lg border border-gray-200">
        <thead>
          <tr className="w-full bg-green-500 text-white rounded-t-lg">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Type</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Contact</th>
            <th className="py-2 px-4">Followup Date</th>
            <th className="py-2 px-4">Rep.</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center even:bg-gray-100">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{item.type}</td>
              <td className="py-2 px-4">
                <a href="#" className="text-blue-500 underline">{item.name}</a>
              </td>
              <td className="py-2 px-4">{item.contact}</td>
              <td className="py-2 px-4">{item.followupDate}</td>
              <td className="py-2 px-4">{item.rep}</td>
              <td className="py-2 px-4">
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-pink-500 text-white text-sm font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500"
                  >
                    Action <FaEllipsisV className="ml-2" />
                  </button>
                  {openDropdown === index && (
                    <div
                      ref={dropdownRef}
                      className="fixed right-0 top-0 mt-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                    >
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</a>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FollowUpTable;
