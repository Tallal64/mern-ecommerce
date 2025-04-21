import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LuHeart,
  LuMinus,
  LuPlus,
  LuShoppingCart,
  LuStar,
} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// const product = {
//   id: 1,
//   name: "Premium Leather Jacket",
//   price: 299.99,
//   rating: 4.8,
//   reviews: 124,
//   description:
//     "This premium leather jacket is crafted from the finest quality full-grain leather, offering durability and a luxurious feel. The classic design features a zip front, multiple pockets, and adjustable cuffs, making it both functional and stylish. Perfect for casual outings or adding an edge to your evening attire, this jacket will become a staple in your wardrobe for years to come.",
//   features: [
//     "100% genuine full-grain leather",
//     "Soft polyester lining for comfort",
//     "Durable YKK zippers",
//     "Multiple interior and exterior pockets",
//     "Adjustable cuffs with snap buttons",
//     "Available in multiple colors and sizes",
//   ],
//   colors: ["Black", "Brown", "Tan"],
//   sizes: ["S", "M", "L", "XL", "XXL"],
//   images: [
//     "/placeholder.svg?height=600&width=600",
//     "/placeholder.svg?height=600&width=600&text=Side+View",
//     "/placeholder.svg?height=600&width=600&text=Back+View",
//     "/placeholder.svg?height=600&width=600&text=Detail+View",
//   ],
// };

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
  const [quantity, setQuantity] = useState(1);
  // const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");
  // const [selectedImage, setSelectedImage] = useState(0);

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
    <section className="flex items-center justify-center h-[75vh]">
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

            {/* <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <motion.div
                key={index}
                className={`relative h-24 rounded-md overflow-hidden cursor-pointer border-2 dark:border-gray-700 ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-transparent"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div> */}
          </motion.div>

          {/* Product Details */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl font-bold">{product?.title}</h1>
              <div className="flex items-center mt-2 space-x-2">
                {/* <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <LuStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div> */}
                {/* <span className="text-sm text-gray-600 dark:text-gray-300">
                {product.rating} ({product.reviews} reviews)
              </span> */}
              </div>
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
                <Button className="w-full gap-2 py-6" size="lg">
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
                  className="w-full sm:w-auto py-6"
                >
                  <LuHeart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
              </motion.div>
            </motion.div>

            {/* <motion.div variants={itemVariants} className="pt-6">
            <Tabs defaultValue="description">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1">
                  Description
                </TabsTrigger>
                <TabsTrigger value="features" className="flex-1">
                  Features
                </TabsTrigger>
                <TabsTrigger value="shipping" className="flex-1">
                  Shipping
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p className="text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </TabsContent>
              <TabsContent value="features" className="pt-4">
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Free standard shipping on orders over $50. Expedited shipping
                  options available at checkout. Please allow 1-3 business days
                  for processing and 3-7 business days for delivery.
                </p>
              </TabsContent>
            </Tabs>
          </motion.div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
