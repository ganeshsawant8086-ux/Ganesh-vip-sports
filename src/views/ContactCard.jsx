import React, { useState } from "react";

export default function ContactCard({ onToast }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Wedding Entry",
    date: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      if (onToast) onToast("Please enter your name and contact number.");
      return;
    }

    setIsSubmitting(true);
    const message = `Hello Ganesh Sawant, I would like to book a VIP Sports Car in Pandharpur.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.serviceType}\nDate: ${formData.date || "Not specified"}`;
    const waUrl = `https://wa.me/+918668811021?text=${encodeURIComponent(message)}`;

    if (onToast) {
      onToast(`Redirecting to WhatsApp to send booking request...`);
    }

    window.open(waUrl, "_blank");
    setIsSubmitting(false);
  };

  return (
    <aside className="contact-card" id="contact">
      <div className="contact-card-header">
        <span className="section-label">VIP Concierge & Booking</span>
        <h2 className="contact-founder-title">Ganesh Sawant</h2>
        <span className="contact-location-tag">📍 Pandharpur, Maharashtra</span>
      </div>

      <div className="direct-call-box">
        <span className="call-sub">Direct Line & 24/7 Helpline</span>
        <a className="phone-link" href="tel:+918668811021">
          +91 8668811021
        </a>
        <div className="contact-quick-buttons">
          <a className="primary-action call-btn" href="tel:+918668811021">
            <span>📞 Call Now</span>
          </a>
          <a
            className="primary-action wa-btn"
            href="https://wa.me/+z918668811021?text=Hello%20Ganesh%20Sawant,%20I%20want%20to%20enquire%20about%20booking%20a%20VIP%20Sports%20car."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💬 WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Fast Booking Form */}
      <div className="fast-booking-form-box">
        <p className="form-heading">Quick VIP Booking Request</p>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="customer-name">Your Full Name</label>
            <input
              id="customer-name"
              type="text"
              placeholder="e.g. Rahul Patil"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="customer-phone">Phone / WhatsApp</label>
            <input
              id="customer-phone"
              type="tel"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service-type">Occasion / Service</label>
            <select
              id="service-type"
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            >
              <option value="Wedding Entry">Grand Wedding Entry</option>
              <option value="Pre-Wedding Shoot">Pre-Wedding / Reel Shoot</option>
              <option value="VIP Celebrity Escort">VIP & Celebrity Escort</option>
              <option value="Birthday Celebration">Birthday & Milestone Drive</option>
              <option value="Self-Drive Rental">Self-Drive Luxury Cruise</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="booking-date">Preferred Date</label>
            <input
              id="booking-date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <button type="submit" className="btn-submit-booking" disabled={isSubmitting}>
            <span>🚀 Send VIP Inquiry</span>
          </button>
        </form>
      </div>

      <div className="contact-perks-box">
        <div className="perk-row">
          <span className="perk-dot">✓</span>
          <span>Zero Booking Advance for Inquiries</span>
        </div>
        <div className="perk-row">
          <span className="perk-dot">✓</span>
          <span>Pandharpur, Solapur & Statewide Escort</span>
        </div>
        <div className="perk-row">
          <span className="perk-dot">✓</span>
          <span>Verified & Polished Supercars</span>
        </div>
      </div>
    </aside>
  );
}
