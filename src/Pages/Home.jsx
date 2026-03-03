import React from 'react';
import Navbar from '../components/Navbar';
import HomeContent from '../components/Home'; // This pulls from components/Home/index.jsx
import Features from '../components/Features'; // This pulls from components/Features/index.jsx
import Services from '../components/Services';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <HomeContent />
        <Features />
        <Services />
      </main>
      {/* Footer can go here later */}
    </div>
  );
};

export default Home;