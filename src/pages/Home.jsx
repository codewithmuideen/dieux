import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Star, TrendingUp, ArrowRight, ArrowUpRight, ShieldCheck, PhoneCall, FileText, Settings2, Repeat, Search, BarChart3, Rocket, Activity, HeartHandshake, Target, Eye, Flag, MessageCircle, Banknote, UserCheck, Zap, Cloud, MapPin, Users } from "lucide-react";
import Button from "../components/ui/Button";
import TextReveal from "../components/ui/TextReveal";
import Reveal from "../components/ui/Reveal";
import StaggerGroup from "../components/ui/StaggerGroup";
import SectionHeading from "../components/ui/SectionHeading";
import RevealImage from "../components/ui/RevealImage";
import ScrollIndicator from "../components/ui/ScrollIndicator";
import Faq from "../components/ui/Faq";
import TiltCard from "../components/ui/TiltCard";
import FloatingRing from "../components/ui/FloatingRing";
import { StickyStackItem } from "../components/ui/StickyStack";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, slideLeft, slideRight, scaleIn, EASE } from "../lib/motion";
import { IMAGES } from "../lib/images";
import { SERVICES } from "../lib/services";

const PROCESS_STEPS = [
  { icon: PhoneCall, duration: "20 Min", title: "Discovery call", desc: "A short conversation to understand your business, your numbers, and what success looks like." },
  { icon: FileText, duration: "2-3 Days", title: "Proposal & onboarding", desc: "Clear scope, fixed pricing, and a plan tailored to exactly what your business needs." },
  { icon: Settings2, duration: "1 Week", title: "Systems set up", desc: "We connect your accounts and tools so your numbers are live, accurate and ready." },
  { icon: Repeat, duration: "Ongoing", title: "Ongoing partnership", desc: "Regular check-ins, filings on schedule, and a team that's always reachable." },
];

const APPROACH_STEPS = [
  { icon: Search, title: "Discover", desc: "We start by understanding your goals, current numbers, and what success looks like from here." },
  { icon: BarChart3, title: "Analyse & plan", desc: "We review your finances and build a tailored plan around structure, risk and growth." },
  { icon: Rocket, title: "Implement", desc: "We put the plan into action — systems connected, filings scheduled, nothing left loose." },
  { icon: Activity, title: "Monitor", desc: "We track performance continuously so nothing drifts unnoticed between check-ins." },
  { icon: HeartHandshake, title: "Ongoing support", desc: "We stay close, answering questions and adjusting the plan as your business evolves." },
];

const MISSION_VISION_GOAL = [
  { icon: Target, title: "Our mission", desc: "To give founders and growing businesses the financial clarity they need to make confident decisions — without the jargon or the guesswork." },
  { icon: Eye, title: "Our vision", desc: "To be the advisory partner businesses actually want to call — proactive, transparent, and genuinely invested in how they grow." },
  { icon: Flag, title: "Our goal", desc: "To become the most trusted advisory partner for 1,000 growing UK businesses, one precise, well-kept set of books at a time." },
];

const DIFFERENTIATORS = [
  { value: "98%", label: "Client retention, year on year." },
  { value: "24h", label: "Average response time on any query." },
  { value: "300+", label: "Businesses actively supported today." },
  { value: "14+", label: "Years delivering expert guidance." },
];

const REASONS = [
  { icon: MessageCircle, title: "Proactive, not reactive", desc: "We flag issues and opportunities before you have to ask." },
  { icon: Banknote, title: "Transparent, fixed pricing", desc: "No surprise invoices. You know the cost before we start." },
  { icon: UserCheck, title: "One dedicated contact", desc: "A named advisor who actually knows your business, every time." },
  { icon: Cloud, title: "Cloud-first systems", desc: "Real-time numbers, not a spreadsheet from three months ago." },
  { icon: MapPin, title: "UK-wide expertise", desc: "Deep knowledge of HMRC, Companies House and UK compliance." },
  { icon: Zap, title: "Fast turnaround", desc: "Questions answered in hours, not weeks." },
];

