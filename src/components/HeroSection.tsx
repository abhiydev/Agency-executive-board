import React from "react";
import { Button } from "./Button";
import { Zap, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0F17]">
      {/* Glow Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00F0FF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-[#4F46E5]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge Tag */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#161E2E] border border-white/10 text-xs font-semibold tracking-wide text-[#00F0FF]">
            <Zap className="w-4 h-4 fill-[#00F0FF] text-[#00F0FF]" />
            <span>NEXT-GEN TECHNOLOGY CONSULTANCY & AI AGENCY</span>
          </div>

          {/* Hero Headline (H1) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            We Design, Build & Automate Digital Products That{" "}
            <span className="kamiy-text-gradient">Scale Your Business.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
            From enterprise Next.js web platforms and cross-platform mobile apps to bespoke AI automation workflows and organic SEO growth—KamiyTech delivers enterprise engineering standards with agency speed.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button href="#estimator" variant="primary" size="lg" className="w-full sm:w-auto">
              Calculate Project Cost <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
            <Button href="#services" variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Service Offerings
            </Button>
          </div>

          {/* Trust Counter Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10 mt-12">
            <div className="p-4 rounded-xl bg-[#161E2E]/50 border border-white/5">
              <div className="flex items-center justify-center space-x-2 text-[#00F0FF]">
                <Clock className="w-5 h-5" />
                <span className="text-2xl font-bold text-white">&lt;1.5s</span>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-1 font-medium">Global Load Speed</p>
            </div>

            <div className="p-4 rounded-xl bg-[#161E2E]/50 border border-white/5">
              <div className="flex items-center justify-center space-x-2 text-[#00F0FF]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-2xl font-bold text-white">99.9%</span>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-1 font-medium">Uptime Guarantee</p>
            </div>

            <div className="p-4 rounded-xl bg-[#161E2E]/50 border border-white/5">
              <div className="flex items-center justify-center space-x-2 text-[#00F0FF]">
                <Zap className="w-5 h-5" />
                <span className="text-2xl font-bold text-white">50%+</span>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-1 font-medium">Hours Saved via AI</p>
            </div>

            <div className="p-4 rounded-xl bg-[#161E2E]/50 border border-white/5">
              <div className="flex items-center justify-center space-x-2 text-[#00F0FF]">
                <Award className="w-5 h-5" />
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-1 font-medium">IP Ownership Handover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
