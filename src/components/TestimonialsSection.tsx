"use client";

import React, { useState } from "react";
import { GlassCard } from "./GlassCard";
import {
  Star,
  Quote,
  ShieldCheck,
  Building,
  TrendingUp,
  Award,
  Users,
  CheckCircle2
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatar: string;
  rating: number;
  metricBadge: string;
  metricLabel: string;
  quote: string;
  projectTag: string;
  verified: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Marcus Vance",
    role: "Chief Operating Officer",
    company: "Apex Financial Solutions",
    industry: "FinTech & Banking",
    avatar: "MV",
    rating: 5.0,
    metricBadge: "65% Time Saved",
    metricLabel: "Saved $140,000+ per year in operational review costs",
    quote:
      "KamiyTech delivered our RAG Document Intelligence AI in just 4 weeks. Their team integrated directly with our engineering squad under Abhishek Parmar's technical guidance. What used to take hours of manual contract review is now automated in seconds.",
    projectTag: "AI & RAG Document Intelligence",
    verified: true
  },
  {
    id: "t-2",
    name: "Elena Rostova",
    role: "VP of Digital Experience",
    company: "Luminary Retail Global",
    industry: "E-Commerce",
    avatar: "ER",
    rating: 5.0,
    metricBadge: "+42% Conversion Lift",
    metricLabel: "Sub-second 1.1s load time across 12 countries",
    quote:
      "Migrating our monolithic storefront to Next.js 15 App Router was a high-stakes project. Shivam Sharma and his senior developers executed flawless edge micro-caching. Our core web vitals soared to 99/100 and revenue spiked 42% in month one.",
    projectTag: "Headless Next.js Storefront",
    verified: true
  },
  {
    id: "t-3",
    name: "Dr. Aris Thorne",
    role: "Founder & Chief Technology Officer",
    company: "CarePulse Health",
    industry: "HealthTech & Telemedicine",
    avatar: "AT",
    rating: 5.0,
    metricBadge: "4.9★ App Rating",
    metricLabel: "Over 25,000 active monthly patients onboarded",
    quote:
      "Finding an engineering partner who understands HIPAA compliance, WebRTC video streaming, and React Native native builds is exceedingly rare. KamiyTech delivered ahead of schedule with zero post-launch critical bugs.",
    projectTag: "Cross-Platform React Native App",
    verified: true
  },
  {
    id: "t-4",
    name: "Vikram Mehta",
    role: "Co-Founder & CEO",
    company: "CloudOps B2B SaaS",
    industry: "DevOps & Cloud SaaS",
    avatar: "VM",
    rating: 5.0,
    metricBadge: "15,000+ Inbound Leads/mo",
    metricLabel: "Scaled organic B2B traffic by 320% in under 4 months",
    quote:
      "Sahil Dhameliya and the SEO engineering squad transformed our customer acquisition model. By fixing deep technical SEO bottlenecks and building programmatic pages, they turned our website into our highest-performing revenue engine.",
    projectTag: "Technical SEO & B2B Growth Engine",
    verified: true
  }
];

export const TestimonialsSection: React.FC = () => {
  const [filterIndustry, setFilterIndustry] = useState<string>("all");

  const industries = ["all", "FinTech & Banking", "E-Commerce", "HealthTech & Telemedicine", "DevOps & Cloud SaaS"];

  const filteredTestimonials =
    filterIndustry === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.industry === filterIndustry);

  return (
    <section id="testimonials" className="py-24 bg-[#0B0F17] relative border-t border-white/5 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#4F46E5]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[250px] bg-[#00F0FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#161E2E] border border-white/10 rounded-full text-xs text-[#00F0FF] font-semibold tracking-wide uppercase">
            <Award className="w-4 h-4 text-[#00F0FF]" />
            <span>VERIFIED CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted by <span className="kamiy-text-gradient">B2B Founders & CTOs</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Read how enterprise leaders and fast-growing venture startups achieve predictable engineering velocity and measurable revenue ROI.
          </p>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilterIndustry(ind)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  filterIndustry === ind
                    ? "bg-[#00F0FF] text-[#0B0F17] shadow-[0_0_15px_rgba(0,240,255,0.4)] font-bold"
                    : "bg-[#161E2E] text-[#9CA3AF] hover:text-white border border-white/10"
                }`}
              >
                {ind === "all" ? "All Endorsements" : ind}
              </button>
            ))}
          </div>
        </div>

        {/* Enterprise Trust Stats Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#161E2E]/80 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#00F0FF] font-mono">5.0 / 5.0</div>
            <div className="text-xs text-[#9CA3AF]">Average Client Rating</div>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-4 md:pl-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</div>
            <div className="text-xs text-[#9CA3AF]">On-Time Milestone Delivery</div>
          </div>
          <div className="space-y-1 md:border-l border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#00F0FF] font-mono">20+</div>
            <div className="text-xs text-[#9CA3AF]">Enterprise Systems Shipped</div>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-4 md:pl-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100% IP</div>
            <div className="text-xs text-[#9CA3AF]">Code & IP Ownership Transferred</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <GlassCard key={t.id} className="flex flex-col justify-between h-full relative overflow-hidden border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300">
              <div className="space-y-6">
                {/* Card Header: Metric Badge & Rating */}
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-lg bg-[#0B0F17] border border-[#00F0FF]/30 flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-[#00F0FF]" />
                    <span className="text-xs font-bold text-[#00F0FF] font-mono">{t.metricBadge}</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Sub-metric label */}
                <div className="text-xs text-[#9CA3AF] font-medium italic">
                  "{t.metricLabel}"
                </div>

                {/* Testimonial Quote */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-[#00F0FF]/15 absolute -top-3 -left-2 pointer-events-none" />
                  <p className="text-sm text-[#F9FAFB] leading-relaxed relative z-10 pt-2">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F0FF] to-[#4F46E5] flex items-center justify-center text-[#0B0F17] font-extrabold text-sm tracking-wider shadow-md">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">{t.name}</h4>
                    <p className="text-xs text-[#9CA3AF]">
                      {t.role}, <span className="text-[#00F0FF]">{t.company}</span>
                    </p>
                  </div>
                </div>

                {t.verified && (
                  <div className="flex items-center space-x-1 text-[11px] text-[#00F0FF] bg-[#161E2E] px-2.5 py-1 rounded-full border border-white/10 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>Verified B2B Client</span>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
