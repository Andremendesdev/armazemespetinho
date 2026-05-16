import { useState } from "react";
import { categories } from "@/data/menu";
import { MenuCard } from "./MenuCard";
import { UtensilsCrossed } from "lucide-react";

export function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="cardapio" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <header className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
            <UtensilsCrossed className="h-3.5 w-3.5" /> Cardápio
          </span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">
            Direto da <span className="text-fire">brasa</span> pra você
          </h2>
          <p className="mt-3 text-muted-foreground">
            Selecione uma categoria e monte seu pedido. Tudo preparado na hora.
          </p>
        </header>

        <div id="drinks" className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                active === c.id
                  ? "bg-fire text-white shadow-fire"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {current.items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
