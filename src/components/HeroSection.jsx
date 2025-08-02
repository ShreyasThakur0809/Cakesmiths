// src/components/HeroSection.jsx

import React from 'react';
import cakeImage from '../assets/cake.jpg'; // Import your image

const HeroSection = () => (
  <section id="home" className="flex flex-col md:flex-row items-center justify-between text-left py-10 px-00 min-h-[70vh] bg-primary dark:bg-background rounded-3xl">
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h2 className="text-5xl md:text-6xl font-extrabold text-background dark:text-text leading-tight mb-6 font-serif">
        Celebrate Life's Sweet Moments with the Perfect Cake
      </h2>
      <p className="text-lg text-background dark:text-text mb-8 max-w-lg">
        Choose from our lovingly curated selection or pour your heart into designing a cake that's as special as your occasion. Let's make every slice resonate with joy and connection.
      </p>
      <div className="flex space-x-4">
        {/* Changed button to an anchor tag to redirect to the products section */}
        <a href="#products" className="px-8 py-3 bg-accent text-text dark:text-background font-bold rounded-full shadow-lg hover:bg-secondary transition-transform transform hover:scale-105">
          Shop Now
        </a>
        <button className="px-8 py-3 bg-secondary text-text dark:text-background font-bold rounded-full shadow-lg hover:bg-accent transition-transform transform hover:scale-105">
          Customize Now
        </button>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center items-center relative">
      {/* Visual background elements */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-accent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 left-10 h-20 w-20 bg-secondary rounded-full blur-3xl opacity-50"></div>

      {/* Main product image, styled to look elegant and framed */}
      <div className="relative z-10 w-full max-w-md">
        <img
          src={cakeImage} // Using the imported image
          alt="A professional-looking cake"
          className="rounded-3xl shadow-2xl w-full h-auto"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/800x800/dea0ab/851a2c?text=Cake+Image+Fallback";
          }}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
