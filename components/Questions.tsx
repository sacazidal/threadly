import Link from "next/link";

const Questions = ({ fragment }: { fragment: string }) => {
  return (
    <div className="pt-4 md:pt-8 border-t dark:border-gray-200 border-gray-900">
      <p className="text-sm md:text-base">
        Если у вас есть вопросы относительно {fragment}, пожалуйста, напишите
        нам на
        <Link
          href="mailto:privacy@threadly.com"
          className="hover:underline ml-1 text-amber-700 font-bold"
        >
          privacy@threadly.com
        </Link>
        .
      </p>
    </div>
  );
};
export default Questions;
