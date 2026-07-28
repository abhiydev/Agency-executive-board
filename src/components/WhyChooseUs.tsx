import React from "react";
import { GlassCard } from "./GlassCard";
import { ShieldCheck, Cpu, DollarSign, Layers } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00F0FF]" />,
      title: "Enterprise Code Quality",
      description:
        "Strict TypeScript enforcement, CI/CD automated testing, zero technical debt, and 100% intellectual property ownership transfer upon completion.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#00F0FF]" />,
      title: "AI-First Workflow Engineering",
      description:
        "We don't just build websites; we integrate autonomous AI agents and automated data pipelines that eliminate 50%+ of manual operational hours.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#00F0FF]" />,
      title: "Transparent Fixed Pricing",
      description:
        "Clear domestic INR rate card pricing with 18% GST itemization. Predictable 40/30/30 or 50/50 milestone billing with zero hidden cost surprises.",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#00F0FF]" />,
      title: "Partner-Backed Scale",
      description:
        "Direct access to executive tech leadership backed by specialized partner pods for seamless scaling across web, mobile, AI, and SEO.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#00F0FF] uppercase block">
            The KamiyTech Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Growing Companies Partner With Us
          </h2>
          <p className="text-base text-[#9CA3AF]">
            Engineering standards that protect your capital and deliver measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => (
            <GlassCard key={index} className="flex space-x-6 items-start">
              <div className="p-3 bg-[#161E2E] rounded-xl border border-white/10 shrink-0">
                {diff.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {diff.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
