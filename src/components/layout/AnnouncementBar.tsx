"use client";

import { useState, useEffect } from "react";

const messages = [
  "Free sample with your first order",
  "Natural ingredients, real results",
  "Skincare guided by a specialist",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % messages.length);
        setVisible(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-warm-gold text-white text-center py-2 relative z-50">
      <p
        className={`text-xs font-body tracking-wider transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {messages[index]}
      </p>
    </div>
  );
}
