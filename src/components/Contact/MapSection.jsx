import React from 'react';

// Rename the function to MapSection
const MapSection = () => {
  return (
    <div className="w-full h-[500px] lg:h-full min-h-[400px] rounded-[40px] overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white">
      <iframe 
        title="office-location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.183042173167!2d78.384666!3d17.452333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzA4LjQiTiA3OMKwMjMnMDUuMCJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen="" 
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapSection; // Export the new name