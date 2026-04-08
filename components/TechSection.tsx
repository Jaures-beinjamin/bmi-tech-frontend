"use client";

import { useReveal } from "@/hooks/useReveal";
import {
  EyeRegular,
  BotRegular,
  CodeRegular,
  SettingsRegular,
} from "@fluentui/react-icons";

const features = [
  {
    Icon: EyeRegular,
    title: "Vision artificielle",
    description:
      "Reconnaissance des pièces sur l'échiquier en temps réel grâce à la vision par ordinateur.",
    color: "var(--brand-blue)",
    bg: "var(--brand-blue-light)",
  },
  {
    Icon: BotRegular,
    title: "Mécanique fine",
    description:
      "Bras robotique ultra-précis capable de reproduire les gestes humains sur l'échiquier.",
    color: "var(--brand-red)",
    bg: "var(--brand-red-light)",
  },
  {
    Icon: CodeRegular,
    title: "Programmation avancée",
    description:
      "Moteur d'échecs intégré, prise de décision autonome et apprentissage continu.",
    color: "var(--brand-green)",
    bg: "var(--brand-green-light)",
  },
  {
    Icon: SettingsRegular,
    title: "Mécatronique",
    description:
      "Alliance de l'électronique embarquée, des capteurs et du contrôle moteur de précision.",
    color: "var(--brand-amber)",
    bg: "var(--brand-amber-light)",
  },
];

const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function TechSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="technologies"
      className="relative px-6 py-32 overflow-hidden"
      style={{ background: "var(--surface-1)" }}
    >
      {/* Décoration fond */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--brand-blue-light), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
          >
            Stack technique
          </span>
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-5">
            Technologies clés
          </h2>
          <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto leading-relaxed">
            BMI Technologies combine les disciplines les plus avancées de
            l&apos;ingénierie moderne pour donner vie à un automate joueur
            d&apos;échecs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal ${delays[i]} group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-default`}
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 20px 48px -8px ${f.color}33` }}
              />

              {/* Icône */}
              <div
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: f.bg }}
              >
                <f.Icon fontSize={26} style={{ color: f.color }} />
              </div>

              <h3 className="font-bold text-[var(--foreground)] text-base mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-[var(--secondary)] leading-relaxed">
                {f.description}
              </p>

              {/* Barre couleur bas */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: f.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
