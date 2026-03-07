import React from "react";
import { useNavigate } from "react-router-dom";

const NavLogo = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="cursor-pointer flex items-center"
    >
      <div className="bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-all duration-300">
        
        <span className="font-bold tracking-wide">
          Vedha Packers & Movers
        </span>

        <span className="w-2 h-2 bg-white rounded-full"></span>

      </div>
    </div>
  );
};

export default NavLogo; 