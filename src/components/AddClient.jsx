import React, { useState } from 'react';
import { FaCamera, FaImage } from 'react-icons/fa';

const AddClient = () => {
  const [formData, setFormData] = useState({
    invoice_id: '00001',
    invoice_date: '2024-08-09',
    member_id: '21',
    client_name: '',
    contact_number: '',
    alternate_contact: '',
    email: '',
    client_source: '',
    joining_date: '2024-08-09',
    package: '',
    price: '0.00',
    discount: '',
    admission_charges: '0',
    tax: 'No tax (0%)',
    redeem_rewards: '0.00',
    amount_payable: '0.00',
    amount_paid: '',
    payment_mode: 'Branch 1 Mode',
    balance: '0.00',
    client_representative: '',
    appoint_trainer: '',
    gender: '',
    birthday: '',
    anniversary: '',
    profession: '',
    tax_id: '',
    workout_start: '',
    workout_end: '',
    address: '',
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

      const response = await fetch('http://localhost:5000/add-client', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Client added successfully!');
        // Optionally, reset the form or redirect to another page
      } else {
        alert('Failed to add client.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the client.');
    }
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Create new Product</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Existing Fields */}
          <div>
            <label className="block text-gray-700">Product Type</label>
            
               <select id="preselectedDropdown" name="options" className="border rounded w-full py-2 px-3">
                  <option value="option1" selected>Standard</option>
                  <option value="option2" >Configurable</option>
                  <option value="option3">Serialized</option>
                </select>
          </div>

          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              name="Product Name"
              className="border rounded w-full py-2 px-3"
              value="Product Name"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Product ID</label>
            <input
              type="text"
              name="member_id"
              className="border rounded w-full py-2 px-3"
              value="Product ID"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Barcode Symbology</label>
            
               <select id="preselectedDropdown" name="options" className="border rounded w-full py-2 px-3">
                  <option value="option1" selected>code39</option>
                  <option value="option2" >Code 128</option>
                  <option value="option3">QR Code</option>
                  <option value="option3">UPC</option>

                </select>
          </div>

          <div>
            <label className="block text-gray-700">Batch Id Concept</label>
               <select id="preselectedDropdown" name="options" className="border rounded w-full py-2 px-3">
                  <option value="option1" selected>Disable</option>
                  <option value="option2" >Enable</option>
                </select>
          </div>

          <div>
            <label className="block text-gray-700">Product Expiry</label>
               <select id="preselectedDropdown" name="options" className="border rounded w-full py-2 px-3">
                  <option value="option1" selected>Disable</option>
                  <option value="option2" >Enable</option>
                </select>
          </div>
          <div>
            <label className="block text-gray-700">Product Unit</label>
            <input
              type="text"
              name="Product_Unit"
              className="border rounded w-full py-2 px-3"
              value="Product Unit"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Product Cost(In INR)</label>
            <input
              type="number"
              name="product_cost"
              className="border rounded w-full py-2 px-3"
              value="0.00"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Retail price(In INR)</label>
            <input
              type="number"
              name="retail_price"
              className="border rounded w-full py-2 px-3"
              value="0.00"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Product Tax</label>
               <select id="preselectedDropdown" name="options" className="border rounded w-full py-2 px-3">
                  <option value="option1" selected>No Tax</option>
                  <option value="option2" >GST</option>
                  <option value="option3" >Sales Tax</option>
                  <option value="option4" >VAT</option>
                  <option value="option5" >Local Tax</option>
                  <option value="option6" >Import Dupy</option>


                </select>
          </div>

          <div>
            <label className="block text-gray-700">Tax Method</label>
               <select id="preselectedDropdown" name="options" className="border rounded w-full py-2 px-3">
                  <option value="option1" selected>Inclusive</option>
                  <option value="option2" >Exclusive</option>
                  <option value="option3" >Calculated Tax</option>
                  <option value="option4" >Flat Rate Tax</option>
                  <option value="option5" >Variable Tax</option>
                  <option value="option6" >Compound Tax</option>
                  <option value="option6" >Overriding Tax </option>
                  


                </select>
          </div>

          <div>
            <label className="block text-gray-700">supplier</label>
               <select id="preselectedDropdown" name="options" className="border rounded w-full py-2 px-3">
                  <option value="option1" selected>Select Supplier</option>
                  <option value="option2" >Component Suppliers</option>
                  <option value="option3" >Service Providers</option>
                  <option value="option4" >Wholesale Suppliers</option>
                  <option value="option5" >Retail Suppliers</option>
                  <option value="option6" >Secondary Suppliers</option>
                  <option value="option6" >Global Suppliers </option>
                  <option value="option6" >Local Suppliers </option>

                  


                </select>
          </div>


          <div>
            <label className="block text-gray-700">Supplier Price</label>
            <input
              type="text"
              name="supplier_price"
              className="border rounded w-full py-2 px-3"
              value="Supplier Price"
              onChange={handleChange}
            />
          </div>

          {/* <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="border rounded w-full py-2 px-3"
              value={formData.email}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Client Source</label>
            <input
              type="text"
              name="client_source"
              className="border rounded w-full py-2 px-3"
              value={formData.client_source}
              onChange={handleChange}
            />
          </div> */}

         

          {/* <div>
            <label className="block text-gray-700">Package</label>
            <input
              type="text"
              name="package"
              className="border rounded w-full py-2 px-3"
              value={formData.package}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              className="border rounded w-full py-2 px-3"
              value={formData.price}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Discount</label>
            <input
              type="text"
              name="discount"
              className="border rounded w-full py-2 px-3"
              value={formData.discount}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Admission Charges</label>
            <input
              type="text"
              name="admission_charges"
              className="border rounded w-full py-2 px-3"
              value={formData.admission_charges}
              onChange={handleChange}
            />
          </div> */}

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

          {/* <div>
            <label className="block text-gray-700">Redeem Rewards</label>
            <input
              type="text"
              name="redeem_rewards"
              className="border rounded w-full py-2 px-3"
              value={formData.redeem_rewards}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Amount Payable</label>
            <input
              type="text"
              name="amount_payable"
              className="border rounded w-full py-2 px-3"
              value={formData.amount_payable}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Amount Paid</label>
            <input
              type="text"
              name="amount_paid"
              className="border rounded w-full py-2 px-3"
              value={formData.amount_paid}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Payment Mode</label>
            <input
              type="text"
              name="payment_mode"
              className="border rounded w-full py-2 px-3"
              value={formData.payment_mode}
              onChange={handleChange}
            />
          </div> */}
{/* 
          <div>
            <label className="block text-gray-700">Balance</label>
            <input
              type="text"
              name="balance"
              className="border rounded w-full py-2 px-3"
              value={formData.balance}
              onChange={handleChange}
            />
          </div> */}


         

          

          {/* <div>
            <label className="block text-gray-700">Birthday</label>
            <input
              type="date"
              name="birthday"
              className="border rounded w-full py-2 px-3"
              value={formData.birthday}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Anniversary</label>
            <input
              type="date"
              name="anniversary"
              className="border rounded w-full py-2 px-3"
              value={formData.anniversary}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Profession</label>
            <input
              type="text"
              name="profession"
              className="border rounded w-full py-2 px-3"
              value={formData.profession}
              onChange={handleChange}
            />
          </div> */}

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

          {/* <div>
            <label className="block text-gray-700">Workout Start</label>
            <input
              type="time"
              name="workout_start"
              className="border rounded w-full py-2 px-3"
              value={formData.workout_start}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Workout End</label>
            <input
              type="time"
              name="workout_end"
              className="border rounded w-full py-2 px-3"
              value={formData.workout_end}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              className="border rounded w-full py-2 px-3"
              value={formData.address}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Remarks</label>
            <textarea
              name="remarks"
              className="border rounded w-full py-2 px-3"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div> */}

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

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
