import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook

const NavActions = ({ mobile }) => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className={mobile ? "p-4" : "hidden md:block"}>
      <button 
        onClick={() => navigate('/quote')} // Navigate to the path defined in App.js
        className="w-full bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 shadow-lg hover:shadow-orange-200 transition-all duration-300"
      >
        Get a Quote
      </button>
    </div>
  );
};

export default NavActions;