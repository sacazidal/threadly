import { navOverItems } from "@/constants/overHeader";
import Link from "next/link";
import TakeDiscount from "./TakeDiscount";
import Translate from "./Translate";

const OverHeader = () => {
  return (
    <div className="md:block hidden px-3">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Translate />
        </div>
        <div className="flex items-center gap-x-7">
          <nav className="flex items-center gap-x-7">
            {navOverItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <span className="text-xs hover:underline underline-offset-2">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
          <TakeDiscount />
        </div>
      </div>
    </div>
  );
};
export default OverHeader;
