import React from 'react';

const NavActions = ({ mobile }) => (
  <div className={mobile ? "p-4" : "hidden md:block"}>
    <button className="w-full bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 shadow-lg hover:shadow-orange-200 transition-all duration-300">
      Get a Quote
    </button>
  </div>
);

export default NavActions;