import React, { useState, useRef } from 'react';

// Images imports from assets/images
import aboutBannerImg from "../assets/images/aboutbanner.jpg"; 
import missionImg from "../assets/images/ourmission.jpg";
import satisfactionImg from "../assets/images/customersatisfication.jpg"; 
import about3Img from "../assets/images/about3.jpg";

//  Services Images Imports
import img56 from '../assets/images/newImages/IMG-20260822-WA0056.jpg';
import img55 from '../assets/images/newImages/IMG-20260822-WA0055.jpg';
import img85 from '../assets/images/newImages/IMG-20260822-WA0085.jpg';
import img95 from '../assets/images/newImages/IMG-20260822-WA0095.jpg';
import img98 from '../assets/images/newImages/IMG-20260822-WA0098.jpg';
import img100 from '../assets/images/newImages/IMG-20260822-WA0099.jpg'; 
import img101 from '../assets/images/newImages/IMG-20260822-WA0101.jpg';
import img102 from '../assets/images/newImages/IMG-20260822-WA0102.jpg';
import img103 from '../assets/images/newImages/IMG-20260822-WA0103.jpg';
import img104 from '../assets/images/newImages/IMG-20260822-WA0104.jpg';
import img105 from '../assets/images/newImages/IMG-20260822-WA0106.jpg';
import img106 from '../assets/images/newImages/IMG-20260822-WA0107.jpg';
import img107 from '../assets/images/newImages/IMG-20260822-WA0108.jpg';
import img108 from '../assets/images/newImages/IMG-20260822-WA0109.jpg';
import img109 from '../assets/images/newImages/IMG-20260822-WA0110.jpg';
import img110 from '../assets/images/newImages/IMG-20260822-WA0111.jpg';
import img111 from '../assets/images/newImages/IMG-20260822-WA0112.jpg';
import img112 from '../assets/images/newImages/IMG-20260822-WA0113.jpg';
import img113 from '../assets/images/newImages/IMG-20260822-WA0115.jpg';
import img115 from '../assets/images/newImages/IMG-20260822-WA0116.jpg';
import img116 from '../assets/images/newImages/IMG-20260822-WA0117.jpg';
import img117 from '../assets/images/newImages/IMG-20260822-WA0118.jpg';
import img118 from '../assets/images/newImages/IMG-20260822-WA0119.jpg';
import img119 from '../assets/images/newImages/IMG-20260822-WA0120.jpg';
import img120 from '../assets/images/newImages/IMG-20260822-WA0121.jpg';
import img121 from '../assets/images/newImages/IMG-20260822-WA0122.jpg';
import img122 from '../assets/images/newImages/IMG-20260822-WA0123.jpg';
import img123 from '../assets/images/newImages/IMG-20260822-WA0124.jpg';
import img124 from '../assets/images/newImages/IMG-20260822-WA0125.jpg';
import img125 from '../assets/images/newImages/IMG-20260822-WA0150.jpg';
import img150 from '../assets/images/newImages/IMG-20260822-WA0151.jpg';
import img151 from '../assets/images/newImages/IMG-20260822-WA0152.jpg';
import img152 from '../assets/images/newImages/IMG-20260822-WA0153.jpg';
import img153 from '../assets/images/newImages/IMG-20260822-WA0154.jpg';
import img154 from '../assets/images/newImages/IMG-20260822-WA0155.jpg';
import img155 from '../assets/images/newImages/IMG-20260822-WA0156.jpg';
import img156 from '../assets/images/newImages/IMG-20260822-WA0157.jpg';


// Portfolio & Works Images Imports
import PanaflexOutdoorPrinting from '../assets/images/PanaflexOutdoorPrinting.jpg';
import OffsetPackagePrinting from '../assets/images/OffsetPackagePrinting.jpg';
import ExhibitionStallBranding from '../assets/images/ExhibitionStallBranding.jpg';
import organicDatePackaging from '../assets/images/OrganicDatePackaging.jpg';
import customDiecutLabels from '../assets/images/CustomDiecutLabels.jpg';
import modernPetSignage from '../assets/images/ModernPetSignage.jpg';
import businessQRCards from '../assets/images/BusinessQRCards.jpg';
import charcoalBoxPackaging from '../assets/images/CharcoalBoxPackaging.jpg';
import restaurantFlexBoards from '../assets/images/RestaurantFlexBoards.jpg';

