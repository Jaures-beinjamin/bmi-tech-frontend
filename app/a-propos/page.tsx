import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "À propos – BMI Technologies",
  description:
    "Présentation de BMI Technologies, entreprise suisse indépendante basée à Baulmes (VD), spécialisée en développement logiciel, matériel et solutions intelligentes sur mesure.",
};

export default function AProposPage() {
  return <AboutContent />;
}

