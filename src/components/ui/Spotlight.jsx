import { useRef, useState } from "react";
import useReducedMotion from "../../hooks/useReducedMotion";

/**
 * Wraps children with a radial glow that follows the cursor.
 * Position is written straight to a CSS custom property on the DOM node
 * (no React state) so pointer tracking never triggers a re-render.
 */
export default function Spotlight({
  className = "",
  color = "184, 141, 87",
  size = 500,
  children,
}) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative ${className}`}
      style={{ "--spot-x": "50%", "--spot-y": "50%" }}
    >
      {!prefersReduced && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(${size}px circle at var(--spot-x) var(--spot-y), rgba(${color}, 0.16), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
