import { useState } from "react";
import ServiceCard, { type ServiceItem } from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import type { FallbackKind } from "./ServiceFallbackIcon";
import { useReveal } from "../../hooks/useReveal";

export const services: ServiceItem[] = [
  {
    id: "zateplenie",
    title: "Zateplenie",
    description: "Obnova fasády a zníženie energetickej náročnosti domu.",
    bullets: [
      "posúdenie stavu domu",
      "koordinácia projektu a realizácie",
      "podklady pre rozhodovanie vlastníkov",
    ],
    animation: "/animations/zateplenie.lottie",
    intro:
      "Pomáhame vlastníkom pripraviť obnovu bytového domu tak, aby bol celý proces technicky správny, finančne zrozumiteľný a dobre komunikovaný. Od prvotného posúdenia stavu až po koordináciu realizácie dohliadame na to, aby modernizácia mala jasný plán.",
    includes: [
      "posúdenie technického stavu domu",
      "prípravu podkladov pre rozhodovanie vlastníkov",
      "návrh postupu obnovy",
      "koordináciu rozpočtu a realizačných krokov",
      "komunikáciu s dodávateľmi a partnermi",
    ],
    helps: [
      "vysvetľujeme možnosti obnovy jasným spôsobom",
      "pripravujeme podklady pre schôdze a hlasovanie",
      "dohliadame na plynulý priebeh projektu",
    ],
    suitableFor:
      "Pre bytové domy, ktoré plánujú obnovu fasády, zateplenie alebo komplexnejšiu modernizáciu spoločných častí domu.",
  },
  {
    id: "kurenie",
    title: "Kúrenie",
    description:
      "Riešenia pre efektívne, bezpečné a spoľahlivé vykurovanie.",
    bullets: [
      "servis a odborné kontroly",
      "optimalizácia prevádzky",
      "komunikácia s dodávateľmi",
    ],
    animation: "/animations/kurenie.lottie",
    intro:
      "Správa vykurovania si vyžaduje odborný prístup, pravidelnú kontrolu a dobrú koordináciu servisu. Pomáhame riešiť technické otázky kúrenia tak, aby bola prevádzka stabilná, bezpečná a dlhodobo efektívna.",
    includes: [
      "servis a odborné kontroly",
      "komunikáciu so servisnými dodávateľmi",
      "riešenie porúch a prevádzkových problémov",
      "optimalizáciu prevádzky vykurovania",
      "sledovanie technických potrieb zariadení",
    ],
    helps: [
      "koordinujeme servisné zásahy",
      "pomáhame predchádzať výpadkom a nejasnostiam",
      "informujeme vlastníkov o dôležitých krokoch a stave riešenia",
    ],
    suitableFor:
      "Pre bytové domy, ktoré chcú mať vykurovanie pod kontrolou a potrebujú spoľahlivého partnera pre servis a technickú koordináciu.",
  },
  {
    id: "elektrina",
    title: "Elektrina",
    description:
      "Správa elektrických rozvodov, revízií a technických požiadaviek.",
    bullets: [
      "revízie a bezpečnosť",
      "riešenie porúch",
      "plánovanie opráv a modernizácie",
    ],
    animation: "/animations/elektrina.lottie",
    intro:
      "Elektrické rozvody a zariadenia sú dôležitou súčasťou bezpečného fungovania bytového domu. Pomáhame so správou revízií, plánovaním opráv a riešením technických požiadaviek tak, aby bol chod domu bezpečný a prehľadný.",
    includes: [
      "revízie a povinné kontroly",
      "riešenie porúch",
      "plánovanie opráv",
      "modernizáciu elektrických rozvodov",
      "komunikáciu s odbornými dodávateľmi",
    ],
    helps: [
      "koordinujeme technické riešenia a kontroly",
      "zabezpečujeme prehľad o povinnostiach a termínoch",
      "pomáhame nastavovať opravy a modernizáciu systematicky",
    ],
    suitableFor:
      "Pre bytové domy, ktoré potrebujú riešiť bezpečnosť, údržbu alebo obnovu elektrických zariadení a rozvodov.",
  },
  {
    id: "financovanie",
    title: "Financovanie obnovy",
    description:
      "Pomoc s plánom financovania pri obnove a modernizácii domu.",
    bullets: [
      "rozpočet a priority",
      "fond opráv",
      "podklady pre úver alebo dotácie",
    ],
    animation: "/animations/financovanie-obnovy.lottie",
    intro:
      "Obnova domu potrebuje nielen dobrý technický plán, ale aj rozumné finančné nastavenie. Pomáhame vlastníkom pripraviť financovanie obnovy tak, aby boli možnosti jasné, porovnateľné a dlhodobo udržateľné.",
    includes: [
      "rozpočet a stanovenie priorít",
      "prácu s fondom opráv",
      "podklady pre úver alebo dotácie",
      "porovnanie možností financovania",
      "finančné podklady pre vlastníkov",
    ],
    helps: [
      "pripravujeme prehľadné informácie pre rozhodovanie",
      "pomáhame zrozumiteľne vysvetliť finančné možnosti",
      "prepájame technický plán s realistickým financovaním",
    ],
    suitableFor:
      "Pre bytové domy, ktoré plánujú väčšiu obnovu, investície alebo chcú lepšie nastaviť fond opráv a financovanie ďalších krokov.",
  },
  {
    id: "poistenie",
    title: "Poistenie",
    description:
      "Prehľadné riešenie poistenia bytového domu a súvisiacich rizík.",
    bullets: [
      "kontrola poistného krytia",
      "komunikácia s poisťovňou",
      "podpora pri poistných udalostiach",
    ],
    animation: "/animations/poistenie.lottie",
    intro:
      "Poistenie domu by malo zodpovedať reálnym potrebám a rizikám. Pomáhame vlastníkom získať lepší prehľad o poistnom krytí, komunikácii s poisťovňou a postupoch pri poistných udalostiach.",
    includes: [
      "kontrolu poistného krytia",
      "komunikáciu s poisťovňou",
      "podporu pri poistných udalostiach",
      "evidenciu potrebných podkladov",
      "orientáciu v poistných možnostiach",
    ],
    helps: [
      "pomáhame vlastníkom zorientovať sa v tom, čo je kryté",
      "podporujeme komunikáciu pri škodových udalostiach",
      "zvyšujeme prehľad a istotu pri riešení poistných otázok",
    ],
    suitableFor:
      "Pre bytové domy, ktoré chcú mať istotu, že ich poistné riešenie zodpovedá reálnym potrebám domu.",
  },
];

export default function ServicesGrid() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [openId, setOpenId] = useState<FallbackKind | null>(null);
  const activeService = openId
    ? services.find((s) => s.id === openId) ?? null
    : null;

  return (
    <section className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            Služby
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
            Čo pre váš dom zabezpečíme
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            Päť kľúčových oblastí, ktoré pokrývame s dôrazom na prehľadnosť,
            zodpovednosť a dlhodobý plán.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpen={setOpenId}
            />
          ))}
        </div>
      </div>

      <ServiceModal service={activeService} onClose={() => setOpenId(null)} />
    </section>
  );
}
