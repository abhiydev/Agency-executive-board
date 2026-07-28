export interface ServiceItem {
  id: string;
  category: "web" | "saas" | "ai" | "mobile" | "growth" | "cloud";
  categoryLabel: string;
  title: string;
  shortTech: string;
  description: string;
  features: string[];
  pricing: {
    minINR: number;
    maxINR: number;
    minUSD: number;
    maxUSD: number;
    label: string;
    timeline: string;
  };
  architecture: {
    flow: string[];
    techBadges: string[];
    metrics: { label: string; value: string; detail: string }[];
    security: string[];
    codeSnippet: string;
    deliverables: string[];
  };
}

export interface ScopeOption {
  id: string;
  name: string;
  multiplier: number;
  timelineAdderDays: number;
  description: string;
}

export const CATEGORY_TABS = [
  { id: "all", label: "All Capabilities" },
  { id: "web", label: "Web Applications" },
  { id: "saas", label: "Custom SaaS & Software" },
  { id: "ai", label: "Enterprise AI & RAG" },
  { id: "mobile", label: "Mobile Apps (iOS/Android)" },
  { id: "growth", label: "SEO & Growth Engine" },
  { id: "cloud", label: "Cloud & SLA Retainers" },
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "web-nextjs",
    category: "web",
    categoryLabel: "Web Applications",
    title: "High-Performance Web Platforms & Next.js 15",
    shortTech: "Next.js 15, React 19, TypeScript, Tailwind CSS v4",
    description:
      "Enterprise web platforms engineered for sub-second global load speeds, SSR/RSC efficiency, SEO dominance, and high lead conversion. Zero sluggish templates.",
    features: [
      "React 19 Server Components (RSC)",
      "Edge-Cached SEO Pre-rendering (<1.2s TTFB)",
      "Headless CMS & Dynamic Asset Pipeline",
      "Core Web Vitals Performance 98+ Guaranteed",
    ],
    pricing: {
      minINR: 35000,
      maxINR: 180000,
      minUSD: 450,
      maxUSD: 2200,
      label: "₹35,000 – ₹1,80,000",
      timeline: "2 – 4 Weeks",
    },
    architecture: {
      flow: [
        "Vercel Edge Network / CDN Ingestion",
        "Next.js 15 App Router & React Server Components",
        "Tailwind CSS v4 & Glassmorphism Design Tokens",
        "Headless CMS Data Fetching via GraphQL",
        "Edge Cache Invalidation & Analytics Tracking",
      ],
      techBadges: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel Edge", "GraphQL"],
      metrics: [
        { label: "Global Load Speed", value: "<1.2s", detail: "Lighthouse 98+ score" },
        { label: "TTFB Latency", value: "<45ms", detail: "Edge CDN distribution" },
        { label: "Core Web Vitals", value: "100%", detail: "All green benchmarks" },
      ],
      security: [
        "Content Security Policy (CSP) Tier 1",
        "DDoS Mitigation via Vercel Enterprise Edge",
        "100% IP Source Code Ownership Handover",
      ],
      codeSnippet: `// Next.js 15 Server Component Architecture
export async function HeaderSection() {
  const data = await getEdgeData({ revalidate: 3600 });
  return (
    <header className="kamiy-glass-card p-6 border-[#00F0FF]/20">
      <h1 className="kamiy-text-gradient text-4xl font-extrabold">{data.title}</h1>
    </header>
  );
}`,
      deliverables: [
        "Production Next.js 15 Codebase (GitHub Repo)",
        "Configured Vercel/Cloudflare Deployment Pipeline",
        "Figma Master Design System & Assets",
        "100% IP Ownership & 30-Day Post-Launch SLA Warranty",
      ],
    },
  },
  {
    id: "custom-saas",
    category: "saas",
    categoryLabel: "Custom SaaS & Backends",
    title: "Bespoke SaaS Platforms & Microservice Architecture",
    shortTech: "Node.js, Python FastAPI, PostgreSQL, Supabase RLS",
    description:
      "Scalable multi-tenant SaaS platforms, REST/GraphQL microservices, and custom backends engineered for complex business logic, billing, and audit security.",
    features: [
      "Multi-Tenant PostgreSQL Architecture with RLS",
      "Role-Based Access Control (RBAC) & OAuth2",
      "Automated Stripe & Razorpay Subscription Billing",
      "REST & GraphQL Microservices Architecture",
    ],
    pricing: {
      minINR: 150000,
      maxINR: 650000,
      minUSD: 1800,
      maxUSD: 7800,
      label: "₹1,50,000 – ₹6,50,000",
      timeline: "5 – 8 Weeks",
    },
    architecture: {
      flow: [
        "API Gateway & JWT/OAuth Authorization",
        "Node.js / Python FastAPI Microservices",
        "PostgreSQL Relational DB with Row-Level Security",
        "Redis Memory Cache & Queue Managers",
        "Automated Stripe/Razorpay Payment Webhooks",
      ],
      techBadges: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "Redis", "Docker", "Stripe API"],
      metrics: [
        { label: "API Response Time", value: "<35ms", detail: "Optimized DB connection pool" },
        { label: "Database Isolation", value: "Multi-tenant", detail: "Strict RLS tenant boundaries" },
        { label: "Availability SLA", value: "99.95%", detail: "Automated failover clusters" },
      ],
      security: [
        "SOC2-Compliant Data Encryption (AES-256 at Rest)",
        "Row-Level Security (RLS) Tenant Isolation",
        "Comprehensive Audit Log Tracking",
      ],
      codeSnippet: `// FastAPI + Supabase Row Level Security Architecture
@app.get("/api/v1/tenant/analytics")
async def get_tenant_metrics(current_user: User = Depends(get_current_tenant)):
    async with db.pool.acquire() as conn:
        results = await conn.fetch("SELECT * FROM metrics WHERE tenant_id = $1", current_user.tenant_id)
        return {"data": results, "status": "secure"}`,
      deliverables: [
        "Full Stack SaaS Repository with CI/CD Scripts",
        "Entity Relationship (ER) & API Documentation",
        "Stripe / Razorpay Payment Webhooks Integration",
        "Role-Based Admin Console & Audit Log Dashboard",
      ],
    },
  },
  {
    id: "ai-automation",
    category: "ai",
    categoryLabel: "Enterprise AI & RAG",
    title: "Enterprise AI & RAG Automation Workflows",
    shortTech: "OpenAI GPT-4o, Gemini 1.5 Pro, LangChain, Vector DB",
    description:
      "Embed autonomous LLM agents and Retrieval-Augmented Generation (RAG) knowledge systems into your operations to eliminate manual workflows and synthesize data.",
    features: [
      "Custom RAG Knowledge Bases (PDF, SQL, Docs)",
      "Autonomous WhatsApp & Web AI Lead Bots",
      "Document Intelligence & Data Extraction",
      "LangChain / LlamaIndex Agentic Pipelines",
    ],
    pricing: {
      minINR: 85000,
      maxINR: 450000,
      minUSD: 1000,
      maxUSD: 5400,
      label: "₹85,000 – ₹4,50,000",
      timeline: "3 – 6 Weeks",
    },
    architecture: {
      flow: [
        "Unstructured Document Ingestion (PDFs/APIs)",
        "Chunking & Vector Embedding via OpenAI/Gemini",
        "Pinecone / Supabase Vector Store Indexing",
        "Similarity Search & Context Retrieval Engine",
        "LLM Synthesis with Guardrails & Human Fallback",
      ],
      techBadges: ["OpenAI GPT-4o", "Gemini 1.5 Pro", "LangChain", "Pinecone", "Supabase Vector", "Python"],
      metrics: [
        { label: "Query Accuracy", value: "99.2%", detail: "Validated RAG context grounding" },
        { label: "Workflow Hours Saved", value: "60%+", detail: "Automated document parsing" },
        { label: "Inference Latency", value: "<1.4s", detail: "Streamed token response" },
      ],
      security: [
        "Private Zero-Data-Retention LLM Credentials",
        "PII Anonymization Filter Engine",
        "Enterprise Role-Based Knowledge Access",
      ],
      codeSnippet: `// LangChain RAG Query Processing Pipeline
const vectorStore = await SupabaseVectorStore.fromExistingIndex(embeddings, { client });
const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever(5));
const response = await chain.call({ query: "Extract Q3 SLA targets from contract PDF" });`,
      deliverables: [
        "Custom Vector DB Engine & Pipeline Deployment",
        "Admin Portal for Document Ingestion & Re-indexing",
        "WhatsApp & Web Chat Widget Embed Scripts",
        "Data Privacy & Zero-Retention Compliance Docs",
      ],
    },
  },
  {
    id: "mobile-apps",
    category: "mobile",
    categoryLabel: "Mobile Applications",
    title: "Cross-Platform Mobile Apps (iOS & Android)",
    shortTech: "React Native, Expo, iOS Swift, Android Kotlin",
    description:
      "Deliver high-performance native iOS and Android apps using React Native & Expo. Fluid 60fps UI, offline database sync, and native device feature integration.",
    features: [
      "Single-Codebase iOS & Android Efficiency",
      "Native Push Notifications & OTP Verification",
      "Offline Data Sync & WatermelonDB / SQLite",
      "App Store & Google Play Publishing Included",
    ],
    pricing: {
      minINR: 120000,
      maxINR: 550000,
      minUSD: 1400,
      maxUSD: 6600,
      label: "₹1,20,000 – ₹5,50,000",
      timeline: "4 – 8 Weeks",
    },
    architecture: {
      flow: [
        "React Native & Expo Architecture",
        "Native Bridge Modules (Camera/Biometrics/Push)",
        "Secure Storage & Offline SQLite Encryption",
        "REST/WebSocket Real-time Synchronization",
        "Automated TestFlight & Google Play Console Pipeline",
      ],
      techBadges: ["React Native", "Expo", "TypeScript", "iOS", "Android", "Firebase Push", "SQLite"],
      metrics: [
        { label: "Frame Rate", value: "60 FPS", detail: "Smooth native UI transitions" },
        { label: "Code Reusability", value: "95%", detail: "Shared iOS/Android codebase" },
        { label: "App Bundle Size", value: "<18MB", detail: "Optimized binary compilation" },
      ],
      security: [
        "Biometric Authentication (FaceID / TouchID)",
        "Encrypted Local SQLite Database",
        "SSL Pinning & App Shielding",
      ],
      codeSnippet: `// React Native Native Feature Integration
import * as Notifications from 'expo-notifications';
import { SecureStore } from 'expo-secure-store';

export async function initMobileSession() {
  const token = await SecureStore.getItemAsync('user_session_token');
  await Notifications.requestPermissionsAsync();
  return token;
}`,
      deliverables: [
        "Compiled iOS (.ipa) & Android (.aab) Release Binaries",
        "Complete React Native Source Code & Expo Config",
        "App Store & Google Play Store Publishing Setup",
        "Push Notification & OTP Gateway Setup",
      ],
    },
  },
  {
    id: "seo-growth",
    category: "growth",
    categoryLabel: "SEO & Growth Engine",
    title: "Technical SEO, Brand Authority & Growth Engine",
    shortTech: "Technical SEO, Schema Markup, Content Engine",
    description:
      "Led by Sahil Dhameliya (Head of Marketing), our growth team optimizes page architecture, JSON-LD schemas, technical speed, and inbound lead funnels.",
    features: [
      "Technical SEO Architecture Audit & Fixes",
      "Structured Data & Rich Snippet JSON-LD",
      "High-Converting B2B Content Strategy",
      "Conversion Rate Optimization (CRO) Funnels",
    ],
    pricing: {
      minINR: 30000,
      maxINR: 120000,
      minUSD: 360,
      maxUSD: 1450,
      label: "₹30,000 – ₹1,20,000 / mo",
      timeline: "Ongoing Retainer",
    },
    architecture: {
      flow: [
        "Site Architecture & Crawlability Inspection",
        "Core Web Vitals & Mobile Usability Tuning",
        "Semantic Schema Markup (Organization, FAQ, Product)",
        "Keyword Targeting & Cluster Strategy",
        "Lead Funnel Tracking & Conversion Optimization",
      ],
      techBadges: ["Technical SEO", "JSON-LD", "Google Search Console", "GA4", "Lighthouse", "CRO"],
      metrics: [
        { label: "Organic Rank Lift", value: "+300%", detail: "Average 6-month growth" },
        { label: "Indexed Pages", value: "100%", detail: "Zero crawl errors" },
        { label: "Lead Conversion Rate", value: "3.8%+", detail: "B2B funnel optimization" },
      ],
      security: [
        "Ethical White-Hat SEO Operations",
        "GDPR & Data Privacy Compliant Analytics",
        "Transparent Weekly Search Ranking Reports",
      ],
      codeSnippet: `<!-- JSON-LD Structured Data Schema Integration -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "KamiyTech Enterprise Engine",
  "operatingSystem": "All",
  "applicationCategory": "BusinessApplication"
}
</script>`,
      deliverables: [
        "Comprehensive Technical SEO Audit Report",
        "Schema & Meta Tag Optimization Implementation",
        "Monthly Growth & Ranking Dashboard (GA4 / GSC)",
        "Conversion Funnel & Lead Capture Tuning",
      ],
    },
  },
  {
    id: "cloud-sla",
    category: "cloud",
    categoryLabel: "Cloud Infrastructure",
    title: "Cloud SLA, DevOps & 24/7 Uptime Retainers",
    shortTech: "Vercel, AWS EC2/S3, Docker, Kubernetes, CI/CD",
    description:
      "Ensure zero downtime, proactive security updates, database backups, and emergency SLAs with our dedicated DevOps and maintenance engineering pods.",
    features: [
      "24/7 Monitoring & 99.9% Uptime Guarantee",
      "Daily Automated Backups & Disaster Recovery",
      "Security Patching & Dependency Updates",
      "Itemized Hours for Feature Enhancements",
    ],
    pricing: {
      minINR: 25000,
      maxINR: 95000,
      minUSD: 300,
      maxUSD: 1150,
      label: "₹25,000 – ₹95,000 / mo",
      timeline: "Monthly SLA Retainer",
    },
    architecture: {
      flow: [
        "Infrastructure Health Checks & Datadog Monitoring",
        "Automated Cloud Backups (S3 / PostgreSQL Dump)",
        "CI/CD Pipeline Security Audits & Vulnerability Scans",
        "Proactive Node.js/Python Security Patching",
        "2-Hour SEV-1 Incident Response Protocol",
      ],
      techBadges: ["Vercel", "AWS", "Docker", "GitHub Actions", "Datadog", "Cloudflare", "PostgreSQL"],
      metrics: [
        { label: "Uptime Commitment", value: "99.95%", detail: "SLA guaranteed" },
        { label: "Emergency Response", value: "<2 Hours", detail: "SEV-1 Incident SLA" },
        { label: "Backup Frequency", value: "Daily", detail: "Offsite automated backups" },
      ],
      security: [
        "Automated Dependency Vulnerability Alerts (Dependabot)",
        "Encrypted Offsite Backup Storage",
        "Bi-weekly SLA Security Review Reports",
      ],
      codeSnippet: `# AWS & GitHub Actions Production Deployment Workflow
name: Enterprise Cloud Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Vercel/AWS Cloud
        run: npx vercel --prod --token=\${{ secrets.VERCEL_TOKEN }}`,
      deliverables: [
        "24/7 Automated Infrastructure Uptime Monitoring",
        "Monthly Itemized SLA SLA Report & Security Log",
        "Automated Offsite Database Backups Configuration",
        "Direct Slack/WhatsApp Developer Escalation Channel",
      ],
    },
  },
];

export const ESTIMATION_SCALE_OPTIONS = [
  {
    id: "mvp",
    name: "Startup / MVP Scope",
    multiplier: 1.0,
    timelineDays: 14,
    description: "Core features essential for launch, fast time-to-market, clean UX.",
  },
  {
    id: "growth",
    name: "Business / Growth Scope",
    multiplier: 1.6,
    timelineDays: 28,
    description: "Full feature suite, payment integrations, analytics, custom workflows.",
  },
  {
    id: "enterprise",
    name: "Enterprise Architecture",
    multiplier: 2.8,
    timelineDays: 45,
    description: "Multi-tenant isolation, RBAC, SLA retainers, custom AI RAG pipelines.",
  },
];

export const ESTIMATION_TIMELINE_OPTIONS = [
  {
    id: "standard",
    name: "Standard Delivery",
    multiplier: 1.0,
    label: "Normal Sprint Cadence",
  },
  {
    id: "express",
    name: "Express Rush (2x Velocity)",
    multiplier: 1.25,
    label: "Dedicated Priority Sprint Pod",
  },
];
