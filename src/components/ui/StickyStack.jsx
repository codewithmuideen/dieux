import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";

function vhToPx(vh) {
  const n = parseFloat(vh);
  return typeof window === "undefined" ? 0 : (n / 100) * window.innerHeight;
}

/**
 * One card in a sticky, cascading stack. Wrap a list of these in a
 * plain container — each card pins beneath the navbar and gently
 * scales/dims as the next card scrolls over it.
 *
 * The wrapper's height is set explicitly (card height + runway), measured
 * live via ResizeObserver — NOT via `padding-bottom` on an auto-height box.
 * That combination was tried first and silently breaks `position: sticky`
 * in this real-world layout (confirmed via direct A/B DOM testing: swapping
 * padding-bottom for an equal explicit height was the only thing that made
 * the card actually pin instead of scrolling past like a static element).
 *
 * `overlap` must stay comfortably smaller than `runway` — overlap eats into
 * the runway's scroll distance, and if the two are close, the actual "stick
 * window" (runway - overlap) collapses to a few px and the card never
 * visibly pins during normal scrolling. Keep at least ~25-30vh of net
 * runway - overlap at the call site.
 */
export function StickyStackItem({ index, children, className = "", runway = "60vh", overlap = "10vh" }) {
  const outerRef = useRef(null);
  const cardRef = useRef(null);
  const [wrapperHeight, setWrapperHeight] = useState(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0.55, 1], [1, 0.4]);
  const topOffset = 104 + index * 6;

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const update = () => setWrapperHeight(el.offsetHeight + vhToPx(runway));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [runway]);

  return (
    <div
      ref={outerRef}
      style={{ height: wrapperHeight ?? undefined, marginTop: index === 0 ? 0 : `-${overlap}` }}
    >
      <div ref={cardRef} className="sticky" style={{ top: `${topOffset}px`, zIndex: index + 1 }}>
        <motion.div
          style={prefersReduced ? undefined : { scale, opacity }}
          className={className}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
