import { useEffect, useState } from "react";
import { Flame, MessageCircle, Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "./cart-context";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#promocoes", label: "Promoções" },
  { href: "#drinks", label: "Drinks" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, open: openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-fire shadow-glow animate-flicker">
            <Flame className="h-5 w-5 text-white" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-xl tracking-wide text-foreground">
              Armazém do Espetinho
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition-colors hover:border-accent/40"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-fire px-1 text-[10px] font-bold text-white shadow-glow">
                {count}
              </span>
            )}
          </button>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-fire px-5 py-2.5 text-sm font-semibold text-white shadow-fire transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir no WhatsApp
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass border-t border-border/60 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-fire px-5 py-3 text-sm font-semibold text-white shadow-fire"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
