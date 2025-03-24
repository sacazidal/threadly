import { SearchResult } from "@/types";
import { fetchUrlById } from "@/utils/fetchUrl";
import Image from "next/image";

async function getProductById(id: number): Promise<SearchResult | null> {
  const response = await fetch(`${fetchUrlById}/${id}`);
  if (!response.ok) {
    return null;
  }
  return response.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);
  const product = await getProductById(productId);

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="flex gap-4">
        <div className="w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg">{product.description}</p>
          <p className="text-sm text-neutral-400">{product.category}</p>
        </div>
      </div>
    </div>
  );
}
