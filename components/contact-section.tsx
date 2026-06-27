"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { company } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");
    const website = String(formData.get("website") || "");

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, phone, message, website })
      });

      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Email-i nuk mund të dërgohej.");
      }

      setStatusType("success");
      setStatus(result?.message || "Kërkesa u dërgua me sukses.");
      form.reset();
    } catch (error) {
      setStatusType("error");
      setStatus(
        error instanceof Error
          ? error.message
          : "Email-i nuk mund të dërgohej. Ju lutemi provoni përsëri."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="relative overflow-hidden bg-graphite py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Kontakt"
            title="Kërko ofertë për projektin tuaj."
            description="Na tregoni çfarë dëshironi të realizoni dhe ekipi ynë do t'ju kontaktojë për konsultim, matje dhe ofertë të qartë."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="glass-panel rounded-lg p-6 md:p-8">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Emri
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="min-h-12 rounded-lg border border-white/10 bg-white/8 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-gold"
                    placeholder="Emri juaj"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-200">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="min-h-12 rounded-lg border border-white/10 bg-white/8 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-gold"
                    placeholder="email@example.com"
                  />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-bold text-slate-200">
                Telefoni
                <input
                  name="phone"
                  required
                  autoComplete="tel"
                  className="min-h-12 rounded-lg border border-white/10 bg-white/8 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-gold"
                  placeholder="+383 ..."
                />
              </label>
              <label className="mt-5 grid gap-2 text-sm font-bold text-slate-200">
                Mesazhi
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="resize-none rounded-lg border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-gold"
                  placeholder="Përshkruani projektin, dimensionet ose shërbimin që ju nevojitet."
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-black text-graphite shadow-gold transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-graphite disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
              >
                {isSubmitting ? "Duke dërguar..." : "Dërgo Kërkesën"}
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
              {status ? (
                <p
                  className={`mt-4 text-sm font-semibold ${
                    statusType === "success" ? "text-gold" : "text-red-300"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status}
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-5">
              <div className="glass-panel rounded-lg p-6">
                <h3 className="text-2xl font-black text-white">EURO AL-SHPK</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Punojmë në të gjithë Kosovën dhe realizojmë projekte në Evropë sipas kërkesës së klientëve.
                </p>
                <div className="mt-6 grid gap-4">
                  <a href={company.phoneHref} className="flex items-center gap-3 text-sm font-bold text-slate-200 hover:text-gold">
                    <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                    {company.phone}
                  </a>
                  <a href={company.emailHref} className="flex items-center gap-3 text-sm font-bold text-slate-200 hover:text-gold">
                    <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                    {company.email}
                  </a>
                  <p className="flex items-start gap-3 text-sm font-bold leading-6 text-slate-200">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    {company.address}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-premium">
                <iframe
                  title="EURO AL-SHPK Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
