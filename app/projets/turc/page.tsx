import type { Metadata } from "next";
import TurcContent from "@/components/TurcContent";

export const metadata: Metadata = {
  title: "Le Turc – Robot joueur d'échecs",
  description:
    "Le projet phare de BMI Technologies : un automate robotique joueur d'échecs inspiré du Turc mécanique.",
};

export default function TurcPage() {
  return <TurcContent />;
}
