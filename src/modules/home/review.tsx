import { avatar, reviewMask1 } from "@/assets";

export const Review = () => {
  return (
    <div className="w-full py-16">
      <p className="text-center capitalize text-primaryDark tracking-wider font-black text-4xl pb-9">
        What do they say about us
      </p>
      <div className="w-full max-w-screen-lg mx-auto flex space-x-[5%]">
        {reviewCardData.map((card, index) => {
          return <ReviewCard {...card} key={index} />;
        })}
      </div>
    </div>
  );
};

type ReviewCardProps = {
  avatarUrl: string;
  name: string;
  desc: string;
};

const reviewCardData: ReviewCardProps[] = [
  {
    avatarUrl: avatar,
    name: "Jessica Watson",
    desc: "“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”",
  },
  {
    avatarUrl: avatar,
    name: "Kate Szu",
    desc: "Great service, beautiful flowers, timely delivery. Highly recommend.",
  },
  {
    avatarUrl: avatar,
    name: "Grace ",
    desc: "I am very happy with my purchase from this website, the plants were healthy and arrived on time.",
  },
];

const ReviewCard = (props: ReviewCardProps) => {
  const { avatarUrl, name, desc } = props;
  return (
    <div className="p-[5.05%] flex-1 rounded-[10px] bg-[#F8F8F8] relative">
      <img
        src={reviewMask1}
        className="absolute top-1/2 w-1/2 opacity-[0.05] right-0"
      />
      <div className="flex space-x-5 items-center">
        <div className="w-16">
          <img src={avatarUrl} alt="avatar" />
        </div>
        <p className="text-primaryDark font-black text-xl ">{name}</p>
      </div>
      <p className="pt-8 font-medium text-base leading-[24px] opacity-80">
        {desc}
      </p>
    </div>
  );
};
