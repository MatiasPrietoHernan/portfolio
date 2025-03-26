'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { 
  Menu, 
  X, 
  Home, 
  Folder, 
  User, 
  Send 
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="w-5 h-5 mr-2" /> },
    { href: "/projects", label: "Proyectos", icon: <Folder className="w-5 h-5 mr-2" /> },
    { href: "/about", label: "Sobre mí", icon: <User className="w-5 h-5 mr-2" /> },
    { href: "/contact", label: "Contacto", icon: <Send className="w-5 h-5 mr-2" /> }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-800 flex items-center hover:text-blue-600 transition-colors"
        >
          Matias Prieto
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;