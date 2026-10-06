import React, { useState } from "react";
import { getCartTotal } from "../controllers/cartController.js";

export default function CartDrawer({ isOpen, onClose, cart, onRemove, onClear }) {
  const [showCustomerPopup, setShowCustomerPopup] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    bookingDate: ""
  });
  const [formError, setFormError] = useState("");

  if (!isOpen) return null;

  const total = getCartTotal(cart);

  const handleOpenPopup = () => {
    if (cart.length === 0) return;
    setFormError("");
    setShowCustomerPopup(true);
  };

  const handleClosePopup = () => {
    setShowCustomerPopup(false);
    setFormError("");
  };

  const handleGenerateWhatsApp = (e) => {
    e.preventDefault();

    const { firstName, lastName, mobile, bookingDate } = customerDetails;

    if (!firstName.trim()) {
      setFormError("Please enter your First Name.");
      return;
    }
    if (!lastName.trim()) {
      setFormError("Please enter your Last Name.");
      return;
    }
    if (!mobile.trim() || mobile.trim().length < 10) {
      setFormError("Please enter a valid 10-digit Mobile Number.");
      return;
    }

    // Auto-generate detailed WhatsApp message
    const itemsSummary = cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.title || item.name} (Qty: ${item.quantity || 1}) - ₹${(
            (item.rate || 0) * (item.quantity || 1)
          ).toLocaleString("en-IN")}`
      )
      .join("\n");

    const fullName = `${firstName.trim()} ${lastName.trim()}`;

    const message = `🏎️ *GANESH VIP SPORTS - BOOKING ENQUIRY*

👤 *Customer Details:*
• *Name:* ${fullName}
• *Mobile Number:* ${mobile.trim()}
${bookingDate ? `• *Preferred Date:* ${bookingDate}\n` : ""}
🚗 *Selected VIP Vehicle(s):*
${itemsSummary}

💰 *Estimated Total Rate:* ₹${total.toLocaleString("en-IN")}
📍 *Location:* Pandharpur, Maharashtra

