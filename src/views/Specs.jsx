import React, { useState } from "react";
import { fleet } from "../modules/fleet.js";

export default function Specs({ specifications, onBook }) {
  const [activeCarId, setActiveCarId] = useState(fleet[0]?.id || "ferrari-f8");

  const activeCar = fleet.find((c) => c.id === activeCarId) || fleet[0];

  return (
    <section id="car-details" className="spec-section">
      <div className="section-header-wrap">
        <div>
          <span className="section-label">Technical Mastery</span>
          <h2 className="section-title">High Performance Specifications</h2>
          <p className="section-subtitle">
            Engineered without compromise. Explore the mechanical prowess and track dynamics of our VIP vehicles.
          </p>
        </div>
      </div>

      {/* Interactive Car Selector for Live Specs */}
      <div className="specs-car-selector">
        {fleet.map((car) => (
          <button
            key={car.id}
            className={`car-select-chip ${activeCarId === car.id ? "active" : ""}`}
            onClick={() => setActiveCarId(car.id)}
          >
            <span className="chip-brand">{car.brand}</span>
            <span className="chip-name">{car.name.replace(car.brand, "").trim()}</span>
          </button>
        ))}
      </div>

      {/* Featured Dynamic Spec Showcase */}
      {activeCar && (
        <div className="featured-spec-banner">
          <div className="featured-spec-img-box">
            <img src={activeCar.image} alt={activeCar.name} className="featured-spec-img" />
            <div className="featured-spec-badge">{activeCar.tag}</div>
          </div>

          <div className="featured-spec-details">
            <div className="spec-car-header">
              <div>
                <span className="spec-eyebrow">{activeCar.category}</span>
                <h3 className="spec-car-title">{activeCar.name}</h3>
              </div>
              <div className="spec-price-tag">
                ₹{activeCar.dailyRate.toLocaleString("en-IN")}<small>/day</small>
              </div>
            </div>

            <p className="spec-car-desc">{activeCar.description}</p>

            {/* Matrix of technical telemetry */}
            <div className="telemetry-grid">
              <div className="telemetry-box">
                <span className="tel-label">Power Output</span>
                <span className="tel-value">{activeCar.power}</span>
                <span className="tel-sub">Horsepower</span>
              </div>
              <div className="telemetry-box">
                <span className="tel-label">Acceleration</span>
                <span className="tel-value">{activeCar.acceleration}</span>
                <span className="tel-sub">0 to 100 km/h</span>
              </div>
              <div className="telemetry-box">
                <span className="tel-label">Top Velocity</span>
                <span className="tel-value">{activeCar.topSpeed}</span>
                <span className="tel-sub">Track Velocity</span>
              </div>
              <div className="telemetry-box">
                <span className="tel-label">Engine Block</span>
                <span className="tel-value">{activeCar.engine}</span>
                <span className="tel-sub">Powertrain</span>
              </div>
              <div className="telemetry-box">
                <span className="tel-label">Gearbox</span>
                <span className="tel-value">{activeCar.transmission}</span>
                <span className="tel-sub">Shift Speed: 50ms</span>
              </div>
              <div className="telemetry-box">
                <span className="tel-label">Capacity</span>
                <span className="tel-value">{activeCar.seats}</span>
                <span className="tel-sub">VIP Luxury Cabin</span>
              </div>
            </div>

            <div className="spec-action-row">
              <button
                className="btn-primary-spec"
                onClick={() =>
                  onBook &&
                  onBook({
                    id: activeCar.id,
                    name: activeCar.name,
                    title: activeCar.name,
                    value: activeCar.name,
                    dailyRate: activeCar.dailyRate,
                    image: activeCar.image,
                    category: activeCar.category
                  })
                }
              >
                <span>Book This Machine</span>
                <span>⚡</span>
              </button>

              <a
                href={`https://wa.me/918668811021?text=${encodeURIComponent(
                  `Hello Ganesh Sawant, I am interested in technical booking for ${activeCar.name} in Pandharpur.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-spec"
              >
                <span>WhatsApp Ganesh</span>
                <span>💬</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* General Standards Specification Grid */}
      <div className="general-standards-wrap">
        <h3 className="sub-section-title">Standard VIP Fleet Specifications & Amenities</h3>
        <div className="spec-grid">
          {specifications &&
            specifications.map((item, idx) => (
              <article className="spec-card" key={item.id || item.label || idx}>
                <div className="spec-card-top">
                  <span className="spec-icon">{item.icon || "🏎️"}</span>
                  <span className="spec-label">{item.label}</span>
                </div>
                <strong className="spec-value">{item.value}</strong>
                {item.highlight && <span className="spec-highlight">{item.highlight}</span>}
                {item.description && <p className="spec-desc">{item.description}</p>}
                {onBook && (
                  <button
                    className="spec-quick-book-btn"
                    onClick={() =>
                      onBook({
                        id: item.id || `spec-${idx}`,
                        name: item.value,
                        title: `${item.label}: ${item.value}`,
                        value: item.value,
                        dailyRate: 25000,
                        category: "VIP Specification"
                      })
                    }
                  >
                    + Add to Enquiry Cart
                  </button>
                )}
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
