import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-midnight-navy py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="HackTank Logo" className="h-12 mr-3" />
          <h1 className="text-white text-xl font-bold">HackTank</h1>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#como-funciona" className="text-white hover:text-sky-teal transition-colors">Como Funciona</a></li>
            <li><a href="#modalidades" className="text-white hover:text-sky-teal transition-colors">Modalidades</a></li>
            <li><a href="#depoimentos" className="text-white hover:text-sky-teal transition-colors">Depoimentos</a></li>
            <li><a href="#cadastro" className="text-white hover:text-sky-teal transition-colors">Cadastre-se</a></li>
          </ul>
        </nav>
        
        <a 
          href="#cadastro" 
          className="hidden md:block bg-pumpkin-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-coral-red transition-colors"
        >
          Quero participar
        </a>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-midnight-navy pt-4 pb-4">
          <div className="container mx-auto px-4">
            <ul className="space-y-3">
              <li><a href="#como-funciona" className="text-white block py-2 hover:text-sky-teal transition-colors" onClick={toggleMobileMenu}>Como Funciona</a></li>
              <li><a href="#modalidades" className="text-white block py-2 hover:text-sky-teal transition-colors" onClick={toggleMobileMenu}>Modalidades</a></li>
              <li><a href="#depoimentos" className="text-white block py-2 hover:text-sky-teal transition-colors" onClick={toggleMobileMenu}>Depoimentos</a></li>
              <li><a href="#cadastro" className="text-white block py-2 hover:text-sky-teal transition-colors" onClick={toggleMobileMenu}>Cadastre-se</a></li>
              <li>
                <a 
                  href="#cadastro" 
                  className="block bg-pumpkin-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-coral-red transition-colors text-center mt-4"
                  onClick={toggleMobileMenu}
                >
                  Quero participar
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 