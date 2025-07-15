import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-[#121212] text-white px-6 py-4 shadow-md border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Brand */}
        <div className="text-2xl font-bold text-orange-400">
          SEO Audit Tool
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <Link to="/audit" className="hover:text-orange-400 transition">Audit</Link>
          <Link to="/about" className="hover:text-orange-400 transition">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
