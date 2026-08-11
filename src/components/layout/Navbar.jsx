import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/brand/logo.svg";
import logoDark from "../../assets/brand/logo-dark.svg";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import useTheme from "../../contexts/ThemeContext";
import { NAV_LINKS } from "../../lib/contact";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

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
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5 ${
            scrolled
              ? "bg-cream/90 shadow-[0_10px_40px_-12px_rgba(14,43,43,0.25)] backdrop-blur-xl"
              : "bg-cream/70 shadow-[0_10px_30px_-14px_rgba(14,43,43,0.15)] backdrop-blur-lg"
          }`}
        >
          <NavLink to="/" className="relative z-50 flex items-center pl-1.5" aria-label="Dieux home">
            <img
              src={theme === "dark" ? logoDark : logo}
              alt="Dieux — Accounting & Advisory"
              className="h-8 w-auto md:h-9"
            />
          </NavLink>

          <nav className="hidden items-center gap-1 rounded-full bg-navy/[0.04] p-1 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "bg-cream text-navy shadow-sm" : "text-navy/55 hover:text-navy"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button to="/contact" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Contact us
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            >
              <motion.span
                className={`h-[2px] w-5 rounded-full transition-colors duration-300 ${open ? "bg-on-panel" : "bg-navy"}`}
                animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className={`h-[2px] w-5 rounded-full transition-colors duration-300 ${open ? "bg-on-panel" : "bg-navy"}`}
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`h-[2px] w-5 rounded-full transition-colors duration-300 ${open ? "bg-on-panel" : "bg-navy"}`}
                animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
