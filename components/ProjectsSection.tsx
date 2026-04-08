"use client";

import { useReveal } from "@/hooks/useReveal";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Le Turc – Robot joueur d'échecs",
    description:
      "Un automate robotique capable de reconnaître les pièces sur l'échiquier, calculer le meilleur coup et les déplacer physiquement. Inspiré du légendaire Turc mécanique de 1769.",
    badges: ["Robotique", "Vision IA", "Mécatronique", "Échecs"],
    href: "/projets/turc",
    emoji: "♟️",
  },
];

export default function ProjectsSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projets"
      className="relative px-6 py-32 overflow-hidden bg-[var(--surface-0)]"
    >
      {/* Décoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--brand-red-light), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: "var(--brand-red-light)", color: "var(--brand-red)" }}
          >
            Projet vitrine
          </span>
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-5">
            Le savoir-faire en démonstration
          </h2>
          <p className="text-xl text-[var(--secondary)] max-w-xl mx-auto leading-relaxed">
            Le Turc illustre la capacité de BMI Technologies à réunir logiciel,
            électronique, vision et mécatronique dans une solution cohérente.
          </p>
        </div>

        <div className="reveal delay-200 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.href} {...p} />
          ))}
        </div>

        <div className="reveal delay-300 mt-12 text-center">
          <a
            href="/projets"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:gap-4"
            style={{
              color: "var(--brand-blue)",
              background: "var(--brand-blue-light)",
            }}
          >
            Explorer le projet Le Turc →
          </a>
        </div>
      </div>
    </section>
  );
}
