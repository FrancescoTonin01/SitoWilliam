import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Assicurati che il percorso sia corretto

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`block px-4 py-2 rounded-md transition-colors ${
        isActive(to)
          ? 'bg-blue-600 text-white'
          : 'text-gray-700 hover:bg-blue-100'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Rosina Logistica" className="h-auto w-40" /> {/* Aumentato l'altezza del logo */}
          </Link>
          
          {/* Menu per desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><NavLink to="/servizi">Servizi</NavLink></li>
              <li><NavLink to="/chi-siamo">Chi Siamo</NavLink></li>
              <li><NavLink to="/contatti">Contatti</NavLink></li>
            </ul>
          </nav>

          {/* Pulsante menu per mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu per mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg">
            <div className="space-y-2 py-4">
              <NavLink to="/servizi">Servizi</NavLink>
              <NavLink to="/chi-siamo">Chi Siamo</NavLink>
              <NavLink to="/contatti">Contatti</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;