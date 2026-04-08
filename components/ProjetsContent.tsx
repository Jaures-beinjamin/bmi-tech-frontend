"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRightRegular } from "@fluentui/react-icons";
import { useReveal } from "@/hooks/useReveal";
import ProjectCard from "@/components/ProjectCard";

const featured = {
  title: "Le Turc – Robot joueur d'échecs",
  description:
    "Le projet phare de BMI Technologies : un automate robotique inspiré du légendaire Turc mécanique de Wolfgang von Kempelen (1769). Capable de voir les pièces sur l'échiquier via vision par ordinateur, de calculer le coup optimal avec Stockfish et de les déplacer physiquement grâce à un bras articulé à 6 degrés de liberté.",
  badges: ["Robotique", "Vision par ordinateur", "Mécatronique", "Stockfish IA", "Arduino / RPi"],
  href: "/projets/turc",
  emoji: "♟️",
};

const otherProjects = [
  {
    title: "Interface de jeu web",
    description:
      "Application web temps réel permettant de jouer contre le robot à distance, visualiser l'échiquier en direct et analyser les parties coup par coup.",
    badges: ["Next.js", "WebSockets", "ASP.NET Core"],
    href: "/projets/turc",
    emoji: "🌐",
  },
  {
    title: "Moteur de vision",
    description:
      "Pipeline de traitement d'image basé sur OpenCV pour la détection et la localisation des pièces d'échecs en temps réel avec une précision sub-centimétrique.",
    badges: ["OpenCV", "Python", "Computer Vision"],
    href: "/projets/turc",
    emoji: "👁️",
  },
  {
    title: "Contrôle du bras robotique",
    description:
      "Firmware embarqué pour le contrôle d'un bras articulé 6 DDL : planification de trajectoires, gestion des collisions et interface de commande haut-niveau.",
    badges: ["C++", "Embarqué", "Cinématique"],
    href: "/projets/turc",
    emoji: "🦾",
  },
];

const stats = [
  { value: "2 500+", label: "heures de R&D" },
  { value: "6 DDL", label: "degrés de liberté" },
  { value: "< 2 s", label: "temps de coup" },
  { value: "100 %", label: "règles FIDE" },
];

