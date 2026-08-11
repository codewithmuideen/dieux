import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";

/**
 * One card in a sticky, cascading stack. Wrap a list of these in a
 * plain container — each card pins beneath the navbar and gently
 * scales/dims as the next card scrolls over it.
 */
export function StickyStackItem({ index, children, className = "", runway = "60vh", overlap = "22vh" }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0.55, 1], [1, 0.4]);
  const topOffset = 104 + index * 6;

  return (
    <div
      ref={ref}
      style={{ paddingBottom: runway, marginTop: index === 0 ? 0 : `-${overlap}` }}
    >
      <div className="sticky" style={{ top: `${topOffset}px`, zIndex: index + 1 }}>
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
