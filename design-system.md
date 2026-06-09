# Design System — Ahmed Bahamat Portfolio

**One change only:** the template's layout, typography, components, and decorative
language are kept exactly as designed. The **green accent identity (`#0DB75F`)**
is replaced with a **black + dark-blue duotone**. Nothing else moves.

Tokens live in `globals.css` (source of truth) and are exposed as Tailwind classes
via `tailwind.config.ts`. Never hardcode a hex value in a component — reference a
token.

---

## Color

### The duotone

The page stays on a **white** background. Two brand colors carry the identity:

- **Black** (`--color-ink` `#0A0F1E`) — a near-black with a faint blue undertone so
  it sits in the same family as the navy. Used for headings, the logo mark, the
  offset hero photo frame, and primary text.
- **Dark blue** (`--color-primary` `#1B3A8B`) — the single accent. It does
  everything the green used to do: highlighted headline words, buttons, icons,
  pills, links, active carousel dots.

A lighter blue (`--color-primary-lift` `#3B6FE5`) is reserved for hover/focus only,
used sparingly so the palette reads as black + dark blue, not "lots of blues."

### Full palette

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background (unchanged) |
| `--color-surface` | `#F5F7FB` | Cards, inputs — faint blue-tinted neutral |
| `--color-surface-2` | `#EEF2FA` | Hover surface / alt panel |
| `--color-ink` | `#0A0F1E` | **Black** — headings, logo, photo frame |
| `--color-ink-soft` | `#1B2436` | Secondary headings |
| `--color-body` | `#525B6B` | Paragraph text |
| `--color-muted` | `#8A93A3` | Captions, placeholders, meta |
| `--color-border` | `#E5EAF3` | Hairlines, input borders, dividers |
| `--color-primary` | `#1B3A8B` | **Dark blue** — the accent (replaces green) |
| `--color-primary-deep` | `#11245A` | Pressed / deep navy |
| `--color-primary-lift` | `#3B6FE5` | Hover & focus lift (sparing) |
| `--color-primary-050` | `#EAF0FF` | Pill bg, icon-chip bg, soft fill |
| `--color-on-primary` | `#FFFFFF` | Text/icon on a primary fill |
| `--color-rating` | `#F5A623` | Star ratings (see note) |
| `--color-focus` | `#3B6FE5` | Keyboard focus ring |

### Green → navy mapping (what to swap when porting any template element)

| Template element (was green) | Now uses |
|---|---|
| Logo box + "Agency" wordmark | `ink` mark on `primary-050`, or solid `primary` |
| Highlighted headline words ("Creative", "Project") | `primary` |
| Filled buttons (Contact Me, Hire Me, Submit) | `bg: primary`, `text: on-primary`; hover `primary-deep` |
| Outline button (Download CV) | `border + text: primary`; hover fill `primary` |
| Skill / service icons | `primary` |
| Eyebrow pills (Welcome, My Skills, Reviews, Contact) | `border + text: primary`, transparent fill (or `primary-050`) |
| Active carousel dot | `primary`; inactive `border` |
| Contact icon chips (phone/email/pin) | `bg: primary`, icon `on-primary` |
| Footer social chips | `bg: primary`, icon `on-primary`; hover `primary-deep` |
| Confetti dots / dotted grids | `--dot-navy`, `--dot-blue`, `--dot-black`, `--dot-soft` |

### The one functional exception — star ratings

Review stars stay **amber `#F5A623`**. Stars are a recognized rating convention; a
navy star reads as decoration, not a score. If you want a strict two-color look,
set `--color-rating: var(--color-primary)` in `globals.css` — that's the only edit
needed and it propagates everywhere.

### Contrast (all pass WCAG)

`ink` on white ≈ 19:1 · `primary` on white ≈ 8.6:1 (AAA body) · white on `primary`
≈ 8.6:1 (button text) · `body` on white ≈ 6.7:1 (AA). Keep `muted` for non-essential
or large text only.

---

## Typography

Faithful to the template's geometric sans. Single family, weights do the work.

- **Display / body:** Poppins — `400` body, `500` UI/labels, `600` card titles,
  `700` headings, `800` hero (optional).
