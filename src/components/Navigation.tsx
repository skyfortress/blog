'use client';

import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="glass-card fixed w-full z-10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 logo-text">
                SkyFortress
              </span>
              <span className="text-xs tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 font-semibold">
                Expert AI Project Audits
              </span>
            </a>
          </div>
          <div className="hidden md:flex space-x-12">
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium nav-link">
              Services
            </a>
            <a href="/telegram-bots" className="text-gray-600 hover:text-gray-900 font-medium nav-link">
              Telegram Bots
            </a>
            <a href="/ecommerce-apps" className="text-gray-600 hover:text-gray-900 font-medium nav-link">
              E-commerce Apps
            </a>
            <a href="/custom-ai-services" className="text-gray-600 hover:text-gray-900 font-medium nav-link">
              Custom AI
            </a>
            <a href="/mlops-services" className="text-gray-600 hover:text-gray-900 font-medium nav-link">
              MLOps
            </a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card absolute w-full border-t border-gray-100">
          <div className="px-4 py-3 space-y-4">
            <a 
              href="#services" 
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a 
              href="/telegram-bots" 
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={closeMobileMenu}
            >
              Telegram Bots
            </a>
            <a 
              href="/ecommerce-apps" 
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={closeMobileMenu}
            >
              E-commerce Apps
            </a>
            <a 
              href="/custom-ai-services" 
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={closeMobileMenu}
            >
              Custom AI
            </a>
            <a 
              href="/mlops-services" 
              className="block text-gray-600 hover:text-gray-900 py-2"
              onClick={closeMobileMenu}
            >
              MLOps
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
