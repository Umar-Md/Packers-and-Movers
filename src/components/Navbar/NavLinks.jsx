const links = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact Us', href: '#contact' },
];

const NavLinks = ({ mobile, isScrolled, closeMenu }) => {
  // Logic: If not scrolled, text is white. If scrolled, text is gray.
  const textColor = isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-black hover:text-orange-400';
  
  const baseStyles = `font-semibold transition-colors duration-300 ${textColor}`;
  const mobileStyles = "block py-4 px-6 text-gray-800 hover:bg-gray-50 border-b";

  return (
    <div className={mobile ? "flex flex-col bg-white" : "hidden md:flex space-x-10"}>
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.href} 
          className={mobile ? mobileStyles : baseStyles}
          onClick={closeMenu}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;