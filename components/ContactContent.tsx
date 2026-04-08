"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { useReveal } from "@/hooks/useReveal";

const contactHighlights = [
  "Interlocuteur technique direct",
  "Réponse sous 24 h ouvrées",
  "Basé à Baulmes, Suisse",
];

const projectScopes = [
  {
    title: "Projet logiciel sur mesure",
    text: "Application métier, interface de supervision, API ou outil connecté à un système existant.",
  },
  {
    title: "Prototype intelligent",
    text: "Démonstrateur, preuve de concept, robotique appliquée ou intégration logiciel-matériel.",
  },
  {
    title: "Évolution d'un système",
    text: "Amélioration d'un existant, reprise technique, clarification d'architecture ou montée en qualité.",
  },
];

const firstExchange = [
  {
    step: "01",
    title: "Contexte & objectif",
    text: "Vous partagez votre besoin, votre environnement et le résultat attendu, même si le cadre n'est pas encore totalement figé.",
  },
  {
    step: "02",
    title: "Lecture technique",
    text: "BMI Technologies évalue la faisabilité, les contraintes d'intégration et le niveau d'effort nécessaire pour avancer proprement.",
  },
  {
    step: "03",
    title: "Proposition d'engagement",
    text: "Vous recevez un retour clair sur l'approche, le périmètre pertinent et la manière la plus réaliste de démarrer.",
  },
];

const preparationItems = [
  "Le contexte métier ou démonstrateur concerné",
  "Ce qui existe déjà et ce qui manque aujourd'hui",
  "Les contraintes de délai, d'intégration ou de budget",
  "Le niveau d'urgence et le résultat attendu",
];

