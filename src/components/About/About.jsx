// src/components/About/About.jsx
import React from 'react';
import Overview from './Overview';
import MissionVision from './MissionVision';
import Strengths from './Strengths';
// ❌ DELETE THIS LINE: import Navbar from '../Navbar';

const About = () => {
  return (
    // 'pt-0' or remove 'pt-20' if you want the dark section 
    // to go right up under the transparent navbar
    <main className="overflow-x-hidden">
      {/* ❌ DELETE THIS LINE: <Navbar /> */}
      
      <div className="bg-[#34405c] py-18 px-6 text-center"> 
        {/* increased py-18 to give the Navbar space to breathe */}
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter" style={{ fontFamily: 'Century Gothic, sans-serif' }}>
          About <span className="text-[#b0008e]">Us</span>
        </h1>
        <p className="text-gray-400 mt-0 font-montserrat text-lg">
          Reliability • Security • Speed
        </p>
      </div>

      <Overview />
      <MissionVision />
      <Strengths />
      
      {/* CTA Section */}
      <div className="bg-[#b0008e] py-16 px-6 text-center">
        <h2 className="text-3xl font-black text-white mb-2">Ready to experience a better move?</h2>
        <button className="bg-white text-[#b0008e] px-12 py-4 rounded-full font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all shadow-xl">
          Get a Quote Now
        </button>
      </div>
    </main>
  );
};

export default About;