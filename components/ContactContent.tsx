"use client";

import { useReveal } from "@/hooks/useReveal";

const contactItems = [
  { label: "Entreprise", value: "BMI Technologies" },
  { label: "Activités", value: "Développement logiciel, matériel et solutions intelligentes sur mesure" },
  { label: "Localisation", value: "Baulmes, Vaud — Suisse" },
];

export default function ContactContent() {
  const heroRef = useReveal(0.1);
  const infoRef = useReveal(0.1);

  return (
    <div className="min-h-screen bg-[var(--surface-1)]">
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative overflow-hidden px-6 py-24"
        style={{ background: "var(--brand-section-bg)" }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "var(--brand-blue)", opacity: "var(--brand-section-orb-opacity)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "var(--brand-red)", opacity: "var(--brand-section-orb-opacity)" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <span
            className="animate-fade-in inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              background: "var(--brand-section-badge-bg)",
              color: "var(--brand-section-badge-color)",
              border: "1px solid var(--brand-section-badge-border)",
            }}
          >
            Contact
          </span>
          <h1 className="animate-fade-up delay-100 text-5xl font-black mb-5 leading-tight" style={{ color: "var(--brand-section-text)" }}>
            Contactez BMI Technologies
          </h1>
          <p className="animate-fade-up delay-200 text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--brand-section-secondary)" }}>
            Pour un besoin en développement logiciel, matériel ou solution
            intelligente sur mesure, écrivez-nous directement par e-mail.
          </p>
        </div>
      </section>

      <section ref={infoRef as React.RefObject<HTMLElement>} className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div
            className="reveal rounded-3xl p-8 lg:p-10"
            style={{
              background: "var(--surface-0)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.05)",
            }}
          >
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--brand-blue)" }}>
              E-mail direct
            </div>
            <a
              href="mailto:contact@bmi-tech.ch"
              className="block text-3xl lg:text-4xl font-black leading-tight hover:underline"
              style={{ color: "var(--brand-blue)" }}
            >
              contact@bmi-tech.ch
            </a>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--secondary)" }}>
              Contact principal pour les demandes de développement logiciel,
              de matériel intelligent, de prototypes et de démonstrations
              techniques.
            </p>

            <div
              className="mt-8 inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                background: "var(--brand-blue-light)",
                color: "var(--brand-blue)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              Baulmes, Vaud — Suisse
            </div>
          </div>

          <div className="reveal delay-200 space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6"
                style={{
                  background: "var(--surface-0)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--brand-red)" }}>
                  {item.label}
                </div>
                <div className="text-sm leading-relaxed font-medium" style={{ color: "var(--foreground)" }}>
                  {item.value}
                </div>
              </div>
            ))}

            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--brand-red)" }}>
                Information
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--secondary)" }}>
                BMI Technologies est une entité suisse indépendante, sans lien
                avec BMI Group ni avec d&apos;autres groupes internationaux de nom
                similaire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
