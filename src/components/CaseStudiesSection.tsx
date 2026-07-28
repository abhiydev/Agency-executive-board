"use client";

import React, { useState } from "react";
import { GlassCard } from "./GlassCard";
import {
  ArrowUpRight,
  TrendingUp,
  CheckCircle,
  Cpu,
  Globe,
  Smartphone,
  Search,
  ExternalLink,
  X
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: "ai" | "web" | "mobile" | "seo";
  title: string;
  client: string;
  industry: string;
  tag: string;
  icon: React.ReactNode;
  metric: string;
  metricLabel: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    category: "ai",
    title: "FinTech Enterprise RAG & Automated Document Intelligence",
    client: "Apex Financial Solutions",
    industry: "Banking & Financial Services",
    tag: "AI & Workflow Automation",
    icon: <Cpu className="w-6 h-6 text-[#00F0FF]" />,
    metric: "65% Reduction",
    metricLabel: "in Loan Processing & Manual Review Time",
    description:
      "Engineered an autonomous OpenAI & Gemini RAG search pipeline that ingests, indexes, and audits 10,000+ complex commercial loan contracts with zero human error.",
    challenge:
      "Apex Financial's risk team spent 45+ minutes manually reviewing each 100-page loan document for compliance exceptions, creating severe bottlenecks.",
    solution:
      "Built a secure vector search microservice powered by FastAPI, Supabase Vector, and OpenAI embeddings with audit-trail citations and sub-second query response.",
    deliverables: [
      "Custom LangChain & LlamaIndex RAG Pipeline",
      "FastAPI Microservices Vector Database",
      "OCR PDF Parser & Exception Highlighter",
      "Enterprise RBAC Security & Audit Trail"
    ],
    techStack: ["Python", "FastAPI", "OpenAI API", "Supabase Vector", "Docker"],
    quote: {
      text: "KamiyTech transformed our risk team's workflow. We cut document review turnaround from hours to seconds with 100% audit precision.",
      author: "Marcus Vance",
      role: "Chief Operating Officer, Apex Financial"
    }
  },
  {
    id: "cs-2",
    category: "web",
    title: "Enterprise Headless Next.js 15 E-Commerce Platform",
    client: "Luminary Retail Global",
    industry: "Global Retail & E-Commerce",
    tag: "High-Performance Web Engine",
    icon: <Globe className="w-6 h-6 text-[#00F0FF]" />,
    metric: "1.1s Page Speed",
    metricLabel: "+42% Conversion Rate Increase in 30 Days",
    description:
      "Migrated a legacy monolithic storefront to Next.js 15 App Router with React Server Components, delivering instant page loads and multi-currency checkout.",
    challenge:
      "High bounce rates (48%) caused by 4.8-second load times on legacy Shopify/WooCommerce monolith during peak flash sales.",
    solution:
      "Architected a headless Next.js storefront integrated with Stripe and GraphQL catalog APIs, edge-cached with Vercel Edge Middleware.",
    deliverables: [
      "Next.js 15 App Router Storefront",
      "Tailwind Glassmorphic Design System",
      "Headless Stripe & Multi-Currency Checkout",
      "Edge Micro-caching & RSC Optimization"
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Stripe API"],
    quote: {
      text: "Our core Web Vitals hit 99/100 across all metrics. The speed boost immediately increased our monthly revenue by 42%.",
      author: "Elena Rostova",
      role: "VP of Digital Experience, Luminary Retail"
    }
  },
  {
    id: "cs-3",
    category: "mobile",
    title: "Cross-Platform React Native Telemedicine & Health App",
    client: "CarePulse Health Technologies",
    industry: "Digital Healthcare",
    tag: "Mobile Application",
    icon: <Smartphone className="w-6 h-6 text-[#00F0FF]" />,
    metric: "4.9 / 5.0 Rating",
    metricLabel: "Across 25,000+ Active Monthly Patients",
    description:
      "Built a unified iOS and Android mobile app enabling end-to-end encrypted video consultations, offline prescription caching, and instant appointment booking.",
    challenge:
      "CarePulse needed a seamless, HIPAA-compliant mobile app that functioned reliably in low-bandwidth regional clinics across iOS and Android.",
    solution:
      "Engineered a lightweight React Native application with WebRTC video calling, Zustand local state caching, and automated Push Notifications.",
    deliverables: [
      "React Native & Expo iOS/Android App",
      "HIPAA-Compliant Encrypted WebRTC Video",
      "Offline Prescription Caching System",
      "Push Notification & Scheduling Engine"
    ],
    techStack: ["React Native", "Expo", "Node.js", "WebRTC", "PostgreSQL"],
    quote: {
      text: "Abhishek Parmar and the KamiyTech mobile team delivered a flawless app. Our clinic onboarding skyrocketed without a single critical bug.",
      author: "Dr. Aris Thorne",
      role: "Founder & CTO, CarePulse Health"
    }
  },
  {
    id: "cs-4",
    category: "seo",
    title: "B2B SaaS Organic Lead Generation & Technical SEO Engine",
    client: "CloudOps B2B Platform",
    industry: "Enterprise SaaS & DevOps",
    tag: "Marketing & Growth Engine",
    icon: <Search className="w-6 h-6 text-[#00F0FF]" />,
    metric: "15,000+ / mo",
    metricLabel: "Qualified Organic B2B Inbound Leads",
    description:
      "Led by CMO Sahil Dhameliya, we overhauled site taxonomy, resolved technical indexing bottlenecks, and launched 40+ high-intent programmatic landing pages.",
    challenge:
      "CloudOps suffered from stalled organic traffic due to duplicate meta structures, slow server response times, and missing keyword authority.",
    solution:
      "Implemented programmatic Next.js SEO architecture with dynamic OpenGraph generation, structured JSON-LD schema, and high-converting copy.",
    deliverables: [
      "Comprehensive Technical SEO Audit",
      "Programmatic SEO Content System",
      "Schema.org Structured Data Network",
      "B2B Conversion Rate Optimization (CRO)"
    ],
    techStack: ["Technical SEO", "Next.js Metadata", "JSON-LD", "Google Search Console"],
    quote: {
      text: "Sahil's SEO strategy scaled our inbound lead pipeline by 320% in under 4 months, reducing our customer acquisition cost drastically.",
      author: "Vikram Mehta",
      role: "Co-Founder, CloudOps SaaS"
    }
  }
];

