import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react'; 

const NavBar = () => {
  return (
    <nav className="bg-[#0e0e0e] text-white px-6 py-4 border-b border-[#1f1f1f] shadow-sm backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
  
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <Sparkles className="text-orange-400 w-5 h-5" />
          <span className="text-orange-400">Clarity</span><span className="text-white">SEO</span>
        </div>

      
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-orange-400 transition duration-200">Home</Link>
          <Link to="/audit" className="hover:text-orange-400 transition duration-200">Audit</Link>
          <Link to="/about" className="hover:text-orange-400 transition duration-200">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
