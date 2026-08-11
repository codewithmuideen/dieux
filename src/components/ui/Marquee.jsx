import { motion } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";

/**
 * Infinite horizontal scrolling strip. Duplicates `items` so the loop
 * seams invisibly. Under reduced motion, renders a static (non-animated) row.
 */
export default function Marquee({ items, className = "", speed = 28, reverse = false }) {
  const prefersReduced = useReducedMotion();
  const loop = [...items, ...items];

  if (prefersReduced) {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-3 ${className}`}>
        {items.map((item, i) => (
          <MarqueeItem key={i} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
    >
      <motion.div
        className="flex shrink-0 items-center gap-10 pr-10"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <MarqueeItem key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function MarqueeItem({ item }) {
  return (
    <span className="flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-current/70">
      {item}
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
    </span>
  );
}
