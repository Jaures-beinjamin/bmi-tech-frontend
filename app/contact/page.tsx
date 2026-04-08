import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact – BMI Technologies",
  description:
    "Contact e-mail de BMI Technologies pour vos besoins en développement logiciel, matériel et solutions intelligentes sur mesure depuis Baulmes, Suisse.",
};

export default function ContactPage() {
  return <ContactContent />;
}
