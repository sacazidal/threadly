import Link from "next/link";
import { Facebook, Instagram, TwitterIcon } from "lucide-react";
import FooterMenu from "./FooterMenu";
import { company } from "@/constants/company";
import FooterMenuItem from "./FooterMenuItem";
import { helper } from "@/constants/helper";
import { policy } from "@/constants/policy";
import { poppins } from "@/lib/fonts";
import SendMail from "./SendMail";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-gray-300 py-8 lg:py-12 mt-10">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4 lg:mb-8 text-center md:text-start">
          <div className="space-y-4">
            <h2
              className={`text-lg lg:text-xl font-bold text-white ${poppins.className}`}
            >
              Threadly.
            </h2>
            <p className="text-xs lg:text-sm">
              Современный маркетплейс модной одежды. Мы объединяем лучшие бренды
              и дизайнеров в одном месте.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          <FooterMenu title="Компания">
            {company.map((comp) => (
              <FooterMenuItem
                key={comp.id}
                href={comp.href}
                label={comp.label}
              />
            ))}
          </FooterMenu>

          <FooterMenu title="Помощь">
            {helper.map((help) => (
              <FooterMenuItem
                key={help.id}
                href={help.href}
                label={help.label}
              />
            ))}
          </FooterMenu>

          <div className="space-y-3">
            <h4 className="text-white font-medium text-sm lg:text-base">
              Подписка
            </h4>
            <p className="text-xs lg:text-sm">
              Подпишитесь на рассылку и получите 10% скидку на первый заказ
            </p>
            <SendMail />
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-4 lg:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs lg:text-sm">
            © {new Date().getFullYear()} Threadly. Все права защищены.
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center sm:space-x-6 mt-4 md:mt-0">
            {policy.map((pol) => (
              <FooterMenuItem key={pol.id} href={pol.href} label={pol.label} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
