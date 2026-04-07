// SVG logo component - no external file needed
// Sage Green #8A9E7A, Soft Apricot #D4956A, White #FFFFFF
// Design: elegant botanical monogram "SS" with a delicate leaf/branch motif

export default function Logo({ size = 80, light = false }) {
  const s = size;
  const sage = light ? '#fff' : '#8A9E7A';
  const sageDark = light ? 'rgba(255,255,255,0.85)' : '#5a6e4e';
  const apricot = light ? '#e8c4a5' : '#D4956A';
  const textColor = light ? '#fff' : '#3a3a3a';

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Susan Stevens Celebrant"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="47" stroke={sage} strokeWidth="1" fill="none" opacity="0.5"/>

      {/* Inner circle */}
      <circle cx="50" cy="50" r="41" stroke={sage} strokeWidth="0.5" fill="none" opacity="0.3"/>

      {/* Branch / botanical element - left */}
      <g opacity="0.85">
        <path d="M 18 52 Q 26 44 34 50" stroke={sage} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Leaves on branch */}
        <ellipse cx="23" cy="46" rx="4" ry="2.2" transform="rotate(-30 23 46)" fill={sage} opacity="0.7"/>
        <ellipse cx="30" cy="43" rx="3.5" ry="2" transform="rotate(-10 30 43)" fill={sage} opacity="0.6"/>
        <ellipse cx="20" cy="51" rx="3" ry="1.8" transform="rotate(-50 20 51)" fill={sageDark} opacity="0.4"/>
      </g>

      {/* Branch / botanical element - right */}
      <g opacity="0.85">
        <path d="M 82 52 Q 74 44 66 50" stroke={sage} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <ellipse cx="77" cy="46" rx="4" ry="2.2" transform="rotate(30 77 46)" fill={sage} opacity="0.7"/>
        <ellipse cx="70" cy="43" rx="3.5" ry="2" transform="rotate(10 70 43)" fill={sage} opacity="0.6"/>
        <ellipse cx="80" cy="51" rx="3" ry="1.8" transform="rotate(50 80 51)" fill={sageDark} opacity="0.4"/>
      </g>

      {/* Small floral dots at top */}
      <circle cx="50" cy="14" r="1.5" fill={apricot} opacity="0.8"/>
      <circle cx="44" cy="16" r="1" fill={apricot} opacity="0.5"/>
      <circle cx="56" cy="16" r="1" fill={apricot} opacity="0.5"/>

      {/* Small dots at bottom */}
      <circle cx="50" cy="86" r="1.5" fill={apricot} opacity="0.8"/>
      <circle cx="44" cy="84" r="1" fill={apricot} opacity="0.5"/>
      <circle cx="56" cy="84" r="1" fill={apricot} opacity="0.5"/>

      {/* Monogram "SS" - elegant serif style */}
      {/* First S */}
      <text
        x="32"
        y="56"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="28"
        fontWeight="400"
        fill={textColor}
        textAnchor="middle"
        fontStyle="italic"
      >S</text>

      {/* Second S */}
      <text
        x="68"
        y="56"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="28"
        fontWeight="400"
        fill={apricot}
        textAnchor="middle"
        fontStyle="italic"
      >S</text>

      {/* Small divider dot between SS */}
      <circle cx="50" cy="47" r="1.5" fill={apricot} opacity="0.9"/>

      {/* Bottom text: CELEBRANT */}
      <text
        x="50"
        y="73"
        fontFamily="'Jost', sans-serif"
        fontSize="6"
        fontWeight="500"
        fill={sage}
        textAnchor="middle"
        letterSpacing="3"
      >CELEBRANT</text>

      {/* Thin horizontal rule lines either side of CELEBRANT */}
      <line x1="15" y1="68" x2="32" y2="68" stroke={sage} strokeWidth="0.5" opacity="0.6"/>
      <line x1="68" y1="68" x2="85" y2="68" stroke={sage} strokeWidth="0.5" opacity="0.6"/>
    </svg>
  );
}
