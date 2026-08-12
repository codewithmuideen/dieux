import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Button from "./Button";
import { EASE } from "../../lib/motion";

const STORAGE_KEY = "dieux-cookie-consent";

const DEFAULT_PREFS = { necessary: true, analytics: true, marketing: true };

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Storage unavailable — treat as undecided for this session.
    }
    if (!saved) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const persist = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      // Ignore — decision still applies for this session.
    }
    setVisible(false);
  };

  const acceptAll = () => persist({ ...DEFAULT_PREFS, decidedAt: Date.now() });
  const savePreferences = () => persist({ ...prefs, decidedAt: Date.now() });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl md:inset-x-auto md:right-6 md:bottom-6 md:w-full"
        >
          <div className="overflow-hidden rounded-3xl border border-stone-dark/60 bg-white shadow-2xl">
            <div className="flex items-start gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone text-navy">
                <Cookie className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="flex-1">
                <h3 className="text-base font-bold text-navy">Cookies on our website</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  We use third-party cookies that help us analyse how you use
                  this website, remember your preferences, and provide content
                  that's relevant to you. Learn more in our{" "}
                  <Link to="/privacy-policy" className="font-semibold text-navy underline underline-offset-2 hover:text-gold">
                    Privacy Policy
                  </Link>
                  .
                </p>

                <AnimatePresence initial={false}>
                  {managing && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 flex flex-col gap-3 border-t border-stone-dark/60 pt-4">
                        <PrefToggle label="Necessary" desc="Required for the site to function." checked disabled />
                        <PrefToggle
                          label="Analytics"
                          desc="Helps us understand how visitors use the site."
                          checked={prefs.analytics}
                          onChange={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
                        />
                        <PrefToggle
                          label="Marketing"
                          desc="Used to show content relevant to you."
                          checked={prefs.marketing}
                          onChange={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {managing ? (
                    <Button onClick={savePreferences} variant="primary" icon={null} className="!px-5 !py-2.5 !text-xs">
                      Save my preferences
                    </Button>
                  ) : (
                    <>
                      <Button onClick={acceptAll} variant="primary" icon={null} className="!px-5 !py-2.5 !text-xs">
                        Accept all
                      </Button>
                      <button
                        onClick={() => setManaging(true)}
                        className="text-xs font-semibold uppercase tracking-wide text-navy/60 underline underline-offset-4 transition-colors hover:text-navy"
                      >
                        Manage preferences
                      </button>
                    </>
                  )}
                </div>
              </div>
              <button
                aria-label="Dismiss"
                onClick={acceptAll}
                className="shrink-0 rounded-full p-1.5 text-navy/40 transition-colors hover:bg-stone hover:text-navy"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PrefToggle({ label, desc, checked, onChange, disabled = false }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-navy">{label}</p>
        <p className="text-xs text-navy/50">{desc}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
          checked ? "bg-navy" : "bg-stone-dark"
        } ${disabled ? "opacity-50" : ""}`}
      >
        <motion.span
          className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow"
          animate={{ x: checked ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </button>
    </div>
  );
}
