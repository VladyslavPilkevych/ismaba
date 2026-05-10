import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BuildingSVG from "./BuildingSVG";
import SceneCard from "./SceneCard";
import MobileJourney from "./MobileJourney";
import { scenes, type Scene } from "./scenes";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useIsMobile } from "../../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

/**
 * Camera math (centre transform-origin).
 *
 * Layout:
 *  - The building wrapper sits centred against the open sky via CSS
 *    (its outer wrapper translates to the chosen anchor point in the
 *    viewport). GSAP applies translateY + scale to the inner wrapper
 *    with transform-origin: 50% 50%.
 *  - With the centre origin, scaling expands the building around its
 *    own centre. To bring a focus point f (0..1 of building height)
 *    to the viewport vertical centre we shift the wrapper by:
 *        tY = scale * (0.5 - focus) * bH
 *    where bH is the building wrapper's rendered height (px).
 *  - The camera stays mostly still — scenes only nudge tY (and a touch
 *    of scale) so the building never feels cropped.
 */
function cameraFor(scene: Scene, bH: number) {
  return {
    y: scene.scale * (0.5 - scene.focus) * bH,
    scale: scene.scale,
  };
}

function DesktopJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const progressFillRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const measure = () => buildingRef.current?.offsetHeight ?? 700;

      // Initial state — synchronous so first paint matches scene 0.
      const cam0 = cameraFor(scenes[0], measure());
      gsap.set(buildingRef.current, {
        y: cam0.y,
        scale: cam0.scale,
        transformOrigin: "50% 50%",
        force3D: true,
      });
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 18 });
      });
      const allHighlights = svgRef.current?.querySelectorAll(".bj-highlight");
      if (allHighlights) gsap.set(allHighlights, { opacity: 0 });

      const tl = gsap.timeline({
        defaults: { overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressFillRef.current) {
              progressFillRef.current.style.transform = `scaleY(${self.progress})`;
            }
          },
        },
      });

      // 1) Camera path — N-1 transitions, duration 1 each.
      for (let i = 1; i < scenes.length; i++) {
        const target = scenes[i];
        tl.to(
          buildingRef.current,
          {
            y: () => cameraFor(target, measure()).y,
            scale: () => cameraFor(target, measure()).scale,
            ease: "power1.inOut",
            duration: 1,
          },
          i - 1
        );
      }

      // 2) Card crossfades.
      scenes.forEach((_, i) => {
        const card = cardsRef.current[i];
        if (!card) return;
        if (i > 0) {
          tl.to(
            card,
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.5 },
            i - 0.55
          );
        }
        if (i < scenes.length - 1) {
          tl.to(
            card,
            { opacity: 0, y: -18, ease: "power2.in", duration: 0.5 },
            i - 0.05
          );
        }
      });

      // 3) Highlight pulses on the active floor.
      scenes.forEach((scene, i) => {
        if (!scene.highlight) return;
        const hl = svgRef.current?.querySelector(`.bj-highlight-${scene.id}`);
        if (!hl) return;
        tl.to(hl, { opacity: 1, ease: "power2.out", duration: 0.45 }, i - 0.4);
        tl.to(hl, { opacity: 0, ease: "power2.in", duration: 0.45 }, i + 0.15);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cesta"
      ref={sectionRef}
      className="relative bg-sky overflow-hidden"
      style={{ height: `${scenes.length * 100}vh` }}
      aria-label="Interaktívna cesta budovou"
    >
      <div ref={pinRef} className="h-screen w-full relative overflow-hidden">
        <div className="relative h-full mx-auto max-w-[1500px]">
          {/* Vertical scroll progress on the far left */}
          <div
            className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 h-[60%] w-px bg-ink-900/15 overflow-hidden"
            aria-hidden="true"
          >
            <div
              ref={progressFillRef}
              className="absolute inset-0 bg-brand-600 origin-top"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          {/* ---------- Central building stage ---------- */}
          {/* Outer wrapper — pure CSS positioning. Centres the inner
              wrapper at (~42%, 50%) of the stage, slightly left of true
              centre to leave breathing room for the floating card. */}
          <div className="absolute top-1/2 left-[44%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {/* Inner wrapper — receives the GSAP transform.
                Building height clamps so it stays readable on every
                viewport while filling ~80% of the screen height on a
                typical desktop. */}
            <div
              ref={buildingRef}
              className="will-change-transform"
              style={{ transformOrigin: "50% 50%" }}
            >
              <BuildingSVG
                ref={svgRef}
                className="block h-[clamp(480px,88vh,920px)] w-auto select-none"
              />
            </div>
          </div>

          {/* ---------- Floating story card overlay ---------- */}
          <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-full max-w-[460px] pointer-events-none">
            {scenes.map((scene, i) => (
              <div
                key={scene.id}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className={
                  i === 0
                    ? "pointer-events-auto"
                    : "absolute top-0 left-0 right-0 pointer-events-auto"
                }
              >
                <div className="rounded-2xl border border-white/60 bg-white/85 backdrop-blur-md shadow-soft px-7 py-7">
                  <SceneCard scene={scene} index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle warm haze along the horizon line so the building's
            earth strip blends gracefully into the sky background. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[18vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(232,221,196,0.55), rgba(232,221,196,0))",
          }}
        />
      </div>
    </section>
  );
}

export default function BuildingJourney() {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  if (reduced || isMobile) {
    return <MobileJourney />;
  }
  return <DesktopJourney />;
}
