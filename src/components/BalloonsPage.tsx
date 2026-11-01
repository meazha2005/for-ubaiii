"use client";

import React, { useState } from "react";
import { sounds } from "@/lib/audio";
import confetti from "canvas-confetti";

interface BalloonsPageProps {
  onRedBalloonTap: () => void;
}

export default function BalloonsPage({ onRedBalloonTap }: BalloonsPageProps) {
  const [poppedRed, setPoppedRed] = useState(false);
  const [wigglingIndex, setWigglingIndex] = useState<number | null>(null);

  // Positions and properties for the green balloons filling the screen
  const greenBalloons = [
    // Top row
    { x: "6%", y: "4%", size: 68, delay: "0s", dur: "3.2s", color: "#22c55e", darkColor: "#15803d" },
    { x: "32%", y: "2%", size: 76, delay: "0.5s", dur: "3.8s", color: "#10b981", darkColor: "#047857" },
    { x: "62%", y: "5%", size: 70, delay: "0.2s", dur: "3.4s", color: "#16a34a", darkColor: "#14532d" },
    { x: "82%", y: "3%", size: 65, delay: "0.8s", dur: "4.1s", color: "#34d399", darkColor: "#059669" },
    
    // Upper-mid row
    { x: "2%", y: "17%", size: 75, delay: "0.3s", dur: "3.6s", color: "#15803d", darkColor: "#14532d" },
    { x: "25%", y: "15%", size: 82, delay: "0.7s", dur: "4.2s", color: "#22c55e", darkColor: "#15803d" },
    { x: "55%", y: "18%", size: 74, delay: "0.1s", dur: "3.5s", color: "#10b981", darkColor: "#065f46" },
    { x: "80%", y: "16%", size: 78, delay: "0.6s", dur: "3.9s", color: "#4ade80", darkColor: "#16a34a" },

    // Mid row (sides of red balloon)
    { x: "5%", y: "32%", size: 80, delay: "0.4s", dur: "3.7s", color: "#16a34a", darkColor: "#14532d" },
    { x: "78%", y: "31%", size: 84, delay: "0.9s", dur: "4.0s", color: "#22c55e", darkColor: "#15803d" },
    { x: "12%", y: "45%", size: 76, delay: "0.2s", dur: "3.3s", color: "#10b981", darkColor: "#047857" },
    { x: "82%", y: "46%", size: 72, delay: "0.8s", dur: "3.8s", color: "#34d399", darkColor: "#059669" },

    // Lower-mid row
    { x: "4%", y: "60%", size: 78, delay: "0.5s", dur: "3.6s", color: "#22c55e", darkColor: "#15803d" },
    { x: "28%", y: "62%", size: 80, delay: "0.1s", dur: "4.1s", color: "#16a34a", darkColor: "#14532d" },
    { x: "65%", y: "59%", size: 75, delay: "0.7s", dur: "3.5s", color: "#10b981", darkColor: "#047857" },
    { x: "84%", y: "63%", size: 70, delay: "0.3s", dur: "3.9s", color: "#4ade80", darkColor: "#15803d" },

    // Bottom row
    { x: "8%", y: "77%", size: 74, delay: "0.6s", dur: "3.7s", color: "#16a34a", darkColor: "#14532d" },
    { x: "35%", y: "79%", size: 82, delay: "0.2s", dur: "4.2s", color: "#22c55e", darkColor: "#15803d" },
    { x: "64%", y: "78%", size: 76, delay: "0.8s", dur: "3.4s", color: "#10b981", darkColor: "#065f46" },
    { x: "80%", y: "80%", size: 68, delay: "0.4s", dur: "3.8s", color: "#34d399", darkColor: "#059669" },
    
    // Extra filler balloons
    { x: "20%", y: "30%", size: 66, delay: "0.3s", dur: "3.5s", color: "#4ade80", darkColor: "#16a34a" },
    { x: "48%", y: "86%", size: 72, delay: "0.5s", dur: "3.9s", color: "#15803d", darkColor: "#14532d" },
  ];

  // The ONLY ONE RED BALLOON position: Right in the prime center area!
  const redBalloon = {
    x: "42%",
    y: "36%",
    size: 100, // Slightly bigger so it's super attractive and easy to tap
  };

  const handleGreenClick = (idx: number) => {
    sounds.playTap(400);
    setWigglingIndex(idx);
    setTimeout(() => setWigglingIndex(null), 500);
  };

  const handleRedClick = () => {
    sounds.playPop();
    setPoppedRed(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x: 0.5, y: 0.45 },
      colors: ["#ef4444", "#f87171", "#fee2e2", "#ffb3ba"],
    });

    setTimeout(() => {
      onRedBalloonTap();
    }, 400);
  };

  return (
    <div className="relative w-full h-[100dvh] sm:h-[820px] bg-gradient-to-b from-[#e8f7ee] via-[#f0fbf4] to-[#e6f4ea] overflow-hidden select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* GREEN BALLOONS (Filling the entire screen) */}
      {greenBalloons.map((b, idx) => (
        <div
          key={idx}
          onClick={() => handleGreenClick(idx)}
          className={`absolute cursor-pointer transition-transform duration-300 ${
            wigglingIndex === idx ? "scale-110 -rotate-6" : "hover:scale-105 active:scale-95"
          }`}
          style={{
            left: b.x,
            top: b.y,
            width: `${b.size}px`,
            height: `${b.size * 1.3}px`,
            animation: `floatSoft ${b.dur} ease-in-out infinite`,
            animationDelay: b.delay,
          }}
        >
          <svg viewBox="0 0 100 135" className="w-full h-full drop-shadow-md">
            <defs>
              <radialGradient id={`gGrad-${idx}`} cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#bbf7d0" />
                <stop offset="45%" stopColor={b.color} />
                <stop offset="100%" stopColor={b.darkColor} />
              </radialGradient>
            </defs>
            {/* Balloon Body */}
            <path
              d="M 50 10 C 22 10 12 36 12 62 C 12 88 35 106 47 110 L 46 116 L 54 116 L 53 110 C 65 106 88 88 88 62 C 88 36 78 10 50 10 Z"
              fill={`url(#gGrad-${idx})`}
            />
            {/* Glossy Reflection */}
            <ellipse
              cx="34"
              cy="34"
              rx="7"
              ry="16"
              fill="#FFFFFF"
              opacity="0.45"
              transform="rotate(-25 34 34)"
            />
            {/* Knot */}
            <polygon points="45,116 55,116 50,122" fill={b.darkColor} />
            {/* String */}
            <path d="M 50 122 Q 44 128 52 135" fill="none" stroke="#6b7280" strokeWidth="1.5" />
          </svg>
        </div>
      ))}

      {/* THE ONLY ONE RED BALLOON */}
      <div
        onClick={handleRedClick}
        className={`absolute z-30 cursor-pointer flex flex-col items-center transition-all duration-300 ${
          poppedRed ? "scale-150 opacity-0" : "hover:scale-105 active:scale-95"
        }`}
        style={{
          left: redBalloon.x,
          top: redBalloon.y,
          width: `${redBalloon.size}px`,
          height: `${redBalloon.size * 1.35}px`,
          animation: "floatSoft 2.8s ease-in-out infinite",
        }}
      >
        {/* Pulsing "Tap here" Tag above the balloon */}
        <div className="absolute -top-7 px-3 py-1 bg-red-600 text-white font-black text-xs xs:text-sm rounded-full shadow-lg border-2 border-white animate-bounce whitespace-nowrap">
          Tap here 👇
        </div>

        {/* Red Balloon SVG */}
        <svg viewBox="0 0 100 135" className="w-full h-full drop-shadow-[0_8px_16px_rgba(220,38,38,0.4)]">
          <defs>
            <radialGradient id="redGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#fca5a5" />
              <stop offset="40%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </radialGradient>
          </defs>

          {/* Balloon Body */}
          <path
            d="M 50 10 C 22 10 12 36 12 62 C 12 88 35 106 47 110 L 46 116 L 54 116 L 53 110 C 65 106 88 88 88 62 C 88 36 78 10 50 10 Z"
            fill="url(#redGrad)"
          />

          {/* Glossy shine */}
          <ellipse
            cx="34"
            cy="34"
            rx="8"
            ry="18"
            fill="#FFFFFF"
            opacity="0.55"
            transform="rotate(-25 34 34)"
          />

          {/* Knot */}
          <polygon points="45,116 55,116 50,122" fill="#7f1d1d" />

          {/* String */}
          <path d="M 50 122 Q 44 128 52 135" fill="none" stroke="#4b5563" strokeWidth="1.8" />
        </svg>
      </div>

    </div>
  );
}
