import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/brand/logo.svg";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { fadeUp } from "../../lib/motion";
import { NAV_LINKS, CONTACT } from "../../lib/contact";
import { SERVICES } from "../../lib/services";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-panel text-on-panel">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10 md:pt-24">
        <Reveal
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-8 border-b border-on-panel/10 pb-14 md:flex-row md:items-center"
        >
          <div>
            <img src={logo} alt="Dieux" className="h-9 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-panel/60">
              Accounting and advisory built around clarity — for founders, growing
              teams and businesses who'd rather focus on the work.
            </p>
          </div>
          <Button to="/contact" variant="light" className="shrink-0">
            Book a call
          </Button>
        </Reveal>

        <div className="grid gap-14 border-b border-on-panel/10 py-14 md:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-on-panel/40">Quick links</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className="text-sm text-on-panel/70 transition-colors hover:text-gold">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-on-panel/40">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <NavLink
                    to={`/services/${s.slug}`}
                    className="text-sm text-on-panel/70 transition-colors hover:text-gold"
                  >
                    {s.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-on-panel/40">Get in touch</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-on-panel/70">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 transition-colors hover:text-gold">
                  <Mail className="h-4 w-4 shrink-0" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 transition-colors hover:text-gold">
                  <Phone className="h-4 w-4 shrink-0" /> {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {CONTACT.address[0]}, {CONTACT.address[1]}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-3 pt-8 text-xs text-on-panel/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Dieux Accounting &amp; Advisory. All rights reserved.</p>
          <p>{CONTACT.address[0]}, {CONTACT.address[1]}</p>
        </div>
      </div>
    </footer>
  );
}
