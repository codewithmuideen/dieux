import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import logo from "../../assets/brand/logo.svg";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "../../lib/contact";
import { SERVICES } from "../../lib/services";
import { EASE } from "../../lib/motion";

const megaMenu = {
  closed: { opacity: 0, y: 8, scale: 0.98 },
  open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: EASE } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 bg-cream transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_20px_-8px_rgba(14,43,43,0.2)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <NavLink to="/" className="relative z-50 flex items-center" aria-label="Dieux home">
            <img src={logo} alt="Dieux — Accounting & Advisory" className="h-8 w-auto md:h-9" />
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) =>
              link.to === "/services" ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1 pb-1 text-[15px] font-semibold transition-colors ${
                        isActive ? "text-gold after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:bg-gold" : "text-navy/70 hover:text-navy"
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                  </NavLink>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={megaMenu}
                        className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-4"
                      >
                        <div className="overflow-hidden rounded-3xl bg-cream p-6 shadow-2xl ring-1 ring-navy/10">
                          <div className="grid grid-cols-2 gap-1">
                            {SERVICES.map((s, i) => {
                              const Icon = s.icon;
                              return (
                                <motion.div
                                  key={s.slug}
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.02, duration: 0.2 }}
                                >
                                  <NavLink
                                    to={`/services/${s.slug}`}
                                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy/70 transition-all duration-200 hover:translate-x-1 hover:bg-stone hover:text-navy"
                                  >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone text-navy transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold">
                                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                                    </span>
                                    {s.title}
                                  </NavLink>
                                </motion.div>
                              );
                            })}
                          </div>
                          <NavLink
                            to="/services"
                            className="group mt-3 flex items-center justify-between rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
                          >
                            View all services
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </NavLink>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative pb-1 text-[15px] font-semibold transition-colors ${
                      isActive ? "text-gold after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:bg-gold" : "text-navy/70 hover:text-navy"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button to="/contact" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Contact us
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            >
              <motion.span
                className="h-[2px] w-5 rounded-full bg-navy"
                animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="h-[2px] w-5 rounded-full bg-navy"
                animate={{ rotate: open ? -45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="h-[2px] w-2.5 rounded-full bg-navy"
                animate={{ opacity: open ? 0 : 1, y: open ? -7 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
