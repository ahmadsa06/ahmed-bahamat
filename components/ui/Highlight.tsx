import type { Heading } from "@/content/site";

/** Renders a split heading with only the highlighted word(s) in primary.
 *  Wrap in the desired <h1>/<h2> at the call site. */
export default function Highlight({ lead, highlight, tail }: Heading) {
  return (
    <>
      {lead}
      <span className="text-primary">{highlight}</span>
      {tail}
    </>
  );
}
