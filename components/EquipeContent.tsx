"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const roleCards = [
  {
    title: "Direction & conception",
    text: "Pilotage de l'entreprise, cadrage des besoins, choix techniques et validation des solutions.",
    accent: "blue",
  },
  {
    title: "Développement logiciel",
    text: "Applications web, APIs, logique métier et interfaces pour des systèmes intelligents sur mesure.",
    accent: "red",
  },
  {
    title: "Développement matériel",
    text: "Prototype physique, électronique embarquée, automatisation et intégration logiciel-matériel.",
    accent: "blue",
  },
  {
    title: "Projet vitrine",
    text: "Le Turc démontre la capacité de BMI Technologies à unir vision, IA et mécatronique dans un produit concret.",
    accent: "red",
  },
];

const workflow = [
  {
    step: "01",
    title: "Écouter et cadrer",
    text: "Chaque mission commence par l'analyse du besoin, des contraintes terrain et du niveau d'intégration attendu.",
  },
  {
    step: "02",
    title: "Concevoir et prototyper",
    text: "BMI Technologies conçoit l'architecture, développe les briques logicielles et, si nécessaire, réalise le prototype matériel.",
  },
  {
    step: "03",
    title: "Tester et livrer",
    text: "Les solutions sont validées dans le réel avec une attention forte portée à la robustesse, à la clarté d'usage et à l'évolutivité.",
  },
];

const highlights = [
  { label: "Structure", value: "Agile & directe" },
  { label: "Base", value: "Baulmes, VD" },
  { label: "Approche", value: "Logiciel + matériel" },
];

const teamProfiles = [
  {
    name: "Roland Burgermeister",
    role: "Fondateur & CTO",
    email: "contact@bmi-tech.ch",
    photo: "/img/photo_2026-04-08_02-19-41.jpg",
    summary:
      "Vision produit, cadrage technique, développement logiciel et supervision des démonstrateurs intelligents.",
    accent: "blue",
    featured: true,
  },
  {
    name: "Pôle développement web",
    role: "Interfaces & applications",
    email: "contact@bmi-tech.ch",
    photo: "/img/photo_2026-04-08_02-20-17.jpg",
    summary:
      "Expérience utilisateur, visualisation, communication temps réel et outils web qui relient l'utilisateur au système.",
    accent: "red",
    featured: false,
  },
  {
    name: "Pôle systèmes embarqués",
    role: "Robotique & automatisation",
    email: "contact@bmi-tech.ch",
    photo: "/img/photo_2026-04-08_02-20-21.jpg",
    summary:
      "Capteurs, automatisation, mécatronique et intégration logiciel-matériel pour les prototypes et les démos terrain.",
    accent: "blue",
    featured: false,
  },
];

const teamPhotos = [
  {
    src: "/img/photo_2026-04-08_02-19-41.jpg",
    title: "Roland Burgermeister",
    caption: "Fondateur, direction technique et pilotage des réalisations BMI Technologies.",
  },
  {
    src: "/img/photo_2026-04-08_02-19-47.jpg",
    title: "Équipe en démonstration",
    caption: "Présentation publique du robot et échanges autour des usages concrets.",
  },
  {
    src: "/img/photo_2026-04-08_02-20-00.jpg",
    title: "Interaction homme-machine",
    caption: "Tests en situation avec Le Turc dans un contexte réel de démonstration.",
  },
  {
    src: "/img/photo_2026-04-08_02-20-17.jpg",
    title: "Pilotage logiciel",
    caption: "Vision, calcul et contrôle embarqué sur le même poste d'expérimentation.",
  },
];

