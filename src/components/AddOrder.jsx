import React, { useState } from 'react';

const AddOrder = () => {
  const [formData, setFormData] = useState({
    order_id: 'ORD00001',
    order_date: '',
    customer_name: '',
    product_name: '',
    quantity: '',
    price: '',
    status: '',
    delivery_date: '',
    payment_method: '',
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/add-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Order added successfully!');
        // Optionally, reset the form or redirect to another page
      } else {
        alert('Failed to add order.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the order.');
    }
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Add New Order</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Order Date</label>
            <input
              type="date"
              name="order_date"
              className="border rounded w-full py-2 px-3"
              value={formData.order_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Customer Name</label>
            <input
              type="text"
              name="customer_name"
              className="border rounded w-full py-2 px-3"
              value={formData.customer_name}
              onChange={handleChange}
            />
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
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="border rounded w-full py-2 px-3"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              className="border rounded w-full py-2 px-3"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Status</label>
            <select
              name="status"
              className="border rounded w-full py-2 px-3"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Delivery Date</label>
            <input
              type="date"
              name="delivery_date"
              className="border rounded w-full py-2 px-3"
              value={formData.delivery_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Payment Method</label>
            <select
              name="payment_method"
              className="border rounded w-full py-2 px-3"
              value={formData.payment_method}
              onChange={handleChange}
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700">Remarks</label>
            <textarea
              name="remarks"
              className="border rounded w-full py-2 px-3"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded shadow"
            >
              Add Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrder;
