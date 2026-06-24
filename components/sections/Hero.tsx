import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";
import { site } from "@/content/site";
import Button from "@/components/ui/Button";
import ArrowLink from "@/components/ui/ArrowLink";
import Pill from "@/components/ui/Pill";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import SocialChips from "@/components/ui/SocialChips";
import DotGrid from "@/components/decor/DotGrid";

export default function Hero() {
  const { hero, socials } = site;

  return (
    <section id="about" aria-labelledby="heroTitle" className="relative overflow-hidden pb-section pt-16">
      <DotGrid className="left-[-46px] top-[90px] h-[132px] w-[132px]" />
      <span aria-hidden className="absolute right-[30%] top-[60px] h-2.5 w-2.5 rounded-full bg-dot-navy" />
      <span aria-hidden className="absolute bottom-[120px] left-[44%] h-2 w-2 rounded-full bg-dot-blue" />

      <div className="container mx-auto grid items-center gap-16 px-gutter lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="order-2 lg:order-1">
          <Pill>{hero.eyebrow}</Pill>
          <h1 id="heroTitle" className="mt-[22px] text-hero font-bold -tracking-[0.025em] text-ink">
            <Highlight {...hero.title} />
          </h1>
          <p className="mt-4 text-base font-semibold text-primary">{hero.subtitle}</p>
          <p className="mt-5 max-w-[34em] text-lead text-body [text-wrap:pretty]">{hero.sub}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>
              <BriefcaseBusiness className="h-[18px] w-[18px]" aria-hidden />
              {hero.primaryCta.label}
            </Button>
            <ArrowLink href={hero.secondaryCta.href}>{hero.secondaryCta.label}</ArrowLink>
          </div>

          <div className="mt-10 flex items-center gap-3.5">
            <span className="text-sm font-medium text-muted">{hero.followLabel}</span>
            <SocialChips items={socials} />
          </div>
        </Reveal>

        <Reveal className="order-1 justify-self-center lg:order-2">
          {/* Signature offset square ink-outline frame on a primary fill - radius 0, kept square. */}
          <div className="relative z-[1] aspect-[5/6] w-[min(420px,78vw)] bg-primary">
            <span
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-[22px] translate-y-[22px] border-2 border-ink"
            />
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              width={hero.photo.width}
              height={hero.photo.height}
              priority
              className="absolute inset-0 h-full w-full object-cover object-top drop-shadow-photo"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
