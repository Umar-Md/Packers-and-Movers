import React from 'react';

const MapSection = () => {
  // Coordinates: 16.312944, 80.455667 (Guntur region, Andhra Pradesh)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3829.6200257579144!2d80.4530556!3d16.3129444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE4JzQ2LjYiTiA4MMKwMjcnMjAuNCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <div className="w-full h-125 lg:h-full min-h-100 rounded-[40px] overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white">
      <iframe 
        title="office-location"
        src={mapSrc}
        className="w-full h-full border-0"
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;