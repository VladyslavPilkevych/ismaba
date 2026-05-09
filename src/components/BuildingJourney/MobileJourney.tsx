import BuildingSVG from "./BuildingSVG";
import SceneCard from "./SceneCard";
import { scenes } from "./scenes";

/**
 * Simplified mobile / reduced-motion fallback.
 * Stacks scenes vertically with a small static cutaway header — no pinning,
 * no scrub, no transforms keyed to scroll. Browser native scrolling only.
 */
export default function MobileJourney() {
  return (
    <section
      id="cesta"
      className="bg-soft-radial"
      aria-label="Interaktívna cesta budovou — zjednodušená verzia"
    >
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-3xl border border-ink-100 bg-white shadow-card p-6">
          <div className="aspect-[2/3] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-white to-ink-50 bg-grid">
            <BuildingSVG className="w-full h-full" />
          </div>
        </div>

        <div className="mt-12 space-y-10">
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
