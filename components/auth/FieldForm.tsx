import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FieldFormProps } from "@/types";

const FieldForm = ({
  label,
  recovery,
  value,
  onChange,
  type,
  id,
  placeholder,
}: FieldFormProps) => {
  return (
    <div className="grid gap-1">
      <div className="flex items-center">
        <Label htmlFor={id} className="text-xs md:text-sm">
          {label}
        </Label>
        {recovery}
      </div>
      <Input
        id={id}
        name={type}
        type={type}
        placeholder={placeholder}
        className="dark:border-neutral-700 h-8 md:h-9 text-xs md:text-sm placeholder:text-xs md:placeholder:text-sm"
        value={value}
        onChange={onChange}
        autoComplete="on"
      />
    </div>
  );
};
export default FieldForm;
