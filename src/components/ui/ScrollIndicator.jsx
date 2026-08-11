import { motion, useScroll, useTransform } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";

export default function ScrollIndicator({ className = "", dark = false }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 160], [1, 0]);
  const prefersReduced = useReducedMotion();
  const tone = dark ? "text-on-panel/70" : "text-navy/60";

  return (
    <motion.div
      style={{ opacity: prefersReduced ? 1 : opacity }}
      className={`flex flex-col items-center gap-3 ${tone} ${className}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll to explore</span>
      <span className="relative h-12 w-px overflow-hidden bg-current/25">
        {!prefersReduced && (
          <motion.span
            className="absolute left-0 top-0 h-3 w-px bg-current"
            animate={{ y: [0, 36, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </span>
    </motion.div>
  );
}
