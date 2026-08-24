import React, { useState, useEffect } from 'react';

// 1. Hero Banner 
import imgHero1 from '../assets/images/homebanner.jpg';
import imgHero2 from '../assets/images/aboutbanner.jpg';
import imgHero3 from '../assets/images/offsetprint.jpg';
import imgHero4 from '../assets/images/vinylprint.jpg';
import imgHero5 from '../assets/images/penaflexprinting.jpg';
import imgHero6 from '../assets/images/expostall.jpg';

// 2. Features Slider
import imgFeature1 from '../assets/images/newImages/IMG-20260822-WA0176.jpg';
import imgFeature2 from '../assets/images/newImages/IMG-20260822-WA0177.jpg';
import imgFeature3 from '../assets/images/newImages/IMG-20260822-WA0178.jpg';
import imgFeature4 from '../assets/images/newImages/IMG-20260822-WA0179.jpg';
import imgFeature5 from '../assets/images/newImages/IMG-20260822-WA0180.jpg';
import imgFeature6 from '../assets/images/newImages/IMG-20260822-WA0181.jpg';
import imgFeature7 from '../assets/images/newImages/IMG-20260822-WA0182.jpg';
import imgFeature8 from '../assets/images/newImages/IMG-20260822-WA0183.jpg';
import imgFeature9 from '../assets/images/newImages/IMG-20260822-WA0184.jpg';
import imgFeature10 from '../assets/images/newImages/IMG-20260822-WA0185.jpg';
import imgFeature11 from '../assets/images/newImages/IMG-20260822-WA0028.jpg';
import imgFeature12 from '../assets/images/newImages/IMG-20260822-WA0029.jpg';
import imgFeature13 from '../assets/images/newImages/IMG-20260822-WA0030.jpg';
import imgFeature14 from '../assets/images/newImages/IMG-20260822-WA0031.jpg';
import imgFeature15 from '../assets/images/newImages/IMG-20260822-WA0032.jpg';


// 3. Products Cards 
import imgBusinessCard from '../assets/images/BusinessCard.jpg';
import imgCalender from '../assets/images/calender.jpg';
import imgCardBox from '../assets/images/BoxPacking.jpg'; 
import imgBoxMaker from '../assets/images/box.jpg'; 
import imgXstandPrint from '../assets/images/bannerprint.jpg';
import imgRollup from '../assets/images/rollup.jpg';
import img3dSignage from '../assets/images/3dsignage.jpg';
import imgVehicleWrapping from '../assets/images/vehiclewrapping.jpg';

// Logo import
import logoImg from "../assets/logos/logo.jpg";

