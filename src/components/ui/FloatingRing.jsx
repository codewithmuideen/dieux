import { motion } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";

/**
 * Decorative rotating ring accent — used behind hero imagery.
 * Purely ornamental, hidden from assistive tech, disabled under reduced motion.
 */
export default function FloatingRing({ className = "" }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute ${className} ${prefersReduced ? "" : "animate-spin-slower"}`}
      aria-hidden="true"
    >
      <circle
        cx="100"
        cy="100"
        r="98"
        fill="none"
        stroke="var(--color-gold)"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="2 8"
      />
    </motion.svg>
  );
}
