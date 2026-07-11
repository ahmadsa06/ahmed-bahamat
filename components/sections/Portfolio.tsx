import { ArrowUpRight } from "lucide-react";
import { site, type Project, type ProjectGroup } from "@/content/site";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

/** Single project card — shared verbatim across both portfolio groups.
 *  Decision/Status/tags/link are optional and simply omitted when absent
 *  (desktop-app tools have no "Visit site" link). */
function ProjectCard({ p }: { p: Project }) {
  return (
    <Reveal
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
          {p.tags?.[0] ?? "Project"}
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
        {p.tags && p.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-pill border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {p.href && (
          <Button href={p.href} target="_blank" rel="noreferrer noopener" className="mt-6 self-start">
            {p.linkLabel ?? "Visit site"}
            <ArrowUpRight className="h-[18px] w-[18px]" aria-hidden />
          </Button>
        )}
      </div>
    </Reveal>
  );
}

/** One titled block: heading + one-line subtitle + card grid. */
function PortfolioGroup({ group, headingId }: { group: ProjectGroup; headingId?: string }) {
  return (
    <>
      <Reveal className="max-w-[640px]">
        <h2 id={headingId} className="text-h2 font-bold -tracking-[0.01em]">
          <Highlight {...group.title} />
        </h2>
        <p className="mt-2.5 text-lead text-body">{group.subtitle}</p>
      </Reveal>
      <div className="mt-14 grid gap-[26px] md:grid-cols-2 lg:grid-cols-3">
        {group.items.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </>
  );
}

export default function Portfolio() {
  const { portfolio } = site;

  return (
    <section id="portfolio" aria-labelledby="portfolioTitle" className="bg-surface py-section max-md:py-section-sm">
      <div className="container mx-auto px-gutter">
        <Reveal>
          <Pill>{portfolio.eyebrow}</Pill>
        </Reveal>

        <div className="mt-[18px]">
          <PortfolioGroup group={portfolio.products} headingId="portfolioTitle" />
        </div>

        <div className="mt-section max-md:mt-section-sm">
          <PortfolioGroup group={portfolio.tools} />
        </div>
      </div>
    </section>
  );
}
