import ProductCard from "@/components/ProductCard";
import { apiRoutes } from "@/lib/api";
import { SearchResult } from "@/types";

async function getSearchResults(query: string): Promise<SearchResult[]> {
  const response = await fetch(
    `${apiRoutes.search}?q=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error("Ошибка при загрузке результатов");
  }
  return response.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const resolvedParams = await searchParams;
  const resolvedParamsQuery = resolvedParams.q;

  if (!resolvedParamsQuery) {
    return (
      <div className="max-w-screen-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Результаты поиска</h1>
        <p>Введите запрос для поиска.</p>
      </div>
    );
  }

  const products = await getSearchResults(resolvedParamsQuery);

  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Результаты поиска: {resolvedParamsQuery}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
