import { BellIcon, HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="py-2 md:py-5 px-3">
      <div className="max-w-screen-2xl mx-auto flex md:flex-nowrap gap-y-2 flex-wrap justify-between items-center gap-x-3">
        <div className="shrink-0">
          <Logo />
        </div>

        <div className="flex items-center gap-x-3 md:gap-x-5 order-0 md:order-1">
          <button className="flex flex-col justify-center items-center cursor-pointer">
            <BellIcon className="w-5 h-5" />
            <span className="text-xs md:block hidden">Уведомления</span>
          </button>
          <button className="flex flex-col justify-center items-center cursor-pointer">
            <UserIcon className="w-5 h-5" />
            <span className="text-xs md:block hidden">Войти</span>
          </button>

          <button className="flex flex-col justify-center items-center cursor-pointer">
            <HeartIcon className="w-5 h-5" />
            <span className="text-xs md:block hidden">Избранное</span>
          </button>

          <button className="flex flex-col justify-center items-center cursor-pointer">
            <ShoppingCartIcon className="w-5 h-5" />
            <span className="text-xs md:block hidden">Корзина</span>
          </button>
        </div>

        <SearchBar />
      </div>
    </header>
  );
};
export default Header;
