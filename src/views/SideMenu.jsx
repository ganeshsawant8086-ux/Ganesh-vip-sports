import React from "react";
import { menuItems } from "../modules/menu.js";

export default function SideMenu() {
  const getIcon = (item) => {
    switch (item.toLowerCase()) {
      case "home":
        return "🏠";
      case "fleet":
        return "🏎️";
      case "about":
        return "💎";
      case "car details":
        return "⚡";
      case "steps":
        return "📋";
      case "vip services":
        return "👑";
      case "contact":
        return "📞";
      default:
        return "✨";
    }
  };

  return (
    <aside className="side-menu" aria-label="Page menu">
      <div className="side-menu-header">
        <span className="section-label">VIP Navigation</span>
      </div>

      <nav className="side-menu-links">
        {menuItems.map((item) => {
          const anchor = `#${item.toLowerCase().replaceAll(" ", "-")}`;
          return (
            <a key={item} href={anchor} className="side-nav-anchor">
              <span className="side-nav-icon">{getIcon(item)}</span>
              <span className="side-nav-text">{item}</span>
            </a>
          );
        })}
      </nav>

      {/* Quick VIP Hotspot */}
      <div className="side-menu-promo">
        <div className="promo-badge">HOT DEAL</div>
        <p className="promo-title">Wedding Season Special</p>
        <p className="promo-desc">Special discount on Mustang GT & Ferrari bookings in Pandharpur.</p>
        <a
          href="https://wa.me/918668811021?text=Hello%20Ganesh%20Sawant,%20I%20want%20to%20enquire%20about%20the%20Wedding%20Season%20Special%20supercar%20discount."
          target="_blank"
          rel="noopener noreferrer"
          className="promo-btn"
        >
          Claim Offer
        </a>
      </div>

      <div className="side-menu-footer">
        <span className="city-pill">📍 Pandharpur Hub</span>
        <span className="status-pill">● Available 24/7</span>
      </div>
    </aside>
  );
}
