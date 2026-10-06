import React, { useState } from "react";
import { menuItems } from "../modules/menu.js";

function Header({ cartCount = 0, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const getAnchor = (item) => {
    const slug = item.toLowerCase().replaceAll(" ", "-");
    return `#${slug}`;
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Ganesh VIP Sports Home">
          <div className="brand-logo-wrap">
            <span className="brand-logo">G</span>
            <span className="brand-badge-pill">VIP</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Ganesh VIP Sports</span>
            <span className="brand-tagline">Pandharpur, MH</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-menu" aria-label="Main menu">
          {menuItems.map((item) => (
            <a key={item} href={getAnchor(item)} className="nav-item">
              {item}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button
            className="cart-toggle-btn"
            onClick={onOpenCart}
            aria-label="Open booking cart"
            title="View Booking Basket"
          >
            <span className="cart-icon">🛒</span>
            <span className="cart-label">Basket</span>
            {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
          </button>

          <a
            href="tel:+918668811021"
            className="header-call-btn"
            title="Call Ganesh Sawant directly"
          >
            <span className="call-icon">📞</span>
            <span className="call-text">Call</span>
          </a>

          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className={`hamburger-bar ${mobileOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-top-row">
            <p className="mobile-nav-title">VIP Navigation</p>
            <button
              className="mobile-close-chip"
              onClick={() => setMobileOpen(false)}
            >
              Close ✕
            </button>
          </div>
          <div className="mobile-nav-links">
            {menuItems.map((item) => (
              <a
                key={item}
                href={getAnchor(item)}
                onClick={() => setMobileOpen(false)}
                className="mobile-nav-item"
              >
                <span>{item}</span>
                <span className="nav-arrow">→</span>
              </a>
            ))}
          </div>

          <div className="mobile-drawer-contact">
            <p className="contact-subtitle">Owner & VIP Concierge</p>
            <h4 className="contact-name">Ganesh Sawant</h4>
            <div className="mobile-action-row">
              <a href="tel:+918668811021" className="action-btn-call">
                📞 Call 8668811021
              </a>
              <a
                href="https://wa.me/918668811021?text=Hello%20Ganesh%20VIP%20Sports,%20I%20am%20interested%20in%20booking%20a%20sports%20car."
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn-wa"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
