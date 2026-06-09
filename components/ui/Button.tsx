import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = { children: ReactNode; className?: string } & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

/** Primary filled button (design-system: bg primary, on-primary text, hover deep). */
export default function Button({ children, className = "", ...props }: ButtonProps) {
  const cls =
    "inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-semibold text-primary-fg transition-colors hover:bg-primary-deep " +
    className;

  if ("href" in props && props.href) {
    return (
      <a className={cls} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
