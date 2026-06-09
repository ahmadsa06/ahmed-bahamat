import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type OutlineButtonProps = { children: ReactNode; className?: string } & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

/** Outline button (design-system: 1.5px primary border, fills primary on hover). */
export default function OutlineButton({ children, className = "", ...props }: OutlineButtonProps) {
  const cls =
    "inline-flex items-center justify-center gap-2 rounded-sm border-[1.5px] border-primary bg-transparent px-7 py-3.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-fg " +
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
