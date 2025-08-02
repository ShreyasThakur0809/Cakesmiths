// src/components/CartPage.jsx

import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CartPage = ({ cartItems, onBackToShop }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-8 bg-primary dark:bg-background rounded-3xl shadow-xl">
      <button onClick={onBackToShop} className="mb-8 flex items-center space-x-2 text-background dark:text-text hover:text-accent transition-colors">
        <ArrowLeft className="h-6 w-6" />
        <span className="text-lg font-bold">Continue Shopping</span>
      </button>

      <h1 className="text-5xl font-bold text-background dark:text-text font-serif mb-8">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-lg text-background dark:text-text">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-secondary dark:bg-accent rounded-xl shadow-md">
              <div className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <h4 className="text-lg font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-white/80">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <span>Quantity: {item.quantity}</span>
                <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
          <div className="flex justify-end items-center space-x-4 mt-8 pt-4 border-t border-secondary dark:border-primary">
            <span className="text-2xl font-bold text-background dark:text-text">Total:</span>
            <span className="text-3xl font-extrabold text-secondary dark:text-accent">${total}</span>
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-secondary transition-transform transform hover:scale-105">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
