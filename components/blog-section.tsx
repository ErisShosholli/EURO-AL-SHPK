"use client";

import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function BlogSection() {
  return (
    <section id="blog" className="bg-[#070A12] py-24 md:py-32">
      <div className="container-premium">
        <Reveal>
          <SectionHeading
            eyebrow="Blog"
            title="Këshilla profesionale për sisteme alumini dhe fasada."
            description="Tema të shkurtra që ndihmojnë klientët të kuptojnë materialet, izolimin, dizajnin dhe procesin e montimit."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <Reveal key={post.title} delay={index * 0.06}>
                <article className="group flex min-h-72 flex-col rounded-lg border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-gold/40">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-xl font-black leading-tight text-white">{post.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{post.text}</p>
                  <a href="#kontakt" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-gold">
                    Diskuto projektin
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
