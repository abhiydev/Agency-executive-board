import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProjectCostEstimator } from "@/components/ProjectCostEstimator";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-[#F9FAFB]">
      <Navbar />
      <HeroSection />
      <ServicesShowcase />
      <CaseStudiesSection />
      <WhyChooseUs />
      <TeamSection />
      <TestimonialsSection />
      <ProjectCostEstimator />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
