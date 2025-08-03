// src/components/AboutUsSection.jsx

import React from 'react';

const AboutUsSection = () => (
  <section id="about" className="py-20 bg-secondary dark:bg-secondary rounded-3xl my-8">
    <div className="max-w-4xl mx-auto px-4">
      <h3 className="text-5xl font-bold text-center mb-6 text-text dark:text-text">Our Story</h3>
      <p className="text-center text-lg text-text dark:text-text mb-8">
        At CakeSmiths, we believe every moment is worth celebrating. Our journey began with a passion for creating not just cakes, but edible works of art. We are committed to using the finest ingredients to craft unique, unforgettable desserts that bring a smile to every face.
      </p>

      {/* Adding new content to make the section more detailed */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
        <div className="w-full md:w-1/2">
          <img
            src="https://placehold.co/600x400/851a2c/efeced?text=Our+Bakers"
            alt="Our team of professional bakers"
            className="rounded-2xl shadow-xl w-full h-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x400/851a2c/efeced?text=Our+Bakers+Image";
            }}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl font-bold text-text dark:text-text mb-4">A Passion for Perfection</h4>
          <p className="text-text dark:text-text leading-relaxed mb-4">
            From classic flavors to innovative designs, each of our cakes is a work of art. We meticulously select only the finest, freshest ingredients to ensure every cake is as delicious as it is beautiful. Our dedicated team of bakers pours their heart into every single creation, making sure it’s a centerpiece for your special moments.
          </p>
          <p className="text-text dark:text-text leading-relaxed">
            Whether it's a birthday, a wedding, or just a simple treat, we are here to make your moments extra special. Thank you for being a part of our sweet journey!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