export default function ProjetsContent() {
  const heroRef = useReveal(0.1);
  const featuredRef = useReveal(0.1);
  const gridRef = useReveal(0.1);
  const ctaRef = useReveal(0.1);

  return (
    <div className="min-h-screen bg-[var(--background)]">

      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative overflow-hidden py-28 px-6"
        style={{ background: "var(--brand-section-bg)" }}
      >
        {/* Orbes décoratifs */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full blur-3xl"
            style={{ background: "var(--brand-blue)", opacity: "var(--brand-section-orb-opacity)" }}
          />
          <div
            className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-3xl"
            style={{ background: "var(--brand-red)", opacity: "var(--brand-section-orb-opacity)" }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Badge + titre */}
          <div className="reveal mb-12 max-w-3xl">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5 border"
              style={{
                background: "var(--brand-section-badge-bg)",
                color: "var(--brand-section-badge-color)",
                borderColor: "var(--brand-section-badge-border)",
              }}
            >
              Portfolio · BMI Technologies
            </span>
            <h1
              className="text-5xl font-bold mb-5 leading-tight lg:text-6xl"
              style={{ color: "var(--brand-section-text)" }}
            >
              Nos projets
            </h1>
            <p
              className="text-xl leading-relaxed max-w-2xl"
              style={{ color: "var(--brand-section-secondary)" }}
            >
              Des innovations concrètes à la croisée de la robotique, de
              l&apos;intelligence artificielle et de l&apos;électronique.
              Chaque projet naît d&apos;une seule passion : repousser les limites
              du possible.
            </p>
          </div>

          {/* Stats */}
          <div className="reveal delay-200 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl px-5 py-4 backdrop-blur-sm"
                style={{
                  background: "var(--brand-section-ghost-bg)",
                  border: "1px solid var(--brand-section-ghost-border)",
                }}
              >
                <div
                  className="text-2xl font-bold mb-0.5"
                  style={{ color: "var(--brand-section-text)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--brand-section-secondary)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PROJET PHARE — Le Turc
      ════════════════════════════════════════════ */}
      <section
        ref={featuredRef as React.RefObject<HTMLElement>}
        className="px-6 py-20"
        style={{ background: "var(--surface-0)" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="reveal flex items-center gap-3 mb-10">
            <span
              className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
              style={{ background: "var(--brand-red-light)", color: "var(--brand-red)" }}
            >
              Projet phare
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
          </div>

          <Link href={featured.href} className="group block reveal delay-100">
            <div
              className="grid items-stretch overflow-hidden rounded-3xl transition-all duration-300 group-hover:-translate-y-1 lg:grid-cols-5"
              style={{
                border: "1px solid var(--border-default)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 32px 64px rgba(192,0,26,0.14), 0 8px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.06)";
              }}
            >
              {/* Visuel */}
              <div
                className="lg:col-span-2 flex items-center justify-center py-16 px-8"
                style={{
                  background: "linear-gradient(135deg, var(--brand-blue-light), var(--surface-2))",
                  minHeight: "280px",
                }}
              >
                <span className="text-[120px] select-none transition-transform duration-500 group-hover:scale-110 leading-none">
                  ♟️
                </span>
              </div>

              {/* Contenu */}
              <div
                className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center"
                style={{ background: "var(--surface-0)" }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "var(--brand-blue)" }}
                >
                  Robotique · Vision IA · Mécatronique
                </div>
                <h2
                  className="text-3xl font-bold mb-4 lg:text-4xl"
                  style={{ color: "var(--foreground)" }}
                >
                  {featured.title}
                </h2>
                <p
                  className="text-base leading-relaxed mb-7"
                  style={{ color: "var(--secondary)" }}
                >
                  {featured.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: "var(--brand-blue-light)",
                        color: "var(--brand-blue)",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div
                  className="inline-flex w-fit items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity group-hover:opacity-90"
                  style={{ background: "var(--brand-blue)" }}
                >
                  Découvrir le projet
                  <ArrowRightRegular
                    fontSize={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          GRILLE DES AUTRES PROJETS
      ════════════════════════════════════════════ */}
      <section
        ref={gridRef as React.RefObject<HTMLElement>}
        className="px-6 py-20"
        style={{ background: "var(--surface-1)" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="reveal flex items-center gap-3 mb-10">
            <span
              className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
              style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
            >
              Modules & composants
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
          </div>

          <div className="reveal delay-100 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA FINAL
      ════════════════════════════════════════════ */}
      <section
        ref={ctaRef as React.RefObject<HTMLElement>}
        className="relative overflow-hidden px-6 py-24"
        style={{ background: "var(--brand-section-bg)" }}
      >
        {/* Orbe */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full blur-3xl"
            style={{ background: "var(--brand-blue)", opacity: "var(--brand-section-orb-opacity)" }}
          />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <div className="reveal">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5 border"
              style={{
                background: "var(--brand-section-badge-bg)",
                color: "var(--brand-section-badge-color)",
                borderColor: "var(--brand-section-badge-border)",
              }}
            >
              Collaboration
            </span>
            <h2
              className="text-3xl font-bold mb-4 lg:text-4xl"
              style={{ color: "var(--brand-section-text)" }}
            >
              Vous avez un projet ambitieux ?
            </h2>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "var(--brand-section-secondary)" }}
            >
              BMI Technologies est ouverte à la collaboration sur des projets
              innovants en robotique, vision par ordinateur ou développement
              logiciel.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--brand-blue)" }}
              >
                Nous contacter
                <ArrowRightRegular fontSize={16} />
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors"
                style={{
                  background: "var(--brand-section-ghost-bg)",
                  color: "var(--brand-section-ghost-color)",
                  border: "1px solid var(--brand-section-ghost-border)",
                }}
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
