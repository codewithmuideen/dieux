import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import { fadeUp } from "../../lib/motion";

export default function SectionHeading({
  kicker,
  heading,
  supporting,
  align = "left",
  headingClassName = "",
  className = "",
  as = "h2",
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignClass} ${className}`}>
      {kicker && (
        <Reveal variants={fadeUp} className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
            {kicker}
          </span>
        </Reveal>
      )}
      <TextReveal
        as={as}
        text={heading}
        className={`text-4xl font-bold leading-[1.08] tracking-tight text-navy md:text-5xl ${headingClassName}`}
      />
      {supporting && (
        <Reveal variants={fadeUp} delay={0.15}>
          <p className="text-base leading-relaxed text-navy/60 md:text-lg">{supporting}</p>
        </Reveal>
      )}
    </div>
  );
}
