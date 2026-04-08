import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import TechSection from "@/components/TechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactCTA from "@/components/ContactCTA";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "BMI Technologies est une entreprise suisse de services informatiques spécialisée dans le développement logiciel, le matériel intelligent et les solutions personnalisées. Le Turc y sert de projet vitrine.",
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <ContactCTA />
    </>
  );
}
