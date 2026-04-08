"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const tags = [
  "Vision par ordinateur",
  "Mécatronique",
  "Intelligence artificielle",
  "Arduino / Raspberry Pi",
  "Stockfish",
];

const steps = [
  {
    num: "01",
    title: "Vision artificielle",
    text: "Une caméra haute résolution positionnée au-dessus de l'échiquier capture l'état du jeu en temps réel. Un pipeline de traitement d'image (OpenCV) identifie chaque pièce, sa couleur et sa position avec une précision sub-centimétrique.",
  },
  {
    num: "02",
    title: "Moteur d'échecs",
    text: "Le moteur Stockfish — l'un des plus puissants au monde — analyse la position et calcule le meilleur coup possible. La profondeur de calcul est ajustable pour s'adapter au niveau du joueur humain adverse.",
  },
  {
    num: "03",
    title: "Programmation du bras",
    text: "Un bras robotique à 6 degrés de liberté traduit le coup calculé en trajectoire physique. Le contrôle moteur, réalisé via microcontrôleur, garantit des gestes fluides et précis pour saisir, déplacer et poser les pièces.",
  },
  {
    num: "04",
    title: "Gestion des cas spéciaux",
    text: "Les règles avancées des échecs — prise en passant, roque, promotion, nulle par répétition — sont toutes implémentées, ce qui rend le robot capable de jouer des parties complètes et légalement correctes.",
  },
];

const stack = [
  { category: "Vision",             items: ["OpenCV", "Python", "NumPy", "TensorFlow Lite"] },
  { category: "Moteur d'échecs",    items: ["Stockfish", "python-chess", "Protocole UCI"] },
  { category: "Contrôle mécanique", items: ["Arduino Mega", "Raspberry Pi 4", "Steppers NEMA 17", "G-code custom"] },
  { category: "Interface & Web",    items: ["Next.js", "ASP.NET Core", "WebSockets", "REST API"] },
];

