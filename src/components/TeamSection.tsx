import React from "react";
import { GlassCard } from "./GlassCard";
import { UserCheck, Shield, Phone, TrendingUp } from "lucide-react";

export const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Abhishek Chedwal",
      role: "Founder & CEO / CTO",
      icon: <Shield className="w-6 h-6 text-[#00F0FF]" />,
      bio: "Leading KamiyTech's executive vision, software architecture, technical engineering operations, and AI system design.",
      badge: "Executive & Tech Lead",
    },
    {
      name: "Ankit Vaja",
      role: "Co-Founder & Business Manager",
      icon: <UserCheck className="w-6 h-6 text-[#00F0FF]" />,
      bio: "Driving commercial operations, business development, client success, project delivery governance, and strategic payouts.",
      phone: "+91 9977858817",
      badge: "Commercial & Business Lead",
    },
    {
      name: "Sahil Dhameliya",
      role: "Marketing & SEO Specialist",
      icon: <TrendingUp className="w-6 h-6 text-[#00F0FF]" />,
      bio: "Spearheading brand authority, search engine optimization (SEO), B2B content engines, and inbound lead generation for KamiyTech and clients.",
      badge: "Marketing & SEO Lead",
    },
    {
      name: "Vaidehi Gupta",
      role: "Business Executive",
      icon: <Phone className="w-6 h-6 text-[#00F0FF]" />,
      bio: "Managing client discovery, lead qualification, operational onboarding, client relationships, and service delivery coordination.",
      badge: "Business Operations",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-[#00F0FF] uppercase">
            Leadership & Team Directory
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet Our Core Leadership Pod
          </p>
          <p className="text-base text-[#9CA3AF]">
            Senior engineering leaders, commercial directors, and growth strategists driving digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <GlassCard key={index} className="flex flex-col justify-between h-full text-center items-center">
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#161E2E] border border-white/10 flex items-center justify-center text-[#00F0FF] shadow-lg">
                  {member.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#00F0FF] font-mono">
                    {member.role}
                  </p>
                </div>
                <span className="inline-block px-3 py-1 bg-[#161E2E] border border-white/10 rounded-full text-[10px] text-[#9CA3AF] font-medium">
                  {member.badge}
                </span>
                <p className="text-xs text-[#9CA3AF] leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>

              {member.phone && (
                <div className="w-full pt-4 border-t border-white/10 mt-6 text-center">
                  <a
                    href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#00F0FF] hover:underline font-semibold"
                  >
                    <span>Direct: {member.phone}</span>
                  </a>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
