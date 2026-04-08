import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact – BMI Technologies",
  description:
    "Contactez BMI Technologies Roland Burgermeister pour des partenariats, démonstrations ou toute question relative au robot joueur d'échecs Le Turc.",
};

export default function ContactPage() {
  return <ContactContent />;
}
