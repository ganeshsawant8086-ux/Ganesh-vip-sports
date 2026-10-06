import React from "react";

export default function About() {
  const services = [
    {
      icon: "💍",
      title: "Royal Wedding Entries",
      desc: "Turn your special day into a grand spectacle. Make a breathtaking groom or bride entry with roaring supercar presence and custom floral decorations."
    },
    {
      icon: "🎬",
      title: "Cinematic & Reel Shoots",
      desc: "Perfect for music videos, YouTube content, high-fashion photoshoots, and pre-wedding films. Hourly shoot packages available on location."
    },
    {
      icon: "👑",
      title: "VIP Celebrity & Guest Escort",
      desc: "Premium chauffeur-driven convoy for dignitaries, influencers, and corporate leaders with punctual, professional VIP service."
    },
    {
      icon: "🏁",
      title: "Milestone & Birthday Drives",
      desc: "Celebrate birthdays, anniversaries, and personal milestones behind the wheel of a Ferrari, Mustang, or Lamborghini."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-header-grid">
        <div className="about-header-text">
          <span className="section-label">The VIP Sports Legacy</span>
          <h2 className="section-title">Maharashtra's Leading Supercar Authority</h2>
          <p className="about-intro-p">
            Founded in Pandharpur by <strong>Ganesh Sawant</strong>, <em>Ganesh VIP Sports</em> bridges the gap
            between dream supercars and unforgettable real-life moments. We specialize in providing the finest
            fleet of exotic sports cars and luxury vehicles for weddings, cinematic productions, and VIP celebrations.
          </p>
        </div>

        <div className="about-founder-badge">
          <div className="founder-avatar">GS</div>
          <div>
            <h4 className="founder-name">Ganesh Sawant</h4>
            <span className="founder-role">Founder & VIP Fleet Director</span>
            <span className="founder-location">📍 Pandharpur, Maharashtra</span>
          </div>
        </div>
      </div>

      {/* 4 Core VIP Services */}
      <div className="vip-services-grid" id="vip-services">
        {services.map((s, index) => (
          <div className="vip-service-card" key={index}>
            <div className="service-icon-bubble">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Trust guarantees bar */}
      <div className="trust-guarantees-strip">
        <div className="trust-item">
          <span className="trust-icon">🛡️</span>
          <div>
            <strong>100% Insured Fleet</strong>
            <p>Complete safety, verified papers, and flawless condition</p>
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-icon">🚚</span>
          <div>
            <strong>Doorstep Delivery</strong>
            <p>Direct delivery to your doorstep in Pandharpur & Solapur</p>
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-icon">⚡</span>
          <div>
            <strong>Instant Coordination</strong>
            <p>Direct communication with Ganesh Sawant: 8668811021</p>
          </div>
        </div>
      </div>
    </section>
  );
}
