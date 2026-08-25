import React from 'react';

// Offset Print Banner Image Import
import offsetPrintBanner from '../assets/images/offsetprint.jpg';

// Individual Product Images Imports
import brochureImg from '../assets/images/Brochure.jpg';
import businessCardImg from '../assets/images/BusinessCard.jpg';
import flyerImg from '../assets/images/Flyer.jpg';
import envelopeImg from '../assets/images/Envelope.jpg';
import pvcCardImg from '../assets/images/PVCCard.jpg';
import letterheadImg from '../assets/images/Letterhead.jpg';
import fileCoverImg from '../assets/images/FileCover.jpg';
import boxPackingImg from '../assets/images/BoxPacking.jpg';
import paperBagImg from '../assets/images/PaperBag.jpg';
import labelStickerImg from '../assets/images/LabelSticker.jpg';
import wovenLabelImg from '../assets/images/WovenLabel.jpg';
import satinLabelImg from '../assets/images/SatinLabel.jpg';
import hangTagImg from '../assets/images/HangTag.jpg';
import productStickerImg from '../assets/images/productSticker.jpg';
import packingTapeImg from '../assets/images/PackingTape.jpg';
import notepadPadImg from '../assets/images/NotepadPad.jpg';

function OffsetPrinting() {
  const whatsappNumber = "923212102553";

  // Products mapped with their respective local image imports
  const products = [
    {
      id: 1,
      title: "Brochure",
      price: "Rs 75.00 -Each",
      img: brochureImg,
      desc: "Professional Bi-fold & Tri-fold Corporate Brochures"
    },
    {
      id: 2,
      title: "Business Card",
      price: "Rs 20.00 -Each",
      img: businessCardImg,
      desc: "Premium Matt/Gloss Lamination, 350GSM Card"
    },
    {
      id: 3,
      title: "Flyer",
      price: "Rs 35.00 -Each",
      img: flyerImg,
      desc: "High-impact Marketing & Promotional Flyers"
    },
    {
      id: 4,
      title: "Envelope",
      price: "Rs 25.00 -Each",
      img: envelopeImg,
      desc: "Custom Branded Corporate Envelopes"
    },
    {
      id: 5,
      title: "PVC Card",
      price: "Rs 175.00 -Each",
      img: pvcCardImg,
      desc: "Durable ID Cards, Membership & Access Cards"
    },
    {
      id: 6,
      title: "Letterhead",
      price: "Rs 35.00 -Each",
      img: letterheadImg,
      desc: "Corporate Letterheads on Fine Quality Paper"
    },
    {
      id: 7,
      title: "File Cover",
      price: "Rs 75.00 -Each",
      img: fileCoverImg,
      desc: "Custom Presentation File Folders with Pockets"
    },
    {
      id: 8,
      title: "Box Packing",
      price: "Rs 250.00 -Each",
      img: boxPackingImg,
      desc: "Custom Die-Cut Product Packaging Boxes"
    },
    {
      id: 9,
      title: "Paper Bag",
      price: "Rs 175.00 -Each",
      img: paperBagImg,
      desc: "Branded Shopping & Gift Paper Bags with Handles"
    },
    {
      id: 10,
      title: "Label Sticker",
      price: "Rs 25.00 -Each",
      img: labelStickerImg,
      desc: "Custom Roll & Die-Cut Sticker Labels"
    },
    {
      id: 11,
      title: "Woven Label",
      price: "Rs 20.00 -Each",
      img: wovenLabelImg,
      desc: "Garment Woven Brand Labels & Tags"
    },
    {
      id: 12,
      title: "Satin Label",
      price: "Rs 25.00 -Each",
      img: satinLabelImg,
      desc: "Soft Satin Printed Labels for Clothing & Apparels"
    },
    {
      id: 13,
      title: "Hang Tag",
      price: "Rs 20.00 -Each",
      img: hangTagImg,
      desc: "Custom Clothing & Retail Price Hang Tags"
    },
    {
      id: 14,
      title: "Product Sticker",
      price: "Rs 25.00 -Each",
      img: productStickerImg,
      desc: "Waterproof Vinyl & Paper Product Stickers"
    },
    {
      id: 16,
      title: "Notepad / Pad",
      price: "Rs 500.00 -Each",
      img: notepadPadImg,
      desc: "Custom Branded Notepads & Desk Pads"
    }
  ];

  const handleBuyNow = (itemTitle, itemPrice) => {
    const message = `Hello Khurram Advertising! I want to order/inquire about *${itemTitle}* (${itemPrice}). Please share details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="offset-page pb-5" style={{ background: '#090514', color: '#f8fafc', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@1,700&display=swap');

        .btn-gradient-magenta {
          background: linear-gradient(90deg, #b800ff 0%, #ff2a85 100%);
          color: #fff !important;
          font-weight: 700;
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-gradient-magenta:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(255, 42, 133, 0.5);
          background: linear-gradient(90deg, #c71aff, #ff4095);
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

        /* Hero Feature Section Styles */
        .hero-feature-card {
          background: #0f0720;
          border-radius: 20px;
          border: 1px solid rgba(184, 0, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .feature-sub-card {
          background: rgba(25, 12, 45, 0.6);
          border-radius: 12px;
          border: 1px solid rgba(184, 0, 255, 0.25);
          transition: border-color 0.3s ease;
        }
        .feature-sub-card:hover {
          border-color: rgba(184, 0, 255, 0.5);
        }
        .pill-badge {
          background-color: #ffcc00;
          color: #000;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 6px 20px;
          border-radius: 50px;
          display: inline-block;
        }
      `}</style>

      {/* Full Screen Edge-to-Edge Banner Section */}
      <section className="mb-4 position-relative">
        <div 
          className="w-100 position-relative overflow-hidden shadow-lg" 
          style={{ 
            backgroundImage: `url(${offsetPrintBanner})`,
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

      <div className="container py-4">
        {/* Feature Section matching screenshot design */}
        <section className="hero-feature-card p-4 p-md-5 mb-5 text-center">
          <div className="mb-3">
            <span className="pill-badge">
              Premium Bulk & Commercial Printing
            </span>
          </div>

          <h1 className="fw-bold mb-3" style={{ color: '#ffcc00', fontSize: '2.5rem' }}>
            Offset Printing Services in Karachi
          </h1>

          <p className="mx-auto mb-4" style={{ color: '#cbd5e1', maxWidth: '900px', fontSize: '1.05rem', lineHeight: '1.7' }}>
            We provide top-quality commercial offset printing services using high-precision Heidelberg machinery. Whether you need corporate brochures, business cards, customized box packaging, flyers, or office stationery, we offer sharp, color-accurate prints designed to elevate your business identity.
          </p>

          <div className="row g-3 text-start mt-2">
            <div className="col-md-4">
              <div className="feature-sub-card p-3.5 p-3 h-100">
                <h6 className="fw-bold d-flex align-items-center mb-2" style={{ color: '#ffcc00', fontSize: '1.1rem' }}>
                  <i className="bi bi-shield-check me-2 fs-5"></i> High-GSM Quality Paper
                </h6>
                <p className="small mb-0" style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  Premium art paper, ivory cards, and sturdy box materials that ensure long-lasting elegance and durability.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-sub-card p-3.5 p-3 h-100">
                <h6 className="fw-bold d-flex align-items-center mb-2" style={{ color: '#ffcc00', fontSize: '1.1rem' }}>
                  <i className="bi bi-palette me-2 fs-5"></i> Sharp CMYK Precision
                </h6>
                <p className="small mb-0" style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  Exact brand color matching with rich offset inks and fine detail rendering for maximum impact.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-sub-card p-3.5 p-3 h-100">
                <h6 className="fw-bold d-flex align-items-center mb-2" style={{ color: '#ffcc00', fontSize: '1.1rem' }}>
                  <i className="bi bi-scissors me-2 fs-5"></i> Custom Finishing & Coating
                </h6>
                <p className="small mb-0" style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  Spot UV, foil stamping, embossing, die-cutting, and matt/gloss lamination available for all corporate items.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mb-5">
          <h2 className="fw-bold text-white mb-2" style={{ fontSize: '2.4rem' }}>
            All Offset Printing Products
          </h2>
          <p className="text-secondary" style={{ color: '#cbd5e1' }}>
            Browse through all corporate items featured in our official offset printing catalog and order directly via WhatsApp.
          </p>
        </div>

        {/* Product Grid */}
        <div className="row g-4">
          {products.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <div className="glow-card h-100 p-3 text-center d-flex flex-column shadow-sm">
                <div className="position-relative overflow-hidden rounded-3 mb-3" style={{ height: '180px' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <h5 className="fw-bold text-white mb-1">{item.title}</h5>
                <p className="small mb-2" style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>{item.desc}</p>
                <div className="fs-6 fw-bold mb-3" style={{ color: '#ffcc00' }}>{item.price}</div>
                <button
                  onClick={() => handleBuyNow(item.title, item.price)}
                  className="btn btn-gradient-magenta rounded-pill w-100 fw-semibold mt-auto py-2 d-flex align-items-center justify-content-center"
                >
                  <i className="bi bi-whatsapp me-2 fs-5"></i> Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OffsetPrinting;