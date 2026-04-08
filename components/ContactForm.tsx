"use client";

import { useState } from "react";
import { SendRegular } from "@fluentui/react-icons";

interface FormState {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

const inputBase =
  "w-full rounded-[1.35rem] px-5 py-3.5 text-[15px] outline-none transition-all duration-200 border bg-[var(--surface-0)] text-[var(--foreground)] placeholder:text-[var(--secondary)] border-[var(--border-default)] shadow-[var(--shadow-sm)] focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)] focus:ring-opacity-20";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ nom: "", email: "", sujet: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ nom: "", email: "", sujet: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="p-8 text-center"
        style={{
          background: "var(--brand-green-light)",
          border: "1px solid var(--brand-green)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-bold text-[var(--foreground)] mb-1">Message envoyé !</h3>
        <p className="text-sm text-[var(--secondary)]">
          Merci, notre équipe vous répondra sous 24 h ouvrées.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold underline"
          style={{ color: "var(--brand-blue)" }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "error" && (
        <div
          className="px-4 py-3 text-sm"
          style={{
            background: "var(--brand-red-light)",
            color: "var(--brand-red)",
            border: "1px solid var(--brand-red)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          Une erreur s&apos;est produite. Réessayez ou écrivez directement à{" "}
          <a href="mailto:contact@bmi-tech.ch" className="font-semibold underline">
            contact@bmi-tech.ch
          </a>.
        </div>
      )}

      {/* Nom + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
            Nom complet <span style={{ color: "var(--brand-red)" }}>*</span>
          </label>
          <input
            required
            value={form.nom}
            onChange={set("nom")}
            placeholder="Votre nom"
            className={inputBase}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5 uppercase tracking-wide">
            E-mail <span style={{ color: "var(--brand-red)" }}>*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="vous@exemple.ch"
            className={inputBase}
          />
        </div>
      </div>

      {/* Sujet */}
      <div>
        <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5 uppercase tracking-wide">
          Sujet
        </label>
        <select value={form.sujet} onChange={set("sujet")} className={inputBase}>
          <option value="">Sélectionnez un sujet…</option>
          <option value="partenariat">Partenariat</option>
          <option value="investissement">Investissement</option>
          <option value="demonstration">Demande de démonstration</option>
          <option value="medias">Presse / Médias</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5 uppercase tracking-wide">
          Message <span style={{ color: "var(--brand-red)" }}>*</span>
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          placeholder="Décrivez votre demande, partenariat ou question…"
          className={`${inputBase} resize-y`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        style={{
          background: "var(--brand-blue)",
          borderRadius: "var(--radius-pill)",
          boxShadow: "var(--shadow-primary)",
        }}
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            <SendRegular fontSize={18} />
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}


