"use client"
import React, { useState } from 'react';
import { 
  Phone, 
  Search, 
  Truck, 
  ShoppingBag, 
  User, 
  Menu, 
  ChevronDown, 
  Zap,
  X
} from 'lucide-react';
import { GiFruitBowl } from 'react-icons/gi';
import { MdAddCall } from 'react-icons/md';
import { FaTruckMoving } from 'react-icons/fa6';
import { BiSolidZap } from 'react-icons/bi';

export default function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = 0;

  const categories = [
    'Beverage', 'Desserts', 'Drinks & Juice', 'Fish & Meats',
    'Kids Items', 'Computers', 'Fashion', 'Health', 'Pharmacy', 'Toys & Games'
  ];

  const navLinks = [
    'New Releases', 'Kids Items', 'Computers', 
    'Fashion', 'Health', 'Pharmacy', 'Toys & Games'
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans border-b border-gray-100 bg-white">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-1.5 text-gray-700 hover:text-emerald-600 focus:outline-none"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
            <GiFruitBowl />
          </div>
          <span className="text-lg sm:text-xl font-bold text-gray-800">
            Taskco<span className="text-emerald-600">Mart</span>
          </span>
        </div>

        {/* Hotline (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 shrink-0">
          <MdAddCall className="w-3.5 h-3.5 text-emerald-600" />
          <div>
            <span className="block text-[10px] text-gray-400 leading-none">Hotline</span>
            <span className="font-semibold text-gray-700">01896-263647</span>
          </div>
        </div>

        {/* Search Bar (Hidden on Mobile, visible sm and up) */}
        <div className="hidden sm:flex flex-1 max-w-xs md:max-w-md lg:max-w-lg relative">
          <input
            type="text"
            placeholder="Enter any keyword..."
            className="w-full py-2 pl-4 pr-10 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-5 text-xs text-gray-700 shrink-0">
          <a href="#" className="hidden sm:flex items-center gap-1.5 hover:text-emerald-600">
            <FaTruckMoving className="w-4 h-4 text-emerald-600" />
            <span>Track order</span>
          </a>

          <a href="#" className="flex items-center gap-1.5 hover:text-emerald-600 relative">
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-emerald-600" />
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </div>
            <span className="font-semibold hidden sm:inline">Cart</span>
          </a>

          <a href="#" className="border border-emerald-600 text-emerald-600 px-2.5 sm:px-3 py-1.5 rounded-md hover:bg-emerald-600 hover:text-white transition text-xs">
            Login<span className="hidden sm:inline">/Register</span>
          </a>
        </div>
      </div>

      {/* Mobile Search Bar Row (Visible only on small screens) */}
      <div className="px-4 pb-3 sm:hidden">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Enter any keyword..."
            className="w-full py-2 pl-4 pr-10 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Menu Bar (Desktop Only) */}
      <div className="hidden md:block border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold py-0">
          
          {/* Categories Dropdown (Hover on Desktop) */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <button className="bg-emerald-600 text-white px-4 py-2.5 flex items-center gap-2 hover:bg-emerald-700 transition">
              <Menu className="w-4 h-4" />
              <span>CATEGORIES</span>
              <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCategoryOpen && (
              <div className="absolute left-0 top-full w-48 bg-white border border-gray-200 shadow-md py-1 z-50">
                {categories.map((cat, idx) => (
                  <a key={idx} href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 font-normal">
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-6 text-gray-700">
            {navLinks.map((link, idx) => (
              <a key={idx} href="#" className="hover:text-emerald-600 transition">
                {link}
              </a>
            ))}
          </nav>

          {/* Flash Sale Badge */}
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700 px-4 py-2 text-sm font-bold tracking-wide text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <BiSolidZap className="h-4 w-4 fill-lime-300 text-lime-300 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            </span>
            <span className="relative">FLASH SALE</span>
            <span className="absolute -right-4 -top-4 h-10 w-10 rounded-full bg-lime-400/30 blur-xl" />
          </a>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-Out Menu / Drawer */}
      <div className={`fixed top-0 left-0 bottom-0 w-4/5 max-w-xs bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Drawer Header with Close Button */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
              <GiFruitBowl />
            </div>
            <span className="text-lg font-bold text-gray-800">
              Taskco<span className="text-emerald-600">Mart</span>
            </span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 text-gray-500 hover:text-gray-800"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Welcome & Login / Sign Up Header Card */}
        <div className="p-4 bg-emerald-50/60 border-b border-emerald-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Welcome to Taskco Mart</p>
            <a href="#" className="text-xs font-bold text-emerald-600 hover:underline">
              Login / Sign up
            </a>
          </div>
        </div>

        {/* Mobile Flash Sale Badge */}
        <div className="p-4 border-b border-gray-100">
          <a
            href="#"
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700 px-4 py-2.5 text-xs font-bold tracking-wide text-white shadow-md shadow-emerald-500/20 w-full"
          >
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <BiSolidZap className="h-3.5 w-3.5 fill-lime-300 text-lime-300" />
            </span>
            <span className="relative">FLASH SALE</span>
          </a>
        </div>



        {/* Mobile Categories List */}
        <div className="p-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Categories</p>
          <div className="flex flex-col gap-1">
            {categories.map((cat, idx) => (
              <a key={idx} href="#" className="py-1.5 text-sm text-gray-600 hover:text-emerald-600">
                {cat}
              </a>
            ))}
          </div>
        </div>

                {/* Mobile Navigation Links */}
        <div className="p-4 border-b border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Navigation</p>
          <div className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <a key={idx} href="#" className="py-1.5 text-sm font-medium text-gray-700 hover:text-emerald-600">
                {link}
              </a>
            ))}
            <a href="#" className="py-1.5 text-sm font-medium text-gray-700 hover:text-emerald-600 flex items-center gap-2">
              <FaTruckMoving className="w-4 h-4 text-emerald-600" />
              <span>Track order</span>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}