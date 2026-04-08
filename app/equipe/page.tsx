import type { Metadata } from "next";
import EquipeContent from "@/components/EquipeContent";

export const metadata: Metadata = {
  title: "Équipe – BMI Technologies",
  description:
    "Découvrez l'équipe de BMI Technologies, structure suisse indépendante pilotée par Roland Burgermeister à Baulmes, spécialisée en développement logiciel, matériel et solutions intelligentes.",
};

export default function EquipePage() {
  return <EquipeContent />;
}