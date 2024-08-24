import React, { useState } from 'react';
import Navbar from '../Navbar';
import FollowUpTable from '../FollowUpTable';
import FollowUpModal from '../FollowUpModal';

const FollowUpPage = () => {
  const [data, setData] = useState([
    { type: 'Gym PT renewal', name: 'RR', contact: '44', followupDate: '01-08-2024', rep: 'Admin' }
    // Add more data as needed
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      {/* <Navbar /> */}
      <div className="flex justify-between items-center mb-4 bg-blue-50 p-4 rounded-lg shadow-md">
        <div className="flex space-x-4">
          <select className="p-2 border border-gray-300 rounded-md">
            <option>--All employee--</option>
            {/* Add more options as needed */}
          </select>
          <select className="p-2 border border-gray-300 rounded-md">
            <option>--All type--</option>
            {/* Add more options as needed */}
          </select>
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-md"
            defaultValue="2024-08-01"
          />
        </div>
        <div className="flex space-x-2">
          <button className="bg-gradient-to-r from-pink-500 bg-pink-500 text-white px-4 py-2 rounded-md shadow-md">Bulk SMS</button>
          <button onClick={openModal} className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md">Create followup</button>
        </div>
      </div>
      <FollowUpTable data={data} />
      <FollowUpModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default FollowUpPage;
