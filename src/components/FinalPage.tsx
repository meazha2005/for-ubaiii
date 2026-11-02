"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { sounds } from "@/lib/audio";
import { RefreshCw, Sparkles, ChevronRight } from "lucide-react";

interface FinalPageProps {
  onNext: () => void;
  onRestart: () => void;
}

export default function FinalPage({ onNext, onRestart }: FinalPageProps) {
  // Meter starts at 0% (or increases by 20% on each tap up to 100%)
  const [meter, setMeter] = useState<number>(0);
  const [tapEffect, setTapEffect] = useState<boolean>(false);
  const isForgiven = meter >= 100;

  const handleTap = () => {
    if (meter >= 100) {
      // Already 100%, trigger playful mini celebration
      sounds.playTap(900);
      return;
    }

    const nextMeter = Math.min(meter + 20, 100);
    setMeter(nextMeter);

    // Audio pitch scales with progress: 420Hz -> 540Hz -> 660Hz -> 780Hz -> 900Hz
    const pitch = 400 + (nextMeter / 20) * 100;
    sounds.playTap(pitch);

    // Tap pulse animation
    setTapEffect(true);
    setTimeout(() => setTapEffect(false), 250);

    // If 100% reached, celebratory explosion!
    if (nextMeter === 100) {
      setTimeout(() => {
        sounds.playMelody();
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ff5e79", "#fbbf24", "#38bdf8", "#34d399", "#c084fc"],
        });
      }, 150);
    }
  };

  return (
    <div
      className="relative w-full h-[100dvh] sm:h-[820px] max-h-[100dvh] sm:max-h-[880px] bg-gradient-to-b from-[#fdecee] via-[#fff5f6] to-[#ebf3fc] flex flex-col justify-between items-center p-3.5 sm:p-5 overflow-y-auto overscroll-contain select-none animate-pop text-center"
      style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
    >
      {/* ================= TOP PILL BANNER ================= */}
      <div className="w-full max-w-[370px] bg-white rounded-2xl py-2.5 px-4 shadow-[0_8px_22px_rgba(230,170,185,0.28)] border border-pink-100/90 text-center shrink-0">
        <h1 className="text-sm sm:text-base font-black text-[#1e293b] leading-snug">
          A forgiveness meter —
        </h1>
        <p className="text-sm sm:text-base font-black text-[#ff5e79] leading-snug">
          every tap heals a little
        </p>
      </div>

      {/* ================= MAIN WHITE CARD ================= */}
      <div className="w-full max-w-[370px] bg-white rounded-[32px] shadow-[0_18px_45px_rgba(230,170,185,0.35)] p-4 sm:p-5 my-2 flex flex-col items-center border border-pink-100/90 shrink-0">
        
        {/* Sub-header: FORGIVENESS METER with Moon */}
        <div className="flex items-center gap-1.5 text-[#ff8fa3] font-black text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-1">
          <span>FORGIVENESS METER</span>
          {/* Moon Icon in header */}
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#ff8fa3] text-[#ff8fa3]" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
          </svg>
        </div>

        {/* Center Illustration: Kawaii Cat holding "SORRY" sign with aura */}
        <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center my-0.5">
          {/* Soft circular aura behind cat */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-b from-[#fff1f3] to-[#ffe4e9] opacity-80 blur-xs" />

          {/* Cute Cat SVG */}
          <svg viewBox="0 0 180 180" className="w-full h-full relative z-10 drop-shadow-sm">
            <defs>
              <linearGradient id="catBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FFF5EC" />
              </linearGradient>
              <linearGradient id="signWoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF9F5" />
                <stop offset="100%" stopColor="#FFEADB" />
              </linearGradient>
            </defs>

            {/* Cat Ears */}
            <path d="M 44 58 C 32 26 55 16 70 42 Z" fill="url(#catBodyGrad)" stroke="#4A3439" strokeWidth="2.5" />
            <path d="M 50 54 C 42 33 54 26 64 43 Z" fill="#FFB8C6" />
            <path d="M 124 58 C 136 26 113 16 98 42 Z" fill="url(#catBodyGrad)" stroke="#4A3439" strokeWidth="2.5" />
            <path d="M 118 54 C 126 33 114 26 104 43 Z" fill="#FFB8C6" />

            {/* Cat Body */}
            <path
              d="M 52 108 C 42 135 48 160 84 162 C 120 162 126 135 116 108 Z"
              fill="url(#catBodyGrad)"
              stroke="#4A3439"
              strokeWidth="2.5"
            />
            {/* Soft tummy shadow */}
            <ellipse cx="84" cy="140" rx="26" ry="16" fill="#FFEAE8" opacity="0.6" />

            {/* Cat Head */}
            <path
              d="M 36 74 C 24 100 46 118 84 118 C 122 118 144 100 132 74 C 124 46 106 40 84 40 C 62 40 44 46 36 74 Z"
              fill="url(#catBodyGrad)"
              stroke="#4A3439"
              strokeWidth="2.5"
            />

            {/* Blushing Cheeks */}
            <ellipse cx="50" cy="88" rx="8" ry="5.5" fill="#FF8FA3" opacity={isForgiven ? 0.9 : 0.75} />
            <ellipse cx="118" cy="88" rx="8" ry="5.5" fill="#FF8FA3" opacity={isForgiven ? 0.9 : 0.75} />

            {/* Whiskers */}
            <line x1="40" y1="84" x2="22" y2="82" stroke="#4A3439" strokeWidth="2" strokeLinecap="round" />
            <line x1="38" y1="90" x2="20" y2="92" stroke="#4A3439" strokeWidth="2" strokeLinecap="round" />
            <line x1="128" y1="84" x2="146" y2="82" stroke="#4A3439" strokeWidth="2" strokeLinecap="round" />
            <line x1="130" y1="90" x2="148" y2="92" stroke="#4A3439" strokeWidth="2" strokeLinecap="round" />

            {/* Eyes */}
            {isForgiven ? (
              // Joyful smiling eyes (^ ^)
              <g stroke="#96374e" strokeWidth="3.2" strokeLinecap="round">
                <path d="M 54 80 Q 64 71 74 80" fill="none" />
                <path d="M 94 80 Q 104 71 114 80" fill="none" />
              </g>
            ) : (
              // Pleading sad eyes
              <g>
                {/* Sad angled eyebrows */}
                <path d="M 52 69 Q 62 65 72 70" fill="none" stroke="#4A3439" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 116 69 Q 106 65 96 70" fill="none" stroke="#4A3439" strokeWidth="2.2" strokeLinecap="round" />
                {/* Big shiny pleading pupils */}
                <ellipse cx="64" cy="78" rx="7.5" ry="10" fill="#2E1C21" />
                <circle cx="61.5" cy="74.5" r="3.5" fill="#FFFFFF" />
                <circle cx="66" cy="81" r="1.8" fill="#FFFFFF" />
                <ellipse cx="104" cy="78" rx="7.5" ry="10" fill="#2E1C21" />
                <circle cx="101.5" cy="74.5" r="3.5" fill="#FFFFFF" />
                <circle cx="106" cy="81" r="1.8" fill="#FFFFFF" />
              </g>
            )}

            {/* Nose & Mouth */}
            <polygon points="81,84 87,84 84,87" fill="#FF758C" />
            {isForgiven ? (
              // Big Happy Open Smile
              <path d="M 78 90 Q 84 98 90 90" fill="#FF8FA3" stroke="#4A3439" strokeWidth="2.2" strokeLinecap="round" />
            ) : (
              // Sad downward mouth curve
              <path d="M 80 92 Q 84 88 88 92" fill="none" stroke="#4A3439" strokeWidth="2.2" strokeLinecap="round" />
            )}

            {/* Left Cat Paw */}
            <ellipse cx="58" cy="118" rx="8" ry="7" fill="url(#catBodyGrad)" stroke="#4A3439" strokeWidth="2" />

            {/* Right Cat Paw holding the wooden stick */}
            <line x1="126" y1="65" x2="123" y2="128" stroke="#D1A077" strokeWidth="4.5" strokeLinecap="round" />
            <ellipse cx="123" cy="116" rx="8" ry="7" fill="url(#catBodyGrad)" stroke="#4A3439" strokeWidth="2" />

            {/* The Placard / Sign: "SORRY" or "FORGIVEN!" */}
            <rect
              x="110"
              y="40"
              width="62"
              height="36"
              rx="7"
              fill="url(#signWoodGrad)"
              stroke="#E08B9B"
              strokeWidth="2.2"
              filter="drop-shadow(0 3px 6px rgba(224,139,155,0.25))"
            />
            <text
              x="141"
              y="63"
              textAnchor="middle"
              fill="#E0536C"
              fontSize={isForgiven ? "10.5" : "13"}
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              letterSpacing="0.08em"
            >
              {isForgiven ? "FORGIVEN!" : "SORRY"}
            </text>
          </svg>
        </div>

        {/* ================= THE FORGIVENESS METER WITH MOON ================= */}
        <div className="w-full my-2.5">
          {/* Outer pill track */}
          <div className="relative w-full h-11 bg-[#fff8fa] rounded-full p-1 border-2 border-pink-100/90 shadow-inner flex items-center overflow-hidden">
            
            {/* Animated Fill Slider */}
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#ff8fa3] via-[#ff6b8b] to-[#ff5277] transition-all duration-300 ease-out flex items-center justify-end pr-1.5 shadow-sm"
              style={{
                width: meter === 0 ? "0%" : `${Math.max(meter, 15)}%`,
              }}
            >
              {/* Moon Icon inside the meter fill */}
              {meter > 0 && (
                <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-xs flex items-center justify-center shrink-0 shadow-xs animate-pop">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white text-white drop-shadow-xs" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>

            {/* Meter Center Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span
                className={`font-black text-xs sm:text-[13px] tracking-wider uppercase transition-colors duration-300 ${
                  meter >= 60 ? "text-white drop-shadow-xs" : "text-[#ff5e79]"
                }`}
              >
                {meter}% FORGIVEN
              </span>
            </div>
          </div>
        </div>

        {/* Prompt Text below Meter */}
        <p className="text-[11px] sm:text-xs font-black tracking-wider text-[#ff5e79] uppercase my-1">
          {isForgiven
            ? "100% FORGIVEN! YOU HEALED LUSU 🌸"
            : "TAP THE CAT. EACH TAP HEALS A LITTLE."}
        </p>

        {/* ================= BIG CIRCULAR CAT TAP BUTTON ================= */}
        <div className="my-2 flex flex-col items-center">
          <button
            type="button"
            onClick={handleTap}
            aria-label="Tap the cat to forgive"
            className={`w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-b from-[#ff758c] to-[#ff5277] shadow-[0_12px_28px_rgba(255,94,121,0.45)] hover:shadow-[0_14px_32px_rgba(255,94,121,0.55)] active:scale-90 flex items-center justify-center cursor-pointer transition-transform duration-150 select-none ${
              tapEffect ? "scale-95" : "hover:scale-105"
            }`}
          >
            {/* Cute White Cat Face inside the button (Replacing Heart) */}
            <svg viewBox="0 0 100 100" className="w-12 h-12 text-white fill-white drop-shadow-xs pointer-events-none">
              {/* Cat Ears */}
              <polygon points="16,38 28,12 46,28" fill="#FFFFFF" />
              <polygon points="22,34 30,18 42,27" fill="#FFB8C6" />
              <polygon points="84,38 72,12 54,28" fill="#FFFFFF" />
              <polygon points="78,34 70,18 58,27" fill="#FFB8C6" />
              {/* Cat Head */}
              <ellipse cx="50" cy="55" rx="38" ry="31" fill="#FFFFFF" />
              {/* Eyes */}
              <ellipse cx="36" cy="53" rx="4" ry="5.5" fill="#382126" />
              <circle cx="34.5" cy="51" r="1.8" fill="#FFFFFF" />
              <ellipse cx="64" cy="53" rx="4" ry="5.5" fill="#382126" />
              <circle cx="62.5" cy="51" r="1.8" fill="#FFFFFF" />
              {/* Nose */}
              <polygon points="48,60 52,60 50,63" fill="#FF758C" />
              {/* Mouth */}
              <path d="M46 65 Q50 68 54 65" fill="none" stroke="#382126" strokeWidth="2" strokeLinecap="round" />
              {/* Blushing Cheeks */}
              <circle cx="27" cy="61" r="4.5" fill="#FF8DA1" opacity="0.75" />
              <circle cx="73" cy="61" r="4.5" fill="#FF8DA1" opacity="0.75" />
              {/* Whiskers */}
              <line x1="22" y1="56" x2="10" y2="54" stroke="#382126" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="22" y1="62" x2="10" y2="64" stroke="#382126" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="78" y1="56" x2="90" y2="54" stroke="#382126" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="78" y1="62" x2="90" y2="64" stroke="#382126" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* When 100% is reached: Show Next Button to proceed to Poem Page */}
        {isForgiven ? (
          <div className="w-full flex flex-col items-center gap-1.5 mt-2 animate-pop">
            <button
              onClick={() => {
                sounds.playTap();
                onNext();
              }}
              className="w-[220px] py-3 bg-[#96374e] hover:bg-[#832e43] active:scale-95 text-white font-black text-sm sm:text-base rounded-full shadow-[0_8px_20px_rgba(150,55,78,0.35)] transition-all cursor-pointer flex items-center justify-center gap-1.5 select-none"
            >
              <span>Read Lusu&apos;s Note ✨</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              sounds.playTap();
              onNext();
            }}
            className="mt-1 text-[11px] sm:text-xs font-bold text-[#96374e]/60 hover:text-[#96374e] underline transition-colors cursor-pointer"
          >
          </button>
        )}

      </div>

      {/* ================= BOTTOM ACTION: LOCK / RESTART ================= */}
      <div className="w-full flex justify-center pb-1 shrink-0">
        <button
          onClick={onRestart}
          className="flex items-center gap-1.5 text-xs font-bold text-[#96374e]/70 hover:text-[#96374e] py-1.5 px-3.5 rounded-full bg-white/60 hover:bg-white shadow-xs transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Start Over (Lock)</span>
        </button>
      </div>

    </div>
  );
}
