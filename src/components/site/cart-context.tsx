import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { MenuItem } from "@/data/menu";

export type CartLine = { item: MenuItem; qty: number };

type CartCtx = {
  lines: CartLine[];
  count: number;
  total: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (item: MenuItem, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  const value = useMemo<CartCtx>(() => {
    const count = lines.reduce((s, l) => s + l.qty, 0);
    const total = lines.reduce((s, l) => s + l.qty * l.item.price, 0);
    return {
      lines,
      count,
      total,
      isOpen,
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen((v) => !v),
      add: (item, qty = 1) => {
        setLines((prev) => {
          const i = prev.findIndex((l) => l.item.id === item.id);
          if (i === -1) return [...prev, { item, qty }];
          const next = [...prev];
          next[i] = { ...next[i], qty: next[i].qty + qty };
          return next;
        });
        setOpen(true);
      },
      remove: (id) => setLines((prev) => prev.filter((l) => l.item.id !== id)),
      setQty: (id, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.item.id !== id)
            : prev.map((l) => (l.item.id === id ? { ...l, qty } : l)),
        ),
      clear: () => setLines([]),
    };
  }, [lines, isOpen]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}
