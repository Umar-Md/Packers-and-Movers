import React, { useState, useEffect } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarBg = isScrolled
    ? "bg-gray-200 backdrop-blur-md shadow-md py-2"
    : "bg-transparent py-4";

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <NavLogo isScrolled={isScrolled} />

          <NavLinks isScrolled={isScrolled} />

          <NavActions />

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <NavLinks mobile closeMenu={() => setIsOpen(false)} isScrolled />
          <div className="p-4 border-t border-gray-100">
            <NavActions mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;