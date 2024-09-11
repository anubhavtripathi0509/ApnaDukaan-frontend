import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from './apiUrl';

const ProductProfile = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const PRODUCTS_URL = `${API_BASE_URL}/product/${id}`; // Replace with actual product API URL

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(PRODUCTS_URL);
        console.log(response.data);  // Log the product data to debug
        if (response.status === 200) {
          setProduct(response.data);
        } else {
          console.error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
      setLoading(false);
    };
  
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="p-4 bg-blue-50 min-h-screen">

      {/* Product Profile Card */}
      <div className="bg-white rounded shadow p-6">

        {/* Profile Information */}
        <div className="flex space-x-8">
          {/* Left Section */}
          <div className="w-1/4 bg-green-500 text-center p-4 rounded">
            <div className="bg-gray-200 p-4 rounded-full w-24 h-24 mx-auto"></div>
            <button className="mt-2 text-blue-700">Edit</button>
            <p className="text-white mt-4">In Stock</p>
            <h2 className="text-white font-bold text-lg mt-2">{product.product_name}</h2>

            {/* Product Expiry */}
            <div className="mt-8 space-y-2">
              <label className="block text-white">Product Expiry</label>
              <input
                type="date"
                className="block p-2 w-full rounded border border-gray-300"
                value="2024-12-31"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-3/4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block">Product Name</label>
                <input
                  type="text"
                  value="Sample Product"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Product ID</label>
                <input
                  type="text"
                  value="12345"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Barcode Symbology</label>
                <input
                  type="text"
                  value="Code128"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Batch ID Concept</label>
                <input
                  type="text"
                  value="Batch001"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Product Unit</label>
                <input
                  type="text"
                  value="Piece"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Product Cost</label>
                <input
                  type="number"
                  value="50"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Retail Price</label>
                <input
                  type="number"
                  value="75"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Product Tax</label>
                <input
                  type="number"
                  value="5"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Tax Method</label>
                <select className="block p-2 w-full rounded border border-gray-300">
                  <option value="exclusive">Exclusive</option>
                  <option value="inclusive">Inclusive</option>
                </select>
              </div>
              <div>
                <label className="block">Supplier</label>
                <input
                  type="text"
                  value="Supplier A"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Supplier Price</label>
                <input
                  type="number"
                  value="60"
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Tax</label>
                <input
                  type="text"
                  value="10%"
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
              UPDATE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;
