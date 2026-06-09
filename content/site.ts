/* ============================================================================
   Ahmed Bahamat — Portfolio content & data (single source of all copy)
   ----------------------------------------------------------------------------
   Every string the site renders lives here. Edit copy in ONE place; components
   never hardcode text. Mirrors the section spec in CLAUDE.md 1:1.
   ============================================================================ */

export interface NavLink {
  label: string;
  href: string;
}

export type SocialIcon = "linkedin" | "twitter" | "github";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

/** Heading split so the component wraps only `highlight` in text-primary
 *  (no dangerouslySetInnerHTML). */
export interface Heading {
  lead: string;
  highlight: string;
  tail?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export type SkillIcon = "loop" | "design" | "code" | "ship";

export interface Skill {
  icon: SkillIcon;
  title: string;
  body: string;
}

export interface Project {
  title: string;
  blurb: string;
  decision?: string;
  status?: string;
  image?: string;
  href?: string;
}

export type ContactKind = "phone" | "email" | "location";

export interface ContactInfoItem {
  kind: ContactKind;
  label: string;
  value: string;
  href?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
  full?: boolean; // span the full width of the form grid
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  rating: number;
}

// ----------------------------------------------------------------------------
// Shared
// ----------------------------------------------------------------------------

// NOTE: placeholders — confirm Ahmed's real profile URLs before launch.
const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-bahamat", icon: "linkedin" },
  { label: "X", href: "https://x.com/ahmedbahamat", icon: "twitter" },
  { label: "GitHub", href: "https://github.com/ahmedbahamat", icon: "github" },
];

// ----------------------------------------------------------------------------
// Site
// ----------------------------------------------------------------------------

export const site = {
  brand: {
    name: "Ahmed Bahamat",
    domain: "ahmedbahamat.com",
    tagline: "Technical Product Manager & AI-native Builder",
  },

  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Portfolio", href: "#portfolio" },
    ] as NavLink[],
    cta: { label: "Download CV", href: "/ahmed-bahamat-cv.pdf" },
  },

  hero: {
    eyebrow: "Welcome",
    title: { lead: "I design, ", highlight: "build & ship", tail: " products." } as Heading,
    sub: "I'm Ahmed, a technical product manager and AI-native builder. I take an idea to a working prototype in 1–7 days — designing the interface, building with Claude Code, and validating with real users.",
    primaryCta: { label: "Contact Me", href: "#contact" },
    secondaryCta: { label: "View Portfolio", href: "#portfolio" },
    photo: {
      src: "/images/ahmed-bahamat.png",
      alt: "Ahmed Salem Bahamat",
      width: 720,
      height: 836,
    },
    followLabel: "Follow me on:",
  },

  socials,

  stats: [
    { value: "10", label: "Products built end-to-end" },
    { value: "1–7 days", label: "Idea → working prototype" },
    { value: "5", label: "Domains: AI agents, SaaS, ERP, marketplace, EdTech" },
  ] as Stat[],

  skills: {
    eyebrow: "My Skills",
    title: { lead: "Why Hire Me For Your ", highlight: "Next Project", tail: "?" } as Heading,
    lead: "I own the full product loop — frame the problem, design, build, and test — solo and fast.",
    cta: { label: "Hire Me", href: "#contact" },
    cards: [
      {
        icon: "loop",
        title: "Own the full loop",
        body: "Frame, design the interface, build, and test with users.",
      },
      {
        icon: "design",
        title: "Design with AI tools",
        body: "On-brand UI from prompts: Figma, Claude Design, Google Stitch.",
      },
      {
        icon: "code",
        title: "Build with Claude Code",
        body: "Describe the outcome, review, steer — a dev teammate, not hand-offs.",
      },
      {
        icon: "ship",
        title: "Ship in days",
        body: "Go deep on a narrow problem, ship a testable prototype, then learn from real users.",
      },
    ] as Skill[],
  },

  portfolio: {
    eyebrow: "Portfolio",
    title: { lead: "My Creative Works ", highlight: "Latest Projects" } as Heading,
    featured: [
      {
        title: "Logistic System",
        blurb:
          "Operations ERP for food-delivery companies; order intake and task routing across every department.",
        decision: "Modeled the real hand-offs between teams, not a generic admin panel.",
        status: "Built in 1 week, in staging → limited pilot.",
      },
      {
        title: "Fragra-World",
        blurb:
          "Two-sided marketplace for pre-owned niche fragrances, with auctions for rare pieces.",
        decision: "A small passionate community over a broad market.",
        status: "Built in 4 days; launched, preparing go-to-market.",
      },
      {
        title: "Tarsya AI",
        blurb:
          "AI agent that turns company inputs into submission-ready technical & financial proposals for Saudi government tenders (Etimad).",
        decision: "A narrow niche — Saudi + government + Arabic.",
        status: "v1 in 1 day; rebuilding for production.",
      },
    ] as Project[],
    more: [
      { title: "AI telesales assistant", blurb: "Real-time call scripting + CRM." },
      { title: "Rasad Time", blurb: "Remote attendance, no geo/IP/face-scan." },
      { title: "Clubs Platform", blurb: "Kids'-club SaaS with parent progress tracking." },
      { title: "Marj3", blurb: "Spaced repetition for multi-disciplinary pros." },
      { title: "Alsawi", blurb: "Trainer–student courses, beta live." },
      { title: "Earab", blurb: "Leveled Arabic-grammar learning." },
      { title: "Tarsya landing page", blurb: "Marketing site for Tarsya AI." },
    ] as Project[],
    showMoreLabel: "Show More",
    showLessLabel: "Show Less",
  },

  // No real quotes yet — section is built but commented out of page.tsx.
  // Do not ship fabricated testimonials (CLAUDE.md). Fill when real ones exist.
  testimonials: {
    eyebrow: "Reviews",
    items: [] as Testimonial[],
  },

  contact: {
    eyebrow: "Contact",
    title: { lead: "Let's Discuss Your ", highlight: "Project" } as Heading,
    info: [
      { kind: "phone", label: "Call", value: "+966 53 504 4384", href: "tel:+966535044384" },
      { kind: "email", label: "Email", value: "ahmadsa06@gmail.com", href: "mailto:ahmadsa06@gmail.com" },
      { kind: "location", label: "Location", value: "Riyadh, Saudi Arabia" },
    ] as ContactInfoItem[],
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your full name" },
      { name: "email", label: "Your email", type: "email", required: true, placeholder: "you@example.com" },
      { name: "phone", label: "Phone number", type: "tel", placeholder: "+966 5x xxx xxxx" },
      { name: "budget", label: "Budget", type: "text", placeholder: "Estimated budget" },
      { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell me about your project", full: true },
    ] as FormField[],
    submitLabel: "Submit Message",
    // Formspree: create a free form at https://formspree.io, copy the endpoint
    // ID, and paste it below. Until a real ID is set the form gracefully falls
    // back to a mailto: link. (Web3Forms is an equivalent drop-in.)
    formspreeEndpoint: "https://formspree.io/f/REPLACE_WITH_YOUR_ID",
  },

  footer: {
    copyright: "© 2026 Ahmed Bahamat. All rights reserved.",
    builtBy: "Built end-to-end by Ahmed Bahamat",
    socials,
  },
} as const;
