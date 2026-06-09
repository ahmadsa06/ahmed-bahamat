# CLAUDE.md — Ahmed Bahamat Portfolio

Project context for Claude Code. Read this fully before generating or editing code.

## Design source (Claude Design)

The canonical visual design lives in Claude Design — fetch it before changing any
layout/visuals so the build stays pixel-faithful to the prototype:

- **Design link:** https://api.anthropic.com/v1/design/h/kI_itTMSjW0sygncf7To3Q?open_file=Ahmed+Bahamat+Portfolio.html
- **Primary file:** `Ahmed Bahamat Portfolio.html` (single-page prototype: Nav · Hero ·
  Stats · Skills · Portfolio · Contact · Footer). The handoff bundle also ships
  `styles.css`, `sections.css`, `app.js`, and a chat transcript explaining intent.
- Implementation here mirrors that prototype 1:1 in Next.js (App Router) + Tailwind,
  with all copy/data centralized in `content/site.ts`.

## What this is

The personal portfolio of **Ahmed Salem Bahamat** — Technical Product Manager &
AI-native builder — at **ahmedbahamat.com**. It is a faithful rebuild of an
existing Figma template (a single-page designer/agency portfolio) with **one
deliberate change: the green brand identity is replaced by a black + dark-blue
duotone.** Layout, sections, typography, components, spacing, and decoration are
preserved exactly. Do not redesign — re-skin and fill with real content.

## Golden rules

1. **Tokens only.** Every color, type size, radius, shadow, and spacing value comes
   from `globals.css` (the single source of truth) via `var(--…)` or the Tailwind
   classes in `tailwind.config.ts`. **Never** hardcode a hex value in a component.
2. **The accent is dark blue `#1B3A8B` (`primary`). Never reintroduce the template
   green (`#0DB75F`).** Anything that was green is now `primary` or `ink`. See the
   green→navy mapping in `design-system.md`.
3. **Keep the template.** Same sections, order, type treatment, and the signature
   bits (offset square photo frame, eyebrow pills, confetti scatter, dotted grids).
   If tempted to "improve" the layout — don't. The brief is color-only.
4. **SIMPLIFY.** Smallest thing that works. No premature abstraction, no extra
   dependencies, no state libraries. One section = one component.
5. **Accessibility floor** (already scaffolded in `globals.css`): responsive to
   mobile, visible `:focus-visible` ring, reduced motion respected, semantic
   landmarks, `alt` text on images, `aria-hidden` on decorative dots.

## Stack

- **Next.js (App Router) + TypeScript + Tailwind CSS** — static-exportable.
- **Fonts:** Poppins via `next/font/google` (preferred) — falls back to the
  `@import` in `globals.css`.
- **Icons:** `lucide-react` (matches the template's line icons: gem/diamond,
  activity/pulse, graduation-cap, phone, mail, map-pin, social glyphs).
- **Motion (optional, sparing):** `framer-motion` for scroll-reveal only; must
  respect `prefers-reduced-motion`. Skip if it adds noise.
