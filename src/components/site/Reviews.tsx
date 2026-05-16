import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mariana S.",
    text: "Melhor espetinho que já comi! O queijo coalho é viciante e o atendimento é rápido.",
    rating: 5,
  },
  {
    name: "Rafael P.",
    text: "Pedi pelo WhatsApp e chegou em 25 minutos quentinho. Drinks autorais incríveis!",
    rating: 5,
  },
  {
    name: "Camila R.",
    text: "Ambiente top e a kafta é absurda. Virou lugar fixo da nossa quarta-feira.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <header className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
            <Star className="h-3.5 w-3.5 fill-current" /> Avaliações
          </span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">
            Quem prova, <span className="text-fire">volta</span>
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-fire"
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-fire opacity-20" />
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <p className="mt-6 font-display text-lg">{r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
