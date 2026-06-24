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
  { label: "GitHub", href: "https://github.com/ahmedbahamat", icon: "github" },
];

// ----------------------------------------------------------------------------
// Site
// ----------------------------------------------------------------------------

export const site = {
  brand: {
    name: "Ahmed Bahamat",
    domain: "ahmedbahamat.com",
    tagline: "AI Product Manager",
  },

  seo: {
    title: "Ahmed Bahamat | AI Product Manager",
    description:
      "AI Product Manager and digital product builder focused on SaaS, logistics, marketplaces, internal systems, and AI-assisted product delivery.",
    openGraphTitle: "Ahmed Bahamat | AI Product Manager",
    openGraphDescription:
      "Turning business and operational problems into PRDs, workflows, MVPs, and functional staging systems across SaaS, logistics, marketplaces, and AI-enabled workflows.",
  },

  nav: {
    links: [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Product Work", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ] as NavLink[],
    cta: { label: "Download CV", href: "/ahmed-bahamat-cv.pdf" },
  },

  hero: {
    eyebrow: "Welcome",
    title: { lead: "AI ", highlight: "Product", tail: " Manager" } as Heading,
    subtitle: "Digital Product Builder | SaaS | Marketplaces | Internal Systems",
    sub:
      "I turn business and operational problems into clear product requirements, user workflows, MVPs, and functional staging systems. My work combines product discovery, PRD writing, AI-assisted product delivery, technical coordination, and hands-on product building across logistics, marketplaces, SaaS, and internal tools.",
    primaryCta: { label: "View Product Work", href: "#portfolio" },
    secondaryCta: { label: "Download CV", href: "/ahmed-bahamat-cv.pdf" },
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
    { value: "10+", label: "Product initiatives" },
    { value: "MVPs", label: "Functional MVPs & staging systems" },
    { value: "5", label: "Domains: SaaS, logistics, marketplaces, EdTech, AI workflows" },
  ] as Stat[],

  skills: {
    eyebrow: "My Skills",
    title: { lead: "How I Work as an ", highlight: "AI Product Manager" } as Heading,
    lead:
      "I combine product thinking with hands-on product building. I can frame the problem, write requirements, design workflows, coordinate technical decisions, build or guide MVPs, and prepare products for testing and launch.",
    cta: { label: "View Product Work", href: "#portfolio" },
    cards: [
      {
        icon: "loop",
        title: "Product Discovery",
        body: "I clarify the user, business problem, workflow, constraints, and success criteria before building.",
      },
      {
        icon: "ship",
        title: "Product Delivery",
        body: "I translate ideas into PRDs, user journeys, roles, permissions, MVP scope, and staged releases.",
      },
      {
        icon: "design",
        title: "AI-Assisted Building",
        body: "I use AI tools to speed up prototyping, documentation, debugging, and product exploration while keeping product decisions grounded in real business needs.",
      },
      {
        icon: "code",
        title: "Technical Collaboration",
        body: "I can discuss APIs, databases, authentication, access control, staging environments, and product trade-offs with developers and vendors.",
      },
    ] as Skill[],
  },

  portfolio: {
    eyebrow: "Portfolio",
    title: { lead: "Selected ", highlight: "Product Work" } as Heading,
    featured: [
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
      {
        title: "AI Request Quality Reviewer Agent",
        blurb:
          "AI product concept for reviewing enterprise requests before approval, detecting missing fields, data conflicts, attachment gaps, and workflow concerns without approving, rejecting, or bypassing permissions.",
        decision: "Use AI as a quality layer while keeping approval decisions inside the existing workflow and RBAC rules.",
        status: "Implementation-ready MVP scope.",
        tags: ["AI Product", "Agentic Workflow", "RAG Concepts", "Human-in-the-Loop", "Guardrails", "RBAC", "Multi-Tenant Awareness"],
      },
    ] as Project[],
    more: [
      { title: "AI telesales assistant", blurb: "Real-time call scripting and CRM workflow concept.", href: "https://telesales.ahmedbahamat.com" },
      { title: "Clubs Platform", blurb: "Kids'-club SaaS with parent progress tracking.", href: "https://kids.ahmedbahamat.com" },
      { title: "Marj3", blurb: "Spaced-repetition learning product for multi-disciplinary professionals.", href: "https://marj3.ahmedbahamat.com" },
      { title: "Alsawi", blurb: "Trainer-student course platform; beta context documented." },
      { title: "Earab", blurb: "Leveled Arabic-grammar learning product.", href: "https://earab.net" },
      { title: "Tarsya landing page", blurb: "Marketing site for tender automation positioning.", href: "https://tarsya.net" },
    ] as Project[],
    showMoreLabel: "Show More",
    showLessLabel: "Show Less",
  },

  // No real quotes yet - section is built but commented out of page.tsx.
  // Do not ship fabricated testimonials. Fill when real ones exist.
  testimonials: {
    eyebrow: "Reviews",
    items: [] as Testimonial[],
  },

  contact: {
    eyebrow: "Contact",
    title: { lead: "Let's Discuss Product Roles or ", highlight: "Collaboration" } as Heading,
    lead:
      "I am open to AI Product Manager and Product Manager roles in Riyadh, especially where product discovery, digital product building, SaaS, marketplaces, logistics, internal systems, or AI-enabled workflows are important.",
    actions: [
      { label: "Download CV", href: "/ahmed-bahamat-cv.pdf", kind: "cv" },
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
      { name: "opportunityType", label: "Context / Opportunity Type", type: "text", placeholder: "Role, collaboration, product idea, or project context" },
      { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell me about the role or collaboration", full: true },
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
