import type { Metadata } from "next";
import Link from "next/link";

const focusAreas = [
  {
    title: "Développement web",
    text: "Interfaces métier, supervision temps réel, visualisation et outils connectés au terrain.",
  },
  {
    title: "Systèmes embarqués",
    text: "Capteurs, automatisation, électronique et intégration logiciel-matériel autour de prototypes concrets.",
  },
  {
    title: "Collaborations ciblées",
    text: "BMI Technologies reste ouverte aux échanges avec des profils capables d'apporter une expertise directe et opérationnelle.",
  },
];

export const metadata: Metadata = {
  title: "Carrières – BMI Technologies",
  description:
    "Opportunités, collaborations et candidatures spontanées chez BMI Technologies, entreprise suisse spécialisée en développement logiciel, matériel et solutions intelligentes.",
};

export default function CarrieresPage() {
  return (
    <div className="min-h-screen bg-[var(--surface-1)]">
      <section
        className="relative overflow-hidden px-6 py-24"
        style={{ background: "var(--brand-section-bg)" }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <span
            className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{
              background: "var(--brand-section-badge-bg)",
              color: "var(--brand-section-badge-color)",
              border: "1px solid var(--brand-section-badge-border)",
            }}
          >
            Carrières & collaborations
          </span>

          <h1
            className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[1.03] lg:text-6xl"
            style={{ color: "var(--brand-section-text)" }}
          >
            Rejoindre BMI Technologies sur des projets utiles, concrets et intelligents.
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: "var(--brand-section-secondary)" }}
          >
            La structure reste compacte, mais elle s&apos;ouvre aux candidatures spontanées,
            aux collaborations ciblées et aux profils capables d&apos;intervenir avec impact
            sur le logiciel, le web ou les systèmes embarqués.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@bmi-tech.ch?subject=Candidature%20BMI%20Technologies"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
                boxShadow: "var(--shadow-primary)",
                borderRadius: "var(--radius-pill)",
              }}
            >
              Envoyer une candidature
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--brand-section-ghost-bg)",
                color: "var(--brand-section-ghost-color)",
                border: "1px solid var(--brand-section-ghost-border)",
                borderRadius: "var(--radius-pill)",
              }}
            >
              Parler avec l&apos;équipe
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-[var(--foreground)]">
            Profils pertinents aujourd&apos;hui
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--secondary)]">
            Les échanges ont le plus de valeur lorsqu&apos;ils s&apos;ancrent dans l&apos;exécution :
            produit, démonstrateur, intégration et expérience utilisateur.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="p-7"
              style={{
                background: "var(--surface-0)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                style={{ background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
              >
                Focus
              </div>
              <h3 className="text-xl font-black text-[var(--foreground)]">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--secondary)]">
                {area.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}