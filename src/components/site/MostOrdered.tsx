import { TrendingUp, Plus } from "lucide-react";
import { categories } from "@/data/menu";
import { useCart } from "./cart-context";

export function MostOrdered() {
  const { add } = useCart();
  const items = [
    categories[0].items[0],
    categories[0].items[4],
    categories[0].items[2],
    categories[2].items[1],
    categories[1].items[0],
    categories[0].items[3],
  ];

  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
              <TrendingUp className="h-3.5 w-3.5" /> Bombando agora
            </span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Mais pedidos</h2>
          </div>
        </header>

        <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin]">
          <ul className="flex gap-4 md:gap-5">
            {items.map((it, i) => (
              <li
                key={`${it.id}-${i}`}
                className="group relative w-[260px] shrink-0 overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-fire"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={it.image}
                    alt={it.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-fire font-display text-sm text-white shadow-glow">
                    {i + 1}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-1 font-display text-lg">{it.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-display text-xl text-fire">R$ {it.price.toFixed(2)}</span>
                    <button
                      onClick={() => add(it)}
                      aria-label="Adicionar"
                      className="grid h-9 w-9 place-items-center rounded-full bg-fire text-white shadow-fire transition-transform hover:scale-110"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
