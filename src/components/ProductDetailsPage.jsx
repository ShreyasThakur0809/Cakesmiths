// src/components/ProductDetailsPage.jsx

import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ProductDetailsPage = ({ product, onBackToShop, onAddToCart }) => {
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-8 bg-primary dark:bg-background rounded-3xl shadow-xl">
      <button onClick={onBackToShop} className="mb-8 flex items-center space-x-2 text-background dark:text-text hover:text-accent transition-colors">
        <ArrowLeft className="h-6 w-6" />
        <span className="text-lg font-bold">Back to Shop</span>
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-3xl shadow-2xl w-full h-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/800x800/fecaca/9d174d?text=Image+Not+Found";
            }}
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-background dark:text-text font-serif mb-4">{product.name}</h1>
          <p className="text-3xl font-extrabold text-secondary dark:text-accent mb-6">${product.price}</p>
          <p className="text-lg text-background dark:text-text mb-8">{product.description}</p>
          
          <div className="flex space-x-4">
            <button onClick={() => onAddToCart(product)} className="px-8 py-4 bg-accent text-black font-bold rounded-full shadow-lg hover:bg-secondary transition-transform transform hover:scale-105">
              Add to Cart
            </button>
            <button className="px-8 py-4 bg-primary text-background dark:text-text font-bold rounded-full shadow-lg hover:bg-secondary transition-transform transform hover:scale-105">
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
