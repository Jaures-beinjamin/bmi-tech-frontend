import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import TechSection from "@/components/TechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactCTA from "@/components/ContactCTA";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "BMI Technologies Roland Burgermeister, startup suisse spécialisée en robotique. Découvrez notre robot joueur d'échecs inspiré du Turc mécanique.",
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
