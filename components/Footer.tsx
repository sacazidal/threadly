import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-3 bg-neutral-950">
      <div className="max-w-screen-2xl mx-auto flex gap-x-5 justify-between">
        <div className=""></div>
        <nav className="flex flex-col">
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Help</Link>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
