import { HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
export const actions = [
  {
    id: 2,
    Icon: UserIcon,
    label: "Войти",
    href: "/login",
  },
  {
    id: 3,
    Icon: HeartIcon,
    label: "Избранное",
    href: "/favourites",
  },
  {
    id: 4,
    Icon: ShoppingCartIcon,
    label: "Корзина",
    href: "/cart",
  },
];