function Home({ setCurrentPage }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { title: "Tickets and Coupons Printing", desc: "High-quality event tickets, custom raffle coupons, and security-printed entry passes for all occasions.", img: imgFeature1 },
    { title: "Opaque Window Decals", desc: "Transform your storefront glass windows with eye-catching promotional stickers and 50% off sales displays.", img: imgFeature2 },
    { title: "Table Calendar Printing", desc: "Customized corporate and desk calendars featuring high-resolution monthly designs to keep your brand visible year-round.", img: imgFeature3 },
    { title: "Canvas Printing", desc: "Stunning abstract and custom artistic canvas prints with rich gold and vibrant blue texture effects for interior decor.", img: imgFeature4 },
    { title: "Promotion Tables", desc: "Portable promotion counters and sampling desks designed for brand activation, exhibitions, and product launching.", img: imgFeature5 },
    { title: "Packaging Box Printing", desc: "Customized product packaging boxes, brownie boxes, and premium rigid gift boxes tailored for retail businesses.", img: imgFeature6 },
    { title: "Paper Bags Online Order", desc: "Eco-friendly luxury paper carry bags with custom handles and logos for boutiques, brands, and corporate gifting.", img: imgFeature7 },
    { title: "Front & Back Light Boards", desc: "Professional signage solutions including illuminated flex boards and glowing store fascias to brighten your storefront.", img: imgFeature8 },
    { title: "Brochures & Menus Printing", desc: "All kinds of trifold brochures, hotel menus, and institutional booklets designed to showcase your corporate offerings.", img: imgFeature9 },
    { title: "Rollup Banner Karachi", desc: "Portable rollup banners and standees ideal for exhibitions, cinema promotions, corporate events, and seminars.", img: imgFeature10 },
    { title: "Vinyl Sticker Printing & Pasting", desc: "Premium quality vinyl stickers with clean finish, durable cutting, and professional pasting for stores and vehicles.", img: imgFeature11 },
    { title: "Standee & Roll-Up Display", desc: "Professional display solutions including portable standees and roll-up stands for events and exhibitions.", img: imgFeature12 },
    { title: "X-Stand & Roll-Up Stand", desc: "Dynamic display options designed for maximum brand visibility during corporate promotions and product launches.", img: imgFeature13 },
    { title: "Expo Stall Branding", desc: "Complete trade show display design, backdrop setup, and custom booth fabrication solutions for events.", img: imgFeature14 },
    { title: "Brochure, Flyer & Catalog Printing", desc: "High-impact marketing materials including folded brochures, product catalogs, and promotional flyers.", img: imgFeature15 },

  ];

  const heroBannerImages = [imgHero1, imgHero2, imgHero3, imgHero4, imgHero5, imgHero6];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroBannerImages.length);
    }, 3000);
    return () => clearInterval(heroInterval);
  }, [heroBannerImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [features.length]);

  const reviews = [
    { name: "Zaid Ahmed", rating: 5, comment: "Panaflex banner quality was unbelievable! HD color output & super fast delivery.", role: "Retailer, Karachi" },
    { name: "Maryam Khan", rating: 5, comment: "Ordered 1000 Business cards. Lamination and corner cutting were super clean.", role: "Graphic Designer" },
    { name: "Tariq Mahmood", rating: 5, comment: "Rollup standees were very sturdy. Used them for our corporate expo in Lahore.", role: "Event Organizer" },
    { name: "Bilal Hassan", rating: 5, comment: "Backlight shop board made our shop front look premium. Highly recommended!", role: "Restaurant Owner" },
  ];
  
  const offsetProducts = [
    { title: "Standard Business Cards", desc: "Matt / Gloss Lamination", price: "Rs 3,500.00", img: imgBusinessCard },
    { title: "Corporate Calendars", desc: "Custom Wall & Desk Calendars", price: "Rs 4,500.00", img: imgCalender },
    { title: "Card Box Packaging", desc: "Custom Brand Boxes", price: "Rs 1,500.00", img: imgCardBox },
    { title: "Custom Box Maker", desc: "Die-cut Product Packaging", price: "Rs 400.00", img: imgBoxMaker },
  ];

  const largeFormatProducts = [
    { title: "X-Standee Printing", desc: "Indoor Portable Banner", price: "Rs 3,500.00", img: imgXstandPrint },
    { title: "Rollup Standee", desc: "Aluminum Heavy Duty", price: "Rs 5,500.00", img: imgRollup },
    { title: "3D Signage Board", desc: "Shop Front Glow Banner", price: "Rs 1,200.00", img: img3dSignage },
    { title: "Vehicle Wrapping", desc: "Full Car & Van Branding", price: "Rs 15,000.00", img: imgVehicleWrapping },
  ];

  if (loading) {
    return (
      <div className="loader-screen d-flex justify-content-center align-items-center vh-100 position-fixed w-100 top-0 start-0"
           style={{ background: '#090514', zIndex: 99999 }}>
        <style>{`
          @keyframes spinSmooth { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes logoPulse { 0%, 100% { transform: scale(0.95); opacity: 0.9; } 50% { transform: scale(1.05); opacity: 1; } }
          .loader-box { position: relative; width: 260px; height: 260px; display: flex; align-items: center; justify-content: center; }
          .spinner-outer { position: absolute; width: 100%; height: 100%; border: 3px solid rgba(255, 255, 255, 0.08); border-top: 3px solid #ff2a85; border-right: 3px solid #b800ff; border-radius: 50%; animation: spinSmooth 1.2s linear infinite; }
          .loader-logo-container { width: 200px; height: 200px; background: #ffffff; border-radius: 50%; box-shadow: 0 0 30px rgba(184, 0, 255, 0.45); animation: logoPulse 1.8s infinite ease-in-out; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 10px; }
        `}</style>
        <div className="loader-box">
          <div className="spinner-outer"></div>
          <div className="loader-logo-container">
            <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page pb-5" style={{ background: '#090514', color: '#f8fafc' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@1,700&display=swap');

        .hashmi-custom-banner {
          background: linear-gradient(135deg, #180932 0%, #3b0764 50%, #831843 100%);
          color: #ffcc00;
          font-family: 'Lobster Two', cursive, sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          font-style: italic;
          padding: 18px 20px;
          text-align: center;
          margin-bottom: 2.5rem;
          box-shadow: 0 8px 30px rgba(59, 7, 100, 0.5);
          border-bottom: 3px solid #ff2a85;
          border-top: 1px solid rgba(255, 204, 0, 0.3);
          width: 100%;
          text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }

        @keyframes purplePinkPulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 42, 133, 0.7), 0 0 15px rgba(184, 0, 255, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(255, 42, 133, 0), 0 0 30px rgba(184, 0, 255, 0.9); }
          100% { box-shadow: 0 0 0 0 rgba(255, 42, 133, 0), 0 0 15px rgba(184, 0, 255, 0.5); }
        }

        .btn-glowing-theme {
          background: linear-gradient(135deg, #ff2a85, #b800ff);
          color: #ffffff !important;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.3);
          animation: purplePinkPulse 2s infinite;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .btn-glowing-theme:hover {
          transform: translateY(-3px) scale(1.05);
          background: linear-gradient(135deg, #e62376, #9e00df);
          box-shadow: 0 0 40px rgba(255, 42, 133, 1) !important;
        }

        .glow-card {
          background: linear-gradient(145deg, #130a24, #1a0f35);
          border-radius: 16px;
          border: 1px solid rgba(184, 0, 255, 0.25);
          transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease, border-color 0.35s ease;
          position: relative;
          overflow: hidden;
          color: #f1f5f9;
        }

        .glow-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 35px rgba(184, 0, 255, 0.4) !important;
          border-color: #ff2a85;
        }

        .card-img-container {
          width: 100%;
          height: 180px;
          background-color: #0c0718;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .card-img-container img {
          width: 100%;
          height: 100%;
          object-fit: fill;
          transition: transform 0.4s ease;
        }

        .glow-card:hover .card-img-container img {
          transform: scale(1.05);
        }

        .btn-glow-accent {
          background: linear-gradient(135deg, #b800ff, #ff2a85);
          color: white;
          border: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(184, 0, 255, 0.3);
        }

        .btn-glow-accent:hover {
          background: linear-gradient(135deg, #9e00df, #e62376);
          color: white;
          box-shadow: 0 6px 20px rgba(255, 42, 133, 0.6);
        }

        @keyframes smoothFadeSlide {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .feature-animated-box {
          animation: smoothFadeSlide 0.8s ease-in-out forwards;
        }

        .hero-slider-banner {
          width: 100%;
          max-width: 1250px;
          height: 420px;
          margin: 0 auto;
          border-radius: 16px;
          background-size: 100% 100% !important;
          background-position: center center !important;
          background-repeat: no-repeat !important;
          border: 2px solid rgba(184, 0, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 768px) {
          .hero-slider-banner { height: 220px; border-radius: 8px; }
        }
      `}</style>

      {/* Hero Banner Slider */}
      <div className="container px-3 my-4 d-flex justify-content-center align-items-center">
        <div 
          className="hero-slider-banner"
          style={{
            backgroundImage: `url(${heroBannerImages[currentHeroIndex]})`,
            transition: 'background-image 1s ease-in-out',
          }}
        ></div>
      </div>

      {/* Pakistan Section */}
      <section className="container text-center mb-5 py-3">
        <div className="d-flex justify-content-center mb-4">
          <div style={{ width: '180px', height: '180px', borderRadius: '50%', background: '#ffffff', padding: '8px', boxShadow: '0 0 35px rgba(184, 0, 255, 0.85)', border: '3px solid #ff2a85', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>

        <h1 className="display-5 fw-bold mb-3 px-2" style={{ color: '#ffffff', textShadow: '0 3px 15px rgba(184, 0, 255, 0.8)' }}>
          Pakistan's Online Panaflex Printing & Offset Printing
        </h1>
        <p className="fs-5 fw-bold mb-4" style={{ color: '#ffcc00', textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)' }}>
          Khurram Advertising Services
        </p>

        <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
          <a href="https://wa.me/923212102553" target="_blank" rel="noreferrer" className="btn btn-glowing-theme rounded-pill px-4 py-3 text-decoration-none fs-6 shadow">
            <i className="bi bi-whatsapp me-2 fs-5"></i> +92 3212102553
          </a>
          <a href="https://wa.me/923347779297" target="_blank" rel="noreferrer" className="btn btn-glowing-theme rounded-pill px-4 py-3 text-decoration-none fs-6 shadow">
            <i className="bi bi-whatsapp me-2 fs-5"></i> +92 3347779297
          </a>
        </div>
      </section>

      {/* Dynamic Feature Slider */}
      <section className="container mb-5 py-4">
        <div className="row align-items-center g-5 feature-animated-box" key={currentIndex}>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ fontFamily: 'Lobster Two, cursive', fontSize: '2.5rem', color: '#ffcc00', textShadow: '0 2px 10px rgba(255, 204, 0, 0.3)' }}>
              {features[currentIndex].title}
            </h2>
            <p className="fs-6 mb-4" style={{ color: '#cbd5e1' }}>
              {features[currentIndex].desc}
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2 d-flex align-items-center fw-semibold" style={{ color: '#f8fafc' }}>
                <i className="bi bi-check-circle-fill me-2 fs-5" style={{ color: '#ff2a85' }}></i> High-Speed Industrial Printing Setup
              </li>
              <li className="mb-2 d-flex align-items-center fw-semibold" style={{ color: '#f8fafc' }}>
                <i className="bi bi-check-circle-fill me-2 fs-5" style={{ color: '#ff2a85' }}></i> Premium Quality Inks & Durable Materials
              </li>
              <li className="mb-2 d-flex align-items-center fw-semibold" style={{ color: '#f8fafc' }}>
                <i className="bi bi-check-circle-fill me-2 fs-5" style={{ color: '#ff2a85' }}></i> Trusted by Thousands of Businesses in Karachi
              </li>
            </ul>
            <button onClick={() => setCurrentPage('panaflex')} className="btn btn-glow-accent rounded-pill px-4 py-2">
              Explore All Services
            </button>
          </div>

          <div className="col-lg-6">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg bg-dark d-flex align-items-center justify-content-center" style={{ height: '350px', border: '2px solid rgba(184, 0, 255, 0.4)' }}>
              <img 
                src={features[currentIndex].img} 
                alt={features[currentIndex].title} 
                className="w-100 h-100"
                style={{ objectFit: 'fill' }}
              />
            </div>
            <div className="d-flex justify-content-center gap-1 mt-3 flex-wrap" style={{ maxHeight: '60px', overflowY: 'auto' }}>
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: currentIndex === idx ? '16px' : '5px',
                    height: '5px',
                    borderRadius: '3px',
                    border: 'none',
                    background: currentIndex === idx ? '#ff2a85' : '#475569',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Navigation Buttons */}
        <div className="row g-3 mt-4 justify-content-center">
          <div className="col-6 col-md-3">
            <button onClick={() => setCurrentPage('offset')} className="btn btn-glowing-theme rounded-pill w-100 py-3 fw-bold shadow">Offset Print</button>
          </div>
          <div className="col-6 col-md-3">
            <button onClick={() => setCurrentPage('panaflex')} className="btn btn-glowing-theme rounded-pill w-100 py-3 fw-bold shadow">Panaflex Print</button>
          </div>
          <div className="col-6 col-md-3">
            <button onClick={() => setCurrentPage('vinyl')} className="btn btn-glowing-theme rounded-pill w-100 py-3 fw-bold shadow">Vinyl Print</button>
          </div>
          <div className="col-6 col-md-3">
            <button onClick={() => setCurrentPage('expostall')} className="btn btn-glowing-theme rounded-pill w-100 py-3 fw-bold shadow">Expo Stall</button>
          </div>
        </div>
      </section>

      {/* Large Format Products */}
      <section className="mb-5">
        <div className="hashmi-custom-banner">Large Format Products</div>
        <div className="container">
          <div className="row g-4">
            {largeFormatProducts.map((p, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="glow-card p-3 h-100 d-flex flex-column text-center shadow-sm">
                  <div className="card-img-container mb-3">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <h6 className="fw-bold mb-1" style={{ color: '#ffffff' }}>{p.title}</h6>
                  <span className="extra-small mb-2" style={{ color: '#94a3b8' }}>{p.desc}</span>
                  <div className="fw-bold mb-3 mt-auto" style={{ color: '#ffcc00' }}>{p.price}</div>
                  <a href={`https://wa.me/923212102553?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer" className="btn btn-glow-accent btn-sm rounded-pill w-100 text-decoration-none">
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offset Products */}
      <section className="mb-5">
        <div className="hashmi-custom-banner">Offset & Corporate Printing</div>
        <div className="container">
          <div className="row g-4">
            {offsetProducts.map((p, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="glow-card p-3 h-100 d-flex flex-column text-center shadow-sm">
                  <div className="card-img-container mb-3">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <h6 className="fw-bold mb-1" style={{ color: '#ffffff' }}>{p.title}</h6>
                  <span className="extra-small mb-2" style={{ color: '#94a3b8' }}>{p.desc}</span>
                  <div className="fw-bold mb-3 mt-auto" style={{ color: '#ffcc00' }}>{p.price}</div>
                  <a href={`https://wa.me/923212102553?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer" className="btn btn-glow-accent btn-sm rounded-pill w-100 text-decoration-none">
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="mb-5">
        <div className="hashmi-custom-banner">Client Reviews & Testimonials</div>
        <div className="container">
          <div className="row g-4">
            {reviews.map((r, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="glow-card p-4 h-100 d-flex flex-column shadow-sm">
                  <div className="d-flex align-items-center mb-3 text-warning">
                    {[...Array(r.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill me-1"></i>
                    ))}
                  </div>
                  <p className="fs-6 fst-italic mb-3" style={{ color: '#e2e8f0' }}>"{r.comment}"</p>
                  <div className="mt-auto">
                    <h6 className="fw-bold mb-0" style={{ color: '#ffffff' }}>{r.name}</h6>
                    <span className="small" style={{ color: '#94a3b8' }}>{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;