import React, { useState } from "react";
import "./App.css";
import Header from "./views/Header.jsx";
import SideMenu from "./views/SideMenu.jsx";
import Hero from "./views/Hero.jsx";
import FleetShowcase from "./views/FleetShowcase.jsx";
import About from "./views/About.jsx";
import Specs from "./views/Specs.jsx";
import Steps from "./views/Steps.jsx";
import ContactCard from "./views/ContactCard.jsx";
import CartDrawer from "./views/CartDrawer.jsx";
import Toast from "./views/Toast.jsx";
import { specifications } from "./modules/specifications.js";
import { steps } from "./modules/steps.js";
import { addToCart, removeFromCart, clearCart } from "./controllers/cartController.js";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleBook = (item) => {
    const updated = addToCart(cart, item);
    setCart(updated);
    showToast(`Added ${item.title || item.name || item.value} to your booking basket!`);
  };

  const handleRemove = (itemId) => {
    const updated = removeFromCart(cart, itemId);
    setCart(updated);
    showToast("Item removed from booking basket.");
  };

  const handleClear = () => {
    setCart(clearCart());
    showToast("Booking basket cleared.");
  };

  return (
    <div className="page-shell">
      {/* Dynamic VIP Header */}
      <Header cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Grid Layout */}
      <main className="main-layout" id="home">
        {/* Left Side Navigation & Quick Promo */}
        <SideMenu />

        {/* Central Luxury Content Stream */}
        <section className="content-panel">
          <Hero onQuickBook={handleBook} />
          <FleetShowcase onBook={handleBook} />
          <About />
          <Specs specifications={specifications} onBook={handleBook} />
          <Steps steps={steps} />
        </section>

        {/* Right Sticky VIP Concierge & Booking Desk */}
        <ContactCard onToast={showToast} />
      </main>

      {/* Interactive Cart Slide-Over / Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={handleRemove}
        onClear={handleClear}
      />

      {/* Toast Notification Alert */}
      <Toast toast={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="mobile-sticky-action-bar">
        <a href="tel:+918668811021" className="mobile-bar-action call">
          <span>📞</span>
          <span>Call Ganesh</span>
        </a>
        <button
          className="mobile-bar-action cart"
          onClick={() => setIsCartOpen(true)}
        >
          <span>🛒 Basket ({cart.length})</span>
        </button>
        <a
          href="https://wa.me/918668811021?text=Hello%20Ganesh%20Sawant,%20I%20want%20to%20enquire%20about%20booking%20a%20VIP%20Sports%20car."
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-action wa"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Luxury Footer */}
      <footer className="site-footer">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="brand-logo-small">G</span>
            <div>
              <h3>Ganesh VIP Sports</h3>
              <p>Pandharpur, Maharashtra • Solapur District</p>
            </div>
          </div>
          <div className="footer-direct-contact">
            <span>Direct Concierge: </span>
            <a href="tel:+918668811021"><strong>+91 8668811021 (Ganesh Sawant)</strong></a>
          </div>
        </div>
        <div className="footer-bottom-row">
          <p>© {new Date().getFullYear()} Ganesh VIP Sports. All Rights Reserved. Luxury Supercar Rental & VIP Escort.</p>
          <div className="footer-tags">
            <span>Weddings</span> • <span>Shoots</span> • <span>VIP Entries</span> • <span>Supercars</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
