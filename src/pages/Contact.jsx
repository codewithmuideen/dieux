import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import StaggerGroup from "../components/ui/StaggerGroup";
import SubmitButton from "../components/ui/SubmitButton";
import { fadeUp, slideLeft, EASE } from "../lib/motion";
import { CONTACT } from "../lib/contact";

const FIELDS = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email" },
  { name: "company", label: "Company (optional)", type: "text", autoComplete: "organization" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1400);
  };

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 pb-24 pt-36 md:grid-cols-2 md:px-10 md:pb-32 md:pt-44">
      <div className="flex flex-col justify-center gap-8">
        <div>
          <Reveal variants={slideLeft} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
              Contact
            </span>
          </Reveal>
          <Reveal variants={slideLeft} delay={0.1}>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Let's talk about your business.
            </h1>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.3} className="mt-6 max-w-md text-lg leading-relaxed text-navy/60">
            Tell us a little about where things stand. We'll come back to you
            within one working day.
          </Reveal>
        </div>

        <StaggerGroup stagger={0.1} className="flex flex-col gap-5">
          <Reveal variants={fadeUp} as="a" href={`mailto:${CONTACT.email}`} className="group flex items-center gap-4">
            <IconTile><Mail className="h-4.5 w-4.5" /></IconTile>
            <div>
              <p className="text-xs uppercase tracking-wide text-navy/45">Email</p>
              <p className="font-semibold text-navy group-hover:text-gold transition-colors">{CONTACT.email}</p>
            </div>
          </Reveal>
          <Reveal variants={fadeUp} as="a" href={`tel:${CONTACT.phone}`} className="group flex items-center gap-4">
            <IconTile><Phone className="h-4.5 w-4.5" /></IconTile>
            <div>
              <p className="text-xs uppercase tracking-wide text-navy/45">Phone</p>
              <p className="font-semibold text-navy group-hover:text-gold transition-colors">{CONTACT.phoneDisplay}</p>
            </div>
          </Reveal>
          <Reveal variants={fadeUp} className="flex items-center gap-4">
            <IconTile><MapPin className="h-4.5 w-4.5" /></IconTile>
            <div>
              <p className="text-xs uppercase tracking-wide text-navy/45">Office</p>
              <p className="font-semibold text-navy">{CONTACT.address[0]}, {CONTACT.address[1]}</p>
            </div>
          </Reveal>
          <Reveal variants={fadeUp} className="flex items-center gap-4">
            <IconTile><Clock className="h-4.5 w-4.5" /></IconTile>
            <div>
              <p className="text-xs uppercase tracking-wide text-navy/45">Hours</p>
              <p className="font-semibold text-navy">{CONTACT.hours}</p>
            </div>
          </Reveal>
        </StaggerGroup>
      </div>

      <Reveal variants={fadeUp} delay={0.15} className="rounded-3xl border border-stone-dark/60 bg-white p-8 md:p-10">
        <AnimatePresence mode="wait">
          {status === "success" ? <SuccessState key="success" /> : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="flex flex-col gap-6"
            >
              <StaggerGroup stagger={0.08} className="flex flex-col gap-6">
                {FIELDS.map((field) => (
                  <Reveal variants={fadeUp} key={field.name} className="flex flex-col gap-2">
                    <label htmlFor={field.name} className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      required={field.name !== "company"}
                      className="rounded-xl border border-stone-dark/70 bg-stone-light px-4 py-3.5 text-navy outline-none transition-colors focus:border-navy"
                    />
                  </Reveal>
                ))}
                <Reveal variants={fadeUp} className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="resize-none rounded-xl border border-stone-dark/70 bg-stone-light px-4 py-3.5 text-navy outline-none transition-colors focus:border-navy"
                  />
                </Reveal>
                <Reveal variants={fadeUp}>
                  <SubmitButton status={status} />
                </Reveal>
              </StaggerGroup>
            </motion.form>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  );
}

function IconTile({ children }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone text-navy">
      {children}
    </span>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center gap-5 py-16 text-center"
    >
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-cream"
      >
        <motion.svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <motion.path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          />
        </motion.svg>
      </motion.span>
      <div>
        <h3 className="text-2xl font-bold text-navy">Thank you.</h3>
        <p className="mt-2 text-navy/60">Your message has been received — we'll be in touch shortly.</p>
      </div>
    </motion.div>
  );
}
