export interface SearchResult {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number;
}

export interface PageProps {
  params: {
    id: string;
  };
}