Hello Ganesh Sawant, I would like to confirm vehicle availability and booking details for my event.`;

    const waUrl = `https://wa.me/918668811021?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    setShowCustomerPopup(false);
  };

  return (
    <>
      <div className="cart-drawer-overlay" onClick={onClose}>
        <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
          <div className="cart-drawer-header">
            <div className="cart-header-title-wrap">
              <span className="cart-icon-big">🛒</span>
              <div>
                <h3>VIP Booking Basket</h3>
                <p>
                  {cart.length} item{cart.length === 1 ? "" : "s"} selected
                </p>
              </div>
            </div>
            <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
              ✕
            </button>
          </div>

          <div className="cart-drawer-body">
            {cart.length === 0 ? (
              <div className="cart-empty-state">
                <span className="empty-cart-icon">🏎️</span>
                <h4>Your Booking Basket is Empty</h4>
                <p>
                  Explore our exotic fleet and add cars or services to calculate quotes and reserve dates.
                </p>
                <button
                  className="btn-browse-fleet"
                  onClick={() => {
                    onClose();
                    const fleetElem = document.getElementById("fleet");
                    if (fleetElem) fleetElem.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Browse VIP Supercars
                </button>
              </div>
            ) : (
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div className="cart-item-card" key={item.id}>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title || item.name}
                        className="cart-item-img"
                      />
                    )}
                    <div className="cart-item-details">
                      <span className="cart-item-cat">{item.category || "VIP Vehicle"}</span>
                      <h4 className="cart-item-title">{item.title || item.name}</h4>
                      <div className="cart-item-price-row">
                        <span className="cart-item-rate">
                          ₹{(item.rate || 25000).toLocaleString("en-IN")}
                          {item.quantity > 1 && ` × ${item.quantity}`}
                        </span>
                        <button
                          className="cart-remove-item-btn"
                          onClick={() => onRemove(item.id)}
                          title="Remove item"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-drawer-footer">
              <div className="cart-total-box">
                <span className="total-label">Estimated Total Rate</span>
                <span className="total-value">₹{total.toLocaleString("en-IN")}</span>
              </div>

              <p className="cart-guarantee-note">
                🔒 No advance payment required online. Direct confirmation with Ganesh Sawant.
              </p>

              {/* Click to open Customer Details Popup */}
              <button className="btn-wa-confirm" onClick={handleOpenPopup}>
                <span>💬 Confirm via WhatsApp</span>
                <span>→</span>
              </button>

              <div className="cart-secondary-actions">
                <a href="tel:+918668811021" className="btn-call-cart">
                  📞 Call: 8668811021
                </a>
                <button className="btn-clear-cart" onClick={onClear}>
                  Clear Basket
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* POPUP MODAL: Customer Details before WhatsApp Auto-Generated SMS */}
      {showCustomerPopup && (
        <div className="customer-modal-backdrop" onClick={handleClosePopup}>
          <div className="customer-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top-bar">
              <div className="modal-title-wrap">
                <span className="modal-badge-icon">👑</span>
                <div>
                  <h3 className="modal-headline">VIP Booking Details</h3>
                  <p className="modal-subheadline">
                    Please provide your contact information to generate your WhatsApp confirmation request.
                  </p>
                </div>
              </div>
              <button
                className="modal-close-button"
                onClick={handleClosePopup}
                aria-label="Close popup"
              >
                ✕
              </button>
            </div>

            {/* Quick Basket Preview Pill */}
            <div className="modal-basket-summary">
              <div className="modal-summary-left">
                <span className="summary-label">Vehicles Selected:</span>
                <strong className="summary-cars">
                  {cart.map((c) => c.title || c.name).join(", ")}
                </strong>
              </div>
              <div className="modal-summary-right">
                <span className="summary-total-price">₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {formError && <div className="modal-error-alert">⚠️ {formError}</div>}

            <form onSubmit={handleGenerateWhatsApp} className="customer-modal-form">
              <div className="form-row-dual">
                <div className="modal-field-group">
                  <label htmlFor="popup-first-name">
                    First Name <span className="req-star">*</span>
                  </label>
                  <input
                    id="popup-first-name"
                    type="text"
                    placeholder="e.g. Ganesh"
                    value={customerDetails.firstName}
                    onChange={(e) =>
                      setCustomerDetails({ ...customerDetails, firstName: e.target.value })
                    }
                    autoFocus
                    required
                  />
                </div>

                <div className="modal-field-group">
                  <label htmlFor="popup-last-name">
                    Last Name <span className="req-star">*</span>
                  </label>
                  <input
                    id="popup-last-name"
                    type="text"
                    placeholder="e.g. Sawant"
                    value={customerDetails.lastName}
                    onChange={(e) =>
                      setCustomerDetails({ ...customerDetails, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="modal-field-group">
                <label htmlFor="popup-mobile">
                  Mobile Number (WhatsApp) <span className="req-star">*</span>
                </label>
                <div className="mobile-input-wrap">
                  <span className="country-code-pill">+91</span>
                  <input
                    id="popup-mobile"
                    type="tel"
                    placeholder="98765 43210"
                    maxLength={10}
                    value={customerDetails.mobile}
                    onChange={(e) =>
                      setCustomerDetails({
                        ...customerDetails,
                        mobile: e.target.value.replace(/\D/g, "")
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="modal-field-group">
                <label htmlFor="popup-date">Booking Date (Optional)</label>
                <input
                  id="popup-date"
                  type="date"
                  value={customerDetails.bookingDate}
                  onChange={(e) =>
                    setCustomerDetails({ ...customerDetails, bookingDate: e.target.value })
                  }
                />
              </div>

              <div className="modal-actions-footer">
                <button
                  type="button"
                  className="btn-modal-cancel"
                  onClick={handleClosePopup}
                >
                  Back to Basket
                </button>
                <button type="submit" className="btn-modal-submit-wa">
                  <span>Next Step → Send on WhatsApp</span>
                  <span className="wa-icon-glow">💬</span>
                </button>
              </div>
            </form>

            <div className="modal-footer-note">
              <span>🔒 Direct chat with Ganesh Sawant • Pandharpur Hub (+91 8668811021)</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
