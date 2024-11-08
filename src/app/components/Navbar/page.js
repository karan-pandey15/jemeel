"use client"
import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiSearch, FiUser, FiShoppingBag, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Function to handle closing the search bar and resetting the state
  const handleSearchClose = () => {
    setSearchText('');
    setIsSearchOpen(false);
  };

  return (
    <div className="w-full fixed top-0 z-50 font-harmonia">
      {/* Top announcement bar */}
      <div className="bg-black text-white text-xs md:text-sm py-1 text-center font-medium">
        BUY 1 & GET 2ND @ 50% OFF | USE CODE: B1G1@50
      </div>
      
      {/* Main navbar */}
      <div className="bg-white shadow-md py-2 relative">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Left links for larger screens */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-black text-sm">HOME</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">CONTACT US</a>
            <a href="#" className="text-gray-600 hover:text-black text-sm">ABOUT US</a> 
          </div>
          
          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FiX className="text-gray-600 w-6 h-6" /> : <FiMenu className="text-gray-600 w-6 h-6" />}
            </button>
          </div>
          
          {/* Logo or Search bar */}
          <div className="text-xl font-bold text-center flex-1 md:flex-none relative">
            {isSearchOpen ? (
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full md:w-auto px-4 py-1 border border-gray-300 rounded-lg outline-none transition-all duration-300 font-light text-gray-700"
                  autoFocus
                />
                <button
                  onClick={handleSearchClose}
                  className="absolute right-2 text-gray-500"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <span className="tracking-wide text-black-200 font-extrabold">JEMEL</span>
            )}
          </div>
          
          {/* Right icons */}
          <div className="flex space-x-4 items-center">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <FiSearch className="text-gray-600 w-5 h-5" />
            </button>
            <FiUser className="text-gray-600 w-5 h-5" />
            <FiShoppingBag className="text-gray-600 w-5 h-5" />
            
            {/* Social media icons - hidden on small screens */}
            <div className="hidden md:flex space-x-3">
              <FaInstagram className="text-gray-600 w-5 h-5" />
              <FaFacebook className="text-gray-600 w-5 h-5" />
              <FaTwitter className="text-gray-600 w-5 h-5" />
              <FaPinterest className="text-gray-600 w-5 h-5" />
              <FaLinkedin className="text-gray-600 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="w-64 bg-white shadow-md h-full p-5 space-y-4 text-gray-700">
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-600">
              <FiX className="w-6 h-6" />
            </button>
            <a href="#" className="block text-lg">HOME PAGE</a>
            <a href="#" className="block text-lg">CONTACT US</a>
            <a href="#" className="block text-lg">ABOUT</a>
            <a href="#" className="block text-lg">OUR PRODUCTS</a> 
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