// Clients Images Imports
import PSO from '../assets/images/PSO.jpg';
import SLM from '../assets/images/SLM.jpg';
import SanamMarvee from '../assets/images/SanamMarvee.jpg';
import Bank from '../assets/images/Bank.jpg';
import SecofDefence from '../assets/images/SecofDefence.jpg';
import UBLPakistan from '../assets/images/UBLPakistan.jpg';
import GhazaliModel from '../assets/images/GhazaliModel.jpg';
import IDEAS2024 from '../assets/images/IDEAS2024.jpg';

// Videos Imports
import bannerLivePrint from '../assets/videos/banner live print.mp4';
import rollupPrinting from '../assets/videos/rollup printing.mp4';
import vid12 from '../assets/videos/VID-20260817-WA0012.mp4';
import vid42 from '../assets/videos/VID-20260817-WA0042.mp4';
import vid43 from '../assets/videos/VID-20260817-WA0043.mp4';
import vid44 from '../assets/videos/VID-20260817-WA0044.mp4';
import vid46 from '../assets/videos/VID-20260817-WA0046.mp4';
import vid47 from '../assets/videos/VID-20260817-WA0047.mp4';
import vid49 from '../assets/videos/VID-20260817-WA0049.mp4';
import vid50 from '../assets/videos/VID-20260817-WA0050.mp4';
import vid52 from '../assets/videos/VID-20260817-WA0052.mp4';
import vid53 from '../assets/videos/VID-20260817-WA0053.mp4';
import vid54 from '../assets/videos/VID-20260817-WA0054.mp4';
import vid55 from '../assets/videos/VID-20260817-WA0055.mp4';


