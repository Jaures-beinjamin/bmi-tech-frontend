import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BMI Technologies – Services informatiques · Baulmes, Suisse",
    template: "%s · BMI Technologies",
  },
  description:
    "BMI Technologies est une entreprise suisse de services informatiques spécialisée dans le développement logiciel, le matériel intelligent et les solutions sur mesure. Le Turc en est le projet vitrine.",
  keywords: ["services informatiques", "développement logiciel", "développement matériel", "solutions intelligentes", "Baulmes", "Suisse", "Le Turc"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
