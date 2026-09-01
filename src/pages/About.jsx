import React, { useState, useRef } from 'react';

// Images imports from assets/images
import aboutBannerImg from "../assets/images/aboutbanner.jpg"; 
import missionImg from "../assets/images/ourmission.jpg";
import satisfactionImg from "../assets/images/customersatisfication.jpg"; 
import about3Img from "../assets/images/about3.jpg";

// Our Services Images
import FrontlitFlexPrintingImg from '../assets/images/FrontlitFlexPrinting.jpg';
import FrontBackLightBoardsImg from '../assets/images/FrontBackLightBoards.jpg';
import StarFlexPrintingImg from '../assets/images/StarFlexPrinting.jpg';
import ReflectiveFlexPrintingImg from '../assets/images/ReflectiveFlexPrinting.jpg';
import xstandImg from '../assets/images/xstand.jpg';
import RollupStandImg from '../assets/images/RollupStand.jpg';
import KioskPromotionalCountersImg from '../assets/images/KioskPromotionalCounters.jpg';
import Acrylic3DSignboardsImg from '../assets/images/Acrylic3DSignboards.jpg';
import EventBackdropsImg from '../assets/images/EventBackdrops.jpg';

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
      className="video-hover-card rounded-4 overflow-hidden position-relative shadow-sm glow-card"
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
        <div className="position-absolute bottom-0 start-0 w-100 p-2 text-white text-center small" style={{ background: 'rgba(19, 10, 36, 0.9)', borderTop: '1px solid rgba(184, 0, 255, 0.2)' }}>
          {title}
        </div>
      )}
    </div>
  );
};

