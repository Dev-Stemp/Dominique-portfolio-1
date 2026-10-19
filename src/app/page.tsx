import ThemeToggle from "@/src/components/shared/theme-toggle";
import Navbar from "@/src/components/layout/navbar";
import BackToTopButton from "@/src/components/back-to-top-button";
import Footer from "@/src/components/layout/footer";
import HeroSection from "@/src/components/sections/hero-section";
import AboutSection from "@/src/components/sections/about-section";
import SkillsSection from "@/src/components/sections/skills-section";
import ProjectsSection from "@/src/components/sections/projects-section";
import ExperienceSection from "@/src/components/sections/experience-section";
import ContactSection from "@/src/components/sections/contact-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <BackToTopButton />
      <Footer/>
    </main>
  );
}