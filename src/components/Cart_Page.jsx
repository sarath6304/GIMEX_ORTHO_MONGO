import React, { useState } from "react";
import { TruckIcon } from '@heroicons/react/24/outline';
import { TagIcon } from '@heroicons/react/24/outline';
// import materialIcons from 'material-icons-react';
// import {TreshIcon} from '@heroicons/react/24/solid';

export default function CartPage() {
  const [deliveryOption, setDeliveryOption] = useState("address");
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });
  const [addressAdded, setAddressAdded] = useState(false);
  const pricePerItem = 4100;
  const deliveryFee = 100;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressInfo({
      ...addressInfo,
      [name]: value
    });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate the form
    // and send the data to your backend
    setAddressAdded(true);
    setShowAddressModal(false);
  };

  const itemTotal = pricePerItem * quantity;
  const grandTotal = itemTotal + deliveryFee;

  return (
    <div className="min-h-screen bg-white text-black p-4 flex flex-col md:flex-row lg:flex-row gap-6">
      {/* Left Side */}
      <div className="w-full md:w-2/3 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold">Cart</h1>

        {/* Delivery Options */}
        {/* <div className="border rounded-lg flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x">
          <div className="flex items-start gap-2 p-4 sm:w-1/2 bg-green-50 border-green-500 border rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
            <input
              type="radio"
              checked={deliveryOption === "address"}
              onChange={() => setDeliveryOption("address")}
              className="mt-1" />
            <div>
              <p className="font-semibold">Deliver this to an address</p>
              <p className="text-sm text-gray-600">
                Get estimated delivery time after you add the address
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-4 sm:w-1/2">
            <input
              type="radio"
              checked={deliveryOption === "pickup"}
              onChange={() => setDeliveryOption("pickup")}
              className="mt-1" />
            <div>
              <p className="font-semibold">Pickup from store</p>
              <p className="text-sm text-gray-600">
                Check with store if pickup is available today
              </p>
            </div>
          </div>
        </div> */}

        {/* Delivery Address */}
        {/* <div className="border p-4 rounded-lg flex justify-between items-center">
          <p className="font-semibold flex items-center gap-2">
          <TruckIcon className="h-5 w-5 text-gray-600" />
           Delivery Address
          </p>
          <button className="text-green-700 font-semibold">Add address</button>
          
        </div> */}
        <div className="border p-4 rounded-lg flex justify-between items-center">
          <div className="flex-1">
            <p className="font-semibold flex items-center gap-2">
              <TruckIcon className="h-5 w-5 text-gray-600" />
              Delivery Address
            </p>
            <button 
            className="text-green-700 font-semibold relative right-0"
            onClick={() => setShowAddressModal(true)}>
            {addressAdded ? "Edit address" : "Add address"}
          </button>
            {addressAdded && !showAddressModal && (
              <div className="mt-2 text-sm">
                <p><span className="font-medium">Name:</span> {addressInfo.name}</p>
                <p><span className="font-medium">Mobile:</span> {addressInfo.mobile}</p>
                <p><span className="font-medium">Address:</span> {addressInfo.address}, {addressInfo.city}, {addressInfo.state} - {addressInfo.pincode}</p>
              </div>
            )}

            {showAddressModal && (
              <div className="mt-4 border-t pt-4">
                <form onSubmit={handleAddressSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={addressInfo.name}
                      onChange={handleAddressChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number *</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={addressInfo.mobile}
                      onChange={handleAddressChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={addressInfo.email}
                      onChange={handleAddressChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address *</label>
                    <textarea
                      id="address"
                      name="address"
                      value={addressInfo.address}
                      onChange={handleAddressChange}
                      rows="3"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={addressInfo.city}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">State *</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={addressInfo.state}
                        onChange={handleAddressChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode *</label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={addressInfo.pincode}
                      onChange={handleAddressChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>

                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      type="button"
                      onClick={() => setShowAddressModal(false)}
                      className="bg-gray-200 text-gray-800 py-2 px-6 rounded-md font-medium hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Order Instructions */}
        {/* <div className="border p-4 rounded-lg flex justify-between items-center">
          <p className="font-semibold flex items-center gap-2">
             Order Instructions
          </p>
          <button className="text-green-700 font-semibold">Add</button>
        </div> */}
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/3 border-t md:border-t-0 md:border-l p-4 space-y-4 bg-rose-200">
        <div className="flex flex-row sm:flex-row gap-6 items-start">
          <img
            src="/images/Gimex_1.png"
            alt="Success ortho powder"
            className=" w-[30px] h-[30px] mt-2"
          />
          <div className="flex-1">
            <p className="font-medium">GIMEX Ortho</p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span className="line-through">₹4999</span>
              <span className="text-black">₹{pricePerItem}</span>
              <span className="text-green-600 font-semibold">18% OFF</span>
            </div>
          </div>
          <div className="flex items-center gap-2 border px-2 py-1 rounded-full">
            <button onClick={handleDecrease} className="text-lg font-semibold">-</button>
            {quantity}
            <button onClick={handleIncrease} className="text-lg font-semibold">+</button>
          </div>
          <p className="font-medium">₹{pricePerItem * quantity}</p>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span>Item Total</span>
            <span>₹{itemTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery fees</span>
            <span>₹{deliveryFee}</span>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between font-bold text-lg">
            <span>Grand Total</span>
            <span>₹{grandTotal}</span>
          </div>
        </div>

        <button className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-700 font-semibold overflow-hidden">
          Place Order
        </button>

        {/* Available Offers */}
        <div className="border p-4 rounded-lg">
          <div className="flex items-center gap-2 font-semibold mb-2">
          <TagIcon className="h-5 w-5 text-black" /> Available offers
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border rounded p-2 w-full"
            />
            <button 
              className={`font-semibold px-6 py-2 rounded
                  ${!couponCode.trim() 
                    ? "bg-gray-100 text-gray-400"
                    : "bg-green-500 text-white"
                  }`} 
              disabled = {!couponCode.trim()}>
              Apply
            </button>
          </div>
        </div>

        <div className="flex sm:flex-col md:flex-row gap-4 text-sm text-gray-600 justify-center">
          <div className="flex items-center gap-1">
            <span className="material-icons text-gray-500">security</span> Secured Payment
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons text-gray-500">verified</span> Verified Merchant
          </div>
        </div>
      </div>
    </div>
  );
}
