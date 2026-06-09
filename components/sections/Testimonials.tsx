import { site } from "@/content/site";
import Pill from "@/components/ui/Pill";
import Card from "@/components/ui/Card";
import Stars from "@/components/ui/Stars";

/** Reviews — built but currently disabled in page.tsx (no real quotes yet).
 *  Renders nothing while items is empty, so it is safe to enable later. */
export default function Testimonials() {
  const { eyebrow, items } = site.testimonials;
  if (items.length === 0) return null;

  return (
    <section className="py-section-sm md:py-section">
      <div className="mx-auto max-w-container px-6">
        <Pill>{eyebrow}</Pill>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <Card key={t.name} className="flex flex-col gap-4 p-6">
              <Stars rating={t.rating} />
              <p className="text-body">{t.quote}</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
