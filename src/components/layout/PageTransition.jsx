import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";
import { EASE } from "../../lib/motion";

const pageVariants = {
  initial: { opacity: 0, scale: 0.98, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE, delay: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(6px)",
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
