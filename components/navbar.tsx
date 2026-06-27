"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navItems } from "@/lib/data";
import { Logo } from "./logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-graphite/86 shadow-premium backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <div className="container-premium flex h-20 items-center justify-between">
        <Logo />

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-gold"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
            {company.phone}
          </a>
          <a
            href="#kontakt"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 text-sm font-bold text-graphite shadow-gold transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-graphite"
          >
            Kërko Ofertë
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Mbyll menunë" : "Hap menunë"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-graphite/96 backdrop-blur-2xl lg:hidden"
          >
            <nav className="container-premium grid gap-2 py-5" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/8 hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={company.phoneHref}
                className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-slate-200"
              >
                <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
                {company.phone}
              </a>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 text-sm font-bold text-graphite"
              >
                Kërko Ofertë
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
