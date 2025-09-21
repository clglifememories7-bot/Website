import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-black/20 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
        <div className="flex justify-between items-center py-2 px-4">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/AC_new_logo_2x-removebg-preview.png" 
                alt="Ayyavu Promoters Logo" 
                className="h-12 w-auto"
              />
              <h1 className="text-base font-bold bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 bg-clip-text text-transparent hidden sm:block drop-shadow-lg">Ayyavu Promoters</h1>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-white/90 hover:text-red-400 transition-all duration-300 text-sm font-medium hover:scale-105">Home</a>
            <a href="#services" className="text-white/90 hover:text-red-400 transition-all duration-300 text-sm font-medium hover:scale-105">Services</a>
            <a href="#about" className="text-white/90 hover:text-red-400 transition-all duration-300 text-sm font-medium hover:scale-105">About</a>
            <a href="#contact" className="text-white/90 hover:text-red-400 transition-all duration-300 text-sm font-medium hover:scale-105">Contact</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Phone className="h-4 w-4 text-red-400" />
            <span className="hidden lg:inline text-white/90 font-medium text-sm">+91 98765 43210</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;