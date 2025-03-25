"use client";

import { poppins } from "@/lib/fonts";
import CloseCookies from "./CloseCookies";
import Link from "next/link";
import { useEffect, useState } from "react";

const Cookies = () => {
  const today = new Date().toISOString().split("T")[0];

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const lastShownDate = localStorage.getItem("cookiesBannerDate");

    if (lastShownDate !== today) {
      setIsMounted(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }
  }, [today]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsMounted(false);
      localStorage.setItem("cookiesBannerDate", today);
    }, 300);
  };

  if (!isMounted) return null;

  return (
    <article
      className={`py-1 md:py-2 bg-neutral-950 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center gap-x-2 px-3">
        <div className="text-[8px] md:text-[10px] text-center text-neutral-50">
          Продолжая использовать{" "}
          <span className={`${poppins.className} font-bold`}>threadly.ru</span>,
          вы подтверждаете, что согласны с{" "}
          <Link href={"#usage-rules"} className="underline underline-offset-2">
            Правилами использования
          </Link>{" "}
          и{" "}
          <Link
            href={"#privacy-policy"}
            className="underline underline-offset-2"
          >
            Политикой конфиденциальности
          </Link>
          , в том числе, с порядком использования cookie-файлов.
        </div>
        <CloseCookies onClose={handleClose} />
      </div>
    </article>
  );
};
export default Cookies;
