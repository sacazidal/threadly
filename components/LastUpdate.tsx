const LastUpdate = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-center">
        {title}
      </h1>
      <p className="text-sm text-neutral-500 mb-4 md:mb-8 text-center">
        Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
      </p>
    </>
  );
};
export default LastUpdate;
