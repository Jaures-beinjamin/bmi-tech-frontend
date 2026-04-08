"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRightRegular, ChessRegular } from "@fluentui/react-icons";

function CountUp({ to, duration = 1400 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={spanRef}>{val}</span>;
}

export default function HeroBanner() {
  return (
    <section
      className="relative min-h-[92vh] overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #0D0006 0%, #140008 40%, #08080F 100%)" }}
    >

      {/* ── Fond animé : orbes sur fond sombre ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Orbe rouge haut-gauche */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C0001A 0%, transparent 65%)" }}
        />
        {/* Orbe bleu bas-droite */}
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #1A3A8F 0%, transparent 65%)" }}
        />
        {/* Grille fine blanche */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Ligne décorative rouge en haut */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent 0%, #C0001A 30%, #C0001A 70%, transparent 100%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-28 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── Texte ── */}
          <div>
            <div className="animate-fade-in">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-7"
                style={{ background: "rgba(192,0,26,0.18)", color: "#FCA5A5", border: "1px solid rgba(192,0,26,0.35)" }}
              >
                🇨🇭 Startup suisse innovante · Baulmes, VD
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 text-5xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-6xl xl:text-7xl mb-6">
              Robot.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #C0001A, #E84B4B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Intelligence.
              </span>
              <br />
              <span className="text-white">Victoire.</span>
            </h1>

            <p className="animate-fade-up delay-200 text-lg leading-relaxed text-white/65 mb-10 max-w-lg">
              Inspiré du légendaire{" "}
              <strong className="text-white">Turc mécanique</strong> du XVIII<sup>e</sup> siècle —
              Roland Burgermeister réinvente le jeu d&apos;échecs avec la vision
              artificielle, la robotique de précision et l&apos;IA.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-14">
              <a
                href="/projets/turc"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #C0001A, #920014)",
                  boxShadow: "0 8px 24px rgba(192,0,26,0.45)",
                }}
              >
                <ChessRegular fontSize={20} />
                Voir le robot
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Investissement / Contact <ArrowRightRegular fontSize={18} />
              </a>
            </div>

            {/* Stats avec compteurs animés */}
            <div className="animate-fade-up delay-400 grid grid-cols-3 gap-0 divide-x divide-white/10 border-t border-white/10 pt-8">
              {[
                { to: 99, suffix: "%", label: "Précision\nvision" },
                { to: 6, suffix: " DOF", label: "Degrés de\nliberté" },
                { emoji: "🇨🇭", label: "Made in\nSwitzerland" },
              ].map((s, i) => (
                <div key={i} className="text-center px-4 first:pl-0 last:pr-0">
                  <div className="text-3xl font-extrabold text-white mb-1">
                    {s.emoji ? (
                      s.emoji
                    ) : (
                      <>
                        <CountUp to={s.to!} />
                        {s.suffix}
                      </>
                    )}
                  </div>
                  <div className="text-xs text-white/45 leading-tight whitespace-pre-line">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Visuel : collage photos ── */}
          <div className="animate-scale-in delay-200 relative flex justify-center items-center">

            {/* Collage 3 photos flottant */}
            <div
              className="animate-float relative flex gap-3"
              style={{ width: 340 }}
            >
              {/* Photo principale – colonne gauche */}
              <div
                className="relative rounded-2xl overflow-hidden flex-shrink-0"
                style={{
                  flex: 3,
                  height: 300,
                  border: "2px solid rgba(192,0,26,0.65)",
                  boxShadow: "0 20px 60px rgba(192,0,26,0.30), 0 8px 24px rgba(0,0,0,0.50)",
                }}
              >
                <Image
                  src="/img/photo_2026-04-08_02-19-25.jpg"
                  alt="Le Turc – robot joueur d'échecs"
                  fill
                  className="object-cover"
                  priority
                  sizes="192px"
                />
              </div>

              {/* Colonne droite : 2 petites photos */}
              <div className="flex flex-col gap-3" style={{ flex: 2 }}>
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    height: 142,
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src="/img/photo_2026-04-08_02-20-00.jpg"
                    alt="Détail du robot Turc"
                    fill
                    className="object-cover"
                    sizes="124px"
                  />
                </div>
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    height: 142,
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src="/img/photo_2026-04-08_02-20-17.jpg"
                    alt="Détail du robot Turc"
                    fill
                    className="object-cover"
                    sizes="124px"
                  />
                </div>
              </div>

              {/* Badge flottant bas-droite */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl px-4 py-3 shadow-2xl animate-fade-up delay-500"
                style={{
                  background: "rgba(20,20,30,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <div className="text-xs font-bold text-white">🤖 Robot autonome</div>
                <div className="text-xs text-white/55 mt-0.5">Vision · IA · Mécatronique</div>
              </div>

              {/* Badge flottant haut-gauche */}
              <div
                className="absolute -top-5 -left-5 rounded-2xl px-3 py-2 shadow-2xl animate-fade-up delay-600"
                style={{
                  background: "rgba(20,20,30,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(192,0,26,0.45)",
                }}
              >
                <div className="text-xs font-bold text-white">♟️ Échecs</div>
                <div className="text-xs text-white/55">Stockfish</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/15 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-1/2"
            style={{ background: "#C0001A", animation: "fade-up 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
