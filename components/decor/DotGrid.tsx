/** Dotted grid block (design-system: signature decoration, --dot-* tokens, aria-hidden).
 *  Position + size via className; color via a --dot-* token. */
export default function DotGrid({
  className = "",
  color = "var(--dot-soft)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 ${className}`}
      aria-hidden
      style={{
        backgroundImage: `radial-gradient(${color} 1.5px, transparent 1.5px)`,
        backgroundSize: "16px 16px",
      }}
    />
  );
}
