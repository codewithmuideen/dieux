import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Star, TrendingUp, ArrowRight, ArrowLeft, ShieldCheck, Play, PhoneCall, FileText, Settings2, Repeat } from "lucide-react";
import Button from "../components/ui/Button";
import TextReveal from "../components/ui/TextReveal";
import Reveal from "../components/ui/Reveal";
import StaggerGroup from "../components/ui/StaggerGroup";
import SectionHeading from "../components/ui/SectionHeading";
import RevealImage from "../components/ui/RevealImage";
import ScrollIndicator from "../components/ui/ScrollIndicator";
import Marquee from "../components/ui/Marquee";
import AvatarStack from "../components/ui/AvatarStack";
import Faq from "../components/ui/Faq";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, slideLeft, slideRight, scaleIn, EASE } from "../lib/motion";
import { IMAGES } from "../lib/images";
import { SERVICES } from "../lib/services";

const MARQUEE_ITEMS = [
  "Business Start-ups",
  "Accounting",
  "Payroll",
  "Tax Planning",
  "Compliance",
  "Business Advisory",
];

const PROCESS_STEPS = [
  { icon: PhoneCall, duration: "20 Min", title: "Discovery call", desc: "A short conversation to understand your business, your numbers, and what success looks like." },
  { icon: FileText, duration: "2-3 Days", title: "Proposal & onboarding", desc: "Clear scope, fixed pricing, and a plan tailored to exactly what your business needs." },
  { icon: Settings2, duration: "1 Week", title: "Systems set up", desc: "We connect your accounts and tools so your numbers are live, accurate and ready." },
  { icon: Repeat, duration: "Ongoing", title: "Ongoing partnership", desc: "Regular check-ins, filings on schedule, and a team that's always reachable." },
];

