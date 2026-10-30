"use client";

import React, { useState, useRef } from "react";
import { sounds } from "@/lib/audio";
import { Sparkles, ChevronRight } from "lucide-react";

interface BoyAndCatPageProps {
  onNext: () => void;
  onBackToVerses: () => void;
}

export default function BoyAndCatPage({
  onNext,
  onBackToVerses,
}: BoyAndCatPageProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleTapNow = () => {
    sounds.playTap(560);
    setIsRevealed(true);
    // Smoothly scroll down so the message is immediately in view
    setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          top: 100,
          behavior: "smooth",
        });
      }
    }, 120);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="relative w-full h-[100dvh] sm:h-[820px] max-h-[100dvh] sm:max-h-[880px] bg-gradient-to-b from-[#fdecee] via-[#fff5f6] to-[#ebf3fc] flex flex-col items-center p-3 sm:p-5 overflow-y-auto overscroll-contain select-none animate-pop"
      style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
    >
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between pt-1 px-1 mb-2 shrink-0">
        <button
          onClick={onBackToVerses}
          className="text-xs font-bold text-[#96374e]/70 hover:text-[#96374e] py-1 px-2.5 rounded-full bg-white/70 shadow-xs transition-colors cursor-pointer"
        >
          ← Verses
        </button>

        <div className="inline-flex items-center gap-1.5 bg-white/85 px-3.5 py-1 rounded-full shadow-xs border border-pink-100">
          <Sparkles className="w-3.5 h-3.5 text-[#ff5e79]" />
          <span className="text-[#96374e] font-black text-xs uppercase tracking-wider">
            Lusu to Ubaiii
          </span>
        </div>

        <span className="text-amber-300 text-lg opacity-80">★</span>
      </div>

      {/* Center Content Card */}
      <div
        className={`w-full max-w-[390px] bg-white rounded-[32px] shadow-[0_18px_45px_rgba(230,170,185,0.4)] p-4 sm:p-6 border border-pink-100/90 flex flex-col items-center animate-pop shrink-0 ${
          isRevealed ? "mt-1 mb-10" : "my-auto"
        }`}
      >
        {/* Adorable Chibi Boy and Kitten Illustration */}
        <div className="my-1 flex justify-center shrink-0">
          <svg
            viewBox="0 0 240 200"
            className={`drop-shadow-md select-none transition-all duration-300 ${
              isRevealed
                ? "w-36 h-30 xs:w-40 xs:h-34 sm:w-44 sm:h-38"
                : "w-48 h-40 xs:w-56 xs:h-46 sm:w-60 sm:h-50"
            }`}
          >
            <defs>
              {/* Boy Hair Gradient */}
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A342E" />
                <stop offset="100%" stopColor="#2E1F1B" />
              </linearGradient>

              {/* Skin Gradient */}
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF2EB" />
                <stop offset="100%" stopColor="#FFE0D2" />
              </linearGradient>

              {/* Boy Hoodie / Sweater */}
              <linearGradient id="sweaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#85A9E6" />
                <stop offset="100%" stopColor="#5B87D8" />
              </linearGradient>

              {/* White Kitten Fur */}
              <linearGradient id="catFur" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F9F1E6" />
              </linearGradient>

              {/* Cat Ear Pink */}
              <linearGradient id="catPink" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB8C6" />
                <stop offset="100%" stopColor="#F08CA2" />
              </linearGradient>
            </defs>

            {/* Background Soft Shadow */}
            <ellipse cx="120" cy="192" rx="95" ry="8" fill="#8B3B4E" opacity="0.12" />

            {/* ================= BOY ================= */}
            <g id="chibi-boy">
              {/* Boy Body (Sitting in Hoodie) */}
              <path
                d="M 60 140 C 45 152 40 185 55 192 C 75 195 125 195 135 188 C 145 178 140 150 125 140 Z"
                fill="url(#sweaterGrad)"
                stroke="#2B2124"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Hoodie Neck Collar */}
              <path
                d="M 75 138 Q 95 148 115 138"
                fill="none"
                stroke="#2B2124"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Boy Head */}
              <ellipse
                cx="95"
                cy="95"
                rx="38"
                ry="36"
                fill="url(#skinGrad)"
                stroke="#2B2124"
                strokeWidth="2.5"
              />

              {/* Boy Cheeks */}
              <ellipse cx="73" cy="106" rx="8" ry="5" fill="#FFB4BE" opacity="0.8" />
              <ellipse cx="117" cy="106" rx="8" ry="5" fill="#FFB4BE" opacity="0.8" />

              {/* Boy Soft Hair Back/Crown */}
              <path
                d="M 57 95 C 52 65 72 45 98 45 C 128 45 142 65 137 95 C 137 72 122 55 98 55 C 72 55 60 74 57 95 Z"
                fill="url(#hairGrad)"
              />

              {/* Boy Hair Front Bangs */}
              <path
                d="M 56 88 C 60 70 75 62 88 72 C 96 64 112 62 122 75 C 130 68 136 78 136 88 C 132 80 120 72 110 82 C 100 74 85 75 76 86 C 68 80 60 84 56 88 Z"
                fill="url(#hairGrad)"
                stroke="#2B2124"
                strokeWidth="2"
              />

              {/* Boy Eyes: Warm, gentle, slightly longing/soft */}
              <ellipse cx="80" cy="98" rx="5.5" ry="7.5" fill="#2E1C21" />
              <circle cx="78" cy="95" r="2.2" fill="#FFFFFF" />
              <circle cx="82" cy="100" r="1" fill="#FFFFFF" />

              <ellipse cx="110" cy="98" rx="5.5" ry="7.5" fill="#2E1C21" />
              <circle cx="108" cy="95" r="2.2" fill="#FFFFFF" />
              <circle cx="112" cy="100" r="1" fill="#FFFFFF" />

              {/* Eyebrows (gentle curve) */}
              <path d="M 74 88 Q 80 84 86 87" fill="none" stroke="#2B2124" strokeWidth="2" strokeLinecap="round" />
              <path d="M 104 87 Q 110 84 116 88" fill="none" stroke="#2B2124" strokeWidth="2" strokeLinecap="round" />

              {/* Gentle Soft Smile */}
              <path
                d="M 91 113 Q 95 116 99 113"
                fill="none"
                stroke="#2B2124"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Boy Left Arm resting gently */}
              <path
                d="M 58 152 Q 52 172 65 178"
                fill="none"
                stroke="#2B2124"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Boy Right Hand resting near cat */}
              <path
                d="M 120 152 Q 138 160 148 168"
                fill="none"
                stroke="#2B2124"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="150" cy="168" r="5" fill="url(#skinGrad)" stroke="#2B2124" strokeWidth="2" />
            </g>

            {/* ================= CUTE KITTEN BESIDE BOY ================= */}
            <g id="chibi-cat" transform="translate(138, 105)">
              {/* Cat Tail wagging gently */}
              <path
                d="M 50 70 C 65 65 72 50 66 42 C 60 38 55 45 58 52 C 60 58 50 64 42 66"
                fill="none"
                stroke="#382126"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Cat Ears */}
              <path d="M 12 28 C 4 12 18 6 26 22 Z" fill="url(#catFur)" stroke="#382126" strokeWidth="2.2" />
              <path d="M 15 25 C 9 15 18 11 23 23 Z" fill="url(#catPink)" />

              <path d="M 54 28 C 62 12 48 6 40 22 Z" fill="url(#catFur)" stroke="#382126" strokeWidth="2.2" />
              <path d="M 51 25 C 57 15 48 11 43 23 Z" fill="url(#catPink)" />

              {/* Cat Body */}
              <path
                d="M 16 48 C 6 62 8 82 24 86 C 42 88 56 86 58 76 C 62 62 55 48 48 42 Z"
                fill="url(#catFur)"
                stroke="#382126"
                strokeWidth="2.2"
              />

              {/* Cat Head */}
              <ellipse
                cx="33"
                cy="34"
                rx="25"
                ry="21"
                fill="url(#catFur)"
                stroke="#382126"
                strokeWidth="2.2"
              />

              {/* Cat Blushing Cheeks */}
              <ellipse cx="17" cy="40" rx="5" ry="3.2" fill="#FFB4BE" opacity="0.85" />
              <ellipse cx="49" cy="40" rx="5" ry="3.2" fill="#FFB4BE" opacity="0.85" />

              {/* Cat Whiskers */}
              <line x1="14" y1="38" x2="3" y2="36" stroke="#382126" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="13" y1="42" x2="2" y2="44" stroke="#382126" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="52" y1="38" x2="63" y2="36" stroke="#382126" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="53" y1="42" x2="64" y2="44" stroke="#382126" strokeWidth="1.8" strokeLinecap="round" />

              {/* Cat Shiny Eyes looking up lovingly at boy */}
              <ellipse cx="25" cy="34" rx="4.5" ry="6" fill="#2E1C21" />
              <circle cx="23" cy="32" r="1.8" fill="#FFFFFF" />
              <circle cx="26" cy="36" r="0.9" fill="#FFFFFF" />

              <ellipse cx="41" cy="34" rx="4.5" ry="6" fill="#2E1C21" />
              <circle cx="39" cy="32" r="1.8" fill="#FFFFFF" />
              <circle cx="42" cy="36" r="0.9" fill="#FFFFFF" />

              {/* Nose & Mouth */}
              <polygon points="32,38 34,38 33,40" fill="#E67389" />
              <path d="M 31 41 Q 33 43 35 41" fill="none" stroke="#382126" strokeWidth="1.5" strokeLinecap="round" />

              {/* Cat Front Paws */}
              <ellipse cx="26" cy="68" rx="5" ry="4" fill="url(#catFur)" stroke="#382126" strokeWidth="1.8" />
              <ellipse cx="38" cy="68" rx="5" ry="4" fill="url(#catFur)" stroke="#382126" strokeWidth="1.8" />
            </g>
          </svg>
        </div>

        {/* STATE 1: Tap Now Button */}
        {!isRevealed ? (
          <div className="flex flex-col items-center mt-3 mb-1 animate-pop w-full text-center">
            <p className="text-xs sm:text-sm text-[#64748b] font-medium mb-3">
              Ubaiii, please listen to what Lusu has to say...
            </p>

            <button
              onClick={handleTapNow}
              className="flex items-center justify-center gap-2 bg-[#ff5e79] hover:bg-[#f34a67] active:scale-95 text-white font-black text-lg xs:text-xl py-3.5 px-10 rounded-full shadow-[0_10px_25px_rgba(255,94,121,0.42)] transition-all cursor-pointer select-none animate-bounce"
            >
              <span>Tap now</span>
              <span className="text-xl">👆</span>
            </button>
          </div>
        ) : (
          /* STATE 2: The Heartfelt Message from Lusu */
          <div className="w-full flex flex-col items-center mt-1 animate-pop">
            <div className="w-full bg-[#fff5f7] rounded-2xl p-4 sm:p-5 border border-pink-200/80 text-left shadow-xs flex flex-col gap-3">
              <div className="flex items-center gap-1.5 text-[#96374e] font-black text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#ff5e79]" />
                <span>EN MANASULA IRUNDHU...</span>
              </div>

              {/* Paragraph 1 */}
              <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-[1.7] font-semibold select-text">
                Enaku edhuvum vena. Naan pannadhu nala dhan palaya ungala lose panniten. Enaku romba pidicha andha palaya Ubaii-ah tholachiten.
              </p>

              {/* Paragraph 2 */}
              <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-[1.7] font-semibold select-text">
                Please enna vittu dhoorama poidatheenga. Enna hate pannadheenga. Enaku en palaya Ubaii venum. Naan vera edhuvume kekkala.
              </p>

              {/* Paragraph 3 */}
              <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-[1.7] font-semibold select-text">
                Please enna mannichu, sila vishyatha marandhu purinjuka try pannunga. Ellame palaya madhiriye maaranum nu aasai padren. Neenga palaya madhiri  irundha adhuve enaku podhum.
              </p>

              {/* Paragraph 4 */}
              <p className="text-[13.5px] sm:text-[14.5px] text-[#334155] leading-[1.7] font-semibold select-text">
                Apdi kekkuradhuku kooda enaku thagudhi illanu theriyum. Naan pannadhu nala dhan ellame ippadi aachu. Irundhalum, manasara kekkuren...
                <br />
                Enaku en palaya Ubaii-ah thiruppi tharuveengala? Please. Enaku adhu mattum podhum.
              </p>

              {/* Signature */}
              <p className="text-right text-xs sm:text-sm font-black text-[#96374e] mt-1">
                — Unga Lusu 🥺
              </p>
            </div>

            {/* Next Button Below to go to "Will you forgive your Lusu?" */}
            <div className="w-full flex justify-center pt-5 pb-2">
              <button
                onClick={onNext}
                className="w-[200px] xs:w-[220px] py-3.5 bg-[#96374e] hover:bg-[#832e43] active:scale-95 text-white font-black text-base xs:text-lg rounded-full shadow-[0_8px_20px_rgba(150,55,78,0.35)] transition-all cursor-pointer flex items-center justify-center gap-1.5 select-none"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom spacing to ensure scrolling never cuts off on any screen */}
      <div className="h-6 w-full shrink-0" />
    </div>
  );
}
