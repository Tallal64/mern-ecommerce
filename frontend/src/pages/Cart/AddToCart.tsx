import { motion } from "framer-motion";
import { useState } from "react";
import {
  LuArrowLeft,
  LuMinus,
  LuPlus,
  LuShoppingBag,
  LuShoppingCart,
  LuTrash2,
} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useProductStore } from "@/store/products/useProductStore";

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

export default function AddToCart() {
  const { cart, removeFromCart, updateCartItemQuantity, clearCart } =
    useProductStore();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (id: string, newQuantity: number) => {
    updateCartItemQuantity(id, newQuantity);
  };

  const removeItem = (id: string) => {
    removeFromCart(id);
  };

  const applyPromoCode = () => {
    if (promoCode.trim().toLowerCase() === "discount20") {
      setPromoApplied(true);
    }
  };

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 0) + 1,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const discount = promoApplied ? subtotal * 0.2 : 0;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal + shipping + tax - discount;

  return (
    <motion.div
      className="h-[78vh] container mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <LuShoppingCart className="h-8 w-8" />
          Your Shopping Cart
        </h1>
      </motion.div>

      {cart.length === 0 ? (
        <motion.div
          variants={itemVariants}
          className="text-center py-16 flex flex-col items-center gap-4"
        >
          <LuShoppingBag className="h-16 w-16 text-gray-400 dark:text-gray-500" />
          <h2 className="text-2xl font-medium">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div variants={itemVariants} className="mb-4">
              <div className="hidden md:grid grid-cols-12 gap-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              <Separator className="my-2" />
            </motion.div>

            {cart.map((item) => (
              <motion.div key={item._id} variants={itemVariants}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 items-center">
                  <div className="col-span-6 flex gap-4">
                    <div className="h-24 w-24 relative rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.categories}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item._id)}
                        className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1 w-fit"
                      >
                        <LuTrash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2 text-center">
                    <div className="md:hidden text-sm text-gray-500 dark:text-gray-400">
                      Price:
                    </div>
                    ${item.price.toFixed(2)}
                  </div>

                  <div className="col-span-2">
                    <div className="md:hidden text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Quantity:
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item._id, (item.quantity || 0) + 1)
                        }
                        disabled={(item.quantity || 0) <= 1}
                      >
                        <LuMinus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item._id, (item.quantity || 0) + 1)
                        }
                      >
                        <LuPlus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="col-span-2 text-right font-medium">
                    <div className="md:hidden text-sm text-gray-500 dark:text-gray-400">
                      Total:
                    </div>
                    ${(item.price * (item.quantity || 0) + 1).toFixed(2)}
                  </div>
                </div>
                <Separator />
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="mt-6">
              <Link to="/shop">
                <Button variant="outline" className="gap-2">
                  <LuArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="md:col-span-1">
            <Card className="dark:border-gray-800">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Subtotal
                    </span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Shipping
                    </span>
                    <span>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount (20%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Tax
                    </span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="pt-4">
                    <div className="flex gap-2 mb-4">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                      />
                      <Button
                        variant="outline"
                        onClick={applyPromoCode}
                        disabled={promoApplied || !promoCode.trim()}
                      >
                        Apply
                      </Button>
                    </div>
                    {promoApplied && (
                      <p className="text-sm text-green-600 dark:text-green-400 mb-4">
                        Promo code applied successfully!
                      </p>
                    )}
                    <Button className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full mt-2"
                      size="lg"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
