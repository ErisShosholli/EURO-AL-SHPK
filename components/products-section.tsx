"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { products } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProductsSection() {
  return (
    <section id="produktet" className="bg-graphite py-24 md:py-32">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Produktet"
            title="Sisteme alumini të ndërtuara për performancë dhe estetikë."
            description="Nga dyert hyrëse deri te fasadat strukturale, çdo zgjidhje projektohet për jetëgjatësi, izolim dhe pamje të pastër arkitekturore."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.title} delay={index * 0.05}>
                <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-premium transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white/[0.065]">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent" />
                    <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-lg border border-gold/35 bg-graphite/70 text-gold backdrop-blur-md">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-white">{product.title}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-7 text-slate-300">{product.description}</p>
                    <a
                      href="#kontakt"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-black text-gold transition group-hover:gap-3"
                    >
                      Mëso më shumë
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
