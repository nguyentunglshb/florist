import { IconEyeOff, IconEyeOn, IconPlayWhite } from "@/assets";

export enum IconsName {
  ICON_PLAY_WHITE = "icon-play-white",
  ICON_HEART_DEFAULT = "icon-heart-default",
  ICON_EYE_ON = "icon-eye-on",
  ICON_EYE_OFF = "icon-eye-off",
}

export type IconProps = {
  as: IconsName;
};

export const Icon = (props: IconProps) => {
  const { as } = props;

  switch (as) {
    case IconsName.ICON_PLAY_WHITE:
      return <IconPlayWhite />;
    case IconsName.ICON_EYE_ON:
      return <IconEyeOn />;
    case IconsName.ICON_EYE_OFF:
      return <IconEyeOff />;
    default:
      return null;
  }
};
