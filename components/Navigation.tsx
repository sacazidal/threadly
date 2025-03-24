import { navigations } from "@/constants/navigation";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="py-2 px-3">
      <nav className="max-w-screen-2xl mx-auto hidden md:flex items-center gap-x-8 flex-wrap">
        {navigations.map((nav) => (
          <Link
            key={nav.id}
            href={nav.href}
            className="flex gap-x-1 items-center"
          >
            <span className="text-xs">{nav.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Navigation;
