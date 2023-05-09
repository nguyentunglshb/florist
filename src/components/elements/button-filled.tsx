import { Icon, IconsName } from ".";

type ButtonProps = {
  icon?: IconsName;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export const ButtonFilled = (props: ButtonProps) => {
  const {
    icon = null,
    children,
    className,
    type = "button",
    onClick = undefined,
  } = props;
  return (
    <button
      className={
        className
          ? `rounded-[3px] py-3 flex items-center bg-primaryDark ${className}`
          : "rounded-[3px] py-3 flex items-center bg-primaryDark"
      }
      type={type}
      onClick={onClick && onClick}
    >
      {icon && <Icon as={icon} />}
      {children}
    </button>
  );
};
