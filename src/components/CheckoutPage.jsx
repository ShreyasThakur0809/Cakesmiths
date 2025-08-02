// src/components/CheckoutPage.jsx

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const CheckoutPage = ({ onBackToCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the payment and order submission logic.
    console.log('Order submitted:', formData);
    alert('Your order has been placed successfully!');
  };

  return (
    <div className="p-8 bg-primary rounded-3xl shadow-xl">
      <button onClick={onBackToCart} className="mb-8 flex items-center space-x-2 text-background hover:text-accent transition-colors">
        <ArrowLeft className="h-6 w-6" />
        <span className="text-lg font-bold">Back to Cart</span>
      </button>

      <h1 className="text-5xl font-bold text-secondary font-serif mb-8 text-center">Checkout</h1>
      <p className="text-center text-lg text-secondary mb-8">
        Please fill in your details to complete your purchase.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Shipping Information */}
        <div className="bg-[#f7f5f2] rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">Shipping Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[#333333] font-medium mb-1">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f23958]" required />
            </div>
            <div>
              <label htmlFor="address" className="block text-[#333333] font-medium mb-1">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f23958]" required />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="city" className="block text-[#333333] font-medium mb-1">City</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f23958]" required />
              </div>
              <div className="w-1/2">
                <label htmlFor="zip" className="block text-[#333333] font-medium mb-1">ZIP Code</label>
                <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f23958]" required />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-[#f7f5f2] rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">Payment Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="card" className="block text-[#333333] font-medium mb-1">Credit Card Number</label>
              <input type="text" id="card" name="card" value={formData.card} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f23958]" required />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="expiry" className="block text-[#333333] font-medium mb-1">Expiry Date</label>
                <input type="text" id="expiry" name="expiry" value={formData.expiry} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f23958]" placeholder="MM/YY" required />
              </div>
              <div className="w-1/2">
                <label htmlFor="cvv" className="block text-[#333333] font-medium mb-1">CVV</label>
                <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f23958]" required />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="w-full px-8 py-4 bg-[#f23958] text-white font-bold rounded-full shadow-lg hover:bg-[#851a2c] transition-transform transform hover:scale-105">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
