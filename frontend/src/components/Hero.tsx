import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    title: "Summer Collection",
    subtitle: "Discover our latest arrivals",
  },
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    title: "Minimalist Essentials",
    subtitle: "Timeless pieces for your wardrobe",
  },
  {
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "Accessories",
    subtitle: "Complete your look",
  },
];

export default function Hero() {
  return (
    <div className="relative h-[70vh] overflow-hidden mt-16">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 `}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white space-y-4">
              <h2 className="text-5xl font-bold">{slide.title}</h2>
              <p className="text-xl">{slide.subtitle}</p>
              <button className="mt-4 px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}

      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors">
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
