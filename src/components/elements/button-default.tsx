type ButtonProps = {
  children: React.ReactNode;
  className: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export const ButtonDefault = (props: ButtonProps) => {
  const { children, className, type = "button", onClick } = props;
  return (
    <button
      className={`bg-white hover:bg-primary text-primary hover:text-white border border-[rgba(51,122,91,0.6)] border-solid rounded-[3px] px-6 py-2 transition h-fit ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
