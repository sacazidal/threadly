import { Button } from "@/components/ui/button";
import { apiRoutes } from "@/lib/api";
import { poppins } from "@/lib/fonts";
import { SearchResult } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getProductById(id: number): Promise<SearchResult | null> {
  const response = await fetch(`${apiRoutes.product}/${id}`, {
    next: { revalidate: 60 },
  });
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
      <div className="max-w-screen-2xl mx-auto p-4 text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
        <Button className="hover:underline cursor-pointer" asChild>
          <Link href={"/"}>Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4 pt-8">
      <div className="flex flex-col md:flex-row gap-y-5 gap-x-15 items-center md:items-start justify-center">
        <div className="md:w-1/2 flex justify-end">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col md:w-1/2">
          <div className="flex justify-between items-center pr-40">
            <div className="">
              <h2 className={`text-2xl font-bold ${poppins.className}`}>
                {product.name}
              </h2>
              <p className="text-lg font-medium">{product.price} руб.</p>
            </div>
            <div className="">Изб</div>
          </div>
        </div>
      </div>
    </div>
  );
}
