import React from 'react';

const NavLogo = ({ isScrolled }) => (
  <div className="shrink-0 flex items-center cursor-pointer select-none">
    <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
      isScrolled ? 'text-gray-900' : 'text-white'
    }`}>
      Vedha <span className="text-[#b0008e]">Packers &</span> 
      <span className={isScrolled ? 'text-gray-900' : 'text-white'}> Movers</span>
    </span>
  </div>
);

export default NavLogo;