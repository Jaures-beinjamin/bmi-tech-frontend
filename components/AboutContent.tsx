"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

/* ── Données ── */
const stats = [
  { value: "2024", label: "Année de fondation" },
  { value: "1",    label: "Projet phare actif" },
  { value: "🇨🇭",  label: "100 % suisse" },
];

const competences = [
  { name: "Robotique",          color: "blue" },
  { name: "Vision artificielle",color: "red"  },
  { name: "Arduino / ESP32",    color: "blue" },
  { name: "Raspberry Pi",       color: "red"  },
  { name: "C++ / Python",       color: "blue" },
  { name: "ASP.NET Core",       color: "red"  },
  { name: "IA & Machine Learning",color:"blue"},
  { name: "Mécatronique",       color: "red"  },
  { name: "Jeu d'échecs",       color: "blue" },
];

const fiche = [
  { label: "Forme juridique", value: "Raison individuelle" },
  { label: "Fondateur",       value: "Roland Burgermeister" },
  { label: "Siège",           value: "Baulmes, 1446 VD, Suisse" },
  { label: "Domaines",        value: "Services informatiques · Matériel · IA" },
  { label: "Langue",          value: "Français" },
  { label: "E-mail",          value: "contact@bmi-tech.ch" },
];

const valeurs = [
  {
    icon: "🎯",
    title: "Précision",
    text: "Chaque mouvement du robot est calculé et exécuté avec une précision millimétrique sub-millimétrique.",
    accent: "blue",
  },
  {
    icon: "🔬",
    title: "Innovation",
    text: "Combiner des technologies d'avant-garde pour résoudre des défis complexes du monde réel.",
    accent: "red",
  },
  {
    icon: "🤝",
    title: "Transparence",
    text: "Partager les connaissances, la passion et les résultats avec la communauté suisse et internationale.",
    accent: "blue",
  },
];

const timeline = [
  { year: "Passion", text: "Débuts avec l'électronique et les échecs — deux univers qui fusionnent.", dot: "blue" },
  { year: "R&D",     text: "Prototypage du bras robotique, intégration de la vision par ordinateur.", dot: "red" },
  { year: "2024",    text: "Création officielle de BMI Technologies à Baulmes, canton de Vaud.", dot: "blue" },
  { year: "Futur",   text: "Collaborations techniques, nouveaux prototypes et déploiement de solutions intelligentes.", dot: "red" },
];

