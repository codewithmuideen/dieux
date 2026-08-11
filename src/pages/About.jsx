import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import { Compass, HeartHandshake, ShieldCheck, Sparkles, TrendingUp, Banknote, Star, ArrowRight } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import StaggerGroup from "../components/ui/StaggerGroup";
import SectionHeading from "../components/ui/SectionHeading";
import TextReveal from "../components/ui/TextReveal";
import RevealImage from "../components/ui/RevealImage";
import Button from "../components/ui/Button";
import useReducedMotion from "../hooks/useReducedMotion";
import { fadeUp, slideLeft, slideRight } from "../lib/motion";
import { IMAGES } from "../lib/images";
import { SERVICES } from "../lib/services";

const MISSION_STATS = [
  { icon: TrendingUp, value: "14+", label: "Years delivering expert guidance" },
  { icon: Banknote, value: "£40M+", label: "Client funds managed with care" },
  { icon: Star, value: "98%", label: "Client retention, year on year" },
];

const VALUES = [
  {
    icon: Compass,
    title: "Clarity first",
    desc: "No jargon, no vague reports. Just numbers you understand and can act on.",
  },
  {
    icon: HeartHandshake,
    title: "Genuinely invested",
    desc: "We treat your business like a long-term relationship, not a filing deadline.",
  },
  {
    icon: ShieldCheck,
    title: "Quietly rigorous",
    desc: "Every figure checked, every deadline met — so you never have to chase us.",
  },
  {
    icon: Sparkles,
    title: "Ahead of the curve",
    desc: "Modern tools, current regulation, and advice built for where you're headed.",
  },
];

const CHAPTERS = [
  {
    year: "2011",
    title: "Founded on a simple idea",
    text: "Dieux began with a handful of founders frustrated by accountants who only showed up once a year. We set out to build something more involved — advisory that actually advises.",
  },
  {
    year: "2016",
    title: "Growing on purpose",
    text: "As our client base grew, we stayed deliberately selective — building a team that could give every business genuine attention, not just a slot in a filing calendar.",
  },
  {
    year: "Today",
    title: "300+ businesses, one standard",
    text: "From first-time founders to established teams, every client gets the same proactive, precise partnership Dieux was built on — no matter the size of the engagement.",
  },
];

export default function About() {
  return (
    <>
      <AboutHero />
      <MissionStats />
      <Story />
      <WhatWeOffer />
      <Values />
      <CtaStrip />
    </>
  );
}

function AboutHero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-20 pt-36 md:grid-cols-2 md:px-10 md:pb-28 md:pt-44">
      <div className="flex flex-col justify-center gap-6">
        <Reveal variants={slideLeft} className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
            About Dieux
          </span>
        </Reveal>
        <Reveal variants={slideLeft} delay={0.1}>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl md:text-6xl">
            Built to be the advisor firms actually call.
          </h1>
        </Reveal>
        <Reveal variants={fadeUp} delay={0.3}>
          <p className="max-w-md text-lg leading-relaxed text-navy/60">
            We're a UK accounting and advisory practice for founders and growing
            businesses — built on the belief that good numbers should lead to
            good decisions, not just tidy filings.
          </p>
        </Reveal>
      </div>
      <Reveal variants={slideRight} delay={0.15}>
        <RevealImage
          src={IMAGES.aboutStory}
          alt="Dieux team working together"
          wrapperClassName="h-[340px] rounded-2xl sm:h-[420px] md:h-[520px]"
        />
      </Reveal>
    </section>
  );
}

function MissionStats() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
      <Reveal variants={fadeUp} className="mx-auto max-w-2xl text-center">
        <p className="text-xl leading-relaxed text-navy/70 sm:text-2xl">
          At <span className="font-bold text-navy">Dieux</span>, we're passionate
          about giving founders and growing businesses real financial clarity —
          the kind of numbers-literacy that turns decisions from guesswork into
          confidence.
        </p>
      </Reveal>

      <StaggerGroup stagger={0.1} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {MISSION_STATS.map(({ icon: Icon, value, label }) => (
          <Reveal
            key={label}
            variants={fadeUp}
            className="flex flex-col items-center gap-3 rounded-3xl border border-stone-dark/60 bg-cream p-7 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-stone text-navy">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="text-3xl font-bold tracking-tight text-navy">{value}</span>
            <span className="text-sm text-navy/60">{label}</span>
          </Reveal>
        ))}
      </StaggerGroup>
    </section>
  );
}

function Story() {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative bg-stone-light">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="hidden md:block">
            <div className="sticky top-0 flex h-screen items-center">
              <div className="relative h-40 w-full">
                {CHAPTERS.map((c, i) => (
                  <ChapterNumber
                    key={c.year}
                    chapter={c}
                    index={i}
                    total={CHAPTERS.length}
                    progress={scrollYProgress}
                    reduced={prefersReduced}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {CHAPTERS.map((c) => (
              <div key={c.year} className="flex min-h-[70vh] flex-col justify-center gap-4 py-12 md:min-h-screen">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold md:hidden">
                  {c.year}
                </span>
                <Reveal variants={fadeUp}>
                  <h3 className="text-3xl font-bold text-navy md:text-4xl">{c.title}</h3>
                </Reveal>
                <Reveal variants={fadeUp} delay={0.1}>
                  <p className="max-w-lg text-lg leading-relaxed text-navy/60">{c.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterNumber({ chapter, index, total, progress, reduced }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);

  return (
    <motion.div
      style={reduced ? { opacity: index === 0 ? 1 : 0 } : { opacity }}
      className="absolute inset-0 flex flex-col justify-center gap-3"
    >
      <span className="text-7xl font-black tracking-tight text-navy/10">{chapter.year}</span>
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        Chapter {index + 1} of {total}
      </span>
    </motion.div>
  );
}

function WhatWeOffer() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="What we offer"
          heading="Everything your business needs, handled."
          supporting="Five disciplines, one accountable team — mixed and matched to exactly what your business needs."
          align="center"
          className="mx-auto mb-14"
        />
        <StaggerGroup stagger={0.1} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Reveal key={service.slug} variants={fadeUp}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-stone-dark/60 bg-cream p-7 transition-shadow duration-300 hover:shadow-[0_20px_45px_-25px_rgba(14,43,43,0.35)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone text-navy transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  <service.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{service.short}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-2 text-xs font-semibold uppercase tracking-wide text-navy/70 transition-colors duration-300 group-hover:text-gold">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        kicker="What guides us"
        heading="A short list of things we won't compromise on."
        align="center"
        className="mx-auto"
      />
      <StaggerGroup stagger={0.1} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map(({ icon: Icon, title, desc }) => (
          <Reveal
            key={title}
            variants={fadeUp}
            className="flex flex-col gap-4 rounded-2xl border border-stone-dark/60 bg-cream p-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone">
              <Icon className="h-5 w-5 text-navy" strokeWidth={1.75} />
            </span>
            <h3 className="text-lg font-bold text-navy">{title}</h3>
            <p className="text-sm leading-relaxed text-navy/60">{desc}</p>
          </Reveal>
        ))}
      </StaggerGroup>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-panel px-8 py-20 text-center md:px-16">
        <TextReveal
          as="h2"
          text="Ready to work with people who actually pick up the phone?"
          className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-on-panel md:text-5xl"
        />
        <Reveal variants={fadeUp} delay={0.3} className="mt-9 flex justify-center">
          <Button to="/contact" variant="light">
            Get in touch
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
