import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center px-4 py-2 rounded-md text-gray-500 bg-white shadow-md hover:shadow-lg ring-1 ring-inset ring-gray-50 focus:outline-offset-0 transition-all duration-200"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