const CHEVRON_RIGHT = "md:[clip-path:polygon(0_0,94%_0,100%_50%,94%_100%,0_100%)]";
const CHEVRON_LEFT = "md:[clip-path:polygon(6%_0,100%_0,100%_100%,6%_100%,0_50%)]";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <MissionVisionGoal />
      <WhatWeDo />
      <OurProcess />
      <AdvisoryApproach />
      <WhatSetsUsApart />
      <WhyDieux />
      <Quote />
      <Faq />
      <FinalCta />
    </>
  );
}

const HERO_SLIDES = [
  {
    image: IMAGES.heroPoster,
    tagline: "“Numbers you understand. Decisions you trust.”",
    heading: "Financial clarity for businesses built to last.",
    body: "Dieux is the accounting and advisory partner for founders and growing teams who want their numbers handled with precision — so they can get back to building.",
  },
  {
    image: IMAGES.whyUsHandshake,
    tagline: "“Advisory that feels like it's actually on your side.”",
    heading: "Trusted by 300+ growing businesses.",
    body: "From first-time founders to established teams, every client gets the same proactive, precise partnership — no matter the size of the engagement.",
  },
  {
    image: IMAGES.advisoryApproach,
    tagline: "“Every number checked. Every deadline met.”",
    heading: "£40M+ managed with precision and care.",
    body: "Real-time numbers, fixed transparent pricing, and a dedicated advisor who actually knows your business — that's the whole point of Dieux.",
  },
];

function Hero() {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [prefersReduced]);

  const slide = HERO_SLIDES[index];

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-panel">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1, ease: EASE }, scale: { duration: 6, ease: "linear" } }}
        >
          <img src={slide.image} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-panel/95 via-panel/55 to-panel/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-panel/65 via-panel/15 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 md:px-10 md:pt-32">
        <div className="max-w-3xl">
          <Reveal variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-on-panel/70">
              Accounting &amp; Advisory
            </span>
          </Reveal>

          <motion.div layout transition={{ duration: 0.5, ease: EASE }} className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.06 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-on-panel sm:text-6xl md:text-7xl">
                  {slide.heading}
                </h1>
                <p className="mt-5 text-xl font-medium italic text-gold-light sm:text-2xl">{slide.tagline}</p>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-panel/70">{slide.body}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="mt-4 flex items-center gap-2" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-1.5 bg-on-panel/30 hover:bg-on-panel/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <ScrollIndicator dark />
      </div>
    </section>
  );
}

const ABOUT_FEATURES = [
  { icon: TrendingUp, value: "14+", label: "Years delivering expert guidance" },
  { icon: ShieldCheck, value: "300+", label: "Businesses supported today" },
  { icon: Star, value: "98%", label: "Client retention, year on year" },
];

function AboutUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 overflow-hidden rounded-[2.5rem] bg-navy text-cream md:grid-cols-2">
        <Reveal variants={slideLeft} className="relative h-72 md:h-auto">
          <RevealImage
            src={IMAGES.whyUsTeam}
            alt="The Dieux team working together"
            wrapperClassName="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent md:bg-gradient-to-r" />
          <Reveal
            variants={scaleIn}
            delay={0.3}
            className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-cream px-5 py-4 shadow-xl md:right-6 md:left-auto"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Star className="h-5 w-5 fill-current" strokeWidth={0} />
            </span>
            <div>
              <p className="text-lg font-bold leading-none text-navy">14+ Years</p>
              <p className="mt-1 text-xs text-navy/55">Of trusted advisory</p>
            </div>
          </Reveal>
        </Reveal>

        <div className="flex flex-col justify-center gap-7 p-8 md:p-14">
          <Reveal variants={fadeUp} className="w-fit rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cream/70">
            About us
          </Reveal>
          <TextReveal
            as="h2"
            text="The accounting partner built for how you actually run your business."
            className="text-3xl font-bold leading-[1.12] tracking-tight md:text-5xl"
          />
          <Reveal variants={fadeUp} delay={0.2} className="max-w-md text-base leading-relaxed text-cream/60">
            Our role goes beyond bookkeeping. We provide accurate financial
            reporting and practical advice that brings clarity to every
            decision — from day-to-day compliance to long-term growth.
          </Reveal>

          <StaggerGroup stagger={0.1} className="grid grid-cols-3 gap-4 border-t border-cream/10 pt-6">
            {ABOUT_FEATURES.map(({ value, label }) => (
              <Reveal key={label} variants={fadeUp} className="transition-transform duration-300 hover:-translate-y-1">
                <p className="text-2xl font-bold md:text-3xl">{value}</p>
                <p className="mt-1 text-xs leading-snug text-cream/50">{label}</p>
              </Reveal>
            ))}
          </StaggerGroup>

          <Reveal variants={fadeUp} delay={0.3}>
            <Button to="/about" variant="light">
              Learn more about us
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MissionVisionGoal() {
  return (
    <section className="bg-stone-light px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal
            variants={slideLeft}
            className="relative flex flex-col justify-center gap-5 overflow-hidden rounded-[2.5rem] bg-navy p-10 text-cream md:p-14"
          >
            <span className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px]" aria-hidden="true" />
            <FloatingRing className="left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-30" />
            <span className="relative w-fit rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cream/70">
              What drives us
            </span>
            <h2 className="relative text-3xl font-bold leading-tight md:text-4xl">
              Our mission, vision, and goal.
            </h2>
            <p className="relative max-w-sm text-cream/60">
              Three ideas that shape every decision we make on a client's behalf.
            </p>
          </Reveal>

          <StaggerGroup stagger={0.12} className="flex flex-col gap-4">
            {MISSION_VISION_GOAL.map(({ icon: Icon, title, desc }, i) => {
              const highlight = i === 1;
              return (
                <Reveal
                  key={title}
                  variants={i % 2 === 0 ? slideRight : fadeUp}
                  className={`flex items-start gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                    highlight ? "bg-gold" : "border border-stone-dark/60 bg-cream"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                      highlight ? "bg-navy text-cream" : "bg-stone text-navy"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{title}</h3>
                    <p className={`mt-1 text-sm leading-relaxed ${highlight ? "text-navy/70" : "text-navy/60"}`}>
                      {desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
      <Reveal
        variants={slideLeft}
        className="flex flex-col gap-8 rounded-3xl bg-navy p-8 text-cream md:flex-row md:items-center md:justify-between md:p-14"
      >
        <div className="flex flex-col gap-5">
          <span className="w-fit rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">
            What we do
          </span>
          <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-4xl">
            Comprehensive financial services, under one roof.
          </h2>
          <p className="max-w-lg text-cream/60">
            Every engagement draws from the same five disciplines — mixed and
            matched to what your business actually needs, delivered by one
            accountable team.
          </p>
        </div>
        <Button to="/services" variant="light" className="shrink-0">
          View all services
        </Button>
      </Reveal>

      <div className="mt-6">
        {SERVICES.map((service, i) => (
          <StickyStackItem key={service.slug} index={i} runway="42vh">
            <Link
              to={`/services/${service.slug}`}
              className="group flex items-center gap-5 rounded-3xl border border-stone-dark/60 bg-cream p-6 shadow-[0_25px_50px_-30px_rgba(14,43,43,0.3)] transition-shadow duration-300 hover:shadow-[0_25px_60px_-25px_rgba(14,43,43,0.4)] md:p-7"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-stone text-navy md:h-16 md:w-16">
                <service.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div className="flex-1">
                <span className="text-xs font-semibold text-gold">{service.number}</span>
                <h3 className="mt-1 text-xl font-bold text-navy md:text-2xl">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/60 md:text-base">{service.short}</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-navy/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold" />
            </Link>
          </StickyStackItem>
        ))}
      </div>
    </section>
  );
}

function OurProcess() {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.35"] });

  return (
    <section ref={ref} className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        kicker="Our process"
        heading="Getting started is simple."
        supporting="From first call to ongoing support — here's exactly what happens when you work with Dieux."
        align="center"
        className="mx-auto mb-16 md:mb-24"
      />

      <div className="relative">
        <motion.div
          aria-hidden="true"
          style={prefersReduced ? undefined : { scaleY: scrollYProgress }}
          className="absolute inset-y-0 left-1/2 hidden w-px origin-top -translate-x-1/2 border-l-2 border-dashed border-stone-dark/70 md:block"
        />
        <div className="flex flex-col gap-8 md:gap-10">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, index }) {
  const { icon: Icon, duration, title, desc } = step;
  const flip = index % 2 === 1;

  return (
    <Reveal
      variants={flip ? slideRight : slideLeft}
      className={`w-full md:w-[46%] ${flip ? "md:self-end" : "md:self-start"}`}
    >
      <div className="flex gap-5 rounded-3xl bg-cream p-6 shadow-sm ring-1 ring-stone-dark/50 sm:p-7">
        <div
          className={`flex h-16 w-14 shrink-0 flex-col items-center justify-between rounded-full py-3 ${
            flip ? "bg-gold text-navy" : "bg-navy text-cream"
          }`}
        >
          <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          <span className="text-[9px] font-semibold uppercase tracking-widest [writing-mode:vertical-rl]">
            {duration}
          </span>
        </div>
        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Step {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-xl font-bold text-navy">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/60">{desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

function AdvisoryApproach() {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.5"] });

  return (
    <section ref={ref} className="bg-stone-light px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          kicker="How we work"
          heading="Our financial advisory approach."
          supporting="A simple, transparent process that guides you at every step of the way."
          align="center"
          className="mx-auto mb-16 md:mb-20"
        />

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-stone-dark/70 md:left-8" aria-hidden="true" />
          <motion.div
            className="absolute left-6 top-2 w-px origin-top bg-gold md:left-8"
            style={{ height: "100%", scaleY: prefersReduced ? 1 : scrollYProgress }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10 md:gap-12">
            {APPROACH_STEPS.map((step, i) => (
              <Reveal
                key={step.title}
                variants={fadeUp}
                delay={i * 0.05}
                className="relative flex gap-6 pl-16 md:gap-8 md:pl-20"
              >
                <span className="absolute left-0 top-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-stone-light text-navy md:h-16 md:w-16">
                  <step.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} />
                </span>
                <div className="pt-1 md:pt-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-navy md:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-navy/60">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatSetsUsApart() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 overflow-hidden rounded-[2.5rem] md:grid-cols-2">
        <div className="flex flex-col justify-center gap-5 bg-navy p-10 text-cream md:p-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">
            What sets us apart
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            The numbers speak for themselves.
          </h2>
          <p className="max-w-sm text-cream/60">
            We could tell you why clients stay — or we could just show you what
            they experience, quarter after quarter.
          </p>
        </div>

        <StaggerGroup stagger={0.1} className="flex flex-col justify-center gap-1 bg-stone-light p-10 md:p-14">
          {DIFFERENTIATORS.map(({ value, label }, i) => (
            <Reveal
              key={value}
              variants={fadeUp}
              className="flex items-center gap-5 border-b border-stone-dark/60 py-5 last:border-b-0"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
                {i + 1}
              </span>
              <div>
                <p className="text-xl font-bold text-navy">{value}</p>
                <p className="mt-0.5 text-sm text-navy/60">{label}</p>
              </div>
            </Reveal>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function WhyDieux() {
  return (
    <section id="why-dieux" className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-24 text-center md:px-10 md:pb-24 md:pt-32">
        <Reveal variants={fadeUp} className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
            Why Dieux
          </span>
        </Reveal>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <TextReveal
            as="h2"
            text="Businesses don't leave Dieux. That's the whole pitch."
            stagger={0.045}
            className="text-4xl font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl md:text-6xl"
          />
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
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
      </div>

      <div className="bg-stone-light px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal variants={fadeUp} className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
              The reasons
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Six things clients mention, unprompted.
            </h3>
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

          <Reveal variants={fadeUp} delay={0.15} className="mt-14 flex justify-center">
            <Button to="/contact" variant="primary" icon={ArrowUpRight}>
              Book a free call
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="bg-panel px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <TextReveal
          as="p"
          text="“With years of experience providing accountancy and business advisory services, we have the knowledge and expertise to help your company thrive.”"
          className="text-2xl font-medium leading-snug tracking-tight text-on-panel md:text-4xl"
        />
        <Reveal variants={fadeUp} delay={0.4} className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          The Dieux Team
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-stone via-stone-light to-cream px-8 py-20 text-center md:px-16">
        <SectionHeading
          align="center"
          className="mx-auto"
          kicker="Get started"
          heading="Ready to take control of your numbers?"
          supporting="Book a free 20-minute call — no obligation, just a clear view of where you stand and what could be better."
        />
        <Reveal variants={fadeUp} delay={0.2} className="mt-9 flex flex-wrap justify-center gap-4">
          <Button to="/contact" variant="primary">
            Book your call
          </Button>
          <Button to="/services" variant="secondary" icon={null}>
            Explore services
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