export const CaseStudiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "web" | "mobile" | "seo">("all");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    activeTab === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === activeTab);

  return (
    <section id="casestudies" className="py-24 bg-[#0B0F17] relative border-t border-white/5 overflow-hidden">
      {/* Background Radial Glow Filters */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#4F46E5]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-[#00F0FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#161E2E] border border-white/10 rounded-full text-xs text-[#00F0FF] font-semibold tracking-wide uppercase">
            <TrendingUp className="w-4 h-4 text-[#00F0FF]" />
            <span>PROVEN ENTERPRISE DELIVERIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            High-Impact <span className="kamiy-text-gradient">Case Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Real enterprise transformations powered by our AI engineering, Next.js application architecture, cross-platform mobile apps, and technical SEO growth.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Projects" },
              { id: "ai", label: "AI & Automation" },
              { id: "web", label: "Web Applications" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "seo", label: "Marketing & SEO" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "all" | "ai" | "web" | "mobile" | "seo")}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#00F0FF] text-[#0B0F17] shadow-[0_0_20px_rgba(0,240,255,0.4)] font-bold scale-105"
                    : "bg-[#161E2E] text-[#9CA3AF] hover:text-white border border-white/10 hover:border-[#00F0FF]/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <GlassCard key={study.id} className="flex flex-col justify-between h-full group relative overflow-hidden border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#161E2E] border border-[#00F0FF]/30 rounded-full text-[11px] font-mono text-[#00F0FF]">
                    {study.tag}
                  </span>
                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="flex items-center space-x-1 text-xs text-[#9CA3AF] group-hover:text-[#00F0FF] transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-[#9CA3AF] mt-1">
                    <span className="font-semibold text-white">{study.client}</span>
                    <span>•</span>
                    <span className="text-[#00F0FF]/80">{study.industry}</span>
                  </div>
                </div>

                {/* Metric Callout Card */}
                <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-[#00F0FF] font-mono tracking-tight">
                      {study.metric}
                    </div>
                    <div className="text-[11px] text-[#9CA3AF] mt-0.5">{study.metricLabel}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#161E2E] border border-white/10 shrink-0">
                    {study.icon}
                  </div>
                </div>

                <p className="text-sm text-[#9CA3AF] leading-relaxed">{study.description}</p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">Key Deliverables</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center text-xs text-[#9CA3AF]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF] mr-2 shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack & CTA */}
              <div className="pt-6 border-t border-white/10 mt-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {study.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 bg-[#161E2E] text-[10px] text-[#9CA3AF] rounded font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedStudy(study)}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#00F0FF] hover:underline cursor-pointer ml-auto"
                >
                  <span>Detailed Breakdown</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#161E2E] border border-[#00F0FF]/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-white bg-[#0B0F17] rounded-full border border-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-[#0B0F17] border border-[#00F0FF]/40 rounded-full text-xs font-mono text-[#00F0FF]">
                {selectedStudy.tag}
              </span>
              <h3 className="text-2xl font-bold text-white pt-1">{selectedStudy.title}</h3>
              <p className="text-sm text-[#00F0FF]">
                Client: {selectedStudy.client} | {selectedStudy.industry}
              </p>
            </div>

            {/* Impact Metric Banner */}
            <div className="p-4 rounded-xl bg-[#0B0F17] border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-3xl font-extrabold text-[#00F0FF] font-mono">
                  {selectedStudy.metric}
                </div>
                <div className="text-xs text-[#9CA3AF]">{selectedStudy.metricLabel}</div>
              </div>
              <div className="p-3 bg-[#161E2E] rounded-lg border border-white/10">
                {selectedStudy.icon}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-[#00F0FF]">The Challenge</h4>
                <p className="text-sm text-[#9CA3AF] mt-1 leading-relaxed">{selectedStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-[#00F0FF]">Our Solution</h4>
                <p className="text-sm text-[#9CA3AF] mt-1 leading-relaxed">{selectedStudy.solution}</p>
              </div>
            </div>

            {/* Quote */}
            <div className="p-4 rounded-xl bg-[#0B0F17]/80 border-l-4 border-[#00F0FF] italic text-sm text-white">
              &quot;{selectedStudy.quote.text}&quot;
              <div className="not-italic text-xs text-[#00F0FF] font-semibold mt-2">
                — {selectedStudy.quote.author}, {selectedStudy.quote.role}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex justify-end space-x-3">
              <button
                onClick={() => setSelectedStudy(null)}
                className="px-5 py-2.5 bg-[#0B0F17] text-xs font-semibold text-[#9CA3AF] hover:text-white rounded-lg border border-white/10 cursor-pointer"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedStudy(null)}
                className="px-5 py-2.5 bg-[#00F0FF] text-[#0B0F17] text-xs font-bold rounded-lg hover:bg-[#00F0FF]/90 transition-all cursor-pointer inline-flex items-center"
              >
                Request Similar System
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
