/**
 * Each scene defines:
 *  - copy (chapter label, title, problem bubble, solution card)
 *  - camera state: where the building should sit relative to the viewport,
 *    expressed as a focus point (fraction 0..1 of building height) +
 *    scale factor. Positions are converted to pixel translateY at runtime
 *    based on the measured viewport / building heights.
 *  - highlight zone (a rect on the building, in viewBox units 600x2400)
 *    used by BuildingSVG to gently emphasize the active floor.
 */

export type SceneKind = "opening" | "scene" | "final";

export interface Scene {
  id: string;
  kind: SceneKind;
  chapter?: string;
  title: string;
  subtitle?: string;
  problem?: string;
  solutionTitle?: string;
  solutionBody?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  /** Fraction of the building's intrinsic rendered height (0=top, 1=bottom) we want at viewport center. */
  focus: number;
  /** Camera scale applied to the building element (1.0 = natural rendered size). */
  scale: number;
  /** Highlight rectangle in viewBox units (600x2400). Optional. */
  highlight?: { x: number; y: number; w: number; h: number };
}

export const SVG_VIEWBOX = { w: 600, h: 2400 };

export const scenes: Scene[] = [
  {
    id: "opening",
    kind: "opening",
    chapter: "Úvod",
    title: "Správa bytových domov, ktorá dáva vlastníkom pokoj.",
    subtitle:
      "Technický, ekonomický a poradenský servis pre bytové domy — prehľadne, spoľahlivo a s dôrazom na každodenné potreby vlastníkov.",
    ctaPrimary: { label: "Kontaktujte nás", href: "#kontakt" },
    ctaSecondary: { label: "Pozrieť služby", href: "#sluzby" },
    focus: 0.5,
    scale: 0.4,
  },
  {
    id: "fasada",
    kind: "scene",
    chapter: "01 — Fasáda",
    title: "Modernizácia, ktorá má plán",
    problem: "Potrebujeme zateplenie. Ako začať a ako to financovať?",
    solutionTitle: "Plán modernizácie a financovanie",
    solutionBody:
      "Pomôžeme s plánom obnovy, financovaním a koordináciou realizácie — od posúdenia stavu fasády až po odovzdanie diela.",
    focus: 0.08,
    scale: 1.05,
    highlight: { x: 60, y: 80, w: 480, h: 320 },
  },
  {
    id: "vchod",
    kind: "scene",
    chapter: "02 — Vchod",
    title: "Vchod, ktorý funguje",
    problem: "Niečo vo vchode nefunguje. Kto to vyrieši?",
    solutionTitle: "Technická správa a údržba",
    solutionBody:
      "Zabezpečujeme technickú správu, komunikáciu s dodávateľmi a riešenie každodenných požiadaviek vlastníkov.",
    focus: 0.62,
    scale: 1.15,
    highlight: { x: 60, y: 1380, w: 480, h: 280 },
  },
  {
    id: "spolocne",
    kind: "scene",
    chapter: "03 — Spoločné priestory",
    title: "Chodby, schody, pivnice",
    problem: "Spoločné priestory potrebujú opravu alebo modernizáciu.",
    solutionTitle: "Postup, rozpočet, rozhodnutie",
    solutionBody:
      "Navrhneme postup, pripravíme rozpočet a pomôžeme vlastníkom rozhodnúť sa — s podkladmi, ktoré sú jasné a porovnateľné.",
    focus: 0.38,
    scale: 1.15,
    highlight: { x: 60, y: 820, w: 480, h: 320 },
  },
  {
    id: "technicke",
    kind: "scene",
    chapter: "04 — Technické systémy",
    title: "Bezpečný chod domu",
    problem: "Máme problém s kúrením, elektrikou alebo technickým zariadením.",
    solutionTitle: "Servis, kontroly, riešenia",
    solutionBody:
      "Koordinujeme odborný servis, povinné kontroly a technické riešenia tak, aby dom fungoval bezpečne a bez prekvapení.",
    focus: 0.85,
    scale: 1.2,
    highlight: { x: 60, y: 1900, w: 480, h: 360 },
  },
  {
    id: "financie",
    kind: "scene",
    chapter: "05 — Financie",
    title: "Prehľadné hospodárenie",
    problem: "Kam idú naše platby a ako sa používa fond opráv?",
    solutionTitle: "Vyúčtovanie a fond opráv",
    solutionBody:
      "Zabezpečujeme prehľadné hospodárenie, vyúčtovanie a správu fondu opráv — s dokladmi, ktoré si môže pozrieť každý vlastník.",
    focus: 0.27,
    scale: 1.1,
    highlight: { x: 60, y: 500, w: 480, h: 300 },
  },
  {
    id: "komunikacia",
    kind: "scene",
    chapter: "06 — Komunikácia",
    title: "Rozhodnutia, ktoré držia",
    problem: "Vlastníci sa nevedia dohodnúť alebo nemajú dosť informácií.",
    solutionTitle: "Schôdze a transparentnosť",
    solutionBody:
      "Pomáhame s prípravou schôdzí, podkladmi pre hlasovanie a komunikáciou s vlastníkmi — aby rozhodnutia mali oporu a dom mal pokoj.",
    focus: 0.16,
    scale: 1.05,
    highlight: { x: 60, y: 240, w: 480, h: 280 },
  },
  {
    id: "final",
    kind: "final",
    chapter: "Záver",
    title: "Váš dom môže fungovať pokojnejšie, prehľadnejšie a zodpovednejšie.",
    subtitle:
      "Spojte sa s nami a pozrime sa spolu na váš bytový dom. Pripravíme návrh správy presne podľa potrieb vašej komunity.",
    ctaPrimary: { label: "Kontaktujte ISMAA", href: "#kontakt" },
    focus: 0.5,
    scale: 0.42,
  },
];
