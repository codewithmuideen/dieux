import { motion, AnimatePresence } from "framer-motion";

/**
 * Slim top-of-viewport progress bar for route transitions.
 * `active` true while a navigation is in flight.
 */
export default function PageLoader({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed left-0 top-0 z-[90] h-[2.5px] w-full bg-transparent"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.15 } }}
        >
          <motion.div
            className="h-full bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "78%" }}
            exit={{ width: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
