import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT } from "../../lib/contact";
import { EASE } from "../../lib/motion";

const panel = {
  closed: { clipPath: "circle(0% at calc(100% - 2.75rem) 2.75rem)" },
  open: {
    clipPath: "circle(150% at calc(100% - 2.75rem) 2.75rem)",
    transition: { duration: 0.7, ease: EASE },
  },
  exit: {
    clipPath: "circle(0% at calc(100% - 2.75rem) 2.75rem)",
    transition: { duration: 0.5, ease: EASE },
  },
};

const list = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
  closed: {},
};

const item = {
  closed: { opacity: 0, y: 24 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col justify-between bg-panel px-8 pb-10 pt-28 text-on-panel md:hidden"
          initial="closed"
          animate="open"
          exit="exit"
          variants={panel}
        >
          <motion.nav
            className="flex flex-col gap-2"
            variants={list}
            initial="closed"
            animate="open"
          >
            {NAV_LINKS.map((link) => (
              <motion.div key={link.to} variants={item} className="overflow-hidden">
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-3 text-4xl font-bold tracking-tight transition-colors ${
                      isActive ? "text-gold" : "text-on-panel/90 hover:text-gold"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div variants={item} className="flex flex-col gap-3 text-sm text-on-panel/60">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-gold">
              <Mail className="h-4 w-4" /> {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-gold">
              <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
