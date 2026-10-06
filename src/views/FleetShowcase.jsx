import React, { useState } from "react";
import { fleet } from "../modules/fleet.js";

function FleetShowcase({ onBook, onSelectCar }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Supercar", "Muscle", "Convertible", "Luxury SUV"];

  const filteredFleet =
    selectedCategory === "All"
      ? fleet
      : fleet.filter((car) => car.category === selectedCategory);

  const getWhatsAppCarUrl = (carName) => {
    return `https://wa.me/918668811021?text=${encodeURIComponent(
      `Hello Ganesh Sawant, I would like to book the ${carName} for my event in Pandharpur.`
    )}`;
  };

  return (
    <section className="fleet-section" id="fleet">
      <div className="section-header-wrap">
        <div>
          <span className="section-label">VIP Garage Collection</span>
          <h2 className="section-title">The Elite Sports Car Fleet</h2>
          <p className="section-subtitle">
            Hand-selected, meticulously maintained exotic supercars engineered for supreme performance and breathtaking aesthetics.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="category-filter-nav" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-pill-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet Grid */}
      <div className="fleet-cards-grid">
        {filteredFleet.map((car) => (
          <article className="supercar-card" key={car.id}>
            <div className="card-image-wrap">
              <img
                src={car.image}
                alt={car.name}
                loading="lazy"
                className="supercar-img"
              />
              <span className="card-tag-badge">{car.tag}</span>
              <span className="card-cat-badge">{car.category}</span>
            </div>

            <div className="card-content">
              <div className="card-title-row">
                <h3 className="car-name">{car.name}</h3>
                <span className="car-brand">{car.brand}</span>
              </div>

              <p className="car-brief">{car.description}</p>

              {/* Fast Spec Badges */}
              <div className="car-specs-strip">
                <div className="spec-item">
                  <span className="spec-label">Power</span>
                  <span className="spec-val">{car.power}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">0-100</span>
                  <span className="spec-val">{car.acceleration}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Top Speed</span>
                  <span className="spec-val">{car.topSpeed}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Engine</span>
                  <span className="spec-val">{car.engine.split(" ")[0]}</span>
                </div>
              </div>

              {/* Pricing & Booking Row */}
              <div className="card-footer-row">
                <div className="price-stack">
                  <span className="price-currency">From</span>
                  <div className="price-amount">
                    ₹{car.dailyRate.toLocaleString("en-IN")}
                    <span className="price-unit">/day</span>
                  </div>
                  <span className="hourly-hint">₹{car.hourlyRate.toLocaleString("en-IN")}/hr for shoots</span>
                </div>

                <div className="card-btn-actions">
                  <button
                    className="btn-book-action"
                    onClick={() =>
                      onBook({
                        id: car.id,
                        name: car.name,
                        title: car.name,
                        value: car.name,
                        dailyRate: car.dailyRate,
                        image: car.image,
                        category: car.category
                      })
                    }
                  >
                    ⚡ Book Now
                  </button>

                  <a
                    href={getWhatsAppCarUrl(car.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa-icon"
                    title={`WhatsApp enquiry for ${car.name}`}
                  >
                    💬
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FleetShowcase;
