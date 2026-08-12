import { useParams, Navigate, Link } from "react-router-dom";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import StaggerGroup from "../components/ui/StaggerGroup";
import NumberBadge from "../components/ui/NumberBadge";
import Button from "../components/ui/Button";
import TextReveal from "../components/ui/TextReveal";
import FloatingRing from "../components/ui/FloatingRing";
import { fadeUp, slideRight, scaleIn } from "../lib/motion";
import { SERVICES, getServiceBySlug } from "../lib/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const next = SERVICES[(idx + 1) % SERVICES.length];
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-panel px-6 pb-20 pt-36 text-on-panel md:px-10 md:pb-28 md:pt-44">
        <NumberBadge
          number={service.number}
          tone="panel"
          className="absolute -top-6 right-4 text-[10rem] opacity-[0.08] md:right-16 md:text-[16rem]"
        />
        <div className="relative mx-auto max-w-4xl">
          <Reveal variants={fadeUp} className="mb-6 flex items-center gap-3">
            <Link to="/services" className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-on-panel/50 hover:text-gold">
              <ArrowLeft className="h-3.5 w-3.5" /> All services
            </Link>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1} className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-on-panel/10">
            <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
          </Reveal>
          <TextReveal
            as="h1"
            text={service.title}
            delay={0.15}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          />
          <Reveal variants={fadeUp} delay={0.5} className="mt-6 max-w-xl text-lg leading-relaxed text-on-panel/70">
            {service.short}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <Reveal
          variants={scaleIn}
          className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-3xl bg-navy sm:h-[400px] md:h-full md:min-h-[420px]"
        >
          <span className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:26px_26px]" aria-hidden="true" />
          <FloatingRing className="left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 opacity-40 md:h-72 md:w-72" />
          <Icon className="relative h-24 w-24 text-cream/90 md:h-32 md:w-32" strokeWidth={1} />
        </Reveal>
        <div className="flex flex-col justify-center gap-8">
          <Reveal variants={slideRight}>
            <p className="text-lg leading-relaxed text-navy/70">{service.description}</p>
          </Reveal>

          <StaggerGroup stagger={0.08} className="flex flex-col gap-4">
            {service.features.map((f) => (
              <Reveal
                key={f}
                variants={fadeUp}
                className="group flex items-start gap-3 border-b border-stone-dark/60 pb-4 transition-transform duration-300 hover:translate-x-1.5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  <Check className="h-3.5 w-3.5 text-navy" strokeWidth={2.5} />
                </span>
                <span className="text-base text-navy/80">{f}</span>
              </Reveal>
            ))}
          </StaggerGroup>

          <Reveal variants={fadeUp} delay={0.15}>
            <Button to="/contact" variant="primary">
              Enquire about this service
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-stone-dark/60 bg-stone-light px-6 py-16 md:px-10">
        <Link
          to={`/services/${next.slug}`}
          className="group mx-auto flex max-w-6xl items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
              Next service
            </span>
            <h3 className="mt-2 text-2xl font-bold text-navy md:text-3xl">{next.title}</h3>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/20 text-navy transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-navy group-hover:text-cream">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </section>
    </>
  );
}