- Load via `next/font/google` (preferred) or the `@import` already in `globals.css`.

| Token | Size | Use |
|---|---|---|
| `--text-hero` | `clamp → ~72px` / 1.08 / 700 | h1 hero ("I design, build & ship products") |
| `--text-h2` | `clamp → ~48px` / 1.3 / 700 | Section titles |
| `--text-h3` | `22px` / 1.3 / 600 | Card titles |
| `--text-stat` | `clamp → ~56px` / 1 / 700 | Stat numbers (10+, 1–7d) |
| `--text-lg` | `18px` / 1.65 / 400 | Lead paragraph |
| `--text-base` | `16px` / 1.65 / 400 | Body |
| `--text-sm` | `14px` / 500 | Pills, captions, meta |

Highlighting pattern: heading in `ink`, the emphasized word(s) in `primary` —
same as the template's green highlight, just navy.

---

## Shape, depth, spacing

- **Radius:** buttons/inputs `8px` (`--radius-sm`) · small cards `12px` · feature &
  project cards `20px` (`--radius-lg`) · pills/chips full. **Hero photo frame keeps
  square corners (radius 0)** — the offset black outline is a signature; keep it.
- **Shadow:** cards `--shadow-card` (soft, low) · lighter `--shadow-soft` · focus
  `--shadow-focus`. No heavy/dark shadows.
- **Layout:** container `1200px`, gutter `24px`. Section rhythm `120px` desktop
  (`--section-y`) / `64px` mobile (`--section-y-sm`). Base spacing scale = 4px.

---

## Components (spec carries over 1:1; only colors change)

- **Button — primary:** `bg primary`, `text on-primary`, radius `sm`, padding
  `14px 28px`, weight 600. Hover `primary-deep`. Focus → focus ring.
- **Button — outline:** transparent, `1.5px border primary`, `text primary`. Hover
  fills `primary` with `on-primary` text.
- **Link w/ arrow** ("View Portfolio ↗"): `text ink`, arrow `primary`; hover both
  `primary-lift`.
- **Eyebrow pill:** full radius, `1px border primary`, `text primary`, `~6px 16px`,
  optional `bg primary-050`. (Welcome / My Skills / Portfolio / Reviews / Contact.)
- **Stat block:** number `--text-stat` in `primary`, label in `body`; vertical
  `border` divider between items.
- **Skill / service card:** `bg surface` or white + `shadow-card`, radius `lg`,
  icon in `primary` (24–28px), title `h3` in `ink`, copy in `body`.
- **Project card:** image top, radius `lg`, `shadow-card`; navy carousel controls
  (arrows `ink`, active dot `primary`).
- **Testimonial card:** white + `shadow-card`, radius `lg`; **amber stars**, quote
  `body`, avatar + name `ink` + role `muted`.
- **Contact info row:** square-ish icon chip `bg primary` / icon `on-primary`,
  radius `sm`; label `muted`, value `ink`.
- **Input / textarea:** `bg white` or `surface`, `1px border border`, radius `sm`,
  placeholder `muted`; focus → `border primary` + focus ring.
- **Footer social chips:** `bg primary`, icon `on-primary`, radius `sm` (or full);
  hover `primary-deep`.
- **Decoration:** scatter dots and the two dotted grids use the `--dot-*` tokens.
  Keep them sparse — they read as polish, not noise. `aria-hidden` on all of them.

---

## Quality floor (non-negotiable, already scaffolded in `globals.css`)

Responsive to mobile · visible keyboard focus (`:focus-visible` ring) · reduced
motion respected · semantic landmarks (`header`/`main`/`section`/`footer`) ·
descriptive `alt` on project/photo images · decorative dots `aria-hidden`.

---

## Optional: Arabic / RTL version

If you later ship an Arabic version of the portfolio, only two things change — the
duotone and components are untouched: set `dir="rtl"` on `<html>` and swap
`--font-display`/`--font-body` to `'IBM Plex Sans Arabic'` (or `'Tajawal'`). Default
build stays English/LTR and faithful to the template.
