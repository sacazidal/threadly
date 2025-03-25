import { navigation } from "@/constants/navigation";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="py-2 px-3">
      <nav className="max-w-screen-2xl mx-auto hidden md:flex items-center gap-x-4 flex-wrap">
        {navigation.map((nav) => (
          <Link
            key={nav.id}
            href={nav.href}
            className="flex first-line::bg-amber-100 gap-x-1 items-center px-3 py-1 rounded-md bg-neutral-200"
          >
            <span className="text-xs text-neutral-900 font-medium">
              {nav.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Navigation;
