// src/components/CakeCard.jsx

import React from 'react';
import { Plus } from 'lucide-react';

const CakeCard = ({ cake }) => (
  <div className="bg-primary dark:bg-primary rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
    <img
      src={cake.imageUrl}
      alt={cake.name}
      className="rounded-2xl w-full h-auto mb-4"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/400x300/fecaca/9d174d?text=Image+Not+Found";
      }}
    />
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
