import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, User, Search ,Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Upper Navbar with Logo, Search and Account */}
      <div className="bg-white  w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo - Updated to match Mystic style */}
          <div className="flex-1">
            <Link to="/home" className="flex flex-col items-start">
            <span className=" text-2xl font-serif tracking-wide font-bold  text-{green-500} ">Gimax International</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="  flex-1 justify-center px-2 ">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 border border-gray-200 rounded-md py-2 px-4 pr-10 text-gray-800 text-base focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-4 w-4 text-amber-700" />
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="flex-1 flex justify-end h-12">
          <Link to="/account" className="flex flex-col items-center justify-center text-gray-700 hover:text-amber-700 w-20 h-12 self-start">
          <User className="w-5 h-5 mb-1 " />
              <span className="text-sm">Account details</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Lower Navbar with Navigation Links  */}
      <nav className="bg-gray-900 w-full z-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* DESKTOP NAVIGATION - Will only show on md screens and up */}
        <div className="hidden md:flex justify-between items-center py-3">
          {/* Logo/Brand for desktop */}
          <div className= "hidden md:flex text-white font-bold text-xl">
            <Link to="/">AyurvedaShop</Link>
          </div>
          
          {/* Navigation items */}
          <div className="flex items-center gap-5 text-white">
            <Link to="/shop" className="text-sm hover:text-amber-500 transition-colors">Shop</Link>
            <Link to="/skin-care" className="text-sm hover:text-amber-500 transition-colors">Skin Care</Link>
            <Link to="/ayurvedic-hair-care" className="text-sm hover:text-amber-500 transition-colors">Ayurvedic Hair Care</Link>
            <Link to="/ayurvedic-supplement" className="text-sm hover:text-amber-500 transition-colors">Ayurvedic Supplement</Link>
            <Link to="/natural-oils" className="text-sm hover:text-amber-500 transition-colors">Natural Oils</Link>
            <Link to="/combo" className="text-sm hover:text-amber-500 transition-colors">Combo</Link>
            <Link to="/super-saver-deals" className="text-sm hover:text-amber-500 transition-colors">Super Saver Deals</Link>
          </div>

          {/* Cart - for desktop */}
          <div className="flex items-center text-white">
            <span className="font-medium text-sm">₹0.00</span>
            <Link to="/cart" className="relative ml-3 text-amber-500">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-amber-500 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                2
              </span>
            </Link>
          </div>
        </div>
        
        {/* MOBILE HEADER - Will only show on screens smaller than md */}
        <div className="flex md:hidden justify-between items-center py-3">
          {/* Logo/Brand */}
          <div className="text-white font-bold text-lg">
            <Link to="/">AyurvedaShop</Link>
          </div>
          
          {/* Mobile Controls */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div className="flex items-center text-white">
              <span className="font-medium text-sm">₹0.00</span>
              <Link to="/cart" className="relative ml-3 text-amber-500">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  2
                </span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="text-white focus:outline-none" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown - only visible when toggled on small screens */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-2 border-t border-gray-700`}>
          <div className="flex flex-col space-y-3 pb-3 text-white">
            <Link to="/shop" className="block px-2 py-1 text-sm hover:text-amber-500 transition-colors">Shop</Link>
            <Link to="/skin-care" className="block px-2 py-1 text-sm hover:text-amber-500 transition-colors">Skin Care</Link> 
            <Link to="/ayurvedic-hair-care" className="block px-2 py-1 text-sm hover:text-amber-500 transition-colors">Ayurvedic Hair Care</Link>
            <Link to="/ayurvedic-supplement" className="block px-2 py-1 text-sm hover:text-amber-500 transition-colors">Ayurvedic Supplement</Link>
            <Link to="/natural-oils" className="block px-2 py-1 text-sm hover:text-amber-500 transition-colors">Natural Oils</Link>
            <Link to="/combo" className="block px-2 py-1 text-sm hover:text-amber-500 transition-colors">Combo</Link>
            <Link to="/super-saver-deals" className="block px-2 py-1 text-sm hover:text-amber-500 transition-colors">Super Saver Deals</Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;