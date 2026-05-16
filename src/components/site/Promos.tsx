import { Tag, Sparkles } from "lucide-react";
import { promos } from "@/data/menu";

export function Promos() {
  return (
    <section id="promocoes" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <header className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Ofertas da casa
            </span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">
              Promoções <span className="text-fire">imperdíveis</span>
            </h2>
          </div>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promos.map((p) => {
            const off = Math.round((1 - p.price / p.oldPrice) * 100);
            return (
              <article
                key={p.id}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-fire"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fire opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-fire px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    <Tag className="h-3 w-3" /> {p.badge}
                  </span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-accent">
                    -{off}%
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground line-through">
                    R$ {p.oldPrice.toFixed(2)}
                  </span>
                  <span className="font-display text-3xl text-fire">R$ {p.price.toFixed(2)}</span>
                </div>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-border bg-secondary px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-fire hover:text-white"
                >
                  Aproveitar
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
