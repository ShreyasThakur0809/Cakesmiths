// src/components/ProductList.jsx

import React from 'react';
import CakeCard from './CakeCard';

// The ProductList component now accepts a 'products' prop.
const ProductList = ({ products }) => (
  <section id="products" className="py-20">
    <h3 className="text-5xl font-bold text-center mb-12 text-secondary dark:text-accent">Signature Cakes</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {/* The CakeCard component is now rendered for each product in the list
          received from the App component. */}
      {products.map(cake => (
        <CakeCard key={cake.id} cake={cake} />
      ))}
    </div>
  </section>
);

export default ProductList;
