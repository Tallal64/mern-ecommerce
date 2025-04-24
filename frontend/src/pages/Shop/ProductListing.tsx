import TabGroup from "@/components/TabGroup";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "@/components/skeleton/ProductSkeleton";

type Product = {
  _id: string;
  title: string;
  price: number;
  categories: string;
  image: string;
  description: string;
};

type Tab = {
  id: string;
  label: string;
};

export default function ProductListing() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/api/products");

    if (response.ok) {
      setIsLoading(false);
    }

    const data = await response.json();
    setProducts(data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const tabs: Tab[] = [
    { id: "all", label: "All" },
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products?.filter((product) => product.categories === activeTab);

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
      {isLoading ? (
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container px-4 mx-auto">
          <div className="px-10 mb-4">
            <TabGroup
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
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
      )}
    </section>
  );
}
