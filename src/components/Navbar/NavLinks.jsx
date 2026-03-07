import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const NavLinks = ({ mobile, closeMenu }) => {

  const mobileStyles =
    "block py-4 px-6 text-black hover:bg-gray-50 border-b";

  return (
    <div
      className={
        mobile
          ? "flex flex-col bg-white"
          : "hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-gray-200"
      }
    >
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.href}
          onClick={closeMenu}
          className={({ isActive }) =>
            mobile
              ? mobileStyles
              : `relative px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-green-400 text-black shadow"
                    : "text-gray-700 hover:bg-gray-100"
                }`
          }
        >
          {({ isActive }) => (
            <span className="flex items-center gap-2">
              {link.name}
              {isActive && (
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              )}
            </span>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;