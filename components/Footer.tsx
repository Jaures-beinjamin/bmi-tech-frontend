import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const companyLinks = [
  { href: "/equipe", label: "Équipe" },
  { href: "/carrieres", label: "Carrières" },
  { href: "/blog", label: "Blog" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
];

const socials = [
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width={18} height={18}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "X (Twitter)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width={18} height={18}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width={18} height={18}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width={18} height={18}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)]">
      {/* Ligne décorative rouge en haut */}
      <div
        className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #C0001A 30%, #C0001A 70%, transparent 100%)" }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        {/* Grille principale : 4 colonnes */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* ── Colonne Brand ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/img/logo-bmi.png"
                alt="BMI Technologies"
                width={220}
                height={64}
                className="h-14 w-auto object-contain"
                style={{ width: "auto", height: "3.5rem" }}
              />
            </Link>
            <p className="text-sm text-[var(--footer-text-muted)] leading-relaxed mb-4">
              Entreprise suisse de services informatiques spécialisée dans le
              développement logiciel, le matériel intelligent et les solutions
              personnalisées.
            </p>
            <p className="text-xs text-[var(--footer-text-dim)] leading-relaxed mb-6">
              Entité indépendante basée à Baulmes, Vaud, sans lien avec BMI Group
              ni avec d&apos;autres groupes internationaux de nom similaire.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Colonne Navigation ── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--footer-text-muted)] mb-5">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--footer-text-muted)] hover:text-[var(--footer-text)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Colonne Compagnie ── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--footer-text-muted)] mb-5">
              Compagnie
            </h3>
            <nav className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--footer-text-muted)] hover:text-[var(--footer-text)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Colonne Contact ── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--footer-text-muted)] mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-2.5 text-sm text-[var(--footer-text-muted)]">
              <p className="font-medium text-[var(--footer-text)]">BMI Technologies</p>
              <p>1446 Baulmes, VD</p>
              <p>Baulmes, Vaud — Suisse</p>
              <a
                href="mailto:contact@bmi-tech.ch"
                className="block transition-colors hover:text-[var(--footer-text)]"
                style={{ color: "var(--footer-link)" }}
              >
                contact@bmi-tech.ch
              </a>
            </address>

            {/* Badge suisse */}
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold"
              style={{
                background: "var(--footer-surface)",
                border: "1px solid var(--footer-surface-border)",
                color: "var(--footer-link)",
              }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" width={14} height={14} aria-hidden>
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Baulmes, Vaud — Suisse
            </div>
          </div>
        </div>

        {/* ── Barre de bas de page ── */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--footer-border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--footer-text-dim)]">
            &copy; {year} BMI Technologies. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1 text-xs text-[var(--footer-text-dim)]">
            <span>Conçu &amp; développé en</span>
            <svg viewBox="0 0 20 20" fill="none" width={12} height={12} aria-label="Suisse" className="mx-0.5">
              <rect width="20" height="20" rx="3" fill="#C0001A" />
              <rect x="8.5" y="3" width="3" height="14" fill="white" />
              <rect x="3" y="8.5" width="14" height="3" fill="white" />
            </svg>
            <span>Suisse</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
