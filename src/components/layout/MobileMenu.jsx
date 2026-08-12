import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Mail, Phone, ChevronDown } from "lucide-react";
import Button from "../ui/Button";
import { NAV_LINKS, CONTACT } from "../../lib/contact";
import { SERVICES } from "../../lib/services";
import { EASE } from "../../lib/motion";

const panel = {
  closed: { opacity: 0, y: -12 },
  open: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: EASE } },
};

const list = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  closed: {},
};

const item = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function MobileMenu({ open, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-x-0 top-[68px] z-40 max-h-[calc(100vh-68px)] overflow-y-auto bg-cream shadow-xl md:hidden"
          initial="closed"
          animate="open"
          exit="exit"
          variants={panel}
        >
          <motion.nav className="flex flex-col gap-1 p-3" variants={list} initial="closed" animate="open">
            {NAV_LINKS.map((link) =>
              link.to === "/services" ? (
                <motion.div key={link.to} variants={item}>
                  <button
                    onClick={() => setServicesOpen((o) => !o)}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-navy/70 transition-colors hover:bg-stone/60 hover:text-navy"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-0.5 py-1 pl-4">
                          {SERVICES.map((s) => (
                            <NavLink
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              onClick={onClose}
                              className="rounded-xl px-4 py-2 text-sm text-navy/60 transition-colors hover:bg-stone/60 hover:text-navy"
                            >
                              {s.title}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div key={link.to} variants={item}>
                  <NavLink
                    to={link.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                        isActive ? "bg-stone text-navy" : "text-navy/70 hover:bg-stone/60 hover:text-navy"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              )
            )}
          </motion.nav>

          <motion.div variants={item} className="flex flex-col gap-3 border-t border-navy/10 p-4">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm text-navy/60 transition-colors hover:text-gold">
              <Mail className="h-4 w-4 shrink-0" /> {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-sm text-navy/60 transition-colors hover:text-gold">
              <Phone className="h-4 w-4 shrink-0" /> {CONTACT.phoneDisplay}
            </a>
            <Button to="/contact" variant="primary" className="mt-1 w-full !justify-center">
              Contact us
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
