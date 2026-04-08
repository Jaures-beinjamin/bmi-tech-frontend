"use client";

import { useReveal } from "@/hooks/useReveal";

const cards = [
  { emoji: "♟️", title: "Passion", text: "Échecs & électronique réunis" },
  { emoji: "🇨🇭", title: "Suisse", text: "Baulmes, VD 1446" },
  { emoji: "🤖", title: "Robotique", text: "Bras autonome de précision" },
  { emoji: "💻", title: "Logiciel", text: "IA, vision & API temps réel" },
];

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="a-propos"
      className="relative overflow-hidden px-6 py-32 bg-[var(--surface-0)]"
    >
      {/* Décoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-blue)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── Texte ── */}
          <div>
            <div className="reveal-left">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
              >
                Qui nous sommes
              </span>
              <h2 className="text-4xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                BMI Technologies
              </h2>
              <p className="text-lg text-[var(--secondary)] leading-relaxed mb-4">
                Fondée par <strong className="text-[var(--foreground)]">Roland Burgermeister</strong> à
                Baulmes (VD), BMI Technologies est une{" "}
                <strong className="text-[var(--foreground)]">raison individuelle suisse</strong> spécialisée
                en robotique et informatique appliquée.
              </p>
              <p className="text-lg text-[var(--secondary)] leading-relaxed mb-8">
                Passionné autant par les échecs que par l&apos;électronique, Roland a
                conçu un{" "}
                <strong className="text-[var(--foreground)]">automate joueur d&apos;échecs</strong>{" "}
                qui repousse les frontières de la mécatronique et de l&apos;IA.
              </p>
              <a
                href="/a-propos"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:gap-4"
                style={{
                  color: "var(--brand-blue)",
                  background: "var(--brand-blue-light)",
                  border: "1px solid var(--brand-blue)",
                }}
              >
                En savoir plus sur nous →
              </a>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-2 gap-5">
            {cards.map((item, i) => (
              <div
                key={item.title}
                className={`reveal ${i === 0 ? "delay-100" : i === 1 ? "delay-200" : i === 2 ? "delay-300" : "delay-400"} group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default`}
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {/* Hover highlight */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "0 12px 32px -4px rgba(192,0,26,0.15)" }}
                />
                <div className="relative text-3xl mb-3">{item.emoji}</div>
                <div className="relative font-bold text-sm text-[var(--foreground)] mb-1">
                  {item.title}
                </div>
                <div className="relative text-xs text-[var(--secondary)] leading-snug">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
