"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Menu, X, PhoneCall } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Vector Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative h-10 w-44">
            <Image
              src="/assets/logo/logo.svg"
              alt="KamiyTech Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          <a
            href="#services"
            className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF] transition-colors"
          >
            Services
          </a>
          <a
            href="#casestudies"
            className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF] transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#about"
            className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF] transition-colors"
          >
            Team
          </a>
          <a
            href="#testimonials"
            className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF] transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#estimator"
            className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF] transition-colors"
          >
            Estimator
          </a>
          <a
            href="#faq"
            className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF] transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button href="#contact" variant="primary" size="sm">
            <PhoneCall className="w-4 h-4 mr-2 inline" />
            Schedule Strategy Call
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9CA3AF] hover:text-[#00F0FF] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161E2E] border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF]"
          >
            Services
          </a>
          <a
            href="#casestudies"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF]"
          >
            Case Studies
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF]"
          >
            Team
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF]"
          >
            Testimonials
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF]"
          >
            Cost Estimator
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF]"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#00F0FF]"
          >
            Contact
          </a>
          <div className="pt-3">
            <Button href="#contact" variant="primary" size="md" className="w-full">
              Schedule Strategy Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
