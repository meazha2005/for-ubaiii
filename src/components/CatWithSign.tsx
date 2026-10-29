"use client";

import React from "react";

interface CatWithSignProps {
  signText: string;
  state?: "idle" | "typing" | "error" | "success";
  size?: "md" | "lg" | "xl";
  variant?: "pink" | "card";
}

export default function CatWithSign({
  signText,
  state = "idle",
  size = "lg",
  variant = "pink",
}: CatWithSignProps) {
  // Dimension classes - Made significantly bigger
  const sizeMap = {
    md: "w-52 h-56 xs:w-56 xs:h-62 sm:w-64 sm:h-70",
    lg: "w-64 h-68 xs:w-72 xs:h-76 sm:w-80 sm:h-84",
    xl: "w-72 h-76 xs:w-80 xs:h-84 sm:w-88 sm:h-92",
  };

  const isCardVariant = variant === "card";

  return (
    <div
      className={`relative flex items-center justify-center select-none transition-transform duration-300 ${
        state === "error"
          ? "animate-shake"
          : state === "success"
          ? "animate-pulse-gently"
          : "animate-float-soft"
      }`}
    >
      <svg
        viewBox="0 0 280 290"
        className={`${sizeMap[size]} drop-shadow-[0_6px_14px_rgba(150,55,78,0.2)]`}
      >
        <defs>
          {/* Fur Gradient */}
          <linearGradient id="furGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F9F1E6" />
          </linearGradient>

          {/* Inner Ear Gradient */}
          <linearGradient id="earPink" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB8C6" />
            <stop offset="100%" stopColor="#F08CA2" />
          </linearGradient>

          {/* Signboard Gradient */}
          <linearGradient id="signWood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF4EE" />
          </linearGradient>

          {/* Subtle Shadow Filter */}
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#8B3B4E" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Tail on right */}
        <path
          d="M 195 225 C 235 225 250 180 230 155 C 218 142 204 150 210 168 C 218 185 204 208 185 215"
          fill="none"
          stroke="#382126"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Left Ear */}
        <g>
          <path
            d="M 70 100 C 52 32 85 15 112 60 Z"
            fill="url(#furGradient)"
            stroke="#382126"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M 78 92 C 64 50 84 38 102 68 Z"
            fill="url(#earPink)"
          />
        </g>

        {/* Right Ear */}
        <g>
          <path
            d="M 210 100 C 228 32 195 15 168 60 Z"
            fill="url(#furGradient)"
            stroke="#382126"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M 202 92 C 216 50 196 38 178 68 Z"
            fill="url(#earPink)"
          />
        </g>

        {/* Chubby Sitting Body */}
        <path
          d="M 80 145 C 52 188 50 245 90 258 C 130 268 180 265 195 248 C 225 215 212 175 200 145 Z"
          fill="url(#furGradient)"
          stroke="#382126"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Cat Head */}
        <path
          d="M 52 120 C 32 160 68 185 140 185 C 212 185 248 160 228 120 C 214 78 182 65 140 65 C 98 65 66 78 52 120 Z"
          fill="url(#furGradient)"
          stroke="#382126"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Cute Fur Tufts on head */}
        <path
          d="M 134 65 C 136 57 142 57 144 65 C 147 58 153 59 151 68"
          fill="none"
          stroke="#382126"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Blushing Cheeks */}
        <ellipse cx="76" cy="138" rx="15" ry="9" fill="#F497A9" opacity="0.85" />
        <ellipse cx="204" cy="138" rx="15" ry="9" fill="#F497A9" opacity="0.85" />

        {/* Whiskers */}
        <g stroke="#382126" strokeWidth="3" strokeLinecap="round">
          <line x1="66" y1="133" x2="36" y2="129" />
          <line x1="64" y1="143" x2="34" y2="147" />
          <line x1="214" y1="133" x2="244" y2="129" />
          <line x1="216" y1="143" x2="246" y2="147" />
        </g>

        {/* Eyes */}
        {state === "error" ? (
          <g stroke="#382126" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
            {/* > < Eyes */}
            <path d="M 94 115 L 114 125 L 94 135" fill="none" />
            <path d="M 186 115 L 166 125 L 186 135" fill="none" />
            {/* Tear drop */}
            <path d="M 80 144 Q 75 156 82 161 Q 89 156 80 144 Z" fill="#60A5FA" />
          </g>
        ) : state === "success" ? (
          <g stroke="#96374e" strokeWidth="4.5" strokeLinecap="round">
            {/* Happy ^ ^ Eyes */}
            <path d="M 96 128 Q 110 112 124 128" fill="none" />
            <path d="M 156 128 Q 170 112 184 128" fill="none" />
          </g>
        ) : (
          <g>
            {/* Big Sparkly Eyes */}
            <ellipse cx="110" cy="124" rx="11" ry="16" fill="#2E1C21" />
            <circle cx="106" cy="118" r="5" fill="#FFFFFF" />
            <circle cx="113" cy="128" r="2.5" fill="#FFFFFF" />

            <ellipse cx="170" cy="124" rx="11" ry="16" fill="#2E1C21" />
            <circle cx="166" cy="118" r="5" fill="#FFFFFF" />
            <circle cx="173" cy="128" r="2.5" fill="#FFFFFF" />
          </g>
        )}

        {/* Tiny Pink Nose & Mouth */}
        <polygon points="137,134 143,134 140,138" fill="#E67389" />
        {state === "error" ? (
          <path
            d="M 134 145 Q 140 139 146 145"
            fill="none"
            stroke="#382126"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M 133 138 Q 137 145 140 140 Q 143 145 147 138"
            fill="none"
            stroke="#382126"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}

        {/* Sitting Back Feet */}
        <ellipse cx="78" cy="248" rx="18" ry="11" fill="url(#furGradient)" stroke="#382126" strokeWidth="3.5" />
        <ellipse cx="202" cy="248" rx="18" ry="11" fill="url(#furGradient)" stroke="#382126" strokeWidth="3.5" />

        {/* ----------------- SIGNBOARD IN CAT HANDS ----------------- */}
        <g filter="url(#softShadow)">
          {/* Wooden Stick on right (matching reference image) */}
          <rect
            x="200"
            y="105"
            width="8"
            height="85"
            rx="4"
            fill="#D4A373"
            stroke="#382126"
            strokeWidth="2.5"
          />

          {/* Signboard Body: Large, spacious and clear */}
          {isCardVariant ? (
            <g>
              <rect
                x="12"
                y="152"
                width="256"
                height="78"
                rx="18"
                fill="url(#signWood)"
                stroke="#96374e"
                strokeWidth="4"
              />
              {/* Inner cute dashed border */}
              <rect
                x="18"
                y="158"
                width="244"
                height="66"
                rx="14"
                fill="none"
                stroke="#F28B9F"
                strokeWidth="2"
                strokeDasharray="5 3.5"
              />
            </g>
          ) : (
            // Page 1 "Bismillah" signboard
            <g>
              <rect
                x="35"
                y="154"
                width="210"
                height="68"
                rx="18"
                fill="url(#signWood)"
                stroke="#96374e"
                strokeWidth="4"
              />
              {/* Corner screws */}
              <circle cx="46" cy="165" r="3" fill="#D4A373" />
              <circle cx="234" cy="165" r="3" fill="#D4A373" />
              <circle cx="46" cy="211" r="3" fill="#D4A373" />
              <circle cx="234" cy="211" r="3" fill="#D4A373" />
            </g>
          )}
        </g>

        {/* ----------------- BIG, BOLD, ULTRA-VISIBLE TEXT ----------------- */}
        {isCardVariant ? (
          <text
            x="140"
            y="180"
            textAnchor="middle"
            fill="#7d1830"
            fontFamily="'Fredoka', 'Quicksand', system-ui, sans-serif"
          >
            <tspan
              x="140"
              dy="0"
              fontSize="16.5"
              fontWeight="900"
              letterSpacing="0.2"
            >
              Assalam alaikum
            </tspan>
            <tspan
              x="140"
              dy="23"
              fontSize="14"
              fontWeight="900"
              letterSpacing="0.1"
            >
              Warahamathullai wabarakathu
            </tspan>
          </text>
        ) : (
          <text
            x="140"
            y="198"
            textAnchor="middle"
            fill="#7d1830"
            fontSize="28"
            fontWeight="900"
            letterSpacing="1"
            fontFamily="'Fredoka', 'Quicksand', system-ui, sans-serif"
          >
            {signText}
          </text>
        )}

        {/* Front Paws Holding The Sign */}
        {/* Left Paw clutching top left of sign */}
        <g>
          <ellipse
            cx={isCardVariant ? "52" : "66"}
            cy={isCardVariant ? "162" : "165"}
            rx="14"
            ry="11"
            fill="url(#furGradient)"
            stroke="#382126"
            strokeWidth="3.5"
            transform={`rotate(-15, ${isCardVariant ? 52 : 66}, ${isCardVariant ? 162 : 165})`}
          />
          {/* Paw claw/pad lines */}
          <line
            x1={isCardVariant ? 48 : 62}
            y1={isCardVariant ? 159 : 162}
            x2={isCardVariant ? 50 : 64}
            y2={isCardVariant ? 165 : 168}
            stroke="#382126"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Right Paw clutching top right of sign */}
        <g>
          <ellipse
            cx={isCardVariant ? "228" : "214"}
            cy={isCardVariant ? "162" : "165"}
            rx="14"
            ry="11"
            fill="url(#furGradient)"
            stroke="#382126"
            strokeWidth="3.5"
            transform={`rotate(15, ${isCardVariant ? 228 : 214}, ${isCardVariant ? 162 : 165})`}
          />
          {/* Paw claw/pad lines */}
          <line
            x1={isCardVariant ? 232 : 218}
            y1={isCardVariant ? 159 : 162}
            x2={isCardVariant ? 230 : 216}
            y2={isCardVariant ? 165 : 168}
            stroke="#382126"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