const APPROACH_STEPS = [
  { title: "Discover", desc: "We start by understanding your goals, current numbers, and what success looks like from here." },
  { title: "Analyse & plan", desc: "We review your finances and build a tailored plan around structure, risk and growth." },
  { title: "Implement", desc: "We put the plan into action — systems connected, filings scheduled, nothing left loose." },
  { title: "Monitor", desc: "We track performance continuously so nothing drifts unnoticed between check-ins." },
  { title: "Ongoing support", desc: "We stay close, answering questions and adjusting the plan as your business evolves." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <AboutUs />
      <WhatWeDo />
      <OurProcess />
      <AdvisoryApproach />
      <WhyUsTeaser />
      <Quote />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.85]);

  useEffect(() => {
    if (prefersReduced || !videoRef.current) return;
    videoRef.current.play?.().catch(() => {});
  }, [prefersReduced]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-panel">
      <div className="absolute inset-0 h-full w-full">
        {prefersReduced ? (
          <img src={IMAGES.heroPoster} alt="" className="h-full w-full object-cover" />
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={IMAGES.heroVideo}
            poster={IMAGES.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
      </div>
      <motion.div
        style={prefersReduced ? undefined : { opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-panel via-panel/70 to-panel/35"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 md:px-10 md:pt-32">
        <div className="max-w-3xl">
          <Reveal variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-on-panel/70">
              Accounting &amp; Advisory
            </span>
          </Reveal>

          <TextReveal
            as="h1"
            text="Financial clarity for businesses built to last."
            className="text-5xl font-bold leading-[1.05] tracking-tight text-on-panel sm:text-6xl md:text-7xl"
          />

          <Reveal variants={fadeUp} delay={0.5} className="mt-7 max-w-xl text-lg leading-relaxed text-on-panel/70">
            Dieux is the accounting and advisory partner for founders and growing
            teams who want their numbers handled with precision — so they can get
            back to building.
          </Reveal>

          <StaggerGroup stagger={0.1} delayChildren={0.7} className="mt-10 flex flex-wrap items-center gap-4">
            <Reveal variants={fadeUp}>
              <Button to="/services" variant="light">
                Explore services
              </Button>
            </Reveal>
            <Reveal variants={fadeUp}>
              <Button to="/contact" variant="outlineLight" icon={null}>
                Book a call
              </Button>
            </Reveal>
          </StaggerGroup>

          <Reveal variants={fadeUp} delay={0.85} className="mt-10 flex flex-wrap items-center gap-5">
            <AvatarStack />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-on-panel/60">300+ businesses trust Dieux</span>
            </div>
          </Reveal>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
        className="absolute bottom-28 right-6 z-10 hidden items-center gap-3 rounded-2xl bg-cream/95 px-5 py-4 shadow-2xl backdrop-blur-sm md:right-10 md:flex"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
          <TrendingUp className="h-5 w-5" strokeWidth={2} />
        </span>
        <div>
          <p className="text-lg font-bold leading-none text-navy">£40M+</p>
          <p className="mt-1 text-xs text-navy/55">Managed with care</p>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <ScrollIndicator dark />
      </div>
    </section>
  );
}

function TrustMarquee() {
  return (
    <section className="border-b border-stone-dark/60 bg-cream py-6">
      <Marquee items={MARQUEE_ITEMS} className="text-navy" />
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
      <Reveal variants={fadeUp} className="w-fit rounded-full bg-stone px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-navy">
        About us
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr] lg:gap-10">
        <TextReveal
          as="h2"
          text="Introduction to your best accounting partner."
          className="text-4xl font-bold leading-[1.08] tracking-tight text-navy md:text-5xl"
        />
        <Reveal variants={fadeUp} delay={0.15} className="text-base leading-relaxed text-navy/60">
          Our role goes beyond bookkeeping. We provide accurate financial
          reporting and practical advice that brings clarity to every
          decision you make.
        </Reveal>
        <Reveal variants={fadeUp} delay={0.25} className="text-base leading-relaxed text-navy/60">
          From day-to-day compliance to long-term growth planning, we handle
          the detail so you can focus on running the business you set out to
          build.
        </Reveal>
      </div>

      <StaggerGroup stagger={0.1} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {ABOUT_FEATURES.map(({ icon: Icon, value, label }) => (
          <Reveal
            key={label}
            variants={fadeUp}
            className="flex items-center gap-4 rounded-2xl border border-stone-dark/60 bg-cream px-5 py-4 shadow-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone text-navy">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-xl font-bold leading-none text-navy">{value}</p>
              <p className="mt-1 text-xs text-navy/55">{label}</p>
            </div>
          </Reveal>
        ))}
      </StaggerGroup>

      <div className="relative mt-14 md:mt-20">
        <RevealImage
          src={IMAGES.whyUsTeam}
          alt="The Dieux team working together"
          wrapperClassName="h-[320px] rounded-3xl sm:h-[420px] md:h-[480px]"
        />
        <Reveal
          variants={scaleIn}
          delay={0.25}
          className="absolute -bottom-8 right-4 hidden h-40 w-56 overflow-hidden rounded-2xl border-4 border-cream shadow-2xl sm:block md:right-10 md:h-48 md:w-64"
        >
          <div className="group relative h-full w-full cursor-pointer">
            <img src={IMAGES.aboutStory} alt="A Dieux advisor at work" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-navy/30 transition-colors duration-300 group-hover:bg-navy/40">
              <span className="absolute h-14 w-14 animate-ping rounded-full bg-cream/40" aria-hidden="true" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-cream text-navy shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-0.5 h-5 w-5 fill-current" strokeWidth={0} />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % SERVICES.length), 4500);
    return () => clearInterval(t);
  }, [prefersReduced]);

  const service = SERVICES[index];
  const next = () => setIndex((i) => (i + 1) % SERVICES.length);
  const prev = () => setIndex((i) => (i - 1 + SERVICES.length) % SERVICES.length);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
      <div className="grid grid-cols-1 gap-10 overflow-hidden rounded-3xl bg-navy p-8 text-cream md:grid-cols-2 md:p-14">
        <Reveal variants={slideLeft} className="flex flex-col justify-center gap-6">
          <span className="w-fit rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">
            What we do
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Comprehensive financial services, under one roof.
          </h2>
          <p className="text-cream/60">
            Every engagement draws from the same five disciplines — mixed and
            matched to what your business actually needs, delivered by one
            accountable team.
          </p>
          <div className="mt-2 flex items-center gap-4">
            <Button to="/services" variant="light">
              View all services
            </Button>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous service"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors duration-300 hover:bg-cream hover:text-navy"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next service"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors duration-300 hover:bg-cream hover:text-navy"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="relative min-h-[300px] overflow-hidden rounded-2xl md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute inset-0"
            >
              <Link to={`/services/${service.slug}`} className="block h-full w-full">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-xs font-semibold text-gold">{service.number}</span>
                  <h3 className="mt-1 text-2xl font-bold text-cream">{service.title}</h3>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
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

const APPROACH_IMAGES = [
  IMAGES.heroPoster,
  IMAGES.aboutStory,
  IMAGES.whyUsHandshake,
  IMAGES.advisoryApproach,
  IMAGES.whyUsTeam,
];

function AdvisoryApproach() {
  return (
    <section className="bg-stone-light px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker="How we work"
          heading="Our financial advisory approach."
          supporting="A simple, transparent process that guides you at every step of the way."
          align="center"
          className="mx-auto mb-16 md:mb-20"
        />
        <div className="flex flex-col">
          {APPROACH_STEPS.map((step, i) => (
            <ApproachRow key={step.title} step={step} index={i} image={APPROACH_IMAGES[i % APPROACH_IMAGES.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachRow({ step, index, image }) {
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal
      variants={flip ? slideRight : slideLeft}
      className="grid grid-cols-1 items-center gap-6 border-t border-stone-dark/60 py-10 first:border-t-0 first:pt-0 md:grid-cols-2 md:gap-12 md:py-14"
    >
      <div className={`flex justify-center ${flip ? "md:order-2" : ""}`}>
        <span
          aria-hidden="true"
          className="select-none bg-cover bg-center bg-clip-text text-[6rem] leading-none font-black text-transparent sm:text-[8rem] md:text-[10rem]"
          style={{ backgroundImage: `url(${image})` }}
        >
          {num}
        </span>
      </div>
      <div className={flip ? "md:order-1 md:text-right" : ""}>
        <h3 className="text-2xl font-bold text-navy md:text-3xl">{step.title}</h3>
        <p className={`mt-3 max-w-md text-base leading-relaxed text-navy/60 ${flip ? "md:ml-auto" : ""}`}>
          {step.desc}
        </p>
      </div>
    </Reveal>
  );
}

function WhyUsTeaser() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
      <RevealImage
        src={IMAGES.whyUsTeam}
        alt="The Dieux team working together"
        wrapperClassName="h-[420px] rounded-2xl md:h-full"
      />
      <div className="flex flex-col justify-center gap-6">
        <SectionHeading
          kicker="Why Dieux"
          heading="Advisory that actually feels advisory."
          supporting="Most firms file your numbers once a year and disappear. We stay close — proactive, responsive, and invested in the decisions you're making right now."
        />
        <Reveal variants={fadeUp} delay={0.2}>
          <Button to="/why-us" variant="secondary">
            See why clients stay
          </Button>
        </Reveal>
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
