"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import Image from "next/image";
import { heroCards, trustPoints } from "@/lib/data";

export function HeroSection() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 110]);
  const copyY = useTransform(scrollY, [0, 800], [0, -45]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-graphite">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image
          src="/images/site/hero-building.jpeg"
          alt="Ndërtesë moderne me dritare dhe sisteme alumini"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-hero-vignette" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/25" />

      <div className="container-premium relative z-10 grid min-h-screen items-center gap-10 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y: copyY }} className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-graphite/55 px-4 py-2 text-xs font-bold uppercase text-gold backdrop-blur-md"
          >
            <Check className="h-4 w-4" aria-hidden="true" />
            Dyer · Dritare · Fasada
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-5xl font-black leading-[0.98] text-white md:text-7xl"
          >
            KUALITET QË NGRIT ÇDO{" "}
            <span className="text-gold drop-shadow-[0_10px_35px_rgba(244,180,0,0.3)]">
              NDËRTIM.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg"
          >
            EURO AL-SHPK ofron sisteme moderne alumini për ndërtesa banimi,
            objekte afariste dhe projekte industriale në Kosovë dhe Evropë.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projektet"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-black text-graphite shadow-gold transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-graphite"
            >
              Shiko Projektet
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-graphite"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Na Kontaktoni
            </a>
          </motion.div>
        </motion.div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto grid max-w-md gap-4 rounded-lg border border-white/12 bg-graphite/58 p-4 shadow-premium backdrop-blur-2xl"
          >
            {heroCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + index * 0.08 }}
                  className="grid grid-cols-[3rem_1fr] gap-4 rounded-lg border border-white/10 bg-white/8 p-4"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-black text-white">{card.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-300">{card.text}</span>
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-graphite/92 backdrop-blur-xl">
        <div className="container-premium grid gap-3 py-4 md:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.label} className="flex items-center gap-3 text-sm text-slate-300">
                <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{point.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
