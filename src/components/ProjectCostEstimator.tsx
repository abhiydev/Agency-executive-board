"use client";

import React, { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Button } from "./Button";
import { Calculator, CheckCircle2, MessageSquare, Info } from "lucide-react";

interface CategoryOption {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  billingType: "50/50" | "40/30/30";
  description: string;
}

const CATEGORIES: CategoryOption[] = [
  {
    id: "landing",
    name: "Single-Page Landing Website",
    minPrice: 12000,
    maxPrice: 15000,
    billingType: "50/50",
    description: "High-converting single page, responsive design, fast performance, contact form.",
  },
  {
    id: "web_app",
    name: "Multi-Page Web Platform (Next.js)",
    minPrice: 35000,
    maxPrice: 220000,
    billingType: "40/30/30",
    description: "Full Next.js multi-page web platform, CMS integration, custom UI components.",
  },
  {
    id: "saas",
    name: "Custom SaaS / ERP Platform",
    minPrice: 250000,
    maxPrice: 750000,
    billingType: "40/30/30",
    description: "Enterprise cloud backends, FastAPI/Node.js, PostgreSQL, user auth, complex workflows.",
  },
  {
    id: "mobile",
    name: "Cross-Platform Mobile App",
    minPrice: 120000,
    maxPrice: 650000,
    billingType: "40/30/30",
    description: "React Native iOS & Android app, push notifications, offline support, API integration.",
  },
  {
    id: "ai_bot",
    name: "AI & Workflow Automation",
    minPrice: 45000,
    maxPrice: 350000,
    billingType: "50/50",
    description: "OpenAI/Gemini integration, autonomous lead bot, RAG search engine, workflow bots.",
  },
];

interface AddonOption {
  id: string;
  name: string;
  price: number;
  isMonthly: boolean;
}

const ADDONS: AddonOption[] = [
  { id: "seo", name: "Technical SEO & Brand Growth", price: 15000, isMonthly: true },
  { id: "essential_care", name: "Essential Maintenance Retainer", price: 12000, isMonthly: true },
  { id: "growth_care", name: "Growth Care Managed Retainer", price: 35000, isMonthly: true },
  { id: "rag_engine", name: "Custom RAG AI Document Engine", price: 35000, isMonthly: false },
];

export const ProjectCostEstimator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(CATEGORIES[1]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate Base + Addons
  const addonOneTimeTotal = selectedAddons
    .map((id) => ADDONS.find((a) => a.id === id))
    .filter((a) => a && !a.isMonthly)
    .reduce((sum, a) => sum + (a?.price || 0), 0);

  const addonMonthlyTotal = selectedAddons
    .map((id) => ADDONS.find((a) => a.id === id))
    .filter((a) => a && a.isMonthly)
    .reduce((sum, a) => sum + (a?.price || 0), 0);

  const estimatedMin = selectedCategory.minPrice + addonOneTimeTotal;
  const estimatedMax = selectedCategory.maxPrice + addonOneTimeTotal;

  const gstMin = Math.round(estimatedMin * 0.18);
  const gstMax = Math.round(estimatedMax * 0.18);

  const formatINR = (val: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
      val
    );

  // Generate WhatsApp Message Link
  const whatsappMsg = encodeURIComponent(
    `Hello Ankit! I estimated a project on KamiyTech.com:\n` +
      `- Scope: ${selectedCategory.name}\n` +
      `- Estimated Range: ${formatINR(estimatedMin)} - ${formatINR(estimatedMax)} (+ 18% GST)\n` +
      (addonMonthlyTotal > 0 ? `- Monthly Retainers: ${formatINR(addonMonthlyTotal)}/mo\n` : "") +
      `I would like to discuss next steps!`
  );

  return (
    <section id="estimator" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#161E2E] border border-white/10 rounded-full text-xs text-[#00F0FF] font-medium">
            <Calculator className="w-4 h-4 text-[#00F0FF]" />
            <span>TRANSPARENT P1.2 RATE CARD ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Project Cost Estimator
          </h2>
          <p className="text-base text-[#9CA3AF]">
            Calculate real-time project estimates in INR (₹) based on our official domestic rate card. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Project Scope */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center">
                <span className="w-7 h-7 rounded-full bg-[#00F0FF] text-[#0B0F17] text-sm font-bold flex items-center justify-center mr-3">
                  1
                </span>
                Select Project Scope & Category
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory.id === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "bg-[#161E2E] border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                          : "bg-[#161E2E]/40 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-sm text-white">{cat.name}</h4>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />}
                      </div>
                      <p className="text-xs text-[#9CA3AF] mt-2 line-clamp-2">{cat.description}</p>
                      <div className="mt-3 text-xs font-mono text-[#00F0FF] font-semibold">
                        {formatINR(cat.minPrice)} – {formatINR(cat.maxPrice)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Optional Add-ons & Retainers */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center">
                <span className="w-7 h-7 rounded-full bg-[#00F0FF] text-[#0B0F17] text-sm font-bold flex items-center justify-center mr-3">
                  2
                </span>
                Optional Add-ons & Growth Retainers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "bg-[#161E2E] border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                          : "bg-[#161E2E]/40 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-xs text-white">{addon.name}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />}
                      </div>
                      <div className="mt-2 text-xs font-mono text-[#00F0FF]">
                        +{formatINR(addon.price)}
                        {addon.isMonthly ? "/mo" : " (One-time)"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Calculation Column */}
          <div className="lg:col-span-5">
            <GlassCard className="sticky top-28 space-y-6 border-[#00F0FF]/30">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
                  Real-time Estimation Summary
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {selectedCategory.name}
                </h3>
              </div>

              {/* Price Calculation Output */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-[#9CA3AF]">Estimated Base Budget (INR ₹):</span>
                  <div className="text-3xl font-extrabold text-[#00F0FF] font-mono mt-1">
                    {formatINR(estimatedMin)} – {formatINR(estimatedMax)}
                  </div>
                </div>

                <div className="p-3 bg-[#0B0F17] rounded-lg border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-[#9CA3AF]">
                    <span>Itemized 18% GST:</span>
                    <span className="font-mono text-white">
                      +{formatINR(gstMin)} – +{formatINR(gstMax)}
                    </span>
                  </div>
                  {addonMonthlyTotal > 0 && (
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>Monthly Growth Retainer:</span>
                      <span className="font-mono text-[#00F0FF]">{formatINR(addonMonthlyTotal)}/mo</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#9CA3AF]">
                    <span>Milestone Schedule:</span>
                    <span className="font-semibold text-white">
                      {selectedCategory.billingType === "50/50"
                        ? "50% Deposit / 50% Handover"
                        : "40% Deposit / 30% Staging / 30% Launch"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[11px] text-[#9CA3AF]">
                  <Info className="w-4 h-4 text-[#00F0FF] shrink-0" />
                  <span>Includes 100% source code IP ownership handover & QA verification.</span>
                </div>
              </div>

              {/* Direct Action Trigger */}
              <div className="pt-2 space-y-3">
                <a
                  href={`https://wa.me/919977858817?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded-lg text-sm transition-all duration-200 shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Scope to WhatsApp (+91 9977858817)
                </a>
                <Button href="#contact" variant="outline" size="md" className="w-full">
                  Book 30-Min Strategy Call
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
