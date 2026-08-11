import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";
import StaggerGroup from "./StaggerGroup";
import SectionHeading from "./SectionHeading";
import { fadeUp, EASE } from "../../lib/motion";
import { FAQS } from "../../lib/faq";

export default function Faq({ className = "" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32 ${className}`}>
      <SectionHeading
        kicker="FAQ"
        heading="Your questions, answered."
        supporting="Everything you need to know before getting started."
        align="center"
        className="mx-auto mb-14"
      />
      <StaggerGroup stagger={0.06} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {FAQS.map((item, i) => (
          <Reveal key={item.q} variants={fadeUp}>
            <FaqItem
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          </Reveal>
        ))}
      </StaggerGroup>
    </section>
  );
}

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl border p-6 transition-colors duration-300 ${
        isOpen ? "border-navy/15 bg-white shadow-[0_16px_40px_-24px_rgba(14,43,43,0.35)]" : "border-stone-dark/60 bg-white"
      }`}
    >
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 text-left" aria-expanded={isOpen}>
        <span className="font-semibold text-navy">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? "bg-navy text-cream" : "bg-stone text-navy"
          }`}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed text-navy/60">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
