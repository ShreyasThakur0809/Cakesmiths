// src/App.jsx

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import AboutUsSection from './components/AboutUsSection';
import Footer from './components/Footer';
import ProductDetailsPage from './components/ProductDetailsPage';
import CartPage from './components/CartPage';

// Import all the new cake images
import NutellaFerreroRocher from './assets/Nutella Ferrero Rocher.jpg';
import RasmalaiCake from './assets/Rasmalai Cake.jpg';
import RedVelvet from './assets/Red Velvet.jpg';
import strawberry from './assets/strawberry.jpg';
import SwissChocolate from './assets/Swiss Chocolate.jpg';
import Blueberrycake from './assets/Blueberry cake.jpg';
import BowlCake from './assets/Bowl Cake.jpg';
import './assets/cake.jpg'; 
import CricketCake from './assets/Cricket Cake.jpg';
import Customised2 from './assets/Customised 2.jpg';
import Customised3 from './assets/Customised 3.jpg';
import Customised4 from './assets/Customised 4.jpg';
import Customised5 from './assets/Customised 5.jpg';
import Customised6 from './assets/Customised 6.jpg';
import Customised1 from './assets/Customised1.jpg';
import DutchTruffle from './assets/Dutch truffle.jpg';
import EngagementCake from './assets/Engagement Cake.jpg';
import FootballCake from './assets/Footbal Cake.jpg';
import Housewarmingcake from './assets/House warming cake.jpg';
import mangocake from './assets/mango cake.jpg';
import Mixfruitcake from './assets/Mix fruit cake.jpg';

// The main App component that renders all other components and manages global state.
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set default to dark mode
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // A list of all cake images and their data.
  const cakeProducts = [
    { id: 1, name: 'Velvet Dream', description: 'A rich red velvet cake with cream cheese frosting.', price: '35.00', imageUrl: RedVelvet },
    { id: 2, name: 'Lemon Zest Delight', description: 'Light lemon sponge with tangy lemon curd.', price: '32.00', imageUrl: mangocake },
    { id: 3, name: 'Chocolate Heaven', description: 'Layers of rich chocolate sponge and ganache.', price: '40.00', imageUrl: SwissChocolate },
    { id: 4, name: 'Strawberry Swirl', description: 'Vanilla cake with fresh strawberry jam.', price: '38.00', imageUrl: strawberry },
    { id: 5, name: 'Caramel Macchiato', description: 'Coffee sponge with caramel drizzle frosting.', price: '36.00', imageUrl: DutchTruffle },
    { id: 6, name: 'Rainbow Celebration', description: 'Colorful layered cake for special occasions.', price: '45.00', imageUrl: Mixfruitcake },
    { id: 7, name: 'Nutella Ferrero', description: 'Chocolate cake with Nutella and Ferrero Rocher.', price: '42.00', imageUrl: NutellaFerreroRocher },
    { id: 8, name: 'Rasmalai Cake', description: 'A fusion cake with the flavors of traditional rasmalai.', price: '48.00', imageUrl: RasmalaiCake },
    { id: 9, name: 'Blueberry Cake', description: 'A delicate sponge cake with blueberry cream cheese.', price: '39.00', imageUrl: Blueberrycake },
    { id: 10, name: 'Bowl Cake', description: 'A unique cake served in a bowl-shaped chocolate shell.', price: '50.00', imageUrl: BowlCake },
    { id: 11, name: 'Cricket Cake', description: 'A fun cricket-themed cake for sports fans.', price: '55.00', imageUrl: CricketCake },
    { id: 12, name: 'Customised Cake', description: 'A fully customizable cake for any occasion.', price: '60.00', imageUrl: Customised2 },
    { id: 13, name: 'Customised Cake', description: 'Another custom design cake.', price: '65.00', imageUrl: Customised3 },
    { id: 14, name: 'Customised Cake', description: 'A different customized cake style.', price: '60.00', imageUrl: Customised4 },
    { id: 15, name: 'Customised Cake', description: 'A custom cake with unique decorations.', price: '58.00', imageUrl: Customised5 },
    { id: 16, name: 'Customised Cake', description: 'A beautiful and personalized cake.', price: '52.00', imageUrl: Customised6 },
    { id: 17, name: 'Engagement Cake', description: 'An elegant cake perfect for an engagement celebration.', price: '70.00', imageUrl: EngagementCake },
    { id: 18, name: 'Football Cake', description: 'A fun football-themed cake.', price: '55.00', imageUrl: FootballCake },
    { id: 19, name: 'Housewarming Cake', description: 'A special cake for a housewarming party.', price: '45.00', imageUrl: Housewarmingcake },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleBackToShop = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
  };
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  return (
    <div className="min-h-screen font-sans bg-background dark:bg-background text-text transition-colors duration-300">
      <Navbar cartItems={cartItems} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <ProductList products={cakeProducts} onProductClick={handleProductClick} />
            <AboutUsSection />
          </>
        )}
        {currentPage === 'product' && (
          <ProductDetailsPage product={selectedProduct} onBackToShop={handleBackToShop} onAddToCart={handleAddToCart} />
        )}
        {currentPage === 'cart' && (
          <CartPage cartItems={cartItems} onBackToShop={handleBackToShop} />
        )}
      </main>
      <Footer />
    </div>
  );
}