- **Deploy:** Vercel, or Hostinger / DigitalOcean (Ahmed's usual). `next build`
  (+ `output: 'export'` if going fully static).

## Suggested structure

```
app/
  layout.tsx           # html lang/dir, font, imports globals.css
  page.tsx             # composes the sections in order
  globals.css          # design tokens + base (provided)
components/
  ui/                  # Button, OutlineButton, Pill, Card, IconChip, Input, Stars
  sections/            # Nav, Hero, Stats, Skills, Portfolio, Testimonials, Contact, Footer
  decor/               # DotScatter, DotGrid (aria-hidden)
content/
  site.ts              # ALL copy + data lives here (single edit point)
public/
  images/              # exported template assets + Ahmed's photo
tailwind.config.ts     # token → utility wiring (provided)
```

Keep all copy/data in `content/site.ts` so text is edited in one place, never
inline in JSX.

## Page sections — spec + real content

Order is top-to-bottom as in the template. Component styling per
`design-system.md`; content below replaces all template placeholders
(the original "Tanvir Ahmed / Bangladesh" copy is gone).

### Nav
Logo (mark + `Ahmed Bahamat`) · links: **About · Skills · Portfolio** · primary
**Download CV** button (links to the PDF in `public/`). Sticky, white, hairline
bottom border on scroll.

### Hero
- Eyebrow pill: `Welcome`
- H1: **I design, build & ship products.** — highlight "build & ship" in `primary`.
- Sub: *I'm Ahmed, a technical product manager and AI-native builder. I take an idea
  to a working prototype in 1–7 days — designing the interface, building with Claude
  Code, and validating with real users.*
- CTAs: **Contact Me** (primary) · **View Portfolio ↗**
- Right: Ahmed's photo on a `primary` fill with the offset **square `ink` outline
  frame** (keep square corners).
- Right rail: "Follow me on:" + LinkedIn / X / GitHub chips.

### Stats (replaces 80+/200+/99+) — numbers are editable
- **10** — Products built end-to-end
- **1–7 days** — Idea → working prototype
- **5** — Domains: AI agents, SaaS, ERP, marketplace, EdTech

### Skills ("My Skills" → "Why work with me?")
- Eyebrow pill `My Skills`; heading **Why Hire Me For Your `Next Project`?**
  (highlight "Next Project").
- Lead: *I own the full product loop — frame the problem, design, build, and test —
  solo and fast.*
- **Hire Me** button (primary).
- Four cards (icon in `primary`):
  - **Own the full loop** — Frame, design the interface, build, and test with users.
  - **Design with AI tools** — On-brand UI from prompts: Figma, Claude Design, Google Stitch.
  - **Build with Claude Code** — Describe the outcome, review, steer — a dev teammate, not hand-offs.
  - **Ship in days** — Go deep on a narrow problem, ship a testable prototype, then learn from real users.

### Portfolio ("Latest Projects")
- Eyebrow pill `Portfolio`; heading **My Creative Works `Latest Projects`**.
- Featured project cards:
  - **Logistic System** — Operations ERP for food-delivery companies; order intake
    and task routing across every department. *Decision: modeled the real hand-offs
    between teams, not a generic admin panel. Status: built in 1 week, in staging →
    limited pilot.*
  - **Fragra-World** — Two-sided marketplace for pre-owned niche fragrances, with
    auctions for rare pieces. *Decision: a small passionate community over a broad
    market. Status: built in 4 days; launched, preparing go-to-market.*
  - **Tarsya AI** — AI agent that turns company inputs into submission-ready
    technical & financial proposals for Saudi government tenders (Etimad).
    *Decision: a narrow niche — Saudi + government + Arabic. Status: v1 in 1 day;
    rebuilding for production.*
- **Show More** button → compact list of the other 7: AI telesales assistant
  (real-time call scripting + CRM) · Rasad Time (remote attendance, no
  geo/IP/face-scan) · Clubs Platform (kids'-club SaaS with parent progress tracking)
  · Marj3 (spaced repetition for multi-disciplinary pros) · Alsawi (trainer–student
  courses, beta live) · Earab (leveled Arabic-grammar learning) · Tarsya landing page.

### Testimonials ("Reviews") — optional
Ahmed has no real quotes yet. **Either** keep the section structurally and fill
`content/site.ts` with real testimonials when available, **or** comment the section
out of `page.tsx` until then. Do not ship fabricated quotes. Stars stay **amber**.

### Contact ("Let's Discuss Your Project")
- Eyebrow pill `Contact`; heading **Let's Discuss Your `Project`**.
- Info (icon chips, `bg primary`): **Call** +966 53 504 4384 · **Email**
  ahmadsa06@gmail.com · **Location** Riyadh, Saudi Arabia.
- Form: Full name · Your email · Phone number · Budget · Message → **Submit Message**
  (primary). Wire to a real handler (Formspree / Resend / a Next.js route) or a
  `mailto:` fallback — flag which you chose; don't leave it inert.

### Footer
© 2026 Ahmed Bahamat. All rights reserved. · "Built end-to-end by Ahmed Bahamat"
(replaces "Designed by Tanvir Ahmed") · social chips (`bg primary`).

## Assets

Template image exports live in the uploaded `.fig`. Re-export Ahmed's headshot and
any showcase images into `public/images/` and load via `next/image`. Replace the
template's stock people/screenshots with Ahmed's own project shots where possible.

## Commands

```bash
npm install
npm run dev      # local dev
npm run build    # production build (add output:'export' for fully static)
npm run lint     # keep clean before commit
```

## Don't

- Don't use the template green anywhere.
- Don't hardcode colors/sizes — tokens only.
- Don't restructure the layout or change the typeface (color-only brief).
- Don't add stock testimonials or pad the project list with anything not in the CV.
- Don't over-engineer: no CMS, no extra state libs, no unused deps.
