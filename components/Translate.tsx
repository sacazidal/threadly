import Image from "next/image";

const Translate = () => {
  return (
    <>
      <div className="text-xs">RU</div>
      <Image
        src={"/images/locales/ru.webp"}
        alt="ru"
        width={20}
        height={20}
        className="h-auto w-auto"
      />
    </>
  );
};
export default Translate;
