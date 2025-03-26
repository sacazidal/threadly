import Link from "next/link";

const FooterMenuItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="block hover:text-white transition-colors text-xs lg:text-sm"
    >
      {label}
    </Link>
  );
};
export default FooterMenuItem;
