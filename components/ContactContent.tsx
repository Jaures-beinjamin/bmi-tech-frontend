"use client";

import { useReveal } from "@/hooks/useReveal";
import ContactForm from "@/components/ContactForm";

const infos = [
  { icon: "🏢", label: "Entreprise",  value: "BMI Technologies" },
  { icon: "👤", label: "Contact",     value: "Roland Burgermeister" },
  { icon: "📍", label: "Adresse",     value: "1446 Baulmes, VD — Suisse" },
  { icon: "✉️", label: "E-mail",      value: "contact@bmi-tech.ch", isEmail: true },
];

const raisons = [
  { emoji: "🤝", title: "Partenariat",    text: "Collaborez sur le projet Le Turc ou d'autres innovations." },
  { emoji: "📈", title: "Investissement", text: "Participez au développement de la startup suisse." },
  { emoji: "🎬", title: "Démonstration",  text: "Organisez une démo live du robot joueur d'échecs." },
];

export default function ContactContent() {
  const heroRef   = useReveal(0.1);
  const mainRef   = useReveal(0.1);
  const formRef   = useReveal(0.1);

  return (
    <div className="min-h-screen bg-[var(--surface-1)]">

      {/* ── Hero ── */}
      <div
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className="relative overflow-hidden bg-[var(--surface-0)] border-b border-[var(--border-subtle)]"
      >
        {/* Orbe décoratif */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--brand-blue)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-red)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <span
            className="animate-fade-in inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
          >
            Parlons-nous
          </span>
          <h1 className="animate-fade-up delay-100 text-5xl font-bold text-[var(--foreground)] mb-4 leading-tight">
            Contactez-nous
          </h1>
          <p className="animate-fade-up delay-200 text-xl text-[var(--secondary)] max-w-2xl leading-relaxed">
            Partenariats, investissements, démonstrations ou simplement une
            question — Roland Burgermeister est à votre écoute.
          </p>
        </div>
      </div>

      {/* ── Raisons de contact ── */}
      <div
        ref={mainRef as React.RefObject<HTMLDivElement>}
        className="mx-auto max-w-6xl px-6 pt-12 pb-0"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {raisons.map((r, i) => (
            <div
              key={r.title}
              className={`reveal ${i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300"} flex gap-4 items-start rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1`}
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <span className="text-2xl shrink-0">{r.emoji}</span>
              <div>
                <div className="font-bold text-sm text-[var(--foreground)] mb-1">{r.title}</div>
                <div className="text-xs text-[var(--secondary)] leading-relaxed">{r.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Formulaire + infos ── */}
      <div ref={formRef as React.RefObject<HTMLDivElement>} className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-5">

          {/* Formulaire */}
          <div className="reveal delay-100 lg:col-span-3">
            <div
              className="rounded-2xl p-8"
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">
                Envoyer un message
              </h2>
              <p className="text-sm text-[var(--secondary)] mb-6">
                Réponse garantie sous 24 h ouvrées.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Colonne infos */}
          <div className="reveal delay-200 lg:col-span-2 space-y-5">

            {/* Coordonnées */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <h3 className="font-bold text-[var(--foreground)] mb-5">Coordonnées</h3>
              <div className="space-y-4">
                {infos.map((item) => (
                  <div key={item.label} className="flex gap-3 items-start">
                    <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="text-xs text-[var(--secondary)] font-semibold uppercase tracking-wide mb-0.5">
                        {item.label}
                      </div>
                      {item.isEmail ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-sm font-medium hover:underline"
                          style={{ color: "var(--brand-blue)" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-[var(--foreground)]">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projet */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--brand-blue-light) 0%, var(--surface-0) 100%)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="text-4xl mb-3 animate-float">♟️</div>
              <h3 className="font-bold text-[var(--foreground)] mb-2">
                Le projet vous intéresse ?
              </h3>
              <p className="text-sm text-[var(--secondary)] leading-relaxed">
                Roland est ouvert aux collaborations et démonstrations de son
                robot joueur d&apos;échecs autonome «&nbsp;Le Turc&nbsp;».
              </p>
              <a
                href="/projets/turc"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold transition-all duration-200 hover:gap-3"
                style={{ color: "var(--brand-blue)" }}
              >
                Voir le projet →
              </a>
            </div>

            {/* Réseaux */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <h3 className="font-bold text-[var(--foreground)] mb-4">Réseaux sociaux</h3>
              <div className="flex gap-3">
                {[
                  { href: "https://linkedin.com", label: "LinkedIn", bg: "#0A66C2" },
                  { href: "https://twitter.com",  label: "Twitter / X", bg: "#000" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
                    style={{ background: social.bg }}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
