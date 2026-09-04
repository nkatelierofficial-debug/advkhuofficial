import React, { useState } from 'react';
import logoImg from '../assets/logos/logo file.jpg';
const DarkSectionLogo = () => (
  <div className="d-inline-block">
    <img 
      src={logoImg} 
      alt="Khurram Advertising Logo" 
      style={{ height: '180px', width: 'auto', objectFit: 'contain' }} 
      className="d-block pt-2"
    />
  </div>
);
const LightSectionLogo = () => (
  <div className="d-inline-block">
    <img 
      src={logoImg} 
      alt="Khurram Advertising Logo" 
      style={{ height: '150px', width: 'auto', objectFit: 'contain' }} 
      className="d-block"
    />
  </div>
);

function Footer() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', product: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `*New Order Query - Khurram Advertising*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📧 *Email:* ${formData.email}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `📦 *Product:* ${formData.product}%0A` +
      `💬 *Message:* ${formData.message}`;

    window.open(`https://wa.me/923347779297?text=${text}`, '_blank');
  };

  return (
    <footer className="footer-wrapper">
      <style>{`
        .brand-icon-bubble {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          position: relative;
        }
        .brand-icon-bubble:hover {
          transform: translateY(-8px) scale(1.15);
        }
        .brand-icon-bubble.youtube {
          background-color: #FF0000;
          color: #ffffff;
          border-radius: 12px;
          font-size: 1.4rem;
          box-shadow: 0 4px 10px rgba(255, 0, 0, 0.3);
        }
        .brand-icon-bubble.facebook {
          background-color: #1877F2;
          color: #ffffff;
          border-radius: 50%;
          font-size: 1.5rem;
          box-shadow: 0 4px 10px rgba(24, 119, 242, 0.3);
        }
        .brand-icon-bubble.twitter {
          background-color: #000000;
          color: #ffffff;
          border-radius: 50%;
          font-size: 1.2rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .brand-icon-bubble.linkedin {
          background-color: #0077b5;
          color: #ffffff;
          border-radius: 50%;
          font-size: 1.4rem;
          box-shadow: 0 4px 10px rgba(0, 119, 181, 0.3);
        }
        .brand-icon-bubble.google {
          background-color: #ffffff;
          border-radius: 50%;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
        }
        .brand-icon-bubble.instagram {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          color: #ffffff;
          border-radius: 12px;
          font-size: 1.4rem;
          box-shadow: 0 4px 10px rgba(220, 39, 67, 0.3);
        }
        .brand-icon-bubble.tiktok {
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
        }
        .brand-icon-bubble.tiktok i {
          color: #000000;
          text-shadow: -2px -1px 0px #00f2fe, 2px 1px 0px #fe2c55;
          font-size: 1.4rem;
        }
        .bubble-input {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1.5px solid transparent !important;
        }
        .bubble-input:hover, .bubble-input:focus {
          background-color: #ffffff !important;
          box-shadow: 0 0 12px rgba(0, 180, 219, 0.3) !important;
          transform: translateY(-2px);
        }

        /* Pink/Magenta Gradient Button with Hover Light Glow */
        .pink-glow-btn {
          position: relative;
          background: linear-gradient(135deg, #a200ff 0%, #ec008c 100%);
          border-radius: 50px;
          border: none;
          color: #ffffff;
          z-index: 1;
          transition: all 0.4s ease;
        }

        .pink-glow-btn::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 53px;
          background: linear-gradient(45deg, #ff007f, #d400ff, #ff4da6, #ff007f);
          background-size: 300%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .pink-glow-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 0 25px rgba(236, 0, 140, 0.8), 0 0 15px rgba(162, 0, 255, 0.6);
          color: #ffffff;
        }

        .pink-glow-btn:hover::before {
          opacity: 1;
          animation: pinkGlowAnim 2.5s linear infinite;
        }

        @keyframes pinkGlowAnim {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .custom-yellow-heading {
          color: #FFD700 !important;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .contact-bubble-item {
          transition: all 0.3s ease;
          padding: 6px 10px;
          border-radius: 8px;
        }
        .contact-bubble-item:hover {
          background: rgba(236, 0, 140, 0.08);
          transform: translateX(6px);
        }
        .animated-link-item {
          position: relative;
          transition: all 0.3s ease;
          display: inline-block;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .animated-link-item:hover {
          background: rgba(236, 0, 140, 0.1);
          color: #ec008c !important;
          transform: translateY(-2px);
          font-weight: 600;
        }

        /* Bubble hover card style for light footer columns */
        .footer-bubble-card {
          transition: all 0.35s ease;
          padding: 12px;
          border-radius: 12px;
        }
        .footer-bubble-card:hover {
          background-color: #ffffff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          transform: translateY(-4px);
        }
      `}</style>
      <div className="bg-black text-white pt-0 pb-5 px-3 px-md-5 position-relative">
        <div className="container-fluid">
          
          <div className="pt-2 mb-3">
            <DarkSectionLogo />
          </div>

          <div className="text-center mb-5">
            <h1 className="fw-bold custom-yellow-heading mb-1 display-6">Khurram Advertising</h1>
            <p className="fs-6 text-light opacity-75 mb-2">High Quality Printing Services in Pakistan</p>
            <div className="mx-auto rounded" style={{ width: '60px', height: '4px', backgroundColor: '#FFD700', boxShadow: '0 0 12px #FFD700' }}></div>
          </div>

          <div className="row g-4 align-items-start justify-content-between">
            <div className="col-lg-5 col-md-6">
              <h4 className="custom-yellow-heading fw-bold mb-3 fs-5">Office Address:</h4>
              <p className="lh-base text-light mb-4 fs-6">
                IIB/6 Sadia Press Center<br />
                Nazimabad No 2 Sadia,<br />
                Center, Karachi, 07468, Pakistan
              </p>
              <div className="mb-3">
                <span className="d-block text-light fs-6">Phone:</span>
                <span className="d-block text-white fw-semibold">+92 3212102553</span>
                <span className="d-block text-white fw-semibold">+92 3347779297</span>
              </div>
              <div className="mb-4">
                <span className="text-light fs-6">Email: </span>
                <a href="mailto:moosakhu777@gmail.com" className="text-white text-decoration-none fw-medium">
                moosakhu777@gmail.com
                </a>
              </div>
              <div className="rounded overflow-hidden shadow-lg mt-3 border border-secondary" style={{ maxWidth: '100%', height: '200px' }}>
                <iframe 
                  title="Khurram Advertising Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.373187213498!2d67.0285!3d24.9182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f92a3ed141f%3A0xc3f6e1f0a20cbef!2sNazimabad%20No.%202%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <h4 className="custom-yellow-heading fw-bold mb-3 fs-5">Get in Touch</h4>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <input type="text" name="name" className="form-control form-control-lg bg-white text-dark rounded-2 bubble-input" placeholder="Name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input type="email" name="email" className="form-control form-control-lg bg-white text-dark rounded-2 bubble-input" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input type="tel" name="phone" className="form-control form-control-lg bg-white text-dark rounded-2 bubble-input" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input type="text" name="product" className="form-control form-control-lg bg-white text-dark rounded-2 bubble-input" placeholder="Required Product" value={formData.product} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <textarea name="message" rows="4" className="form-control form-control-lg bg-white text-dark rounded-2 bubble-input" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-lg w-100 fw-bold py-3 pink-glow-btn shadow-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-4 px-3 px-md-5 border-bottom border-top">
        <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <span className="text-dark fw-bold fs-6">Get connected with us on social networks:</span>
          <div className="d-flex align-items-center gap-3">
            <a href="https://www.youtube.com/@hashmiadvertising" target="_blank" rel="noreferrer" className="brand-icon-bubble youtube" title="YouTube"><i className="bi bi-play-fill ms-1"></i></a>
            <a href="https://web.facebook.com/people/HashmiAdvertising/100064110572527/" target="_blank" rel="noreferrer" className="brand-icon-bubble facebook" title="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://x.com/i/jf/onboarding/web?redirect_after_login=%2Fshare%3Furl%3Dhttps%253A%252F%252Fg.co%252Fkgs%252FgpJh9Da%26text%3DHashmi%2520Advertising%250A0321%25202102553%250A%250A&mode=login" target="_blank" rel="noreferrer" className="brand-icon-bubble twitter" title="Twitter / X"><i className="bi bi-twitter-x"></i></a>
            <a href="https://www.linkedin.com/in/khurram-advertising-3440a353/" target="_blank" rel="noreferrer" className="brand-icon-bubble linkedin" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="https://share.google/yUjxddIFUiDMsQe" target="_blank" rel="noreferrer" className="brand-icon-bubble google" title="Google">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/panaflex_print_in_karachi/?hl=en" target="_blank" rel="noreferrer" className="brand-icon-bubble instagram" title="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.tiktok.com/@hashmiadvertising777" target="_blank" rel="noreferrer" className="brand-icon-bubble tiktok" title="TikTok"><i className="bi bi-tiktok"></i></a>
          </div>
        </div>
      </div>
      <div className="bg-light text-dark py-5 px-3 px-md-5">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 footer-bubble-card">
              <div className="mb-3">
                <LightSectionLogo />
              </div>
              <p className="text-secondary small lh-base">
                Khurram Advertising Delivers Quality Printing Services With Fast Delivery And Impactful Designs, From Panaflex To Vinyl Stickers.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-bubble-card">
              <h6 className="fw-bold text-uppercase mb-3 ms-2">CONTACT</h6>
              <ul className="list-unstyled text-secondary small lh-lg mb-0">
                <li className="d-flex align-items-start gap-2 contact-bubble-item mb-1">
                  <i className="bi bi-house-door-fill mt-1 flex-shrink-0 text-dark fs-6"></i>
                  <span>IIB/6 Sadia Press Center Nazimabad No 2 Sadia, Center, Karachi, 07468, Pakistan</span>
                </li>
                <li className="d-flex align-items-center gap-2 contact-bubble-item mb-1">
                  <i className="bi bi-envelope-fill text-dark fs-6"></i>
                  <a href="mailto:moosakhu777@gmail.com" className="text-secondary text-decoration-none">moosakhu777@gmail.com</a>
                </li>
                <li className="d-flex align-items-center gap-2 contact-bubble-item mb-1">
                  <i className="bi bi-telephone-fill text-dark fs-6"></i>
                  <span>+92 3212102553</span>
                </li>
                <li className="d-flex align-items-center gap-2 contact-bubble-item">
                  <i className="bi bi-printer-fill text-dark fs-6"></i>
                  <span>+92 3347779297</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-bubble-card">
              <h6 className="fw-bold text-uppercase mb-3">QUICK LINKS</h6>
              <ul className="list-unstyled text-secondary small lh-lg">
                <li className="mb-1"><a href="#home" className="text-secondary text-decoration-none animated-link-item">Home</a></li>
                <li className="mb-1"><a href="#about" className="text-secondary text-decoration-none animated-link-item">About</a></li>
                <li className="mb-1"><a href="#offset" className="text-secondary text-decoration-none animated-link-item">Offset Printing</a></li>
                <li><a href="#panaflex" className="text-secondary text-decoration-none animated-link-item">Panaflex Printing</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-bubble-card">
              <h6 className="fw-bold text-uppercase mb-3">OUR LOCATION</h6>
              <div className="rounded overflow-hidden border shadow-sm" style={{ height: '140px' }}>
                <iframe 
                  title="Khurram Location Small"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.373187213498!2d67.0285!3d24.9182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f92a3ed141f%3A0xc3f6e1f0a20cbef!2sNazimabad%20No.%202%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary bg-opacity-10 py-3 text-center border-top">
        <small className="custom-yellow-heading fw-medium">
          © {new Date().getFullYear()} <strong>Khurram Advertising</strong>. All rights reserved. | Developed by <strong>Khan DevLabs</strong>
        </small>
      </div>

    </footer>
  );
}

export default Footer;