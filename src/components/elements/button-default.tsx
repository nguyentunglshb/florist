type ButtonProps = {
  children: React.ReactNode;
};

export const ButtonDefault = (
  props: ButtonProps & React.HTMLProps<HTMLButtonElement>
) => {
  return (
    <button
      className={`bg-white hover:bg-primary text-primary hover:text-white border border-[rgba(51,122,91,0.6)] border-solid rounded-[3px] px-6 py-2 transition h-fit`}
    >
      {props.children}
    </button>
  );
};
