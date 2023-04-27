import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export const BaseButton = (
  props: ButtonProps & React.HTMLProps<HTMLButtonElement>
) => {
  return (
    <button className="bg-black rounded-[50px] px-8 py-4">
      {props.children}
    </button>
  );
};
