import React from "react";

interface InFleekLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const InFleekLogoComponent: React.FC<InFleekLogoProps> = ({
  width = 44,
  height = 44,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer rounded frame */}
      <rect
        width="44"
        height="44"
        rx="10"
        fill="url(#frameGradient)"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="2"
      />

      {/* Inner core box */}
      <rect
        x="4"
        y="4"
        width="36"
        height="36"
        rx="8"
        fill="url(#coreGradient)"
      />

      {/* 'I' Letter */}
      <rect x="13" y="12" width="4" height="20" rx="1" fill="white" />

      {/* 'F' Letter */}
      <g fill="white">
        <rect x="21" y="12" width="10" height="4" rx="1" />
        <rect x="21" y="20" width="8" height="4" rx="1" />
        <rect x="21" y="12" width="4" height="20" rx="1" />
      </g>

      <defs>
        <linearGradient id="frameGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f2f2f2" />
        </linearGradient>

        <linearGradient id="coreGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1ca3f7ff" />
          <stop offset="50%" stopColor="#1e47e9ff" />
          <stop offset="100%" stopColor="#c720a3ff" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default InFleekLogoComponent;
