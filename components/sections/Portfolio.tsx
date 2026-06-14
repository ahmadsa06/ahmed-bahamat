"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import Button from "@/components/ui/Button";
import OutlineButton from "@/components/ui/OutlineButton";
import ArrowLink from "@/components/ui/ArrowLink";
import Pill from "@/components/ui/Pill";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

/** Short uppercase tag per featured card (matches the prototype's thumb tags). */
const TAGS = ["Operations ERP", "Marketplace", "EdTech"];

export default function Portfolio() {
  const { portfolio } = site;
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="portfolio" aria-labelledby="portfolioTitle" className="bg-surface py-section max-md:py-section-sm">
      <div className="container mx-auto px-gutter">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <Pill>{portfolio.eyebrow}</Pill>
            <h2 id="portfolioTitle" className="mt-[18px] text-h2 font-bold -tracking-[0.01em]">
              <Highlight {...portfolio.title} />
            </h2>
          </div>
          <ArrowLink href={`https://${site.brand.domain}`}>See full portfolio</ArrowLink>
        </Reveal>

        <div className="mt-14 grid gap-[26px] md:grid-cols-2 lg:grid-cols-3">
          {portfolio.featured.map((p, i) => (
            <Reveal
              key={p.title}
              as="article"
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card transition-[transform,box-shadow] hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div
                className="relative grid aspect-[16/10] place-items-center border-b border-border"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, var(--color-surface) 0 14px, var(--color-surface-2) 14px 28px)",
                }}
              >
                <span className="absolute left-4 top-4 rounded-pill border border-border bg-white/90 px-[11px] py-[5px] text-xs font-semibold uppercase tracking-wider text-primary">
                  {TAGS[i] ?? "Project"}
                </span>
                <span className="rounded-md bg-white/70 px-2.5 py-1 font-mono text-xs text-muted">project shot</span>
              </div>
              <div className="flex flex-1 flex-col p-[26px]">
                <h3 className="text-h3 font-bold text-ink">{p.title}</h3>
                <p className="mt-2.5 flex-1 text-base text-body">{p.blurb}</p>
                <div className="mt-[18px] flex flex-col gap-2 text-sm leading-normal">
                  {p.decision && (
                    <div className="flex gap-2">
                      <span className="flex-none font-semibold text-primary">Decision</span>
                      <span className="text-body">{p.decision}</span>
                    </div>
                  )}
                  {p.status && (
                    <div className="flex gap-2">
                      <span className="flex-none font-semibold text-primary">Status</span>
                      <span className="text-body">{p.status}</span>
                    </div>
                  )}
                </div>
                {p.href && (
                  <Button
                    href={p.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-6 self-start"
                  >
                    Visit site
                    <ArrowUpRight className="h-[18px] w-[18px]" aria-hidden />
                  </Button>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-9 text-center">
          {showMore && (
            <ul id="moreList" className="mb-[30px] grid gap-3.5 text-left md:grid-cols-2">
              {portfolio.more.map((m) => (
                <li
                  key={m.title}
                  className="flex items-center gap-3.5 rounded-md border border-border bg-surface px-5 py-[18px]"
                >
                  <span aria-hidden className="h-2 w-2 flex-none rounded-full bg-primary" />
                  <span className="flex-1 text-body">
                    <strong className="font-semibold text-ink">{m.title}</strong> — {m.blurb}
                  </span>
                  {m.href && (
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Visit ${m.title}`}
                      className="group inline-flex flex-none items-center gap-1 rounded-pill border border-primary px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-fg"
                    >
                      Visit
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
          <OutlineButton
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            aria-controls="moreList"
          >
            {showMore ? portfolio.showLessLabel : portfolio.showMoreLabel}
            <ChevronDown
              className={`h-[18px] w-[18px] transition-transform ${showMore ? "rotate-180" : ""}`}
              aria-hidden
            />
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
