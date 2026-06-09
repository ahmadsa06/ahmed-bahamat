import { Github, Linkedin, Twitter, type LucideIcon } from "lucide-react";
import IconChip from "@/components/ui/IconChip";
import type { SocialIcon, SocialLink } from "@/content/site";

const SOCIAL_ICON: Record<SocialIcon, LucideIcon> = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
};

/** Row of social links as primary IconChips — shared by the Hero rail and Footer
 *  so the icon map + chip markup live in exactly one place. */
export default function SocialChips({ items }: { items: readonly SocialLink[] }) {
  return (
    <div className="flex gap-2.5">
      {items.map((s) => {
        const Icon = SOCIAL_ICON[s.icon];
        return (
          <IconChip
            key={s.href}
            href={s.href}
            label={s.label}
            className="h-10 w-10 transition-transform hover:-translate-y-0.5"
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden />
          </IconChip>
        );
      })}
    </div>
  );
}
