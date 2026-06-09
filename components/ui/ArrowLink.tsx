import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

/** Text link with arrow (design-system: ink text, primary arrow, both lift on hover). */
export default function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={
        "group inline-flex items-center gap-1.5 font-semibold text-ink transition-colors hover:text-primary-lift " +
        className
      }
    >
      {children}
      <ArrowUpRight
        className="h-5 w-5 text-primary transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-lift"
        aria-hidden
      />
    </a>
  );
}
