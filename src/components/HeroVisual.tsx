const ACCENT = "#3b6ea5";

const sourceNodes = [90, 160, 230, 300];
const outputNodes = [130, 210, 290];

/** Abstract data architecture diagram: source systems flowing through a governed core to consumers. */
export default function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="hv-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity={0.28} />
          <stop offset="100%" stopColor={ACCENT} stopOpacity={0} />
        </radialGradient>
        <pattern
          id="hv-grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke={ACCENT}
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      <rect width="480" height="400" fill="url(#hv-grid)" opacity={0.12} />
      <circle cx="240" cy="200" r="150" fill="url(#hv-core)" />

      {/* Ingest paths: source systems into the core */}
      <g stroke={ACCENT} strokeWidth="1" opacity={0.35}>
        {sourceNodes.map((y) => (
          <path
            key={`in-${y}`}
            d={`M 66 ${y} C 140 ${y}, 160 200, 214 200`}
            fill="none"
          />
        ))}
      </g>

      {/* Delivery paths: governed data out to consumers */}
      <g stroke={ACCENT} strokeWidth="1" opacity={0.35}>
        {outputNodes.map((y) => (
          <path
            key={`out-${y}`}
            d={`M 266 200 C 330 200, 350 ${y}, 414 ${y}`}
            fill="none"
          />
        ))}
      </g>

      {/* Source systems */}
      <g>
        {sourceNodes.map((y) => (
          <g key={`src-${y}`}>
            <rect
              x="26"
              y={y - 14}
              width="40"
              height="28"
              rx="4"
              fill="#131b2e"
              stroke={ACCENT}
              strokeWidth="1"
              opacity={0.75}
            />
            <line
              x1="34"
              y1={y - 4}
              x2="58"
              y2={y - 4}
              stroke={ACCENT}
              strokeWidth="1"
              opacity={0.5}
            />
            <line
              x1="34"
              y1={y + 3}
              x2="50"
              y2={y + 3}
              stroke={ACCENT}
              strokeWidth="1"
              opacity={0.3}
            />
          </g>
        ))}
      </g>

      {/* Governed core */}
      <g>
        <circle
          cx="240"
          cy="200"
          r="72"
          fill="none"
          stroke={ACCENT}
          strokeWidth="0.75"
          opacity={0.2}
          strokeDasharray="3 6"
        />
        <polygon
          points="240,148 285,174 285,226 240,252 195,226 195,174"
          fill="#131b2e"
          stroke={ACCENT}
          strokeWidth="1.25"
          opacity={0.9}
        />
        <g stroke={ACCENT} strokeWidth="0.75" opacity={0.4}>
          <line x1="240" y1="148" x2="240" y2="200" />
          <line x1="285" y1="174" x2="240" y2="200" />
          <line x1="195" y1="174" x2="240" y2="200" />
          <line x1="285" y1="226" x2="240" y2="200" />
          <line x1="195" y1="226" x2="240" y2="200" />
          <line x1="240" y1="252" x2="240" y2="200" />
        </g>
        <g fill={ACCENT}>
          <circle cx="240" cy="148" r="2.5" />
          <circle cx="285" cy="174" r="2" opacity={0.7} />
          <circle cx="195" cy="174" r="2" opacity={0.7} />
          <circle cx="285" cy="226" r="2" opacity={0.7} />
          <circle cx="195" cy="226" r="2" opacity={0.7} />
          <circle cx="240" cy="252" r="2" opacity={0.7} />
          <circle cx="240" cy="200" r="4" />
        </g>
      </g>

      {/* Consumers */}
      <g>
        {outputNodes.map((y) => (
          <g key={`out-node-${y}`}>
            <circle
              cx="434"
              cy={y}
              r="16"
              fill="#131b2e"
              stroke={ACCENT}
              strokeWidth="1"
              opacity={0.8}
            />
            <circle cx="434" cy={y} r="3" fill={ACCENT} opacity={0.85} />
          </g>
        ))}
      </g>
    </svg>
  );
}
