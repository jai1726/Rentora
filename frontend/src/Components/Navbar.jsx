import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Importing user icon from react-icons

export default function Navbar() {
  return (
    <nav className="bg-purple-400 p-4 flex justify-between items-center">
      <div className="text-white">
        <a href="/" className="text-lg font-semibold">Rentora.</a>
      </div>
      <div className="text-white">
        <FaUserCircle size={30} />
      </div>
    </nav>
  );
}
