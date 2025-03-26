const SectionPolicy = ({ title, label }: { title: string; label: string }) => {
  return (
    <section>
      <h2 className="text-base md:text-xl font-semibold mb-4">{title}</h2>
      <p className="text-sm md:text-base">{label}</p>
    </section>
  );
};
export default SectionPolicy;
