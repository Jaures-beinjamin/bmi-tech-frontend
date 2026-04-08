"use client";

import { ArrowRightRegular } from "@fluentui/react-icons";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  badges: string[];
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  emoji?: string;
}

export default function ProjectCard({
  title,
  description,
  badges,
  href,
  imageSrc,
  imageAlt,
  emoji = "♟️",
}: ProjectCardProps) {
  return (
    <Link href={href} className="block group h-full">
      <div
        className="flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2"
        style={{
          background: "var(--surface-0)",
          border: "1px solid var(--border-subtle)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 24px 48px rgba(192,0,26,0.13), 0 4px 16px rgba(0,0,0,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 2px 8px rgba(0,0,0,0.05)";
        }}
      >
        {/* Visuel */}
        <div
          className="relative aspect-video overflow-hidden flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, var(--brand-blue-light), var(--surface-2))",
          }}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-7xl select-none transition-transform duration-500 group-hover:scale-110">
              {emoji}
            </div>
          )}
          {/* Overlay hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(192,0,26,0.06)" }}
          />
        </div>

        {/* Contenu */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="font-bold text-base text-[var(--foreground)] mb-3 leading-snug">
            {title}
          </h3>

          <p className="text-sm text-[var(--secondary)] leading-relaxed mb-4 flex-1">
            {description}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: "var(--brand-blue-light)",
                  color: "var(--brand-blue)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "var(--brand-blue)" }}
          >
            Voir le projet
            <ArrowRightRegular
              fontSize={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

