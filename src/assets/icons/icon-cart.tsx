import { IconProps } from "@/models";

export const IconCart = (props: IconProps) => {
  const { color = "#337A5B" } = props;
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H3.5L5.5 15H16M16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15ZM5.07142 12H17L20 3H3.78571M10 17C10 18.1046 9.10457 19 8 19C6.89543 19 6 18.1046 6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
