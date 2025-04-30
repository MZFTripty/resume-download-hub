
import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-primary">MZF<span className="text-black">.TRIPTY</span></div>
        
        <div className="hidden md:flex space-x-2">
          <a href="#about" className="nav-link">About</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
