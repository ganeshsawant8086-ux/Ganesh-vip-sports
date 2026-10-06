import React from "react";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="vip-toast-banner">
      <div className="toast-icon">✨</div>
      <div className="toast-message">{toast}</div>
      <button className="toast-close-btn" onClick={onClose} aria-label="Close notification">
        ✕
      </button>
    </div>
  );
}
