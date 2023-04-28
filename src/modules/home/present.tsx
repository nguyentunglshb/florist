import { IconIndoor, IconOutdoor, IconPot } from "@/assets";

export const Present = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto py-32">
      <div className="w-full flex space-x-[73px]">
        <div className="w-2/5">
          <p className="text-primaryDark text-[36px] font-black leading-[140%] tracking-wider capitalize">
            We Help choose the most suitable plants for you
          </p>
        </div>
        <div className="w-3/5">
          <p className="text-defaultText font-medium text-lg leading-[150%] opacity-80">
            Our selection includes a wide variety of flowers, from classic roses
            to exotic orchids, as well as a variety of lush indoor and outdoor
            plants and also offer unique floral arrangements that are perfect
            for any occasion, whether you're looking to brighten up your home or
            send a thoughtful gift.{" "}
          </p>
        </div>
      </div>
      <div className="w-full flex gap-[6.77777%] pt-20">
        {presentData.map((presentBlock, index) => {
          return <PresentCard key={index} {...presentBlock} />;
        })}
      </div>
    </div>
  );
};

type PresentCardProps = {
  Icon: JSX.Element;
  title: string;
  desc: string;
  filled: boolean;
};

const presentData: PresentCardProps[] = [
  {
    Icon: <IconIndoor />,
    title: "Indoor Plants",
    desc: "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants",
    filled: false,
  },
  {
    Icon: <IconOutdoor />,
    title: "Outdoor Plants",
    desc: "Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.",
    filled: true,
  },
  {
    Icon: <IconPot />,
    title: "Plants Pots",
    desc: "Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor",
    filled: false,
  },
];

const PresentCard = (props: PresentCardProps) => {
  const { Icon, title, desc, filled } = props;

  const colorClassname = filled ? "bg-primary" : "bg-white";
  const textColorClassname = filled ? "white" : "primary";
  const textDescriptionClassname = filled ? "white" : "defaultText";

  return (
    <div
      className={`pt-8 pr-10 pb-14 pl-12 shadow-present flex-1 ${colorClassname} rounded-[10px] border border-solid border-[rgba(0,0,0,0.03)]`}
    >
      {Icon}
      <p
        className={`text-${textColorClassname} font-black tracking-wider text-xl pt-2.5 pb-5`}
      >
        {title}
      </p>
      <p className={`text-${textDescriptionClassname} opacity-80 text-base `}>
        {desc}
      </p>
    </div>
  );
};
