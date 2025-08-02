// src/components/Footer.jsx

import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => (
  <footer id="contact" className="bg-primary dark:bg-background py-10 text-center">
    <div className="container mx-auto px-4">
      <p className="text-background dark:text-text mb-4 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Cakesmiths. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="text-background dark:text-text hover:text-accent transition-colors transform hover:scale-110">
          <Instagram className="h-6 w-6 md:h-7 md:w-7" />
        </a>
        <a href="#" className="text-background dark:text-text hover:text-accent transition-colors transform hover:scale-110">
          <Facebook className="h-6 w-6 md:h-7 md:w-7" />
        </a>
        <a href="#" className="text-background dark:text-text hover:text-accent transition-colors transform hover:scale-110">
          <Mail className="h-6 w-6 md:h-7 md:w-7" />
        </a>
      </div>
      <p className="mt-8 text-xs text-background dark:text-text/70">
        Handcrafted with <span className="text-accent">&hearts;</span> and code.
      </p>
    </div>
  </footer>
);

export default Footer;
