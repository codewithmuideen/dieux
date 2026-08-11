import { motion } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";
import { fadeUp, reduced, viewport as defaultViewport } from "../../lib/motion";

export default function Reveal({
  as = "div",
  variants = fadeUp,
  delay = 0,
  className = "",
  children,
  once = true,
  viewport,
  ...rest
}) {
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;
  const activeVariants = prefersReduced ? reduced : variants;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport ?? { ...defaultViewport, once }}
      variants={activeVariants}
      transition={
        prefersReduced
          ? { duration: 0.2 }
          : { delay, ...(activeVariants.visible?.transition ?? {}) }
      }
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
