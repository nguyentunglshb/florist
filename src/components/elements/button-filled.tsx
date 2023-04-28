import { Icon, IconsName } from ".";

type ButtonProps = {
  icon?: IconsName;
  children: React.ReactNode;
};

export const ButtonFilled = (
  props: ButtonProps & React.HTMLProps<HTMLButtonElement>
) => {
  return (
    <button
      className={
        props.className
          ? `rounded-[3px] py-3 flex items-center bg-primaryDark ${props.className}`
          : "rounded-[3px] py-3 flex items-center bg-primaryDark"
      }
    >
      {props.icon && <Icon as={props.icon} />}
      {props.children}
    </button>
  );
};
