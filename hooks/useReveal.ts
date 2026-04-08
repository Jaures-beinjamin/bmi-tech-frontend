"use client";

import { useEffect, useRef } from "react";

/**
 * Attache un IntersectionObserver à un conteneur et ajoute la classe
 * "visible" sur chaque enfant portant une classe reveal*.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right"
    );

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
