import { FooterMenuProps } from "@/types";

const FooterMenu = ({ children, title }: FooterMenuProps) => {
  return (
    <div className="space-y-3">
      <h4 className="text-white font-medium text-sm lg:text-base">{title}</h4>
      <nav className="space-y-2">{children}</nav>
    </div>
  );
};
export default FooterMenu;
