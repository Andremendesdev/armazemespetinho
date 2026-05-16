import grill from "@/assets/g-grill.jpg";
import ambi from "@/assets/g-ambiente.jpg";
import drinks from "@/assets/g-drinks.jpg";
import hero from "@/assets/hero-grill.jpg";
import { Camera } from "lucide-react";

export function Gallery() {
  const imgs = [
    { src: grill, alt: "Churrasqueira em chamas", span: "md:col-span-2 md:row-span-2" },
    { src: ambi, alt: "Ambiente do Armazém", span: "" },
    { src: drinks, alt: "Drinks no balcão", span: "" },
    { src: hero, alt: "Espetinho na brasa", span: "md:col-span-2" },
  ];

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <header className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
            <Camera className="h-3.5 w-3.5" /> Galeria
          </span>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">
            O clima do <span className="text-fire">Armazém</span>
          </h2>
        </header>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
          {imgs.map((im, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-3xl border border-border ${im.span}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
