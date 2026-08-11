import { motion } from "framer-motion";
import {
  MessageCircle,
  Banknote,
  UserCheck,
  Cloud,
  MapPin,
  Zap,
  ArrowUpRight,
  HeartHandshake,
  TrendingUp,
  Users,
} from "lucide-react";
import TextReveal from "../components/ui/TextReveal";
import Reveal from "../components/ui/Reveal";
import StaggerGroup from "../components/ui/StaggerGroup";
import Button from "../components/ui/Button";
import TiltCard from "../components/ui/TiltCard";
import FloatingRing from "../components/ui/FloatingRing";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, slideLeft, slideRight, scaleIn } from "../lib/motion";

const REASONS = [
  { icon: MessageCircle, title: "Proactive, not reactive", desc: "We flag issues and opportunities before you have to ask." },
  { icon: Banknote, title: "Transparent, fixed pricing", desc: "No surprise invoices. You know the cost before we start." },
  { icon: UserCheck, title: "One dedicated contact", desc: "A named advisor who actually knows your business, every time." },
  { icon: Cloud, title: "Cloud-first systems", desc: "Real-time numbers, not a spreadsheet from three months ago." },
  { icon: MapPin, title: "UK-wide expertise", desc: "Deep knowledge of HMRC, Companies House and UK compliance." },
  { icon: Zap, title: "Fast turnaround", desc: "Questions answered in hours, not weeks." },
];

export default function WhyUs() {
  return (
    <>
      <EditorialHero />
      <BentoGrid />
      <ReasonsList />
      <CtaStrip />
    </>
  );
}

function EditorialHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-36 text-center md:px-10 md:pb-24 md:pt-48">
      <Reveal variants={fadeUp} className="mb-8 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
          Why Dieux
        </span>
      </Reveal>
      <motion.div
        initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <TextReveal
          as="h1"
          text="Businesses don't leave Dieux. That's the whole pitch."
          stagger={0.045}
          className="text-4xl font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl md:text-6xl"
        />
      </motion.div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
      <StaggerGroup stagger={0.1} className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">
        <Reveal
          variants={scaleIn}
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-panel p-8 text-center text-on-panel md:col-span-2 md:row-span-2 md:p-12"
        >
          <span className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
          <div className="relative flex h-24 w-24 items-center justify-center md:h-28 md:w-28">
            <FloatingRing className="left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-on-panel/10 text-gold md:h-20 md:w-20">
              <HeartHandshake className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.5} />
            </span>
          </div>
          <p className="relative mt-8 max-w-xs text-xl font-semibold leading-snug md:text-2xl">
            "Advisory that feels like it's actually on our side."
          </p>
          <span className="relative mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-on-panel/50">
            — A Dieux client
          </span>
        </Reveal>

        <Reveal
          variants={scaleIn}
          className="flex flex-col justify-between rounded-3xl bg-panel p-7 text-on-panel md:col-span-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-on-panel/10 text-gold">
            <TrendingUp className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <span className="text-4xl font-bold tracking-tight md:text-5xl">98%</span>
            <p className="mt-2 text-sm text-on-panel/60">Client retention rate, year on year.</p>
          </div>
        </Reveal>

        <TiltCard className="flex flex-col justify-between rounded-3xl border border-stone-dark/60 bg-cream p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone text-navy">
            <Zap className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <span className="text-4xl font-bold tracking-tight text-navy md:text-5xl">24h</span>
            <p className="mt-2 text-sm text-navy/55">Average response time on any query.</p>
          </div>
        </TiltCard>

        <TiltCard className="flex flex-col justify-between rounded-3xl border border-stone-dark/60 bg-cream p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone text-navy">
            <Users className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <span className="text-4xl font-bold tracking-tight text-navy md:text-5xl">300+</span>
            <p className="mt-2 text-sm text-navy/55">Businesses actively supported today.</p>
          </div>
        </TiltCard>
      </StaggerGroup>
    </section>
  );
}

const CHEVRON_RIGHT = "md:[clip-path:polygon(0_0,94%_0,100%_50%,94%_100%,0_100%)]";
const CHEVRON_LEFT = "md:[clip-path:polygon(6%_0,100%_0,100%_100%,6%_100%,0_50%)]";

function ReasonsList() {
  return (
    <section className="bg-stone-light px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal variants={fadeUp} className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
            The reasons
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Six things clients mention, unprompted.
          </h2>
        </Reveal>

        <StaggerGroup stagger={0.1} className="mt-14 flex flex-col gap-4 md:gap-3">
          {REASONS.map(({ icon: Icon, title, desc }, i) => {
            const flip = i % 2 === 1;
            const dark = i % 2 === 0;
            return (
              <Reveal
                key={title}
                variants={flip ? slideRight : slideLeft}
                className={`group md:w-[92%] ${flip ? "md:ml-auto" : "md:mr-auto"}`}
              >
                <div
                  className={`flex items-center gap-5 rounded-2xl p-6 transition-transform duration-500 ease-out md:rounded-none md:p-8 md:hover:scale-[1.015] ${
                    flip ? `flex-row-reverse text-right md:pl-14 ${CHEVRON_LEFT}` : `md:pr-14 ${CHEVRON_RIGHT}`
                  } ${dark ? "bg-navy text-cream" : "bg-stone text-navy"}`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                      dark ? "bg-cream/10 text-gold" : "bg-cream text-navy"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold ${dark ? "text-cream" : "text-navy"}`}>{title}</h3>
                    <p className={`mt-1 text-sm leading-relaxed ${dark ? "text-cream/60" : "text-navy/60"}`}>
                      {desc}
                    </p>
                  </div>
                  <span className={`hidden shrink-0 text-2xl font-black tracking-tight sm:block ${dark ? "text-cream/15" : "text-navy/10"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10 md:py-28">
      <TextReveal
        as="h2"
        text="See it for yourself."
        className="text-3xl font-bold leading-tight text-navy md:text-5xl"
      />
      <Reveal variants={fadeUp} delay={0.25} className="mt-9 flex justify-center">
        <Button to="/contact" variant="primary" icon={ArrowUpRight}>
          Book a free call
        </Button>
      </Reveal>
    </section>
  );
}
