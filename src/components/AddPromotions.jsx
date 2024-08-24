import React, { useState } from 'react';
import { FaCamera, FaImage } from 'react-icons/fa';

const AddPromotion = () => {
  const [formData, setFormData] = useState({
    product_type: 'Standard',
    product_name: '',
    product_id: '',
    barcode_symbology: 'code39',
    batch_id_concept: 'Disable',
    product_expiry: 'Disable',
    product_unit: '',
    product_cost: '0.00',
    retail_price: '0.00',
    product_tax: 'No Tax',
    tax_method: 'Inclusive',
    supplier: '',
    supplier_price: '',
    tax: '',
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

      const response = await fetch('http://localhost:5000/add-product', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Product added successfully!');
        // Optionally, reset the form or redirect to another page
      } else {
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product.');
    }
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Add Promotions</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Product Type</label>
            <select
              name="product_type"
              className="border rounded w-full py-2 px-3"
              value={formData.product_type}
              onChange={handleChange}
            >
              <option value="Standard">Standard</option>
              <option value="Configurable">Configurable</option>
              <option value="Serialized">Serialized</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              name="product_name"
              className="border rounded w-full py-2 px-3"
              value={formData.product_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Product ID</label>
            <input
              type="text"
              name="product_id"
              className="border rounded w-full py-2 px-3"
              value={formData.product_id}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Barcode Symbology</label>
            <select
              name="barcode_symbology"
              className="border rounded w-full py-2 px-3"
              value={formData.barcode_symbology}
              onChange={handleChange}
            >
              <option value="code39">code39</option>
              <option value="Code128">Code 128</option>
              <option value="QRCode">QR Code</option>
              <option value="UPC">UPC</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Batch Id Concept</label>
            <select
              name="batch_id_concept"
              className="border rounded w-full py-2 px-3"
              value={formData.batch_id_concept}
              onChange={handleChange}
            >
              <option value="Disable">Disable</option>
              <option value="Enable">Enable</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Product Expiry</label>
            <select
              name="product_expiry"
              className="border rounded w-full py-2 px-3"
              value={formData.product_expiry}
              onChange={handleChange}
            >
              <option value="Disable">Disable</option>
              <option value="Enable">Enable</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Product Unit</label>
            <input
              type="text"
              name="product_unit"
              className="border rounded w-full py-2 px-3"
              value={formData.product_unit}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Product Cost (INR)</label>
            <input
              type="number"
              name="product_cost"
              className="border rounded w-full py-2 px-3"
              value={formData.product_cost}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Retail Price (INR)</label>
            <input
              type="number"
              name="retail_price"
              className="border rounded w-full py-2 px-3"
              value={formData.retail_price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Product Tax</label>
            <select
              name="product_tax"
              className="border rounded w-full py-2 px-3"
              value={formData.product_tax}
              onChange={handleChange}
            >
              <option value="No Tax">No Tax</option>
              <option value="GST">GST</option>
              <option value="Sales Tax">Sales Tax</option>
              <option value="VAT">VAT</option>
              <option value="Local Tax">Local Tax</option>
              <option value="Import Duty">Import Duty</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Tax Method</label>
            <select
              name="tax_method"
              className="border rounded w-full py-2 px-3"
              value={formData.tax_method}
              onChange={handleChange}
            >
              <option value="Inclusive">Inclusive</option>
              <option value="Exclusive">Exclusive</option>
              <option value="Calculated Tax">Calculated Tax</option>
              <option value="Flat Rate Tax">Flat Rate Tax</option>
              <option value="Variable Tax">Variable Tax</option>
              <option value="Compound Tax">Compound Tax</option>
              <option value="Overriding Tax">Overriding Tax</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Supplier</label>
            <select
              name="supplier"
              className="border rounded w-full py-2 px-3"
              value={formData.supplier}
              onChange={handleChange}
            >
              <option value="">Select Supplier</option>
              <option value="Component Suppliers">Component Suppliers</option>
              <option value="Service Providers">Service Providers</option>
              <option value="Wholesale Suppliers">Wholesale Suppliers</option>
              <option value="Retail Suppliers">Retail Suppliers</option>
              <option value="Secondary Suppliers">Secondary Suppliers</option>
              <option value="Global Suppliers">Global Suppliers</option>
              <option value="Local Suppliers">Local Suppliers</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Supplier Price</label>
            <input
              type="text"
              name="supplier_price"
              className="border rounded w-full py-2 px-3"
              value={formData.supplier_price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Tax</label>
            <input
              type="text"
              name="tax"
              className="border rounded w-full py-2 px-3"
              value={formData.tax}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700">Product Picture</label>
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

          <div className="col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPromotion;