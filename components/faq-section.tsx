"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-graphite py-24 md:py-32">
      <div className="container-premium grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Pyetje të shpeshta para fillimit të projektit."
            description="Nëse keni një projekt konkret, na dërgoni dimensionet ose na kontaktoni për matje në objekt."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <article key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.045]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-black text-white">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-slate-300">{faq.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
