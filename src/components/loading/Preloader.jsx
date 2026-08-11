import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/brand/mark-light.svg";
import useReducedMotion from "../../hooks/useReducedMotion";
import { EASE } from "../../lib/motion";

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const prefersReduced = useReducedMotion();
  const rafRef = useRef(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const start = performance.now();
    const minDuration = prefersReduced ? 250 : 3000;

    const tick = (now) => {
      const elapsed = now - start;
      // Ease toward 92% while waiting on real load — never fully blocks on it.
      const eased = 92 * (1 - Math.exp(-elapsed / 500));
      setProgress((p) => Math.max(p, eased));
      if (!doneRef.current) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      cancelAnimationFrame(rafRef.current);
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDuration - elapsed);
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setExiting(true), prefersReduced ? 80 : 260);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("load", finish);
    };
  }, [prefersReduced]);

  const displayed = Math.round(progress);

  if (prefersReduced) {
    return (
      <AnimatePresence onExitComplete={onFinish}>
        {!exiting && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-panel"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <img src={logo} alt="Dieux" className="h-10 w-10" />
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!exiting && (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-panel"
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: EASE }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-panel"
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: EASE }}
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="relative flex h-24 w-24 items-center justify-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slower">
                <circle cx="50" cy="50" r="44" fill="none" stroke="#22c55e" strokeOpacity="0.15" strokeWidth="1.5" />
              </svg>
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="70 207"
                />
              </svg>
              <img src={logo} alt="Dieux" className="relative h-12 w-12" />
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="h-px w-32 overflow-hidden bg-panel-light">
                <motion.div
                  className="h-full bg-gold"
                  style={{ width: `${displayed}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <span className="font-mono text-xs tracking-[0.3em] text-on-panel/70 tabular-nums">
                {String(displayed).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
