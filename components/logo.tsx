export function Logo() {
  return (
    <a href="#home" aria-label="EURO AL-SHPK home" className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-lg border border-gold/35 bg-gold/10 text-sm font-black text-gold shadow-gold">
        EA
      </span>
      <span className="leading-none">
        <span className="block text-xl font-black text-white">
          EURO <span className="text-gold">AL</span>
        </span>
        <span className="mt-1 block text-[0.62rem] font-semibold uppercase text-slate-400">
          Aluminium Systems
        </span>
      </span>
    </a>
  );
}
