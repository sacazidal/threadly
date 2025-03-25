"use client";

import { poppins } from "@/lib/fonts";
import { Button } from "./ui/button";

interface CloseCookiesProps {
  onClose: () => void;
}

const CloseCookies = ({ onClose }: CloseCookiesProps) => {
  return (
    <Button
      onClick={onClose}
      variant={"default"}
      size={"xs"}
      className={`bg-white hover:bg-neutral-200 cursor-pointer text-black text-[9px] md:text-[10px] ${poppins.className}`}
    >
      OK
    </Button>
  );
};
export default CloseCookies;
