import { BellIcon, HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="py-5">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center gap-x-3">
        <div className="shrink-0">
          <Logo />
        </div>

        <SearchBar />
        <div className="flex items-center gap-x-5">
          <button className="flex flex-col justify-center items-center cursor-pointer">
            <BellIcon size={25} />
            <span className="text-xs">Уведомления</span>
          </button>
          <button className="flex flex-col justify-center items-center cursor-pointer">
            <UserIcon size={25} />
            <span className="text-xs">Войти</span>
          </button>

          <button className="flex flex-col justify-center items-center cursor-pointer">
            <HeartIcon size={25} />
            <span className="text-xs">Избранное</span>
          </button>

          <button className="flex flex-col justify-center items-center cursor-pointer">
            <ShoppingCartIcon size={25} />
            <span className="text-xs">Корзина</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
