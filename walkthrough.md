# WALKTHROUGH: KAMIYTECH.COM PRODUCTION WEB APPLICATION

> **SUMMARY:** The official high-converting production web application for `KamiyTech.com` has been designed, architected, and built following our 5-Phase SDLC Protocol. The web app integrates our P2.3 Design System tokens, P2.4 Website Copy, verified vector logo assets (`logo.svg` & `logo-icon.svg`), official executive team roster, and real-time domestic Project Cost Estimator.

---

## 🛠️ Accomplished Phases & Deliverables

### Phase 1: Architecture & Design System Setup
- Initialized Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.
- Configured P2.3 Design System tokens in `src/app/globals.css`:
  - Deep Space Obsidian (`#0B0F17`)
  - Slate Glass Surface (`#161E2E`)
  - Electric Cyan (`#00F0FF`) & Deep Indigo (`#4F46E5`)
- Integrated vector brand assets into `public/assets/logo/logo.svg` and `public/icon.svg`.

---

### Phase 2: Core Components & Layout Shell
- [src/components/Navbar.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/Navbar.tsx): Sticky glass navigation bar with vector brand logo, navigation links (`#services`, `#about`, `#estimator`, `#why-us`, `#contact`), and "Schedule Call" CTA.
- [src/components/Footer.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/Footer.tsx): Corporate footer featuring logo, quick links, registered Indore HQ address (`1/32, behind SICA School Road, Vijay Nagar, Scheme No 54, Indore, MP 452010`), and main business line (`+91 9977858817` Ankit Vaja).
- [src/components/GlassCard.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/GlassCard.tsx): Reusable glassmorphism card primitive.
- [src/components/Button.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/Button.tsx): Electric Cyan & Deep Indigo CTA buttons.

---

### Phase 3: Page Sections & Executive Roster Integration
- [src/components/HeroSection.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/HeroSection.tsx): Hero banner featuring `⚡ NEXT-GEN TECHNOLOGY CONSULTANCY`, H1 headline, subheadline, trust metric counters (<1.5s load speed, 99.9% uptime, 50%+ hours saved via AI, 100% IP ownership).
- [src/components/ServicesShowcase.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/ServicesShowcase.tsx): Interactive grid detailing all 12 services across Web Solutions, Custom Software, AI & Automation, Mobile Apps, Marketing & SEO (Sahil Dhameliya), and Maintenance Retainers.
- [src/components/TeamSection.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/TeamSection.tsx): Executive team spotlight cards:
  - **Abhishek Chedwal** — Founder & CEO / CTO
  - **Ankit Vaja** — Co-Founder & Business Manager (`+91 9977858817`)
  - **Sahil Dhameliya** — Marketing & SEO Lead
  - **Vaidehi Gupta** — Business Executive
- [src/components/WhyChooseUs.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/WhyChooseUs.tsx): Differentiator grid (Enterprise Code Quality, AI-First Automation, Fixed INR Pricing, Partner Scale).

---

### Phase 4: Interactive Project Cost Estimator & Lead Engine
- [src/components/ProjectCostEstimator.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/ProjectCostEstimator.tsx): Dynamic real-time domestic rate card calculator (P1.2 Rate Card) in INR (₹) with separate 18% GST itemization, 40/30/30 or 50/50 milestone billing schedule, and pre-filled WhatsApp link (`+91 9977858817`).
- [src/components/ContactSection.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/components/ContactSection.tsx): Strategy session request form + direct WhatsApp chat trigger (`+91 9977858817`) + Indore HQ address card.

---

### Phase 5: Verification & Quality Assurance
- [src/app/page.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/app/page.tsx): Main landing page composition linking all sections into a seamless user journey.
- [src/app/layout.tsx](file:///c:/Users/abhis/OneDrive/Desktop/kamiytechAI/src/app/layout.tsx): Configured SEO metadata, Google Fonts (`Outfit` & `Inter`), and favicon (`/icon.svg`).
