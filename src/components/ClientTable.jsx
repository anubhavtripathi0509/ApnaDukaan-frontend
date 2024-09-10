import React, { useEffect, useState, useRef } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { PRODUCTS_URL } from '../components/apiUrl';
import { DELETE_PRODUCT_URL } from '../components/apiUrl';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const dropdownButtonRefs = useRef([]);
  const [Productloading, setProductLoading] = useState(false);

  // Fetch all products when the component mounts
  const fetchProducts = async () => {
    setProductLoading(true);
    try {
      const response = await fetch(PRODUCTS_URL);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Failed to fetch products.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setProductLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);



  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate();
  const navigateToAddProd = () => {
    navigate('/add-product');
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${DELETE_PRODUCT_URL}/${productId}`);
      alert('Product deleted successfully!');
      await fetchProducts();
    } catch (error) {
      console.error('Failed to delete product:', error);
      alert('Failed to delete product.');
    }
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className='w-12/12 m-auto flex justify-between'>
        <div>
          <input
            className="w-80 p-2 my-5 mr-2 border-2 rounded-md focus:border-green-500 outline-none border-gray-300"
            type='text'
            placeholder='Search the product...'
          />
          <button className='text-white font-bold p-2 my-2 text-lg bg-pink-500 rounded-xl'>Search</button>
        </div>

        <div className='cursor-pointer text-center mt-5 flex'>
          <button
            onClick={() => navigateToAddProd()}
            className='text-white font-bold p-2 my-2 text-lg bg-pink-500 rounded-xl'>
            Add Product
          </button>

          <h1 onClick={() => setDropDown(!dropDown)}
              className='bg-pink-500 rounded-xl text-center h-12 font-bold flex items-center justify-between m-2 p-2 text-lg text-white'>
              Options
              <FontAwesomeIcon className="px-1 text-3xl font-bold text-white" icon={faAngleDown} />
          </h1>
        </div>
      </div>
      {dropDown && (
        <div className='cursor-pointer bg-gray-200 rounded p-3 mr-10 absolute right-10 top-[14rem]'>
          <p className='p-1 border-b-2 border-gray-400'>All Products</p>
          <p className='p-1 border-b-2 border-gray-400'>Expired Products</p>
          <p className='p-1 border-b-2 border-gray-400'>Expiring Soon</p>
        </div>
      )}

      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Product List</h2>
      </div>

      {Productloading ? (
        <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-pink-500" />
        </div>
      </div>
      ) : (
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
            <select className="border rounded px-3 py-2">
              <option>Show 10</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--Select Category--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Brands--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Stock Status--</option>
              {/* Add more options here */}
            </select>
          </div>
          <input 
            type="text" 
            className="border rounded px-3 py-2" 
            placeholder="Search" 
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Product ID</th>
                <th className="px-4 py-2 text-left">Photo</th>
                <th className="px-4 py-2 text-left">Product Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Brand</th>
                <th className="px-4 py-2 text-left">Stock Status</th>
                <th className="px-4 py-2 text-left">Expiration Date</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={product.id}>
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-center">{product.product_id}</td>
                    <td className="px-4 py-2 text-center">
                      {product.profile_picture && (
                        <img
                          src={`data:image/jpeg;base64,${product.profile_picture}`}
                          alt={product.product_name}
                          className="w-16 h-16 object-cover"
                        />
                      )}
                    </td>
                    <td className="px-4 py-2 text-center">{product.product_name}</td>
                    <td className="px-4 py-2 text-center">{product.product_cost}</td>
                    <td className="px-4 py-2 text-center">{product.product_type}</td>
                    <td className="px-4 py-2 text-center">{product.supplier}</td>
                    <td className="px-4 py-2 text-center">{product.product_unit}</td>
                    <td className="px-4 py-2 text-center">{product.product_expiry}</td>
                    <td className="px-4 py-2 text-center">
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            ref={el => dropdownButtonRefs.current[index] = el}
                            onClick={() => deleteProduct(product.id)}
                            className="flex items-center px-4 py-2 text-sm font-medium text-red-500 hover:text-white hover:bg-red-500 rounded-xl">
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="px-4 py-2 text-center">No products available</td>
                </tr>
              )}
            </tbody>
            
          </table>
        </div>
      </div>
      )}
    </div>
  );
};

export default ProductTable;