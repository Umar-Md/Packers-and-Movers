import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
  
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;