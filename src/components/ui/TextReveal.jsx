import { motion } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";
import { EASE, viewport as defaultViewport } from "../../lib/motion";

const container = (stagger, delay) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const word = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: EASE } },
};

/**
 * Reveals `text` word-by-word as it enters the viewport.
 * as: heading tag to render ("h1" | "h2" | "h3" | "p" | "span")
 */
export default function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
  once = true,
}) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  if (prefersReduced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ ...defaultViewport, once }}
        transition={{ duration: 0.2 }}
      >
        <Tag className={className}>{text}</Tag>
      </motion.div>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ ...defaultViewport, once }}
        variants={container(stagger, delay)}
        aria-label={text}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden pb-[0.1em] align-bottom"
            aria-hidden="true"
          >
            <motion.span className={`inline-block ${wordClassName}`} variants={word}>
              {w}
              {i !== words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
