"use client";

import { useId } from "react";

const HEIGHTS = { sm: 24, md: 36, lg: 48, xl: 64 } as const;

type Size = keyof typeof HEIGHTS;

interface GFBLogoProps {
  size?: Size;
  iconOnly?: boolean;
  className?: string;
}

export default function GFBLogo({
  size = "md",
  iconOnly = false,
  className = "",
}: GFBLogoProps) {
  const id = useId().replace(/:/g, "");
  const h = iconOnly ? 32 : HEIGHTS[size];
  const w = iconOnly ? 32 : "auto";

  if (iconOnly) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: h, width: w }}
        className={className}
        aria-hidden
      >
        <defs>
          <radialGradient
            id={`${id}-hexGlow`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#00d4ff" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity={0} />
          </radialGradient>
          <radialGradient
            id={`${id}-coreGlow`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#00d4ff" stopOpacity={1} />
            <stop offset="100%" stopColor="#0088bb" stopOpacity={0} />
          </radialGradient>
        </defs>
        <ellipse cx="32" cy="32" rx="28" ry="28" fill={`url(#${id}-hexGlow)`} />
        <polygon
          points="32,6 55,19 55,45 32,58 9,45 9,19"
          stroke="#00d4ff"
          strokeWidth="0.6"
          fill="none"
          opacity={0.2}
        />
        <polygon
          points="32,14 50,24.5 50,39.5 32,50 14,39.5 14,24.5"
          fill="#0a0a0f"
          stroke="#00d4ff"
          strokeWidth="1.2"
        />
        <line x1="32" y1="14" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.8" opacity={0.55} />
        <line x1="50" y1="24.5" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.8" opacity={0.35} />
        <line x1="14" y1="24.5" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.8" opacity={0.35} />
        <line x1="50" y1="39.5" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.8" opacity={0.2} />
        <line x1="14" y1="39.5" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.8" opacity={0.2} />
        <line x1="32" y1="50" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.8" opacity={0.25} />
        <circle cx="32" cy="14" r="2" fill="#00d4ff" />
        <circle cx="50" cy="24.5" r="1.6" fill="#00d4ff" opacity={0.65} />
        <circle cx="50" cy="39.5" r="1.6" fill="#00d4ff" opacity={0.65} />
        <circle cx="32" cy="50" r="1.6" fill="#00d4ff" opacity={0.65} />
        <circle cx="14" cy="39.5" r="1.6" fill="#00d4ff" opacity={0.65} />
        <circle cx="14" cy="24.5" r="1.6" fill="#00d4ff" opacity={0.65} />
        <circle cx="32" cy="32" r="5.5" fill={`url(#${id}-coreGlow)`} />
        <circle cx="32" cy="32" r="2.5" fill="#00d4ff" />
        <circle cx="32" cy="32" r="1" fill="#e0f9ff" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 340 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: h, width: w }}
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id={`${id}-hexGlow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity={0.25} />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity={0} />
        </radialGradient>
        <radialGradient id={`${id}-coreGlow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity={1} />
          <stop offset="60%" stopColor="#00d4ff" stopOpacity={0.6} />
          <stop offset="100%" stopColor="#0088bb" stopOpacity={0} />
        </radialGradient>
        <filter id={`${id}-softGlow`}>
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <ellipse cx="32" cy="32" rx="26" ry="26" fill={`url(#${id}-hexGlow)`} />
      <polygon
        points="32,6 55,19 55,45 32,58 9,45 9,19"
        stroke="#00d4ff"
        strokeWidth="0.5"
        fill="none"
        opacity={0.18}
      />
      <polygon
        points="32,14 50,24.5 50,39.5 32,50 14,39.5 14,24.5"
        fill="#0a0a0f"
        stroke="#00d4ff"
        strokeWidth="1"
        opacity={0.9}
      />
      <line x1="32" y1="14" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.7" opacity={0.5} />
      <line x1="50" y1="24.5" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.7" opacity={0.35} />
      <line x1="14" y1="24.5" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.7" opacity={0.35} />
      <line x1="50" y1="39.5" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.7" opacity={0.25} />
      <line x1="14" y1="39.5" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.7" opacity={0.25} />
      <line x1="32" y1="50" x2="32" y2="32" stroke="#00d4ff" strokeWidth="0.7" opacity={0.3} />
      <circle cx="32" cy="14" r="1.6" fill="#00d4ff" opacity={0.9} />
      <circle cx="50" cy="24.5" r="1.6" fill="#00d4ff" opacity={0.6} />
      <circle cx="50" cy="39.5" r="1.6" fill="#00d4ff" opacity={0.6} />
      <circle cx="32" cy="50" r="1.6" fill="#00d4ff" opacity={0.6} />
      <circle cx="14" cy="39.5" r="1.6" fill="#00d4ff" opacity={0.6} />
      <circle cx="14" cy="24.5" r="1.6" fill="#00d4ff" opacity={0.6} />
      <circle cx="32" cy="32" r="5" fill={`url(#${id}-coreGlow)`} filter={`url(#${id}-softGlow)`} />
      <circle cx="32" cy="32" r="2.2" fill="#00d4ff" />
      <circle cx="32" cy="32" r="1" fill="#e0f9ff" />
      <line x1="78" y1="13" x2="78" y2="51" stroke="#00d4ff" strokeWidth="0.6" opacity={0.2} />
      <text
        x="93"
        y="40"
        fontFamily="var(--font-syne), Syne, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="3"
        fill="#f0f6ff"
      >
        GFB
      </text>
      <text
        x="94"
        y="54"
        fontFamily="var(--font-dm-sans), DM Sans, sans-serif"
        fontWeight="300"
        fontSize="7.5"
        letterSpacing="3.5"
        fill="#6a7fa8"
      >
        ADVANCED TECHNOLOGIES
      </text>
    </svg>
  );
}
