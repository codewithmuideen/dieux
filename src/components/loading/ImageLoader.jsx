import { useState } from "react";

/**
 * Image with graceful loading: neutral shimmer placeholder underneath,
 * then blur -> sharp / opacity 0 -> 1 / scale 1.04 -> 1 once loaded.
 */
export default function ImageLoader({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  priority = false,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-stone ${wrapperClassName}`}>
      <div
        className={`shimmer absolute inset-0 transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-lg"
        } ${className}`}
        {...rest}
      />
    </div>
  );
}
