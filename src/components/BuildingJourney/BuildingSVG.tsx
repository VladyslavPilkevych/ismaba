import { forwardRef } from "react";
import { scenes, SVG_VIEWBOX } from "./scenes";

/**
 * Illustrated apartment-building cutaway.
 *
 * Layout (viewBox 800 x 1700):
 *   y    0–240   sky / pitched roof
 *   y  240–480   Floor 4 — Komunikácia (community room)
 *   y  480–720   Floor 3 — Financie (home office)
 *   y  720–960   Floor 2 — Spoločné priestory (hallway + stairs)
 *   y  960–1200  Floor 1 — Vchod (ground entrance)   GROUND LINE @ 1200
 *   y 1200–1440  Basement — Technické systémy
 *   y 1440–1700  earth
 *
 * Style:
 *  - Red-brick exterior walls with subtle staggered pattern.
 *  - Pitched gable roof with horizontal tile lines.
 *  - Warm cream interior wall, wood floor surfaces, sage-green / walnut furniture.
 *  - Each floor is furnished — sofa group, home office, hallway with stairs,
 *    entrance vestibule with mailboxes & ISMAA sign, utility basement.
 *
 * Performance:
 *  - Pure shapes (rect/line/circle/path/polygon) + 2 patterns + a few
 *    linear gradients. No filters, no shadows, no images.
 */

type Props = { className?: string };

