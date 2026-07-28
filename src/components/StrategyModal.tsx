"use client";

import React, { useState, useEffect, useId, useCallback } from "react";
import { Button } from "./Button";
import {
  X,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Calculator,
  Clock,
  Layers,
  Zap,
  Copy,
  Check,
} from "lucide-react";
import {
  SERVICES_CATALOG,
  ESTIMATION_SCALE_OPTIONS,
  ESTIMATION_TIMELINE_OPTIONS,
  ServiceItem,
} from "../data/servicesData";

export interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const StrategyModal: React.FC<StrategyModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const titleId = useId();
  const descriptionId = useId();

  // Find initial service matching provided ID or fallback to first
  const initialService =
    SERVICES_CATALOG.find((s) => s.id === initialServiceId || s.title === initialServiceId) ||
    SERVICES_CATALOG[0];

  const [selectedService, setSelectedService] = useState<ServiceItem>(initialService);
  const [selectedScale, setSelectedScale] = useState(ESTIMATION_SCALE_OPTIONS[1]); // Default to Business / Growth
  const [selectedTimeline, setSelectedTimeline] = useState(ESTIMATION_TIMELINE_OPTIONS[0]); // Default to Standard
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // Sync initial service when prop changes
  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES_CATALOG.find(
        (s) => s.id === initialServiceId || s.title === initialServiceId
      );
      if (match) {
        setSelectedService(match);
      }
    }
  }, [initialServiceId]);

  // Handle ESC key press & Lock Body Scroll
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  // Calculate live dynamic estimation summary
  const minINR = Math.round(selectedService.pricing.minINR * selectedScale.multiplier * selectedTimeline.multiplier);
  const maxINR = Math.round(selectedService.pricing.maxINR * selectedScale.multiplier * selectedTimeline.multiplier);
  
  const minUSD = Math.round(selectedService.pricing.minUSD * selectedScale.multiplier * selectedTimeline.multiplier);
  const maxUSD = Math.round(selectedService.pricing.maxUSD * selectedScale.multiplier * selectedTimeline.multiplier);

  const estDays = Math.round(selectedScale.timelineDays / selectedTimeline.multiplier);

  const formatINR = (val: number) => `₹${val.toLocaleString("en-IN")}`;
  const formatUSD = (val: number) => `$${val.toLocaleString("en-US")}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scopeSummaryText =
    `KamiyTech Strategy Discovery Request:\n` +
    `• Client: ${formData.name || "Client"}\n` +
    `• Service: ${selectedService.title}\n` +
    `• Scale Scope: ${selectedScale.name}\n` +
    `• Delivery Urgency: ${selectedTimeline.name}\n` +
    `• Estimated Budget: ${formatINR(minINR)} – ${formatINR(maxINR)} (${formatUSD(minUSD)} – ${formatUSD(maxUSD)})\n` +
    `• SLA Timeline Target: ~${estDays} Days\n` +
    (formData.message ? `• Brief: ${formData.message}` : "");

  const whatsappMsg = encodeURIComponent(
    `Hello Ankit! I requested a Technical Strategy Consultation on KamiyTech.com:\n\n${scopeSummaryText}\n\nLooking forward to discussing our project architecture!`
  );

  const handleCopySummary = () => {
    navigator.clipboard.writeText(scopeSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      {/* Glassmorphic Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-[#0B0F17]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl bg-[#161E2E] border border-white/10 rounded-2xl shadow-[0_16px_60px_rgba(0,240,255,0.12)] overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Top Header Banner */}
        <div className="relative p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-[#161E2E] via-[#0B0F17] to-[#161E2E] shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-[#00F0FF] rounded-full hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00F0FF]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B0F17] border border-[#00F0FF]/30 rounded-full text-xs text-[#00F0FF] font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>EXECUTIVE TECHNICAL DISCOVERY</span>
            </div>
            <h2 id={titleId} className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {submitted ? "Strategy Session Booked!" : "Schedule Architecture & Strategy Session"}
            </h2>
            <p id={descriptionId} className="text-xs sm:text-sm text-[#9CA3AF]">
              Configure your project scope, compute live cost estimates, and connect directly with our engineering leaders in Indore.
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 custom-scrollbar">
          {submitted ? (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center mx-auto text-[#10B981] shadow-lg shadow-[#10B981]/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Consultation Scope Received</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Ankit Vaja (Co-Founder & Business Manager) will review your scope and respond within <span className="text-[#00F0FF] font-semibold">4 hours</span>.
                </p>
              </div>

              {/* Scope Summary Preview Box */}
              <div className="bg-[#0B0F17] p-5 rounded-xl border border-white/10 text-left space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[#9CA3AF]">
                  <span className="font-semibold text-white">PROJECT ESTIMATION SUMMARY</span>
                  <button
                    onClick={handleCopySummary}
                    className="flex items-center space-x-1 text-[#00F0FF] hover:underline focus:outline-none"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy Scope"}</span>
                  </button>
                </div>
                <div className="space-y-1.5 text-white/90">
                  <p><span className="text-[#9CA3AF]">Service:</span> {selectedService.title}</p>
                  <p><span className="text-[#9CA3AF]">Scope Scale:</span> {selectedScale.name}</p>
                  <p><span className="text-[#9CA3AF]">Estimated Budget:</span> <span className="text-[#00F0FF] font-semibold">{formatINR(minINR)} – {formatINR(maxINR)}</span> ({formatUSD(minUSD)} – {formatUSD(maxUSD)})</p>
                  <p><span className="text-[#9CA3AF]">Target Timeline:</span> ~{estDays} Days</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/919977858817?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-[#10B981]/25 hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Instant Chat on WhatsApp
                </a>
                <Button onClick={onClose} variant="outline" size="md" className="w-full sm:w-auto">
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            /* Interactive Form & Scope Configuration */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Scope Selector & Form Inputs */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
                {/* 1. Core Service Selector Pills */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-[#00F0FF]" />
                    <span>1. Select Core Requirement *</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES_CATALOG.map((service) => {
                      const isSelected = selectedService.id === service.id;
                      return (
                        <button
                          type="button"
                          key={service.id}
                          onClick={() => setSelectedService(service)}
                          className={`p-3 rounded-xl text-left text-xs font-medium transition-all border cursor-pointer ${
                            isSelected
                              ? "bg-[#00F0FF]/10 border-[#00F0FF] text-white shadow-md shadow-[#00F0FF]/10"
                              : "bg-[#0B0F17] border-white/10 text-[#9CA3AF] hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <div className="font-bold text-white mb-0.5">{service.categoryLabel}</div>
                          <div className="text-[11px] text-[#9CA3AF] truncate">{service.shortTech}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Project Scope Scale & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Scope Complexity */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">
                      2. Project Scale / Complexity
                    </label>
                    <div className="space-y-2">
                      {ESTIMATION_SCALE_OPTIONS.map((scale) => (
                        <button
                          type="button"
                          key={scale.id}
                          onClick={() => setSelectedScale(scale)}
                          className={`w-full p-2.5 rounded-lg text-left text-xs transition-all border ${
                            selectedScale.id === scale.id
                              ? "bg-[#4F46E5]/20 border-[#4F46E5] text-white"
                              : "bg-[#0B0F17] border-white/10 text-[#9CA3AF] hover:text-white"
                          }`}
                        >
                          <div className="font-bold">{scale.name}</div>
                          <div className="text-[10px] text-[#9CA3AF]">{scale.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Urgency */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">
                      3. Delivery Cadence
                    </label>
                    <div className="space-y-2">
                      {ESTIMATION_TIMELINE_OPTIONS.map((time) => (
                        <button
                          type="button"
                          key={time.id}
                          onClick={() => setSelectedTimeline(time)}
                          className={`w-full p-2.5 rounded-lg text-left text-xs transition-all border ${
                            selectedTimeline.id === time.id
                              ? "bg-[#00F0FF]/15 border-[#00F0FF] text-white"
                              : "bg-[#0B0F17] border-white/10 text-[#9CA3AF] hover:text-white"
                          }`}
                        >
                          <div className="font-bold">{time.name}</div>
                          <div className="text-[10px] text-[#9CA3AF]">{time.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Information Fields */}
                <div className="pt-2 border-t border-white/10 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Abhishek Chedwal"
                        className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">
                        WhatsApp / Mobile Line *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9977858817"
                        className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">
                        Company Name / Startup
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Brand Name"
                        className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">
                      Project Brief & Technical Goals
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your business goals, target audience, or desired launch timeline..."
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                    ></textarea>
                  </div>
                </div>

                {/* Executive Protection Reassurance Tag */}
                <div className="flex items-center space-x-2 text-[11px] text-[#9CA3AF] bg-[#0B0F17] p-3 rounded-xl border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[#00F0FF] shrink-0" />
                  <span>100% IP Source Code Handover | 18% GST Input Credit Claimable | 4-Hour Response SLA</span>
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" /> Request Strategy Session & Quote
                  </Button>
                </div>
              </form>

              {/* Right Column: Live Dynamic Estimation Summary Card */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="bg-[#0B0F17] border border-white/10 rounded-2xl p-6 space-y-6 sticky top-0 flex-1 flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center space-x-2 text-xs font-semibold text-[#00F0FF] border-b border-white/10 pb-3">
                      <Calculator className="w-4 h-4" />
                      <span>LIVE ESTIMATION SUMMARY</span>
                    </div>

                    {/* Service Selected */}
                    <div>
                      <div className="text-xs text-[#9CA3AF]">Selected Capability:</div>
                      <div className="text-base font-bold text-white">{selectedService.title}</div>
                      <div className="text-xs text-[#00F0FF] font-mono mt-0.5">{selectedService.shortTech}</div>
                    </div>

                    {/* Calculated Price Display */}
                    <div className="p-4 rounded-xl bg-[#161E2E] border border-[#00F0FF]/30 space-y-2">
                      <div className="text-xs text-[#9CA3AF] font-medium">Estimated Project Investment:</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {formatINR(minINR)} <span className="text-sm font-normal text-[#9CA3AF]">–</span> {formatINR(maxINR)}
                      </div>
                      <div className="text-xs text-[#00F0FF] font-mono">
                        Global Equivalent: {formatUSD(minUSD)} – {formatUSD(maxUSD)}
                      </div>
                    </div>

                    {/* Timeline Target */}
                    <div className="flex items-center justify-between text-xs bg-[#161E2E]/60 p-3 rounded-lg border border-white/5">
                      <span className="flex items-center text-[#9CA3AF]">
                        <Clock className="w-3.5 h-3.5 mr-1.5 text-[#00F0FF]" /> Estimated Delivery:
                      </span>
                      <span className="font-bold text-white font-mono">~{estDays} Business Days</span>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-semibold text-[#9CA3AF] uppercase">Included SLA Deliverables:</div>
                      <div className="space-y-2 text-xs text-[#9CA3AF]">
                        {selectedService.architecture.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <Zap className="w-3.5 h-3.5 text-[#00F0FF] mr-2 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Teaser */}
                  <div className="pt-4 border-t border-white/10 text-center space-y-1">
                    <p className="text-[11px] text-[#9CA3AF]">Need immediate custom architecture scope?</p>
                    <a
                      href="tel:+919977858817"
                      className="text-xs font-bold text-[#00F0FF] hover:underline inline-block"
                    >
                      Call Ankit Vaja: +91 9977858817
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
