"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SystemThinkerSection from "@/components/SystemThinkerSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* Divider */}
      <div className="gradient-line mx-6" />

      <AboutSection />
      <div className="gradient-line mx-6" />

      <EducationSection />
      <div className="gradient-line mx-6" />

      <SkillsSection />
      <div className="gradient-line mx-6" />

      <ProjectsSection />
      <div className="gradient-line mx-6" />

      <SystemThinkerSection />
      <div className="gradient-line mx-6" />

      <AchievementsSection />
      <div className="gradient-line mx-6" />

      <ContactSection />

      <Footer />
    </main>
  );
}
