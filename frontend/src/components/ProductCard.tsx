import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

type ProductCardProps = {
  _id: string;
  title: string;
  price: number;
  currency?: string;
  image: string;
  className?: string;
};

export default function ProductCard({
  _id,
  title,
  price,
  currency = "Rs.",
  image,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/product/${_id}`} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full px-4 md:px-6 cursor-pointer"
      >
        <Card className="group relative overflow-hidden h-[485px] bg-transparent">
          <motion.div
            className="absolute right-7 top-7 z-10 flex flex-col gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LuHeart className="h-4 w-4 text-rose-500" />
            </motion.button>
            <motion.button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LuShoppingCart className="h-4 w-4 text-black" />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <AspectRatio ratio={1}>
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-all duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              <h3 className="text-lg capitalize font-medium text-primary w-full truncate mb-1">
                {title}
              </h3>
              <motion.p
                className="text-lg font-bold"
                animate={{
                  scale: isHovered ? 1 : 1,
                  color: isHovered ? "#0f766e" : "#64748b",
                }}
                transition={{ duration: 0.3 }}
              >
                {currency} {price}
              </motion.p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
