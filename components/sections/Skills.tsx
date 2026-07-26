import { BriefcaseBusiness, Repeat, WandSparkles, Terminal, Rocket } from "lucide-react";
import { site, type SkillIcon } from "@/content/site";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import DotGrid from "@/components/decor/DotGrid";

const SKILL_ICON: Record<SkillIcon, typeof Repeat> = {
  loop: Repeat,
  design: WandSparkles,
  code: Terminal,
  ship: Rocket,
};

export default function Skills() {
  const { skills } = site;

  return (
    <section
      id="skills"
      aria-labelledby="skillsTitle"
      className="relative overflow-hidden py-section max-md:py-section-sm"
    >
      <DotGrid className="bottom-[60px] right-[-40px] h-[132px] w-[132px]" />
      <div className="container mx-auto grid items-start gap-14 px-gutter lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="max-w-[640px]">
          <Pill>{skills.eyebrow}</Pill>
          <h2 id="skillsTitle" className="mt-[18px] text-h2 font-bold -tracking-[0.01em]">
            <Highlight {...skills.title} />
          </h2>
          <p className="mt-[18px] text-lead text-body [text-wrap:pretty]">{skills.lead}</p>
          <Button href={skills.cta.href} className="mt-[30px]">
            <BriefcaseBusiness className="h-[18px] w-[18px]" aria-hidden />
            {skills.cta.label}
          </Button>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.cards.map((c) => {
            const Icon = SKILL_ICON[c.icon];
            return (
              <Reveal
                key={c.title}
                as="article"
                className="rounded-lg border border-border bg-white p-7 shadow-card transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="mb-[18px] grid h-[52px] w-[52px] place-items-center rounded-md bg-primary-50 text-primary">
                  <Icon className="h-[26px] w-[26px]" aria-hidden />
                </div>
                <h3 className="text-h3 font-bold text-ink">{c.title}</h3>
                <p className="mt-2.5 text-base text-body">{c.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

