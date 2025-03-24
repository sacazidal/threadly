import { apiRoutes } from "@/lib/api";
import { SearchResult } from "@/types";
import Image from "next/image";

async function getProductById(id: number): Promise<SearchResult | null> {
  const response = await fetch(`${apiRoutes.product}/${id}`);
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
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-y-5 gap-x-15 items-center md:items-start justify-center">
        <div className="">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={350}
            height={350}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-lg">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
