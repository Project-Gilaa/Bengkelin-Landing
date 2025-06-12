import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">ServisGo</div>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600">Fitur</a>
          <a href="#how-it-works" className="hover:text-blue-600">Cara Kerja</a>
          <a href="#cta" className="hover:text-blue-600">Coba Sekarang</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2 text-gray-700 font-medium">
          <a href="#features" onClick={toggleMenu} className="block hover:text-blue-600">Fitur</a>
          <a href="#how-it-works" onClick={toggleMenu} className="block hover:text-blue-600">Cara Kerja</a>
          <a href="#cta" onClick={toggleMenu} className="block hover:text-blue-600">Coba Sekarang</a>
        </div>
      )}
    </header>
  );
};

export default Header;
