import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`} className="h-full max-w-xs">
      <div className="h-full flex flex-col rounded-lg shadow-sm dark:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="relative w-full h-full aspect-square">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="transition-transform duration-300 object-cover w-auto h-auto"
          />
        </div>
        <div className="p-4 flex-1 flex justify-between items-center">
          <div className="flex flex-col space-y-1">
            <h3 className="font-medium dark:text-white hover:text-primary-600">
              {product.name}
            </h3>
            <p className="text-sm dark:text-neutral-400">{product.category}</p>
          </div>
          <p className="font-bold dark:text-white">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
