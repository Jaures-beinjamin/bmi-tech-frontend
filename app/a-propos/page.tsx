import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "À propos – BMI Technologies",
  description:
    "Présentation de BMI Technologies Roland Burgermeister, raison individuelle suisse basée à Baulmes (VD). Portrait du fondateur et histoire de la startup.",
};

export default function AProposPage() {
  return <AboutContent />;
}

