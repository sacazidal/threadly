import Image from "next/image";
import ToggleTheme from "./toggle-theme";

const Translate = () => {
  return (
    <div className="flex items-center gap-x-5">
      <div className="flex gap-x-1">
        <div className="text-xs">RU</div>
        <Image
          src={"/images/locales/ru.webp"}
          alt="ru"
          width={20}
          height={20}
          className="h-auto w-auto"
        />
      </div>
      <ToggleTheme />
    </div>
  );
};
export default Translate;
