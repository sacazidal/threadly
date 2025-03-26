import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`} className="h-full max-w-xs">
      <div className="h-full flex flex-col rounded-lg shadow-sm dark:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="relative w-full h-full aspect-square">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="transition-transform duration-300 object-cover w-auto h-auto"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={index < 3}
            decoding="async"
          />
        </div>
        <div className="p-2 md:p-4 flex-1 flex justify-between items-center">
          <div className="flex flex-col md:space-y-1">
            <h3 className="font-medium text-sm md:text-base dark:text-white hover:text-primary-600">
              {product.name}
            </h3>
            <p className="text-xs md:text-sm dark:text-neutral-400">
              {product.category}
            </p>
          </div>
          <p className="font-bold md:text-base text-xs dark:text-white">
            {product.price} руб.
          </p>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
