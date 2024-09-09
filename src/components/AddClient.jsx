import React, { useState } from 'react';
import { FaCamera, FaImage } from 'react-icons/fa';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    product_type: 'option1',
    product_name: '',
    product_id: '',
    barcode_symbology: 'option1',
    batch_id_concept: 'option1',
    product_expiry: 'option1',
    product_unit: '',
    product_cost: '',
    retail_price: '',
    product_tax: 'option1',
    tax_method: 'option1',
    supplier: 'option1',
    supplier_price: '',
    tax: '',
    tax_id: ''
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
        // Reset form fields
        setFormData({
          product_type: 'option1',
          product_name: '',
          product_id: '',
          barcode_symbology: 'option1',
          batch_id_concept: 'option1',
          product_expiry: 'option1',
          product_unit: '',
          product_cost: '',
          retail_price: '',
          product_tax: 'option1',
          tax_method: 'option1',
          supplier: 'option1',
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
  };
  

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Create new Product</h2>
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
              <option value="option1">code39</option>
              <option value="option2">Code 128</option>
              <option value="option3">QR Code</option>
              <option value="option4">UPC</option>
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
              <option value="option1">Disable</option>
              <option value="option2">Enable</option>
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
              <option value="option1">No Tax</option>
              <option value="option2">GST</option>
              <option value="option3">Sales Tax</option>
              <option value="option4">VAT</option>
              <option value="option5">Local Tax</option>
              <option value="option6">Import Duty</option>
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
              <option value="option1">Inclusive</option>
              <option value="option2">Exclusive</option>
              <option value="option3">Calculated Tax</option>
              <option value="option4">Flat Rate Tax</option>
              <option value="option5">Variable Tax</option>
              <option value="option6">Compound Tax</option>
              <option value="option7">Overriding Tax</option>
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
              <option value="option1">Select Supplier</option>
              <option value="option2">Component Suppliers</option>
              <option value="option3">Service Providers</option>
              <option value="option4">Wholesale Suppliers</option>
              <option value="option5">Retail Suppliers</option>
              <option value="option6">Secondary Suppliers</option>
              <option value="option7">Global Suppliers</option>
              <option value="option8">Local Suppliers</option>
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
    </div>
  );
};

export default AddProduct;
