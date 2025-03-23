import { poppins } from "@/lib/fonts";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="relative w-12 h-12 bg-neutral-200 rounded-sm">
        <Image
          src={"/images/logo/threadly.webp"}
          alt="threadly"
          fill
          className="p-1"
          priority
        />
      </div>
      <h1 className={`${poppins.className} font-bold text-xl`}>Threadly</h1>
    </div>
  );
};
export default Logo;