export default function EquipeContent() {
  const heroRef = useReveal(0.1);
  const bodyRef = useReveal(0.1);

  return (
    <div className="min-h-screen bg-[var(--surface-1)]">
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative overflow-hidden px-6 py-24"
        style={{ background: "var(--brand-section-bg)" }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -top-28 -left-20 h-[420px] w-[420px] rounded-full blur-3xl"
            style={{ background: "var(--brand-blue)", opacity: "var(--brand-section-orb-opacity)" }}
          />
          <div
            className="absolute -bottom-16 right-0 h-[360px] w-[360px] rounded-full blur-3xl"
            style={{ background: "var(--brand-red)", opacity: "var(--brand-section-orb-opacity)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(color-mix(in srgb, var(--brand-section-text) 16%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--brand-section-text) 16%, transparent) 1px, transparent 1px)",
              backgroundSize: "68px 68px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="reveal inline-flex items-center gap-2 text-sm transition-colors mb-8"
            style={{ color: "var(--brand-section-secondary)" }}
          >
            ← Retour à l'accueil
          </Link>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span
                className="reveal inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
                style={{
                  background: "var(--brand-section-badge-bg)",
                  color: "var(--brand-section-badge-color)",
                  border: "1px solid var(--brand-section-badge-border)",
                }}
              >
                Équipe · BMI Technologies
              </span>

              <h1
                className="reveal delay-100 text-5xl lg:text-6xl font-black leading-[1.04] mb-6"
                style={{ color: "var(--brand-section-text)" }}
              >
                Une équipe compacte.
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, var(--brand-blue), var(--brand-red))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Une exécution directe.
                </span>
              </h1>

              <p
                className="reveal delay-200 text-lg leading-relaxed max-w-2xl mb-5"
                style={{ color: "var(--brand-section-secondary)" }}
              >
                BMI Technologies s'appuie aujourd'hui sur une structure resserrée
                autour de Roland Burgermeister, fondateur et moteur technique de
                l'entreprise. Ce format permet une relation directe entre le
                besoin, la conception et la réalisation.
              </p>

              <p
                className="reveal delay-300 text-sm leading-relaxed max-w-xl mb-8"
                style={{ color: "var(--brand-section-secondary)" }}
              >
                Entreprise suisse indépendante basée à Baulmes, Vaud, BMI
                Technologies développe des solutions personnalisées en logiciel,
                matériel et systèmes intelligents, sans lien avec des groupes
                internationaux de nom similaire.
              </p>

              <div className="reveal delay-400 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
                    boxShadow: "0 8px 24px rgba(192,0,26,0.28)",
                  }}
                >
                  Contacter l'équipe
                </Link>
                <Link
                  href="/projets/turc"
                  className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--brand-section-ghost-bg)",
                    color: "var(--brand-section-ghost-color)",
                    border: "1px solid var(--brand-section-ghost-border)",
                  }}
                >
                  Voir le projet Le Turc
                </Link>
              </div>
            </div>

            <div className="reveal delay-300 relative">
              <div
                className="relative overflow-hidden rounded-[2rem]"
                style={{
                  border: "1px solid var(--brand-section-ghost-border)",
                  boxShadow: "0 28px 80px rgba(0,0,0,0.14)",
                  minHeight: "560px",
                }}
              >
                <Image
                  src="/img/photo_2026-04-08_02-19-41.jpg"
                  alt="Roland Burgermeister, fondateur de BMI Technologies"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-6"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(8,8,15,0.82) 55%, rgba(8,8,15,0.94) 100%)",
                  }}
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-white/65 mb-2">
                    Fondateur
                  </div>
                  <div className="text-2xl font-black text-white mb-1">
                    Roland Burgermeister
                  </div>
                  <div className="text-sm text-white/70 leading-relaxed">
                    Développement logiciel, matériel intelligent, automatisation
                    et démonstrateurs techniques depuis Baulmes, Suisse.
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 sm:-left-8"
                style={{
                  background: "var(--brand-section-ghost-bg)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--brand-section-ghost-border)",
                }}
              >
                <div className="text-xs font-bold" style={{ color: "var(--brand-section-text)" }}>
                  Logiciel · Matériel · IA
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--brand-section-secondary)" }}>
                  Une seule chaîne de décision, de la conception à la mise au point.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={bodyRef as React.RefObject<HTMLDivElement>} className="mx-auto max-w-6xl px-6 py-20 space-y-20">
        <section className="overflow-hidden">
          <div className="reveal mb-8 text-center">
            <span
              className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "var(--brand-red-light)", color: "var(--brand-red)" }}
            >
              L'équipe en images
            </span>
            <div className="prose brand-prose prose-lg mx-auto max-w-3xl">
              <h2>Un bandeau visuel vivant de l'équipe et de son environnement de travail</h2>
              <p>
                Cette frise horizontale montre le fondateur, les démonstrations
                publiques et les situations réelles de mise au point autour du
                projet Le Turc.
              </p>
            </div>
          </div>

          <div className="relative -mx-6 overflow-hidden px-6">
            <div className="marquee-track flex gap-5 py-2">
              {[...teamPhotos, ...teamPhotos].map((photo, index) => (
                <article
                  key={`${photo.src}-${index}`}
                  className="relative min-w-[320px] overflow-hidden rounded-[1.75rem] sm:min-w-[420px]"
                  style={{
                    aspectRatio: "16 / 9",
                    border: "1px solid var(--border-subtle)",
                    boxShadow: "0 18px 44px rgba(0,0,0,0.08)",
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 320px, 420px"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 p-5"
                    style={{
                      background: "linear-gradient(180deg, transparent 0%, rgba(8,8,15,0.88) 58%, rgba(8,8,15,0.95) 100%)",
                    }}
                  >
                    <div className="text-sm font-black text-white mb-1">{photo.title}</div>
                    <div className="text-xs leading-relaxed text-white/72 max-w-xs">{photo.caption}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="reveal text-center mb-12">
            <span
              className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
            >
              Team showcase
            </span>
            <div className="prose brand-prose prose-lg mx-auto max-w-3xl">
              <h2>Une présence d'équipe plus imposante, plus visible et plus crédible</h2>
              <p>
                Cette section met en avant le pilotage technique de BMI Technologies
                et les pôles qui structurent concrètement l'exécution : CTO,
                développement web et systèmes embarqués.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {teamProfiles.filter((profile) => profile.featured).map((profile) => (
              <article
                key={profile.name}
                className="reveal group relative overflow-hidden rounded-[2rem] min-h-[620px]"
                style={{
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 26px 80px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,8,15,0.08) 0%, rgba(8,8,15,0.42) 38%, rgba(8,8,15,0.92) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                  <div
                    className="mb-4 inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255,255,255,0.20)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    Leadership technique
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-white mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-base lg:text-lg font-semibold text-white/82 mb-5">
                    {profile.role}
                  </p>
                  <p className="max-w-2xl text-sm lg:text-base leading-relaxed text-white/74 mb-7">
                    {profile.summary}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
                        boxShadow: "0 10px 24px rgba(192,0,26,0.28)",
                      }}
                    >
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
                        <path d="M3.333 5.833h13.334c.92 0 1.666.746 1.666 1.667v5c0 .92-.746 1.667-1.666 1.667H3.333a1.667 1.667 0 0 1-1.666-1.667v-5c0-.92.746-1.667 1.666-1.667Z" stroke="currentColor" strokeWidth="1.7" />
                        <path d="m3 6.667 7 5 7-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {profile.email}
                    </a>
                    <span
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.10)",
                        color: "rgba(255,255,255,0.85)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn à renseigner
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      "Architecture & décision",
                      "Logiciel sur mesure",
                      "Prototype & démonstrateur",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl px-4 py-3 text-sm font-semibold"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.88)",
                          border: "1px solid rgba(255,255,255,0.14)",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <div className="grid gap-6">
              {teamProfiles.filter((profile) => !profile.featured).map((profile, index) => (
                <article
                  key={profile.name}
                  className={`reveal ${index === 0 ? "delay-100" : "delay-200"} group relative overflow-hidden rounded-[2rem] min-h-[300px]`}
                  style={{
                    border: "1px solid var(--border-subtle)",
                    boxShadow: "0 18px 44px rgba(0,0,0,0.08)",
                  }}
                >
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(8,8,15,0.14) 0%, rgba(8,8,15,0.54) 45%, rgba(8,8,15,0.92) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div
                      className="mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                      style={
                        profile.accent === "blue"
                          ? { background: "rgba(192,0,26,0.18)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.16)" }
                          : { background: "rgba(26,58,143,0.28)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.16)" }
                      }
                    >
                      Team role
                    </div>
                    <h3 className="text-2xl font-black text-white mb-1">
                      {profile.name}
                    </h3>
                    <p className="text-sm font-semibold text-white/78 mb-3">
                      {profile.role}
                    </p>
                    <p className="text-xs leading-relaxed text-white/72 mb-4 max-w-md">
                      {profile.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                        style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.16)" }}
                      >
                        {profile.email}
                      </a>
                      <span
                        className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold"
                        style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.82)", border: "1px solid rgba(255,255,255,0.14)" }}
                      >
                        LinkedIn à renseigner
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="reveal mt-5 text-center text-xs leading-relaxed" style={{ color: "var(--secondary)" }}>
            Les emplacements LinkedIn sont prêts. Je n&apos;ai pas inventé d&apos;URL publique faute de profil vérifié dans les sources disponibles.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal">
            <span
              className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
            >
              Noyau de l'équipe
            </span>
            <div className="prose brand-prose prose-lg max-w-none">
              <h2>Une structure agile pilotée par le fondateur</h2>
              <p>
                En tant que raison individuelle, BMI Technologies fonctionne avec
                un centre de gravité clair : Roland Burgermeister porte la vision,
                le développement et la mise en oeuvre des solutions.
              </p>
              <p>
                Cette organisation réduit les couches inutiles, accélère les
                arbitrages techniques et permet une continuité forte entre le
                besoin client, l'architecture retenue et la livraison finale.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`reveal ${index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300"} rounded-2xl p-6`}
                style={{
                  background: "var(--surface-0)",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.04)",
                }}
              >
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--brand-red)" }}>
                  {item.label}
                </div>
                <div className="text-xl font-black text-[var(--foreground)] leading-tight">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="reveal text-center mb-12">
            <span
              className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "var(--brand-red-light)", color: "var(--brand-red)" }}
            >
              Compétences mobilisées
            </span>
            <h2 className="text-4xl font-black text-[var(--foreground)] mb-4">
              Ce que l'équipe porte au quotidien
            </h2>
            <p className="max-w-2xl mx-auto text-[var(--secondary)] leading-relaxed">
              La page Équipe reflète la réalité actuelle de BMI Technologies : un
              pilotage technique centralisé, capable de couvrir toute la chaîne
              de valeur d'un projet intelligent.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {roleCards.map((card, index) => (
              <div
                key={card.title}
                className={`reveal ${index === 0 ? "delay-100" : index === 1 ? "delay-200" : index === 2 ? "delay-300" : "delay-400"} group relative rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2`}
                style={{
                  background: "var(--surface-0)",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 16px 36px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="absolute inset-x-7 top-0 h-1 rounded-b-full"
                  style={{ background: card.accent === "blue" ? "var(--brand-blue)" : "var(--brand-red)" }}
                />
                <div
                  className="mb-5 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                  style={
                    card.accent === "blue"
                      ? { background: "var(--brand-blue-light)", color: "var(--brand-blue)" }
                      : { background: "var(--brand-red-light)", color: "var(--brand-red)" }
                  }
                >
                  {card.accent === "blue" ? "Pôle" : "Focus"}
                </div>
                <h3 className="text-lg font-black text-[var(--foreground)] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--secondary)]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="reveal flex items-center gap-3 mb-10">
            <span
              className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
            >
              Méthode
            </span>
            <div className="h-px flex-1" style={{ background: "var(--border-subtle)" }} />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {workflow.map((item, index) => (
              <div
                key={item.step}
                className={`reveal ${index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300"} rounded-3xl p-8`}
                style={{
                  background: "linear-gradient(180deg, var(--surface-0) 0%, var(--surface-1) 100%)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black text-white mb-5"
                  style={{ background: index % 2 === 0 ? "var(--brand-blue)" : "var(--brand-red)" }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-black text-[var(--foreground)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--secondary)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="reveal relative overflow-hidden rounded-[2rem] px-8 py-10 lg:px-12 lg:py-12"
          style={{ background: "var(--brand-section-bg)", border: "1px solid var(--border-subtle)" }}
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
              <h2 className="text-4xl font-black leading-tight mb-4" style={{ color: "var(--brand-section-text)" }}>
                Une équipe courte, un échange rapide.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--brand-section-secondary)" }}>
                Si vous cherchez un interlocuteur capable de relier besoin métier,
                développement logiciel et prototype matériel, l'équipe BMI
                Technologies vous répond directement.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:contact@bmi-tech.ch"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
                  boxShadow: "0 8px 24px rgba(192,0,26,0.28)",
                }}
              >
                contact@bmi-tech.ch
              </a>
              <Link
                href="/a-propos"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--brand-section-ghost-bg)",
                  color: "var(--brand-section-ghost-color)",
                  border: "1px solid var(--brand-section-ghost-border)",
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