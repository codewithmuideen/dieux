import { motion } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";
import { staggerContainer, viewport as defaultViewport } from "../../lib/motion";

export default function StaggerGroup({
  as = "div",
  stagger = 0.12,
  delayChildren = 0,
  className = "",
  children,
  once = true,
  ...rest
}) {
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...defaultViewport, once }}
      variants={staggerContainer(prefersReduced ? 0 : stagger, prefersReduced ? 0 : delayChildren)}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
