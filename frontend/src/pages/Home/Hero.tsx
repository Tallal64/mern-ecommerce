import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function Hero() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8080/api/products");
      const data = await response.json();
      setProducts(data.data);
    };
    fetchProducts();
  });

  return (
    <section className="relative w-full bg-background overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center py-12 lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fashion at your Own
              <span className="block">Style Destination.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Explore a world of fashion with exclusive Discounts. Dive into
              Your Ultimate style destination today.
            </p>
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Main Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="http://res.cloudinary.com/dbizr4uou/image/upload/v1742704819/imgyu5wbqwoyekmqo6yr.webp"
                alt="Fashion model in stylish outfit"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Secondary Image - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 w-48 h-48 lg:w-64 lg:h-64"
            >
              <img
                src="http://res.cloudinary.com/dbizr4uou/image/upload/v1742707268/ja1wn6oidskzqufx0fcr.webp"
                alt="Fashion detail shot"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* Third Image - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-8 -right-8 w-40 h-40 lg:w-56 lg:h-56"
            >
              <img
                src="http://res.cloudinary.com/dbizr4uou/image/upload/v1742705084/nsvk1b5nas3y9fqyszag.webp"
                alt="Fashion accessories"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* Fourth Image - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-12 -right-4 w-36 h-36 lg:w-48 lg:h-48"
            >
              <img
                src="http://res.cloudinary.com/dbizr4uou/image/upload/v1742707457/dprucoopjpzbdwxtbslp.webp"
                alt="Fashion lifestyle"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* Fifth Image - Top Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-12 -left-4 w-32 h-32 lg:w-44 lg:h-44"
            >
              <img
                src="http://res.cloudinary.com/dbizr4uou/image/upload/v1742708170/rmk1hhml1d0gn8wnkkxa.avif"
                alt="Fashion detail"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
