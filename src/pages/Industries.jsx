import { Laptop2, ShoppingBag, Briefcase, Utensils, Palette, HardHat, HeartPulse, Building2 } from "lucide-react";
import TextReveal from "../components/ui/TextReveal";
import Reveal from "../components/ui/Reveal";
import StaggerGroup from "../components/ui/StaggerGroup";
import TiltCard from "../components/ui/TiltCard";
import Button from "../components/ui/Button";
import { fadeUp } from "../lib/motion";

const INDUSTRIES = [
  { icon: Laptop2, title: "Technology & SaaS", desc: "R&D relief, burn-rate tracking and investor-ready numbers for fast-moving teams." },
  { icon: ShoppingBag, title: "E-commerce & Retail", desc: "Multi-channel reconciliation, inventory and margin visibility that keeps pace with sales." },
  { icon: Briefcase, title: "Professional Services", desc: "Time, billing and profitability clarity for agencies, studios and consultancies." },
  { icon: Utensils, title: "Hospitality & Restaurants", desc: "Tight margins, payroll complexity and cash flow — handled with a steady hand." },
  { icon: Palette, title: "Creative & Media", desc: "Project-based accounting for studios juggling freelancers, retainers and rights." },
  { icon: HardHat, title: "Construction & Trades", desc: "CIS compliance, contract accounting and cash flow across long project cycles." },
  { icon: HeartPulse, title: "Healthcare & Wellness", desc: "Practice finances, payroll and compliance for clinics and independent practitioners." },
  { icon: Building2, title: "Property & Real Estate", desc: "Portfolio reporting, SPV structuring and tax planning across your holdings." },
];

export default function Industries() {
  return (
    <>
      <IndustriesHero />
      <IndustriesGrid />
      <CtaStrip />
    </>
  );
}

function IndustriesHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-36 text-center md:px-10 md:pb-20 md:pt-44">
      <Reveal variants={fadeUp} className="mb-6 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
          Industries
        </span>
      </Reveal>
      <TextReveal
        as="h1"
        text="Expertise shaped by the sectors we serve."
        className="text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl"
      />
      <Reveal variants={fadeUp} delay={0.4} className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-navy/60">
        Every industry keeps its books differently. We bring pattern-recognition
        from businesses like yours, not a one-size-fits-all template.
      </Reveal>
    </section>
  );
}

function IndustriesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
      <StaggerGroup stagger={0.08} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} variants={fadeUp} delay={(i % 4) * 0.03}>
            <TiltCard
              strength={6}
              className="flex h-full flex-col gap-4 rounded-3xl border border-stone-dark/60 bg-white p-7 transition-shadow duration-300 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-stone text-navy transition-transform duration-300 hover:rotate-6 hover:scale-110">
                <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
              </span>
              <h3 className="text-lg font-bold text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-navy/60">{desc}</p>
            </TiltCard>
          </Reveal>
        ))}
      </StaggerGroup>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-stone via-stone-light to-cream px-8 py-20 text-center md:px-16">
        <TextReveal
          as="h2"
          text="Don't see your industry? We'd still love to talk."
          className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-navy md:text-5xl"
        />
        <Reveal variants={fadeUp} delay={0.25} className="mt-9 flex justify-center">
          <Button to="/contact" variant="primary">
            Talk to us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
