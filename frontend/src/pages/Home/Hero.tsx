import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center py-12 lg:py-20">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="relative bg-gradient-to-r from-primary/90 to-primary/50 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Fashion at your Own
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Style Destination.
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Explore a world of fashion with exclusive Discounts. Dive into
              Your Ultimate style destination today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                Shop Now
                <LuArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Main Image */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src="http://res.cloudinary.com/dbizr4uou/image/upload/v1742704819/imgyu5wbqwoyekmqo6yr.webp"
                alt="Fashion model in stylish outfit"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Secondary Image - Bottom Left */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-48 h-48 lg:w-64 lg:h-64"
              initial={{ x: -50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <img
                src="http://res.cloudinary.com/dbizr4uou/image/upload/v1742707268/ja1wn6oidskzqufx0fcr.webp"
                alt="Fashion detail shot"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* Third Image - Top Right */}
            <motion.div
              className="absolute -top-8 -right-8 w-40 h-40 lg:w-56 lg:h-56"
              initial={{ x: 50, y: -50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img
                src="http://res.cloudinary.com/dbizr4uou/image/upload/v1742705084/nsvk1b5nas3y9fqyszag.webp"
                alt="Fashion accessories"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* Fourth Image - Bottom Right */}
            <motion.div
              className="absolute bottom-12 -right-4 w-36 h-36 lg:w-48 lg:h-48"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <img
                src="http://res.cloudinary.com/dbizr4uou/image/upload/v1742707457/dprucoopjpzbdwxtbslp.webp"
                alt="Fashion lifestyle"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* Fifth Image - Top Left */}
            <motion.div
              className="absolute top-12 -left-4 w-32 h-32 lg:w-44 lg:h-44"
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
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
