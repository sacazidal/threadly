export interface SearchResult {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number;
}

export interface PageProps {
  params: Record<string, string>;
  searchParams?: Record<string, string | string[] | undefined>;
}
