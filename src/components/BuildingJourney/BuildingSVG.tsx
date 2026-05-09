import { forwardRef } from "react";
import { scenes, SVG_VIEWBOX } from "./scenes";

/**
 * Lightweight SVG cutaway of an apartment building.
 *
 * Stylistic decisions:
 *  - 2.5D feel: flat, minimal, architectural — no perspective, no shadows.
 *  - All shapes are rect/line/circle/path with the same stroke palette,
 *    keeping the silhouette calm and corporate.
 *  - One highlight rect per scene is rendered up-front; the parent
 *    component fades them in/out via GSAP, so this component stays
 *    purely declarative.
 *  - Scene-specific zones get optional className hooks (`.zone-*`)
 *    so the parent can lightly emphasize the active floor's contents.
 */

type Props = {
  className?: string;
};

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
      aria-label="Bytový dom — schematický rez"
    >
      <defs>
        <linearGradient id="bj-bldg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFCFD" />
          <stop offset="100%" stopColor="#EEF2F6" />
        </linearGradient>
        <linearGradient id="bj-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
        <linearGradient id="bj-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="600" height="120" fill="url(#bj-sky)" />

      {/* Ground */}
      <rect x="0" y="2280" width="600" height="120" fill="url(#bj-ground)" />
      <line x1="0" y1="2280" x2="600" y2="2280" stroke="#94A3B8" strokeWidth="1" />

      {/* Building envelope */}
      <rect
        x="80"
        y="120"
        width="440"
        height="2160"
        fill="url(#bj-bldg)"
        stroke="#94A3B8"
        strokeWidth="1.5"
      />

      {/* Roof parapet */}
      <rect x="68" y="114" width="464" height="8" fill="#94A3B8" opacity="0.35" />

      {/* Floor separators */}
      <g stroke="#CBD5E1" strokeWidth="1">
        <line x1="80" y1="280" x2="520" y2="280" />
        <line x1="80" y1="540" x2="520" y2="540" />
        <line x1="80" y1="820" x2="520" y2="820" />
        <line x1="80" y1="1140" x2="520" y2="1140" />
        <line x1="80" y1="1380" x2="520" y2="1380" />
        <line x1="80" y1="1660" x2="520" y2="1660" />
      </g>

      {/* === FASÁDA (top facade with exterior windows + insulation) === */}
      <g className="bj-zone bj-zone-fasada">
        {/* Exterior windows on top floor */}
        <g>
          {[120, 220, 320, 420].map((x) => (
            <g key={x}>
              <rect
                x={x}
                y="160"
                width="60"
                height="80"
                fill="#E8EEF3"
                stroke="#94A3B8"
                strokeWidth="1"
                rx="2"
              />
              <line x1={x + 30} y1="160" x2={x + 30} y2="240" stroke="#94A3B8" />
              <line x1={x} y1="200" x2={x + 60} y2="200" stroke="#94A3B8" />
            </g>
          ))}
        </g>
        {/* Insulation indicator on outer walls (dashed brand lines) */}
        <g opacity="0.55">
          <line
            x1="80"
            y1="140"
            x2="80"
            y2="270"
            stroke="#1F8C84"
            strokeWidth="2"
            strokeDasharray="2 5"
          />
          <line
            x1="520"
            y1="140"
            x2="520"
            y2="270"
            stroke="#1F8C84"
            strokeWidth="2"
            strokeDasharray="2 5"
          />
        </g>
      </g>

      {/* === KOMUNIKÁCIA (top floor) — meeting room === */}
      <g className="bj-zone bj-zone-komunikacia">
        {/* Notice board */}
        <rect x="100" y="320" width="80" height="60" rx="3" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="115" y1="340" x2="165" y2="340" stroke="#CBD5E1" />
        <line x1="115" y1="352" x2="155" y2="352" stroke="#CBD5E1" />
        <line x1="115" y1="364" x2="160" y2="364" stroke="#CBD5E1" />

        {/* Meeting table + chairs */}
        <rect x="220" y="400" width="160" height="60" rx="6" fill="#FFFFFF" stroke="#94A3B8" />
        <circle cx="200" cy="430" r="9" fill="#CBD5E1" />
        <circle cx="400" cy="430" r="9" fill="#CBD5E1" />
        <circle cx="260" cy="385" r="9" fill="#CBD5E1" />
        <circle cx="340" cy="385" r="9" fill="#CBD5E1" />
        <circle cx="260" cy="475" r="9" fill="#CBD5E1" />
        <circle cx="340" cy="475" r="9" fill="#CBD5E1" />

        {/* Speech bubbles */}
        <rect x="430" y="320" width="60" height="34" rx="14" fill="#EEF6F5" stroke="#7FC3BD" />
        <rect x="450" y="358" width="40" height="26" rx="11" fill="#FFFFFF" stroke="#7FC3BD" />
      </g>

      {/* === FINANCIE — dashboard cards & charts === */}
      <g className="bj-zone bj-zone-financie">
        {/* Card 1 — KPI */}
        <rect x="120" y="600" width="120" height="80" rx="6" fill="#FFFFFF" stroke="#94A3B8" />
        <rect x="135" y="615" width="40" height="6" rx="3" fill="#CBD5E1" />
        <rect x="135" y="630" width="60" height="20" rx="2" fill="#1F8C84" opacity="0.7" />
        <rect x="135" y="655" width="40" height="8" rx="2" fill="#CBD5E1" />

        {/* Card 2 — bar chart */}
        <rect x="260" y="600" width="120" height="80" rx="6" fill="#FFFFFF" stroke="#94A3B8" />
        <rect x="275" y="615" width="50" height="6" rx="3" fill="#CBD5E1" />
        <rect x="275" y="660" width="10" height="20" fill="#1F8C84" />
        <rect x="290" y="650" width="10" height="30" fill="#1F8C84" opacity="0.75" />
        <rect x="305" y="640" width="10" height="40" fill="#1F8C84" />
        <rect x="320" y="655" width="10" height="25" fill="#1F8C84" opacity="0.55" />
        <rect x="335" y="645" width="10" height="35" fill="#1F8C84" opacity="0.85" />

        {/* Card 3 — document */}
        <rect x="400" y="600" width="80" height="80" rx="6" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="415" y1="620" x2="465" y2="620" stroke="#CBD5E1" />
        <line x1="415" y1="635" x2="450" y2="635" stroke="#CBD5E1" />
        <line x1="415" y1="650" x2="465" y2="650" stroke="#CBD5E1" />
        <line x1="415" y1="665" x2="445" y2="665" stroke="#CBD5E1" />

        {/* Desk line */}
        <line x1="100" y1="785" x2="500" y2="785" stroke="#94A3B8" strokeWidth="1.5" />
      </g>

      {/* === SPOLOČNÉ PRIESTORY — hallway + stairs === */}
      <g className="bj-zone bj-zone-spolocne">
        {/* Apartment doors on sides */}
        <rect x="100" y="900" width="40" height="80" fill="#FFFFFF" stroke="#94A3B8" />
        <circle cx="132" cy="940" r="2" fill="#94A3B8" />
        <rect x="160" y="900" width="40" height="80" fill="#FFFFFF" stroke="#94A3B8" />
        <circle cx="188" cy="940" r="2" fill="#94A3B8" />

        <rect x="400" y="900" width="40" height="80" fill="#FFFFFF" stroke="#94A3B8" />
        <circle cx="408" cy="940" r="2" fill="#94A3B8" />
        <rect x="460" y="900" width="40" height="80" fill="#FFFFFF" stroke="#94A3B8" />
        <circle cx="468" cy="940" r="2" fill="#94A3B8" />

        {/* Staircase (zigzag step pattern) */}
        <g stroke="#94A3B8" strokeWidth="1.5" fill="none">
          <polyline points="240,1100 260,1100 260,1080 280,1080 280,1060 300,1060 300,1040 320,1040 320,1020 340,1020 340,1000 360,1000" />
        </g>
        {/* Handrail */}
        <line x1="240" y1="1080" x2="360" y2="980" stroke="#7FC3BD" strokeWidth="1.5" />

        {/* Hallway floor line */}
        <line x1="100" y1="1110" x2="500" y2="1110" stroke="#CBD5E1" />
      </g>

      {/* === APARTMENTS (passive zone, ambient detail) === */}
      <g className="bj-zone bj-zone-byty">
        {/* Left apartment: window + sofa silhouette */}
        <rect x="140" y="1180" width="80" height="30" rx="6" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="140" y1="1200" x2="220" y2="1200" stroke="#94A3B8" />
        <line x1="240" y1="1180" x2="240" y2="1330" stroke="#CBD5E1" />
        <circle cx="240" cy="1180" r="6" fill="#FFE9A8" />

        {/* Right apartment */}
        <rect x="380" y="1180" width="80" height="30" rx="6" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="380" y1="1200" x2="460" y2="1200" stroke="#94A3B8" />
        <circle cx="360" cy="1180" r="6" fill="#FFE9A8" />

        {/* Apartment divider */}
        <line
          x1="300"
          y1="1145"
          x2="300"
          y2="1378"
          stroke="#CBD5E1"
          strokeDasharray="3 4"
        />

        {/* tables */}
        <rect x="160" y="1320" width="40" height="20" fill="#FFFFFF" stroke="#94A3B8" />
        <rect x="400" y="1320" width="40" height="20" fill="#FFFFFF" stroke="#94A3B8" />
      </g>

      {/* === VCHOD — entrance, mailboxes, board, ISMAA sign === */}
      <g className="bj-zone bj-zone-vchod">
        {/* Entrance light */}
        <circle cx="300" cy="1430" r="6" fill="#FFE9A8" stroke="#94A3B8" strokeWidth="0.5" />
        <line x1="294" y1="1432" x2="306" y2="1432" stroke="#94A3B8" />

        {/* Double doors */}
        <rect
          x="240"
          y="1480"
          width="120"
          height="160"
          rx="4"
          fill="#FFFFFF"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />
        <line x1="300" y1="1480" x2="300" y2="1640" stroke="#94A3B8" />
        <circle cx="290" cy="1560" r="2" fill="#94A3B8" />
        <circle cx="310" cy="1560" r="2" fill="#94A3B8" />
        <rect x="252" y="1495" width="42" height="32" rx="2" fill="#EEF6F5" stroke="#7FC3BD" />
        <rect x="306" y="1495" width="42" height="32" rx="2" fill="#EEF6F5" stroke="#7FC3BD" />

        {/* Mailboxes */}
        <rect x="120" y="1480" width="80" height="100" rx="3" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="120" y1="1505" x2="200" y2="1505" stroke="#CBD5E1" />
        <line x1="120" y1="1530" x2="200" y2="1530" stroke="#CBD5E1" />
        <line x1="120" y1="1555" x2="200" y2="1555" stroke="#CBD5E1" />
        <line x1="160" y1="1480" x2="160" y2="1580" stroke="#CBD5E1" />

        {/* Notice board */}
        <rect x="400" y="1480" width="80" height="60" rx="3" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="415" y1="1500" x2="465" y2="1500" stroke="#CBD5E1" />
        <line x1="415" y1="1515" x2="455" y2="1515" stroke="#CBD5E1" />
        <line x1="415" y1="1530" x2="460" y2="1530" stroke="#CBD5E1" />

        {/* ISMAA sign */}
        <rect x="408" y="1558" width="64" height="22" rx="4" fill="#0F172A" />
        <text
          x="440"
          y="1574"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="12"
          fontWeight="600"
          fill="#FFFFFF"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          ISMAA
        </text>

        {/* Ground floor line */}
        <line x1="80" y1="1640" x2="520" y2="1640" stroke="#94A3B8" strokeWidth="1" />
      </g>

      {/* === TECHNICKÉ SYSTÉMY — boiler, pipes, panel, meters === */}
      <g className="bj-zone bj-zone-technicke">
        {/* Boiler */}
        <rect x="120" y="1820" width="80" height="160" rx="8" fill="#FFFFFF" stroke="#94A3B8" />
        <ellipse cx="160" cy="1820" rx="40" ry="6" fill="#FFFFFF" stroke="#94A3B8" />
        <circle cx="145" cy="1860" r="5" fill="#CBD5E1" />
        <circle cx="175" cy="1860" r="5" fill="#1F8C84" opacity="0.6" />
        <line x1="135" y1="1900" x2="185" y2="1900" stroke="#CBD5E1" />
        <line x1="135" y1="1920" x2="175" y2="1920" stroke="#CBD5E1" />
        <line x1="135" y1="1940" x2="185" y2="1940" stroke="#CBD5E1" />

        {/* Pipes */}
        <line x1="200" y1="1840" x2="500" y2="1840" stroke="#94A3B8" strokeWidth="2" />
        <line x1="200" y1="1865" x2="500" y2="1865" stroke="#7FC3BD" strokeWidth="2" />
        <line x1="200" y1="1890" x2="500" y2="1890" stroke="#94A3B8" strokeWidth="2" />
        <circle cx="500" cy="1840" r="4" fill="#FFFFFF" stroke="#94A3B8" />
        <circle cx="500" cy="1865" r="4" fill="#FFFFFF" stroke="#94A3B8" />
        <circle cx="500" cy="1890" r="4" fill="#FFFFFF" stroke="#94A3B8" />

        {/* Electrical panel */}
        <rect x="320" y="2000" width="100" height="90" rx="4" fill="#FFFFFF" stroke="#94A3B8" />
        <rect x="335" y="2015" width="10" height="24" rx="2" fill="#CBD5E1" />
        <rect x="350" y="2015" width="10" height="24" rx="2" fill="#1F8C84" opacity="0.6" />
        <rect x="365" y="2015" width="10" height="24" rx="2" fill="#CBD5E1" />
        <rect x="380" y="2015" width="10" height="24" rx="2" fill="#CBD5E1" />
        <rect x="395" y="2015" width="10" height="24" rx="2" fill="#1F8C84" opacity="0.6" />
        <circle cx="370" cy="2065" r="14" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="370" y1="2065" x2="378" y2="2058" stroke="#0F172A" strokeWidth="1.5" />

        {/* Meters */}
        <circle cx="160" cy="2060" r="14" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="160" y1="2060" x2="166" y2="2054" stroke="#0F172A" strokeWidth="1.5" />
        <circle cx="200" cy="2060" r="14" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="200" y1="2060" x2="194" y2="2055" stroke="#0F172A" strokeWidth="1.5" />
        <circle cx="240" cy="2060" r="14" fill="#FFFFFF" stroke="#94A3B8" />
        <line x1="240" y1="2060" x2="248" y2="2058" stroke="#0F172A" strokeWidth="1.5" />
      </g>

      {/* Building base */}
      <line x1="80" y1="2280" x2="520" y2="2280" stroke="#64748B" strokeWidth="2" />

      {/* Active highlight rectangles — one per scene that has a highlight.
         Parent fades them in/out via GSAP. */}
      <g className="bj-highlights">
        {scenes
          .filter((s) => s.highlight)
          .map((s) => (
            <g key={s.id} className={`bj-highlight bj-highlight-${s.id}`} opacity="0">
              <rect
                x={s.highlight!.x}
                y={s.highlight!.y}
                width={s.highlight!.w}
                height={s.highlight!.h}
                rx="10"
                fill="#1F8C84"
                opacity="0.05"
              />
              <rect
                x={s.highlight!.x}
                y={s.highlight!.y}
                width={s.highlight!.w}
                height={s.highlight!.h}
                rx="10"
                fill="none"
                stroke="#1F8C84"
                strokeWidth="2"
                strokeDasharray="0"
              />
            </g>
          ))}
      </g>
    </svg>
  );
});

export default BuildingSVG;
