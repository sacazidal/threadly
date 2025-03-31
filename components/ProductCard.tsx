import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <article className="group h-full">
      <Link
        href={`/product/${product.id}`}
        className="h-full flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md dark:hover:shadow-neutral-700/50 transition-all duration-300 overflow-hidden"
      >
        <div className="h-full flex flex-col rounded-lg shadow-sm dark:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={index < 3}
              decoding="async"
            />
          </div>
          <div className="p-2 md:p-4 flex-1 flex justify-between items-center">
            <div className="flex flex-col md:space-y-1">
              <div className="font-medium text-sm md:text-base line-clamp-2 text-neutral-900 dark:text-white">
                {product.name}
              </div>
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
    </article>
  );
};
export default ProductCard;
