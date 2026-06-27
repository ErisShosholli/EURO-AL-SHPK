"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const filters = ["Të gjitha", "Banimi", "Fasada", "Afariste", "Dyer & Dritare"];

export function ProjectsGallery() {
  const [active, setActive] = useState("Të gjitha");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  const visibleProjects = useMemo(
    () => (active === "Të gjitha" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="projektet" className="bg-[#070A12] py-24 md:py-32">
      <div className="container-premium">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Projektet"
              title="Punime të realizuara me linja të pastra dhe detaje arkitekturore."
              description="Galeria përfshin ndërtesa banimi, fasada moderne, dyer, dritare dhe sisteme alumini të montuara në terren."
            />
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`min-h-10 rounded-full border px-4 text-sm font-bold transition ${
                    active === filter
                      ? "border-gold bg-gold text-graphite"
                      : "border-white/15 bg-white/6 text-slate-300 hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="masonry-grid mt-14">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="masonry-item"
              >
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className={`group relative w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] text-left shadow-premium ${project.size}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-graphite/88 via-graphite/8 to-transparent" />
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-graphite/60 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <span className="mb-2 inline-flex rounded-full bg-gold px-3 py-1 text-xs font-black text-graphite">
                      {project.category}
                    </span>
                    <span className="block text-xl font-black text-white">{project.title}</span>
                  </span>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-graphite/92 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Mbyll projektin"
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/12 bg-black shadow-premium"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={selected.image} alt={selected.title} fill sizes="90vw" className="object-contain" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/88 to-transparent p-6">
                <p className="text-sm font-bold text-gold">{selected.category}</p>
                <p className="mt-1 text-2xl font-black text-white">{selected.title}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
