import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";

/**
 * Vertical scroll drives horizontal movement of a pinned track.
 * `items.length` sets how much vertical runway the section occupies.
 */
export default function HorizontalScroll({ items, renderItem, trackClassName = "" }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // vw (not %) — percentage translate resolves against the track's own width,
  // which would wildly overshoot a track that's items.length * 100vw wide.
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(items.length - 1) * 100}vw`]);

  if (prefersReduced) {
    return (
      <div className={`flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 ${trackClassName}`}>
        {items.map((item, i) => (
          <div key={i} className="snap-start">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} style={{ height: `${items.length * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className={`flex ${trackClassName}`}>
          {items.map((item, i) => (
            <div key={i} className="w-screen shrink-0 px-6 md:px-16">
              {renderItem(item, i)}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
