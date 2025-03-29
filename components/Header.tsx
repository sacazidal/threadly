"use client";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { actions } from "@/constants/userActions";
import UserActions from "./UserActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthModal from "./auth/AuthModal";

const Header = () => {
  const { push } = useRouter();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalType, setAuthModalType] = useState<
    "login" | "register" | "recovery"
  >("login");

  const handleActionClick = (href?: string) => {
    if (href) {
      push(href);
    } else {
      setIsAuthModalOpen(true);
      setAuthModalType("login");
    }
  };

  return (
    <header className="py-2 md:py-5 px-3">
      <div className="max-w-screen-2xl mx-auto flex md:flex-nowrap gap-y-2 flex-wrap justify-between items-center gap-x-3">
        <div className="shrink-0">
          <Logo />
        </div>

        <div className="flex items-center gap-x-4 md:gap-x-5 order-0 md:order-1">
          {actions.map((action) => (
            <UserActions
              key={action.id}
              icon={action.Icon}
              onClick={() => handleActionClick(action.href)}
              label={action.label}
            />
          ))}
        </div>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialForm={authModalType}
        />

        <SearchBar />
      </div>
    </header>
  );
};
export default Header;
