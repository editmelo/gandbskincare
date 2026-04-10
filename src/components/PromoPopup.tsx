"use client";

import { useState, useEffect } from "react";

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("gb-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setOpen(false);
    localStorage.setItem("gb-popup-dismissed", "true");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-espresso/60 animate-fade-in" onClick={handleClose} />
      <div className="relative bg-gradient-to-br from-cream to-light-beige border-[1.5px] border-warm-gold rounded-3xl p-10 max-w-md w-full text-center shadow-2xl shadow-warm-gold/20 animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-5 text-warm-gold text-xl leading-none hover:text-deep-bronze transition-colors"
        >
          &times;
        </button>
        <div className="w-14 h-14 rounded-full bg-warm-gold mx-auto mb-5 flex items-center justify-center">
          <span className="font-display text-xl text-white font-bold">G</span>
        </div>
        <h2 className="font-display text-2xl text-deep-bronze">
          Your glow is <span className="text-warm-gold italic">waiting</span>
        </h2>
        <p className="font-body text-sm text-deep-bronze/70 leading-relaxed mt-3 mb-6">
          Join the G&amp;B family and get a{" "}
          <strong className="text-warm-gold">free sample</strong> with your first order.
          Plus, skincare tips straight from Bryanne.
        </p>
        <input
          type="email"
          placeholder="Enter your email..."
          className="w-full bg-white border-[1.5px] border-warm-gold/25 rounded-xl px-5 py-3 text-sm font-body text-deep-bronze placeholder:text-deep-bronze/30 focus:outline-none focus:border-warm-gold transition-colors mb-3"
        />
        <button className="w-full btn-gold !rounded-xl !py-3.5">
          Claim My Free Sample
        </button>
        <p className="text-[10px] font-body text-warm-gold/40 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
