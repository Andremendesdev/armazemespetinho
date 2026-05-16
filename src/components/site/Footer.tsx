import { Flame, Instagram, MapPin, Clock, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-fire shadow-glow">
              <Flame className="h-5 w-5 text-white" />
            </span>
            <div>
              <p className="font-display text-xl">Armazém do Espetinho</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            O sabor da brasa que conquista sua noite. Espetinhos artesanais, drinks autorais e muita
            energia.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary transition-colors hover:bg-fire hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary transition-colors hover:bg-fire hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="tel:+5511999999999"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary transition-colors hover:bg-fire hover:text-white"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg">Endereço</h4>
          <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 text-accent" />
            Treze de maio 123 — Centro Piraju/SP
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg">Horário</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" /> Ter–Dom · 18:00 — 00:00
            </li>
            <li className="pl-6">Segunda fechado</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg">Como chegar</h4>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="mt-3 block overflow-hidden rounded-2xl border border-border"
          >
            <div className="aspect-video bg-[linear-gradient(135deg,oklch(0.22_0.02_50),oklch(0.16_0.01_50))] grid place-items-center text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" /> Abrir no Google Maps
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Armazém do Espetinho. Todos os direitos reservados.</p>
          <p>Feito com 🔥 e muito tempero.</p>
        </div>
      </div>
    </footer>
  );
}
