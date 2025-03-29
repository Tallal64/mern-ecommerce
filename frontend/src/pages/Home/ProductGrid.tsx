import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[] | null>(null);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/api/products");
    const data = await response.json();
    setProducts(data.data);
  };
  useEffect(() => {
    fetchProducts();
  });
  
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight">
            Best Selling Products
          </h2>
          <div className="mt-2 h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
