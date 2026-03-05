import React from 'react';

const NavLogo = ({ isScrolled }) => (
  <div className="shrink-0 flex items-center cursor-pointer select-none transition-transform duration-300 hover:scale-105">
    <img 
      src="/src/assets/card.jpeg" 
      alt="Vedha Packers and Movers Logo" 
      className={`h-20 w-auto object-contain transition-opacity duration-300 ${
        isScrolled ? 'opacity-90' : 'opacity-100'
      }`} 
    />
  </div>
);

export default NavLogo;