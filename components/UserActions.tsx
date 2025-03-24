type IconProps = React.ComponentType<{ className?: string }>;

interface UserActionsProps {
  icon: IconProps;
  label: string;
  onClick?: () => void;
}

const UserActions = ({ icon: Icon, label }: UserActionsProps) => {
  return (
    <button className="flex flex-col justify-center items-center cursor-pointer">
      <Icon className="md:w-5 md:h-5" />
      <span className="text-xs md:block hidden">{label}</span>
    </button>
  );
};
export default UserActions;
