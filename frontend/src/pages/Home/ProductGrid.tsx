import { motion } from "framer-motion";
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
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null
  );

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/api/products");
    const data = await response.json();
    setProducts(data.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  function getRandomElements(array: Product[], n: number) {
    return array
      .map((item) => ({ item, sort: Math.random() })) // Assign random sort values
      .sort((a, b) => a.sort - b.sort) // Sort by random values
      .map(({ item }) => item) // Extract original values
      .slice(0, n); // Get n elements
  }

  useEffect(() => {
    const filteredProducts = products ? getRandomElements(products, 4) : [];
    setFilteredProducts(filteredProducts);
  }, [products]);

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
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Best Selling Products
          </h2>
          <motion.div
            className="mt-3 h-1.5 w-32 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 place-items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProducts?.map((product) => (
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
