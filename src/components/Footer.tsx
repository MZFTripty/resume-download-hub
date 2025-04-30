
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Mirza Zarin Fatema</h3>
            <p className="text-white/70">Frontend Web Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white/80 transition-colors">GitHub</a>
              <a href="#" className="hover:text-white/80 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Mirza Zarin Fatema. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
