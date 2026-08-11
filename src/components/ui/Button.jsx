import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import useReducedMotion from "../../hooks/useReducedMotion";

const MotionLink = motion.create(Link);

// primary/secondary are theme-aware (for swappable light-chrome backgrounds);
// light/outlineLight are fixed (for permanently-dark panel backgrounds — hero, footer, etc).
const variantClasses = {
  primary: "border border-navy bg-navy text-cream",
  secondary: "border border-navy bg-transparent text-navy",
  light: "border border-on-panel bg-on-panel text-panel",
  outlineLight: "border border-on-panel/50 bg-transparent text-on-panel",
};

const sweepClasses = {
  primary: "bg-gold",
  secondary: "bg-navy",
  light: "bg-panel-light",
  outlineLight: "bg-on-panel",
};

const sweepTextClasses = {
  primary: "group-hover:text-navy",
  secondary: "group-hover:text-cream",
  light: "group-hover:text-on-panel",
  outlineLight: "group-hover:text-panel",
};

export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  icon: Icon = ArrowUpRight,
  className = "",
  children,
  disabled = false,
  ...rest
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.25, y: relY * 0.35 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const baseClass = `group relative isolate inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-500 ${variantClasses[variant]} ${
    disabled ? "pointer-events-none opacity-50" : ""
  } ${className}`;

  const inner = (
    <>
      <span
        className={`absolute inset-0 -z-10 -translate-x-[105%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 ${sweepClasses[variant]}`}
        aria-hidden="true"
      />
      <span className={`relative transition-colors duration-500 ${sweepTextClasses[variant]}`}>
        {children}
      </span>
      {Icon && (
        <Icon
          className={`relative h-4 w-4 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${sweepTextClasses[variant]}`}
        />
      )}
    </>
  );

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: pos.x, y: pos.y },
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.15 },
    className: baseClass,
  };

  if (to) {
    return (
      <MotionLink to={to} {...motionProps} {...rest}>
        {inner}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps} {...rest}>
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} {...motionProps} {...rest}>
      {inner}
    </motion.button>
  );
}
