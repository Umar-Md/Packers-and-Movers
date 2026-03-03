const NavLogo = ({ isScrolled }) => (
  <div className="shrink-0 flex items-center cursor-pointer">
    <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
      isScrolled ? 'text-blue-800' : 'text-blue'
    }`}>
      PACKERS&<span className={isScrolled ? 'text-orange-600' : 'text-orange-400'}>MOVERS</span>
    </span>
  </div>
);

export default NavLogo;