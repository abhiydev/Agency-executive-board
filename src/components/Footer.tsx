import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0F17] border-t border-white/10 pt-16 pb-12 text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="relative h-10 w-44">
              <Image
                src="/assets/logo/logo.svg"
                alt="KamiyTech Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#9CA3AF]">
              Next-gen technology consultancy engineering custom software, high-performance web platforms, cross-platform mobile apps, and AI business automation.
            </p>
            <div className="flex items-center space-x-2 text-xs text-[#00F0FF] bg-[#161E2E] px-3 py-1.5 rounded-full border border-white/10 w-fit">
              <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
              <span>Registered HQ | GST 18% Compliant</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-[#00F0FF] transition-colors">
                  Web Applications (Next.js)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00F0FF] transition-colors">
                  Custom Software & Backends
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00F0FF] transition-colors">
                  AI & Workflow Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00F0FF] transition-colors">
                  Mobile Apps (React Native)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00F0FF] transition-colors">
                  Marketing & SEO Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links Column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-[#00F0FF] transition-colors">
                  Meet Our Team
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#00F0FF] transition-colors">
                  Project Cost Estimator
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#00F0FF] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00F0FF] transition-colors">
                  Schedule Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Registered Office HQ
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>
                  1/32, behind SICA School Road, Vijay Nagar, Scheme No 54, Indore, MP 452010, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00F0FF] shrink-0" />
                <a
                  href="https://wa.me/919977858817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00F0FF] transition-colors font-medium text-white"
                >
                  +91 9977858817 <span className="text-xs text-[#9CA3AF] font-normal">(Ankit Vaja)</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00F0FF] shrink-0" />
                <a href="mailto:contact@kamiytech.com" className="hover:text-[#00F0FF] transition-colors">
                  contact@kamiytech.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-[#00F0FF] shrink-0" />
                <span>https://KamiyTech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} KamiyTech AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Enterprise Code Standards</span>
            <span>Zero Technical Debt</span>
            <span>Strict IP Confidentiality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
