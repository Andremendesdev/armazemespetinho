import { Clock, Star, Truck, ArrowRight, Flame } from "lucide-react";
import hero from "@/assets/hero-grill.jpg";
import { useEffect, useState } from "react";

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  // Verifica o status do horário da churrascaria
  useEffect(() => {
    const checkStatus = () => {
      const horaAtual = new Date().getHours();
      // Aberto das 18h até as 23h59 (antes das 00h)
      setIsOpen(horaAtual >= 18 && horaAtual < 24);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Atualiza a cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src={hero}
        alt="Armazem do Espetinho"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.16_0.01_50)_85%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-32 md:px-8">
        <div className="max-w-3xl animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <Flame className="h-3.5 w-3.5 text-green-600" />
            Direto da brasa, na sua noite
          </span>

          <h1 className="mt-6 font-display text-center text-5xl leading-[0.95] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            O sabor do seu <span className="text-fire">churrasco</span> tá{" "}
            <br className="hidden md:block" />
            aqui.
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg mb-10">
            Venha saborear e se apaixonar!
          </p>

          {/* DIV DO STATUS ADICIONADA AQUI EMBAIXO */}
          <div className="mt-3 flex">
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-sm transition-colors duration-300 ${
                isOpen ? "bg-green-600" : "bg-red-600"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span>{isOpen ? "Aberto agora (18h às 00h)" : "Fechado (Abre às 18h)"}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 rounded-full bg-fire px-6 py-3.5 text-sm font-semibold text-white shadow-fire transition-transform hover:scale-105"
            >
              Ver Cardápio <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-green-600 gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Fazer Pedido
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            <Stat icon={<Truck className="h-4 w-4" />} title="Entrega" value="30 min" />
            <Stat icon={<Clock className="h-4 w-4" />} title="Aberto até" value="00:00" />
            <Stat icon={<Star className="h-4 w-4 text-accent" />} title="Avaliação" value="4.9 ★" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-3 backdrop-blur">
      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
        {icon} {title}
      </div>
      <p className="mt-1 font-display text-xl text-foreground">{value}</p>
    </div>
  );
}
