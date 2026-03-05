import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About/About";
import Footer from './components/Footer/Footer';
import FloatingActions from './components/FloatingActions';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <Router>
      {/* ScrollToTop ensures the page starts at the top when navigating to /about */}
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main>
          <Routes>
            {/* Home Route - Displays your existing Home component */}
            <Route path="/" element={<Home />} />
            
            {/* About Route - Displays the new split About page sections */}
            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <FloatingActions />
        <Footer />
      </div>
    </Router>
  );
}

export default App;