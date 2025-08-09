import { Product } from "@/src/app/lib/types";

export const PRODUCTS: Product[] = [
  {
    id: "p_1",
    name: "Basic Tee",
    slug: "basic-tee",
    description: "Kaos katun nyaman untuk daily use.",
    price: 99000,
    currency: "IDR",
    category: "shirt",
    image: "/images/tee-1.jpg",
    rating: 4.5,
    stock: 34,
    tags: ["basic", "cotton"],
    createdAt: "2025-08-01T00:00:00Z",
  },
  {
    id: "p_2",
    name: "Chino Pants",
    slug: "chino-pants",
    description: "Celana chino potongan slim.",
    price: 199000,
    currency: "IDR",
    category: "pants",
    image: "/images/chino-1.jpg",
    rating: 4.2,
    stock: 18,
    tags: ["chino", "slim"],
    createdAt: "2025-08-02T00:00:00Z",
  },
  // ...tambahkan item lain hingga 10 produk
];