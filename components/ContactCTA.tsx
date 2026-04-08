"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { MailRegular, ArrowRightRegular } from "@fluentui/react-icons";

export default function ContactCTA() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className="relative overflow-hidden px-6 py-36"
      style={{ background: "var(--brand-section-bg)" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--brand-blue), transparent 70%)", opacity: "var(--brand-section-orb-opacity)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--brand-red), transparent 70%)", opacity: "var(--brand-section-orb-opacity)" }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent 0%, var(--brand-blue) 30%, var(--brand-blue) 70%, transparent 100%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">

        <div className="reveal relative inline-flex mb-8">
          <div
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{ background: "var(--brand-blue)", opacity: 0.25 }}
          />
          <div
            className="relative flex h-20 w-20 items-center justify-center rounded-full"
            style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))", boxShadow: "0 8px 32px rgba(192,0,26,0.32)" }}
          >
            <MailRegular fontSize={36} color="white" />
          </div>
        </div>

        <h2 className="reveal delay-100 text-4xl font-extrabold mb-5 lg:text-5xl" style={{ color: "var(--brand-section-text)" }}>
          Parlons de votre projet
        </h2>

        <p className="reveal delay-200 text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "var(--brand-section-secondary)" }}>
          Développement logiciel, matériel intelligent, prototype ou intégration
          sur mesure : BMI Technologies échange avec vous directement depuis
          Baulmes, dans le canton de Vaud.
        </p>

        <div className="reveal delay-300 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { label: "Logiciel sur mesure" },
            { label: "Développement matériel" },
            { label: "Solution intelligente" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center rounded-xl px-4 py-3 text-center"
              style={{
                background: "var(--brand-section-ghost-bg)",
                border: "1px solid var(--brand-section-ghost-border)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="text-sm font-semibold" style={{ color: "var(--brand-section-text)" }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="reveal delay-400 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:contact@bmi-tech.ch"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
              boxShadow: "0 8px 24px rgba(192,0,26,0.32)",
            }}
          >
            <MailRegular fontSize={20} />
            Nous écrire
          </a>
          <Link
            href="/projets/turc"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--brand-section-ghost-bg)",
              color: "var(--brand-section-ghost-color)",
              border: "1px solid var(--brand-section-ghost-border)",
            }}
          >
            Découvrir Le Turc <ArrowRightRegular fontSize={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
