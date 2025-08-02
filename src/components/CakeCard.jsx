// src/components/CakeCard.jsx

import React from 'react';
import { Plus } from 'lucide-react';

// The CakeCard component now accepts an 'onProductClick' prop.
const CakeCard = ({ cake, onProductClick }) => (
  // The entire card is now a clickable element.
  <div
    className="bg-primary dark:bg-primary rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
    onClick={() => onProductClick(cake)}
  >
    <div className="w-full aspect-w-1 aspect-h-1 mb-4 overflow-hidden rounded-2xl">
      <img
        src={cake.imageUrl}
        alt={cake.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x400/fecaca/9d174d?text=Image+Not+Found";
        }}
      />
    </div>
    <h4 className="text-2xl font-bold text-background dark:text-text mb-2">{cake.name}</h4>
    <p className="text-background dark:text-text mb-4 flex-grow">{cake.description}</p>
    <div className="mt-auto flex items-center justify-between w-full">
      <span className="text-2xl font-extrabold text-secondary dark:text-accent">${cake.price}</span>
      <button className="p-2 bg-secondary text-white rounded-full shadow-md hover:bg-accent transition-colors">
        <Plus className="h-6 w-6" />
      </button>
    </div>
  </div>
);

export default CakeCard;
