import type { ReactNode } from "react";

interface IconChipProps {
  children: ReactNode;
  className?: string;
  /** When set the chip becomes a link (footer/hero social chips). */
  href?: string;
  label?: string;
}

/** Square-ish icon chip (design-system: bg primary, on-primary icon, radius sm). */
export default function IconChip({ children, className = "", href, label }: IconChipProps) {
  const cls = `inline-flex items-center justify-center rounded-sm bg-primary text-primary-fg ${className}`;

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        aria-label={label}
        className={`${cls} transition-colors hover:bg-primary-deep`}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <span className={cls} aria-hidden={!label} aria-label={label}>
      {children}
    </span>
  );
}
