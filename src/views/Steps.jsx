import React from "react";

export default function Steps({ steps }) {
  return (
    <section className="steps-section" id="steps">
      <div className="section-header-wrap">
        <div>
          <span className="section-label">Seamless Experience</span>
          <h2 className="section-title">How To Book In 4 Simple Steps</h2>
          <p className="section-subtitle">
            From car selection to royal delivery at your doorstep in Pandharpur, our concierge makes the process swift and effortless.
          </p>
        </div>
      </div>

      <div className="steps-cards-grid">
        {steps &&
          steps.map((step, idx) => (
            <div className="step-card" key={step.id || idx}>
              <div className="step-top-row">
                <span className="step-number">{step.stepNumber || `0${idx + 1}`}</span>
                <span className="step-icon">{step.icon || "🏁"}</span>
              </div>
              {step.badge && <span className="step-badge">{step.badge}</span>}
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
      </div>

      <div className="steps-cta-bar">
        <div className="steps-cta-text">
          <strong>Ready for the ride of your life?</strong>
          <span>Lock your dates before slots fill up for the upcoming wedding season.</span>
        </div>
        <a href="#contact" className="btn-steps-action">
          Book With Ganesh Sawant →
        </a>
      </div>
    </section>
  );
}
