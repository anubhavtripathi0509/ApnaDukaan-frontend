import React from 'react';

const ClientProfile = () => {
  return (
    <div className="p-4 bg-blue-50 min-h-screen">

      {/* Client Profile Card */}
      <div className="bg-white rounded shadow p-6">

        {/* Profile Information */}
        <div className="flex space-x-8">
          {/* Left Section */}
          <div className="w-1/4 bg-green-500 text-center p-4 rounded">
            <div className="bg-gray-200 p-4 rounded-full w-24 h-24 mx-auto"></div>
            <button className="mt-2 text-blue-700">Edit</button>
            <p className="text-white mt-4">Active</p>
            <h2 className="text-white font-bold text-lg mt-2">Jack</h2>

            {/* Batch Time */}
            <div className="mt-8 space-y-2">
              <label className="block text-white">Batch time from</label>
              <input
                type="time"
                className="block p-2 w-full rounded border border-gray-300"
                value="14:00"
              />
              <label className="block text-white">Batch time to</label>
              <input
                type="time"
                className="block p-2 w-full rounded border border-gray-300"
                value="15:00"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-3/4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block">Client name</label>
                <input
                  type="text"
                  value="Jack"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Contact Number</label>
                <input
                  type="text"
                  value="2"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Membership ID</label>
                <input
                  type="text"
                  value="68"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Alternative contact</label>
                <input
                  type="text"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Date Of Birth</label>
                <input
                  type="text"
                  placeholder="D.O.B"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Date of Joining</label>
                <input
                  type="text"
                  value="07-09-2024"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Gender</label>
                <div className="flex space-x-4">
                  <label>
                    <input type="radio" name="gender" checked /> Male
                  </label>
                  <label>
                    <input type="radio" name="gender" /> Female
                  </label>
                </div>
              </div>
              <div>
                <label className="block">Profession</label>
                <input
                  type="text"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Client Source</label>
                <select className="block p-2 w-full rounded border border-gray-300">
                  <option value="">---Select---</option>
                </select>
              </div>
              <div>
                <label className="block">Delete member</label>
                <select className="block p-2 w-full rounded border border-gray-300">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block">Address</label>
                <input
                  type="text"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div className="col-span-2">
                <label className="block">Remarks</label>
                <textarea
                  className="block p-2 w-full rounded border border-gray-300"
                ></textarea>
              </div>
            </div>

            <button className="p-2 bg-pink-500 text-white rounded w-full">
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
