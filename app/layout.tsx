import type { Metadata } from "next";
import { DM_Sans, Inter, Poppins } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      className={`${dmSans.variable} ${inter.variable} ${poppins.variable} ${GeistMono.variable} h-full antialiased`}
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
