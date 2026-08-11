import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import Button from "../ui/Button";
import { NAV_LINKS, CONTACT } from "../../lib/contact";
import { EASE } from "../../lib/motion";

const panel = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: EASE } },
};

const list = {
  open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  closed: {},
};

const item = {
  closed: { opacity: 0, y: 8 },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
};

export default function MobileMenu({ open, onClose }) {
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
            {NAV_LINKS.map((link) => (
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
            ))}
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
