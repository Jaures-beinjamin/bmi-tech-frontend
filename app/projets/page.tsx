import type { Metadata } from "next";
import ProjetsContent from "@/components/ProjetsContent";

export const metadata: Metadata = {
  title: "Projets – BMI Technologies",
  description:
    "Découvrez les projets de BMI Technologies : le robot joueur d'échecs Le Turc, le moteur de vision par ordinateur et l'interface web temps réel.",
};

export default function ProjetsPage() {
  return <ProjetsContent />;
}
