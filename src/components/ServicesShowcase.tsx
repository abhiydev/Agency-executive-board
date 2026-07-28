"use client";

import React, { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Button } from "./Button";
import { StrategyModal } from "./StrategyModal";
import {
  Globe,
  Code2,
  Bot,
  Smartphone,
  Search,
  Database,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  X,
  Copy,
  Check,
  CheckCircle2,
  ChevronRight,
  Layers,
} from "lucide-react";
import {
  SERVICES_CATALOG,
  CATEGORY_TABS,
  ServiceItem,
} from "../data/servicesData";

export const ServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSpecService, setSelectedSpecService] = useState<ServiceItem | null>(null);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [targetServiceId, setTargetServiceId] = useState<string | undefined>(undefined);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Map category to icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Globe className="w-6 h-6 text-[#00F0FF]" />;
      case "saas":
        return <Code2 className="w-6 h-6 text-[#00F0FF]" />;
      case "ai":
        return <Bot className="w-6 h-6 text-[#00F0FF]" />;
      case "mobile":
        return <Smartphone className="w-6 h-6 text-[#00F0FF]" />;
      case "growth":
        return <Search className="w-6 h-6 text-[#00F0FF]" />;
      case "cloud":
        return <Database className="w-6 h-6 text-[#00F0FF]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#00F0FF]" />;
    }
  };

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === activeCategory);

  const handleOpenStrategyModal = (serviceId?: string) => {
    setTargetServiceId(serviceId);
    setStrategyModalOpen(true);
  };

  const handleCopySnippet = (snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="services" className="py-24 bg-[#0B0F17] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[300px] bg-[#00F0FF]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#4F46E5]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161E2E] border border-white/10 text-xs font-semibold text-[#00F0FF]">
            <Cpu className="w-4 h-4 text-[#00F0FF]" />
            <span>SERVICE CAPABILITIES & TECHNICAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Digital Product <span className="kamiy-text-gradient">Engineering</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            We bridge senior technical engineering with strategic business operations to deliver enterprise software, mobile platforms, and AI automation engines.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                  isActive
                    ? "bg-[#00F0FF] text-[#0B0F17] border-[#00F0FF] shadow-lg shadow-[#00F0FF]/25 font-bold"
                    : "bg-[#161E2E] text-[#9CA3AF] border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <GlassCard
              key={service.id}
              className="flex flex-col justify-between h-full group hover:border-[#00F0FF]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#0B0F17] w-fit rounded-xl border border-white/10 group-hover:border-[#00F0FF]/30 transition-colors">
                    {getCategoryIcon(service.category)}
                  </div>
                  <span className="text-[10px] font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-1 rounded-full border border-[#00F0FF]/20 uppercase">
                    {service.categoryLabel}
                  </span>
                </div>

                {/* Title & Tech */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#00F0FF] font-mono">
                    {service.shortTech}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs text-[#9CA3AF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] mr-2 shrink-0"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                  <span>Est. Budget:</span>
                  <span className="font-semibold text-white font-mono">{service.pricing.label}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedSpecService(service)}
                    className="w-full inline-flex items-center justify-center px-3 py-2 bg-[#0B0F17] hover:bg-[#161E2E] text-[#00F0FF] font-semibold rounded-lg text-xs border border-[#00F0FF]/30 transition-colors"
                  >
                    <Terminal className="w-3.5 h-3.5 mr-1.5" /> Arch Spec
                  </button>
                  <button
                    onClick={() => handleOpenStrategyModal(service.id)}
                    className="w-full inline-flex items-center justify-center px-3 py-2 bg-[#00F0FF] hover:bg-[#00D0DF] text-[#0B0F17] font-bold rounded-lg text-xs transition-colors"
                  >
                    Scope <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Live Architecture Specs Modal / Drawer */}
      {selectedSpecService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-[#0B0F17]/85 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedSpecService(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-[#161E2E] border border-white/10 rounded-2xl shadow-[0_16px_60px_rgba(0,240,255,0.15)] overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-[#161E2E] via-[#0B0F17] to-[#161E2E] shrink-0 relative">
              <button
                onClick={() => setSelectedSpecService(null)}
                className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-[#00F0FF] rounded-full hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B0F17] border border-[#00F0FF]/30 rounded-full text-xs text-[#00F0FF] font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>LIVE ARCHITECTURE & HARDENING SPEC</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selectedSpecService.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#00F0FF] font-mono">
                  {selectedSpecService.shortTech}
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 custom-scrollbar">
              {/* 1. Architecture Flow Diagram */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider flex items-center">
                  <Layers className="w-4 h-4 text-[#00F0FF] mr-2" />
                  Execution Pipeline & System Data Flow
                </h4>
                <div className="bg-[#0B0F17] p-4 sm:p-5 rounded-xl border border-white/10 space-y-2.5">
                  {selectedSpecService.architecture.flow.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center text-xs text-white">
                      <div className="w-6 h-6 rounded-full bg-[#4F46E5]/30 border border-[#4F46E5] flex items-center justify-center font-mono font-bold text-[#00F0FF] text-[11px] mr-3 shrink-0">
                        {sIdx + 1}
                      </div>
                      <span className="font-medium text-white/90">{step}</span>
                      {sIdx < selectedSpecService.architecture.flow.length - 1 && (
                        <ChevronRight className="w-4 h-4 text-[#9CA3AF] ml-auto hidden sm:block shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Tech Stack Badges & Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tech Stack Badges */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider flex items-center">
                    <Cpu className="w-4 h-4 text-[#00F0FF] mr-2" />
                    Core Engineering Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSpecService.architecture.techBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-3 py-1.5 rounded-lg bg-[#0B0F17] border border-[#00F0FF]/30 text-xs font-mono text-white font-semibold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance SLA Benchmarks */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider flex items-center">
                    <Zap className="w-4 h-4 text-[#00F0FF] mr-2" />
                    Performance SLA Benchmarks
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedSpecService.architecture.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#0B0F17] p-3 rounded-xl border border-white/10 text-center">
                        <div className="text-base font-extrabold text-[#00F0FF] font-mono">{m.value}</div>
                        <div className="text-[10px] font-semibold text-white mt-0.5">{m.label}</div>
                        <div className="text-[9px] text-[#9CA3AF] mt-0.5">{m.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Security & Governance Standards */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider flex items-center">
                  <ShieldCheck className="w-4 h-4 text-[#00F0FF] mr-2" />
                  Security & Enterprise Governance Standard
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedSpecService.architecture.security.map((sec, secIdx) => (
                    <div
                      key={secIdx}
                      className="bg-[#0B0F17] p-3 rounded-xl border border-white/10 flex items-start space-x-2 text-xs text-[#9CA3AF]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Sleek Code / Schema Snippet */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 text-[#00F0FF] mr-2" />
                    Architecture Code Contract Snippet
                  </h4>
                  <button
                    onClick={() => handleCopySnippet(selectedSpecService.architecture.codeSnippet)}
                    className="flex items-center space-x-1 text-xs text-[#00F0FF] hover:underline focus:outline-none"
                  >
                    {copiedSnippet ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSnippet ? "Copied" : "Copy Snippet"}</span>
                  </button>
                </div>
                <div className="bg-[#0B0F17] p-4 rounded-xl border border-white/10 font-mono text-xs text-[#00F0FF] overflow-x-auto">
                  <pre>{selectedSpecService.architecture.codeSnippet}</pre>
                </div>
              </div>

              {/* Modal CTA Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#9CA3AF]">
                  Ready to deploy this technical architecture for your company?
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Button
                    onClick={() => setSelectedSpecService(null)}
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    Close Spec
                  </Button>
                  <Button
                    onClick={() => {
                      const id = selectedSpecService.id;
                      setSelectedSpecService(null);
                      handleOpenStrategyModal(id);
                    }}
                    variant="primary"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    Scope Architecture <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessible Interactive Strategy Modal Triggered from Services */}
      <StrategyModal
        isOpen={strategyModalOpen}
        onClose={() => setStrategyModalOpen(false)}
        initialServiceId={targetServiceId}
      />
    </section>
  );
};
