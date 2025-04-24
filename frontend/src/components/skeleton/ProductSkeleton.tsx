import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="p-4 rounded-xl w-[350px]">
      <Skeleton className="h-[285px] w-full rounded-xl mb-4" />

      <Skeleton className="h-4 mb-2" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  );
};

export default ProductCardSkeleton;
