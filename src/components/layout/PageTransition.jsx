import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoMark from "../../assets/brand/mark-light.svg";
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
  const [sweeping, setSweeping] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (prefersReduced) {
      window.scrollTo(0, 0);
      return;
    }
    setSweeping(true);
    const scrollTimer = setTimeout(() => window.scrollTo(0, 0), 220);
    const endTimer = setTimeout(() => setSweeping(false), 480);
    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(endTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const variants = prefersReduced ? reducedVariants : pageVariants;

  return (
    <>
      <AnimatePresence>
        {sweeping && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[95] flex items-center justify-center bg-panel"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <img src={logoMark} alt="" className="h-9 w-9 opacity-90" />
          </motion.div>
        )}
      </AnimatePresence>
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
    </>
  );
}
