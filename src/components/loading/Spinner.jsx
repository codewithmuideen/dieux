/**
 * Premium dual-ring spinner in brand colours. No generic Bootstrap circle.
 */
export default function Spinner({ size = 22, className = "" }) {
  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading"
    >
      <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full animate-spin-slow">
        <circle
          cx="20"
          cy="20"
          r="17"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="2.5"
        />
      </svg>
      <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full animate-spin">
        <circle
          cx="20"
          cy="20"
          r="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="26 80"
        />
      </svg>
    </span>
  );
}