export default function ContactContent() {
  const heroRef = useReveal(0.1);
  const bodyRef = useReveal(0.1);

  return (
    <div className="min-h-screen bg-[var(--surface-1)]">
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative overflow-hidden px-6 py-24 lg:py-28"
        style={{ background: "var(--brand-section-bg)" }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl"
            style={{ background: "var(--brand-blue)", opacity: "var(--brand-section-orb-opacity)" }}
          />
          <div
            className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "var(--brand-red)", opacity: "var(--brand-section-orb-opacity)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(color-mix(in srgb, var(--brand-section-text) 14%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--brand-section-text) 14%, transparent) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <span
              className="animate-fade-in inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
              style={{
                background: "var(--brand-section-badge-bg)",
                color: "var(--brand-section-badge-color)",
                border: "1px solid var(--brand-section-badge-border)",
              }}
            >
              Contact professionnel
            </span>

            <h1
              className="animate-fade-up delay-100 text-5xl font-black leading-[1.03] tracking-[-0.05em] lg:text-6xl"
              style={{ color: "var(--brand-section-text)" }}
            >
              Parlons d'un projet à construire proprement.
            </h1>

            <p
              className="animate-fade-up delay-200 mt-6 max-w-3xl text-lg leading-relaxed lg:text-xl"
              style={{ color: "var(--brand-section-secondary)" }}
            >
              BMI Technologies échange directement avec vous sur les sujets de
              développement logiciel, d'intégration matériel-logiciel, de
              prototype et de démonstrateur intelligent. L'objectif n'est pas
              seulement de répondre vite, mais de cadrer juste.
            </p>

            <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-3">
              {contactHighlights.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    background: "var(--brand-section-ghost-bg)",
                    color: "var(--brand-section-ghost-color)",
                    border: "1px solid var(--brand-section-ghost-border)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:contact@bmi-tech.ch"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
                  boxShadow: "var(--shadow-primary)",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                Écrire à contact@bmi-tech.ch
              </a>
              <Link
                href="/projets"
                className="inline-flex items-center px-7 py-3.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--brand-section-ghost-bg)",
                  color: "var(--brand-section-ghost-color)",
                  border: "1px solid var(--brand-section-ghost-border)",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                Voir les projets
              </Link>
            </div>
          </div>

          <div className="reveal delay-200">
            <div
              className="p-6"
              style={{
                background: "color-mix(in srgb, var(--surface-0) 82%, transparent)",
                border: "1px solid var(--brand-section-ghost-border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--brand-red)" }}>
                Pour gagner du temps
              </div>
              <div className="grid gap-2">
                {preparationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--brand-section-secondary)" }}
                  >
                    <span
                      className="mt-1 block h-2.5 w-2.5 rounded-full"
                      style={{ background: "var(--brand-blue)" }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={bodyRef as React.RefObject<HTMLDivElement>} className="mx-auto max-w-6xl px-6 py-20 space-y-20">
        <section className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div
            className="reveal p-8 lg:p-10"
            style={{
              background: "var(--surface-0)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div
              className="mb-5 inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
            >
              Formulaire de contact
            </div>
            <h2 className="text-3xl font-black leading-tight text-[var(--foreground)] lg:text-4xl">
              Décrivez votre besoin avec un minimum de contexte.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--secondary)] lg:text-base">
              La demande peut être concise. L'important est de préciser ce que
              vous cherchez à construire, à tester, à améliorer ou à intégrer.
            </p>

            <div
              className="mt-6 rounded-[1.6rem] p-5"
              style={{
                background: "var(--surface-1)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="mb-2 text-sm font-semibold text-[var(--foreground)]">
                Attente de réponse
              </div>
              <p className="text-sm leading-relaxed text-[var(--secondary)]">
                BMI Technologies répond en principe sous 24 h ouvrées avec un
                premier retour orienté faisabilité et suite logique.
              </p>
            </div>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-5">
            <div className="reveal delay-100 p-7" style={{
              background: "var(--surface-0)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-sm)",
            }}>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand-red)" }}>
                Quand nous écrire
              </div>
              <div className="grid gap-4">
                {projectScopes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] p-5"
                    style={{ background: "var(--surface-1)", border: "1px solid var(--border-subtle)" }}
                  >
                    <div className="text-base font-bold text-[var(--foreground)]">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--secondary)]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="reveal delay-200 p-7"
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand-blue)" }}>
                Cadre d'échange
              </div>
              <p className="text-sm leading-relaxed text-[var(--secondary)]">
                BMI Technologies agit comme entité suisse indépendante. Les
                échanges portent directement sur le sujet technique et le mode
                d'exécution, sans intermédiaire inutile.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="reveal mb-10 text-center">
            <div
              className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: "var(--brand-red-light)", color: "var(--brand-red)" }}
            >
              Premier échange
            </div>
            <h2 className="mt-5 text-4xl font-black text-[var(--foreground)]">
              Une prise de contact claire, puis une lecture technique rapide.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--secondary)]">
              La première réponse doit vous aider à comprendre comment avancer,
              pas seulement confirmer la bonne réception du message.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {firstExchange.map((item, index) => (
              <div
                key={item.step}
                className={`reveal ${index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300"} p-7`}
                style={{
                  background: "var(--surface-0)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black text-white"
                  style={{ background: index % 2 === 0 ? "var(--brand-blue)" : "var(--brand-red)" }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-black text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--secondary)]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="reveal relative overflow-hidden px-8 py-10 lg:px-12 lg:py-12"
          style={{
            background: "var(--brand-section-bg)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full blur-3xl"
            style={{ background: "var(--brand-red)", opacity: "var(--brand-section-orb-opacity)" }}
            aria-hidden
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div
                className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5"
                style={{
                  background: "var(--brand-section-badge-bg)",
                  color: "var(--brand-section-badge-color)",
                  border: "1px solid var(--brand-section-badge-border)",
                }}
              >
                Contact direct
              </div>
              <h2 className="text-4xl font-black leading-tight" style={{ color: "var(--brand-section-text)" }}>
                Un échange utile commence par quelques bonnes informations.
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--brand-section-secondary)" }}>
                Si vous avez déjà un contexte, un schéma, un prototype ou même
                une simple intuition, envoyez-le. Cela permet de qualifier plus
                vite la suite pertinente.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:contact@bmi-tech.ch"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
                  boxShadow: "var(--shadow-primary)",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                contact@bmi-tech.ch
              </a>
              <Link
                href="/a-propos"
                className="inline-flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--brand-section-ghost-bg)",
                  color: "var(--brand-section-ghost-color)",
                  border: "1px solid var(--brand-section-ghost-border)",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                Voir l'entreprise
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
