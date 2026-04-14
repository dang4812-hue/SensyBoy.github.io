import React from "react";

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle - Classic Thin Border */}
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" fill="none" />
        
        {/* Hip Character - Adapted to Monochrome/Classic Style */}
        <g className="text-brand">
          {/* Head Shape */}
          <path
            d="M30 45C30 35 38 25 50 25C62 25 70 35 70 45V65C70 72 62 78 50 78C38 78 30 72 30 65V45Z"
            fill="currentColor"
          />
          
          {/* Beanie - Classic Accent */}
          <path
            d="M30 45C30 35 38 25 50 25C62 25 70 35 70 45H30Z"
            fill="#C5A059" /* Classic Gold Accent */
          />
          
          {/* Sunglasses - Sleek */}
          <rect x="32" y="48" width="16" height="8" rx="1" fill="#FDFCF8" />
          <rect x="52" y="48" width="16" height="8" rx="1" fill="#FDFCF8" />
          <path d="M48 52H52" stroke="#FDFCF8" strokeWidth="1" />
          
          {/* Cool Smirk */}
          <path
            d="M46 68C46 68 48 69 52 69"
            stroke="#FDFCF8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Decorative Dot */}
        <circle cx="80" cy="30" r="3" fill="#C5A059" />
      </svg>
    </div>
  );
};
