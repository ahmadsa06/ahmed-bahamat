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
  { label: "GitHub", href: "https://github.com/ahmedbahamat", icon: "github" },
];

// ----------------------------------------------------------------------------
// Site
// ----------------------------------------------------------------------------

export const site = {
  brand: {
    name: "Ahmed Bahamat",
    domain: "ahmedbahamat.com",
    tagline: "Product Manager & Technical Product Owner",
  },

  seo: {
    title: "Ahmed Bahamat | Product Manager & Technical Product Owner",
    description:
      "Product manager and technical product owner who builds digital products end to end across SaaS, marketplaces, logistics, and AI-assisted products.",
    openGraphTitle: "Ahmed Bahamat | Product Manager & Technical Product Owner",
    openGraphDescription:
      "Product manager and technical product owner who builds digital products end to end across SaaS, marketplaces, logistics, and AI-assisted products.",
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
    title: { lead: "Product Manager & ", highlight: "Technical Product Owner" } as Heading,
    subtitle: "AI-native builder | SaaS | Marketplaces | Internal Systems",
    sub:
      "I'm a product manager and technical product owner who builds digital products end to end. I take products from the problem to a working MVP, get hands-on with the technical side (Laravel, PostgreSQL, REST APIs), and build AI-assisted products (LLM workflows, RAG, human-in-the-loop). My work spans logistics, marketplaces, SaaS, and internal tools.",
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
    title: { lead: "How I ", highlight: "Work" } as Heading,
    lead:
      "I combine product thinking with hands-on building. I frame the problem, write requirements, design workflows, make technical decisions with engineers, build or guide MVPs, and get products ready for testing and launch.",
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
        title: "AI-Native Building",
        body: "I build products that use AI (LLM workflows, RAG, human-in-the-loop), and I use AI tools daily to prototype, document, and ship faster.",
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
    // Two grouped blocks, same card component for both. Order here = render order.
    products: {
      title: { lead: "Products & ", highlight: "Platforms" } as Heading,
      subtitle: "Full products and websites, built end to end.",
      items: [
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
        { title: "Earab", blurb: "Leveled Arabic-grammar learning product.", href: "https://earab.net" },
        { title: "Tarsya landing page", blurb: "Marketing site for tender automation positioning.", href: "https://tarsya.net" },
      ],
    } as ProjectGroup,
    tools: {
      title: { lead: "Tools & ", highlight: "Automation" } as Heading,
      subtitle: "Utilities I built to solve real operational problems.",
      items: [
        {
          title: "AI Request Quality Reviewer Agent",
          blurb:
            "AI product concept for reviewing enterprise requests before approval, detecting missing fields, data conflicts, attachment gaps, and workflow concerns without approving, rejecting, or bypassing permissions.",
          decision: "Use AI as a quality layer while keeping approval decisions inside the existing workflow and RBAC rules.",
          status: "Implementation-ready MVP scope.",
          tags: ["AI Product", "Agentic Workflow", "RAG Concepts", "Human-in-the-Loop", "Guardrails", "RBAC", "Multi-Tenant Awareness"],
        },
        {
          title: "KPI Reporting Tool",
          blurb:
            "Desktop app that parses six Keeta platform files, builds a performance report for each courier, and automatically sends every courier their own report over WhatsApp.",
          decision: "Automate the whole build-and-send pipeline so supervisors stop rebuilding the same report by hand every day.",
          status: "Working desktop app (Electron). Cut a daily supervisor task from about 30 minutes to under 2 minutes.",
          tags: ["Automation", "Electron", "Chromium", "WhatsApp Integration", "Reporting"],
          // No live site (desktop app). Add a demo link when ready:
          // href: "VIDEO_URL", linkLabel: "Watch demo",
        },
        {
          title: "WhatsApp Bulk Messaging Tool",
          blurb:
            "Desktop app for sending personalized bulk WhatsApp messages, with randomized delays to reduce the risk of blocking, per-recipient attachments (PDF or image) and variable text, in-app number entry or Excel import, and delivery-status tracking.",
          decision: "Make bulk outreach both safe and personalized instead of risky, identical mass blasts.",
          status: "Working desktop app (Electron).",
          tags: ["Automation", "Electron", "Chromium", "WhatsApp Integration", "Excel Import"],
          // No live site (desktop app). Add a demo link when ready:
          // href: "VIDEO_URL", linkLabel: "Watch demo",
        },
        {
          title: "Restaurant Rating Tool",
          blurb:
            "Web tool that turns an uploaded Keeta restaurants file into an instant, well-designed report and sends it to couriers directly over WhatsApp.",
          decision: "Turn a raw data export into a clean, ready-to-share report in a single step.",
          status: "Working web tool (live link pending deployment).",
          tags: ["Web Tool", "Automation", "WhatsApp Integration", "Reporting", "Data Processing"],
          // Live link pending — add the deployed URL (renders a "Visit site" button):
          // href: "RESTAURANT_TOOL_URL",
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
    title: { lead: "Let's Discuss Product Roles or ", highlight: "Collaboration" } as Heading,
    lead:
      "I'm open to Product Manager and Technical Product Owner roles in Riyadh, especially where product discovery, hands-on product building, SaaS, marketplaces, logistics, internal systems, or AI-enabled products matter.",
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
