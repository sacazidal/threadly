import { poppins } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-x-2">
      <div className="relative w-9 h-9 md:w-10 md:h-10 dark:bg-neutral-200 bg-neutral-800 rounded-sm">
        <Image
          src={"/images/logo/threadly.webp"}
          alt="threadly"
          fill
          sizes="10vw"
          className="p-1 filter invert dark:invert-0"
          priority
        />
      </div>
      <h1 className={`${poppins.className} font-bold text-base md:text-lg`}>
        Threadly
      </h1>
    </Link>
  );
};
export default Logo;
