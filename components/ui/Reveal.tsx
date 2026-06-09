"use client";

import { useEffect, useRef, useState, type ElementType, type HTMLAttributes, type ReactNode } from "react";

/** Scroll-reveal wrapper. Content is VISIBLE by default; the entrance plays only
 *  once it scrolls into view (and is skipped entirely under prefers-reduced-motion
 *  or when IntersectionObserver is missing) — so content can never be left hidden.
 *  Mirrors the prototype's .reveal/.in keyframe pattern (sections.css). */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
} & HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setShown(true);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={shown ? { animation: "revealIn .6s ease both" } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
