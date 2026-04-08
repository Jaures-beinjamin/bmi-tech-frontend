import type { SVGProps } from "react";

type IllustrationProps = SVGProps<SVGSVGElement>;

export function ChessMachineIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" aria-hidden="true" {...props}>
      <rect x="18" y="92" width="184" height="44" rx="16" fill="color-mix(in srgb, var(--brand-blue) 7%, var(--surface-0))" />
      <rect x="42" y="100" width="92" height="28" rx="8" fill="var(--surface-0)" stroke="var(--brand-blue)" strokeWidth="2" />
      <path d="M62 100v28M82 100v28M102 100v28M122 100v28" stroke="color-mix(in srgb, var(--brand-blue) 28%, transparent)" />
      <path d="M42 114h92" stroke="color-mix(in srgb, var(--brand-blue) 28%, transparent)" />
      <circle cx="58" cy="108" r="4" fill="var(--brand-red)" />
      <circle cx="118" cy="120" r="4" fill="var(--brand-blue)" />
      <path d="M154 38h16c8.837 0 16 7.163 16 16v46" stroke="var(--brand-blue)" strokeWidth="10" strokeLinecap="round" />
      <path d="M186 100h-24" stroke="var(--brand-blue)" strokeWidth="10" strokeLinecap="round" />
      <path d="M158 100c0-8.837 7.163-16 16-16" stroke="var(--brand-red)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="148" cy="34" r="16" fill="var(--brand-red-light)" stroke="var(--brand-red)" strokeWidth="3" />
      <path d="M144 34h8M148 30v8" stroke="var(--brand-red)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function WebInterfaceIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" aria-hidden="true" {...props}>
      <rect x="20" y="22" width="180" height="116" rx="18" fill="var(--surface-0)" stroke="var(--brand-blue)" strokeWidth="2" />
      <rect x="20" y="22" width="180" height="24" rx="18" fill="color-mix(in srgb, var(--brand-blue) 8%, var(--surface-0))" />
      <circle cx="40" cy="34" r="4" fill="var(--brand-blue)" />
      <circle cx="54" cy="34" r="4" fill="var(--brand-red)" />
      <circle cx="68" cy="34" r="4" fill="color-mix(in srgb, var(--brand-red) 35%, white)" />
      <rect x="36" y="60" width="72" height="50" rx="10" fill="color-mix(in srgb, var(--brand-blue) 7%, var(--surface-0))" />
      <path d="M52 60v50M68 60v50M84 60v50M100 60v50" stroke="color-mix(in srgb, var(--brand-blue) 22%, transparent)" />
      <path d="M36 76h72M36 92h72" stroke="color-mix(in srgb, var(--brand-blue) 22%, transparent)" />
      <rect x="120" y="60" width="48" height="10" rx="5" fill="var(--brand-blue)" />
      <rect x="120" y="78" width="62" height="8" rx="4" fill="color-mix(in srgb, var(--brand-red) 35%, white)" />
      <rect x="120" y="92" width="54" height="8" rx="4" fill="color-mix(in srgb, var(--brand-blue) 24%, white)" />
      <rect x="120" y="108" width="38" height="8" rx="4" fill="color-mix(in srgb, var(--brand-blue) 16%, white)" />
    </svg>
  );
}

export function VisionEngineIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" aria-hidden="true" {...props}>
      <rect x="24" y="28" width="172" height="104" rx="18" fill="var(--surface-0)" stroke="var(--brand-red)" strokeWidth="2" />
      <path d="M42 80c16-24 38-36 68-36s52 12 68 36c-16 24-38 36-68 36S58 104 42 80Z" fill="color-mix(in srgb, var(--brand-red) 10%, var(--surface-0))" stroke="var(--brand-red)" strokeWidth="2.5" />
      <circle cx="110" cy="80" r="22" fill="var(--brand-red-light)" stroke="var(--brand-red)" strokeWidth="2.5" />
      <circle cx="110" cy="80" r="10" fill="var(--brand-blue)" />
      <path d="M58 50h18M58 50v18" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round" />
      <path d="M162 50h-18M162 50v18" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round" />
      <path d="M58 110h18M58 110V92" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round" />
      <path d="M162 110h-18M162 110V92" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function RoboticArmIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" aria-hidden="true" {...props}>
      <rect x="140" y="28" width="22" height="88" rx="11" fill="var(--brand-red-light)" stroke="var(--brand-red)" strokeWidth="3" />
      <rect x="132" y="112" width="38" height="16" rx="8" fill="var(--brand-blue)" />
      <circle cx="150" cy="54" r="10" fill="var(--surface-0)" stroke="var(--brand-red)" strokeWidth="3" />
      <path d="M140 60 100 78" stroke="var(--brand-red)" strokeWidth="10" strokeLinecap="round" />
      <circle cx="96" cy="80" r="10" fill="var(--surface-0)" stroke="var(--brand-red)" strokeWidth="3" />
      <path d="M90 86 64 108" stroke="var(--brand-blue)" strokeWidth="10" strokeLinecap="round" />
      <circle cx="58" cy="112" r="9" fill="var(--surface-0)" stroke="var(--brand-blue)" strokeWidth="3" />
      <path d="M52 118v12M64 118v12" stroke="var(--brand-blue)" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 132h156" stroke="color-mix(in srgb, var(--brand-blue) 22%, transparent)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}