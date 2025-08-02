// src/components/Navbar.jsx

import { Sun, Moon, ShoppingCart, Search, User } from 'lucide-react';

const Navbar = ({ toggleTheme, isDarkMode, cartItems }) => (
  <header className="sticky top-0 z-50 bg-primary/80 dark:bg-background/80 backdrop-blur-md shadow-sm">
    <nav className="container mx-auto flex justify-between items-center px-4 py-4">
      <div className="flex items-center space-x-8">
        <h1 className="text-background dark:text-text text-3xl font-bold font-serif">Cakery</h1>
        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-background dark:text-text hover:text-accent transition-colors text-lg">Home</a>
          <a href="#products" className="text-background dark:text-text hover:text-accent transition-colors text-lg">Shop</a>
          <a href="#about" className="text-background dark:text-text hover:text-accent transition-colors text-lg">About</a>
          <a href="#contact" className="text-background dark:text-text hover:text-accent transition-colors text-lg">Contact</a>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-full text-background dark:text-text hover:bg-secondary transition-colors"
          aria-label="Search"
        >
          <Search className="h-6 w-6" />
        </button>
        <button
          className="p-2 rounded-full text-background dark:text-text hover:bg-secondary transition-colors"
          aria-label="My Account"
        >
          <User className="h-6 w-6" />
        </button>
        <button
          className="relative p-2 rounded-full text-background dark:text-text hover:bg-secondary transition-colors"
          aria-label="View shopping cart"
          onClick={() => window.location.href = '#cart'}
        >
          <ShoppingCart className="h-6 w-6" />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-accent rounded-full">
              {cartItems.length}
            </span>
          )}
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-background dark:text-text hover:bg-secondary transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-400" />
          ) : (
            <Moon className="h-6 w-6 text-accent" />
          )}
        </button>
      </div>
    </nav>
  </header>
);

export default Navbar;
