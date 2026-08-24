import React from 'react';

// Main Banner Image import with exact path
import bannerImg from '../assets/images/expostall.jpg';

// Products/Cards ke liye dummy images imports (Aap baad mein apne mutabiq adjust kar lein gi)
import stallVinylBrandingImg from '../assets/images/stallVinylBranding.jpg';
import stallVinylStickerImg from '../assets/images/stallVinylSticker.jpg';
import stallBannerPrintingImg from '../assets/images/stallBannerPrinting.jpg';
import stallKioskStandImg from '../assets/images/stallKioskStand.jpg';
import stallXStandImg from '../assets/images/stallXStand.jpg';
import stallRollupStandImg from '../assets/images/stallRollupStand.jpg';
import stallBackdropImg from '../assets/images/stallBackdrop.jpg';

function ExpoStallBranding() {
  const whatsappNumber = "923347779297";

  // Expo Stall Branding ke mutabiq exact products/cards ka data
  const products = [
    {
      id: 1,
      title: "Complete Stall Vinyl Branding",
      price: "Custom Quote",
      img: stallVinylBrandingImg,
      desc: "Complete Stall Look That Attracts! Full structure wrapping for maximum exhibition impact."
    },
    {
      id: 2,
      title: "Stall Vinyl Sticker",
      price: "Rs 45.00 / sqft",
      img: stallVinylStickerImg,
      desc: "High Quality Stickers for Every Surface! Perfect finish for counters and walls."
    },
    {
      id: 3,
      title: "Big Impact Banner Printing",
      price: "Rs 40.00 / sqft",
      img: stallBannerPrintingImg,
      desc: "Big Impact Banners That Speak! High-resolution heavy-duty banners for expos."
    },
    {
      id: 4,
      title: "Stall Kiosk Stand",
      price: "Rs 15,000.00 onwards",
      img: stallKioskStandImg,
      desc: "Perfect Kiosks, Perfect Impression! Portable counters designed for brand activation."
    },
    {
      id: 5,
      title: "Stall X Stand",
      price: "Rs 2,500.00 onwards",
      img: stallXStandImg,
      desc: "Lightweight. Portable. Highly Effective! Easy to setup promotional displays."
    },
    {
      id: 6,
      title: "Stall Rollup Stand",
      price: "Rs 3,000.00 onwards",
      img: stallRollupStandImg,
      desc: "Rollup Your Brand, Rollup Your Success! Retractable stands for professional exhibition presentation."
    },
    {
      id: 7,
      title: "Stall Backdrop & Event Branding",
      price: "Rs 50.00 / sqft",
      img: stallBackdropImg,
      desc: "Stunning Backdrops for Lasting Impact! Perfect for corporate events, media walls & stages."
    }
  ];

  const handleBuyNow = (itemTitle, itemPrice) => {
    const message = `Hello Khurram Advertising! I want to order/inquire about *${itemTitle}* (${itemPrice}). Please share details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="expo-stall-page py-5" style={{ background: '#0b051d', minHeight: '100vh', color: '#ffffff' }}>
      
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
        .banner-container, .desc-section-box {
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

      <div className="container-fluid px-4">
        
        {/* 1. PEHLA SECTION: Main Banner Image (expostall.jpg) */}
        <div className="banner-container mb-5 p-2">
          <img 
            src={bannerImg} 
            alt="Expo Stall Branding Banner" 
            className="w-100 h-auto rounded-3 object-fit-cover" 
          />
        </div>

        {/* 2. DUSRA SECTION: Expo Stall Detailed Description & Features */}
        <div className="desc-section-box p-4 p-md-5 mb-5 text-center mx-auto" style={{ maxWidth: '1300px' }}>
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
            Complete Branding Solutions For Your Next Event!
          </span>
          <h2 className="yellow-highlight fw-bold mb-3">Expo Stall & Exhibition Branding Services</h2>
          <p className="text-light opacity-85 lead mx-auto mb-4" style={{ maxWidth: '950px' }}>
            Make your brand stand out at every event with our comprehensive expo stall solutions. From custom stall wrapping and promotional kiosks to roll-up stands, high-impact banners, and backdrop displays, we deliver expert design, printing, and installation support.
          </p>

          <div className="row g-4 mt-2 text-start">
            <div className="col-md-4">
              <div className="feature-bullet">
                <h5 className="yellow-highlight fw-bold mb-2"><i className="bi bi-shield-check me-2"></i>Premium Quality Printing</h5>
                <p className="text-light opacity-75 small m-0">High-resolution print outputs designed to make your exhibition booth look professional and eye-catching.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-bullet">
                <h5 className="yellow-highlight fw-bold mb-2"><i className="bi bi-clock-history me-2"></i>Fast Turnaround Time</h5>
                <p className="text-light opacity-75 small m-0">Reliable production schedules to ensure everything is ready before your grand event starts.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-bullet">
                <h5 className="yellow-highlight fw-bold mb-2"><i className="bi bi-tools me-2"></i>Expert Installation Support</h5>
                <p className="text-light opacity-75 small m-0">Professional on-site installation services so you can focus entirely on your clients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. TEESRA SECTION: Complete Expo Stall Products Cards Grid */}
        <div className="text-center mb-4">
          <h2 className="yellow-highlight fw-bold">Expo Stall Products & Solutions</h2>
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
                    className="btn pink-gradient-btn rounded-pill w-100 fw-semibold py-2"
                  >
                    <i className="bi bi-whatsapp me-2"></i> Buy Now
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

export default ExpoStallBranding;