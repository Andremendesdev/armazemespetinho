import { Plus, Minus } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { useCart } from "./cart-context";

export function MenuCard({ item }: { item: MenuItem }) {
  const { add, lines, setQty } = useCart();
  const line = lines.find((l) => l.item.id === item.id);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-fire">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        {item.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-fire px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-glow">
            {item.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl">{item.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-2xl text-fire">R$ {item.price.toFixed(2)}</span>
          {line ? (
            <div className="inline-flex items-center rounded-full border border-border bg-background">
              <button
                onClick={() => setQty(item.id, line.qty - 1)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"
                aria-label="Diminuir"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-7 text-center text-sm font-semibold">{line.qty}</span>
              <button
                onClick={() => setQty(item.id, line.qty + 1)}
                className="grid h-9 w-9 place-items-center rounded-full bg-fire text-white shadow-fire hover:scale-105"
                aria-label="Aumentar"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => add(item)}
              className="inline-flex items-center gap-1.5 rounded-full bg-fire px-4 py-2 text-xs font-semibold text-white shadow-fire transition-transform hover:scale-105"
            >
              <Plus className="h-3.5 w-3.5" /> Adicionar
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
