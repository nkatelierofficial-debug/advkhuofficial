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
import productStickerImg from '../assets/images/ProductSticker.jpg';
import packingTapeImg from '../assets/images/PackingTape.jpg';
import notepadPadImg from '../assets/images/NotepadPad.jpg';

function OffsetPrinting() {
  const whatsappNumber = "923212102553";

  // Products mapped with their respective local image imports
  const products = [
    {
      id: 1,
      title: "Brochure",
      price: "Rs 4,500.00",
      img: brochureImg,
      desc: "Professional Bi-fold & Tri-fold Corporate Brochures"
    },
    {
      id: 2,
      title: "Business Card",
      price: "Rs 3,500.00",
      img: businessCardImg,
      desc: "Premium Matt/Gloss Lamination, 350GSM Card"
    },
    {
      id: 3,
      title: "Flyer",
      price: "Rs 2,500.00",
      img: flyerImg,
      desc: "High-impact Marketing & Promotional Flyers"
    },
    {
      id: 4,
      title: "Envelope",
      price: "Rs 2,000.00",
      img: envelopeImg,
      desc: "Custom Branded Corporate Envelopes"
    },
    {
      id: 5,
      title: "PVC Card",
      price: "Rs 5,000.00",
      img: pvcCardImg,
      desc: "Durable ID Cards, Membership & Access Cards"
    },
    {
      id: 6,
      title: "Letterhead",
      price: "Rs 1,500.00",
      img: letterheadImg,
      desc: "Corporate Letterheads on Fine Quality Paper"
    },
    {
      id: 7,
      title: "File Cover",
      price: "Rs 6,000.00",
      img: fileCoverImg,
      desc: "Custom Presentation File Folders with Pockets"
    },
    {
      id: 8,
      title: "Box Packing",
      price: "Rs 12,000.00",
      img: boxPackingImg,
      desc: "Custom Die-Cut Product Packaging Boxes"
    },
    {
      id: 9,
      title: "Paper Bag",
      price: "Rs 8,000.00",
      img: paperBagImg,
      desc: "Branded Shopping & Gift Paper Bags with Handles"
    },
    {
      id: 10,
      title: "Label Sticker",
      price: "Rs 3,000.00",
      img: labelStickerImg,
      desc: "Custom Roll & Die-Cut Sticker Labels"
    },
    {
      id: 11,
      title: "Woven Label",
      price: "Rs 4,000.00",
      img: wovenLabelImg,
      desc: "Garment Woven Brand Labels & Tags"
    },
    {
      id: 12,
      title: "Satin Label",
      price: "Rs 3,500.00",
      img: satinLabelImg,
      desc: "Soft Satin Printed Labels for Clothing & Apparels"
    },
    {
      id: 13,
      title: "Hang Tag",
      price: "Rs 2,500.00",
      img: hangTagImg,
      desc: "Custom Clothing & Retail Price Hang Tags"
    },
    {
      id: 14,
      title: "Product Sticker",
      price: "Rs 3,000.00",
      img: productStickerImg,
      desc: "Waterproof Vinyl & Paper Product Stickers"
    },
    {
      id: 15,
      title: "Packing Tape",
      price: "Rs 4,500.00",
      img: packingTapeImg,
      desc: "Custom Printed Logo Adhesive Packing Tapes"
    },
    {
      id: 16,
      title: "Notepad / Pad",
      price: "Rs 5,500.00",
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

        .offset-banner-wrapper {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(184, 0, 255, 0.25);
          border: 2px solid rgba(255, 204, 0, 0.4);
          margin-bottom: 2.5rem;
          background: #130a24;
        }

        .offset-banner-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

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
      `}</style>

      <div className="container py-4">
        {/* Offset Print Banner Image */}
        <div className="offset-banner-wrapper">
          <img 
            src={offsetPrintBanner} 
            alt="Khurram Advertising Offset Printing Banner" 
            className="offset-banner-img"
          />
        </div>

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
                  className="btn btn-gradient-magenta rounded-pill w-100 fw-semibold mt-auto py-2"
                >
                  <i className="bi bi-whatsapp me-2"></i> Buy Now
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