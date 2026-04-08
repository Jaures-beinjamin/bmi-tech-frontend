"use client";

import { useReveal } from "@/hooks/useReveal";
import { Button } from "@fluentui/react-components";
import { MailRegular, ArrowRightRegular } from "@fluentui/react-icons";

export default function ContactCTA() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className="relative overflow-hidden px-6 py-36"
      style={{ background: "linear-gradient(135deg, #0D0006 0%, #140008 50%, #08080F 100%)" }}
    >
      {/* Fond animé */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #C0001A, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #1A3A8F, transparent 70%)" }}
        />
        {/* Ligne décorative rouge en haut */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent 0%, #C0001A 30%, #C0001A 70%, transparent 100%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">

        {/* Icône pulsante */}
        <div className="reveal relative inline-flex mb-8">
          <div
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{ background: "#C0001A", opacity: 0.25 }}
          />
          <div
            className="relative flex h-20 w-20 items-center justify-center rounded-full"
            style={{ background: "linear-gradient(135deg, #C0001A, #920014)", boxShadow: "0 8px 32px rgba(192,0,26,0.45)" }}
          >
            <MailRegular fontSize={36} color="white" />
          </div>
        </div>

        <h2 className="reveal delay-100 text-4xl font-extrabold text-white mb-5 lg:text-5xl">
          Collaborons ensemble
        </h2>

        <p className="reveal delay-200 text-xl text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
          Partenariats, investissements, démonstrations — Roland Burgermeister
          est ouvert à toutes les collaborations autour de son robot joueur
          d&apos;échecs.
        </p>

        {/* Points de valeur */}
        <div className="reveal delay-300 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: "🤝", label: "Partenariat" },
            { icon: "💡", label: "Démonstration" },
            { icon: "📈", label: "Investissement" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 rounded-xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-semibold text-white">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="reveal delay-400 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #C0001A, #920014)",
              boxShadow: "0 8px 24px rgba(192,0,26,0.45)",
            }}
          >
            <MailRegular fontSize={20} />
            Nous contacter
          </a>
          <a
            href="/a-propos"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            En savoir plus <ArrowRightRegular fontSize={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
