"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightRegular, ChessRegular } from "@fluentui/react-icons";

export default function HeroBanner() {
  return (
    <section
      className="relative min-h-[92vh] overflow-hidden flex items-center"
      style={{ background: "var(--brand-section-bg)" }}
    >

      {/* ── Fond animé : orbes sur fond sombre ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--brand-blue) 0%, transparent 65%)", opacity: "var(--brand-section-orb-opacity)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--brand-red) 0%, transparent 65%)", opacity: "var(--brand-section-orb-opacity)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(color-mix(in srgb, var(--brand-section-text) 18%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--brand-section-text) 18%, transparent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent 0%, var(--brand-blue) 30%, var(--brand-blue) 70%, transparent 100%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-28 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── Texte ── */}
          <div>
            <div className="animate-fade-in">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-7"
                style={{
                  background: "var(--brand-section-badge-bg)",
                  color: "var(--brand-section-badge-color)",
                  border: "1px solid var(--brand-section-badge-border)",
                }}
              >
                Services informatiques suisses · Baulmes, VD
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl xl:text-7xl mb-6" style={{ color: "var(--brand-section-text)" }}>
              Logiciel.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, var(--brand-blue), var(--brand-red))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Matériel.
              </span>
              <br />
              <span style={{ color: "var(--brand-section-text)" }}>Solutions intelligentes.</span>
            </h1>

            <p className="animate-fade-up delay-200 text-lg leading-relaxed mb-10 max-w-xl" style={{ color: "var(--brand-section-secondary)" }}>
              BMI Technologies conçoit des solutions personnalisées mêlant
              développement logiciel, électronique, systèmes embarqués et
              automatisation. L&apos;entreprise est basée à Baulmes, dans le canton
              de Vaud, et agit comme entité suisse indépendante.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-14">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
                  boxShadow: "0 8px 24px rgba(192,0,26,0.32)",
                }}
              >
                Découvrir l&apos;entreprise
              </Link>
              <Link
                href="/projets/turc"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--brand-section-ghost-bg)",
                  color: "var(--brand-section-ghost-color)",
                  border: "1px solid var(--brand-section-ghost-border)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <ChessRegular fontSize={18} />
                Voir le projet Le Turc <ArrowRightRegular fontSize={18} />
              </Link>
            </div>

            <div className="animate-fade-up delay-400 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Développement logiciel",
                  label: "Applications métier, APIs et outils sur mesure",
                },
                {
                  title: "Développement matériel",
                  label: "Prototypes, électronique et intégration embarquée",
                },
                {
                  title: "Ancrage suisse",
                  label: "Baulmes, Vaud — Suisse",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-5 py-4"
                  style={{
                    background: "var(--brand-section-ghost-bg)",
                    border: "1px solid var(--brand-section-ghost-border)",
                  }}
                >
                  <div className="text-sm font-bold mb-1" style={{ color: "var(--brand-section-text)" }}>
                    {s.title}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--brand-section-secondary)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Visuel : collage photos ── */}
          <div className="animate-scale-in delay-200 relative flex justify-center items-center">

            {/* Collage 3 photos flottant */}
            <div
              className="animate-float relative flex gap-3"
              style={{ width: 340 }}
            >
              {/* Photo principale – colonne gauche */}
              <div
                className="relative rounded-2xl overflow-hidden flex-shrink-0"
                style={{
                  flex: 3,
                  height: 300,
                  border: "2px solid rgba(192,0,26,0.65)",
                  boxShadow: "0 20px 60px rgba(192,0,26,0.30), 0 8px 24px rgba(0,0,0,0.50)",
                }}
              >
                <Image
                  src="/img/photo_2026-04-08_02-19-25.jpg"
                  alt="Projet vitrine Le Turc par BMI Technologies"
                  fill
                  className="object-cover"
                  priority
                  sizes="192px"
                />
              </div>

              {/* Colonne droite : 2 petites photos */}
              <div className="flex flex-col gap-3" style={{ flex: 2 }}>
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    height: 142,
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src="/img/photo_2026-04-08_02-20-00.jpg"
                    alt="Détail du projet Le Turc"
                    fill
                    className="object-cover"
                    sizes="124px"
                  />
                </div>
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    height: 142,
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src="/img/photo_2026-04-08_02-20-17.jpg"
                    alt="Détail du projet Le Turc"
                    fill
                    className="object-cover"
                    sizes="124px"
                  />
                </div>
              </div>

              {/* Badge flottant bas-droite */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl px-4 py-3 shadow-2xl animate-fade-up delay-500"
                style={{
                  background: "var(--brand-section-ghost-bg)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--brand-section-ghost-border)",
                }}
              >
                <div className="text-xs font-bold" style={{ color: "var(--brand-section-text)" }}>Projet vitrine</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--brand-section-secondary)" }}>Le Turc · Robotique appliquée</div>
              </div>

              {/* Badge flottant haut-gauche */}
              <div
                className="absolute -top-5 -left-5 rounded-2xl px-3 py-2 shadow-2xl animate-fade-up delay-600"
                style={{
                  background: "var(--brand-section-ghost-bg)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--brand-section-badge-border)",
                }}
              >
                <div className="text-xs font-bold" style={{ color: "var(--brand-section-text)" }}>Entreprise suisse</div>
                <div className="text-xs" style={{ color: "var(--brand-section-secondary)" }}>Logiciel · Matériel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--brand-section-secondary)" }}>Scroll</span>
        <div className="w-px h-10 relative overflow-hidden" style={{ background: "color-mix(in srgb, var(--brand-section-text) 18%, transparent)" }}>
          <div
            className="absolute top-0 left-0 w-full h-1/2"
            style={{ background: "var(--brand-blue)", animation: "fade-up 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
