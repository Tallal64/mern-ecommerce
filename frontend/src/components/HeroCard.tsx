import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Plus } from "lucide-react";

type HeroCarousel = {
  title: string;
  price: number;
  image: string;
  description?: string;
};

export function HeroCarousel({
  title,
  price,
  image,
  description,
}: HeroCarousel) {
  return (
    <Card className="relative overflow-hidden border py-0 rounded-xl">
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-white/90 hover:bg-white"
        >
          <Heart className="h-5 w-5 text-rose-500" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-white/90 hover:bg-white"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-24">
          <h2 className="text-2xl text-white md:text-7xl font-semibold mb-2">
            {title}
          </h2>
          <p className="text-white/90 mb-4 max-w-xl">{description}</p>
          <div className="flex items-center gap-4">
            <Button className="bg-white text-black hover:bg-white/90">
              Shop Now
            </Button>
            <span className="text-2xl font-bold text-white">${price}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