function About() {
  const clientLogos = [
    { name: "", logo: PSO },
    { name: "", logo: SLM },
    { name: "", logo: SanamMarvee },
    { name: "", logo: Bank },
    { name: "", logo: SecofDefence },
    { name: "", logo: UBLPakistan },
    { name: "", logo: GhazaliModel },
    { name: "", logo: IDEAS2024 },
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
    { title: "Restaurant Flex Menu Boards", img: restaurantFlexBoards }
  ];

  const ourServicesList = [
    {
      title: "Frontlit Sign Board",
      desc: "Standard outdoor flex printing for billboards, shop boards & event banners.",
      img: FrontlitFlexPrintingImg
    },
    {
      title: "BackLit Boards",
      desc: "High translucent flex designed for backlit lightboxes & glowing signboards.",
      img: FrontBackLightBoardsImg
    },
    {
      title: "Star Flex (Heavy Duty)Banner",
      desc: "Premium smooth finish flex with extra durability and vibrant contrast.",
      img: StarFlexPrintingImg
    },
    {
      title: "Reflective Flex Printing",
      desc: "High-visibility reflective sheet that glows at night when light shines on it.",
      img: ReflectiveFlexPrintingImg
    },
    {
      title: "X-Stand",
      desc: "Lightweight and portable X-frame standees with customized flex banners.",
      img: xstandImg
    },
    {
      title: "Rollup Stand",
      desc: "Retractable aluminum base rollup standees for quick indoor display setups.",
      img: RollupStandImg
    },
    {
      title: "Kiosk & Promotional Counters",
      desc: "Custom branded display counters and promotional tables for marketing.",
      img: KioskPromotionalCountersImg
    },
    {
      title: "3D Acrylic & LED Signboards",
      desc: "3D illuminated acrylic letters combined with sleek flex backdrops.",
      img: Acrylic3DSignboardsImg
    },
    {
      title: "Event Backdrops Flex Banner",
      desc: "Large-format iron frame backdrop setups for stages, weddings, and corporate events.",
      img: EventBackdropsImg
    }
  ];

  const videosList = [
    { id: 1, src: bannerLivePrint  },
    { id: 2, src: rollupPrinting },
    { id: 3, src: vid12 },
    { id: 4, src: vid42 },
    { id: 5, src: vid43  },
    { id: 6, src: vid44 },
    { id: 7, src: vid46 },
    { id: 8, src: vid47 },
    { id: 10, src: vid49 },
    { id: 11, src: vid50 },
    { id: 13, src: vid52 },
    { id: 14, src: vid53 },
    { id: 15, src: vid54 },
    { id: 16, src: vid55 },
  ];

 const testimonials = [
  { name: "Muhammad Ahsan", role: "Retail Store Owner", rating: 5, comment: "The Panaflex signage we ordered for our store exceeded all our expectations. The colors pop, and it's so durable. Highly recommend their services!" },
  { name: "Ayesha Khan", role: "Event Organizer", rating: 5, comment: "The Panaflex banner we got for our event was exactly what we needed. Great design, quick delivery, and very affordable. Definitely worth it!" },
  { name: "Tariq Mahmood", role: "Business Owner", rating: 5, comment: "I was really impressed by the quality of the Panaflex material used. The design was sleek and professional. Definitely my go-to company for future signage needs!" },
  { name: "Zubair Siddiqui", role: "Marketing Manager", rating: 5, comment: "Exceptional printing quality for our corporate rollup standees. Delivered right on schedule in Karachi." },
  { name: "Fatima Noor", role: "Bakery Owner", rating: 5, comment: "Custom packaging boxes turned out incredible! High resolution print and clean finishing." },
  { name: "Usman Ghani", role: "Restaurant Owner", rating: 5, comment: "Backlight board installation was done very professionally. Bright colors and excellent durability." },
  { name: "Bilal Ahmed", role: "Graphic Designer", rating: 5, comment: "Business card lamination and corner cutting quality was spot-on. Highly recommended service." },
  { name: "Sana Raza", role: "E-Commerce Brand Owner", rating: 5, comment: "Best rates for Panaflex printing. Prompt WhatsApp support and fast dispatch!" },
  { name: "Kamran Shah", role: "Corporate Client", rating: 5, comment: "Superb acrylic printing and promotional items. The attention to detail in design and final finish was impressive!" },
  { name: "Hamza Malik", role: "Real Estate Developer", rating: 5, comment: "Outstanding large-format outdoor billboards! The durability and color retention in harsh weather is remarkable." }
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
          border-radius: 20px;
          border: 1px solid rgba(184, 0, 255, 0.3);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          position: relative;
          overflow: hidden;
          color: #f1f5f9;
        }

        .glow-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(184, 0, 255, 0.45) !important;
          border-color: #ff2a85;
        }

        .btn-buy-now {
          background: linear-gradient(90deg, #d900c7, #ff007f);
          color: #fff !important;
          font-weight: 700;
          border: none;
          border-radius: 50px;
          padding: 12px 20px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(217, 0, 199, 0.4);
        }
        .btn-buy-now:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 20px rgba(255, 0, 127, 0.6);
          color: #fff;
        }
      `}</style>

      {/* 1. Full Screen Edge-to-Edge Banner Section */}
      <section className="mb-5 position-relative">
        <div 
          className="w-100 position-relative overflow-hidden shadow-lg" 
          style={{ 
            backgroundImage: `url(${aboutBannerImg})`,
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

      <div className="container py-2">
        {/* Main Brand Hero Card */}
        <div className="glow-card text-center p-4 p-md-5 shadow-lg mb-5">
          <h2 className="fst-italic fw-normal mb-2" style={{ color: '#ffcc00' }}>If you can Dream it, We can Print it.</h2>
          <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'sanssarif, cursive', color: '#ffffff' }}>Khurram Advertising</h1>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="https://wa.me/923212102553" target="_blank" rel="noreferrer" className="btn btn-whatsapp-green rounded-pill px-4 py-2 text-decoration-none shadow-sm">
              <i className="bi bi-whatsapp me-2 fs-5"></i> +92 3212102553
            </a>
            <a href="https://wa.me/923347779297" target="_blank" rel="noreferrer" className="btn btn-whatsapp-green rounded-pill px-4 py-2 text-decoration-none shadow-sm">
              <i className="bi bi-whatsapp me-2 fs-5"></i> +92 3347779297
            </a>
          </div>
        </div>

        {/* About Us Section */}
        <section className="mb-5">
          <div className="hashmi-custom-banner">
            About Us
          </div>
          <div className="glow-card p-4 p-md-5 rounded-4 shadow-sm">
            <p className="lh-lg fs-5 text-center" style={{ color: '#cbd5e1' }}>
              Since 1999, Printing Press by KHURRAM ADVERTISING has been a leading creative powerhouse, offering an array of high-quality printing services in Karachi. From sleek business cards to eye-catching posters and brochures, their expert team brings your design visions to life using state-of-the-art technology. Whether it's an elegant invitation for a special occasion or a comprehensive catalog for your business, they deliver exceptional results every time. With graphic design expertise and event management services at their disposal, Printing Press by KHURRAM ADVERTISING is your one-stop destination for elevating your brand's visual identity.
            </p>
          </div>
        </section>

        {/* 2. Our Mission Section */}
        <section className="mb-5">
          <div className="glow-card p-4 p-md-5">
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <h3 className="fw-bold mb-3" style={{ color: '#ffcc00', fontFamily: 'Lobster Two, cursive', fontSize: '2.2rem' }}>Our Mission</h3>
                <p className="lh-lg fs-6" style={{ color: '#cbd5e1' }}>
                  At <strong className="text-white">Khurram Advertising</strong>, our mission is to provide top-notch
                  printing solutions that help businesses stand out. We specialize in
                  delivering high-quality banners, panaflex signage, and promotional
                  materials with precision, speed, and creative design. Our goal is to meet
                  tight deadlines while maintaining exceptional quality to ensure your brand
                  makes a lasting impression.
                </p>
              </div>
              <div className="col-md-6">
                <div className="rounded-4 overflow-hidden shadow-sm border" style={{ borderColor: 'rgba(184, 0, 255, 0.4)' }}>
                  <img 
                    src={missionImg} 
                    alt="Our Mission" 
                    className="img-fluid w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Commitment to Quality Section */}
        <section className="mb-5">
          <div className="glow-card p-4 p-md-5">
            <div className="row align-items-center g-4 flex-md-row-reverse">
              <div className="col-md-6">
                <h3 className="fw-bold mb-3" style={{ color: '#ffcc00', fontFamily: 'Lobster Two, cursive', fontSize: '2.2rem' }}>Our Commitment to Quality</h3>
                <p className="lh-lg fs-6" style={{ color: '#cbd5e1' }}>
                  Our approach is simple: we focus on delivering value through superior
                  products, exceptional customer service, and on-time delivery. Every sign
                  we create is a testament to our dedication to craftsmanship and customer
                  satisfaction.
                </p>
              </div>
              <div className="col-md-6">
                <div className="rounded-4 overflow-hidden shadow-sm border" style={{ borderColor: 'rgba(184, 0, 255, 0.4)' }}>
                  <img 
                    src={satisfactionImg} 
                    alt="Customer Satisfaction" 
                    className="img-fluid w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Expertise & Bullet Points Section */}
        <section className="mb-5">
          <div className="glow-card p-4 p-md-5">
            <div className="row align-items-stretch g-4">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <p className="lh-lg mb-3" style={{ color: '#cbd5e1' }}>
                  We are dedicated to excellence at every step, from concept to
                  completion. With years of expertise in the Panaflex industry, we deliver
                  high-quality, durable, and innovative solutions that go beyond our
                  clients' expectations.
                </p>
                <ul className="lh-lg mb-3 ps-3" style={{ color: '#cbd5e1' }}>
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
                <div className="rounded-4 overflow-hidden shadow-sm border w-100 p-2 d-flex align-items-center justify-content-center" style={{ borderColor: 'rgba(184, 0, 255, 0.4)', background: '#130a24' }}>
                  <img 
                    src={about3Img} 
                    alt="About Us Details" 
                    className="img-fluid w-100 h-auto rounded"
                    style={{ objectFit: 'contain', maxHeight: '500px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION (Flex Printing & Branding Solutions) */}
        <section className="mb-5">
          <div className="hashmi-custom-banner">
            Flex Printing & Branding Solutions
          </div>
          <div className="glow-card p-4 rounded-4 shadow-sm border">
            <div className="row g-4 justify-content-center">
              {ourServicesList.map((service, idx) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
                  <div 
                    className="glow-card p-3 h-100 d-flex flex-column justify-content-between text-center"
                    style={{ background: '#130a24', border: '1px solid rgba(184, 0, 255, 0.35)', borderRadius: '20px' }}
                  >
                    <div>
                      {/* Image Frame styled matching the reference image */}
                      <div 
                        className="overflow-hidden rounded-4 mb-3 p-2 bg-white d-flex align-items-center justify-content-center shadow-inner" 
                        style={{ height: '260px' }}
                      >
                        <img 
                          src={service.img} 
                          alt={service.title} 
                          className="w-100 h-100" 
                          style={{ objectFit: 'contain' }} 
                        />
                      </div>
                      
                      {/* Title */}
                       <h6 className="fw-bold fs-5 my-2" style={{ color: '#ffcc00' }}>
                        {service.title}
                      </h6>
                      
                      {/* Description */}
                      <p className="small mb-2" style={{ color: '#a0aec0', fontSize: '0.85rem' }}>
                        {service.desc}
                      </p>
                    </div>

                    <div>
                     

                      {/* Buy Now Gradient Button */}
                      <a 
                        href="https://wa.me/923212102553" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-buy-now w-100 text-decoration-none mt-2"
                      >
                        <i className="bi bi-whatsapp fs-5"></i> Buy Now
                      </a>
                    </div>
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
                    <span className="fw-bold text-light text-center d-block" style={{ maxWidth: '150px', fontSize: '15px' }}>
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
                  <div className="glow-card h-100 p-2 text-center" style={{ background: '#1c1033', border: '1px solid rgba(184, 0, 255, 0.3)' }}>
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
          <div className="hashmi-custom-banner">
            What Our Clients Say
          </div>
          <div className="glow-card p-4 p-md-5 rounded-4 shadow-sm border">
            <div className="row g-4 justify-content-center">
              {testimonials.map((review, idx) => (
                <div className="col-12 col-md-6 col-lg-4" key={idx}>
                  <div className="glow-card rounded-4 p-4 h-100 d-flex flex-column text-center shadow-sm" style={{ background: '#1c1033', border: '1px solid rgba(184, 0, 255, 0.3)' }}>
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
        </section>

      </div>
    </div>
  );
}

export default About;
