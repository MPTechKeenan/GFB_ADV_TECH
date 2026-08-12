"use client";

import { useId } from "react";

const HEIGHTS = { sm: 32, md: 44, lg: 56, xl: 68 } as const;

type Size = keyof typeof HEIGHTS;

interface GFBLogoProps {
  size?: Size;
  iconOnly?: boolean;
  light?: boolean;
  className?: string;
}

const ACCENT = "#3b6ea5";
const WHITE = "#ffffff";
const WHITE_SOFT = "#f8fafc";
const MUTED = "#94a3b8";

export default function GFBLogo({
  size = "md",
  iconOnly = false,
  light = false,
  className = "",
}: GFBLogoProps) {
  const id = useId().replace(/:/g, "");
  const h = iconOnly ? 32 : HEIGHTS[size];
  const w = iconOnly ? 32 : "auto";
  const stroke = light ? WHITE : ACCENT;
  const fill = light ? WHITE : ACCENT;
  const glow = light ? WHITE : ACCENT;
  const wordmarkFill = WHITE_SOFT;
  const taglineFill = light ? MUTED : MUTED;

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
          <radialGradient id={`${id}-hexGlow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={glow} stopOpacity={0.2} />
            <stop offset="100%" stopColor={glow} stopOpacity={0} />
          </radialGradient>
          <radialGradient id={`${id}-coreGlow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={glow} stopOpacity={1} />
            <stop offset="100%" stopColor={glow} stopOpacity={0} />
          </radialGradient>
        </defs>
        <ellipse cx="32" cy="32" rx="28" ry="28" fill={`url(#${id}-hexGlow)`} />
        <polygon
          points="32,14 50,24.5 50,39.5 32,50 14,39.5 14,24.5"
          fill="#0c1220"
          stroke={stroke}
          strokeWidth="1.2"
        />
        <line x1="32" y1="14" x2="32" y2="32" stroke={stroke} strokeWidth="0.8" opacity={0.55} />
        <line x1="50" y1="24.5" x2="32" y2="32" stroke={stroke} strokeWidth="0.8" opacity={0.35} />
        <line x1="14" y1="24.5" x2="32" y2="32" stroke={stroke} strokeWidth="0.8" opacity={0.35} />
        <circle cx="32" cy="14" r="2" fill={fill} />
        <circle cx="32" cy="32" r="5.5" fill={`url(#${id}-coreGlow)`} />
        <circle cx="32" cy="32" r="2.5" fill={fill} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 232 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: h, width: w }}
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id={`${id}-hexGlow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={glow} stopOpacity={0.2} />
          <stop offset="100%" stopColor={glow} stopOpacity={0} />
        </radialGradient>
        <radialGradient id={`${id}-coreGlow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={glow} stopOpacity={1} />
          <stop offset="100%" stopColor={glow} stopOpacity={0} />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="32" rx="26" ry="26" fill={`url(#${id}-hexGlow)`} />
      <polygon
        points="32,14 50,24.5 50,39.5 32,50 14,39.5 14,24.5"
        fill="#0c1220"
        stroke={stroke}
        strokeWidth="1"
        opacity={0.9}
      />
      <line x1="32" y1="14" x2="32" y2="32" stroke={stroke} strokeWidth="0.7" opacity={0.5} />
      <line x1="50" y1="24.5" x2="32" y2="32" stroke={stroke} strokeWidth="0.7" opacity={0.35} />
      <line x1="14" y1="24.5" x2="32" y2="32" stroke={stroke} strokeWidth="0.7" opacity={0.35} />
      <circle cx="32" cy="14" r="1.6" fill={fill} opacity={0.9} />
      <circle cx="32" cy="32" r="5" fill={`url(#${id}-coreGlow)`} />
      <circle cx="32" cy="32" r="2.2" fill={fill} />
      <line x1="78" y1="13" x2="78" y2="51" stroke={stroke} strokeWidth="0.6" opacity={0.2} />
      <text
        x="93"
        y="38"
        fontFamily="var(--font-dm-sans), system-ui, sans-serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="1"
        fill={wordmarkFill}
      >
        GFB
      </text>
      <text
        x="94"
        y="52"
        fontFamily="var(--font-dm-sans), system-ui, sans-serif"
        fontWeight="400"
        fontSize="7"
        letterSpacing="2.5"
        fill={taglineFill}
      >
        FEDERAL SOLUTIONS
      </text>
    </svg>
  );
}
