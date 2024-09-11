import React, { useState } from 'react';
import { FaCamera, FaImage } from 'react-icons/fa';
import { ADD_PRODUCT_URL } from './apiUrl';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    product_type: '',
    product_name: '',
    product_id: '',
    barcode_symbology: '',
    batch_id_concept: '',
    product_expiry: '',
    product_unit: '',
    product_cost: '',
    retail_price: '',
    product_tax: '',
    tax_method: '',
    supplier: '',
    supplier_price: '',
    tax: '',
    tax_id: ''
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

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
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation check
    const requiredFields = [
      'product_type', 'product_name', 'product_id', 'barcode_symbology',
      'batch_id_concept', 'product_expiry', 'product_unit', 'product_cost',
      'retail_price', 'product_tax', 'tax_method', 'supplier', 'supplier_price',
      'tax', 'tax_id'
    ];
  
    const isFormValid = requiredFields.every(field => formData[field] && formData[field].trim() !== '');
  
    if (!isFormValid) {
      setLoading(false);
      alert('Please fill out all required fields.');
      return;
    }
  
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      if (image) {
        formDataToSend.append('profile_picture', image);
      }
  
      const response = await fetch(ADD_PRODUCT_URL, {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        setLoading(false);
        alert('Product added successfully!');
        // Reset form fields
        setFormData({
          product_type: '',
          product_name: '',
          product_id: '',
          barcode_symbology: '',
          batch_id_concept: '',
          product_expiry: '',
          product_unit: '',
          product_cost: '',
          retail_price: '',
          product_tax: '',
          tax_method: '',
          supplier: '',
          supplier_price: '',
          tax: '',
          tax_id: ''
        });
        setImage(null); // Clear the image
      } else {
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product.');
    }
  
    setLoading(false);
  };
  
  

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Create new Product</h2>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-pink-500" />
          </div>
        </div>
      ) : (
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
              <option value="option1">Standard</option>
              <option value="option2">Configurable</option>
              <option value="option3">Serialized</option>
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
              <option value="Code 128">Code 128</option>
              <option value="QR Code">QR Code</option>
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
            <input 
              type="date" 
              name="product_expiry" 
              className="border rounded w-full py-2 px-3"
              value={formData.product_expiry} 
              onChange={handleChange} 
            />
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
            <label className="block text-gray-700">Product Cost (In INR)</label>
            <input
              type="number"
              name="product_cost"
              className="border rounded w-full py-2 px-3"
              value={formData.product_cost}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Retail price (In INR)</label>
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
              <select>
                <option value="inclusive">Inclusive</option>
                <option value="exclusive">Exclusive</option>
                <option value="calculated">Calculated Tax</option>
                <option value="flat-rate">Flat Rate Tax</option>
                <option value="variable">Variable Tax</option>
                <option value="compound">Compound Tax</option>
                <option value="overriding">Overriding Tax</option>
              </select>
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
              <option value="select">Select Supplier</option>
              <option value="component-suppliers">Component Suppliers</option>
              <option value="service-providers">Service Providers</option>
              <option value="wholesale-suppliers">Wholesale Suppliers</option>
              <option value="retail-suppliers">Retail Suppliers</option>
              <option value="secondary-suppliers">Secondary Suppliers</option>
              <option value="global-suppliers">Global Suppliers</option>
              <option value="local-suppliers">Local Suppliers</option>
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

          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
};

export default AddProduct;
