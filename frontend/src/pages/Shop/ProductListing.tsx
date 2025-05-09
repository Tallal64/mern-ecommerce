import TabGroup from "@/components/TabGroup";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "@/components/skeleton/ProductSkeleton";
import { useProduct } from "@/store/products/productsAPIs";

type Tab = {
  id: string;
  label: string;
};

export default function ProductListing() {
  const { isLoading, Products, getAllProducts } = useProduct();
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const tabs: Tab[] = [
    { id: "all", label: "All" },
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? Products
      : Products?.filter((Product) => Product.categories === activeTab);

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
               product={product}
              />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
