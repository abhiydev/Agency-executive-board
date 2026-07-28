"use client";

import React, { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Button } from "./Button";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Applications (Next.js)",
    budget: "₹35,000 – ₹2,20,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-[#00F0FF] uppercase">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule a Strategy Session
          </p>
          <p className="text-base text-[#9CA3AF]">
            Discuss your software roadmap, web platform, or AI automation goals with our executive team in Indore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <GlassCard>
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center mx-auto text-[#10B981]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Strategy Call Requested!</h3>
                  <p className="text-sm text-[#9CA3AF] max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Ankit Vaja (Co-Founder & Business Manager) will review your project details and respond within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Abhishek Chedwal"
                        className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00F0FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00F0FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9977858817"
                        className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00F0FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#9CA3AF] uppercase mb-2">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00F0FF]"
                      >
                        <option>Web Applications (Next.js)</option>
                        <option>Custom Software & SaaS (FastAPI / Node)</option>
                        <option>AI & Workflow Automation</option>
                        <option>Mobile Apps (React Native)</option>
                        <option>Marketing & SEO Growth</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9CA3AF] uppercase mb-2">
                      Project Requirements & Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project goals, timelines, or requirements..."
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00F0FF]"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" /> Request Strategy Session
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

          {/* Contact Details & WhatsApp Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Highlight Box */}
            <div className="p-6 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center text-white font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Direct WhatsApp Support</h4>
                  <p className="text-xs text-[#9CA3AF]">Instant reply from Business Operations</p>
                </div>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Need quick scoping or immediate assistance? Chat directly with Ankit Vaja (Co-Founder & Business Manager).
              </p>
              <a
                href="https://wa.me/919977858817"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded-lg text-sm transition-all"
              >
                Chat on WhatsApp (+91 9977858817)
              </a>
            </div>

            {/* Corporate Location Details */}
            <GlassCard className="space-y-4">
              <h4 className="text-white font-bold text-base border-b border-white/10 pb-3">
                Registered Headquarters
              </h4>
              <div className="space-y-3 text-sm text-[#9CA3AF]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span>
                    1/32, behind SICA School Road, Vijay Nagar, Scheme No 54, Indore, MP 452010, India
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#00F0FF] shrink-0" />
                  <span className="text-white font-medium">+91 9977858817 (Ankit Vaja)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#00F0FF] shrink-0" />
                  <span>contact@kamiytech.com</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
