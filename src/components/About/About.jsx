// src/components/About/About.jsx
import React from 'react';
import Overview from './Overview';
import MissionVision from './MissionVision';
import Strengths from './Strengths';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate =useNavigate()
  return (
    <main className="overflow-x-hidden">
      
      <div className="bg-[#34405c] py-18 px-6 text-center"> 
        {/* increased py-18 to give the Navbar space to breathe */}
        <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
          About <span className="text-[#ff3cd8]">Us</span>
        </h1>
        <p className="text-black mt-0 font-montserrat text-lg">
          Reliability • Security • Speed
        </p>
      </div>

      <Overview />
      <MissionVision />
      <Strengths />
      
      {/* CTA Section */}
      <div className="bg-[#b0008e] py-16 px-6 text-center">
        <h2 className="text-3xl font-black text-white mb-2">Ready to experience a better move?</h2>
        <button
        onClick={() => navigate('/quote')}
        className="bg-white text-[#b0008e] px-12 py-4 rounded-full font-black hover:bg-gray-900 hover:text-white transition-all shadow-xl">
          Get a Quote Now
        </button>
      </div>
    </main>
  );
};

export default About;