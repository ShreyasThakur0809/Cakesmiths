// src/components/Filters.jsx

import React from 'react';

const Filters = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onFilterChange(name, checked);
  };

  return (
    <div className="p-6 bg-[#f7f5f2] rounded-3xl shadow-lg h-full">
      <h2 className="text-2xl font-bold text-[#333333] mb-4">FILTERS</h2>
      <div className="space-y-4 text-lg">
        <div>
          <h3 className="font-bold text-[#333333] mb-2">Weight</h3>
          <label className="flex items-center space-x-2 text-[#333333]">
            <input
              type="checkbox"
              name="1kg"
              checked={filters.weight['1kg']}
              onChange={handleCheckboxChange}
              className="rounded text-[#f23958] focus:ring-[#f23958]"
            />
            <span>1 Kg</span>
          </label>
          <label className="flex items-center space-x-2 text-[#333333]">
            <input
              type="checkbox"
              name="1/2kg"
              checked={filters.weight['1/2kg']}
              onChange={handleCheckboxChange}
              className="rounded text-[#f23958] focus:ring-[#f23958]"
            />
            <span>1/2 Kg</span>
          </label>
        </div>
        <div>
          <h3 className="font-bold text-[#333333] mb-2">Dietary</h3>
          <label className="flex items-center space-x-2 text-[#333333]">
            <input
              type="checkbox"
              name="egg"
              checked={filters.dietary.egg}
              onChange={handleCheckboxChange}
              className="rounded text-[#f23958] focus:ring-[#f23958]"
            />
            <span>Egg</span>
          </label>
          <label className="flex items-center space-x-2 text-[#333333]">
            <input
              type="checkbox"
              name="eggless"
              checked={filters.dietary.eggless}
              onChange={handleCheckboxChange}
              className="rounded text-[#f23958] focus:ring-[#f23958]"
            />
            <span>Eggless</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
