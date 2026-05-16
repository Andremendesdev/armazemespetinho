import espCarne from "@/assets/esp-carne.jpg";
import espFrango from "@/assets/esp-frango.jpg";
import espKafta from "@/assets/esp-kafta.jpg";
import espLinguica from "@/assets/esp-linguica.jpg";
import espQueijo from "@/assets/esp-queijo.jpg";
import espCoracao from "@/assets/esp-coracao.jpg";
import espPaoalho from "@/assets/esp-paoalho.jpg";
import pBatata from "@/assets/p-batata.jpg";
import pMandioca from "@/assets/p-mandioca.jpg";
import pOnion from "@/assets/p-onion.jpg";
import dCaipirinha from "@/assets/d-caipirinha.jpg";
import dGin from "@/assets/d-gin.jpg";
import dMule from "@/assets/d-mule.jpg";
import dRefri from "@/assets/d-refri.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
};

export type Category = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const categories: Category[] = [
  {
    id: "espetinhos",
    title: "Espetinhos",
    items: [
      {
        id: "carne",
        name: "Espetinho de Carne",
        description: "Maminha temperada na brasa, sal grosso e farofa.",
        price: 12.9,
        image: espCarne,
        tag: "Top",
      },
      {
        id: "frango",
        name: "Espetinho de Frango",
        description: "Peito marinado em ervas, suculento e dourado.",
        price: 11.9,
        image: espFrango,
      },
      {
        id: "kafta",
        name: "Kafta Especial",
        description: "Carne moída com cebola, hortelã e especiarias.",
        price: 13.9,
        image: espKafta,
        tag: "Novo",
      },
      {
        id: "linguica",
        name: "Linguiça Artesanal",
        description: "Linguiça toscana defumada na brasa.",
        price: 10.9,
        image: espLinguica,
      },
      {
        id: "queijo",
        name: "Queijo Coalho",
        description: "Coalho grelhado com mel de cana opcional.",
        price: 12.5,
        image: espQueijo,
        tag: "Favorito",
      },
      {
        id: "coracao",
        name: "Coração de Frango",
        description: "Marinado e levemente apimentado.",
        price: 11.5,
        image: espCoracao,
      },
      {
        id: "paoalho",
        name: "Pão de Alho",
        description: "Recheado de manteiga de alho e queijo.",
        price: 9.9,
        image: espPaoalho,
      },
    ],
  },
  {
    id: "porcoes",
    title: "Porções",
    items: [
      {
        id: "batata",
        name: "Batata Frita",
        description: "Crocante por fora, macia por dentro. Serve 2.",
        price: 24.9,
        image: pBatata,
      },
      {
        id: "mandioca",
        name: "Mandioca Frita",
        description: "Cozida e frita, sequinha. Acompanha aioli.",
        price: 22.9,
        image: pMandioca,
      },
      {
        id: "onion",
        name: "Onion Rings",
        description: "Anéis empanados crocantes com molho da casa.",
        price: 26.9,
        image: pOnion,
        tag: "Novo",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      {
        id: "caipirinha",
        name: "Caipirinha",
        description: "Cachaça, limão e açúcar. A clássica.",
        price: 16.9,
        image: dCaipirinha,
      },
      {
        id: "gin",
        name: "Gin Tropical",
        description: "Gin, tônica, frutas tropicais e alecrim.",
        price: 22.9,
        image: dGin,
        tag: "Top",
      },
      {
        id: "mule",
        name: "Moscow Mule",
        description: "Vodka, gengibre, limão na caneca de cobre.",
        price: 24.9,
        image: dMule,
      },
      {
        id: "refri",
        name: "Refrigerante",
        description: "Lata 350ml — Coca, Guaraná, Sprite.",
        price: 7.0,
        image: dRefri,
      },
    ],
  },
];

export const promos = [
  {
    id: "casal",
    title: "Promo Casal",
    desc: "8 espetinhos + 2 drinks + porção",
    oldPrice: 129.9,
    price: 89.9,
    badge: "OFERTA",
  },
  {
    id: "familia",
    title: "Combo Família",
    desc: "16 espetinhos + 2 porções + 4 refris",
    oldPrice: 219.9,
    price: 159.9,
    badge: "-30%",
  },
  {
    id: "duo",
    title: "Espetinho + Drink",
    desc: "1 espetinho à escolha + caipirinha",
    oldPrice: 32.9,
    price: 24.9,
    badge: "DUO",
  },
  {
    id: "quarta",
    title: "Quarta do Churrasco",
    desc: "Rodízio de espetinhos das 19h às 23h",
    oldPrice: 79.9,
    price: 49.9,
    badge: "QUARTA",
  },
];
