import { apiRoutes } from "@/lib/api";
import { SearchResult } from "@/types";
import Image from "next/image";

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
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Результаты поиска</h1>
        <p>Введите запрос для поиска.</p>
      </div>
    );
  }

  const results = await getSearchResults(resolvedParamsQuery);

  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Результаты поиска: {resolvedParamsQuery}
      </h1>
      <ul className="space-y-4">
        {results.map((result) => (
          <li
            key={result.id}
            className="p-4 bg-neutral-800 rounded-lg shadow-lg flex items-center justify-between"
          >
            <div>
              <h2 className="font-semibold">{result.name}</h2>
              <p className="text-sm text-neutral-400">{result.category}</p>
            </div>
            <Image
              src={result.imageUrl}
              alt={result.name}
              className="w-12 h-12 rounded-sm"
              width={48}
              height={48}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
