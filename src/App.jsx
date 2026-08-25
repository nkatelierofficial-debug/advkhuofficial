import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import OffsetPrinting from './pages/OffsetPrinting.jsx';
import PanaflexPrinting from './pages/PanaflexPrinting.jsx';
import VinylPrinting from './pages/VinylPrinting.jsx';
import ExpoStall from './pages/ExpoStall.jsx';
import Footer from './pages/Footer.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'offset':
        return <OffsetPrinting />;
      case 'panaflex':
        return <PanaflexPrinting />;
      case 'vinyl':
        return <VinylPrinting />;
      case 'expostall':
        return <ExpoStall />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{ background: '#090514', minHeight: '100vh', color: '#f8fafc' }}>
      {/* Custom Styles for Navbar Layout & Glowing Buttons */}
      <style>{`
        /* Central Brand Title Styling */
        .central-brand-title {
          font-weight: 800;
          font-size: 1.1rem;
          cursor: pointer;
          letter-spacing: 0.5px;
          text-align: center;
          transition: transform 0.3s ease;
          display: inline-block;
          line-height: 1.4;
        }
        .central-brand-title:hover {
          transform: scale(1.02);
        }
        .brand-blue-text {
          color: #00b4d8;
          text-shadow: 0 0 15px rgba(0, 180, 216, 0.6);
        }
        .brand-gradient-text {
          background: linear-gradient(135deg, #b800ff, #ff2a85, #ffea00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(255, 42, 133, 0.4);
        }

        /* Navbar Buttons with Glow Effect */
        .btn-glow-accent {
          background: linear-gradient(135deg, #b800ff, #ff2a85);
          color: white;
          border: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(184, 0, 255, 0.3);
          border-radius: 50px;
          padding: 8px 16px;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        .btn-glow-accent:hover {
          background: linear-gradient(135deg, #9e00df, #e62376);
          color: white;
          box-shadow: 0 6px 20px rgba(255, 42, 133, 0.6);
        }

        .btn-glow-accent.active {
          background: linear-gradient(135deg, #9e00df, #e62376);
          border: 2px solid #ffea00 !important;
          box-shadow: 0 0 20px rgba(255, 42, 133, 0.8), 0 0 12px rgba(184, 0, 255, 0.6);
          color: white;
        }
      `}</style>

      {/* Clean Professional Sticky Dark Theme Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top py-3 shadow-lg" style={{ background: '#0d071a', borderBottom: '1px solid rgba(184, 0, 255, 0.2)' }}>
        <div className="container-fluid px-4">
          
          {/* Brand/Logo for mobile view alignment */}
          <span className="navbar-brand d-lg-none central-brand-title text-start p-0 m-0" onClick={() => setCurrentPage('home')}>
            <span className="brand-blue-text">24Hour</span>
            <span className="brand-gradient-text ms-1">online Printing Services In Karachi</span>
          </span>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler border-0 bg-transparent text-white ms-auto shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-1" style={{ color: '#ff2a85' }}></i>
          </button>

          {/* Navigation Container */}
          <div className="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarNav">
            
            {/* Left 3 Links */}
            <div className="navbar-nav gap-2 align-items-lg-center mb-3 mb-lg-0 mt-3 mt-lg-0">
              <button 
                className={`btn btn-glow-accent ${currentPage === 'home' ? 'active' : ''}`} 
                onClick={() => setCurrentPage('home')}
              >
                Home
              </button>
              <button 
                className={`btn btn-glow-accent ${currentPage === 'about' ? 'active' : ''}`} 
                onClick={() => setCurrentPage('about')}
              >
                About
              </button>
              <button 
                className={`btn btn-glow-accent ${currentPage === 'offset' ? 'active' : ''}`} 
                onClick={() => setCurrentPage('offset')}
              >
                Offset Printing
              </button>
            </div>

            {/* Center Brand Title (Desktop View) */}
            <div className="text-center my-2 my-lg-0 d-none d-lg-block">
              <span className="central-brand-title" onClick={() => setCurrentPage('home')}>
                <span className="brand-blue-text">24Hour</span>
                <span className="brand-gradient-text ms-1">online Printing Services In Karachi</span>
                <br />
                <span className="brand-gradient-text ms-1">Just Send For PDF File For Printing </span>
              </span>
            </div>

            {/* Right 3 Links */}
            <div className="navbar-nav gap-2 align-items-lg-center justify-content-end mb-2 mb-lg-0">
              <button 
                className={`btn btn-glow-accent ${currentPage === 'panaflex' ? 'active' : ''}`} 
                onClick={() => setCurrentPage('panaflex')}
              >
                Panaflex Printing
              </button>
              <button 
                className={`btn btn-glow-accent ${currentPage === 'vinyl' ? 'active' : ''}`} 
                onClick={() => setCurrentPage('vinyl')}
              >
                Vinyl Print
              </button>
              <button 
                className={`btn btn-glow-accent ${currentPage === 'expostall' ? 'active' : ''}`} 
                onClick={() => setCurrentPage('expostall')}
              >
                Expo Stall
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Dynamic Main Body Content */}
      <main>{renderPage()}</main>

      {/* External Footer Component */}
      <Footer />

      {/* Floating Action WhatsApp Buttons */}
      <div className="position-fixed bottom-0 start-0 p-3" style={{ zIndex: 1050 }}>
        <a 
          href="https://wa.me/923212102553" 
          target="_blank" 
          rel="noreferrer" 
          className="rounded-circle p-3 d-flex align-items-center justify-content-center text-white text-decoration-none shadow-lg" 
          style={{ width: '58px', height: '58px', backgroundColor: '#25D366', boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }}
        >
          <i className="bi bi-whatsapp fs-2"></i>
        </a>
      </div>

      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
        <a 
          href="https://wa.me/923347779297" 
          target="_blank" 
          rel="noreferrer" 
          className="rounded-circle p-3 d-flex align-items-center justify-content-center text-white text-decoration-none shadow-lg" 
          style={{ width: '58px', height: '58px', backgroundColor: '#25D366', boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }}
        >
          <i className="bi bi-whatsapp fs-2"></i>
        </a>
      </div>
    </div>
  );
}

export default App;