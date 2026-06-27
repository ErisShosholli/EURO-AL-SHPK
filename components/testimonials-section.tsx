"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const previous = () => setIndex((value) => (value === 0 ? testimonials.length - 1 : value - 1));
  const next = () => setIndex((value) => (value === testimonials.length - 1 ? 0 : value + 1));

  return (
    <section className="bg-white py-24 text-graphite md:py-32">
      <div className="container-premium grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Vlerësime"
            title="Klientë që kërkojnë standard, jo vetëm produkt."
            description="Qasja jonë bashkon këshillim teknik, zbatim të saktë dhe komunikim të qartë në çdo fazë."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.1)] md:p-9">
            <div className="mb-7 flex gap-1 text-gold-deep" aria-label="5 nga 5 yje">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-5 w-5 fill-current" aria-hidden="true" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="text-2xl font-semibold leading-relaxed text-slate-950">
                  “{active.quote}”
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-graphite text-sm font-black text-gold">
                    {active.initials}
                  </span>
                  <span>
                    <span className="block font-black text-slate-950">{active.name}</span>
                    <span className="mt-1 block text-sm font-semibold text-slate-500">{active.role}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((item, dotIndex) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Shfaq vlerësimin ${dotIndex + 1}`}
                    onClick={() => setIndex(dotIndex)}
                    className={`h-2.5 rounded-full transition ${
                      dotIndex === index ? "w-8 bg-gold" : "w-2.5 bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Vlerësimi paraprak"
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 transition hover:border-gold hover:text-gold-deep"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Vlerësimi tjetër"
                  className="grid h-11 w-11 place-items-center rounded-full bg-graphite text-white transition hover:bg-gold hover:text-graphite"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
