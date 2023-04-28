import React from "react";
import { Icon, IconsName } from ".";

type ButtonProps = {
  icon?: IconsName;
  children: React.ReactNode;
};

export const ButtonWhiteDefault = (
  props: ButtonProps & React.HTMLProps<HTMLButtonElement>
) => {
  return (
    <button
      className={
        props.className
          ? `rounded-[3px] py-3 flex items-center border border-white ${props.className}`
          : "rounded-[3px] py-3 flex items-center border border-white"
      }
    >
      {props.icon && <Icon as={props.icon} />}
      {props.children}
    </button>
  );
};
