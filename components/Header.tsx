"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { NavigationRegular, DismissRegular, WeatherSunnyRegular, WeatherMoonRegular } from "@fluentui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border-subtle)]"
      style={{ background: "var(--header-bg)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <div className="rounded-lg px-2 py-1.5">
            <Image
              src="/img/logo-bmi.png"
              alt="BMI Technologies"
              width={96}
              height={32}
              className="h-8 w-auto object-contain"
              style={{ width: "auto", height: "2rem" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors relative ${
                pathname === link.href
                  ? "text-[var(--brand-blue)]"
                  : "text-[var(--secondary)] hover:text-[var(--foreground)]"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "var(--brand-blue)" }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-[var(--surface-2)] transition-colors text-[var(--secondary)]"
            aria-label="Basculer le thème"
          >
            {mounted && theme === "dark" ? (
              <WeatherSunnyRegular fontSize={20} />
            ) : (
              <WeatherMoonRegular fontSize={20} />
            )}
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))", boxShadow: "0 4px 14px rgba(192,0,26,0.30)" }}
          >
            Nous contacter
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-[var(--surface-2)] transition-colors text-[var(--secondary)]"
            aria-label="Basculer le thème"
          >
            {mounted && theme === "dark" ? (
              <WeatherSunnyRegular fontSize={20} />
            ) : (
              <WeatherMoonRegular fontSize={20} />
            )}
          </button>
          <button
            className="p-2 rounded-lg hover:bg-[var(--surface-2)] transition-colors text-[var(--foreground)]"
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
        <div className="md:hidden bg-[var(--surface-0)] border-t border-[var(--border-subtle)] px-6 pt-4 pb-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[var(--brand-blue-light)] text-[var(--brand-blue)]"
                    : "text-[var(--foreground)] hover:bg-[var(--surface-1)]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--brand-blue)" }}
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
