import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company, navItems, products } from "@/lib/data";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070A12] py-12">
      <div className="container-premium grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Sisteme moderne alumini për ndërtesa banimi, objekte afariste dhe projekte industriale në Kosovë dhe Evropë.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { label: "Facebook", icon: Facebook },
              { label: "Instagram", icon: Instagram },
              { label: "LinkedIn", icon: Linkedin }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href="#kontakt"
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/6 text-slate-300 transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-white">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-gold">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-white">Services</h3>
          <div className="mt-5 grid gap-3">
            {products.slice(0, 6).map((item) => (
              <a key={item.title} href="#produktet" className="text-sm text-slate-400 transition hover:text-gold">
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-white">Contact</h3>
          <div className="mt-5 grid gap-4">
            <a href={company.phoneHref} className="flex items-center gap-3 text-sm text-slate-400 hover:text-gold">
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              {company.phone}
            </a>
            <a href={company.emailHref} className="flex items-center gap-3 text-sm text-slate-400 hover:text-gold">
              <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
              {company.email}
            </a>
            <p className="flex items-start gap-3 text-sm leading-6 text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {company.address}
            </p>
          </div>
        </div>
      </div>

      <div className="container-premium mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 EURO AL-SHPK. Të gjitha të drejtat e rezervuara.
      </div>
    </footer>
  );
}
