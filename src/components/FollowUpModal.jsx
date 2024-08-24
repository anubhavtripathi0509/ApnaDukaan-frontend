import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const FollowUpModal = ({ isOpen, onRequestClose }) => {
  const [client, setClient] = useState('');
  const [followType, setFollowType] = useState('');
  const [scheduledFollowUp, setScheduledFollowUp] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [followUpTime, setFollowUpTime] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      client,
      followType,
      scheduledFollowUp,
      followUpDate,
      followUpTime,
      response
    });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Followup"
      className="absolute inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="relative bg-white rounded-lg p-6 max-w-lg w-full shadow-lg">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Create Followup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Client</label>
            <select
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Client</option>
              {/* Populate this with data from the database */}
              <option value="client1">Client 1</option>
              <option value="client2">Client 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Follow Type</label>
            <select
              value={followType}
              onChange={(e) => setFollowType(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Follow Type</option>
              {/* Populate this with options */}
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Scheduled Follow Up Required</label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="yes"
                  checked={scheduledFollowUp === 'yes'}
                  onChange={() => setScheduledFollowUp('yes')}
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="no"
                  checked={scheduledFollowUp === 'no'}
                  onChange={() => setScheduledFollowUp('no')}
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Schedule Follow Up Date</label>
            <input
              type="date"
              value={followUpDate}
              onChange={(e) => setFollowUpDate(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Schedule Follow Up Time</label>
            <input
              type="time"
              value={followUpTime}
              onChange={(e) => setFollowUpTime(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Response / Feedback</label>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="3"
            />
            <div className="mt-2 flex space-x-2">
              <button type="button" onClick={() => setResponse('Follow up again')} className="bg-pink-500 text-white px-3 py-1 rounded-md">Follow up again</button>
              <button type="button" onClick={() => setResponse('Right to hate')} className="bg-pink-500 text-white px-3 py-1 rounded-md">Right to hate</button>
              <button type="button" onClick={() => setResponse('Successful')} className="bg-pink-500 text-white px-3 py-1 rounded-md">Successful</button>
              {/* Add more buttons as needed */}
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onRequestClose} className="bg-gray-200 px-4 py-2 rounded-md mr-2">Cancel</button>
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md">Create Followup</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FollowUpModal;
