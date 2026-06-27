"use client";

import { BadgeCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const points = [
  "Përvojë në objekte banimi, afariste dhe industriale.",
  "Profile alumini, xham dhe pajisje të përzgjedhura me standarde evropiane.",
  "Montim i kujdesshëm nga ekip profesional dhe kontroll i detajuar në terren.",
  "Komunikim i qartë, afate serioze dhe fokus i plotë në kënaqësinë e klientit."
];

export function AboutSection() {
  return (
    <section id="rreth-nesh" className="relative overflow-hidden bg-graphite py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container-premium grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative">
            <div className="relative h-[34rem] overflow-hidden rounded-lg border border-white/10 shadow-premium">
              <Image
                src="/images/site/about-detail.jpeg"
                alt="Detaj i sistemeve moderne të aluminit"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/88 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/12 bg-graphite/76 p-5 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gold text-graphite">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg font-black text-white">Standard evropian në çdo projekt</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Nga matja te montimi, çdo hap menaxhohet me kujdes teknik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            eyebrow="Rreth Nesh"
            title="Partner serioz për sisteme alumini me pamje premium dhe funksion të besueshëm."
            description="EURO AL-SHPK ndërton zgjidhje moderne alumini për klientë që kërkojnë cilësi të lartë, izolim, siguri dhe përfundim elegant. Punojmë në të gjithë Kosovën dhe realizojmë projekte në Evropë sipas kërkesës së klientëve."
          />

          <div className="mt-8 grid gap-4">
            {points.map((point) => (
              <div key={point} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-sm leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gold/25 bg-gold/10 p-5">
              <BadgeCheck className="h-7 w-7 text-gold" aria-hidden="true" />
              <p className="mt-4 text-lg font-black text-white">Cilësi e verifikueshme</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Materiale të zgjedhura për qëndrueshmëri dhe pamje afatgjatë.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
              <ShieldCheck className="h-7 w-7 text-gold" aria-hidden="true" />
              <p className="mt-4 text-lg font-black text-white">Garanci në realizim</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Dorëzim i rregullt, montim i pastër dhe mbështetje pas projektit.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