const BuildingSVG = forwardRef<SVGSVGElement, Props>(function BuildingSVG(
  { className },
  ref
) {
  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${SVG_VIEWBOX.w} ${SVG_VIEWBOX.h}`}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label="Bytový dom — ilustrovaný architektonický rez"
    >
      <defs>
        {/* Sky inside the SVG so the scene reads atmospheric on its own */}
        <linearGradient id="bj-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8EAF2" />
          <stop offset="60%" stopColor="#E8F1F4" />
          <stop offset="100%" stopColor="#F2F7F8" />
        </linearGradient>

        {/* Earth / ground */}
        <linearGradient id="bj-earth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7E6646" />
          <stop offset="100%" stopColor="#4D3E2C" />
        </linearGradient>

        {/* Red brick — staggered half-bond pattern */}
        <pattern
          id="bj-brick"
          x="0"
          y="0"
          width="80"
          height="36"
          patternUnits="userSpaceOnUse"
        >
          <rect width="80" height="36" fill="#8E5E48" />
          {/* row 1 */}
          <rect x="2" y="2" width="36" height="14" fill="#C25344" />
          <rect x="42" y="2" width="36" height="14" fill="#A8463A" />
          {/* row 2 — staggered */}
          <rect x="22" y="20" width="36" height="14" fill="#A8463A" />
          <rect x="-16" y="20" width="36" height="14" fill="#C25344" />
          <rect x="62" y="20" width="36" height="14" fill="#C25344" />
          {/* tiny highlights for life */}
          <rect x="2" y="2" width="36" height="2" fill="#D9695A" opacity="0.6" />
          <rect x="42" y="2" width="36" height="2" fill="#BC5043" opacity="0.6" />
        </pattern>

        {/* Roof tiles */}
        <pattern
          id="bj-roof"
          x="0"
          y="0"
          width="32"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <rect width="32" height="14" fill="#5C2818" />
          <rect x="0" y="0" width="32" height="3" fill="#7A3826" />
          <line x1="16" y1="3" x2="16" y2="14" stroke="#3D1A0F" strokeWidth="0.6" />
          <line x1="0" y1="3" x2="32" y2="3" stroke="#3D1A0F" strokeWidth="0.6" />
        </pattern>

        {/* Wall paint */}
        <linearGradient id="bj-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5EBD9" />
          <stop offset="100%" stopColor="#EAD9BC" />
        </linearGradient>

        {/* Wood */}
        <linearGradient id="bj-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C39A78" />
          <stop offset="100%" stopColor="#9C7553" />
        </linearGradient>

        {/* Window glass */}
        <linearGradient id="bj-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D6E8E5" />
          <stop offset="100%" stopColor="#A8C9CB" />
        </linearGradient>

        {/* Basement walls (concrete) */}
        <linearGradient id="bj-concrete" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9C8E78" />
          <stop offset="100%" stopColor="#7A6B58" />
        </linearGradient>

        {/* Lamp glow */}
        <radialGradient id="bj-lamp">
          <stop offset="0%" stopColor="#FFE8B0" />
          <stop offset="100%" stopColor="#F5C77B" />
        </radialGradient>
      </defs>

      {/* ====================== SKY + GROUND ====================== */}
      <rect x="0" y="0" width="800" height="1200" fill="url(#bj-sky)" />
      <rect x="0" y="1200" width="800" height="500" fill="url(#bj-earth)" />
      {/* Soft horizon line */}
      <line x1="0" y1="1200" x2="800" y2="1200" stroke="#3D2E1F" strokeWidth="1" opacity="0.6" />
      {/* Soft cast shadow under building */}
      <ellipse cx="400" cy="1200" rx="340" ry="10" fill="#000" opacity="0.18" />

      {/* ====================== ROOF ====================== */}
      <polygon
        points="40,240 400,80 760,240"
        fill="url(#bj-roof)"
        stroke="#3D1A0F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Roof ridge highlight */}
      <line x1="40" y1="240" x2="400" y2="80" stroke="#3D1A0F" strokeWidth="1.5" opacity="0.7" />
      <line x1="400" y1="80" x2="760" y2="240" stroke="#3D1A0F" strokeWidth="1.5" opacity="0.7" />
      {/* Eaves cornice */}
      <rect x="32" y="232" width="736" height="14" fill="#3D1A0F" />
      <rect x="32" y="246" width="736" height="4" fill="#5C3623" />

      {/* Chimney */}
      <g>
        <rect x="540" y="100" width="40" height="100" fill="url(#bj-brick)" />
        <rect x="540" y="100" width="40" height="100" fill="none" stroke="#3D1A0F" strokeWidth="1.5" />
        <rect x="534" y="94" width="52" height="10" fill="#3D1A0F" />
        <rect x="534" y="92" width="52" height="3" fill="#5C3623" />
      </g>

      {/* Tiny attic dormer hint (small window in roof) */}
      <g>
        <rect x="380" y="160" width="40" height="36" fill="#3D1A0F" />
        <rect x="384" y="164" width="32" height="22" fill="url(#bj-glass)" stroke="#1F140C" strokeWidth="1" />
        <line x1="400" y1="164" x2="400" y2="186" stroke="#1F140C" strokeWidth="0.8" />
        <polygon points="378,164 400,148 422,164" fill="#3D1A0F" />
      </g>

      {/* ====================== BUILDING BODY (BRICK EXTERIOR) ====================== */}
      <rect x="80" y="240" width="640" height="1200" fill="url(#bj-brick)" />
      {/* Tiny shadow line on top of brick under eaves */}
      <rect x="80" y="240" width="640" height="6" fill="#3D1A0F" opacity="0.45" />

      {/* ====================== INTERIOR CUTAWAY (cream wall) ====================== */}
      {/* Above-ground cream wall */}
      <rect x="140" y="246" width="520" height="954" fill="url(#bj-wall)" />
      {/* Basement walls (concrete) */}
      <rect x="140" y="1200" width="520" height="240" fill="url(#bj-concrete)" />

      {/* Subtle "wallpaper" vertical accent stripes on cream wall (very faint) */}
      <g opacity="0.05">
        <line x1="240" y1="246" x2="240" y2="1200" stroke="#7C5439" />
        <line x1="400" y1="246" x2="400" y2="1200" stroke="#7C5439" />
        <line x1="560" y1="246" x2="560" y2="1200" stroke="#7C5439" />
      </g>

      {/* ====================== FLOOR SLABS ====================== */}
      {/* Each slab: 14px concrete underneath + 6px wood plank surface on top */}
      {[480, 720, 960, 1200].map((y) => (
        <g key={y}>
          <rect x="140" y={y - 14} width="520" height="14" fill="#5A4A3D" />
          <rect x="140" y={y - 8} width="520" height="2" fill="#3D2A1F" opacity="0.6" />
          {/* Wood plank surface (the floor of the level above) */}
          <rect x="140" y={y - 20} width="520" height="6" fill="url(#bj-wood)" />
        </g>
      ))}
      {/* Wood plank lines on each floor (subtle) */}
      <g stroke="#7C5439" strokeWidth="0.6" opacity="0.4">
        {[460, 700, 940, 1180].map((y) => (
          <g key={y}>
            <line x1="200" y1={y} x2="200" y2={y + 6} />
            <line x1="320" y1={y} x2="320" y2={y + 6} />
            <line x1="440" y1={y} x2="440" y2={y + 6} />
            <line x1="560" y1={y} x2="560" y2={y + 6} />
          </g>
        ))}
      </g>
      {/* Basement floor (concrete) */}
      <rect x="140" y="1430" width="520" height="10" fill="#5A4A3D" />

      {/* ====================== FLOOR 4 — KOMUNIKÁCIA ====================== */}
      <g className="bj-floor bj-floor-komunikacia">
        {/* Back-wall window (sky beyond) */}
        <g>
          <rect x="500" y="290" width="120" height="120" fill="url(#bj-sky)" stroke="#5A4A3D" strokeWidth="3" />
          <line x1="560" y1="290" x2="560" y2="410" stroke="#5A4A3D" strokeWidth="2" />
          <line x1="500" y1="350" x2="620" y2="350" stroke="#5A4A3D" strokeWidth="2" />
          {/* Window sill */}
          <rect x="494" y="408" width="132" height="6" fill="#5A4A3D" />
        </g>

        {/* Pendant lamp */}
        <line x1="280" y1="246" x2="280" y2="318" stroke="#5C4332" strokeWidth="1.5" />
        <ellipse cx="280" cy="332" rx="22" ry="10" fill="#3D2A1F" />
        <ellipse cx="280" cy="334" rx="18" ry="7" fill="url(#bj-lamp)" />

        {/* Wall art */}
        <rect x="180" y="290" width="50" height="36" fill="#FFFFFF" stroke="#5C4332" strokeWidth="1.5" />
        <rect x="184" y="294" width="42" height="28" fill="#7E9A8A" />
        <rect x="244" y="298" width="36" height="28" fill="#FFFFFF" stroke="#5C4332" strokeWidth="1.5" />
        <rect x="248" y="302" width="28" height="20" fill="#C39A78" />

        {/* Sofa — sage green */}
        <rect x="160" y="408" width="220" height="44" rx="8" fill="#5C7C6A" />
        <rect x="160" y="396" width="220" height="22" rx="8" fill="#7E9A8A" />
        {/* Sofa cushions */}
        <rect x="170" y="386" width="62" height="32" rx="6" fill="#7E9A8A" stroke="#4F6D5C" strokeWidth="1" />
        <rect x="236" y="386" width="62" height="32" rx="6" fill="#7E9A8A" stroke="#4F6D5C" strokeWidth="1" />
        <rect x="302" y="386" width="62" height="32" rx="6" fill="#7E9A8A" stroke="#4F6D5C" strokeWidth="1" />
        {/* Sofa legs */}
        <rect x="166" y="452" width="6" height="8" fill="#3D2A1F" />
        <rect x="368" y="452" width="6" height="8" fill="#3D2A1F" />
        {/* Throw pillow accent */}
        <rect x="184" y="392" width="22" height="18" rx="4" fill="#C39A78" opacity="0.85" />

        {/* Coffee table */}
        <rect x="200" y="466" width="120" height="6" fill="#7C5439" />
        <rect x="208" y="472" width="3" height="8" fill="#3D2A1F" />
        <rect x="309" y="472" width="3" height="8" fill="#3D2A1F" />

        {/* Plant */}
        <rect x="430" y="430" width="44" height="30" rx="2" fill="#A86846" />
        <rect x="430" y="428" width="44" height="6" fill="#7C4830" />
        <ellipse cx="452" cy="402" rx="32" ry="22" fill="#6B8A6E" />
        <ellipse cx="438" cy="392" rx="20" ry="14" fill="#8FA590" />
        <ellipse cx="468" cy="386" rx="22" ry="14" fill="#6B8A6E" />
        <ellipse cx="455" cy="378" rx="14" ry="10" fill="#8FA590" />
      </g>

      {/* ====================== FLOOR 3 — FINANCIE ====================== */}
      <g className="bj-floor bj-floor-financie">
        {/* Back-wall window */}
        <g>
          <rect x="180" y="530" width="116" height="116" fill="url(#bj-sky)" stroke="#5A4A3D" strokeWidth="3" />
          <line x1="238" y1="530" x2="238" y2="646" stroke="#5A4A3D" strokeWidth="2" />
          <line x1="180" y1="588" x2="296" y2="588" stroke="#5A4A3D" strokeWidth="2" />
          <rect x="174" y="644" width="128" height="6" fill="#5A4A3D" />
        </g>

        {/* Bookshelf */}
        <g>
          <rect x="350" y="526" width="92" height="170" fill="#7C5439" stroke="#3D2A1F" strokeWidth="1.5" />
          <line x1="350" y1="566" x2="442" y2="566" stroke="#3D2A1F" strokeWidth="1.5" />
          <line x1="350" y1="606" x2="442" y2="606" stroke="#3D2A1F" strokeWidth="1.5" />
          <line x1="350" y1="646" x2="442" y2="646" stroke="#3D2A1F" strokeWidth="1.5" />
          {/* Books shelf 1 */}
          {[
            { x: 358, c: "#7E9A8A" },
            { x: 368, c: "#5C7C6A" },
            { x: 378, c: "#A8463A" },
            { x: 388, c: "#F5C77B" },
            { x: 398, c: "#5C7C6A" },
            { x: 408, c: "#7E9A8A" },
            { x: 418, c: "#3D2A1F" },
          ].map((b) => (
            <rect key={`b1-${b.x}`} x={b.x} y={534} width="8" height="28" fill={b.c} />
          ))}
          {/* Books shelf 2 */}
          {[
            { x: 358, c: "#A8463A" },
            { x: 368, c: "#7E9A8A" },
            { x: 378, c: "#5C7C6A" },
            { x: 396, c: "#F5C77B", w: 14 },
            { x: 414, c: "#7E9A8A" },
            { x: 424, c: "#5C7C6A" },
          ].map((b) => (
            <rect key={`b2-${b.x}`} x={b.x} y={574} width={b.w ?? 8} height="28" fill={b.c} />
          ))}
          {/* Decor on top shelf — small plant */}
          <ellipse cx="395" cy="624" rx="16" ry="10" fill="#6B8A6E" />
          <rect x="388" y="626" width="14" height="14" fill="#A86846" />
          {/* Books shelf 3 (sparse) */}
          <rect x="362" y="654" width="36" height="24" fill="#7C5439" />
          <rect x="402" y="654" width="8" height="36" fill="#7E9A8A" />
          <rect x="412" y="660" width="8" height="30" fill="#5C7C6A" />
        </g>

        {/* Desk (right) */}
        <g>
          <rect x="490" y="640" width="170" height="10" fill="#7C5439" />
          <rect x="498" y="650" width="4" height="56" fill="#5C4332" />
          <rect x="650" y="650" width="4" height="56" fill="#5C4332" />
          {/* Monitor */}
          <rect x="540" y="586" width="84" height="56" rx="4" fill="#3D2A1F" />
          <rect x="546" y="592" width="72" height="44" rx="2" fill="#7E9A8A" />
          {/* Monitor stand */}
          <rect x="576" y="640" width="12" height="6" fill="#3D2A1F" />
          <rect x="566" y="644" width="32" height="3" fill="#3D2A1F" />
          {/* Papers / book */}
          <rect x="506" y="632" width="22" height="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.6" />
          <rect x="510" y="628" width="22" height="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.6" />
          {/* Mug */}
          <rect x="630" y="624" width="14" height="16" rx="2" fill="#A8463A" />
          <path d="M 644 628 Q 650 632 644 638" fill="none" stroke="#A8463A" strokeWidth="2" />
          {/* Chair */}
          <rect x="555" y="708" width="50" height="6" fill="#3D2A1F" rx="2" />
          <rect x="568" y="714" width="6" height="14" fill="#3D2A1F" />
          <rect x="588" y="714" width="6" height="14" fill="#3D2A1F" />
          <rect x="572" y="664" width="14" height="44" fill="#3D2A1F" />
        </g>

        {/* Plant near desk */}
        <rect x="466" y="690" width="34" height="22" rx="2" fill="#A86846" />
        <ellipse cx="483" cy="666" rx="22" ry="14" fill="#6B8A6E" />
        <ellipse cx="476" cy="658" rx="14" ry="10" fill="#8FA590" />
      </g>

      {/* ====================== FLOOR 2 — SPOLOČNÉ PRIESTORY ====================== */}
      <g className="bj-floor bj-floor-spolocne">
        {/* Apartment door — left */}
        <g>
          <rect x="170" y="800" width="56" height="135" fill="#7C5439" stroke="#3D2A1F" strokeWidth="2" />
          <rect x="174" y="804" width="48" height="60" fill="#8B5A3C" />
          <rect x="174" y="868" width="48" height="63" fill="#8B5A3C" />
          <circle cx="218" cy="868" r="2" fill="#F5C77B" />
          {/* Door number plate */}
          <circle cx="198" cy="822" r="9" fill="#FFFFFF" stroke="#5C4332" />
          <text x="198" y="826" fontSize="11" textAnchor="middle" fill="#3D2A1F" fontFamily="Inter, sans-serif">3</text>
        </g>

        {/* Wall sconce */}
        <g>
          <rect x="288" y="780" width="6" height="14" fill="#5C4332" />
          <ellipse cx="291" cy="800" rx="14" ry="10" fill="url(#bj-lamp)" opacity="0.85" />
        </g>

        {/* Stairs descending diagonally toward right */}
        <g>
          <polygon
            points="380,940 380,910 416,910 416,888 452,888 452,866 488,866 488,844 524,844 524,822 560,822 560,800 596,800 596,940"
            fill="#A87B5C"
            stroke="#5C4332"
            strokeWidth="1.5"
          />
          {/* Step shadows */}
          <line x1="380" y1="910" x2="416" y2="910" stroke="#3D2A1F" strokeWidth="1" />
          <line x1="416" y1="888" x2="452" y2="888" stroke="#3D2A1F" strokeWidth="1" />
          <line x1="452" y1="866" x2="488" y2="866" stroke="#3D2A1F" strokeWidth="1" />
          <line x1="488" y1="844" x2="524" y2="844" stroke="#3D2A1F" strokeWidth="1" />
          <line x1="524" y1="822" x2="560" y2="822" stroke="#3D2A1F" strokeWidth="1" />
          <line x1="560" y1="800" x2="596" y2="800" stroke="#3D2A1F" strokeWidth="1" />
          {/* Riser highlights */}
          <rect x="380" y="900" width="36" height="3" fill="#7C5439" />
          <rect x="416" y="878" width="36" height="3" fill="#7C5439" />
          <rect x="452" y="856" width="36" height="3" fill="#7C5439" />
          <rect x="488" y="834" width="36" height="3" fill="#7C5439" />
          <rect x="524" y="812" width="36" height="3" fill="#7C5439" />
          <rect x="560" y="790" width="36" height="3" fill="#7C5439" />
        </g>

        {/* Handrail */}
        <line x1="394" y1="892" x2="612" y2="784" stroke="#5C7C6A" strokeWidth="3" strokeLinecap="round" />
        {/* Posts */}
        <line x1="396" y1="900" x2="396" y2="892" stroke="#5C4332" strokeWidth="2" />
        <line x1="510" y1="846" x2="510" y2="838" stroke="#5C4332" strokeWidth="2" />
        <line x1="610" y1="794" x2="610" y2="786" stroke="#5C4332" strokeWidth="2" />

        {/* Hallway runner rug */}
        <rect x="240" y="930" width="120" height="14" rx="2" fill="#5C7C6A" />
        <line x1="244" y1="934" x2="356" y2="934" stroke="#7E9A8A" strokeWidth="0.6" />
        <line x1="244" y1="940" x2="356" y2="940" stroke="#7E9A8A" strokeWidth="0.6" />

        {/* Plant in hallway */}
        <rect x="234" y="900" width="22" height="30" rx="2" fill="#A86846" />
        <ellipse cx="245" cy="876" rx="18" ry="14" fill="#6B8A6E" />
        <ellipse cx="252" cy="868" rx="10" ry="8" fill="#8FA590" />
      </g>

      {/* ====================== FLOOR 1 — VCHOD ====================== */}
      <g className="bj-floor bj-floor-vchod">
        {/* Pendant entrance light */}
        <line x1="400" y1="966" x2="400" y2="1000" stroke="#3D2A1F" strokeWidth="1.5" />
        <circle cx="400" cy="1014" r="14" fill="#3D2A1F" />
        <circle cx="400" cy="1014" r="11" fill="url(#bj-lamp)" />

        {/* Mailboxes (left) */}
        <g>
          <rect x="170" y="1040" width="110" height="130" fill="#7E9A8A" stroke="#3D2A1F" strokeWidth="2" />
          {/* Slots & dividers */}
          <line x1="170" y1="1080" x2="280" y2="1080" stroke="#3D2A1F" strokeWidth="1" />
          <line x1="170" y1="1120" x2="280" y2="1120" stroke="#3D2A1F" strokeWidth="1" />
          <line x1="225" y1="1040" x2="225" y2="1170" stroke="#3D2A1F" strokeWidth="1" />
          {/* Mail slots */}
          {[
            [180, 1062], [235, 1062],
            [180, 1102], [235, 1102],
            [180, 1142], [235, 1142],
          ].map(([x, y]) => (
            <rect key={`mb-${x}-${y}`} x={x} y={y} width="40" height="3" fill="#3D2A1F" />
          ))}
          {/* small handles */}
          {[
            [195, 1070], [250, 1070],
            [195, 1110], [250, 1110],
            [195, 1150], [250, 1150],
          ].map(([x, y]) => (
            <circle key={`mbh-${x}-${y}`} cx={x} cy={y} r="1.5" fill="#3D2A1F" />
          ))}
        </g>

        {/* Plant near mailboxes */}
        <rect x="296" y="1130" width="28" height="40" rx="2" fill="#A86846" />
        <ellipse cx="310" cy="1098" rx="22" ry="18" fill="#6B8A6E" />
        <ellipse cx="320" cy="1086" rx="14" ry="10" fill="#8FA590" />

        {/* Double entrance doors (center) */}
        <g>
          {/* Frame */}
          <rect x="346" y="1030" width="170" height="170" fill="#3D2A1F" stroke="#1F140C" strokeWidth="2" />
          {/* Glass panels */}
          <rect x="356" y="1052" width="70" height="138" fill="url(#bj-glass)" stroke="#1F140C" strokeWidth="1.5" />
          <rect x="436" y="1052" width="70" height="138" fill="url(#bj-glass)" stroke="#1F140C" strokeWidth="1.5" />
          {/* Center seam */}
          <line x1="431" y1="1030" x2="431" y2="1200" stroke="#1F140C" strokeWidth="2" />
          {/* Crossbars on glass */}
          <line x1="356" y1="1100" x2="426" y2="1100" stroke="#1F140C" strokeWidth="1" />
          <line x1="436" y1="1100" x2="506" y2="1100" stroke="#1F140C" strokeWidth="1" />
          {/* Handles */}
          <rect x="424" y="1108" width="3" height="22" fill="#F5C77B" />
          <rect x="435" y="1108" width="3" height="22" fill="#F5C77B" />
        </g>

        {/* ISMAA sign over door */}
        <rect x="370" y="1010" width="122" height="22" rx="4" fill="#0F172A" />
        <text
          x="431"
          y="1026"
          fill="#FFFFFF"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="2"
        >
          ISMAA
        </text>

        {/* Notice board (right) */}
        <g>
          <rect x="546" y="1050" width="106" height="86" fill="#FFFFFF" stroke="#5C4332" strokeWidth="2" />
          <rect x="546" y="1050" width="106" height="14" fill="#5C7C6A" />
          <line x1="558" y1="1080" x2="640" y2="1080" stroke="#94A3B8" strokeWidth="1" />
          <line x1="558" y1="1094" x2="630" y2="1094" stroke="#94A3B8" strokeWidth="1" />
          <line x1="558" y1="1108" x2="640" y2="1108" stroke="#94A3B8" strokeWidth="1" />
          <line x1="558" y1="1122" x2="624" y2="1122" stroke="#94A3B8" strokeWidth="1" />
          {/* Pinned poster */}
          <rect x="612" y="1066" width="22" height="14" fill="#F5C77B" stroke="#5C4332" strokeWidth="0.6" />
        </g>

        {/* Welcome mat */}
        <rect x="346" y="1188" width="170" height="10" rx="2" fill="#5C4332" />
        <line x1="356" y1="1193" x2="506" y2="1193" stroke="#7C5439" strokeWidth="0.8" />

        {/* Bench under notice board */}
        <rect x="546" y="1140" width="106" height="10" fill="#7C5439" />
        <rect x="554" y="1150" width="6" height="40" fill="#5C4332" />
        <rect x="638" y="1150" width="6" height="40" fill="#5C4332" />
      </g>

      {/* ====================== BASEMENT — TECHNICKÉ SYSTÉMY ====================== */}
      <g className="bj-floor bj-floor-technicke">
        {/* Subtle utility light */}
        <line x1="280" y1="1206" x2="280" y2="1230" stroke="#3D2A1F" strokeWidth="1" />
        <ellipse cx="280" cy="1238" rx="18" ry="6" fill="#3D2A1F" />
        <ellipse cx="280" cy="1240" rx="14" ry="4" fill="url(#bj-lamp)" opacity="0.7" />

        {/* Boiler tank */}
        <g>
          <rect x="170" y="1280" width="84" height="150" rx="6" fill="#A8B3BD" stroke="#3D2A1F" strokeWidth="1.5" />
          <ellipse cx="212" cy="1280" rx="42" ry="6" fill="#A8B3BD" stroke="#3D2A1F" strokeWidth="1.5" />
          <ellipse cx="212" cy="1280" rx="42" ry="3" fill="#7A8590" />
          {/* Knobs */}
          <circle cx="195" cy="1320" r="6" fill="#3D2A1F" />
          <circle cx="195" cy="1320" r="3" fill="#7A8590" />
          <circle cx="230" cy="1320" r="6" fill="#A8463A" />
          <circle cx="230" cy="1320" r="3" fill="#5C2818" />
          {/* Display */}
          <rect x="186" y="1346" width="52" height="14" rx="2" fill="#0F172A" />
          <line x1="194" y1="1353" x2="206" y2="1353" stroke="#5C7C6A" strokeWidth="2" />
          <line x1="212" y1="1353" x2="222" y2="1353" stroke="#5C7C6A" strokeWidth="2" />
          {/* Outlet */}
          <rect x="200" y="1380" width="24" height="14" fill="#7A8590" stroke="#3D2A1F" />
        </g>

        {/* Pipes */}
        <g>
          <rect x="254" y="1290" width="320" height="6" fill="#A8B3BD" stroke="#3D2A1F" strokeWidth="0.6" />
          <rect x="254" y="1310" width="320" height="6" fill="#C25344" stroke="#5C2818" strokeWidth="0.6" />
          <rect x="254" y="1330" width="320" height="6" fill="#A8B3BD" stroke="#3D2A1F" strokeWidth="0.6" />
          {/* Pipe joints */}
          <circle cx="574" cy="1293" r="5" fill="#7A8590" stroke="#3D2A1F" />
          <circle cx="574" cy="1313" r="5" fill="#7A6055" stroke="#5C2818" />
          <circle cx="574" cy="1333" r="5" fill="#7A8590" stroke="#3D2A1F" />
          {/* Valve handle on hot pipe */}
          <rect x="380" y="1302" width="3" height="22" fill="#3D2A1F" />
          <circle cx="381" cy="1300" r="6" fill="#A8463A" stroke="#5C2818" />
        </g>

        {/* Electrical panel */}
        <g>
          <rect x="430" y="1356" width="130" height="70" rx="3" fill="#5C4A3D" stroke="#3D2A1F" strokeWidth="1.5" />
          <rect x="436" y="1362" width="118" height="58" rx="2" fill="#7A6B58" />
          {[442, 458, 474, 490, 506, 522, 538].map((x) => (
            <rect
              key={x}
              x={x}
              y="1374"
              width="10"
              height="22"
              rx="1"
              fill={(x / 16) % 2 < 1 ? "#A8B3BD" : "#A8463A"}
            />
          ))}
          {/* Indicator LEDs */}
          <circle cx="448" cy="1410" r="2.5" fill="#5C7C6A" />
          <circle cx="464" cy="1410" r="2.5" fill="#5C7C6A" />
          <circle cx="480" cy="1410" r="2.5" fill="#A8463A" />
        </g>

        {/* Meters */}
        <g>
          {[600, 642].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="1380" r="18" fill="#FFFFFF" stroke="#3D2A1F" strokeWidth="1.5" />
              <circle cx={cx} cy="1380" r="14" fill="none" stroke="#5C4332" strokeWidth="0.6" />
              <line x1={cx} y1="1380" x2={cx + 10} y2="1374" stroke="#3D2A1F" strokeWidth="2" />
              <circle cx={cx} cy="1380" r="2" fill="#3D2A1F" />
            </g>
          ))}
        </g>
      </g>

      {/* ====================== HIGHLIGHT OVERLAYS ====================== */}
      {/* Per-scene highlight (rounded rect). Parent fades them in/out. */}
      <g className="bj-highlights">
        {scenes
          .filter((s) => s.highlight)
          .map((s) => {
            const h = s.highlight!;
            return (
              <g key={s.id} className={`bj-highlight bj-highlight-${s.id}`} opacity="0">
                <rect
                  x={h.x}
                  y={h.y}
                  width={h.w}
                  height={h.h}
                  rx="14"
                  fill="#F5C77B"
                  opacity="0.10"
                />
                <rect
                  x={h.x}
                  y={h.y}
                  width={h.w}
                  height={h.h}
                  rx="14"
                  fill="none"
                  stroke="#F5C77B"
                  strokeWidth="3"
                  strokeOpacity="0.85"
                />
              </g>
            );
          })}
      </g>
    </svg>
  );
});

export default BuildingSVG;
