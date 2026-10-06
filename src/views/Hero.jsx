import React from "react";

function Hero({ onQuickBook }) {
  const whatsappUrl =
    "https://wa.me/918668811021?text=Hello%20Ganesh%20Sawant,%20I%20want%20to%20enquire%20about%20booking%20a%20VIP%20Sports%20Car%20in%20Pandharpur.";

  return (
    <section className="hero-showcase" id="home">
      <div className="hero-backdrop">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
          alt="VIP Sports Car Fleet"
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge-pill">
          <span className="pulse-dot"></span>
          <span>MAHARASHTRA'S ELITE SUPERCAR DESTINATION • PANDHARPUR</span>
        </div>

        <h1 className="hero-headline">
          Arrive Like Royalty. <br />
          <span className="hero-highlight">VIP Sports Cars</span> For Unforgettable Moments.
        </h1>

        <p className="hero-subtext">
          Elevate your Grand Wedding Entry, VIP Celebrations, Pre-Wedding Shoots, and Corporate
          Arrivals with Pandharpur's exclusive high-performance fleet managed by Ganesh Sawant.
        </p>

        <div className="hero-cta-group">
          <a href="#fleet" className="btn-primary-glow">
            <span>Explore VIP Fleet</span>
            <span className="btn-arrow">↓</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <span className="wa-icon">💬</span>
            <span>WhatsApp Enquiry</span>
          </a>

          <a href="tel:+918668811021" className="btn-call-outline">
            <span className="call-icon">📞</span>
            <span>Call: 8668811021</span>
          </a>
        </div>

        {/* Feature Highlights Pills */}
        <div className="hero-pills-row">
          <div className="pill-item">
            <span className="pill-icon">🚀</span>
            <span>0-100 in 2.9s</span>
          </div>
          <div className="pill-item">
            <span className="pill-icon">💎</span>
            <span>Showroom Condition</span>
          </div>
          <div className="pill-item">
            <span className="pill-icon">🤵</span>
            <span>VIP Chauffeur Available</span>
          </div>
          <div className="pill-item">
            <span className="pill-icon">📍</span>
            <span>Pandharpur & Statewide Delivery</span>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div className="hero-metrics-bar">
          <div className="metric-box">
            <span className="metric-number">10+</span>
            <span className="metric-label">Exotic Supercars</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-number">500+</span>
            <span className="metric-label">VIP Events Powered</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-number">4.9★</span>
            <span className="metric-label">Client Satisfaction</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-number">24/7</span>
            <span className="metric-label">VIP Concierge</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
