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
      className={`text-[8px] md:text-[10px] ${poppins.className}`}
    >
      OK
    </Button>
  );
};
export default CloseCookies;
