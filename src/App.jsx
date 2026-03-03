import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import Footer from './components/Footer/Footer';
  
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Home />
      
      </main>
      <Footer />  
    </div>
  );
}

export default App;