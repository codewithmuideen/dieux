const TONES = ["bg-gold", "bg-panel-light", "bg-on-panel/20"];

/**
 * Abstract overlapping avatar stack (initials on tinted circles) —
 * deliberately not stock photos, so it never implies specific real customers.
 * Fixed panel tones: always sits on the (permanently dark) hero.
 */
export default function AvatarStack({ initials = ["DA", "MK", "SR", "+"], className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {initials.map((label, i) => (
        <span
          key={i}
          style={{ marginLeft: i === 0 ? 0 : -12, zIndex: initials.length - i }}
          className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-panel text-[11px] font-bold text-on-panel ${TONES[i % TONES.length]}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
