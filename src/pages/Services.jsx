import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import TextReveal from "../components/ui/TextReveal";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import TiltCard from "../components/ui/TiltCard";
import FloatingRing from "../components/ui/FloatingRing";
import { StickyStackItem } from "../components/ui/StickyStack";
import { fadeUp } from "../lib/motion";
import { SERVICES } from "../lib/services";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServiceStack />
      <CtaStrip />
    </>
  );
}

function ServicesHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-36 text-center md:px-10 md:pb-20 md:pt-44">
      <Reveal variants={fadeUp} className="mb-6 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
          Our services
        </span>
      </Reveal>
      <TextReveal
        as="h1"
        text="Everything your business needs, in one place."
        className="text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl"
      />
      <Reveal variants={fadeUp} delay={0.4} className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-navy/60">
        Five disciplines, one accountable team. Scroll through to see how each
        one fits into a Dieux partnership.
      </Reveal>
    </section>
  );
}

function ServiceStack() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32">
      {SERVICES.map((service, i) => (
        <StickyStackItem key={service.slug} index={i} runway="55vh">
          <TiltCard
            strength={4}
            className="overflow-hidden rounded-3xl border border-stone-dark/60 bg-cream shadow-[0_30px_60px_-30px_rgba(35,42,52,0.25)]"
          >
            <Link
              to={`/services/${service.slug}`}
              className="grid grid-cols-1 md:grid-cols-2"
            >
              <div
                className={`relative flex h-56 items-center justify-center overflow-hidden bg-navy md:h-auto md:min-h-[420px] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <span className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
                <FloatingRing className="left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 opacity-40 md:h-60 md:w-60" />
                <service.icon className="relative h-20 w-20 text-cream/90 md:h-28 md:w-28" strokeWidth={1} />
                <span className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  {service.number}
                </span>
              </div>
              <div className="flex flex-col justify-center gap-5 p-8 md:p-14">
                <span className="text-sm font-semibold text-gold">{service.short}</span>
                <h2 className="text-3xl font-bold text-navy md:text-4xl">{service.title}</h2>
                <p className="text-base leading-relaxed text-navy/60 md:text-lg">
                  {service.description}
                </p>
                <ul className="mt-1 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-navy/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="group mt-2 flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy">
                  View service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </TiltCard>
        </StickyStackItem>
      ))}
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-stone via-stone-light to-cream px-8 py-20 text-center md:px-16">
        <TextReveal
          as="h2"
          text="Not sure which service you need?"
          className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-navy md:text-5xl"
        />
        <Reveal variants={fadeUp} delay={0.3} className="mt-9 flex justify-center">
          <Button to="/contact" variant="primary">
            Talk it through with us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
