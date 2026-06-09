import { site } from "@/content/site";
import SocialChips from "@/components/ui/SocialChips";

export default function Footer() {
  const { footer } = site;

  return (
    <footer className="border-t border-border py-11">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6 px-gutter">
        <div className="text-sm text-muted">
          {footer.copyright} · <strong className="font-semibold text-ink-soft">{footer.builtBy}</strong>
        </div>
        <SocialChips items={footer.socials} />
      </div>
    </footer>
  );
}
