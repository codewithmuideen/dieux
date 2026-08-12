import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";
import { EASE } from "../../lib/motion";

// NOTE: deliberately opacity-only. Animating `scale`/`filter` here would apply
// a transform/filter to this wrapper — which is an ancestor of every page's
// content — and both properties create a new CSS containing block, which
// silently breaks `position: sticky` for any nested sticky element (e.g. the
// services sticky-stack cards). Keep this wrapper transform/filter-free.
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE, delay: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: EASE },
  },
};

const reducedVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

/**
 * Wraps routed page content: brand sweep overlay covers the viewport,
 * scroll resets underneath it, then the new page fades/scales in.
 * Keeps navigation inside the SPA — no full document reload, ever.
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const prefersReduced = useReducedMotion();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const variants = prefersReduced ? reducedVariants : pageVariants;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
