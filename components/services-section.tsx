"use client";

import { serviceSteps } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ServicesSection() {
  return (
    <section id="sherbimet" className="bg-graphite py-24 md:py-32">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Shërbimet"
            title="Proces i qartë nga ideja deri te montimi final."
            description="Çdo projekt udhëhiqet me matje të sakta, projektim të kujdesshëm, prodhim cilësor dhe instalim profesional në objekt."
            align="center"
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-white/15 to-transparent lg:left-1/2 lg:block" />
          <div className="grid gap-5">
            {serviceSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <Reveal key={step.title} delay={index * 0.04}>
                  <article
                    className={`relative grid gap-5 lg:grid-cols-2 ${
                      isEven ? "" : "lg:[&>div]:col-start-2"
                    }`}
                  >
                    <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-premium transition hover:border-gold/40">
                      <div className="flex items-start gap-4">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <span className="text-sm font-black text-gold">0{index + 1}</span>
                          <h3 className="mt-1 text-xl font-black text-white">{step.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
