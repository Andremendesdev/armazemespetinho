import { ShoppingBag, X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "./cart-context";

export function CartDrawer() {
  const { isOpen, close, lines, total, count, setQty, remove, clear } = useCart();

  const buildWhatsAppMessage = () => {
    const header = "*Pedido — Armazém do Espetinho*%0A%0A";
    const body = lines
      .map((l) => `• ${l.qty}x ${l.item.name} — R$ ${(l.qty * l.item.price).toFixed(2)}`)
      .join("%0A");
    const footer = `%0A%0A*Total:* R$ ${total.toFixed(2)}`;
    return header + body + footer;
  };

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-fire shadow-glow">
              <ShoppingBag className="h-4 w-4 text-white" />
            </span>
            <div>
              <h2 className="font-display text-xl leading-none">Seu pedido</h2>
              <p className="text-xs text-muted-foreground">
                {count} {count === 1 ? "item" : "itens"}
              </p>
            </div>
          </div>
          <button
            onClick={close}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card">
                <ShoppingBag className="h-7 w-7 text-muted-foreground" />
              </div>
              <p className="mt-4 font-display text-lg">Carrinho vazio</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Adicione espetinhos do cardápio pra começar.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {lines.map((l) => (
                <li
                  key={l.item.id}
                  className="flex gap-3 rounded-2xl border border-border bg-card p-3"
                >
                  <img
                    src={l.item.image}
                    alt={l.item.name}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="line-clamp-1 font-display text-base">{l.item.name}</h3>
                      <button
                        onClick={() => remove(l.item.id)}
                        className="text-muted-foreground hover:text-destructive"
                        aria-label="Remover"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      R$ {l.item.price.toFixed(2)}
                    </span>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border bg-background">
                        <button
                          onClick={() => setQty(l.item.id, l.qty - 1)}
                          className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"
                          aria-label="Diminuir"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-semibold">{l.qty}</span>
                        <button
                          onClick={() => setQty(l.item.id, l.qty + 1)}
                          className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"
                          aria-label="Aumentar"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-display text-lg text-fire">
                        R$ {(l.qty * l.item.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t border-border bg-card/50 px-5 py-4">
            <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg">Total</span>
              <span className="font-display text-3xl text-fire">R$ {total.toFixed(2)}</span>
            </div>
            <a
              href={`https://wa.me/5511999999999?text=${buildWhatsAppMessage()}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-fire px-5 py-3.5 text-sm font-semibold text-white shadow-fire transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              Finalizar no WhatsApp
            </a>
            <button
              onClick={clear}
              className="mt-2 w-full rounded-full px-5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              Limpar carrinho
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
