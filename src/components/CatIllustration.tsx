"use client";

import React from "react";
import Image from "next/image";

interface CatIllustrationProps {
  state: "idle" | "typing" | "error" | "success";
  useAiImage?: boolean;
}

export default function CatIllustration({
  state,
  useAiImage = false,
}: CatIllustrationProps) {
  if (useAiImage) {
    return (
      <div className="relative flex items-center justify-center">
        {/* Glow behind the cat */}
        <div className="absolute inset-0 bg-white/40 rounded-full blur-xl scale-95" />
        <div className={`relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 transition-transform duration-300 ${
          state === "error" ? "animate-shake scale-95" : state === "success" ? "animate-bounce-cute scale-105" : "animate-float"
        }`}>
          <Image
            src="/cat.jpg"
            alt="Cute Kawaii Cat"
            fill
            className="object-contain drop-shadow-md rounded-3xl"
            priority
          />
        </div>
      </div>
    );
  }

  // Interactive Animated Kawaii Cat SVG matching reference art style
  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-300 ${
        state === "error"
          ? "animate-shake"
          : state === "success"
          ? "animate-bounce-cute scale-105"
          : "animate-float"
      }`}
    >
      {/* Soft shadow under the cat */}
      <div className="absolute -bottom-2 w-32 h-6 bg-[#852a3f]/15 rounded-full blur-sm" />

      <svg
        viewBox="0 0 240 280"
        className="w-36 h-44 sm:w-44 sm:h-52 drop-shadow-sm select-none"
      >
        <defs>
          <linearGradient id="furGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#F7EFE5" />
          </linearGradient>
          <linearGradient id="innerEarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F9BAC6" />
            <stop offset="100%" stopColor="#EA8A9E" />
          </linearGradient>
        </defs>

        {/* Tail wagging on the right */}
        <path
          d="M 180 220 C 215 220 225 185 210 165 C 200 150 188 160 195 175 C 202 190 190 205 170 212"
          fill="none"
          stroke="#382126"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="transition-transform origin-[175px_215px] duration-500"
          style={{
            transform: state === "success" ? "rotate(15deg)" : "rotate(0deg)",
          }}
        />

        {/* Left Ear */}
        <g>
          <path
            d="M 60 100 C 45 40 70 25 95 65 Z"
            fill="url(#furGradient)"
            stroke="#382126"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Left Ear */}
          <path
            d="M 66 90 C 58 52 74 42 88 70 Z"
            fill="url(#innerEarGrad)"
          />
        </g>

        {/* Right Ear */}
        <g>
          <path
            d="M 180 100 C 195 40 170 25 145 65 Z"
            fill="url(#furGradient)"
            stroke="#382126"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Right Ear */}
          <path
            d="M 174 90 C 182 52 166 42 152 70 Z"
            fill="url(#innerEarGrad)"
          />
        </g>

        {/* Cat Chubby Body */}
        <path
          d="M 75 145 C 55 180 50 230 85 245 C 120 255 160 250 175 235 C 190 220 185 175 165 145 Z"
          fill="url(#furGradient)"
          stroke="#382126"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Cat Round Head */}
        <path
          d="M 50 120 C 35 150 65 175 120 175 C 175 175 205 150 190 120 C 180 85 155 75 120 75 C 85 75 60 85 50 120 Z"
          fill="url(#furGradient)"
          stroke="#382126"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Cute Fur Tuft on Forehead */}
        <path
          d="M 115 75 C 117 68 123 68 125 75 C 127 69 133 70 132 77"
          fill="none"
          stroke="#382126"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Rosy Blush on Cheeks */}
        <ellipse cx="68" cy="138" rx="12" ry="7" fill="#F497A9" opacity="0.75" />
        <ellipse cx="172" cy="138" rx="12" ry="7" fill="#F497A9" opacity="0.75" />

        {/* Whiskers */}
        <g stroke="#382126" strokeWidth="2.5" strokeLinecap="round">
          {/* Left Whiskers */}
          <line x1="60" y1="134" x2="35" y2="130" />
          <line x1="58" y1="142" x2="33" y2="145" />
          {/* Right Whiskers */}
          <line x1="180" y1="134" x2="205" y2="130" />
          <line x1="182" y1="142" x2="207" y2="145" />
        </g>

        {/* Eyes based on state */}
        {state === "error" ? (
          /* Sad / Oops Eyes: > < */
          <g stroke="#382126" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 80 114 L 98 123 L 80 132" fill="none" />
            <path d="M 160 114 L 142 123 L 160 132" fill="none" />
            {/* Cute tear */}
            <path d="M 72 142 Q 68 152 74 156 Q 80 152 72 142 Z" fill="#60A5FA" />
          </g>
        ) : state === "success" ? (
          /* Joyful Happy Eyes: ^ ^ */
          <g stroke="#93384f" strokeWidth="4" strokeLinecap="round">
            <path d="M 82 126 Q 94 112 106 126" fill="none" />
            <path d="M 134 126 Q 146 112 158 126" fill="none" />
          </g>
        ) : (
          /* Normal Big Sparkly Eyes */
          <g>
            {/* Left Eye */}
            <ellipse cx="94" cy="123" rx="10" ry="14" fill="#2E1C21" />
            <circle cx="91" cy="118" r="4.5" fill="#FFFFFF" />
            <circle cx="97" cy="127" r="2" fill="#FFFFFF" />

            {/* Right Eye */}
            <ellipse cx="146" cy="123" rx="10" ry="14" fill="#2E1C21" />
            <circle cx="143" cy="118" r="4.5" fill="#FFFFFF" />
            <circle cx="149" cy="127" r="2" fill="#FFFFFF" />
          </g>
        )}

        {/* Tiny Pink Nose & Mouth */}
        <polygon points="117,133 123,133 120,137" fill="#E67389" />
        {state === "error" ? (
          <path
            d="M 115 145 Q 120 140 125 145"
            fill="none"
            stroke="#382126"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M 113 138 Q 117 144 120 139 Q 123 144 127 138"
            fill="none"
            stroke="#382126"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}

        {/* Front Paws */}
        {/* Left Paw */}
        <path
          d="M 92 195 C 92 215 105 218 112 214 C 117 210 115 195 108 190 Z"
          fill="url(#furGradient)"
          stroke="#382126"
          strokeWidth="3"
        />
        {/* Right Paw */}
        <path
          d="M 148 195 C 148 215 135 218 128 214 C 123 210 125 195 132 190 Z"
          fill="url(#furGradient)"
          stroke="#382126"
          strokeWidth="3"
        />

        {/* Back Sitting Feet */}
        <ellipse
          cx="72"
          cy="236"
          rx="14"
          ry="9"
          fill="url(#furGradient)"
          stroke="#382126"
          strokeWidth="3"
        />
        <ellipse
          cx="168"
          cy="236"
          rx="14"
          ry="9"
          fill="url(#furGradient)"
          stroke="#382126"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
