"use client";

import React, { useState } from "react";
import { GlassCard } from "./GlassCard";
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  FileCheck,
  CreditCard,
  Building2,
  Search,
  MessageSquare,
  Sparkles
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "objections" | "ip" | "milestones" | "gst";
  question: string;
  answer: string;
  highlights?: string[];
  icon: React.ReactNode;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "objections",
    question: "Why choose KamiyTech over hiring full-time in-house engineers or large legacy agencies?",
    answer:
      "Hiring full-time senior engineers requires 2-3 months of recruitment lag, $150k+ annual salary packages, benefits, and ongoing bench costs. Large legacy agencies often assign junior developers while charging massive overheads. KamiyTech gives you instant access to senior engineering leadership (led by CEO Shivam Sharma, CTO Abhishek Parmar, and CMO Sahil Dhameliya) with fixed milestone pricing, 3x faster time-to-market, and zero bench liability.",
    highlights: [
      "Zero recruitment lag & bench overhead",
      "Direct senior leadership oversight on every build",
      "Predictable fixed-milestone pricing",
      "3x faster time-to-market execution"
    ],
    icon: <Building2 className="w-5 h-5 text-[#00F0FF]" />
  },
  {
    id: "faq-2",
    category: "objections",
    question: "How do you guarantee project delivery on time without unexpected cost overruns?",
    answer:
      "We operate on a transparent Stage-Gate milestone model with locked technical specifications signed off before line-of-code execution. Every sprint includes live staging demos, weekly progress reports, and automated CI/CD pipeline validation. You review and approve each functional gate before unlocking the next milestone—ensuring zero surprise bills or scope creep surcharges.",
    highlights: [
      "Fixed-scope stage-gate milestone contracts",
      "Weekly live staging build demonstrations",
      "Zero scope-creep surcharge guarantees"
    ],
    icon: <ShieldCheck className="w-5 h-5 text-[#00F0FF]" />
  },
  {
    id: "faq-3",
    category: "ip",
    question: "Who owns the Intellectual Property (IP) and source code created during the project?",
    answer:
      "You own 100% of all Intellectual Property, source code, system architecture diagrams, design files, and patentable assets created for your project upon milestone completion. We provide full git repository ownership transfers with zero lock-in, zero ongoing royalty fees, and no restrictive licensing conditions.",
    highlights: [
      "100% complete IP & source code ownership transfer",
      "Zero lock-in or ongoing royalty fees",
      "Full private GitHub repository transfer"
    ],
    icon: <FileCheck className="w-5 h-5 text-[#00F0FF]" />
  },
  {
    id: "faq-4",
    category: "ip",
    question: "How do you protect our confidential business logic, data, and trade secrets?",
    answer:
      "We sign a legally binding mutual Non-Disclosure Agreement (NDA) prior to any technical discovery. All developer environments enforce strict encryption (AES-256 at rest, TLS 1.3 in transit), single-tenant isolated staging environments, SOC2-compliant access controls, and strict clean-code security policies.",
    highlights: [
      "Mutual NDA signed prior to discovery",
      "Single-tenant isolated cloud sandboxes",
      "SOC2 & HIPAA compliant security protocols"
    ],
    icon: <ShieldCheck className="w-5 h-5 text-[#00F0FF]" />
  },
  {
    id: "faq-5",
    category: "milestones",
    question: "What are your standard milestone terms and payment structures?",
    answer:
      "Our default enterprise engagement structure is organized into clear performance gates: 30% Kickoff & System Architecture, 40% Core Engineering & Staging Demo, and 30% Final Production Deployment & Source Code Transfer. For ongoing product evolution, we also offer dedicated monthly agile squad retainers with bi-weekly sprint deliverables.",
    highlights: [
      "30-40-30 Stage-Gate payment roadmap",
      "Agile squad retainers available for scaling",
      "Escrow-style milestone sign-off process"
    ],
    icon: <CreditCard className="w-5 h-5 text-[#00F0FF]" />
  },
  {
    id: "faq-6",
    category: "milestones",
    question: "What post-launch support and maintenance guarantee do you offer?",
    answer:
      "Every custom software build includes 30 to 90 days of complimentary warranty support covering bug fixes, security updates, and performance monitoring. Following the warranty window, we offer flexible SLA-backed maintenance packages for 24/7 uptime monitoring, dependency updates, and feature expansions.",
    highlights: [
      "30–90 days complimentary post-launch warranty",
      "Dedicated SLA-backed maintenance packages",
      "Continuous automated uptime & error logging"
    ],
    icon: <Sparkles className="w-5 h-5 text-[#00F0FF]" />
  },
  {
    id: "faq-7",
    category: "gst",
    question: "How is Goods & Services Tax (GST) billed for companies registered in India?",
    answer:
      "For Indian business entities, invoices are issued in INR with standard 18% GST (CGST+SGST for Gujarat entities, IGST for outside Gujarat). All tax invoices include our valid GSTIN, allowing your company to claim 100% Input Tax Credit (ITC) against your eligible GST liability.",
    highlights: [
      "Official 18% GST tax invoices with GSTIN",
      "100% Input Tax Credit (ITC) claimable for Indian companies",
      "Compliant with Indian Ministry of Corporate Affairs regulations"
    ],
    icon: <FileCheck className="w-5 h-5 text-[#00F0FF]" />
  },
  {
    id: "faq-8",
    category: "gst",
    question: "How are international invoices billed for clients in the US, Europe, UK, or UAE?",
    answer:
      "For cross-border international clients, services are classified as 'Export of Services' under Indian GST regulations (LUT - Letter of Undertaking). Cross-border invoices carry 0% GST (Zero-Rated Tax). Invoices are issued in USD, EUR, or GBP, payable via Wire Transfer, SWIFT, Stripe, or Wise with zero tax added.",
    highlights: [
      "0% GST (Zero-Rated Export of Services under LUT)",
      "Billed directly in USD, EUR, or GBP",
      "Seamless payments via SWIFT, Stripe, or Wise"
    ],
    icon: <CreditCard className="w-5 h-5 text-[#00F0FF]" />
  }
];

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "objections" | "ip" | "milestones" | "gst">("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0F17] relative border-t border-white/5 overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[300px] bg-[#00F0FF]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[280px] bg-[#4F46E5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#161E2E] border border-white/10 rounded-full text-xs text-[#00F0FF] font-semibold tracking-wide uppercase">
            <HelpCircle className="w-4 h-4 text-[#00F0FF]" />
            <span>TRANSPARENCY & GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="kamiy-text-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF]">
            Everything you need to know about our execution risk mitigation, IP ownership, milestone payments, and tax rules.
          </p>

          {/* Search Input Bar */}
          <div className="relative max-w-xl mx-auto pt-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search questions (e.g. GST, IP transfer, milestones, NDA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#161E2E] border border-white/10 rounded-xl text-sm text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#00F0FF] transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Questions" },
              { id: "objections", label: "Agency vs In-House" },
              { id: "ip", label: "IP & NDA Protection" },
              { id: "milestones", label: "Milestones & Delivery" },
              { id: "gst", label: "GST & Tax Rules" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#00F0FF] text-[#0B0F17] shadow-[0_0_15px_rgba(0,240,255,0.4)] font-bold"
                    : "bg-[#161E2E] text-[#9CA3AF] hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <GlassCard className="text-center py-12">
              <p className="text-base text-[#9CA3AF]">No questions matching &quot;{searchQuery}&quot;.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-4 py-2 bg-[#00F0FF] text-[#0B0F17] rounded-lg text-xs font-bold cursor-pointer"
              >
                Reset Search
              </button>
            </GlassCard>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? "bg-[#161E2E] border-[#00F0FF]/40 shadow-[0_4px_25px_rgba(0,240,255,0.1)]"
                      : "bg-[#161E2E]/60 border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-start justify-between space-x-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 rounded-xl bg-[#0B0F17] border border-white/10 shrink-0">
                        {faq.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-1.5 rounded-full bg-[#0B0F17] border border-white/10 text-[#9CA3AF] transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#00F0FF] border-[#00F0FF]/40" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-white/5 space-y-4 animate-in fade-in duration-200">
                      <p className="text-sm text-[#9CA3AF] leading-relaxed">{faq.answer}</p>

                      {faq.highlights && (
                        <div className="p-4 rounded-xl bg-[#0B0F17]/80 border border-white/10 space-y-2">
                          <div className="text-xs font-semibold text-[#00F0FF] uppercase tracking-wider">
                            Key Governance Guarantee
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {faq.highlights.map((item, idx) => (
                              <div key={idx} className="flex items-center text-xs text-white">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] mr-2 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Enterprise Governance Callout */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#161E2E] via-[#0B0F17] to-[#161E2E] border border-[#00F0FF]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Have a Custom Enterprise Security or Tax Question?</h4>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-xl">
              Our engineering & executive team will review your procurement requirements, custom MSA terms, or tax withholding documentation.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#00F0FF] text-[#0B0F17] font-extrabold text-xs sm:text-sm rounded-xl hover:bg-[#00F0FF]/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] shrink-0 inline-flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Speak With Leadership</span>
          </a>
        </div>
      </div>
    </section>
  );
};
