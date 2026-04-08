"use client";

import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { NavigationRegular, DismissRegular, WeatherSunnyRegular, WeatherMoonRegular } from "@fluentui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/equipe", label: "Équipe" },
  { href: "/carrieres", label: "Carrières" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  return (
    <header
      className="sticky top-0 z-50 px-4 pt-4 md:px-6"
      style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 border px-6 py-4"
        style={{
          background: "var(--header-bg)",
          borderColor: "var(--border-subtle)",
          borderRadius: "calc(var(--radius-xl) + 0.1rem)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/img/logo-bmi.png"
            alt="BMI Technologies"
            width={272}
            height={84}
            className="h-14 w-auto object-contain md:h-16 lg:h-[4.5rem]"
            style={{ width: "auto", height: "4.5rem" }}
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full p-1" style={{ background: "color-mix(in srgb, var(--surface-0) 78%, transparent)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex items-center rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "text-[var(--brand-blue)]"
                  : "text-[var(--secondary)] hover:text-[var(--foreground)]"
              }`}
              style={
                pathname === link.href
                  ? {
                      background: "var(--brand-blue-light)",
                      boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--brand-blue) 14%, transparent)",
                    }
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 transition-colors text-[var(--secondary)]"
            style={{ borderRadius: "var(--radius-pill)", background: "color-mix(in srgb, var(--surface-0) 82%, transparent)" }}
            aria-label="Basculer le thème"
          >
            {isClient && theme === "dark" ? (
              <WeatherSunnyRegular fontSize={20} />
            ) : (
              <WeatherMoonRegular fontSize={20} />
            )}
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))", boxShadow: "var(--shadow-primary)", borderRadius: "var(--radius-pill)" }}
          >
            Nous contacter
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 transition-colors text-[var(--secondary)]"
            style={{ borderRadius: "var(--radius-pill)", background: "color-mix(in srgb, var(--surface-0) 82%, transparent)" }}
            aria-label="Basculer le thème"
          >
            {isClient && theme === "dark" ? (
              <WeatherSunnyRegular fontSize={20} />
            ) : (
              <WeatherMoonRegular fontSize={20} />
            )}
          </button>
          <button
            className="p-3 transition-colors text-[var(--foreground)]"
            style={{ borderRadius: "var(--radius-pill)", background: "color-mix(in srgb, var(--surface-0) 82%, transparent)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? (
              <DismissRegular fontSize={24} />
            ) : (
              <NavigationRegular fontSize={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="mx-auto mt-3 max-w-6xl border px-6 pt-4 pb-6 lg:hidden"
          style={{
            background: "var(--surface-0)",
            borderColor: "var(--border-subtle)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-sm)",
          }}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[var(--brand-blue-light)] text-[var(--brand-blue)]"
                    : "text-[var(--foreground)] hover:bg-[var(--surface-1)]"
                }`}
                style={{ borderRadius: "var(--radius-md)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <Link
                href="/contact"
                className="flex items-center justify-center px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--brand-blue)", borderRadius: "var(--radius-pill)" }}
                onClick={() => setMobileOpen(false)}
              >
                Nous contacter
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
