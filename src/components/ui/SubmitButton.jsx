import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Spinner from "../loading/Spinner";

/**
 * status: "idle" | "loading" | "success"
 */
export default function SubmitButton({ status, idleLabel = "Send message", className = "" }) {
  const label =
    status === "loading" ? "Sending..." : status === "success" ? "Message sent" : idleLabel;

  return (
    <motion.button
      type="submit"
      disabled={status !== "idle"}
      whileHover={status === "idle" ? { scale: 1.015 } : undefined}
      whileTap={status === "idle" ? { scale: 0.98 } : undefined}
      className={`group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-navy px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream transition-colors duration-300 disabled:cursor-not-allowed ${
        status === "success" ? "bg-emerald-700" : ""
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={status}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2.5"
        >
          {status === "loading" && <Spinner size={16} className="text-cream" />}
          {status === "success" && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Check className="h-4 w-4" strokeWidth={3} />
            </motion.span>
          )}
          {label}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