const VideoCard = ({ videoSrc, poster, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div 
      className="video-hover-card rounded-4 overflow-hidden position-relative shadow-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer', height: '220px', background: '#130a24', border: '1px solid rgba(184, 0, 255, 0.3)' }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        loop
        playsInline
        className="w-100 h-100 object-fit-cover"
      />
      <div 
        className={`position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center transition-all ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        style={{ background: 'rgba(9, 5, 20, 0.5)', transition: 'opacity 0.3s ease' }}
      >
        <div className="rounded-circle shadow-lg d-flex align-items-center justify-content-center text-white" style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #ff2a85, #b800ff)' }}>
          <i className="bi bi-play-fill fs-2 ms-1"></i>
        </div>
      </div>
      {title && (
        <div className="position-absolute bottom-0 start-0 w-100 p-2 text-white text-center small" style={{ background: 'rgba(19, 10, 36, 0.9)' }}>
          {title}
        </div>
      )}
    </div>
  );
};

function About() {
  const clientLogos = [
    { name: "PSO Official", logo: PSO },
    { name: "SLM Tires", logo: SLM },
    { name: "Sanam Marvee", logo: SanamMarvee },
    { name: "Bank Partner", logo: Bank },
    { name: "Sec. of Defence", logo: SecofDefence },
    { name: "UBL Pakistan", logo: UBLPakistan },
    { name: "Ghazali Model", logo: GhazaliModel },
    { name: "IDEAS 2024", logo: IDEAS2024 },
  ];

  const portfolioWorks = [
    { title: "Panaflex Outdoor Printing", img: PanaflexOutdoorPrinting },
    { title: "Offset Package Printing", img: OffsetPackagePrinting },
    { title: "Exhibition Stall Branding", img: ExhibitionStallBranding },
    { title: "Organic Date Packaging", img: organicDatePackaging },
    { title: "Custom Die-cut Labels", img: customDiecutLabels },
    { title: "Modern Pet Signage", img: modernPetSignage },
    { title: "Business & QR Cards", img: businessQRCards },
    { title: "Charcoal Box Packaging", img: charcoalBoxPackaging },
    { title: "Restaurant Flex Boards", img: restaurantFlexBoards }
  ];

  const ourServicesList = [
    { title: "Complete Printing Solution & Banners", img: img56 },
    { title: "Urgent Printing & Canvas Highlights", img: img55 },
    { title: "Store Setup & Canvas Display", img: img85 },
    { title: "Panaflex & 1 Hour Delivery Experts", img: img95 },
    { title: "Premium Services & Rollup Display", img: img98 },
    { title: "24/7 Printing & Visiting Cards Showcase", img: img100 },
    { title: "Expo Stall & Stand Branding", img: img101 },
    { title: "Panaflex & 3D Wall Graphics", img: img102 },
    { title: "Panaflex & 1 Hour Delivery Experts", img: img103 },              
    { title: "Complete Printing Solution & Banners", img: img105 },       
    { title: "Event Display Solutions & Standee Branding", img: img106 },   
    { title: "Expo Stall & Exhibition Setup", img: img107 },    
    { title: "X-Stands & Rollup Banners Pricing", img: img108 },    
    { title: "Printing Experts & 1 Hour Urgent Service", img: img109 },
    { title: "Premium Printing & Fast Outdoor Billboards", img: img110 },             
    { title: "Complete Printing Solutions & Flex Banners", img: img111 },           
    { title: "In-Store Branding (Danglers, Buntings & Wobblers", img: img112 },        
    { title: "X-Stands & Rollup Stands Promotional Pricing", img: img113 },       
    { title: "Large Format Printing (Panaflex, Vinyl & Canvas)", img: img115 },     
    { title: "Visiting Cards, Brochures & Paper Bags", img: img116 },        
    { title: "Outdoor Signboards & Storefront Branding", img: img117 },        
    { title: "Office Showroom & Printing Facility Gallery", img: img118 },          
    { title: "Canvas Printing & Wall Art Displays", img: img119 },        
    { title: "X-Stand & Rollup Banner Printing", img: img120 },         
    { title: "Panaflex Printing & Quick WhatsApp Orders", img: img121 },             
    { title: "Kiosk Stand Printing & Promotional Counters", img: img122 },           
    { title: "Panaflex 3D Wallpaper Printing", img: img123 },            
    { title: "Roll Up Stand Printing & Displays", img: img124 },     
    { title: "UV DTF Stickers & Customized Product Printing", img: img125 },         
    { title: "Panaflex Printing & Business Services", img: img150 },       
    { title: "Digital Panaflex & Flex Printing Services", img: img151 },        
    { title: "Interior Wallpaper & Panaflex Printing", img: img152 },         
    { title: "Digital Flex & Panaflex Printing", img: img153 },      
    { title: "DTF UV Printer & Company Tags Printing", img: img154 }, 
    { title: "Complete Advertising & Branding Printing Services", img: img155 },           
    { title: "Digital Printing, Fabrication & Signage Services", img: img156 },        
                 
  ];

  const videosList = [
    { id: 1, src: bannerLivePrint, poster: PanaflexOutdoorPrinting, title: "Banner Live Print" },
    { id: 2, src: rollupPrinting, poster: OffsetPackagePrinting, title: "Rollup Printing" },
    { id: 3, src: vid12, poster: ExhibitionStallBranding, title: "Production Work 01" },
    { id: 4, src: vid42, poster: organicDatePackaging, title: "Production Work 02" },
    { id: 5, src: vid43, poster: customDiecutLabels, title: "Production Work 03" },
    { id: 6, src: vid44, poster: modernPetSignage, title: "Production Work 04" },
    { id: 7, src: vid46, poster: businessQRCards, title: "Production Work 05" },
    { id: 8, src: vid47, poster: charcoalBoxPackaging, title: "Production Work 06" },
    { id: 10, src: vid49, poster: PanaflexOutdoorPrinting, title: "Production Work 08" },
    { id: 11, src: vid50, poster: OffsetPackagePrinting, title: "Production Work 09" },
    { id: 13, src: vid52, poster: organicDatePackaging, title: "Production Work 11" },
    { id: 14, src: vid53, poster: customDiecutLabels, title: "Production Work 12" },
    { id: 15, src: vid54, poster: modernPetSignage, title: "Production Work 13" },
    { id: 16, src: vid55, poster: businessQRCards, title: "Production Work 14" },
  ];

  const testimonials = [
    { name: "Sarah K.", role: "Retail Store Owner", rating: 5, comment: "The Panaflex signage we ordered for our store exceeded all our expectations. The colors pop, and it's so durable. Highly recommend their services!" },
    { name: "Ahmed R.", role: "Event Organizer", rating: 5, comment: "The Panaflex banner we got for our event was exactly what we needed. Great design, quick delivery, and very affordable. Definitely worth it!" },
    { name: "John D.", role: "Business Owner", rating: 5, comment: "I was really impressed by the quality of the Panaflex material used. The design was sleek and professional. Definitely my go-to company for future signage needs!" },
    { name: "Zaid Hassan", role: "Marketing Manager", rating: 5, comment: "Exceptional printing quality for our corporate rollup standees. Delivered right on schedule in Karachi." },
    { name: "Saima Ali", role: "Bakery Owner", rating: 5, comment: "Custom packaging boxes turned out incredible! High resolution print and clean finishing." },
    { name: "Farhan Raza", role: "Restaurant Owner", rating: 5, comment: "Backlight board installation was done very professionally. Bright colors and excellent durability." },
    { name: "Maryam Khan", role: "Graphic Designer", rating: 5, comment: "Business card lamination and corner cutting quality was spot-on. Highly recommended service." },
    { name: "Usman Ghani", role: "E-Commerce Brand Owner", rating: 5, comment: "Best rates for Panaflex printing. Prompt WhatsApp support and fast dispatch!" },
    { name: "Bilal Tariq", role: "Corporate Client", rating: 5, comment: "Superb acrylic printing and promotional items. The attention to detail in design and final finish was impressive!" },
    { name: "Hamza Sheikh", role: "Real Estate Developer", rating: 5, comment: "Outstanding large-format outdoor billboards! The durability and color retention in harsh weather is remarkable." }
  ];

  return (
    <div className="about-page pb-5" style={{ background: '#090514', color: '#f8fafc', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@1,700&display=swap');

        @keyframes clientMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: clientMarquee 25s linear infinite;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

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

        .btn-whatsapp-green {
          background: #25d366;
          color: #fff !important;
          font-weight: 700;
          border: none;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .btn-whatsapp-green:hover {
          background: #20ba5a;
          transform: translateY(-2px);
        }

        .glow-card {
          background: linear-gradient(145deg, #130a24, #1a0f35);
          border-radius: 16px;
          border: 1px solid rgba(184, 0, 255, 0.25);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
          color: #f1f5f9;
        }

        .glow-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(184, 0, 255, 0.4) !important;
          border-color: #ff2a85;
        }
      `}</style>

      <div className="container py-4">

        {/* 1. Hero Section */}
        <section className="mb-5">
          <div className="rounded-4 overflow-hidden shadow-lg mb-4 border" style={{ borderColor: 'rgba(184, 0, 255, 0.4)', maxHeight: '400px' }}>
            <img 
              src={aboutBannerImg} 
              alt="About Banner" 
              className="w-100 h-100 object-fit-cover" 
            />
          </div>

          <div className="glow-card text-center p-4 p-md-5 shadow-lg">
            <h2 className="fst-italic fw-normal mb-2" style={{ color: '#ffcc00' }}>If you can Dream it, We can Print it.</h2>
            <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Lobster Two, cursive', color: '#ffffff' }}>Khurram Advertising</h1>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="https://wa.me/923212102553" target="_blank" rel="noreferrer" className="btn btn-whatsapp-green rounded-pill px-4 py-2 text-decoration-none shadow-sm">
                <i className="bi bi-whatsapp me-2 fs-5"></i> +92 3212102553
              </a>
              <a href="https://wa.me/923347779297" target="_blank" rel="noreferrer" className="btn btn-whatsapp-green rounded-pill px-4 py-2 text-decoration-none shadow-sm">
                <i className="bi bi-whatsapp me-2 fs-5"></i> +92 3347779297
              </a>
            </div>
          </div>
        </section>

        {/* 2. Our Mission Section */}
        <section className="row align-items-center g-4 mb-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: '#ffcc00', fontFamily: 'Lobster Two, cursive', fontSize: '2.2rem' }}>Our Mission</h3>
            <p className="text-secondary lh-lg fs-6" style={{ color: '#cbd5e1 !important' }}>
              At <strong className="text-white">Khurram Advertising</strong>, our mission is to provide top-notch
              printing solutions that help businesses stand out. We specialize in
              delivering high-quality banners, panaflex signage, and promotional
              materials with precision, speed, and creative design. Our goal is to meet
              tight deadlines while maintaining exceptional quality to ensure your brand
              makes a lasting impression.
            </p>
          </div>
          <div className="col-md-6">
            <div className="rounded-4 overflow-hidden shadow-sm border border-secondary" style={{ borderColor: 'rgba(184, 0, 255, 0.4) !important' }}>
              <img 
                src={missionImg} 
                alt="Our Mission" 
                className="img-fluid w-100 object-fit-cover"
                style={{ maxHeight: '350px' }}
              />
            </div>
          </div>
        </section>

        {/* 3. Our Commitment to Quality Section */}
        <section className="row align-items-center g-4 mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: '#ffcc00', fontFamily: 'Lobster Two, cursive', fontSize: '2.2rem' }}>Our Commitment to Quality and Customer Satisfaction</h3>
            <p className="text-secondary lh-lg fs-6" style={{ color: '#cbd5e1 !important' }}>
              Our approach is simple: we focus on delivering value through superior
              products, exceptional customer service, and on-time delivery. Every sign
              we create is a testament to our dedication to craftsmanship and customer
              satisfaction.
            </p>
          </div>
          <div className="col-md-6">
            <div className="rounded-4 overflow-hidden shadow-sm border border-secondary" style={{ borderColor: 'rgba(184, 0, 255, 0.4) !important' }}>
              <img 
                src={satisfactionImg} 
                alt="Customer Satisfaction" 
                className="img-fluid w-100 object-fit-cover"
                style={{ maxHeight: '350px' }}
              />
            </div>
          </div>
        </section>

        {/* 4. Expertise & Bullet Points Section */}
        <section className="row align-items-stretch g-4 mb-5">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className="text-secondary lh-lg mb-3" style={{ color: '#cbd5e1 !important' }}>
              We are dedicated to excellence at every step, from concept to
              completion. With years of expertise in the Panaflex industry, we deliver
              high-quality, durable, and innovative solutions that go beyond our
              clients' expectations.
            </p>
            <ul className="text-secondary lh-lg mb-3 ps-3" style={{ color: '#cbd5e1 !important' }}>
              <li className="mb-2">We use the best Panaflex materials to ensure long-lasting and vibrant displays that withstand the test of time.</li>
              <li className="mb-2">Our team works closely with clients to craft customized designs that capture attention and deliver the right message.</li>
              <li className="mb-2">We prioritize customer satisfaction by offering timely, professional, and reliable service at every step of the process.</li>
            </ul>
            <p className="fw-semibold text-white">
              We are more than just a sign company; we are your trusted partner in
              creating impactful, eye-catching displays that leave a lasting impression.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="rounded-4 overflow-hidden shadow-sm border border-secondary w-100 p-2 d-flex align-items-center justify-content-center" style={{ borderColor: 'rgba(184, 0, 255, 0.4) !important', background: '#130a24' }}>
              <img 
                src={about3Img} 
                alt="About Us Details" 
                className="img-fluid w-100 h-auto rounded"
                style={{ objectFit: 'contain', maxHeight: '500px' }}
              />
            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="mb-5">
          <div className="hashmi-custom-banner">
            Our Services
          </div>
          <div className="glow-card p-4 rounded-4 shadow-sm border">
            <div className="row g-4">
              {ourServicesList.map((service, idx) => (
                <div className="col-md-4 col-sm-6" key={idx}>
                  <div className="glow-card h-100 p-3 text-center d-flex flex-column justify-content-between" style={{ background: '#1c1033' }}>
                    <div className="overflow-hidden rounded d-flex align-items-center justify-content-center bg-black bg-opacity-25 p-2" style={{ height: '240px' }}>
                      <img src={service.img} alt={service.title} className="w-100 h-100" style={{ objectFit: 'contain' }} />
                    </div>
                    <h6 className="fw-semibold mt-3 mb-0 text-white">{service.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Our Clients Section */}
        <section className="mb-5">
          <div className="hashmi-custom-banner">
            Our Clients
          </div>
          <div className="glow-card py-5 px-3 rounded-4 shadow-sm border position-relative overflow-hidden">
            <div className="marquee-wrapper">
              <div className="marquee-track align-items-center">
                {[...clientLogos, ...clientLogos].map((client, idx) => (
                  <div key={idx} className="d-flex flex-column align-items-center mx-4 flex-shrink-0">
                    <div 
                      className="rounded-circle shadow border p-2 d-flex align-items-center justify-content-center mb-3 overflow-hidden" 
                      style={{ width: '140px', height: '140px', background: '#1c1033', borderColor: 'rgba(184, 0, 255, 0.4)' }}
                    >
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="w-100 h-100 rounded-circle object-fit-cover" 
                      />
                    </div>
                    <span className="fw-bold text-white text-center d-block" style={{ maxWidth: '150px', fontSize: '15px' }}>
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Our Works Section */}
        <section className="mb-5">
          <div className="hashmi-custom-banner">
            Our Works
          </div>
          <div className="glow-card p-4 rounded-4 shadow-sm border">
            <div className="row g-4">
              {portfolioWorks.map((work, idx) => (
                <div className="col-md-4 col-sm-6" key={idx}>
                  <div className="glow-card h-100 p-2 text-center" style={{ background: '#1c1033' }}>
                    <div className="overflow-hidden rounded" style={{ height: '200px' }}>
                      <img src={work.img} alt={work.title} className="w-100 h-100 object-fit-cover" />
                    </div>
                    <h6 className="fw-semibold mt-2 mb-0 text-white">{work.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Our Videos Section */}
        <section className="mb-5">
          <div className="hashmi-custom-banner">
            Our Videos
          </div>
          <div className="glow-card p-4 rounded-4 shadow-sm border">
            <div className="row g-4">
              {videosList.map((vid) => (
                <div key={vid.id} className="col-md-4">
                  <VideoCard videoSrc={vid.src} poster={vid.poster} title={vid.title} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. What Our Clients Say Section */}
        <section className="mb-5">
          <div className="glow-card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="hashmi-custom-banner mb-0">
              What Our Clients Say
            </div>

            <div className="p-4 p-md-5" style={{ background: '#090514' }}>
              <div className="row g-4 justify-content-center">
                {testimonials.map((review, idx) => (
                  <div className="col-12 col-md-6 col-lg-4" key={idx}>
                    <div className="glow-card rounded-4 p-4 h-100 d-flex flex-column text-center shadow-sm" style={{ background: '#130a24' }}>
                      <div className="text-warning mb-3 fs-5">
                        {[...Array(review.rating)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill mx-1"></i>
                        ))}
                      </div>

                      <p className="small fst-italic mb-4 lh-base" style={{ color: '#cbd5e1' }}>
                        "{review.comment}"
                      </p>

                      <div className="mt-auto">
                        <h6 className="fw-bold mb-1 text-white">{review.name}</h6>
                        <span className="text-muted small d-block">{review.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;