export default function TurcContent() {
  const heroRef    = useReveal(0.1);
  const contentRef = useReveal(0.1);

  return (
    <div className="min-h-screen bg-[var(--surface-1)]">

      {/* ── Hero ── */}
      <div
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--surface-3) 0%, var(--surface-2) 100%)" }}
      >
        {/* Orbes décoratifs */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--brand-blue)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--brand-red)" }}
          aria-hidden
        />

        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link
            href="/projets"
            className="animate-fade-in inline-flex items-center gap-2 text-sm text-[var(--secondary)] hover:text-[var(--foreground)] transition-colors mb-8"
          >
            ← Retour aux projets
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Texte */}
            <div>
              <span
                className="animate-fade-in inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4"
                style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
              >
                Projet phare · Robotique
              </span>
              <h1 className="animate-fade-up delay-100 text-4xl font-bold text-[var(--foreground)] lg:text-5xl mb-4">
                Le Turc
              </h1>
              <p className="animate-fade-up delay-200 text-xl text-[var(--secondary)] mb-6">
                Un automate joueur d&apos;échecs du XXI<sup>e</sup> siècle
              </p>
              <p className="animate-fade-up delay-300 text-[var(--secondary)] leading-relaxed max-w-lg">
                Inspiré du légendaire Turc mécanique de Wolfgang von Kempelen
                (1769), Roland Burgermeister a conçu un robot capable de jouer
                aux échecs de façon entièrement autonome — voyant les pièces,
                calculant le coup optimal et les déplaçant physiquement.
              </p>
              <div className="animate-fade-up delay-400 flex flex-wrap gap-2 mt-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs text-[var(--secondary)] transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "var(--surface-2)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visuel animé */}
            <div className="animate-scale-in delay-200 flex justify-center relative">
              {/* Anneaux pulse */}
              <div
                className="absolute w-72 h-72 rounded-full animate-pulse-ring"
                style={{ border: "2px solid var(--brand-blue)", opacity: 0.15 }}
              />
              <div
                className="absolute w-72 h-72 rounded-full animate-pulse-ring delay-700"
                style={{ border: "2px solid var(--brand-red)", opacity: 0.1 }}
              />
              <div
                className="animate-float relative h-72 w-72 rounded-3xl overflow-hidden"
                style={{
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 24px 60px rgba(192,0,26,0.15), 0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/img/photo_2026-04-08_02-19-25.jpg"
                  alt="Le Turc – robot joueur d'échecs"
                  fill
                  className="object-cover"
                  priority
                  sizes="288px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contenu principal ── */}
      <div
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className="mx-auto max-w-4xl px-6 py-16 space-y-16"
      >

        {/* Portrait Roland */}
        <section>
          <h2 className="reveal text-2xl font-bold text-[var(--foreground)] mb-8 pb-4 border-b border-[var(--border-subtle)]">
            Roland Burgermeister — L&apos;inventeur
          </h2>
          <div className="grid items-start gap-10 lg:grid-cols-3">
            <div
              className="reveal relative aspect-square rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105"
              style={{ border: "1px solid var(--border-subtle)" }}
            >
              <Image
                src="/img/photo_2026-04-08_02-19-41.jpg"
                alt="Roland Burgermeister – fondateur BMI Technologies"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 300px"
              />
            </div>
            <div className="reveal delay-100 lg:col-span-2 space-y-4 text-[var(--secondary)] leading-relaxed">
              <p>
                Né et établi à Baulmes, dans le canton de Vaud en Suisse, Roland
                Burgermeister est un ingénieur autodidacte passionné autant par
                le jeu d&apos;échecs que par l&apos;électronique et
                l&apos;informatique. Cette double passion l&apos;a naturellement
                conduit à imaginer un projet ambitieux : construire un robot
                capable de jouer aux échecs de façon entièrement autonome.
              </p>
              <p>
                Après des années de recherche, de prototypage et de
                perfectionnement, il fonde{" "}
                <strong style={{ color: "var(--foreground)" }}>BMI Technologies</strong>, une raison
                individuelle dont l&apos;objet est de développer des solutions
                innovantes à la croisée de la robotique, de la vision par
                ordinateur et du logiciel.
              </p>
              <p>
                Son leitmotiv :{" "}
                <em style={{ color: "var(--foreground)" }}>
                  &ldquo;Au moins aussi passionné d&apos;échecs qu&apos;il est
                  mordu d&apos;électronique et d&apos;informatique.&rdquo;
                </em>
              </p>
            </div>
          </div>
        </section>

        {/* Description du projet */}
        <section>
          <h2 className="reveal text-2xl font-bold text-[var(--foreground)] mb-8 pb-4 border-b border-[var(--border-subtle)]">
            Le projet en détail
          </h2>
          <div className="space-y-6 text-[var(--secondary)] leading-relaxed">
            <div className="reveal">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">Histoire et inspiration</h3>
              <p className="mb-3">
                En 1769, Wolfgang von Kempelen présentait à la cour de
                l&apos;impératrice Marie-Thérèse d&apos;Autriche un automate
                extraordinaire : le{" "}
                <strong style={{ color: "var(--foreground)" }}>Turc mécanique</strong>. Cet engin,
                représentant un joueur d&apos;échecs turc en costume, semblait
                capable de battre les meilleurs joueurs de l&apos;époque. La
                réalité était plus prosaïque — un joueur humain se cachait à
                l&apos;intérieur du meuble — mais la fascination était totale.
              </p>
              <p>
                Plus de deux siècles plus tard, Roland Burgermeister s&apos;inspire
                de cette légende pour créer son propre Turc mécanique : mais cette
                fois,{" "}
                <strong style={{ color: "var(--foreground)" }}>l&apos;intelligence est entièrement artificielle</strong>.
                Pas de joueur caché, seulement des capteurs, des algorithmes et un
                bras robotique.
              </p>
            </div>

            <div className="reveal delay-100">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3 mt-4">Architecture technique</h3>
              <p className="mb-4">Le robot se compose de plusieurs couches interdépendantes :</p>
              <ol className="list-none space-y-4">
                {steps.map((step, i) => (
                  <li
                    key={step.num}
                    className={`reveal ${i === 0 ? "delay-100" : i === 1 ? "delay-200" : i === 2 ? "delay-300" : "delay-400"} flex gap-5 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5`}
                    style={{
                      background: "var(--surface-0)",
                      border: "1px solid var(--border-subtle)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <span
                      className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                      style={{ background: "var(--brand-blue)" }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <div className="font-semibold text-[var(--foreground)] mb-1">{step.title}</div>
                      <div className="text-sm">{step.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="reveal delay-200">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3 mt-4">Défis et apprentissages</h3>
              <p className="mb-3">
                La principale difficulté du projet réside dans la{" "}
                <strong style={{ color: "var(--foreground)" }}>cohérence entre les trois couches</strong> :
                la latence de la vision, le temps de calcul du moteur et la vitesse
                d&apos;exécution mécanique doivent s&apos;articuler parfaitement
                pour offrir une expérience fluide.
              </p>
              <p>
                Un autre défi majeur est la{" "}
                <strong style={{ color: "var(--foreground)" }}>robustesse de la vision</strong> aux
                variations d&apos;éclairage. Plusieurs sessions de calibration et
                l&apos;utilisation de techniques d&apos;augmentation de données ont
                permis d&apos;atteindre un taux de reconnaissance supérieur à 99 %
                dans des conditions normales.
              </p>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section>
          <blockquote
            className="reveal rounded-2xl px-8 py-8 relative"
            style={{ background: "var(--brand-blue-light)", borderLeft: "4px solid var(--brand-blue)" }}
          >
            <p className="text-xl italic text-[var(--foreground)] leading-relaxed mb-4">
              &ldquo;Le Turc n&apos;avait pas d&apos;âme — le mien non plus, mais il pense
              vraiment.&rdquo;
            </p>
            <footer className="text-sm font-semibold" style={{ color: "var(--brand-blue)" }}>
              — Roland Burgermeister, fondateur de BMI Technologies
            </footer>
          </blockquote>
        </section>

        {/* Stack technique */}
        <section>
          <h2 className="reveal text-2xl font-bold text-[var(--foreground)] mb-6 pb-4 border-b border-[var(--border-subtle)]">
            Stack technique
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((group, i) => (
              <div
                key={group.category}
                className={`reveal ${i === 0 ? "delay-100" : i === 1 ? "delay-200" : i === 2 ? "delay-300" : "delay-400"} rounded-xl p-5 transition-all duration-300 hover:-translate-y-1`}
                style={{
                  background: "var(--surface-0)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <h3
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: "var(--brand-blue)" }}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md px-2 py-1 text-xs font-medium text-[var(--foreground)]"
                      style={{ background: "var(--surface-1)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Galerie photos */}
        <section>
          <h2 className="reveal text-2xl font-bold text-[var(--foreground)] mb-6 pb-4 border-b border-[var(--border-subtle)]">
            Galerie
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "photo_2026-04-08_02-19-25.jpg",
              "photo_2026-04-08_02-19-41.jpg",
              "photo_2026-04-08_02-19-47.jpg",
              "photo_2026-04-08_02-19-51.jpg",
              "photo_2026-04-08_02-19-54.jpg",
              "photo_2026-04-08_02-19-57.jpg",
              "photo_2026-04-08_02-20-00.jpg",
              "photo_2026-04-08_02-20-03.jpg",
              "photo_2026-04-08_02-20-07.jpg",
              "photo_2026-04-08_02-20-10.jpg",
              "photo_2026-04-08_02-20-14.jpg",
              "photo_2026-04-08_02-20-17.jpg",
              "photo_2026-04-08_02-20-21.jpg",
              "photo_2026-04-08_02-20-27.jpg",
              "photo_2026-04-08_02-20-30.jpg",
              "photo_2026-04-08_02-20-34.jpg",
              "photo_2026-04-08_02-20-38.jpg",
            ].map((file, i) => (
              <div
                key={file}
                className="reveal relative overflow-hidden rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  aspectRatio: "4/3",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <Image
                  src={`/img/${file}`}
                  alt={`Galerie du Turc – photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Navigation bas */}
        <div className="reveal flex flex-col items-center gap-4 pt-8 border-t border-[var(--border-subtle)] sm:flex-row">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--surface-0)",
              border: "1px solid var(--border-default)",
              color: "var(--foreground)",
            }}
          >
            ← Retour aux projets
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "var(--brand-blue)" }}
          >
            Intéressé par le projet ? →
          </Link>
        </div>
      </div>
    </div>
  );
}
