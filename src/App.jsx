import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import Footer from './components/Footer/Footer';
import FloatingActions from './components/FloatingActions';
  
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Home />

      </main>
      <FloatingActions />
      <Footer />  

    </div>
  );
}

export default App;