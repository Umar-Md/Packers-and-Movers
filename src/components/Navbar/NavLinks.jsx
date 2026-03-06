import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact Us', href: '/contact' },
];

const NavLinks = ({ mobile, isScrolled, closeMenu }) => {
  // Restore your exact original color logic
  const textColor = isScrolled ? 'text-black hover:text-blue-700' : 'text-white hover:text-orange-400';
  
  const baseStyles = `font-semibold transition-colors duration-300 ${textColor}`;
  const mobileStyles = "block py-4 px-6 text-black hover:bg-gray-50 border-b";

  return (
    <div className={mobile ? "flex flex-col bg-white" : "hidden md:flex space-x-10 text-[20px]"}>
      {links.map((link) => (
        <NavLink 
          key={link.name} 
          to={link.href} 
          // Applying your original baseStyles directly
          className={({ isActive }) => 
            mobile 
              ? mobileStyles 
              : `${baseStyles} ${isActive ? 'opacity-100' : 'opacity-90'}`
          }
          onClick={closeMenu}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;