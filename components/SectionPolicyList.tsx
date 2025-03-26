interface SectionPolicyListProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

const SectionPolicyList = ({
  title,
  text1,
  text2,
  text3,
  text4,
}: SectionPolicyListProps) => {
  return (
    <section>
      <h2 className="text-base md:text-xl font-semibold mb-4">{title}</h2>
      <ul className="pl-5 space-y-2">
        <li className="text-sm md:text-base">{text1}</li>
        <li className="text-sm md:text-base">{text2}</li>
        <li className="text-sm md:text-base">{text3}</li>
        <li className="text-sm md:text-base">{text4}</li>
      </ul>
    </section>
  );
};
export default SectionPolicyList;
