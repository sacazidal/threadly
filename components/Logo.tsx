import { poppins } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-x-2">
      <div className="relative w-8 h-8 md:w-10 md:h-10 bg-neutral-200 rounded-sm">
        <Image
          src={"/images/logo/threadly.webp"}
          alt="threadly"
          fill
          className="p-1"
          priority
        />
      </div>
      <h1 className={`${poppins.className} font-bold text-sm md:text-lg`}>
        Threadly
      </h1>
    </Link>
  );
};
export default Logo;
