import { IconPlayWhite } from "@/assets";

export enum IconsName {
  ICON_PLAY_WHITE = "icon-play-white",
  ICON_HEART_DEFAULT = "icon-heart-default",
}

export type IconProps = {
  as: IconsName;
};

export const Icon = (props: IconProps) => {
  const { as } = props;

  switch (as) {
    case "icon-play-white":
      return <IconPlayWhite />;
    default:
      return null;
  }
};
