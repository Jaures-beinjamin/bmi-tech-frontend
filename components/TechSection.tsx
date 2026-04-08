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
    Icon: CodeRegular,
    title: "Développement logiciel",
    description:
      "Applications métier, APIs, interfaces web et outils sur mesure adaptés à vos processus.",
    color: "var(--brand-blue)",
    bg: "var(--brand-blue-light)",
  },
  {
    Icon: SettingsRegular,
    title: "Systèmes embarqués",
    description:
      "Électronique, automatisation, contrôle et intégration matériel/logiciel pour prototypes et produits.",
    color: "var(--brand-red)",
    bg: "var(--brand-red-light)",
  },
  {
    Icon: EyeRegular,
    title: "Vision & IA",
    description:
      "Computer vision, traitement de données et fonctions intelligentes quand elles apportent un gain réel.",
    color: "var(--brand-green)",
    bg: "var(--brand-green-light)",
  },
  {
    Icon: BotRegular,
    title: "Ingénierie sur mesure",
    description:
      "Conception de solutions personnalisées, du prototype fonctionnel à l'intégration terrain.",
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
            Expertises
          </span>
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-5">
            Ce que nous développons
          </h2>
          <p className="text-xl text-[var(--secondary)] max-w-2xl mx-auto leading-relaxed">
            BMI Technologies combine logiciel, matériel et intelligence
            appliquée pour créer des solutions personnalisées utiles,
            robustes et évolutives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal ${delays[i]} group relative p-7 transition-all duration-300 hover:-translate-y-2 cursor-default`}
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 20px 48px -8px ${f.color}33` }}
              />

              {/* Icône */}
              <div
                className="relative flex h-16 w-16 items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: f.bg, borderRadius: "var(--radius-md)" }}
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
