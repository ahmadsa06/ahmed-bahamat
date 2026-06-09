import type { Config } from "tailwindcss";

/**
 * Ahmed Bahamat — Portfolio Tailwind config
 * ------------------------------------------------------------------
 * Colors/spacing/etc. are wired to the CSS variables in globals.css,
 * so globals.css stays the single source of truth. Change a value
 * there once and every Tailwind utility + raw var() updates together.
 *
 * Tailwind v3. If you're on Tailwind v4, delete this file and use the
 * @theme block in globals.css instead (see comment at the bottom of it).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "var(--gutter)",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: {
          DEFAULT: "var(--color-surface)",
          2: "var(--color-surface-2)",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          soft: "var(--color-ink-soft)",
        },
        body: "var(--color-body)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        primary: {
          DEFAULT: "var(--color-primary)",       // dark blue — the brand accent
          deep: "var(--color-primary-deep)",
          lift: "var(--color-primary-lift)",
          50: "var(--color-primary-050)",
          fg: "var(--color-on-primary)",
        },
        rating: "var(--color-rating)",
        // decorative scatter
        dot: {
          navy: "var(--dot-navy)",
          blue: "var(--dot-blue)",
          black: "var(--dot-black)",
          soft: "var(--dot-soft)",
        },
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-body)",
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "var(--leading-tight)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--leading-snug)" }],
        h3: ["var(--text-h3)", { lineHeight: "var(--leading-snug)" }],
        stat: ["var(--text-stat)", { lineHeight: "1" }],
        lead: ["var(--text-lg)", { lineHeight: "var(--leading-body)" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        soft: "var(--shadow-soft)",
        focus: "var(--shadow-focus)",
      },
      dropShadow: {
        photo: "var(--shadow-photo)",
      },
      maxWidth: {
        container: "var(--container)",
      },
      spacing: {
        section: "var(--section-y)",
        "section-sm": "var(--section-y-sm)",
      },
    },
  },
  plugins: [],
};

export default config;
