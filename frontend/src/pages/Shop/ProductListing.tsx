import TabGroup from "@/components/TabGroup";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductListing() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/api/products");
    const data = await response.json();
    setProducts(data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-14">
      <div className="container px-4 mx-auto">
        <div className="px-10 mb-4">
          <TabGroup />
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
