import { Heart, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

type ProductCardProps = {
  title: string;
  price: number;
  currency?: string;
  image: string;
  className?: string;
};

export default function ProductCard({
  title,
  price,
  currency = "Rs.",
  image,
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden w-[400px] h-[485px]">
      <div className="absolute right-7 top-7 z-10 flex flex-col gap-2">
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:shadow-md">
          <Heart className="h-4 w-4" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:shadow-md">
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>

      <div className="relative overflow-hidden bg-gray-100 rounded-xl">
        <AspectRatio ratio={1}>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>
      </div>

      <CardContent className="p-0">
        <h3 className="text-lg capitalize font-medium text-gray-900">
          {title}
        </h3>
        <p className="text-base text-gray-800">
          {currency} {price}
        </p>
      </CardContent>
    </Card>
  );
}
