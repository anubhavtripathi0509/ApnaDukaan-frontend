import React, { useState } from 'react';
import { FaCamera, FaImage } from 'react-icons/fa';

const AddSuppliers = () => {
  const [formData, setFormData] = useState({
    supplier_id: 'SUP00001',
    supplier_name: '',
    contact_person: '',
    contact_number: '',
    alternate_contact: '',
    email: '',
    supplier_type: '',
    address: '',
    tax_id: '',
    payment_terms: '',
    remarks: '',
    profile_picture: null,
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profile_picture: e.target.files[0],
    });

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCaptureClick = () => {
    alert("Capture functionality not implemented yet.");
    // You can add your image capturing logic here.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch('http://localhost:5000/add-supplier', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Supplier added successfully!');
        // Optionally, reset the form or redirect to another page
      } else {
        alert('Failed to add supplier.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the supplier.');
    }
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Add New Supplier</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Supplier Name</label>
            <input
              type="text"
              name="supplier_name"
              className="border rounded w-full py-2 px-3"
              value={formData.supplier_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Contact Person</label>
            <input
              type="text"
              name="contact_person"
              className="border rounded w-full py-2 px-3"
              value={formData.contact_person}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input
              type="text"
              name="contact_number"
              className="border rounded w-full py-2 px-3"
              value={formData.contact_number}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Alternate Contact</label>
            <input
              type="text"
              name="alternate_contact"
              className="border rounded w-full py-2 px-3"
              value={formData.alternate_contact}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="border rounded w-full py-2 px-3"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Supplier Type</label>
            <input
              type="text"
              name="supplier_type"
              className="border rounded w-full py-2 px-3"
              value={formData.supplier_type}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              className="border rounded w-full py-2 px-3"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Tax ID</label>
            <input
              type="text"
              name="tax_id"
              className="border rounded w-full py-2 px-3"
              value={formData.tax_id}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Payment Terms</label>
            <input
              type="text"
              name="payment_terms"
              className="border rounded w-full py-2 px-3"
              value={formData.payment_terms}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Remarks</label>
            <input
              type="text"
              name="remarks"
              className="border rounded w-full py-2 px-3"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700">Profile Picture</label>
            <div className="w-32 h-32 border-2 border-gray-300 flex justify-center items-center relative">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex space-x-4">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <FaImage className="text-gray-400 text-2xl" />
                  </label>
                  <button onClick={handleCaptureClick}>
                    <FaCamera className="text-gray-400 text-2xl" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSuppliers;
