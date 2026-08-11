import { motion } from "framer-motion";
import ImageLoader from "../loading/ImageLoader";
import useReducedMotion from "../../hooks/useReducedMotion";
import { EASE, viewport as defaultViewport } from "../../lib/motion";

const mask = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1, ease: EASE } },
};

const inner = {
  hidden: { scale: 1.25 },
  visible: { scale: 1, transition: { duration: 1.2, ease: EASE } },
};

export default function RevealImage({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  priority = false,
  delay = 0,
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className={`overflow-hidden ${wrapperClassName}`}>
        <ImageLoader src={src} alt={alt} priority={priority} className={`h-full w-full object-cover ${className}`} />
      </div>
    );
  }

  return (
    <motion.div
      className={`overflow-hidden ${wrapperClassName}`}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={mask}
      transition={{ delay }}
    >
      <motion.div variants={inner} transition={{ delay }} className="h-full w-full">
        <ImageLoader
          src={src}
          alt={alt}
          priority={priority}
          wrapperClassName="h-full w-full"
          className={`h-full w-full object-cover ${className}`}
        />
      </motion.div>
    </motion.div>
  );
}
