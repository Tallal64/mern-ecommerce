import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { useParams } from "react-router-dom";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductDetails() {
  const { _id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // fetching product details from the API
  const fetchProduct = async () => {
    const response = await fetch(`http://localhost:8080/api/products/${_id}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  });

  return (
    <section className="flex items-center justify-center h-[78vh]">
      <motion.div
        className="container mx-auto px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 h-[400px] md:h-[550px] md:w-[580px]"
              whileHover="hover"
              variants={imageVariants}
            >
              <img
                src={product?.image || "/placeholder.svg"}
                alt={product?.title}
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl font-bold">{product?.title}</h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <span className="text-3xl font-bold">${product?.price}</span>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Free shipping on orders over $50
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-700 dark:text-gray-300">
                {product?.description}
              </p>
            </motion.div>

            <Separator />

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1"
              >
                <Button className="w-full gap-2 py-6 cursor-pointer" size="lg">
                  <LuShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto py-6 cursor-pointer"
                >
                  <LuHeart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
