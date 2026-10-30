"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface MessagePageProps {
  onNext: () => void;
}

export default function MessagePage({ onNext }: MessagePageProps) {
  return (
    <div className="relative w-full min-h-[100dvh] sm:min-h-[820px] bg-gradient-to-b from-[#fdecee] via-[#fff5f6] to-[#ebf3fc] flex flex-col justify-between items-center p-4 sm:p-6 overflow-y-auto select-none animate-pop">
      
      {/* Top Floating Mini Accents */}
      <div className="w-full flex items-center justify-between pt-2 px-1">
        <span className="text-amber-300 text-lg opacity-75">★</span>
        <div className="inline-flex items-center gap-1.5 bg-white/80 px-4 py-1 rounded-full shadow-xs border border-pink-100">
          <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
          <span className="text-[#96374e] font-black text-xs uppercase tracking-wider">
            From Lusu to Ubaiii
          </span>
        </div>
        <span className="text-amber-300 text-sm opacity-75">★</span>
      </div>

      {/* Cute Pleading Apology Cat Graphic */}
      <div className="my-2 flex justify-center">
        <svg viewBox="0 0 160 150" className="w-32 h-30 sm:w-36 sm:h-34 drop-shadow-md">
          <defs>
            <linearGradient id="catWhite" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F8EFE4" />
            </linearGradient>
            <linearGradient id="earPink" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFB8C6" />
              <stop offset="100%" stopColor="#F08CA2" />
            </linearGradient>
          </defs>

          {/* Left Ear */}
          <path d="M 40 50 C 30 18 52 8 68 35 Z" fill="url(#catWhite)" stroke="#382126" strokeWidth="2.5" />
          <path d="M 45 46 C 38 25 50 18 60 36 Z" fill="url(#earPink)" />

          {/* Right Ear */}
          <path d="M 120 50 C 130 18 108 8 92 35 Z" fill="url(#catWhite)" stroke="#382126" strokeWidth="2.5" />
          <path d="M 115 46 C 122 25 110 18 100 36 Z" fill="url(#earPink)" />

          {/* Cat Head */}
          <path d="M 32 65 C 20 90 42 110 80 110 C 118 110 140 90 128 65 C 120 38 102 32 80 32 C 58 32 40 38 32 65 Z" fill="url(#catWhite)" stroke="#382126" strokeWidth="2.5" />

          {/* Blush */}
          <ellipse cx="46" cy="78" rx="8" ry="5" fill="#F497A9" opacity="0.8" />
          <ellipse cx="114" cy="78" rx="8" ry="5" fill="#F497A9" opacity="0.8" />

          {/* Whiskers */}
          <line x1="38" y1="74" x2="20" y2="72" stroke="#382126" strokeWidth="2" strokeLinecap="round" />
          <line x1="36" y1="80" x2="18" y2="82" stroke="#382126" strokeWidth="2" strokeLinecap="round" />
          <line x1="122" y1="74" x2="140" y2="72" stroke="#382126" strokeWidth="2" strokeLinecap="round" />
          <line x1="124" y1="80" x2="142" y2="82" stroke="#382126" strokeWidth="2" strokeLinecap="round" />

          {/* Pleading Big Shiny Eyes */}
          <ellipse cx="60" cy="68" rx="7" ry="10" fill="#2E1C21" />
          <circle cx="58" cy="65" r="3.5" fill="#FFFFFF" />
          <circle cx="62" cy="71" r="1.5" fill="#FFFFFF" />

          <ellipse cx="100" cy="68" rx="7" ry="10" fill="#2E1C21" />
          <circle cx="98" cy="65" r="3.5" fill="#FFFFFF" />
          <circle cx="102" cy="71" r="1.5" fill="#FFFFFF" />

          {/* Nose & Pleading Mouth */}
          <polygon points="78,74 82,74 80,77" fill="#E67389" />
          <path d="M 76 81 Q 80 77 84 81" fill="none" stroke="#382126" strokeWidth="2" strokeLinecap="round" />

          {/* Two paws clasped together in pleading/apology */}
          <ellipse cx="73" cy="106" rx="9" ry="7" fill="url(#catWhite)" stroke="#382126" strokeWidth="2" />
          <ellipse cx="87" cy="106" rx="9" ry="7" fill="url(#catWhite)" stroke="#382126" strokeWidth="2" />
        </svg>
      </div>

      {/* Main Message Card */}
      <div className="w-full max-w-[380px] bg-white/95 rounded-[30px] shadow-[0_16px_40px_rgba(230,170,185,0.4)] p-5 sm:p-6 border border-pink-100 flex flex-col items-center text-center">
        
        {/* The Exact Tamil/Tanglish Message Requested */}
        <p className="text-[14px] xs:text-[15px] sm:text-[16px] text-[#334155] leading-[1.75] font-semibold text-justify tracking-normal select-text">
          Suthi green iruku but indha red mattum ipo thaniya theridhu. Ipo indha red ballon dhan enoda mistakes.Enkittayum knjm nalla vishayangal irundhurukkum la? 🥺 Naan senja oru mistake-naala, enkitta irundha ella nalla vishayangalum marandhu poiduma? Enna pathi neenga oru mudivu edukkuradhukku munnaadi, nalla moments-aiyum konjam ninaichu paarunga. Oru mistake-naala naan avlo mosamanavala? En mistake-ai naan othukuren, aana adha mattum vechu ennai mothama odhuki vechiradhinga pls. Enkittayum   knjm  nalladhu irundhuchu nu neenga konjamavathu ninaichu paarunga.
        </p>

      </div>

      {/* Next Button Below */}
      <div className="w-full flex justify-center py-4">
        <button
          onClick={onNext}
          className="w-[200px] xs:w-[220px] py-3.5 bg-[#96374e] hover:bg-[#832e43] active:scale-95 text-white font-black text-lg xs:text-xl rounded-full shadow-[0_8px_20px_rgba(150,55,78,0.35)] transition-all cursor-pointer select-none text-center"
        >
          Next
        </button>
      </div>

    </div>
  );
}
