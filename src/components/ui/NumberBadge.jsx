import Reveal from "./Reveal";
import { scaleIn } from "../../lib/motion";

export default function NumberBadge({ number, className = "", tone = "navy" }) {
  const strokeVar = tone === "panel" ? "var(--color-on-panel)" : "var(--color-navy)";
  return (
    <Reveal variants={scaleIn} className={className}>
      <span
        className="select-none font-black leading-none text-transparent opacity-[0.16]"
        style={{ WebkitTextStroke: `1.5px ${strokeVar}` }}
      >
        {number}
      </span>
    </Reveal>
  );
}
