export function SkeletonBlock({ className = "" }) {
  return <div className={`shimmer rounded-xl ${className}`} aria-hidden="true" />;
}

export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="shimmer h-3.5 rounded-full"
          style={{ width: i === lines - 1 ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}

export function SkeletonHeading({ className = "" }) {
  return <div className={`shimmer h-10 w-2/3 rounded-lg ${className}`} aria-hidden="true" />;
}

export function SkeletonImage({ className = "" }) {
  return <div className={`shimmer h-full w-full ${className}`} aria-hidden="true" />;
}
