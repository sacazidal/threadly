export interface SearchResult {
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number;
}

export interface UserActionsProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
}

export interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
  };
  index: number;
}

export interface FooterMenuProps {
  children: React.ReactNode;
  title: string;
}
