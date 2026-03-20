import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, User, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-ui-border",
      scrolled ? "shadow-md py-3" : "py-5"
    )}>
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-brand-primary flex-shrink-0">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentcolor' }}>
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 3.162.722 4.672l-.073.555c-.566 3.743-3.66 6.38-7.102 6.01l-.575-.075-.468-.08c-2.349-.466-4.296-1.92-5.033-3.793l-.096-.255-.09.24c-.722 1.93-2.71 3.444-5.118 3.888l-.575.075-.468.08c-3.442.37-6.536-2.267-7.102-6.01l-.073-.555c-.188-1.51.055-3.08.722-4.672l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.211C10.914 9.49 6.85 18.015 6.038 19.923c-.48 1.144-.62 2.158-.456 3.123.42 2.476 2.27 4.195 4.56 4.027 1.628-.12 3.037-1.01 3.85-2.435l.236-.436.195.405c.875 1.63 2.378 2.58 4.086 2.466 2.29-.168 4.14-1.887 4.56-4.027.164-.965.024-1.98-.456-3.123-.812-1.908-4.876-10.433-6.975-14.712C18.053 3.539 17.24 2 16 2zm0 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
          </svg>
          <span className="text-xl font-bold hidden md:block tracking-tighter">airbnb</span>
        </Link>

        {/* Search Pill */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer divide-x divide-gray-300">
          <button className="px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-gray-50 rounded-l-full">
            Anywhere
          </button>
          <button className="px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-gray-50">
            Any week
          </button>
          <div className="flex items-center pl-4 pr-2 py-2.5 hover:bg-gray-50 rounded-r-full gap-3">
            <span className="text-sm text-text-secondary font-normal">Add guests</span>
            <div className="bg-brand-primary p-2 rounded-full text-white">
              <Search size={14} strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Mobile Search Pill */}
        <div className="md:hidden flex items-center flex-1 mx-4 bg-gray-100 rounded-full px-4 py-2.5 gap-3 shadow-sm">
           <Search size={18} className="text-text-primary" />
           <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight">Where to?</span>
              <span className="text-[10px] text-text-secondary leading-tight">Anywhere • Any week • Add guests</span>
           </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-2 flex-shrink-0 hidden md:flex">
          <button className="text-sm font-medium px-4 py-2 hover:bg-gray-100 rounded-full transition-colors">
            Become a host
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Globe size={18} />
          </button>
          <button className="flex items-center gap-2 border border-gray-300 rounded-full p-1 pl-3 hover:shadow-md transition-shadow ml-1">
            <Menu size={18} />
            <div className="bg-gray-500 rounded-full p-1 text-white">
              <User size={18} fill="currentColor" className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

