import React from 'react';
import bannerImg from '../assets/images/vinylprint.jpg';
import canvasprintsImg from '../assets/images/canvasprints.jpg';
import vinylstickerImg from '../assets/images/vinylsticker.jpg';
import onewayvisionImg from '../assets/images/onewayvision.jpg';
import outdoorvinylImg from '../assets/images/outdoorvinyl.jpg';
import vinylstickerexpostallbrandingImg from '../assets/images/vinylstickerexpostallbranding.jpg';
import polestreetImg from '../assets/images/polestreet.jpg';
import vehiclebrandingImg from '../assets/images/vehiclebranding.jpg';
import backdropeventImg from '../assets/images/backdropevent.jpg';

function VinylPrinting() {
  const whatsappNumber = "923347779297";
  const products = [
    {
      id: 1,
      title: "Canvas Prints",
      price: "Rs 600.00 / sqft",
      img: canvasprintsImg,
      desc: "Stunning Canvas Prints for Home, Office & Decor with premium fine-art texture."
    },
    {
      id: 2,
      title: "Vinyl Sticker Printing",
      price: "Rs 300.00 / sqft",
      img: vinylstickerImg,
      desc: "High Quality Stickers for Branding, Promotion & Personal Use."
    },
    {
      id: 3,
      title: "One Way vinyl Vision Sticker",
      price: "Rs 300.00 / sqft",
      img: onewayvisionImg,
      desc: "Perfect for Windows, Vehicles & Glass Branding (See more from outside, privacy inside)."
    },
    {
      id: 4,
      title: "Outdoor Vinyl Sticker ",
      price: "Rs 180.00 / sqft",
      img: outdoorvinylImg,
      desc: "Weatherproof Banners for Maximum Visibility and long-lasting outdoor advertising."
    },
    {
      id: 5,
      title: "vinyl sticker expo stall branding",
      price: "Rs 40,000.00 ",
      img: vinylstickerexpostallbrandingImg,
      desc: "Portable, Lightweight & Perfect for Events & Exhibitions."
    },
    {
      id: 6,
      title: " vinyl Pole & Street Banners",
      price: "Rs 160.00 / sqft",
      img: polestreetImg,
      desc: "High Visibility Maximum Exposure street marketing and lamp-post branding."
    },
    {
      id: 7,
      title: " vinyl sticker Car Branding",
      price: "Rs 180.00 / sqft",
      img: vehiclebrandingImg,
      desc: "Transform Your Vehicle into a Moving Billboard with cast wrap vinyl."
    },
    {
      id: 9,
      title: " vinyl sticker wall Branding",
      price: "Rs 450.00 / sqft",
      img: backdropeventImg,
      desc: "Perfect Backdrops for Corporate Events, Press Conferences & Weddings."
    }
  ];

  const handleBuyNow = (itemTitle, itemPrice) => {
    const message = `Hello Khurram Advertising! I want to order/inquire about *${itemTitle}* (${itemPrice}). Please share details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="canvas-vinyl-page py-5" style={{ background: '#0b051d', minHeight: '100vh', color: '#ffffff' }}>
      
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
        <div className="banner-container mb-5 p-2">
          <img 
            src={bannerImg} 
            alt="Canvas Prints & Vinyl Sticker Banner" 
            className="w-100 h-auto rounded-3 object-fit-cover" 
          />
        </div>
        <div className="desc-section-box p-4 p-md-5 mb-5 text-center mx-auto" style={{ maxWidth: '1300px' }}>
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
            Premium Printing Solutions For Every Brand
          </span>
          <h2 className="yellow-highlight fw-bold mb-3">Canvas Prints & Vinyl Sticker Services</h2>
          <p className="text-light opacity-85 lead mx-auto mb-4" style={{ maxWidth: '950px' }}>
            Transform your creative vision into a stunning reality with our premium-grade canvas prints and high-durability vinyl stickers. From elegant home decor and office wall murals to vehicle wraps, window graphics, and large exhibition displays, we deliver razor-sharp printing performance.
          </p>

          <div className="row g-4 mt-2 text-start">
            <div className="col-md-4">
              <div className="feature-bullet">
                <h5 className="yellow-highlight fw-bold mb-2"><i className="bi bi-shield-check me-2"></i>Fine-Art Canvas Texture</h5>
                <p className="text-light opacity-75 small m-0">Rich, museum-quality canvas prints designed to elevate home and office interiors.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-bullet">
                <h5 className="yellow-highlight fw-bold mb-2"><i className="bi bi-water me-2"></i>Waterproof Vinyl Sticking</h5>
                <p className="text-light opacity-75 small m-0">Heavy-duty adhesive vinyl layers built to withstand outdoor elements and rigorous washing.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-bullet">
                <h5 className="yellow-highlight fw-bold mb-2"><i className="bi bi-stars me-2"></i>High-Impact Display</h5>
                <p className="text-light opacity-75 small m-0">Vibrant color outputs optimized for retail shops, vehicles, and grand events.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="yellow-highlight fw-bold">Canvas & Vinyl Products Collection</h2>
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

export default VinylPrinting;