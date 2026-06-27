"use client";

import { stats } from "@/lib/data";
import { AnimatedCounter } from "./animated-counter";
import { Reveal } from "./reveal";

export function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-white py-16 text-graphite">
      <div className="container-premium grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="flex min-h-36 items-center gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold-deep">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-4xl font-black">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 max-w-36 text-sm font-bold uppercase leading-5 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
