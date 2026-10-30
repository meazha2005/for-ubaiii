"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { sounds } from "@/lib/audio";
import { RefreshCw, Sparkles } from "lucide-react";

interface FinalPageProps {
  onRestart: () => void;
}

export default function FinalPage({ onRestart }: FinalPageProps) {
  const [forgiven, setForgiven] = useState(false);

  const handleForgive = () => {
    setForgiven(true);
    sounds.playMelody();
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#38bdf8", "#fbbf24", "#34d399", "#f472b6", "#a78bfa"],
    });
  };

  return (
    <div className="relative w-full min-h-[100dvh] sm:min-h-[820px] bg-gradient-to-b from-[#fdecee] via-[#fff5f6] to-[#ebf3fc] flex flex-col justify-between items-center p-5 sm:p-7 overflow-hidden select-none animate-pop text-center">
      
      {/* Top Banner */}
      <div className="pt-2">
        <span className="text-xs font-black tracking-widest text-[#96374e]/70 uppercase">
          A Message from Lusu to Ubaiii
        </span>
      </div>

      {/* Center Card */}
      <div className="w-full max-w-[370px] bg-white rounded-[36px] shadow-[0_18px_45px_rgba(230,170,185,0.4)] p-6 sm:p-7 flex flex-col items-center border border-pink-100">
        
        {/* Cute Pleading / Happy Cat (Without any heart) */}
        <div className="my-2">
          <svg viewBox="0 0 160 160" className="w-36 h-36 drop-shadow-md">
            <defs>
              <linearGradient id="catWhiteF" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F8EFE4" />
              </linearGradient>
              <linearGradient id="earPinkF" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB8C6" />
                <stop offset="100%" stopColor="#F08CA2" />
              </linearGradient>
            </defs>

            {/* Ears */}
            <path d="M 40 50 C 30 18 52 8 68 35 Z" fill="url(#catWhiteF)" stroke="#382126" strokeWidth="2.5" />
            <path d="M 45 46 C 38 25 50 18 60 36 Z" fill="url(#earPinkF)" />
            <path d="M 120 50 C 130 18 108 8 92 35 Z" fill="url(#catWhiteF)" stroke="#382126" strokeWidth="2.5" />
            <path d="M 115 46 C 122 25 110 18 100 36 Z" fill="url(#earPinkF)" />

            {/* Cat Body */}
            <path
              d="M 50 100 C 40 125 42 148 65 152 C 90 156 108 154 116 145 C 125 132 120 115 110 100 Z"
              fill="url(#catWhiteF)"
              stroke="#382126"
              strokeWidth="2.5"
            />

            {/* Head */}
            <path d="M 32 65 C 20 90 42 110 80 110 C 118 110 140 90 128 65 C 120 38 102 32 80 32 C 58 32 40 38 32 65 Z" fill="url(#catWhiteF)" stroke="#382126" strokeWidth="2.5" />
            <ellipse cx="46" cy="78" rx="8" ry="5" fill="#F497A9" opacity="0.8" />
            <ellipse cx="114" cy="78" rx="8" ry="5" fill="#F497A9" opacity="0.8" />

            {/* Whiskers */}
            <line x1="38" y1="74" x2="20" y2="72" stroke="#382126" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="80" x2="18" y2="82" stroke="#382126" strokeWidth="2" strokeLinecap="round" />
            <line x1="122" y1="74" x2="140" y2="72" stroke="#382126" strokeWidth="2" strokeLinecap="round" />
            <line x1="124" y1="80" x2="142" y2="82" stroke="#382126" strokeWidth="2" strokeLinecap="round" />

            {/* Eyes */}
            {forgiven ? (
              <g stroke="#96374e" strokeWidth="3" strokeLinecap="round">
                <path d="M 52 70 Q 60 62 68 70" fill="none" />
                <path d="M 92 70 Q 100 62 108 70" fill="none" />
              </g>
            ) : (
              <g>
                <ellipse cx="60" cy="68" rx="7" ry="10" fill="#2E1C21" />
                <circle cx="58" cy="65" r="3.5" fill="#FFFFFF" />
                <circle cx="62" cy="71" r="1.5" fill="#FFFFFF" />
                <ellipse cx="100" cy="68" rx="7" ry="10" fill="#2E1C21" />
                <circle cx="98" cy="65" r="3.5" fill="#FFFFFF" />
                <circle cx="102" cy="71" r="1.5" fill="#FFFFFF" />
              </g>
            )}

            <polygon points="78,74 82,74 80,77" fill="#E67389" />
            <path d="M 76 81 Q 80 77 84 81" fill="none" stroke="#382126" strokeWidth="2" strokeLinecap="round" />

            {/* Paws clasped together in cute gentle pleading (No heart) */}
            <ellipse cx="73" cy="112" rx="9" ry="7" fill="url(#catWhiteF)" stroke="#382126" strokeWidth="2" />
            <ellipse cx="87" cy="112" rx="9" ry="7" fill="url(#catWhiteF)" stroke="#382126" strokeWidth="2" />
          </svg>
        </div>

        {forgiven ? (
          <div className="flex flex-col items-center gap-2 mt-2 animate-pop">
            <h2 className="font-serif text-2xl font-black text-[#96374e] italic">
              Thank you, Ubaiii! 🌸
            </h2>
            <p className="text-sm text-[#475569] font-medium leading-relaxed">
              Your forgiveness means the entire world to Lusu.
              May Allah always keep us happy and united!
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 mt-2">
            <h2 className="font-serif text-2xl font-black text-[#1e293b] italic">
              Will you forgive your Lusu? 🥺
            </h2>
            <p className="text-xs text-[#64748b] leading-relaxed">
              En mistake-ah manichudunga pls...
            </p>

            <button
              onClick={handleForgive}
              className="mt-4 flex items-center justify-center gap-2 bg-[#ff5e79] hover:bg-[#f34a67] active:scale-95 text-white font-black text-base py-3 px-8 rounded-full shadow-[0_8px_20px_rgba(255,94,121,0.4)] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Yes, I forgive you</span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Action: Lock / Restart */}
      <div className="w-full flex justify-center pb-2">
        <button
          onClick={onRestart}
          className="flex items-center gap-1.5 text-xs font-bold text-[#96374e]/70 hover:text-[#96374e] py-2 px-4 rounded-full transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Start Over (Lock)</span>
        </button>
      </div>

    </div>
  );
}
