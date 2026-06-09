import type { ReactNode } from "react";

/** Eyebrow pill (design-system: full radius, primary border + text, soft primary-50 fill). */
export default function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-pill border border-primary bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary " +
        className
      }
    >
      {children}
    </span>
  );
}
