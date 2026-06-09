import type { ReactNode } from "react";

/** Surface card (design-system: radius lg, soft card shadow). */
export default function Card({
  children,
  className = "",
  surface = false,
}: {
  children: ReactNode;
  className?: string;
  surface?: boolean;
}) {
  return (
    <div className={`rounded-lg ${surface ? "bg-surface" : "bg-white"} shadow-card ${className}`}>
      {children}
    </div>
  );
}
