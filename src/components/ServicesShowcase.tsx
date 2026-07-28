import React from "react";
import { GlassCard } from "./GlassCard";
import { Globe, Code2, Bot, Smartphone, Search, Database } from "lucide-react";

export const ServicesShowcase: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-[#00F0FF]" />,
      title: "High-Performance Web Platforms",
      tech: "Next.js 15, React 19, TypeScript, Tailwind CSS",
      description:
        "Custom web platforms engineered for ultra-fast load speeds, responsive elegance, and maximum lead conversion. Zero sluggish templates.",
      features: ["Server Components (RSC)", "SEO Pre-rendering", "Headless CMS Integration"],
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#00F0FF]" />,
      title: "Bespoke Custom Software & Backends",
      tech: "Node.js, Python (FastAPI), PostgreSQL, Supabase",
      description:
        "Scalable backend architectures and cloud microservices built for complex business logistics, custom ERPs, and startup SaaS platforms.",
      features: ["REST & GraphQL APIs", "PostgreSQL Optimization", "Role-Based Access Control"],
    },
    {
      icon: <Bot className="w-8 h-8 text-[#00F0FF]" />,
      title: "Enterprise AI & Workflow Automation",
      tech: "OpenAI GPT-4o, Gemini 1.5, LangChain, Custom RAG",
      description:
        "Embed intelligent LLM agents into your company workflows to eliminate repetitive data processing, automate customer support, and synthesize knowledge.",
      features: ["Custom RAG Knowledge Base", "Autonomous Lead Bots", "Document Intelligence"],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#00F0FF]" />,
      title: "Cross-Platform Mobile Applications",
      tech: "React Native, Expo, iOS & Android",
      description:
        "Deliver native iOS and Android experiences with a unified codebase. Seamless offline support, push notifications, and high-performance UI.",
      features: ["Single-Codebase Efficiency", "Native Camera & Push APIs", "Offline Data Sync"],
    },
    {
      icon: <Search className="w-8 h-8 text-[#00F0FF]" />,
      title: "Marketing, SEO & Brand Growth",
      tech: "Technical SEO, Inbound Lead Engines, Content Strategy",
      description:
        "Led by Sahil Dhameliya, our growth team drives brand authority, search engine ranking, and organic lead acquisition for KamiyTech and client accounts.",
      features: ["Technical SEO Audits", "B2B Content Strategy", "Conversion Rate Tuning"],
    },
    {
      icon: <Database className="w-8 h-8 text-[#00F0FF]" />,
      title: "Cloud Infrastructure & Maintenance Retainers",
      tech: "Vercel, AWS, Docker, 24/7 Monitoring",
      description:
        "Keep your digital products operating flawlessly with proactive 24/7 uptime monitoring, security patching, and ongoing SLA retainers.",
      features: ["99.9% Uptime Guarantee", "Proactive Patching", "Itemized Monthly SLA"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-[#00F0FF] uppercase">
            Service Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Digital Product Engineering
          </p>
          <p className="text-base text-[#9CA3AF]">
            We bridge senior technical engineering with strategic business operations to deliver end-to-end digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="p-3 bg-[#161E2E] w-fit rounded-xl border border-white/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-[#00F0FF] font-mono">
                  {service.tech}
                </p>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 space-y-2">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center text-xs text-[#9CA3AF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] mr-2"></span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
