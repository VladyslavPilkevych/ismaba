/**
 * Each scene defines:
 *  - copy (chapter label, title, problem bubble, solution card)
 *  - camera state: focus point (fraction 0..1 of building height) + scale.
 *    Converted to pixel translateY at runtime by BuildingJourney.
 *  - highlight zone (rect on the building, in viewBox units 800x1700)
 *    used by BuildingSVG to softly emphasize the active floor.
 *
 * Building floor layout (viewBox 800x1700):
 *   Roof + facade   y  60–240   (Fasáda zone — exterior)
 *   Floor 4         y 240–480   (Komunikácia — community room)
 *   Floor 3         y 480–720   (Financie — home office)
 *   Floor 2         y 720–960   (Spoločné priestory — hallway + stairs)
 *   Floor 1         y 960–1200  (Vchod — ground entrance, ground line at 1200)
 *   Basement        y 1200–1440 (Technické systémy)
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
  /** Highlight rectangle in viewBox units (800x1700). Optional. */
  highlight?: { x: number; y: number; w: number; h: number };
}

export const SVG_VIEWBOX = { w: 800, h: 1700 };

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
    scale: 0.5,
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
    focus: 0.118,
    scale: 1.0,
    highlight: { x: 40, y: 40, w: 720, h: 220 },
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
    focus: 0.635,
    scale: 1.0,
    highlight: { x: 80, y: 960, w: 640, h: 240 },
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
    focus: 0.494,
    scale: 1.05,
    highlight: { x: 80, y: 720, w: 640, h: 240 },
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
    focus: 0.776,
    scale: 1.1,
    highlight: { x: 80, y: 1200, w: 640, h: 240 },
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
    focus: 0.353,
    scale: 1.05,
    highlight: { x: 80, y: 480, w: 640, h: 240 },
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
    focus: 0.212,
    scale: 1.05,
    highlight: { x: 80, y: 240, w: 640, h: 240 },
  },
  {
    id: "kontakt",
    kind: "final",
    chapter: "07 — Kontakt",
    title: "Váš dom môže fungovať pokojnejšie, prehľadnejšie a zodpovednejšie.",
    subtitle:
      "Spojte sa s nami a pozrime sa spolu na váš bytový dom. Pripravíme návrh správy presne podľa potrieb vašej komunity.",
    ctaPrimary: { label: "Kontaktujte ISMAA", href: "#kontakt" },
    focus: 0.5,
    scale: 0.55,
  },
];
