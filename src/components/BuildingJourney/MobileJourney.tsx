import BuildingSVG from "./BuildingSVG";
import SceneCard from "./SceneCard";
import { scenes } from "./scenes";

/**
 * Mobile / reduced-motion fallback.
 * Stacked story — no pinning, no scrub, no scroll-keyed transforms.
 * The illustrated building anchors the top of the section, and each
 * service is listed below as a regular card.
 */
export default function MobileJourney() {
  return (
    <section
      id="cesta"
      className="bg-sky"
      aria-label="Interaktívna cesta budovou — zjednodušená verzia"
    >
      <div className="mx-auto max-w-2xl px-6 pt-12 pb-20">
        <div className="aspect-[4/7] w-full">
          <BuildingSVG className="block w-full h-full" />
        </div>

        <div className="mt-12 space-y-8">
          {scenes.map((scene, i) => (
            <article
              key={scene.id}
              className="rounded-2xl border border-ink-100 bg-white shadow-card p-6"
            >
              <SceneCard scene={scene} index={i} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
