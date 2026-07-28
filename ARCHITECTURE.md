# KAMIYTECH AI — CODEBASE & SYSTEM ARCHITECTURE
> **MODULAR, CLEAN & INTUITIVE DIRECTORY MAP**

> **DOCUMENT METADATA**
> - **Purpose:** Provide an intuitive map of KamiyTech's modular file organization, component architecture, MCP tool integrations, and design tokens for clean maintenance and developer navigation.
> - **Owner:** CTO & Enterprise Architect
> - **Version:** 1.0.0
> - **Status:** APPROVED / LIVE

---

## 1. Directory Tree & Separation of Concerns

```
kamiytechAI/
├── assets/                           # Brand & Vector Design Assets
│   └── logo/
│       ├── logo.svg                  # Approved Master Vector Logo (P2.3 tokenized)
│       ├── logo-icon.svg             # Centered 'K' Emblem Favicon & App Icon
│       └── brand_logo_showcase.html  # Interactive preview & contrast verification page
│
├── distributable_docs/               # Department-Specific Partner Packages
│   ├── 1_Sales_and_BD/               # Sales playbooks, pitch decks & rate cards
│   ├── 2_Engineering_and_Dev/        # Architecture guidelines & QA SOPs
│   ├── 3_Operations_and_PM/          # Delivery SOPs & onboarding guides
│   ├── 4_UI_UX_Design/               # Brand identity tokens & UI standards
│   ├── 5_Finance_and_Billing/        # Financial planning, GST rules & invoicing
│   ├── 6_Legal_and_Compliance/       # Master legal framework (MSA, SOW, NDA)
│   ├── 7_Customer_Support/           # Support SLA retainers & maintenance SOP
│   └── 8_HR_and_People_Ops/          # People Ops handbook & partner vetting
│
├── knowledge_base/                   # EOS Single Source of Truth (SSOT)
│   ├── COMPANY_PROFILE.md            # Corporate directory & Indore HQ metadata
│   ├── GLOBAL_RULES.md               # Mandatory CLI rules (py mandate) & constants
│   ├── index.md                      # Master Knowledge Base Index (v1.7.0)
│   └── P1.1 ... P4.3                 # 16 Master Strategy & SOP Documents
│
├── public/                           # Web Server Static Assets
│   ├── assets/logo/                  # Vector logo files for Next.js Image components
│   └── icon.svg                      # Site favicon (centered emblem mark)
│
├── src/                              # Next.js 15 Application Source
│   ├── app/                          # App Router & Global Styling
│   │   ├── globals.css               # P2.3 Design System tokens & glassmorphism CSS
│   │   ├── layout.tsx                # Root layout, Google Fonts (Outfit/Inter), Metadata
│   │   └── page.tsx                  # Clean single-page section composition
│   │
│   └── components/                   # Modular & Intuitive React Components
│       ├── Button.tsx                # UI Primitive: Primary & Secondary buttons
│       ├── GlassCard.tsx             # UI Primitive: Glassmorphism container
│       ├── Navbar.tsx                # Layout Shell: Sticky header & navigation
│       ├── HeroSection.tsx           # Section: Hero banner & trust metric counters
│       ├── ServicesShowcase.tsx      # Section: 12 core service capability cards
│       ├── ProjectCostEstimator.tsx  # Section: Real-time P1.2 domestic rate calculator
│       ├── CaseStudiesSection.tsx    # Section: Enterprise case studies & filter tabs
│       ├── WhyChooseUs.tsx           # Section: Core agency differentiators
│       ├── TeamSection.tsx           # Section: Executive team roster (Abhishek, Ankit, Sahil, Vaidehi)
│       ├── TestimonialsSection.tsx   # Section: Verified B2B client reviews
│       ├── FAQSection.tsx            # Section: Client governance FAQ accordion
│       ├── ContactSection.tsx        # Section: Lead capture form & WhatsApp trigger
│       └── Footer.tsx                # Layout Shell: Corporate footer & Indore address
│
├── RULES.md                          # Global system CLI mandates (py execution rule)
├── ARCHITECTURE.md                   # Codebase directory map & navigation guide
├── implementation_plan.md           # 5-Phase SDLC development plan
├── walkthrough.md                   # Delivery walkthrough report
├── package.json                      # Next.js 15 dependencies & scripts
└── tsconfig.json                     # TypeScript strict configuration
```

---

## 2. Integrated MCP Server Directory

In addition to our native tools, the following specialized MCP server is installed:

- **`shadcn-ui-mcp-server`**
  - **Repository:** `https://github.com/Jpisnice/shadcn-ui-mcp-server.git`
  - **Local Location:** `C:\Users\abhis\.gemini\antigravity\mcp\shadcn-ui-mcp-server`
  - **Compiled Entry Point:** `C:\Users\abhis\.gemini\antigravity\mcp\shadcn-ui-mcp-server\build\index.js`
  - **Capabilities:** Provides AI assistants with structured access to shadcn/ui components, source code, metadata, demos, and block templates.

---

## 3. Maintenance & Clean Structure Principles

1. **Separation of Concerns:** Component primitives (`Button`, `GlassCard`) reside separately from page sections (`HeroSection`, `ProjectCostEstimator`).
2. **Single Source of Truth:** All brand colors and surface properties inherit directly from `globals.css` CSS variables (`var(--bg-dark)`, `var(--accent-cyan)`).
3. **No Unused Bloat:** Temporary installation artifacts are cleaned up immediately; only production-ready, type-safe files remain in `src/`.

---
*Maintained by CTO & Enterprise Architect.*
