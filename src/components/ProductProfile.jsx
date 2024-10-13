import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from './apiUrl';

const ProductProfile = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [profile_picture, setProfilePicture] = useState('');
  const [loading, setLoading] = useState(false);

  const PRODUCTS_URL = `${API_BASE_URL}/product/${id}`;

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(PRODUCTS_URL);
        if (response.status === 200) {
          setProduct(response.data);
          console.log(response.data);
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


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await axios.put(PRODUCTS_URL, product);
      if (response.status === 200) {
        console.log('Product updated successfully');
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

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
          <div className="bg-gray-200 p-4 rounded-full w-24 h-24 mx-auto relative">
  {product.profile_picture ? (
    <img
      src={`data:image/jpeg;base64,${product.profile_picture}`}
      alt={product.product_name}
      className="w-24 h-24 object-cover rounded-full"
    />
  ) : (
    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
    </div>
  )}
</div>

            <button className="mt-2 text-blue-700">Edit</button>
            <p className="text-white mt-4">In Stock</p>
            <h2 className="text-white font-bold text-lg mt-2">{product.product_name}</h2>

            {/* Product Expiry */}
            <div className="mt-8 space-y-2">
              <label className="block text-white">Product Expiry</label>
              <input
                type="date"
                className="block p-2 w-full rounded border border-gray-300"
                name="expiry_date"
                value={product.product_expiry}
                onChange={handleInputChange}
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
                  name="product_name"
                  value={product.product_name}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Product ID</label>
                <input
                  type="text"
                  name="product_id"
                  value={product.product_id}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Barcode Symbology</label>
                <input
                  type="text"
                  name="barcode_symbology"
                  value={product.barcode_symbology}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Batch ID Concept</label>
                <input
                  type="text"
                  name="batch_id"
                  value={product.batch_id_concept}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Product Unit</label>
                <input
                  type="text"
                  name="product_unit"
                  value={product.product_unit}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Product Cost</label>
                <input
                  type="number"
                  name="product_cost"
                  value={product.product_cost}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Retail Price</label>
                <input
                  type="number"
                  name="retail_price"
                  value={product.retail_price}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Product Tax</label>
                <input
                  type="text"
                  name="product_tax"
                  value={product.product_tax}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Tax Method</label>
                <input
                  name="tax_method"
                  className="block p-2 w-full rounded border border-gray-300"
                  value={product.tax_method}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  value={product.supplier}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Supplier Price</label>
                <input
                  type="number"
                  name="supplier_price"
                  value={product.supplier_price}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block">Tax</label>
                <input
                  type="text"
                  name="tax"
                  value={product.tax}
                  onChange={handleInputChange}
                  className="block p-2 w-full rounded border border-gray-300"
                />
              </div>
            </div>

            <button
              className="p-2 bg-pink-500 text-white rounded w-full"
              onClick={handleUpdateProduct}
            >
              UPDATE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;
