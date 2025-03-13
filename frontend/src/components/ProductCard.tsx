import { Eye, ShoppingCart } from "lucide-react";

export default function ProductCard() {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={"imageURL"}
          alt={"imageURL"}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        <div className="">
          <button className="flex-1 bg-white text-black px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100">
            <Eye className="h-4 w-4" />
            <span>Quick View</span>
          </button>
          <button className="flex-1 bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-900">
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-gray-900">title</h3>
        <p className="text-lg font-bold text-gray-900">$12.99</p>
      </div>
    </div>
  );
}
