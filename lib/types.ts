export type Category = "shirt" | "pants" | "jacket" | "accessory";

export interface Product {
  id: string;
  name: string;
  slug: string;        // untuk /products/[slug]
  description: string;
  price: number;       // 99000 = Rp 99k
  currency: "IDR";
  category: Category;
  image: string;       // ex: "/images/tee-1.jpg"
  rating: number;      // 0..5
  stock: number;
  tags: string[];
  createdAt: string;   // ISO date
}
