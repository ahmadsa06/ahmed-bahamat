/* ============================================================================
   Ahmed Bahamat - Portfolio content & data (single source of all copy)
   ----------------------------------------------------------------------------
   Every string the site renders lives here. Edit copy in ONE place; components
   never hardcode text. Mirrors the section spec in AGENTS.md 1:1.
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
  tags?: readonly string[];
  image?: string;
  href?: string;
  /** Button text for `href`. Defaults to "Visit site" when omitted. */
  linkLabel?: string;
}

/** A titled, subtitled group of project cards rendered as one portfolio block. */
export interface ProjectGroup {
  title: Heading;
  subtitle: string;
  items: readonly Project[];
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

export interface ContactAction {
  label: string;
  href: string;
  kind: "cv" | "linkedin" | "email";
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

const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-bahamat", icon: "linkedin" },
  { label: "X", href: "https://x.com/ahmedbahamat", icon: "twitter" },
  { label: "GitHub", href: "https://github.com/ahmadsa06", icon: "github" },
];

// ----------------------------------------------------------------------------
// Site
// ----------------------------------------------------------------------------

export const site = {
  brand: {
    name: "Ahmed Bahamat",
    domain: "ahmedbahamat.com",
    tagline: "AI & Business Systems Specialist",
  },

  seo: {
    title: "Ahmed Bahamat | AI & Business Systems Specialist",
    description:
      "Ahmed Bahamat analyzes business operations, designs ERP workflows, and builds AI-assisted automations that turn operational problems into working systems.",
    openGraphTitle: "Ahmed Bahamat | AI & Business Systems Specialist",
    openGraphDescription:
      "AI & business systems specialist: requirements analysis, ERP operations, and AI-assisted automation across logistics, EdTech, sales operations, and internal systems.",
  },

  nav: {
    links: [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Work", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ] as NavLink[],
    cta: { label: "Get in touch", href: "#contact" },
  },

  hero: {
    eyebrow: "Welcome",
    title: { lead: "AI & ", highlight: "Business Systems", tail: " Specialist" } as Heading,
    subtitle: "ERP Systems | Process Automation | Applied AI",
    sub:
      "I analyze how a business actually runs, design the systems and workflows behind it, and build automations inside ERP platforms, using AI to move faster while keeping a human review step where accuracy matters. My background in product management and seven years in sales shape how I turn requirements into systems people actually use.",
    primaryCta: { label: "View My Work", href: "#portfolio" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    photo: {
      src: "/images/ahmed-bahamat.png",
      alt: "Portrait of Ahmed Salem Bahamat",
      width: 720,
      height: 836,
    },
    followLabel: "Follow me on:",
  },

  socials,

  stats: [
    { value: "10+", label: "Systems & products built" },
    { value: "30→2 min", label: "Daily reporting task automated (Etad Hub)" },
    { value: "5", label: "Domains: ERP, logistics, sales ops, EdTech, AI workflows" },
  ] as Stat[],

  skills: {
    eyebrow: "My Skills",
    title: { lead: "How I ", highlight: "Work" } as Heading,
    lead:
      "I take a process from idea to a running system: analyze the requirement, design the workflow and screens, build it on staging, test it as an end user, and support the team that uses it every day.",
    cta: { label: "View My Work", href: "#portfolio" },
    cards: [
      {
        icon: "loop",
        title: "Requirements & Analysis",
        body: "I break an idea into clear scope, workflows, diagrams, and initial screens that a team can approve and build.",
      },
      {
        icon: "ship",
        title: "ERP & Operations",
        body: "I run day-to-day ERP operations: users, roles and permissions, data quality, and first-line support for operational issues.",
      },
      {
        icon: "design",
        title: "Applied AI",
        body: "I build LLM workflows with structured outputs and human review, and use AI tools daily to analyze, document, and build faster.",
      },
      {
        icon: "code",
        title: "Process Automation",
        body: "I automate repetitive operational work such as reporting, collections, and commissions, validated on staging before release.",
      },
    ] as Skill[],
  },

  portfolio: {
    eyebrow: "Portfolio",
    // Two grouped blocks, same card component for both. Order here = render order.
    products: {
      title: { lead: "Products & ", highlight: "Platforms" } as Heading,
      subtitle: "Full products and websites, built end to end.",
      items: [
        {
          title: "Etad Hub",
          blurb:
            "A live logistics operations platform that provides practical tools for delivery companies. It transforms operational Excel files into structured reports, courier performance cards, restaurant evaluations, and violation notifications ready for delivery.",
          decision:
            "Process sensitive operational files locally inside the browser and use a local desktop agent for WhatsApp delivery, reducing exposure of payroll, ID, banking, and courier data.",
          status: "Live product with three working logistics tools.",
          tags: [
            "Logistics",
            "Operations Automation",
            "Excel Processing",
            "Data Privacy",
            "Local Processing",
            "Reporting",
            "WhatsApp Integration",
          ],
          href: "https://etadhub.com/",
        },
        {
          title: "Earab",
          blurb:
            "A mobile-first Arabic grammar learning platform with a progressive curriculum, varied exercises, instant feedback, full-sentence parsing, and gamified learning mechanics.",
          decision:
            "Teach grammar through progressive practice and complete sentence analysis instead of relying only on isolated questions or memorized rules. The product includes partial scoring, clear error explanations, and content review controls.",
          status: "Live product with a guest lesson available without registration.",
          tags: [
            "EdTech",
            "Arabic Learning",
            "Gamification",
            "Mobile-First",
            "PWA",
            "Content Management",
            "Product Delivery",
          ],
          href: "https://www.earab.net/",
        },
        {
          title: "Logistics Operations System",
          blurb:
            "Internal operations system for logistics companies, covering requests, roles, permissions, task assignment, HR, finance, fleet, operations, and a courier portal.",
          decision: "Model real cross-department workflows instead of building a generic admin panel.",
          status: "Functional staging system - pilot not launched.",
          tags: ["SaaS", "Logistics", "Internal Tools", "Laravel", "PostgreSQL", "Role-Based Access", "Workflow Automation"],
          href: "https://logistic.ahmedbahamat.com",
        },
        {
          title: "Fragrance Marketplace",
          blurb:
            "Multi-vendor marketplace for new and pre-owned fragrances, including auctions, seller workflows, product listing, payment, shipping, and buyer protection concepts.",
          decision: "Simplify seller listing through a one-page product flow connected to a fragrance library.",
          status: "Functional pre-launch product - catalog completion pending.",
          tags: ["Marketplace", "E-commerce", "Auctions", "Seller Workflows", "Payments", "Shipping"],
          href: "https://fragraworld.com",
        },
        { title: "AI telesales assistant", blurb: "Real-time call scripting and CRM workflow concept.", href: "https://telesales.ahmedbahamat.com" },
        { title: "Clubs Platform", blurb: "Kids'-club SaaS with parent progress tracking.", href: "https://kids.ahmedbahamat.com" },
        { title: "Marj3", blurb: "Spaced-repetition learning product for multi-disciplinary professionals.", href: "https://marj3.ahmedbahamat.com" },
        { title: "Alsawi", blurb: "Trainer-student course platform; beta context documented.", href: "https://academy.ahmedbahamat.com/" },
        { title: "Tarsya landing page", blurb: "Marketing site for tender automation positioning.", href: "https://tarsya.net" },
      ],
    } as ProjectGroup,
    tools: {
      title: { lead: "Tools & ", highlight: "Automation" } as Heading,
      subtitle: "Utilities I built to solve real operational problems.",
      items: [
        {
          title: "Discover",
          blurb:
            "A B2B prospecting tool that identifies businesses by activity and geographic area, organizes available company and contact information, and supports outreach through WhatsApp and email.",
          decision:
            "Combine business discovery, contact organization, and outreach preparation in one workflow instead of moving manually between maps, spreadsheets, WhatsApp, and email.",
          status: "Working access-controlled product.",
          tags: [
            "B2B",
            "Sales Operations",
            "Lead Discovery",
            "Geographic Search",
            "Data Processing",
            "WhatsApp",
            "Email Automation",
          ],
          href: "https://discover.ahmedbahamat.com/",
        },
      ],
    } as ProjectGroup,
  },

  // No real quotes yet - section is built but commented out of page.tsx.
  // Do not ship fabricated testimonials. Fill when real ones exist.
  testimonials: {
    eyebrow: "Reviews",
    items: [] as Testimonial[],
  },

  contact: {
    eyebrow: "Contact",
    title: { lead: "Let's ", highlight: "Connect" } as Heading,
    lead:
      "Happy to talk about business systems, ERP workflows, process automation, and practical uses of AI in operations.",
    actions: [
      { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/ahmed-bahamat", kind: "linkedin" },
      { label: "Contact Me", href: "mailto:ahmadsa06@gmail.com", kind: "email" },
    ] as ContactAction[],
    info: [
      { kind: "phone", label: "Call", value: "+966 53 504 4384", href: "tel:+966535044384" },
      { kind: "email", label: "Email", value: "ahmadsa06@gmail.com", href: "mailto:ahmadsa06@gmail.com" },
      { kind: "location", label: "Location", value: "Riyadh, Saudi Arabia" },
    ] as ContactInfoItem[],
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your full name" },
      { name: "email", label: "Your email", type: "email", required: true, placeholder: "you@example.com" },
      { name: "phone", label: "Phone number", type: "tel", placeholder: "+966 5x xxx xxxx" },
      { name: "opportunityType", label: "Topic", type: "text", placeholder: "What would you like to discuss?" },
      { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Your message", full: true },
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
