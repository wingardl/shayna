// HELPER: Root Vegetable SVG for Navigation Hover Effect
const RootVegetable = ({ veggieColor = "#D97706", leavesColor = "#166534" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 120"
    className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-9 group-hover:translate-y-5 transition-transform duration-500 ease-in-out"
    width="30"
    height="45"
    aria-hidden="true"
  >
    <defs>
      <filter id="wobble">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1.5" />
      </filter>
    </defs>
    <g style={{ filter: "url(#wobble)" }}>
      {/* Leaves */}
      <path d="M40 25 Q30 5 20 20 T40 25 Z" fill={leavesColor} />
      <path d="M40 25 Q45 0 50 15 T40 25 Z" fill={leavesColor} />
      <path d="M40 25 Q50 10 60 25 T40 25 Z" fill={leavesColor} />
      {/* Root - initially invisible, fades in on hover */}
      <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <path d="M40,20 C55,35 55,60 40,90 C25,60 25,35 40,20 Z" fill={veggieColor} />
        <path d="M40,90 Q42,105 38,120" stroke={veggieColor} strokeWidth="3" fill="none" />
      </g>
    </g>
  </svg>
);
export default RootVegetable;