export default function AboutContent() {
  const sectionRef = useReveal(0.12);

  return (
    <div ref={sectionRef as React.RefObject<HTMLDivElement>}>

      {/* ═══════════════════════════════════════
          HERO — plein écran, gradient bleu/rouge
      ═══════════════════════════════════════ */}
      <div className="relative overflow-hidden min-h-[72vh] flex items-center"
        style={{ background: "var(--brand-section-bg)" }}>

        {/* Orbes décoratifs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-[80px]"
          style={{ background: "var(--brand-blue)", opacity: "var(--brand-section-orb-opacity)" }} />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full blur-[80px]"
          style={{ background: "var(--brand-red)", opacity: "var(--brand-section-orb-opacity)" }} />

        {/* Grille subtile */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(var(--brand-blue) 1px, transparent 1px), linear-gradient(90deg, var(--brand-blue) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }} />

        <div className="relative mx-auto max-w-6xl px-6 py-24 w-full">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Texte */}
            <div>
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] mb-6 animate-fade-in"
                style={{ background: "var(--brand-section-badge-bg)", color: "var(--brand-section-badge-color)", border: "1px solid var(--brand-section-badge-border)" }}
              >
                Entreprise suisse indépendante
              </span>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-up delay-100" style={{ color: "var(--brand-section-text)" }}>
                BMI{" "}
                <span style={{
                  background: "linear-gradient(90deg, var(--brand-blue), var(--brand-red))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Technologies
                </span>
              </h1>

              <p className="text-lg leading-relaxed mb-8 animate-fade-up delay-200 max-w-lg" style={{ color: "var(--brand-section-secondary)" }}>
                BMI Technologies est une entreprise de services informatiques
                basée à Baulmes, spécialisée dans le développement logiciel, le
                matériel intelligent et les solutions sur mesure. Elle agit sans
                lien avec BMI Group ni avec d&apos;autres groupes homonymes.
              </p>

              <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all hover:scale-105"
                  style={{ background: "var(--brand-blue)" }}
                >
                  Nous contacter →
                </Link>
                <Link
                  href="/projets"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:scale-105"
                  style={{ background: "var(--brand-section-ghost-bg)", color: "var(--brand-section-ghost-color)", border: "1px solid var(--brand-section-ghost-border)" }}
                >
                  Voir les projets
                </Link>
              </div>
            </div>

            {/* Visuel flottant */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-72 h-72">
                {/* Anneau pulse rouge */}
                <div className="absolute inset-0 rounded-full opacity-30 animate-pulse-ring"
                  style={{ background: "var(--brand-red)", animationDuration: "3s" }} />
                <div className="absolute inset-0 rounded-full opacity-20 animate-pulse-ring delay-700"
                  style={{ background: "var(--brand-blue)" }} />

                {/* Cercle central */}
                <div className="absolute inset-8 rounded-full flex items-center justify-center animate-float"
                  style={{
                    background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-red) 30%, transparent), color-mix(in srgb, var(--brand-blue) 30%, transparent))",
                    border: "1px solid var(--brand-section-circle-border)",
                    backdropFilter: "blur(8px)",
                  }}>
                  <span className="text-7xl">♟️</span>
                </div>

                {/* Points orbitaux */}
                {["🤖", "💡", "⚙️"].map((icon, i) => (
                  <div
                    key={i}
                    className="absolute w-10 h-10 rounded-full flex items-center justify-center text-lg animate-orbit"
                    style={{
                      top: "50%",
                      left: "50%",
                      margin: "-20px 0 0 -20px",
                      background: i % 2 === 0 ? "color-mix(in srgb, var(--brand-red) 22%, transparent)" : "color-mix(in srgb, var(--brand-blue) 22%, transparent)",
                      border: `1px solid ${i % 2 === 0 ? "color-mix(in srgb, var(--brand-red) 40%, transparent)" : "color-mix(in srgb, var(--brand-blue) 40%, transparent)"}`,
                      animationDelay: `${i * -2.67}s`,
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Vague de séparation */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 60L1440 60L1440 20C1200 60 960 5 720 30C480 55 240 0 0 20L0 60Z" fill="var(--surface-1)" />
          </svg>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════ */}
      <div className="bg-[var(--surface-1)]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden reveal"
            style={{ background: "var(--border-subtle)" }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                style={{ background: "var(--surface-0)" }}
              >
                <div
                  className="text-3xl lg:text-5xl font-black mb-1"
                  style={{ color: i % 2 === 0 ? "var(--brand-blue)" : "var(--brand-red)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-[var(--secondary)] font-semibold uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MISSION
      ═══════════════════════════════════════ */}
      <section className="bg-[var(--surface-1)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Texte mission */}
            <div className="reveal-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
                style={{ background: "var(--brand-red-light)", color: "var(--brand-red)" }}>
                Notre mission
              </span>
              <h2 className="text-4xl font-black text-[var(--foreground)] mb-6 leading-tight">
                Concevoir des solutions{" "}
                <span style={{ color: "var(--brand-blue)" }}>intelligentes</span>{" "}
                sur mesure
              </h2>
              <p className="text-[var(--secondary)] leading-relaxed mb-4">
                <strong style={{ color: "var(--foreground)" }}>BMI Technologies</strong> est
                une raison individuelle suisse qui conçoit des solutions à la
                croisée du <strong style={{ color: "var(--brand-blue)" }}>logiciel</strong>,
                du <strong style={{ color: "var(--brand-red)" }}>matériel</strong>,
                de l&apos;électronique embarquée et des systèmes intelligents.
              </p>
              <p className="text-[var(--secondary)] leading-relaxed mb-6">
                Son projet phare — <strong style={{ color: "var(--foreground)" }}>«&nbsp;Le Turc&nbsp;»</strong> —
                sert de démonstrateur en réunissant robotique, vision par
                ordinateur et logiciel dans une réalisation concrète.
              </p>
              <blockquote
                className="pl-5 py-3 italic text-[var(--foreground)] text-base font-medium rounded-r-xl"
                style={{
                  borderLeft: "4px solid var(--brand-red)",
                  background: "var(--brand-red-light)",
                }}
              >
                «&nbsp;Du logiciel au matériel, chaque solution doit répondre à un besoin réel.&nbsp;»
              </blockquote>
            </div>

            {/* Fiche entreprise */}
            <div className="reveal-right">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border-subtle)" }}
              >
                <div
                  className="px-6 py-4 flex items-center gap-3"
                  style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-red))" }}
                >
                  <span className="text-2xl">🏢</span>
                  <span className="font-bold text-white text-sm tracking-wide">Fiche entreprise</span>
                </div>
                <div className="bg-[var(--surface-0)]">
                  {fiche.map((item, i) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 px-6 py-4"
                      style={{ borderBottom: i < fiche.length - 1 ? "1px solid var(--border-subtle)" : "none" }}
                    >
                      <div className="text-xs font-bold uppercase tracking-wider min-w-[110px] pt-0.5"
                        style={{ color: "var(--brand-blue)" }}>
                        {item.label}
                      </div>
                      <div className="text-sm text-[var(--foreground)] font-medium">
                        {item.label === "E-mail" ? (
                          <a href={`mailto:${item.value}`} className="hover:underline"
                            style={{ color: "var(--brand-blue)" }}>{item.value}</a>
                        ) : item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FONDATEUR
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-[var(--surface-0)]">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center mb-14 reveal">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}>
              Le fondateur
            </span>
            <h2 className="text-4xl font-black text-[var(--foreground)]">
              Roland <span style={{ color: "var(--brand-red)" }}>Burgermeister</span>
            </h2>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-12">

            {/* Avatar */}
            <div className="lg:col-span-4 flex flex-col items-center gap-6 reveal-left">
              <div className="relative">
                {/* Anneau déco */}
                <div className="absolute -inset-3 rounded-full opacity-20 animate-pulse-ring"
                  style={{ background: "var(--brand-blue)", animationDuration: "3.5s" }} />
                <div
                  className="relative w-48 h-48 rounded-full flex items-center justify-center text-8xl animate-float"
                  style={{
                    background: "linear-gradient(135deg, var(--brand-blue-light), var(--brand-red-light))",
                    border: "3px solid var(--border-subtle)",
                  }}
                >
                  👨‍💻
                </div>
              </div>

              {/* Badge localisation */}
              <div className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ background: "var(--surface-1)", border: "1px solid var(--border-subtle)" }}>
                <span>📍</span>
                <span className="text-[var(--foreground)]">Baulmes, Suisse</span>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-8 space-y-5 reveal-right">
              <p className="text-[var(--secondary)] leading-relaxed text-base">
                Né et établi à <strong style={{ color: "var(--foreground)" }}>Baulmes</strong>,
                dans le canton de Vaud, Roland Burgermeister est un ingénieur autodidacte
                passionné aussi bien par le jeu d&apos;échecs que par l&apos;électronique et l&apos;informatique.
              </p>
              <p className="text-[var(--secondary)] leading-relaxed text-base">
                Cette double passion l&apos;a naturellement conduit à imaginer un projet ambitieux :
                construire un robot capable de jouer aux échecs de façon <strong style={{ color: "var(--brand-blue)" }}>entièrement autonome</strong> —
                voyant les pièces, calculant le coup optimal et les déplaçant physiquement.
              </p>
              <p className="text-[var(--secondary)] leading-relaxed text-base">
                Après des années de recherche, de prototypage et de perfectionnement,
                il fonde <strong style={{ color: "var(--foreground)" }}>BMI Technologies</strong>, une structure dédiée
                au développement de solutions innovantes à la croisée de la robotique,
                de la vision par ordinateur et du logiciel.
              </p>

              {/* Compétences pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {competences.map((c) => (
                  <span
                    key={c.name}
                    className="rounded-full px-3 py-1 text-xs font-semibold transition-transform hover:scale-105"
                    style={
                      c.color === "blue"
                        ? { background: "var(--brand-blue-light)", color: "var(--brand-blue)" }
                        : { background: "var(--brand-red-light)", color: "var(--brand-red)" }
                    }
                  >
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TIMELINE
      ═══════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, var(--surface-1) 0%, var(--surface-0) 100%)" }}
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14 reveal">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ background: "var(--brand-red-light)", color: "var(--brand-red)" }}>
              Notre parcours
            </span>
            <h2 className="text-4xl font-black text-[var(--foreground)]">
              De la passion{" "}
              <span style={{ color: "var(--brand-blue)" }}>au produit</span>
            </h2>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "var(--border-default)", transform: "translateX(-50%)" }} />

            <div className="space-y-10">
              {timeline.map((step, i) => (
                <div
                  key={step.year}
                  className={`reveal flex items-start gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Contenu */}
                  <div className={`flex-1 pb-2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"} pl-14 lg:pl-0`}>
                    <div
                      className="inline-block rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest mb-2"
                      style={
                        step.dot === "blue"
                          ? { background: "var(--brand-blue-light)", color: "var(--brand-blue)" }
                          : { background: "var(--brand-red-light)", color: "var(--brand-red)" }
                      }
                    >
                      {step.year}
                    </div>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">{step.text}</p>
                  </div>

                  {/* Dot central */}
                  <div className="relative z-10 shrink-0 lg:mx-0 -ml-[34px] lg:ml-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 mt-1">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        background: step.dot === "blue" ? "var(--brand-blue)" : "var(--brand-red)",
                        outline: `3px solid ${step.dot === "blue" ? "var(--brand-blue-light)" : "var(--brand-red-light)"}`,
                        outlineOffset: "2px",
                      }}
                    />
                  </div>

                  {/* Côté vide (desktop) */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VALEURS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-[var(--surface-0)]">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center mb-14 reveal">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}>
              Ce qui nous guide
            </span>
            <h2 className="text-4xl font-black text-[var(--foreground)]">
              Nos <span style={{ color: "var(--brand-red)" }}>valeurs</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {valeurs.map((v, i) => (
              <div
                key={v.title}
                className="reveal group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border-subtle)",
                  animationDelay: `${i * 120}ms`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    v.accent === "blue"
                      ? "0 20px 48px -8px rgba(192,0,26,0.2)"
                      : "0 20px 48px -8px rgba(234,67,53,0.2)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    v.accent === "blue" ? "var(--brand-blue)" : "var(--brand-red)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: v.accent === "blue" ? "var(--brand-blue-light)" : "var(--brand-red-light)",
                  }}
                >
                  {v.icon}
                </div>
                <h3 className="font-black text-lg text-[var(--foreground)] mb-3">{v.title}</h3>
                <p className="text-sm text-[var(--secondary)] leading-relaxed">{v.text}</p>
                <div
                  className="mt-5 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ background: v.accent === "blue" ? "var(--brand-blue)" : "var(--brand-red)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FINAL — gradient bleu→rouge
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24">
        {/* Fond gradient */}
        <div className="absolute inset-0"
          style={{ background: "var(--brand-section-bg)" }} />

        {/* Orbes */}
        <div className="pointer-events-none absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "var(--brand-blue)", opacity: "var(--brand-section-orb-opacity)" }} />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "var(--brand-red)", opacity: "var(--brand-section-orb-opacity)" }} />

        <div className="relative mx-auto max-w-3xl px-6 text-center reveal">
          <div
            className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "var(--brand-section-badge-bg)", color: "var(--brand-section-badge-color)", border: "1px solid var(--brand-section-badge-border)" }}
          >
            Travaillons ensemble
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: "var(--brand-section-text)" }}>
            Prêt à rejoindre<br />
            l&apos;aventure{" "}
            <span style={{
              background: "linear-gradient(90deg, var(--brand-blue), var(--brand-red))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              BMI Tech&nbsp;?
            </span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--brand-section-secondary)" }}>
            Développement logiciel, matériel, démonstration technologique ou
            collaboration sur mesure — BMI Technologies vous répond depuis
            Baulmes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-black text-white transition-all hover:scale-105 hover:opacity-90"
              style={{ background: "var(--brand-blue)" }}
            >
              Nous contacter →
            </Link>
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-black transition-all hover:scale-105"
              style={{ background: "var(--brand-section-ghost-bg)", color: "var(--brand-section-ghost-color)", border: "1px solid var(--brand-section-ghost-border)" }}
            >
              Voir les projets
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
