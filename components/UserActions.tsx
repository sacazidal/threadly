import { UserActionsProps } from "@/types";

const UserActions = ({ icon: Icon, label, onClick }: UserActionsProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center cursor-pointer"
    >
      <Icon className="md:w-5 md:h-5" />
      <span className="text-xs md:block hidden">{label}</span>
    </button>
  );
};
export default UserActions;
