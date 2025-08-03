// src/components/ProductList.jsx
// src/components/ProductList.jsx

import React from 'react';
import CakeCard from './CakeCard';

// The ProductList component now accepts a 'products' prop and a new 'onProductClick' prop.
const ProductList = ({ products, onProductClick }) => (
  <section id="products" className="py-20">
    <h3 className="text-5xl font-bold text-center mb-12 text-[#851a2c] dark:text-[#f23958]">Signature Cakes</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map(cake => (
        // Pass the onProductClick function to each CakeCard.
        <CakeCard key={cake.id} cake={cake} onProductClick={onProductClick} />
      ))}
    </div>
  </section>
);

export default ProductList;

