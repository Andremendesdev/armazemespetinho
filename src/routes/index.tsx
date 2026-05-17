import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Promos } from "@/components/site/Promos";
import { Menu } from "@/components/site/Menu";
import { MostOrdered } from "@/components/site/MostOrdered";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";
import { CartProvider } from "@/components/site/cart-context";
import { CartDrawer } from "@/components/site/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Armazém do Espetinho — O sabor da brasa" },
      {
        name: "description",
        content:
          "Espetaria brasileira premium: espetinhos artesanais, porções e drinks autorais. Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Armazém do Espetinho" },
      {
        property: "og:description",
        content: "Espetinhos na brasa, drinks autorais e entrega rápida.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Promos />
          <Menu />
          <MostOrdered />
          <Reviews />
          <Gallery />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
