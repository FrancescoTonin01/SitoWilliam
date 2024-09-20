import React from 'react';

function Footer() {
  return (
    <footer className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-800 text-sm font-medium">
            &copy; {new Date().getFullYear()} Rosina Logistica. Tutti i diritti riservati.
          </p>
          <p className="text-gray-800 text-sm mt-2">
            Via Roma, 123, 00100 Roma RM, Italia
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;