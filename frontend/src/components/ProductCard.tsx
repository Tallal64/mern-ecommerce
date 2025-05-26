import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "@/store/products/useProductStore";
import { Product } from "@/types/products";

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useProductStore();

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full px-4 cursor-pointer md:px-6"
    >
      <Link to={`/product/${product._id}`} className="w-full">
        <Card className="relative overflow-hidden h-[485px] bg-transparent">
          <motion.div
            className="relative overflow-hidden shadow-lg rounded-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <AspectRatio ratio={1}>
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full transition-all duration-500"
              />
              <motion.div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </AspectRatio>
          </motion.div>

          <CardContent className="pl-1.5 overflow-hidden">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: isHovered ? -1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="w-full mb-1 text-lg font-medium capitalize truncate text-primary">
                {product.title}
              </h3>
              <motion.p
                className="text-lg font-bold"
                animate={{
                  scale: isHovered ? 1 : 1,
                  color: isHovered ? "#0f766e" : "#64748b",
                }}
                transition={{ duration: 0.3 }}
              >
                Rs. {product.price}
              </motion.p>
            </motion.div>
          </CardContent>
        </Card>
      </Link>

      {/* floating buttons */}
      <motion.div
        className="absolute z-10 flex flex-col gap-2 right-12 top-7"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LuHeart className="w-4 h-4 text-rose-500" />
        </motion.button>
        <motion.button
          className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
        >
          <LuShoppingCart className="w-4 h-4 text-black" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
