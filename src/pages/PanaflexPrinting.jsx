import React from 'react';

// Images import from assets with exact filenames
import bannerImg from '../assets/images/penaflexprinting.jpg';
import outdoorPrintImg from '../assets/images/outdoorPrint.jpg';
import backlitPanaflexImg from '../assets/images/BacklitPanaflexBoardPrinting.jpg';
import starFlexImg from '../assets/images/StarFlexBanner.jpg';
import xStandeeImg from '../assets/images/X-StandeePrinting.jpg';
import rollupImg from '../assets/images/rollup.jpg';
import restaurantFlexImg from '../assets/images/restaurantflexmenuboards.jpg';
import reflectivePanaflexImg from '../assets/images/ReflectivePanaflexPrinting.jpg';
import signage3dImg from '../assets/images/3DAcrylicFlexSignboard.jpg';
import kioskImg from '../assets/images/KioskStand.jpg';
import backdropImg from '../assets/images/Backdrop.jpg';

function PanaflexPrinting() {
  const whatsappNumber = "923347779297";

  // Panaflex printing category items
  const products = [
    {
      id: 1,
      title: "Frontlit Panaflex Printing",
      price: "Rs 120.00 / sqft",
      img: outdoorPrintImg,
      desc: "Standard heavy-duty outdoor flex printing for billboards, shop boards & event banners."
    },
    {
      id: 2,
      title: "Backlit Panaflex Board Printing",
      price: "Rs 900.00 / sqft",
      img: backlitPanaflexImg,
      desc: "High translucent flex designed for illuminated lightboxes & light boards."
    },
    {
      id: 3,
      title: "Star Flex (Heavy Duty) Banner",
      price: "Rs 180.00 / sqft",
      img: starFlexImg,
      desc: "Premium smooth finish flex with extra durability and high color contrast."
    },
    {
      id: 4,
      title: "X-Standee Printing & Frame",
      price: "Rs 3,500.00",
      img: xStandeeImg,
      desc: "Lightweight portable X-frame with customized HD flex banner (2x5 ft / 2x6 ft)."
    },
    {
      id: 5,
      title: "Rollup Standee Banner",
      price: "Rs 7,500.00",
      img: rollupImg,
      desc: "Retractable aluminum rollup banner stand with high quality smooth print."
    },
    {
      id: 6,
      title: "Restaurant Flex Menu Boards",
      price: "Rs 450.00 / sqft",
      img: restaurantFlexImg,
      desc: "Vibrant high-resolution menu boards & promotional banners for food outlets."
    },
    {
      id: 7,
      title: "Reflective Panaflex Printing",
      price: "Rs 300.00 / sqft",
      img: reflectivePanaflexImg,
      desc: "High visibility reflective flex sheet that glows at night when light shines on it."
    },
    {
      id: 8,
      title: "3D Acrylic & Flex Signboard",
      price: "Rs 2,800.00 / sqft",
      img: signage3dImg,
      desc: "3D Illuminated letters with Panaflex backdrop for modern shop fronts."
    },
    {
      id: 9,
      title: "Kiosk Stand Printing & Setup",
      price: "Rs 28,000.00",
      img: kioskImg,
      desc: "Promotional kiosk tables and counters with customized branding wrap."
    },
    {
      id: 10,
      title: "Event Backdrop Flex Banner",
      price: "Rs 750.00 / sqft",
      img: backdropImg,
      desc: "Large format iron frame backdrop flex printing for press conferences, stages & weddings."
    }
  ];

  const handleBuyNow = (itemTitle, itemPrice) => {
    const message = `Hello Khurram Advertising! I want to order/inquire about *${itemTitle}* (${itemPrice}). Please share details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="panaflex-page pb-5" style={{ background: '#0b051d', minHeight: '100vh', color: '#ffffff' }}>
      
      {/* Custom Styles */}
      <style>{`
        .custom-dark-card {
          background: #130a2a;
          border: 1px solid rgba(162, 0, 255, 0.2);
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        .custom-dark-card:hover {
          transform: translateY(-5px);
          border-color: #ec008c;
          box-shadow: 0 10px 25px rgba(236, 0, 140, 0.25);
        }
        .pink-gradient-btn {
          background: linear-gradient(135deg, #a200ff 0%, #ec008c 100%);
          border: none;
          color: #ffffff;
          transition: all 0.3s ease;
        }
        .pink-gradient-btn:hover {
          opacity: 0.9;
          box-shadow: 0 0 15px rgba(236, 0, 140, 0.6);
          color: #ffffff;
        }
        .desc-section-box {
          border: 1px solid rgba(162, 0, 255, 0.3);
          border-radius: 20px;
          background: #130a2a;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .yellow-highlight {
          color: #FFD700 !important;
        }
        .feature-bullet {
          background: rgba(162, 0, 255, 0.15);
          border: 1px solid rgba(162, 0, 255, 0.3);
          border-radius: 12px;
          padding: 15px;
          height: 100%;
        }
      `}</style>

      {/* 1. PEHLA SECTION: Full Screen Edge-to-Edge Banner Section */}
      <section className="mb-5 position-relative">
        <div 
          className="w-100 position-relative overflow-hidden shadow-lg" 
          style={{ 
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            minHeight: '400px',
            height: '38vw',
            maxHeight: '600px'
          }}
        ></div>
      </section>

      <div className="container-fluid px-4">
        
        {/* 2. DUSRA SECTION: Panaflex Printing Detailed Text Description & Features */}
        <div className="desc-section-box p-4 p-md-5 mb-5 text-center mx-auto" style={{ maxWidth: '1300px' }}>
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
            High-Impact Outdoor & Indoor Display Printing
          </span>
          <h2 className="yellow-highlight fw-bold mb-3">Panaflex Printing Services in Karachi</h2>
          <p className="text-light opacity-85 lead mx-auto mb-4" style={{ maxWidth: '950px' }}>
            We provide top-quality Panaflex and outdoor printing services using high-resolution solvent machines. Whether you need frontlit shop banners, backlit glow signboards, X-standees, Kiosk Stands, or Event Backdrops, we offer durable, weather-resistant prints designed to get your brand noticed.
          </p>

          <div className="row g-4 mt-2 text-start">
            <div className="col-md-4">
              <div className="feature-bullet">
                <h5 className="yellow-highlight fw-bold mb-2"><i className="bi bi-shield-check me-2"></i>All-Weather Durable</h5>
                <p className="text-light opacity-75 small m-0">UV-resistant inks and waterproof flex material that withstand rain, wind, and harsh sun.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-bullet">
                <h5 className="yellow-highlight fw-bold mb-2"><i className="bi bi-palette-fill me-2"></i>Vivid Solvent Ink</h5>
                <p className="text-light opacity-75 small m-0">Rich colors and sharp graphics for maximum visibility from long distances.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-bullet">
                <h5 className="yellow-highlight fw-bold mb-2"><i className="bi bi-tools me-2"></i>Complete Fitting & Frame</h5>
                <p className="text-light opacity-75 small m-0">Iron framing, MS pipe structures, and installation services available on request.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. TEESRA SECTION: Complete Panaflex Products Cards */}
        <div className="text-center mb-4">
          <h2 className="yellow-highlight fw-bold">Panaflex & Display Printing Products</h2>
          <p className="text-light opacity-75">Select any product below to order directly via WhatsApp.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {products.map((item) => (
            <div className="col-sm-6 col-md-6 col-lg-3" key={item.id}>
              <div className="custom-dark-card h-100 text-center p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="position-relative overflow-hidden rounded-3 mb-3 shadow-sm" style={{ height: '180px' }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <h4 className="fw-bold text-white fs-5 mb-2">{item.title}</h4>
                  <p className="text-light opacity-75 small mb-3">{item.desc}</p>
                </div>
                <div>
                  <div className="yellow-highlight fs-5 fw-bold mb-3">{item.price}</div>
                  <button
                    onClick={() => handleBuyNow(item.title, item.price)}
                    className="btn pink-gradient-btn rounded-pill w-100 fw-semibold py-2 d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-whatsapp me-2 fs-5"></i> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PanaflexPrinting;