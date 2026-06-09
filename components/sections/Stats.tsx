import { site } from "@/content/site";
import Reveal from "@/components/ui/Reveal";

export default function Stats() {
  return (
    <section aria-label="By the numbers">
      <div className="container mx-auto px-gutter">
        <Reveal className="grid overflow-hidden rounded-lg border border-border bg-surface sm:grid-cols-3">
          {site.stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-9 py-10 max-sm:px-7 max-sm:py-7 ${
                i > 0 ? "border-border sm:border-l max-sm:border-t" : ""
              }`}
            >
              <div className="text-stat font-bold leading-none -tracking-[0.02em] text-primary">{s.value}</div>
              <div className="mt-2.5 text-base text-body">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
