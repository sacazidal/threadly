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

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export interface SwitchFormProps {
  onSwitch?: () => void;
  onRecovery?: () => void;
  onBackToLogin?: () => void;
  onBackToSignUp?: () => void;
  onSuccess?: () => void;
}

export interface AuthFormProps {
  title: string;
  action: string;
  secondAction: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  footerText: React.ReactNode;
  loading: boolean;
  error: string;
}

export interface FieldFormProps {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  id: string;
  placeholder?: string;
  recovery?: React.ReactNode;
}

export type AuthModalType = "login" | "register" | "recovery";

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialForm?: AuthModalType;
}
