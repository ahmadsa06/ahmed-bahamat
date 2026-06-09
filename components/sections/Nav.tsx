"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import Button from "@/components/ui/Button";

/** Sticky nav — white, gains a hairline bottom border + soft shadow on scroll.
 *  Mobile: links collapse behind a toggle. */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/[0.86] backdrop-blur-md backdrop-saturate-150 transition-[border-color,box-shadow] ${
        scrolled ? "border-b border-border shadow-soft" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-[76px] items-center justify-between px-gutter">
        <a href="#top" aria-label={`${site.brand.name} — home`} className="inline-flex items-center gap-3 font-semibold text-ink">
          <span
            aria-hidden
            className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-primary text-base font-bold tracking-tight text-primary-fg"
          >
            AB
          </span>
          <span className="text-[1.0625rem] tracking-tight">{site.brand.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-[34px] md:flex">
          {site.nav.links.map((l) => (
            <a key={l.href} href={l.href} className="font-medium text-ink-soft transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button href={site.nav.cta.href} download>
            <Download className="h-[18px] w-[18px]" aria-hidden />
            <span className="max-md:hidden">{site.nav.cta.label}</span>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((v) => !v)}
            className="grid place-items-center p-1.5 text-ink md:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="navLinks"
          aria-label="Primary mobile"
          className="absolute inset-x-0 top-[76px] flex flex-col items-start gap-4 border-b border-border bg-white px-gutter pb-6 pt-[18px] shadow-card md:hidden"
        >
          {site.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
